---
layout: page
title: 'WAIT 3'
author: Stuart
---

## Overview

This is a more technical account of the embedded small language model
work that [I have described here](/stories/embedded.md), to help me 
cover the testing aspects for WAIT 3. That earlier page is worth a
read, as is [this video of the built hardware](/projects/quotes.md).

In the rest of this account, I'll go through the main steps.

## Training

First, we need to train a model. I can talk about the data curation
at immense length, because it was pretty hard to find good data that 
was ethical to use. There was a good amount of both automated and 
manual cleaning.

The the training code is in this repository:
[https://github.com/morungos/text-generation](-
https://github.com/morungos/text-generation) (which is private) but I am happy
to add folks that are curious.

Training commands are more or less as follows:

```bash
cd ~/git/text-generation
source .venv/bin/activate

python3 pytorch-rnn.py train --input data/shuffled-names.txt \
  --max_epochs 400 --embedding_size 84 --rnn_size 128 --num_layers 2 \
  --dropout 0.2 --generate 128
```

While that is running, we can graph the output:

```bash
node --loader ts-node/esm lib/service.ts \
  --file /Users/stuart/git/text-generation/checkpoints/20240628-113204/training.log.csv
```

The run timestamp is shown at the start of training, and the run generates a CSV
file as it goes, as well as a summary JSON data with the vocabulary. We'll come 
back to these later. Anyway, with these in place we can visually keep an eye 
on training. 

We can peek at training as it runs, and have a look at the performance of each
model for a quick check:

```bash
python3 pytorch-rnn.py predict \
  --init_from checkpoints/20240628-113204/checkpoint.117.pt \
  --temperature 0.9 --top_p 0.95 --top_k 10 --generate 500 
```

## Validation

I'm probably unusual being a cognitive and social scientist as well as an AI
person, so I tend to think about the whole process of getting a model that's 
good enough through language that might be unusual for testing. Anyway, here
goes.

First off, a model is a *model*. It will never be perfect, but that doesn't 
necessarily matter. What we want here is something that captures the rhetorical
and cultural flavour of quotes. So bias and oddity is complete okay, welcome in
fact. There's a strong satirical aspect to this project, so magnifying those biases
is not necessarily an issue. So, if I was trying to generate names for other purposes,
I would definitely aim to reduce gender and cultural biases. Here, not so much. 

In other words, most of what I want is prima facie validity -- do these names look
valid?

We can check that by throwing any checkpoint into a generation engine, here we're
still within the training world, so it's we use the same `predict` command. 

The three main generation parameters are all worth assessing at this stage. They
aren't part of training, so we can change those later if we like. But they do 
affect the prima facie validity, so they're worth playing with. 

So we do a lot of comparisons like this, which shows the texts from four different
values of the temperature setting. Note that temperature does make the model behaviour
much more conservative, emphasizing the typical in the data set. We want some of that, 
but not too much, so there is a bit of judgement here. Also, remember, we might easily
generate a lot of different models, exploring the topology of the network, and that also
has an effect here. And lower temperatures get boringly repetitive. 

| t = 0.3 | t = 0.6 | t = 0.9 | t = 1.2 |
|---------|---------|---------|---------|
| Alfred Martin  |  Martin Macley  | David Lawrence | Simon Sprestrop |
| Robert Maria Maria Morgan  |  Alfred Hayden  | Robert Casey | Mark Greene |
| John Berger  |  Randall Carter  | Sudan Lavali | Joseph Perez Humph |
| John McCarthy  |  Anthony Harrison  | Sathani Pontor | George Samuel Moodares |
| John Harris  |  Robert Morgenthel  | Alexander Bartell | James Marie Brewster |
| John Mackentin  |  John MacKennan  | Thomas Bowen | Joseph Pelriers |
| Robert Maria Carter  |  Anna Bartens  | Sean Laurent Hein | Arthur Woodhan Grahman |
| James Bonner  |  David Walter  | John Clark | Max Lewis |
| Mark Bond  |  Robert Howard  | Steven Hancker | Ernest Steele |
| John Bernard Barrow  |  James Mark Stevenson  | Mike Henry Winson | Greg Cheram |
| Alexander Maria Martin  |  Charles Moore  | Alan Seinard | Menissi Khan Carter |
| Andrew Barrett  |  Christopher Shering  | Mark Moore | Robert West |
| James Carlos Bonner  |  Suzanne Baldwin  | Adon Stein | Giovanni Cole |
| Margaret Wallace  |  Alexander Collins  | John Harlan | Cole Montorosska |
| John Harris  |  Richard Storse  | Sergei Milico | Adoni Costell |
| Alexander Collins  |  John Shelder  | Douglas Cronstein | Rafael Millson |
| John Dorther  |  John B. Martin  | Mary Howard Condon | Ernest Maris Lange |
| Alexander Stevens  |  Andrew Leon  | Steve Hopley | Christian Sanders |
| John Harrison  |  John H. Collins  | Christopher Beck | Gordon McNolan |

## Risks

It's always worth thinking about risks. The worst, here is, that these kinds of
models can literally generate racist epithets -- even when there are none in the
training data. That's because it's a character-based model. 

## Production

When we are relatively happy with our chosen model checkpoint, and our values of
the generation parameters, we can move the model into our production on the Pico.

Note that the Pico is quite small -- everything has to fit in 2Mb. There are two
separate models, and with each float being 4 bytes, that puts an absolute ceiling 
for the combined models at around 450,000 weights. The name model is very much
smaller, helpfully, as the context is tiny by comparison.

Anyway, back to productionizing. Our first step is to convert the model from 
PyTorch to ONNX. 

```bash
python3 pytorch-rnn.py export \
  --init_from checkpoints/20240628-113204/checkpoint.102.pt \
  --export_file output.onnx 
```

We should check that the ONNX model seems reasonable. This means creating a JSON
model descriptor file, that looks a bit like this:

```json
{
  "filename": "./names-wait.onnx",
  "type": "lstm",
  "sequenceLength": 64,
  "temperature": 0.95,
  "top_p": 0.8,
  "top_k": 24,
  "hiddenSize": 128,
  "hiddenLayers": 2,
  "vocabulary": "\n ',-.0124ABCDEFGHIJKLMNOPQRSTUVWXYZ]abcdefghijklmnopqrstuvwxyz"
}
```

These values are generally needed to make data structures that are the right size
to run the model. The vocabulary is also key: it maps outputs into characters, and
we need to make sure it agrees with the training setup. All of these files are 
generated by our small training process.

When we have done all this, we can use JavaScript ONNX to run the model:

```bash
pnpm run evaluate --length 512 --temperature 0.3 --top-k 20 --model models/names-wait.json
```

Again, we can play with temperature values here, and so on. 

ONNX here is great because we are now free from running Python on our servers and 
devices. This is good, as generally I'd consider any exposed Python process as a 
security risk. The standard ONNX runtime is C, with some JavaScript bindings, but
there are all sorts of options here -- including running the inference on embedded
devices, iOS. tvOS, and so on, all of which really really hate Python.

When we are happy with out model's performance, we can move forward to deploy in C.

For this, we used [[kraiskil's](https://github.com/kraiskil) excellent
[`onnx2c`](https://github.com/kraiskil/onnx2c) compiler). That reads the ONNX file
and generates a basic C file, containing the functions you'd need to run inference.
Of course, stuff like the vocabulary is missing from the ONNX file -- actually, so 
is the sampling process where we use our `temperature`, `top_p`, and `top_k`, so 
all of these have to be plugged in wrapping code or some data model description.

```bash
onnx2c models/names-wait.onnx > models/names-wait.c
```

It's worth having a peek at that C file.

Now we can wrap all this into a C program and run it. 

## Moving towards the device

Before we go all-in on running the model on a device, I usually start with a
smaller setup, running the model and simply writing to the console. This is more
or less identical to what we did before, with our `pnpm run evaluate` command 
above, except this time we use C. 

Implementation is C, using the Pico SDK. Build is using `cmake`, and works like
this:

### For the Pi

```bash
cd quotes-wait
mkdir build
cd build
cmake -D BUILD_PICO=OFF ..
make
```

Then you can start the C program by `./quotes` -- it should behave the same as
the JavaScript ONNX. 

### For the Pico

```bash
cd quotes-wait
mkdir build
cd build
cmake -D BUILD_PICO=ON ..
make
```

This creates a file, `quotes.uf2`, which can be installed on the Pico microcontroller.
That works by holding down the small BOOTSEL button when plugging in the USB cable.
That spins up a removable drive, and you can drop the `quotes.uf2` file into that
drive. When you do, the microcontroller reboots and starts running. You can see what
is going on by tracking the serial output:

```bash
python -m serial.tools.miniterm
```

It'll detect the port, and away you go.

### Issues with `onnx2c`

During these stages, we encountered a significant issue with `onnx2c`. The ONNX 
models in JavaScript behaved identically to the original in PyTorch, more or less.
But the C model did not. 

[I reported the issue here](https://github.com/kraiskil/onnx2c/issues/12).

This is one of the hazards of AI -- you are often relying on a fairly intricate 
library of operators. This bug was literally only visible through manual code
inspection -- there is a test suite for ONNX, and it was passing, because 
the models didn't really assess the affected operator enough.

### Wrapping up

I am not going to go into much detail about the other embedded code issues. 
There were some, especially with the e-ink display. But they had nothing much
to do with the AI code, and they were very easy to resolve because thanks 
to the C code being well-architected, I could entirely stub the AI. 