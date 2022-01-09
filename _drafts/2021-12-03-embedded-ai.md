I’m working on a small project which involves building a physical object with
embedded AI, a small language model to be exact. So, the question is, is it
possible to take a language model and drop it into a self-contained
microcontroller?

The answer is yes, and I’ll show you how.

First, a couple of caveats. Even though the language model is very small (by language model standards),
it’s still a couple of hundred thousand parameters, and even for the biggest
microcontrollers, such as the Raspberry Pi Pico and the Arduino Nano 33 Sense,
memory limits are tight. The Pico has 2Mb of flash memory, and 256k of RAM, so
there is not a whole lot of room to breathe. But it is doable, even without
resorting to tricks like quantizing. Quantizing to shrink a model like this
by around 75% should be straightforward, and will also run faster without
floating points.

Second, there are platforms like Tensor RT and TinyML which can also deploy
models, although usually nothing with the complexity of a recurrent language
model.

Instead, I’m going to use ONNX, which is my preferred approach for
embedding models into production. I can take my model, export it as an ONNX
file (which is a protobuf encoding) and then run it in JavaScript, or C#, using
one of the many excellent runtimes. This is particularly good for mobile
devices, because these runtimes usually embed device-specific performance
enhancements. It's also great for privacy, as your models can be embedded in
browsers or devices, rather than on cloud servers, i.e., we can take the model
to the user rather than the other way around.

However, for a microcontroller, which mostly doesn’t even have a file system,
this is still a heavy burden. So instead, I’ll go through how you can use the
excellent onnx2c compiler to translate an ONNX model into C source code that
you can simply drop into your project.

Let’s get started. First of all, I’m using a Pico, so we need to get set up
with a C environment to deploy. We also want some kind of a console to get
logging information off the device. Eventually, the language model will be
connected to peripherals, but I don’t want to spoil the surprise, and you can
always do that yourself. Also, I generally prefer cmake to IDE-based build
processes.

For a serial log, the Pico supports SWD, so I’ve wired it to a Raspberry Pi as
an easy way to log the output.

Now, for the model. This isn’t a trivial model. It’s using an embedding layer,
a two-layer LSTM network, and an output layer. In this case, the model is
generative, so the output normally goes through softmax to choose characters
from the vocabulary, but here we’ll implement that outside the model itself, as
is commonly done in character-level generative models. Anyway, we trained up
the model, and then choose our favourite checkpoint, and export it using
PyTorch, being careful to use opset 10 because some of the older opsets

The general process is as follows:

1. Build and train your model
2. Export the model to ONNX
3. Compile the ONNX model to C (using opset 10)
4. Integrate with the rest of your C code
5. Deploy

Because this is C, we can actually run the C on a standard computer, too. We 
don't need to worry about microcontrollers to begin with. 

## 1. Build and train your model

I won't go into this in too much detail. I've used PyTorch, because I prefer it
over TensorFlow. The model is pretty standard:

 * An embedding layer
 * A multilayer LSTM
 * An output layer

To give you some sense of size, I've got a vocabulary size of around 70, so 
I have an embedding layer of size 72, a two-layer LSTM of size 96, and it's
generative, so the output is also 70. Using floats this is:

Embedding: 1-1                         [8, 96, 72]               5,112
LSTM: 1-2                              [8, 96, 96]               214,272
Linear: 1-3                            [768, 71]                 6,887
==========================================================================================
Total params: 226,271
Trainable params: 226,271
Non-trainable params: 0
Total mult-adds (M): 169.89
==========================================================================================
Input size (MB): 0.02
Forward/backward pass size (MB): 1.47
Params size (MB): 0.91
Estimated Total Size (MB): 2.40

The params end up in flash, which on a Pico is 2Mb, so at four bytes per float, we get
1Mb for all the params. So even this small model soaks up 50% of the whole thing. But this
is not at all optimized, and quantizing with PyTorch down to use bytes is pretty simple, bringing
the size down by around 75%, well within scope.

The memory demands are much smaller than this suggests. This is all based on a bigger
batch size. In fact, the state is 6 * 96 floats, so around 2k. And there's one for input, one for
output, and a bunch of intermediates. onnx2c doesn't really do much variable folding -- and it
could -- but again, we're still fairly comfortably in the Pico RAM limit of 256k. 

When you have a model that gives you the performance you want, and is likely to fit in memory,
we can move on to ONNX.

## 2. Export the model to ONNX

PyTorch makes it pretty easy to export a model to ONNX. See: https://pytorch.org/docs/stable/onnx.html
There are plenty of caveats, but none of them are particularly problematic. The output graph 
shows what operators are needed, and how they are linked together, and `onnx2c` more or less
translates this into a big C routine with functions for each step, and variables for the data
values.

There are also tools to check the model at this stage. And you can run it using any of the 
runtimes. I've used the Microsoft one most, because it has an excellent JavaScript variant,
so its easy to deploy on a vanilla Node.js server or even in a browser. Personally, I feel
very much more confident deploying on a server that isn't running Python, because it removes
a crap ton of security risks. JavaScript's sandboxing is far better. 

Anyway, at the end this you have a `.onnx` file, which is where we can move onto the next step.

## 3. Compile the ONNX model to C

The key tool here is: https://github.com/kraiskil/onnx2c. It's a C program, so you'll need to
build it, but it isn't especially onerous. I've run it fine on a Mac and a Raspberry Pi 
-- if you see an error about `ParseFromIstream` you can do what I didn't, which is to read
the `README.md` and remove the line that breaks older protobuf libraries. 

This gives you a small C command that you can run on your `.onnx` file and which generates
a C file with very few requirements. In my case, almost all that was needed was `memcpy()`, 
although it also sets a few macros which might be better namespaced. In fact, it also 
always generates a function `entry`, and it might be nice to have that option-settable too. 
Otherwise, you'll simple need to edit your C code.

