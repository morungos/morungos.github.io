---
layout: post
title: 'Atificial intelligence: Big Science or bricolage'
author: Stuart
background: '/img/posts/angry-cat-laptop.jpg'
summary: |-
  
image: '/img/posts/angry-cat-laptop.jpg'
image_description: ""
---

Artificial intelligence is a field with an identity crisis. Despite being
over sixty years old, it is struggling to establish a coherent self-image.
Is it a science, aiming to tackle the big questions about human behaviour
and experience? Or is it a more practically-oriented engineering 
discipline, driven to build technology that can transform the world we live in? 

Today, much of modern artificial intelligence looks like Alvin Weinberg's "Big Science" 
[(Weinberg, 1961)](https://www.science.org/doi/10.1126/science.134.3473.161). 
A Big Science follows the pattern of Lawrence's 
[Berkeley National Laboratory](https://en.wikipedia.org/wiki/Lawrence_Berkeley_National_Laboratory).
It is driven by large-scale funding, into the billions of dollars from 
both public and private sources. It is tightly integrated into the foundational
economic connections of the day (in the case of BNL, the mid-20th century military-industrial complex).
When we look at organizations like OpenAI, Google Brain, and even Palantir, we can see
the family resemblance. And governments see their Big Science investments in
artificial intelligence as sources of national pride and international competitiveness.

The hallmarks of this new Big Science version of artificial intelligence are, immense teams, 
immense goals, and immense funding. GPT-3 and its analogues 
reflect their origins in Big Science. And it's not alone. OpenAI's GPT-3 and DeepMind's AlphaFold papers have over
thirty authors each, and acknowledges many more, including entire teams and communities.
This is very typical of Big Science.[^BigScienceAuthors]

[^BigScienceAuthors]:
    These author lists are tiny by the scale of some Big Science projects. 
    [The current record is a physics paper with 5,154 authors](https://www.nature.com/articles/nature.2015.17567).

Big Science transforms the way science is done. You can't try stuff and 
see what happens. Even getting the point of starting an experiment may cost
millions, so you need solid guidance before you take that step. GPT-3, 
for example, cost over 
[$10 million for a single run](https://towardsdatascience.com/the-future-of-ai-is-decentralized-848d4931a29a). 
AlphaFold, similarly, at cost price, would be around 
[$7 million](https://venturebeat.com/2020/11/30/deepmind-claims-its-ai-can-predict-how-proteins-will-fold-with-state-of-the-art-accuracy/#:~:text=DeepMind%20declined%20to%20reveal%20the,to%20about%20%24688%2C128%20per%20week.) 
for training compute alone.
At that scale, you need to know it's going in the right direction before you 
press the start button.

In Table 1 below, I've sketched out the characteristics that distinguish a Big Science approach from
a Little Science one. Of course, these are somewhat stereotyped. In practice, there is a
big blurry area between them -- although there's evidence of a
[long-term drift towards a 'Big Science culture'](https://www.degruyter.com/document/doi/10.7312/pric91844/html?lang=en) 
in many STEM fields, such that a large proportion of 
the work is pulled in that direction. Funding calls today may be focused on grand challenges, 
for example, or the creation of collaborative networks. 

| "Big Science"  | "Little Science" |
|-----------|----------|
| Centralized | Distributed |
| Collaboration-centred | Individual-centred |
| Integrated into the economy | Independent from the economy |
| High brand value | Low brand value |
| > $1B funding | Modest funding |
| Grand challenges | Targeted questions |
| Planned | Responsive |
| Communication by press release | Communication by academic article |
| Applied research | Pure research |
| Attitude of confidence, belief | Attitude of skepticism, questioning |
| Consequentialist ethics | Virtue ethics |
| Guided by theory | Guided by experiment |
{:.w-100}

**Table 1. Characteristics of Big Science and Little Science**
{:.text-muted.}

The problem is: Big Science does not always work, and even when it does, it does not always function
like a good science. As Weinberg (one of the founders of Big Science initiatives)
put it:

> "The inevitable result is the injection of a journalistic flavor into Big
> Science which is fundamentally in conflict with the scientific method. If the
> serious writings about Big Science were carefully separated from the
> journalistic writings, little harm would be done. But they are not so
> separated. Issues of scientific or technical merit tend to get argued in the
> popular, not the scientific, press" 
> [(Weinberg, 1961)](https://www.science.org/doi/10.1126/science.134.3473.161). 

Is this happening with artificial intelligence today? I believe so. Many of the
characteristics in Table 1 are widespread. But in addition to that, there are
quite a few initiatives that appear to the model almost exactly. Here are the ones
that I first thought of:

 * [OpenAI](https://openai.com/), founded in 2015 by, among others, Elon Musk, Sam Altman,
   and Peter Thiel. OpenAI's actual intent is hard to assess: originally 
   it claimed to "democratize" AI to mitigate technological risks, but it 
   has since pivoted to a for-profit model and closed models. OpenAI is closely integrated 
   with both academic work (like Stanford's "foundational models") and corporate
   research centres in Big Tech companies like Google and Facebook.
 * [Alphabet's AI work](https://ai.google/) is perhaps the hardest to classify, because
   there is an interlocking network of semi-autonomous corporations, e.g., DeepMind, and more 
   academic groups, e.g., Google Brain. Also, Google being Google, it is 
   extremely hard to identify a strategy beyond "let's build stuff and see what sticks".
   Those differences aside, it's definitively a Google-ified version of Big Science.
   DeepMind was acquired by Google in 2014, and Google's AI division dates to 2017.
 * [IBM Watson](https://www.ibm.com/watson), building on IBM's competitive
   chess and Jeopardy, Watson was launched as an IBM business in 2014 with
   $1B of funding and several thousand employees. Watson is perhaps most intriguing
   as it 'evolved' from GOFAI to ML, and integrates both.

*[Note: There's a fair case for considering Japan's "Fifth Generation Computer" project
from 1982 to 1992 as another Big Science project broadly in the field of AI,
albeit based on an earlier version of the field.]*

Given that the defining features of true Big Science are: collaboration, grand scale, and 
immense funding, it seems reasonable to assert that, in these organizations at least, 
artificial intelligence is converging onto to a Big Science model. And it is also worth 
looking at the timeline here. The shift -- if there was a shift to a Big Science version 
of artificial intelligence -- appears to date to around 2014, give or take. 

So, how did we get there? What caused these fundamental shifts in the nature
of artificial intelligence.

## Kuhn's model: AI winters and paradigm shifts

Most of the people writing about how science -- any science -- works, inevitably start with (and 
usually finish with) Thomas Kuhn's 
[*The Structure of Scientific Revolutions*](https://press.uchicago.edu/ucp/books/book/chicago/S/bo13179781.html),
a classic in the philosophy of science. A flawed classic, but a classic nevertheless.

Note that Kuhn’s topic was *scientific revolutions*, not everyday science. He drew an explicit
parallel to a (political) revolution. According to Kuhn, sciences go through a kind
of lifecycle, and eventually come to a point where they stagnate, because they don't
have the concepts and methods they needed to progress. When this happens, there's a kind of crisis,
and the "scientific revolution" resolves that crisis by replacing the old paradigm
with a new one, one which has different concepts and methods, and can continue to
explore the field.

And this brings me to the second point people invariably make when writing about
artificial intelligence: "AI winters". One of the more notable features of 
artificial intelligence as a science have been the occasional stalls, 
often called "AI winters", where funding and progress seemed to recede. To date, 
there have been two substantial AI winters, from around 1973 to 1980, and from 
1987 to the mid 1990s. 

A common account is that AI winters were, essentially Kuhnian
crisis points. 
[Thomas Goldstein argued it: "So how did the AI winter end? It didn't! We just gave up"](https://twitter.com/tomgoldsteincs/status/1484609273162309634).
Others, such as 
[Drew McDermott](https://www.aaai.org/ojs/index.php/aimagazine/article/view/494/430), 
have described them more as cyclical, driven by hype and disillusionment.
And [Melanie Mitchell](https://arxiv.org/pdf/2104.12871.pdf)
accepts both hype cycles and a fundamental shift to deep learning circa 2010.

James Lighthill, whose 1973 report arguably precipitated the first AI 
winter, did not describe it as cyclical, but certainly used language 
suggestive of a crisis: "it is unrealistic to expect highly generalised 
systems that can handle a large knowledge base effectively in a learning 
or self-organising mode to be developed in the 20th century" 
[(Lighthill, 1973)](http://www.chilton-computing.org.uk/inf/literature/reports/lighthill_report/p001.htm).

None of these accounts mention Kuhn explicitly, and McDermott's cyclical pattern
doesn't fit Kuhn's model. But, the apparently-permanent shift to machine learning does, and so 
does Lighthill's commentary. Goldstein's narrative, in particular, is extremely Kuhnian,
and he was presenting to the National Science Foundation.
So I think it is fair to say that the shift from what 
[John Haugeland called "Good Old Fashioned AI"](https://direct.mit.edu/books/book/4347/Artificial-IntelligenceThe-Very-Idea)
(GOFAI)[^GOFAI] to machine learning was interpreted by many a Kuhnian paradigm shift.

[^GOFAI]:
    Haugeland's term here is a nice label
    for the primarily symbolic approach to artificial intelligence that 
    dominated from the 1960s to the 1990s. 

As an aside, I'll add that I don't think this particular shift was purely scientific.
It is notable that both major AI winters corresponded with global recessions: the first with
a global oil crisis and a Wall Street crash, and the second with Black Monday.
So both occurred during periods of global economic retrenchment, and it makes
sense that investments that were not perceived as delivering enough value were 
cut. Economics will, inevitably, play a huge rule in the value judgements in
deciding whether or not there is a crisis in the first place.

So let me tell this as a story about the transformation of artificial intelligence into a Big Science.

> **Story 1**. After about three decades of research, Good Old Fashioned AI (GOFAI) entered  
> a crisis over the effort involved in building systems. It was simply too expensive to manage the 
> knowledge. This required a Kuhnian paradigm shift. That shift was towards by a machine-learning-based
> approach, which overcame the knowledge problem. The new, machine learning paradigm for 
> artificial intelligence, *enabled* a Big Science version of artificial intelligence to get 
> under way. The AI winter was a crisis and GOFAI 
> was replaced in a *revolutionary* paradigm shift to machine learning.

But let's look at Story 1 in detail. First off, there's a problem with the
timeline. The second AI Winter peaked around 1990, but the paradigm 
shift dates to, maybe if we are generous and pin it on the AlexNet paper, around 2012. 
A gap of twenty two years. That's a long time for a revolution. And we
can't claim that machine learning wasn't already around: it was literally driving
commercial products in the 1990s. The paradigm shift (if such it was) was *not* triggered by the
crisis, but by something else. So, what did happen in the 2010s that laid
the foundations for it?

The second problem with Story 1 is that it can't explain any Big Science at
all. Big Science can *scale* a research tradition, but it can't create one.
All the fundamental methods and assumptions need to be in place, before it can assemble
the funding necessary to go large. For example, you couldn't get funding for 
NASA if you didn't know it was possible to launch some kind of a rocket
into orbit (NASA was re-constituted as a space agency a year after the launch
of Sputnik 1). 

## Laudan's model: evolving research traditions

The problem with a Kuhnian account is that it denies the possibility of any
kind of *evolution* in a science. There's essentially two states: stability 
and crisis. In practice, this is why more sophisticed philosophers of science,
like Larry Laudan, use more nuanced models.

[Barbara Von Eckardt's excellent "What is Cognitive Science?"](https://mitpress.mit.edu/books/what-cognitive-science) 
builds on Laudan's work to map out a different model. In this model, sciences are 
driven by a community following one of several possible research traditions. 
Because a research tradition (which is a set of methods and related assumptions)
can *evolve*, sciences can progress without going through a crisis. 

*[Note: "What is Cognitive Science?" is excellent, but a tough read, because it 
is extremely precise. Every word matters. I wouldn't recommend it unless 
you need a definitive account of the structure of the science, but if you do: 
it's a strong and valuable foundation.]*

Von Eckardt's modified version[^VonEckardt] of Laudan's original structure is as follows:

1. A scientific community SC desires goal G (e.g., to explain some phenomena D)
2. The research traditions currently available to SC are RT1, RT2 ... RTn
3. The domain of a selected RT corresponds roughly to D
4. Any applied RT is not foundationally flawed (its foundational assumptions are not 
   unsound, untrue, or without sufficient conceptual resources to explain G)

[^VonEckardt]:
    Von Eckardt's primary modification from Laudan's is to drop one factor, whether or not
    a chosen tradition is required to have a higher rate of progress than the others. 
    This makes sense, and also explains why empirical and theoretical communities 
    could exist, side by side. 

According to this model, artificial intelligence could accommodate
multiple communities, using different research traditions, even for the same 
goal. Machine learning and GOFAI could co-exist, but, for the most part, not
within the same scientific community at the same time.

This certainly happened in the interregnum between 1990 and 2010. 
Artificial intelligence, even GOFAI, was 
[not dead yet](https://memes.getyarn.io/yarn-clip/b0983867-bc6d-4bb8-a89e-1dee600ebbdf/gif). 
And alongside it there was, in particular, plenty of work in evolutionary computing.
Early versions of word embeddings 
[(Deerwester et al.'s 1988 "latent semantic analysis")](https://www.semanticscholar.org/paper/Improving-information-retrieval-using-latent-Deerwester-Dumais/70380dfd9b5e3ea1148471bf7449c1380d62c6d9)
were growing. 

So let's revise our story.

> **Story 2**. After about three decades of research, the scientific community centred around one 
> research tradition, Good Old Fashioned AI (GOFAI) hit a problem. The effort involved in building 
> systems was becoming uneconomic. It was simply too expensive to manage the knowledge. 
> One of its foundational assumptions, that it was economically viable to capture
> and use knowledge to build applications, was found to be false. Other research
> traditions, not incorporating this assumption, were less affected. Accordingly, 
> the GOFAI community evolved, in various ways. One new community embraced the problem, 
> and branched into *knowledge management*[^KM], including early *recommender systems*.
> Another related branch focused in improving methods, developing methodologies like 
> [CommonKADS](https://commonkads.org/). Over time, machine learning techniques, 
> particularly those that assisted knowledge acquisition, became an established part of
> those evolved research traditions, and GOFAI simply faded out.

[^KM]:
    The timing here is significant. The dramatic growth in knowledge management started
    *exactly* as the 'AI winter' was hitting its height, between 1990 and 1993. And 
    the central assumption of knowledge management was that *knowledge is expensive*.
    The change in foundational assumptions coincides perfectly with the fall in 
    expert systems and the right in knowledge management. Also, many of the people 
    switched from one field to the other. I was one of them! This was, at least 
    partly, a change in *positioning*. However, it also prepared the ground for 
    increased use of machine learning.

Sadly, this doesn't explain everything either. It does account for the early evolution
of knowledge management and machine learning/information retrieval technology,
which grew dramatically after 1990. But it doesn't really explain the transformations
around 2010, as well as a more Kuhnian paradigm shift would. And it does leave us
with some rather intriguing questions about the apparent death of, e.g., genetic
algorithms, which had a very distinct peak around 1998 and *also* dropped off the 
grid by 2010, despite no obvious flaws in any of the fundamental assumptions.

However, this is where Von Eckardt's tweak to Laudan's model is important. She dropped
the requirement that a community select the research tradition that optimizes progress.
And she's right. The people in a scientific community have different goals, like
securing funding, promotion, and publications. In a Big Science world, these
matter more than in Little Science. So the selection of research tradition optimizes
personal career prospects as well as the scientific goal G.

Put simply: if it's easier to get grants and publications in deep learning than in 
genetic algorithms, people are going to switch.

Anyway, we're still short of an explanation for the shift to machine learning, 
so let's try another explanation.

## Mulkay's model: branching research traditions

When we look at a field like artificial intelligence, it is easy to 
imagine -- thanks to the Big Science framing -- that it is a coherent
and relatively unified thing, where our similarities outweigh our 
differences. 

This is a long way from the truth. 

Michael Mulkay (in 
["Three Kinds of Scientific Development"](https://journals.sagepub.com/doi/abs/10.1111/j.1467-954X.1975.tb02231.x?journalCode=sora)) extends the Kuhnian model (which he calls the "model of closure")
by showing that despite the shared identities and methods and assumptions -- on the ground, 
a science is made up of many smaller communities. Mulkay argues that 
research traditions (which, remember, include methods as well as assumptions)
evolve when people migrate between communities, taking ideas and methods with 
them as they go. And this migrations don't only happen *within* a field, 
but more importantly, *between* fields. 

For example, in artificial intelligence, some of the fields include:

Image classification; image segmentation; speech segmentation; 
image generation; text generation; speech synthesis; planning; optimization algorithms; 
unsupervised learning; reinforcement learning; computational biology;
word sense disambiguation; conversational AI; generative models;
adversarial networks; recurrent networks; time series analysis;
causal inference; robotics; decision making; regression;
dataset construction; safety; privacy; interpretability, and so on.

At a typical conference, you might see these manifest as "tracks". These are
the scientific communities that make the field work. By and large, people prefer to stick
with one field, and will personally know most of the others within that field.
But they generally won't work across all: few people will work full-time on both, for example,
speech synthesis and computational biology, or image generation and causal inference.
However, people may move between fields from time to time, perhaps because they
change job, or meet a new collaborator.

There are many parallels between the Laudan/Von Eckardt model and Mulkay's 
(not a huge surprise, Laudan and Von Eckardt are philosophers and Mulkay's from
sociology, so they might well observe similarities). But Mulkay is clearer about
the level of granularity, and about the mechanics of the evolution of
research traditions. *Concepts and methods* move between research traditions
because *people* move between research traditions.

So let's see if we can use this to improve our explanation.

> **Story 3**. After about three decades of research, the scientific community centred around one 
> research tradition, GOFAI expert systems hit a problem. The effort involved in building 
> systems was becoming uneconomic. It was simply too expensive to manage the knowledge. 
> One of its foundational assumptions, that it was economically viable to capture
> and use knowledge to build applications, was found to be false. Other research
> traditions, not incorporating this assumption, such as the neural network community, 
> were less affected. The GOFAI expert system communitybranched into knowledge management, 
> early recommender systems, and methodologies, repositioning itself to maintain funding.
> Time passed. One day, a neural network researcher saw a departmental seminar by a 
> computer vision researcher, who was using GPUs to greatly improve performance. They
> adapted the idea to neural networks, and it showed promise, as they gradually scaled
> to bigger datasets. By the early 2010s, GPUs
> had provem to make the high compute costs of machine learning much more affordable. And by
> the mid 2010s, there was proof of viability via AlexNet, proof of need in
> recommender system usage in Amazon etc., and a step change in compute economics -- enough
> to create conditions for a Big Science scale investment.
{: #story3 }

The first observation about this story is that the "crisis" and the "paradigm shift"
are decoupled, allowing us to account for the twenty year gap between the two. In fact,
the first half of the story is identical. The difference is the account of 
how deep learning got its traction: it was not a reaction to a crisis, but
an (initially small-scale) exploration of a possibly-valuable method.

Secondly, this account doesn't work at the 'artificial intelligence' level, but
eventually reaches it through a bottom-up spread of buy-in, as the new methods
spread virally between communities. 

This story is not randomly made up. If we think of AlexNet again in this light, 
its true innovation was the re-purposing of GPUs, but that work was already under 
way at another lab *in the same institution*.

Now I can't prove this, but I will bet
$10 (Canadian) that the actual innovations came from the 
[OpenVIDIA](https://stemhave.com/prog/OpenVIDIA.html)
project on computer vision,
which, like Hinton's group, was also based at the University of Toronto, but in the 
[EyeTap Personal Imaging Lab](http://www.eyetap.org/). OpenVIDIA, developed from 2004 to 2006,
was leveraging GPUs for image processing. (The EyeTap,
developed by Steve Mann, was a precursor to Google Glass.)
Anyway, OpenVIDIA [embraced CUDA](https://forums.developer.nvidia.com/t/cuda-on-openvidia/17415) as it emerged in 2007. 
[Cudamat (Mnih, 2009)](http://www.cs.utoronto.ca/~vmnih/docs/cudamat_tr.pdf), 
also at Toronto, then integrated Python
with CUDA, and 
[Alex Krizhevsky was using CUDA in 2009](https://www.eecg.utoronto.ca/~moshovos/CUDA08/arx/convnet_report.pdf), 
and 
[Ilya Sutskever by 2010](http://proceedings.mlr.press/v9/martens10a/martens10a.pdf). 
And after all that, applying the same methods to ImageNet is not a big leap, 
and certainly not a revolutionary reaction to a crisis in GOFAI. It is appropriation
of a useful method, through what is very likely personal contact at the same 
university department, and some reciprocal exchanges between 
OpenVIDIA and NVIDIA.

## The alternative: bricolage in science

Not all science is Big Science. Even Weinberg, arguably its biggest advocate, 
was explicit that "We must make Big Science
flourish without, at the same time, allowing it to trample Little Science"
(Weinberg, 1961).

However, I want to add to Table 1 above, one more distinction between Big
Science and Little Science: where Big Science uses engineering, Little Science
uses *"bricolage"*.

Bricolage (a loan-word from French, roughly equivalent to the English "DIY" or "tinkering")
was introduced as a concept by Claude Lévi-Strauss in 
*The Savage Mind*. He uses it to describe how conceptual structures are
put together, piece by piece.

Bricolage, put simply, means 'tinkering', playing around, trying
ideas, and testing them. It's an effective problem-solving strategy, although
more so in the absence of guiding knowledge. Engineering, by contrast, 
is thinks about goals, and means to an end, i.e., using knowledge first.

Unhelpfully for us, Lévi-Strauss contrasts bricolage with "science" more than "engineering". 
Essentially, his distinction is that the bricoleur pieces together 
conceptual structures from (often second-hand) observations, bottom-up, where the scientist interprets
observations from conceptual structures, top-down. Although, as Lévi-Strauss
himself put it, "both approaches are equally valid" (Lévi-Strauss, 1962, p22). What is 
confusing for us is that Lévi-Strauss's use of "science" is more of
an ideal than a reality. If we look at 
[Goldstein's distinction between "science" and "principled machine learning"](https://twitter.com/tomgoldsteincs/status/1484609273162309634),
it exactly matches Lévi-Strauss's,
except that science has reversed its polarity -- Goldstein's science,
and ours, especially Little Science, happen substantially through bricolage -- and
therefore aligns with science, rather than opposing it in Lévi-Strauss's original usage.
Instead, I'd contrast bricolage more with engineering, where there is a more
'principled' construction -- after all contrasting do-it-yourself with engineering
does make more sense.

In many ways, it is better to use 
[Seymour Papert's adaptation of bricolage](https://lcl.media.mit.edu/resources/readings/childrens-machine.pdf)
as a method for building mental constructs, i.e., *learning*. Learning
happens through bricolage, and whether it is creating new concepts and 
methods in science, or new concepts and methods in a child's mind, the
process is virtually the same. For example, if we revisit the later parts of [Story 3](#story3) through
the lens of bricolage, the "do it yourself" assembly and re-purposing of 
tools and ideas is extremely clear.

The problem is: bricolage doesn't work well in Big Science. It can't. When you are building 
something the scale of GPT-3, the Human Genome Project, the LHC, or the Manhattan Project, 
experiments have to be few and far between. The scale, and the cost, simply make 
tinkering unacceptable or uneconomic, and usually both. 

## Coherence of a Big Science


Again contrasting with Kuhn's story of science, Michael Mulkay proposed a 
["branching model" of science](https://journals.sagepub.com/doi/10.1111/j.1467-954X.1975.tb02231.x),
which overlaps with it to some extent. Mulkay's model of science is based
on this recognition of smaller communities, and argues that much of the evolution
in research traditions (which, remember, include methods as well as assumptions)
happens when people migrate between communities, taking ideas and methods with 
them as they go. And this migrations don't only happen *within* a field, 
but more importantly, between fields. 

We can even think of AlexNet again in this light. Its true innovation was
the re-purposing of GPUs, already under way with NVIDIA's work on CUDA and 
development of Tesla GPUs. This wasn't a method from within artificial
intelligence. 

Instead (and while I can't prove this) I'd 
bet $10 that it came from the 
[OpenVIDIA](https://stemhave.com/prog/OpenVIDIA.html)
project on computer vision, which
was also based at the University of Toronto, but in the 
[EyeTap Personal Imaging Lab](http://www.eyetap.org/), and developed from 2004 to 2006. (The EyeTap,
developed by Steve Mann, was a precursor to Google Glass.) Anyway, OpenVIDIA
was leveraging GPUs for image processing, then 
[embraced CUDA](https://forums.developer.nvidia.com/t/cuda-on-openvidia/17415) as it emerged in 2007. 
[Cudamat (Mnih, 2009)](http://www.cs.utoronto.ca/~vmnih/docs/cudamat_tr.pdf), 
also at Toronto, integrated Python
with CUDA, and 
[Alex Krizhevsky was using CUDA in 2009](https://www.eecg.utoronto.ca/~moshovos/CUDA08/arx/convnet_report.pdf), 
and 
[Ilya Sutskever by 2010](http://proceedings.mlr.press/v9/martens10a/martens10a.pdf). 
And after all that, applying the same methods to ImageNet is not a big leap, 
and certainly not a revolutionary reaction to a crisis in GOFAI.

So, according to Mulkay's branching model, you can think of a science almost like 
an ecosystem, exploring research niches that correspond to ecological ones, 
searching for opportunities to grow and thrive. In other words, *bricolage*. 
People tinker with ideas, borrowing them, adapting them, and adjusting them
to meet their needs.

{::comment}

## Big Science and collective narcissism

It is crucial that we remember sciences are, first and foremost, *communities*,
groups of people, and that they have a distinct sense of identity. As a 
natural consequence of this, positive traits are more likely to be attached
to the in-group, and negative ones to the out-group. This is conventional
social psychology. 

But, taken to an extreme level, this can result in a 
["collective narcissism" (Golec de Zavala et al. 2018)](https://eprints.mdx.ac.uk/4252/1/Golec_collectivenarcissism.pdf). Collective narcissism is analogous to 
the more familiar individual form, but operates at a group level. It is 
the group that is idealized, not the self.[^4] Importantly, with collective
narcissism, there is an emotional investment in a grandiose image of the
in-group. 

Remember, though, that one of the distinctive features of Big Science is
that initiatives are *collective* by design, so one of the psychosocial risks of a Big Science
is a collective narcissism leading to inflated sense of grandiosity from
within, and a tendency to negative reactions to those outside.

Some of the typical characteristics of collective narcissism include
(Golec de Zavala et al. 2018)](https://eprints.mdx.ac.uk/4252/1/Golec_collectivenarcissism.pdf):

 * Wishing others would recognize their group's authority
 * Asserting that their group deserves special treatment
 * Insisting their group receives the respect that it is due
 * Getting angry when others criticize the group
 * Claiming the world would be a better place if their group was given more influence
 * Believing the true worth of their group is misunderstood

I, for one, find that this explains a lot of the hostility.

[^4]:
    Importantly, the association between individual and collective narcissism 
    is a weak one -- and, importantly, only accounts for group relationships,
    not individual ones. There is good evidence for the phenomenon of 
    collective narcissism in 
    (Golec de Zavala et al. 2018)](https://eprints.mdx.ac.uk/4252/1/Golec_collectivenarcissism.pdf),
    however, to my knowledge, it has not been experimentally verified in 
    scientific communities. It does provide one theory that accounts for the
    tensions between groups in science.

{:/comment}

## Social impact of Big Science

Much of our world has been transformed by Big Sciences. They can be extremely valuable in all sorts
of different ways, even incidentally. Many of the classic examples of Big Science
include NASA, CERN, the Human Genome Project, have all generated results that
are transforming our lives. 

However, there are costs, too. The way science is done today, at all
levels, can be traced to the structural changes of Big Science. For example,
Weinberg, in 1961, argued that two necessary changes were: 

> "First, a great expansion in the use of short-tenure,
> postdoctoral fellows at the big laboratories, and second, the establishment
> of independent graduate schools of technology in close proximity to the big
> laboratories, and with some interlocking staff." (Weinberg, 1961)

These changes are both now intrinsic to the way science is done today, and
both have rewritten the career system radically for those involved.[^BigScienceCareers] Not
in a particularly good way, either. Big Science, being structured around
organizations, often converges on a pyramidal, hierarchical structure. And 
like an iceberg, only the tip may be visible.

[^BigScienceCareers]:
    Especially so in North America. Big Science is (and always has been) as much
    a political project as a scientific one. 
    International competition drives it at least as
    much as national pride in science. In fact, there is always an 
    international dimension to any true Big Science, although it may be either
    [competitive](https://itif.org/publications/2021/01/25/who-winning-ai-race-china-eu-or-united-states-2021-update) 
    or 
    [collaborative](https://www.genome.gov/human-genome-project),
    and [sometimes both](https://www.nasa.gov/50th/50th_magazine/coldWarCoOp.html).

## "But is it capitalism?"

It might seem that Big Science is what happens when capitalism gets 
engaged with science, and given my examples (OpenAI, etc.) this is an
issue that deserves serious consideration. 

My answer is: not always. Some of the older Big Science projects, e.g.,
NASA's Apollo programme, CERN, were very much not-capitalist. And Big Science
was also a big deal in the Soviet Union. The space race was certainly more
driven by international competition and the Cold War than by capitalism. 

The Human Genome Project, too, was not overtly capitalist.

But there is a good case to answer as to whether the tilt towards Big Science,
what we might call "bigsciencification", is an effect of "late modernity".
Science is directly linked to risk, and late modernity's management of 
risk (what Ulrich Beck calls the "risk society"). Science itself has changed,
fundamentally, by this: it has been democratized and secularized,
and diffused into wider society. 

Beck is worth quoting in full:

> "Science, having lost reality, faces the threat that others will
> dictate to it what truth is *supposed* to be. That is not only the case with
> the flourishing 'court science', by way of direct influence. 
> The approximate nature, the indecisiveness, the accessibility to decision-making of
> the results make this possible. Selection criteria that escape scientific
> scrutiny achieve a new and perhaps decisive meaning in the hypercomplexity 
> that must be mastered in any case. These include the compatibilities of basic 
> political views, the interests of sponsors, the anticipation of political 
> implications; in short, political acceptance" (Beck, 1992, p167-168, original emphasis)

Much of what we see in artificial intelligence matches this pattern. Gone
is the monopoly on knowledge within universities. Wider integration into
sponsorship and governments replaces it. But there is a cost. As Beck puts it: 

> "This is a development of great ambivalence. It contains the opportunity to 
> emancipate social practice *from* science *through* science; on the other 
> hand it *immunizes* socially prevailing ideologies and interested standpoints 
> against enlightened scientific claims, and throws the door open to a 
> feudalization of scientific knowledge practice through economic and political 
> interests and 'new dogmas'" (Beck, 1992, p157, original emphasis)

Beck's thesis also accounts for the transformation of the Big Science
approach, from orthogonal to capital in the first half of the 20th Century, 
to aligned with it today. So, I'd argue: no, this is not simply capitalism. If it is 
anything, it is late modernity, which *also* is transforming capitalism. The causes run 
deeper. It's not simply a case of artificial intelligence, to borrow from John Wyndham,
being "too contaminated by capital to keep afloat".

But that is not to belittle the problem. There *is* a problem, a big one. 
Science is searching for new structures, and Big Science seems to be
winning at the moment. And we can see the signs of feudalization
everywhere, from the armies of post-doctoral researchers, to the
hyper-wealthy owners of private research monopolies. 

Without serious work on the part of scientists, 
social scientists, governments, and industry, this will edge out the
bricoleurs who will create the next generation of innovations and
discoveries.

## Big Science and ethics

[Ethics is different in the context of a Big Science](https://www.pdcnet.org/wcp20/content/wcp20_1999_0001_0231_0246). 
As I suggested in
Table 1 above, one of the differences is that, in Big Science, 
ethics is no longer an individual matter. Generally, it seems that
ethical decision-making tends to be more consequentialist in a Big Science.
This has permitted relatively heinous ethical
actions, including, for example, the abuse of Henrietta Lacks' DNA,
and the creation of the atom bomb.

This pattern is also visible in artificial intelligence work. 
Self-driving cars are indubitably a Big Science project[^BigScienceAGI], and the
consequentialist *narratives* are clear. (Here, I'm talking about
*researcher* ethics, not the ethics that they look to implement, i.e., 
what shapes the "self-driving project", not how a self-driving car should operate.)

[^BigScienceAGI]:
    I've not touched on AGI, which is an even bigger Big Science project
    in its grandiosity. However, I'm not certain it has risen to the 
    Big Science threshold yet. There is neither the massive funding nor
    the unity of purpose or investment to drive it. 

As [Hardin argues](https://www.pdcnet.org/wcp20/content/wcp20_1999_0001_0231_0246),
Big Science *needs* external formal ethical regulatory systems and processes in a way that Little 
Science may not. This is inevitable given the conflicts between organizational
and institutional interests and scientific goals. 

To return to Von Eckhart's model, Big Science's goals will invariably be partly
be non-scientific, driven by the need for perpetuation of the institution. 
For example, OpenAI's goal is not (only) pursuit of truth, or building good
technology, so much as perpetuation of OpenAI itself.

## AI, Big Science, and the future

So, what does the current Big Science approach to artificial intelligence
mean for us, as practitioners in the field?

First and foremost, we are, like it or not, in a world which has tilted
towards a Big Science model, particularly and especially in artificial intelligence. 
This is a problem. On this point, Goldstein is right: some rebalancing is needed
to promote bricolage/experimentation/Little Science, to keep the flow of innovation
going in a world which is flooded with Big Science tech, like foundation models.
Without this rebalancing, Big Science will stagnate, and we cannot sustain
the expectations. In fact, given the sheer amount of high-brand-value, 
innovation-by-press-release, we might not be able to anyway. 

But I believe the mechanics of the process are different. AI winters -- such
as they exist -- are not Kuhnian in origin. Instead, the dynamics of Big Science
interrupts the ability of communities to inter-connect. The stagnation is more
the consequence of the Big Science institutional pattern 'freezing' existing research traditions, 
and preventing the creation and evolution of new ones from within. They are more
Big Science structural crises, at least partly driven by economic factors,
and especially human and compute costs.

And when it fails (and they do) it fails on a big scale. For example, the
[Human Brain Project](https://www.humanbrainproject.eu/en/) crashed badly,
and Japan's Fifth Generation computer project failed to live up to its promise.
Although inevitably, it is likely there will have been all sorts of interesting
results (and people) that have influenced later science.




Unlike, for example, 
[Goldstein](https://twitter.com/tomgoldsteincs/status/1484609273162309634), 
therefore, I don't see tensions in 
artificial intelligence as between 'science' and 'principled machine learning'
-- even though that echoes Lévi Strauss's bricoleurs versus engineers. 

I also don't see "AI winters" as scientific crises in a Kuhnian sense -- at
least, not only as that. I interpret them more as Big Science structural
crises, substantially involving economic factors outside science. 

If we look at statistics as an example, multiple paradigms (e.g., Fisher versus 
Neyman-Pearson) can co-exist, for extremely long periods, potentially hundreds 
of years. 

The Big Science approach, left to dominate, suffers from a number of flaws,
many of them fatal, including:

 * Stagnation, as its institutional pattern 'freezes' 
   research traditions, and cannot create new ones from within.

 * When it fails, it fails on a big scale. A good example is the Human Brain Project,
   but Japan's Fifth Generation computer programme, 

The challenge is not, despite calls from those like Weinberg and Lauer (2014),
to "achieve the right mix". It is: how do we preserve Little Science in a
dominant culture of Big Science, i.e., when the values of Big Science are 
considered "normal"? 

[Yoshia Bengio has explicitly pointed to](https://yoshuabengio.org/2020/02/26/time-to-rethink-the-publication-process-in-machine-learning/)
["Slow Science"](http://slow-science.org/)
(which very much matches the branching, bricolage-oriented, Little Science style).
He does this as a reaction to the Big Science problems in machine learning:

I think the

* **Thing One: frame artificial intelligence and machine learning as transdisciplines**
  Transdisciplines are a special kind of science. Michael Scriven describes them as: 
  "a discipline that has standalone 
  status as a discipline and is also used as an methodological or analytical 
  tool in several other disciplines" 
  [(Scriven, 2008)](https://journals.sfu.ca/jmde/index.php/jmde_1/article/download/161/201/). 
  His examples include: statistics, logic,
  design, and communication, with possible evidence for ethics, computer
  science, and information science (and, therefore, information retrieval).
  There is a lot to be said for artificial intelligence, and especially machine learning, as 
  transdisciplines. It transforms the relationship to related sciences and fields, such as 
  engineering, linguistics, medicine, and psychology: strengthening connections between them.

* **Thing Two: empower and support the bricoleurs**. The easiest way to re-balance Big Science and 
  Little Science would be to give some of the resources to Little Science. There are
  many ways to do this. One would be as simple as a universal basic income. Remember,
  science has become more democratized, citizen science is a thing now. More of a 
  challenge is how to integrate everyone into the networks, but, for example, 
  opening up conferences and workshops would be a start. Make it easy, and cheap,
  not only for people to *use* artificial intelligence (after all, the
  software is essentially free now) but to *participate in it*. 

* **Thing Three: prize validity**. 


[^8]:
    According to Scriven, a transdiscipline is 

    See Scriven, M. (2008). "The Concept of a Transdiscipline: And of Evaluation 
    as a Transdiscipline", *Journal of MultiDisciplinary Evaluation*, **5**(10), 65-66.





There are other, more traditional research groups, but these exemplify the 
defining features of Big Science: collaboration, scale, immense funding, and





Now, don't get me wrong: Big Science 

Defining features, include: work is attached to the brand, not an individual.



Note that some of the driving factors here are social. 

Yoshua Bengio "Slow Science" (https://yoshuabengio.org/2020/02/26/time-to-rethink-the-publication-process-in-machine-learning/)


## How does science work?



* * * 

_**Disclosure**: I've worked on several Big Science projects, including the 
[International Cancer Genome Project](https://dcc.icgc.org/) and 
[AACR Project Genie](https://www.aacr.org/professionals/research/aacr-project-genie/)._





Is artificial intelligence a science? An academic field? Or is it a more
practically-oriented engineering discipline. Today, the picture is a little
confusing. There is a strong experimental strand, especially visible in
competitive forums like Kaggle and in benchmarking, where *anything goes*, so
long as the results look good -- and the time for reflection and discussion on
good practice comes later.

But there's also a more considered, more engineering strand. It's not enough
to come up with a wild idea when you're building something commercially. GPT-3
was not simply an experiment -- it was a considered and planned path towards a
vision of commercially-useful language models.

So let's dive in, and see if we can understand how artificial intelligence
became the thing that it is, how it works, and whether that can guide us as we
make for a better field for everyone.

## Is it a science?



## Is it engineering?

## Bricoleurs and engineers

The distinction between theory-first and experiment-first 
echoes Lévi Strauss's distinction between "bricolage" and "engineering"
as processes, particularly as it is used in learning and problem solving, e.g., by Papert. 

In this sense, bricolage, put simply, means 'tinkering', playing around, trying
ideas, and testing them. It's an effective problem-solving strategy, although
more so in the absence of guiding knowledge. Engineering, by contrast, 
is supposed to involve thinking about goals, and means to an end, i.e., 
using theories first.

A lot of science is bricolage. 


## "AI winters"

One of the more notable features of artificial intelligence have been the 
occasional stalls, often called "AI winters", where funding and progress
seemed to recede. 

To date, there have been two substantial AI winters, from around 1973 to 1980,
and from 1987 to the mid 1990s. 

Interpretations of these vary. 

It is notable that both corresponded with global recessions: the first with
the global oil crisis and a Wall Street crash, and the second with Black Monday.
So both occurred during periods of widespread economic retrenchment, and it makes
sense that investments that were not perceived as delivering enough value were 
cut. 

James Lighthill's analysis in 1973, however, points directly at artificial 
intelligence facing an uneasy saddle-point between science and engineering.
He divided artificial intelligence work into three categories:

 * **Category A**: automation
 * **Category C**: cognition
 * **Category B**: robotics and other work integrating results from A and C

Lighthill found good evidence of success and progress in Category A (which was mostly engineering)
and Category C (which is what would become cognitive science). However, 
he held that the very foundation of artificial intelligence depended on the assumption 
that A-B-C formed a continuum, and, unfortunately, little of what was happening in 
Category B was perceived as delivering value, at least at the time.

This meant that despite the deep cuts in "artificial intelligence" in the mid 1970s,
work on automation would continue and even accelerate, and cognitive
science would emerge as a field distinct from artificial intelligence but with 
significantly closer links with the social sciences (and especially psychology and economics).

And in fact, most researchers in the field continued, but repositioned and evem rebranded
their work until the funding climate improved. 

The late 1990s AI winter was similar: there had been enormous expansion and 
investment in work on expert systems and knowledge-based systems -- this time with
more industry engagement through the Japanese "Fifth Generation"
programme, the UK's "Alvey", the EU's "ESPRIT", the US industry "Microelectronics 
and Computer Technology Corporation", a consortium of then big-technology
companies. However, again during a time of economic retrenchment, the value 

In fact, the "AI booms" might be more interesting than the "AI winters" -- all
coincided with massive hardware technology changes affecting the trade-off between
expertise and compute cost (first mainframes, then PCs and workstations, and now GPUs). 

So if anyone asked me to predict the conditions of the next AI winter, I'd look for 
a combination of three factors: a global economic downturn, a disillusionment over progress, 
and a flattening in the improvement of hardware compute performance. But I don't think it'll
be especially serious -- and it might even be a Good Thing -- as it might force artificial
intelligence workers to integrate into other disciplines. I'll come back to this point later.

## What is a science anyway?

## Three models of scientific development

## Getting it right: transdisciplinary artificial intelligence and "Guinnessometrics"







## A small history of artificial intelligence: how we got here

The history of artificial intelligence is long, storied, and confusing, but
there are some key points which are largely agreed.

Although some of the ideas and visions have been spotted through history
and literature, the actual origin of what we see today, was the
Dartmouth conference -- an invite-only workshop held at a male-only college
in 1956, and convened by John McCarthy. Most of what we see today, symbolic
and subsymbolic approaches, were represented there.

There was also a somewhat independent trajectory for "machine intelligence"
in the UK, building on work by Turing, which suggests that the true spark might
well have been wartime-era discussions between the likes of Von Neumann and Turing.
Note, for example, that Turing's classic "Can Machines Think" pre-dated Dartmouth
by a full six years. 

Early work in the field showed promise. Artificial intelligence could play games, chat in 
natural language, and on occasion even seem to translate it. But the technology 
was fragile -- particularly in natural language. In 1973 the field seemed to stumble,
progress slowed, and there was evidence of a natural stopping point in the Lighthill Report.

## The Lighthill Report -- artificial intelligence at the crossroads between engineering and science

Lighthill divided artificial intelligence work into three categories:

 * **Category A**: automation.
 * **Category C**: cognition.
 * **Category B**: robotics and other work integrating results from A and C

Lighthill found good evidence of success and progress in Category A (which was essentially engineering)
and Category C (which was essentially what would become cognitive science). However, 
he held that the very foundation of artificial intelligence depended on the assumption 
that A-B-C formed a continuum, and, unfortunately, very little of what was happening in 
Category B was successful.

So even in 1973, we see this fundamental tension between a scientific and 
an engineering positioning for the field.

The aftermath of this more or less allowed automation to continue, and cognitive
science emerged as a field partly distinct from artificial intelligence, and 
with very significantly closer links with the social sciences, particularly
psychology and economics.

## 

At this point, and well into the 1980s, artificial intelligence was first
and foremost an academic discipline, one built of graduate students and faculty
interests. US undergraduate degrees in artificial intelligence are new -- this
is significant. Until relatively recently, artificial intelligence was not a 
distinct academic field, but overlapped very substantially with computer science,
and to some extent with psychology (e.g., Newell and Simon), economics, 
philosophy () and linguistics (). 

During this stage, far the majority of the funding was from governments, and
in the US, from the military via DARPA. From the early 1980s, however, a more
commercial side started to emerge, with the Japanese "Fifth Generation"
programme, the UK's "Alvey", the EU's "ESPRIT", the US industry "Microelectronics 
and Computer Technology Corporation", DARPA's "Strategic Computing Initiative" 
and so on. Much of this work was in the field of *knowledge-based systems*,
rather than AI generally, and de-emphasised machine learning. This was an 
AI heyday, the era of Lisp machines.

It didn't last. The bubble burst in the late 1980s, around the time of 
"Black Monday", the first global stock market crash. Investment was cut, and 
AI no longer seemed to deliver the yields that it had promised. 

But, interestingly, the 1980s take on AI did differ significantly in that a
more engineering-oriented aspect started to emerge. Much of the work, even 
much of the government-funded work, had been in industry. Methods and tools
for building artificial intelligence systems had grown in industry. So, 
unlike earlier takes on artificial intelligence, the 1980s strand had a 
distinctly engineering dimension to it.

It would be highly misleading to say artificial intelligence failed to 
deliver during this time. In fact, most of the work continued, but 
re-branded and collaborated more, so the core distinctive identity of
"artificial intelligence" faded during the 1990s and early 2000s. But the
work continued. Google search, speech recognition, data mining, robotics, 
and the Internet itself all made innovative leaps based very directly on
artificial intelligence ideas and techniques.

## Artificial intelligence: science or engineering?

So, as of around 2000, there were two very different ways of working in
artificial intelligence.

 * **Scientific**. Guided by *hypothesis* and *evidence*, exemplified by
   the "scientific method" (such as it is commonly perceived), where principles
   may guide work, but the proof is in actual results, and the general 
   approach is skepticism until a solution is found effective.

 * **Engineering**. Guided by *principles* and *methods*, exemplified by 
   methods like CommonKADS, where there was a proven known approach to
   addressing a particular problem, and the general approach was to 
   "do the right thing" to solve it. 

So, the issues raised by Goldstein aren't (I believe) new, but are 
distinct *strategies*. I have called them "strategies" rather than "communities"
because I suspect the use of them might be a lot more flexible than we 
think. 

Why? Well, one answer is that even Goldstein's summary shows that every
solution involves aspects of both. It's more about which partner leads. 
Science and engineering is more like a dance than a competition. 








There are also some confusing themes, between *what artificial intelligence is*
and *what artificial intelligence ought to be*.



Okay, I admit it. I'm frustrated with all the tweetstorms about how 
artificial intelligence is supposed to be. 
As a suddenly-popular academic field, it is, I suppose, inevitable that
there would be a kind of gold-rush for the foundational principles, as a
a way to establish the prestige to promote a career in the area.

However, wearing my social scientist hat, I am also frustrated about
how contentious people's vision of *what the field should be* can 
become.

As background, I'll comment that like a few other participants in 
the debate, I have built a lot of my work on cognitive modelling, which
is rooted in the cognitive sciences as well as artificial intelligence.
Others from this tradition include Iris and Olivia. And I like what they've
said. 




There's a good thread on Twitter discussing "AI Winters" and the relationship
between science and modern artificial intelligence.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">My recent talk at the NSF town hall focused on the history of the AI winters, how the ML community became &quot;anti-science,&quot; and whether the rejection of science will cause a winter for ML theory. I&#39;ll summarize these issues below...🧵 <a href="https://t.co/t87hK4q7x4">https://t.co/t87hK4q7x4</a></p>&mdash; Tom Goldstein (@tomgoldsteincs) <a href="https://twitter.com/tomgoldsteincs/status/1484609273162309634?ref_src=twsrc%5Etfw">January 21, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

It raises a lot of excellent questions, and in many ways I think it's a fair
account of current observed tensions in the field. Where I find it problematic
is in its account of how research fields (and particularly artificial
intelligence) work, and its use of that to create a diagnosis and prescription
for improving the field.

### The problem: "science" versus "principled machine learning"

My read on Goldstein's argument is that there is an apparent tension in
artificial intelligence between "science" (as used in the thread) and 
"principled machine learning".

He argues that there is an "empirical community" that uses a "scientific
approach", and a "theory community" that doesn't.

His version of the distinction between the two is the based on the 
values attached to theory and to experiment, with the empirical community
regarding work as driven by experiment, using theory to explain experiments,
and the theory community using experiments to validate theory.

This tension between theory and experiment not a new issue, and highly suggestive of 
[Newell's "20 Questions"](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.982.3132&rep=rep1&type=pdf)
critique of psychology in, not entirely coincidentally, 1973 (the year of the Lighthill 
Report and the first "AI Winter").

But I have questions. First: are these actually communities? Is there a 
*theory community* that actually operates as a community? Or is it that
there are *theory people* that work that way, or is the choice between 
these two approaches a strategy, i.e., is it a *theory strategy*?

These questions require a slightly deeper analysis of how science works,
which I will come back to in a moment.

First, though, the distinction between theory-first and experiment-first 
also echoes Lévi Strauss's distinction between "bricolage" and "engineering"
as processes, particularly as it is used in problem solving, e.g., by Papert. 

In this sense, bricolage, put simply, means 'tinkering', playing around, trying
ideas, and testing them. It's an effective problem-solving strategy, although
more so in the absence of guiding knowledge. Engineering, by contrast, involves
thinking about goals, and means to an end, i.e., using theories first.

So in this cast of the issue, what Goldstein labelled as "science" versus
"principled machine learning" (or "empirical" versus "theoretical") is 
primarily a difference in which strategy/process people use: is it 
bricolage or is it engineering? 

Of course, Goldstein is completely right that massive complexity of modern
models in ML makes *theory* very much harder, which would naturally encourage 
bricolage. 

And he's also right that there is evidence of a kind of "surface theory" instrumental 
use of theory-for-the-sake-of-it, which isn't really theory at all, but which
is intended to look like one for other reasons, e.g., to boost publication
acceptance.

This is important. And reflects on a bigger issue: how does a science work
in practice? 

### AI winters and AI in crisis

In a nutshell, Goldstein's argument is that artificial intelligence's first
incarnation, the one that lasted more or less from 1956 to 1990 (what Haugeland
called "good old fashioned artificial intelligence", or "GOFAI", and which I'll
call "AI Mark I") essentially entered a crisis (an "AI winter") because it
failed to deliver commercial results. There was, therefore, in effect a
paradigm shift, which re-started artificial intelligence led by machine
learning.

To be fair, Goldstein doesn't name Kuhn, or explicitly talk about paradigm
shifts (although he does use the term "seismic shift"). But he is clear that
there was stagnation, and a new set of techniques emerged (machine learning,
re-invigorated by GPUs) which overcame that stagnation. So I think it's clear
he's got something like a Kuhnian shift in mind, and that what emerged was a
second type of artificial intelligence, which was primarily powered by machine
learning (and which I'll call "AI Mark II").

Goldstein's question, therefore, (given a Kuhnian framing): 
is AI Mark II destined to face a new crisis, one of its own making, 
because the theorists refuse to let experimental work lead, to the
point that they will accept a crisis?

I'm not convinced, for several reasons.

1. Kuhn's model isn't an ideal description of how any science happens, let alone AI
2. "AI winters" weren't necessarily either failures or stagnation -- as Goldstein has asserted that
3. As Newell argued, letting experimental work dominate doesn't work either

### Artificial intelligence as a science in theory

It's very easy to think of artificial intelligence as a single thing. After all, there
are conferences dedicated to it. And perhaps even more importantly, there is an element
of social identity -- people will describe themselves as "artificial intellgence"
people.

So let's unpack Goldstein's framing of empiricists versus theorists, especially when 
treated as communities.

All of this is excellently described in Barbara Von Eckardt's "What is Cognitive Science?",
although it's a tough read, mainly because it is *extremely* precise. Every single word
matters. I wouldn't recommend it unless you really want to engage with how science
works in practice, but if you do: I suggest you go for it.

Von Eckardt builds on Larry Laudan's work to map out how a research community chooses
a strategy. She carefully prefers Laudan's model to Kuhn's because Kuhn's model
more or less rejects the idea that a research tradition (which is basically a
of methods and related assumptions) can *evolve*.

She maps out her modified version[^7] of Laudan's original structure as follows:

  (1) Scientific community SC desires goal G (e.g., to explain some phenomena D)
  (2) The research traditions currently available to SC are RT1, RT2 ... RTn
  (3) The domain of an applied RT corresponds roughly to D
  (4) Any applied RT is not foundationally flawed (its foundational assumptions are not 
      unsound, untrue, or without sufficient conceptual resources to explain G)

In this sense, it would be reasonable (in theory) to have distinct communities
choosing different "research traditions", one of which would be more empirical
and the other more theoretical. So long as both are capable of achieving the 
goal of the research, there is no problem in different communities following different
research traditions, such as using different methods or relying on different
assumptions. 

### But what about science in the real world

So far, so good. But this is a depiction of an *ideal* science, or set of 
scientific communities. What about reality?

This is where things start to fall apart. 

In practice, when you look at scientific communities, a distinction between
empiricists and theoreticians is not what jumps out. Instead, what manifests
most visibly is a difference in the goals, G; in effect: each community works
on different problem spaces.

There are two issues here:

1. Is the distinction between empirical and theoretical communities a 
   valid one? i.e., do these communities exist in the real world?






**Problem 1. Empirical and theoretical communities: do they exist?**

First of all, just because we can impose this definition on a group of people, that
does not make it a community. Before we can even apply this definition, we need the
community to be a thing.

Is there evidence for this distinction between empirical and theoretical
communities? If there was, we'd expect, among other things: distinct
conferences and journals, reduced co-authorship between empirically-oriented
and theory-oriented researchers. And we wouldn't expect experimental papers to
depend on theories, in the way that Goldstein says that they do. Finally, we'd
expect these community distinctions to be as important as domain distinctions.

And we don't. When we look at artificial intelligence research work, the
cluster that we see are more clearly structured by domain, or goal G, i.e., NLP
versus images, language models versus generative networks, and so on. We get
communities defined more by problem area than empirical versus theoretical
choices.

To be fair to Goldstein, both are possible. In fact, if artificial intelligence
is organized as (or becomes) a transdiscipline[^1], like, e.g., statistics (and
there's probably good reason for that to be the case) we'd expect theoretical
work to be *both* a distinct community *and* integrated into problem areas.

Of course, if it truly were a transdiscipline right now, we'd not be able to make 
jokes like this. So the evidence is that it currently isn't, in practice. But...
I can dream. 

#### [XKCD]

**Problem 2. What is the goal?**

The goal set out in Laudan's/Von Eckardt's formulation is, again, ideal. But 
the real world is messy. People within communities are not (only) working towards
goal G. 

The point is, within each field, people are pursuing what is approximately rational. They
are adopting methods and techniques that help them solve their chosen problem area. 

Now, there are points when abandoning a technique is *rational*, i.e., when -- given the
available technology -- other techniques perform better. i.e., the exact same technique 
in 1973 might be less useful than in 2013, simply because in 1973 it might be prohibitively
expensive. Convolutional neural networks, introduced in 1980, the era of the Intel 8088, are
bound to have a different outcome in the era of NVIDIA GPUs. 

In other words, factors like cost and efficiency absolutely structure the 
selection of research traditions. It is not only about the science.

**Problem 3. Campbell's Law**



And put another way, the goals of some *apparent* participants in a research
community (e.g., Google and Amazon) may not be aligned with the community as a
whole, because their particular commercial goals make take precedence. 

In fact, I'd go one step further. *All participants in a research
community* have goals which may diverge from G. For example, researchers 
need to gain tenure, acquire research funding, etc., none of which have
anything to do with G. 

**Problem 3. Benchmarking**

Benchmarking makes this problem particularly painful. It creates proxy goals,
which become high-stakes measures. And when we do that, Campbell's Law cuts in,
and those measures come corrupted -- and, therefore, so does our research.

For example, if someone in community SC developed an innovative method that was 
conceptually unsound, but still viable within the domain, that would not be 
acceptable. But, if that method scored highly on a proxy goal, e.g., a benchmark,
that optimized that person's/team's changes of achieving their own goals,
which may be commercial, that is still both "rational" and likely to 
happen, probably quite a lot in practice.

The obvious example is random seed hacking, which is ludicrously 
unsound, but still people do it. 

In other words, Problems 2 and 3 are more due to a disconnect over goals than 
over methods, and yet: if particular methods are more effective at achieving
a high-stakes goal, *even when those methods are obviously unsound*, choosing
them may still be rational. 

Put simply, if a researcher's career depends on achieving a publication,
they will prefer to structure their work/submissions in such a way that they
optimize their changes of its acceptance in a form that boosts the status
of that publication, *irrespective of the actual theory or domain*. 







But, in the sense of "rational", and for some goals G (i.e., "scoring top in a 
benchmark") even that is "rational". 





Having said that, I think there is a meaningful distinction between what we might call
"Artificial intelligence I" ("AI I") and "Artificial intelligence I" ("AI II"), in that 
they are different enough that, by and large, they are distinct research traditions. 


I *think* that what Goldstein is essentially arguing is that the risk point of
AI II is that it is may be moving in a direction where it is not testing research 
traditions for soundness before proceeding with them. 



And again with Campbell's Law, the higher the stakes,
the greater the divergence from "rational" science.

This may not be "good science", but it is, evitably, what will happen
in practice.

### Artificial intelligence in practice

But that's the theory. What about when we look at how the field works in practice.
There we see a different view.

Despite the shared identities and methods and assumptions -- on the ground, 
artificial intellgence is actually made up of many hundreds of smaller communities,
which branch and merge and share and compete with one another.

For example, among some of the fields include:

* Neural networks for photograph classification
* Image segmentation
* Content-based image retrieval
* Image generation 
* Video analysis
* Protein folding
* Deep genomics

Note that each of these tackles a different kind of problem. They may use the same 
techniques -- even identical architectures on occasion -- but the problems themselves
are distinct.

This matches [Mulkay's "branching model" of science](https://journals.sagepub.com/doi/10.1111/j.1467-954X.1975.tb02231.x). 

Mulkay actually sets out three models: an "open" model (more or less a mythic concept of
science as open to all), a "closed" model (a little more Kuhnian), and a "branching" model
which overlaps to some extent with the closed model. 

The main feature of the branching model is this recognition of smaller communities, and 
exploration of how much innovation happens when people migrate from one problem area and 
community to another, taking ideas and methods with them as they go. 

You can think of this almost like an ecosystem, exploring research niches that correspond
to ecological ones, searching for opportunities to grow and thrive.

So if we think about artificial intelligence in this framing, a single method like the A*
algorithm, or neural networks, or semantic networks, may spread horizontally and take on 
different forms and even names as they go from problem area to problem area. A*, for 
example, is still used today in using parsing from language models. Methods, if they are
useful, never die -- they are simply repurposed to new problem areas.


### Artificial intelligence and cognitive science

The most visible consequence of the Lighthill Report was the 1973 "AI Winter". But that did not
mean that AI work stopped. Instead, AI folks stopped talking about what they did
as AI.

This is fairly obvious. If a key term becomes toxic for research funding, that doesn't
necessarily mean you abandon the underlying concept. Instead, you change your
positioning, in a marketing sense. A massive part of what academics do is
a kind of positioning, as they need to differentiate their research from 
competing teams. So, a natural response to change in the perception of your
research field is to establish a new position, ideally one where resources are
easier to 

One of the effects was the emergence of "cognitive science" as a distinct field. 
Originally named in Longuet-Higgin's response to Lighthill, this enabled more
psychologically-influenced work to fork off from the more engineering-oriented
areas of artificial intelligence.

So, personally, I think of cognitive science as -- at least in part -- a re-positioning
of (some of) what was originally artificial artificial intelligence. 

It wasn't the only part. There were many other parts of artificial intelligence,
notably those that were more mathematical and logical, that didn't naturally fit
with that positioning. But there were other areas that forked off from artificial
intelligence around this time. I'd name information retrieval as one (e.g., the work
of Karen Spärck-Jones). And computer algebra could be taken as a third, and maybe
computer simulation as a fourth. 

This touches on a second point: the idea that a research field is a large thing is not
helpful. Artificial intelligence was never a unified field, any more than physics,
chemisty, or medicine are unified fields. Instead, they are a cluster of small
research themes that share enough common assumptions and methods that they can
usefully gain from each other, typically because the domain-specifying assumptions
are the same. 

### The nature of artificial intelligence as a science

Since Goldstein's thread and presentation takes direct aim at artificial intelligence
as a science, let's ask some questions.

### 1. Is artificial intelligence a science?


The point is, within each field, people are pursuing what is approximately rational. They
are adopting methods and techniques that help them solve their chosen problem area. 

Now, there are points when abandoning a technique *rational*, i.e., when -- given the
available technology -- other techniques perform better. i.e., the exact same technique 
in 1973 might be less useful than in 2013, simply because in 1973 it might be prohibitively
expensive. Convolutional neural networks, introduced in 1980, the era of the Intel 8088, is
bound to have a different outcome in the era of NVIDIA GPUs. 

In other words, economics can change the viability of methods as much as theory can.

This directly affects methods in multiple ways. For example, if experiments are
cheap -- cheaper than constructing theory -- then it is entirely rational for a 
research community to switch to a more bricolage-oriented method of exploring 
the problem areas. In other words, bricolage under the right circumstances, is 
absolutely rational. The question remains, however, is this a good thing, for 
a science.

> As an aside, I'd comment that high use of benchmarking is good evidence of
> this strategy. 

Goldstein marks this "seismic shift" as a pivot between science and principle.
I disagree. I think -- and even his comment implies -- that method selection
evolved as compute economics did. 

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">In 2011, there was a seismic shift when scientific approaches to ML, largely based on neural nets, overtook &quot;principled&quot; approaches. We often credit AlexNet for this, but actually ConvNets were already winning benchmarks (e.g., DanNet), and had been for a long time.</p>&mdash; Tom Goldstein (@tomgoldsteincs) <a href="https://twitter.com/tomgoldsteincs/status/1484609296004530176?ref_src=twsrc%5Etfw">January 21, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

> I can tell one story about this. I used latent semantic indexing (LSI) in the
> late 1990s. For those who don't know what that is, it's essentially using
> a method related to factor analysis to generate word embeddings. At the
> time, this was extremely compute intensive, so vocabulary was a limiting
> factor. Most methods were of the order of the square of the vocabulary,
> so I was limited, usually, to less than a thousand words or so, unless I
> wanted to wait a week for compute. With the emergence of better (sparse)
> algorithms, and faster compute, the vocabulary could grow. So, there was
> a pivot point where simpler strategies like tf:idf were more effective
> than LSI. So, we worked not based on what theory said was best, but on 
> what we could achieve within the collections and problem area we worked in.

### What is a science?

* Domain-specifying assumptions
* Basic assumptions
* Substantive assumptions
* Methodological assumptions

### Is it all "hacks"?

### What really is an AI winter?

But there are a few points where Goldstein moves directly into unwarranted speculation.
I think, for the most part, these don't really affect his argument. They do deserve 
some discussion, though. The most significant of these is his points about AI Winters.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">The AI winter happened because researchers built a community that was unable to deliver a product after 20 years. We&#39;re already 10 years into the deep learning revolution. Are we headed for a theory winter in 10 more years?</p>&mdash; Tom Goldstein (@tomgoldsteincs) <a href="https://twitter.com/tomgoldsteincs/status/1484609313947725827?ref_src=twsrc%5Etfw">January 21, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

The idea that "the AI winter happened because researchers built a community that was 
unable to deliver a product after 20 years" is just wrong, on several levels.

First, the AI community delivered a lot. Even after the AI Winters, the collective fields
that emerged from artificial intelligence generated a large number of ground-breaking
commercial impacts, including:

* Mathematica (symbolic algebra, from 1988). 
* STELLA (system dynamics modelling, from 1985). 
* Google (PageRank, from 1996). Google's interest in AI is not new. The very foundations 
  of its algorithm, and arguably the entire field of information retrieval, are 
  very much derived from artificial intelligence practice.
* Speech recognition (Dragon)
* Object-oriented programming. Alan Kay has explicitly said that much of his
  work was directly influenced by artificial intelligence.
* Knowledge graphs 
* JavaScript, Python, etc.

These are just some of the more visible results. There are many others, in more niche
application fields. (The first small AI company I worked for, Scientia, was built on 
an educational timetabling application that was pure AI, but folks outside the field
wouldn't know that. After all, most AI products from AI I were going to be specific to
one domain.) 

However, what did show a tendency to fail were the big, cross-domain, hardware and 
software systems: the Lisp machines, the big inference systems like ART and KEE.
Notably, these all showed very significant vendor lock-in, and were, therefore,
more vulnerable when the economics changed. And they did, because workstations
and Lisps were becoming viable on commodity PCs. Indeed, this very nearly broke
Scientia's solution, Syllabus, which had initially been developed for Lisp machines.
Only by a cunning strategic acquision of a Lisp vendor did we manage to deliver on
PCs. 

The area where Goldstein is on stronger ground is that, there was definitely a 
"hype" dimension to AI. For example, Scientia rose from the ashes of a failed 
AI company which literally called itself the "Vanilla Flavor Company" after
the in-joke naming of the MIT Lisp object-oriented programming systems. A
name like that could only ever be viable in a hype cycle. Accordingly, in
a phase of disillusionment, AI-related terminology becomes toxic for marketing
purposes. 

But note, this is *for marketing purposes*. The technology hasn't changed. If
it solves problems, it solves them just as well as it ever did, but the marketing
and positioning strategy needs to change, fundamentally.

So the question is: did AI fail to deliver? Or did what it delivered 
cease to be AI?[^2]

In the case of Scientia's product, Syllabus, it absolutely was AI. The core 
algorithm was developed from an IJCAI paper. It was written entirely in Lisp,
and the initial implementation was developed using a Lisp machine (the Texas 
Instruments MicroExplorer Macintosh add-in card, to be precise). All the 
developers were from an AI background, one had completed their PhD, a second
was close to completion, and the third had worked on an EU-funded ESPRIT 
project. THe prototype had even been acquired from the said "Vanilla Flavor Company".
It couldn't have been any more AI without its having actually attended the
Dartmouth AI workshop.

But, when launching as a product in 1990, the AI Winter was in full force, 
and strategically, we consciously made no mention of artificial intelligence.
It wasn't relevant: the product was simply faster and easier than the 
usual process at the time, taking the time needed to complete a timetable
from six weeks down to a couple of days, reducing the risk of errors in
the process.

If there hadn't been an AI Winter, it is more than likely this would have
called an AI product. And even after the AI Winters, the collective fields
that emerged from artificial intelligence generated a large number of ground-breaking
commercial impacts, including:

* Mathematica (symbolic algebra, from 1988). 
* STELLA (system dynamics modelling, from 1985). 
* Google (PageRank, from 1996). Google's interest in AI is not new. The very foundations 
  of its algorithm, and arguably the entire field of information retrieval, are 
  very much derived from artificial intelligence practice.
* Speech recognition (Dragon)
* Object-oriented programming. Alan Kay has explicitly said that much of his
  work was directly influenced by artificial intelligence.
* Knowledge graphs.
* JavaScript, Python, etc.


### Is artificial intelligence a science?

All of this is excellently described in Barbara Von Eckardt's "What is Cognitive Science?",
although it's a tough read, mainly because it is *extremely* precise. Every single word
matters. I wouldn't recommend it unless you really want to engage with how science
works in practice, but if you do: I suggest you go for it.

Anyway, by all meaningful criteria, cognitive science does qualify as a science. 

The key changes are methodological.

Machine learning does change the relationship between theory and practice, not in 
a novel way, but *in the exact same way that statistics already faced*. 

### Is artificial intelligence a (community of) practice?

A second way to think about artificial intelligence is: simply as a large collection
of people working in similar ways, using the same language, essentially socialized 
into a collective identity of "AI people". 

And this is probably my biggest concern with Goldstein's thread. It does not
mention practice. 

This becomes an even more problematic omission when he takes aim at the lack of
commercial results. Imagine modern computing without the work of people like 
Alan Kay, 

### Research as an ecosystem

Finally, despite the analysis of 'rational' behaviour in research, the ecosystem
analogy is useful on another level. Research isn't "pure". There is massive 
competition, between individuals, teams, and, increasingly and perhaps most worryingly, 
corporations. Tenure decisions may depend on publication numbers and impact factors.
Commercial products may stand or fall on how many users corporations can recruit to
cloud platforms and APIs on the basis of their benchmarks.

It is not surprising -- or should not be surprising -- that under these conditions
behaviours like random seed hacking are "rational". Academic fraud is a significant
and growing problem, and it would be amazing if somehow artificial intelligence was
immune to it. So of course it isn't.

Perhaps the most novel aspect in artificial intelligence has been the large-scale
involvement of corporations. This has been an effect in clinical work for some time,
so there are protocols that we can adopt from there: e.g., careful disclosure of 
conflicts

To me, these are severe problems. The proportion of publications from the big 
technology companies -- all of whom are selling their results both directly and 
indirectly -- is worrying. More worrying is that very few of them are open
about the conflict of interest this comprises. 

Pre-registration may be another technique, but it raises its own problems. 

### And back to machine learning

Machine learning and modern AI is a distinct departure from GOFAI, but not across
the board. There are changes that are specific to 

### Artificial intelligence I and Artificial intelligence II

### The solution: Guinnessometrics for AI


### References

[^2]:
    There is an old joke from 1980s AI that AI stops being AI as soon as it
    works. 

[^3]:
    Von Eckardt's primary modification from Laudan's is to drop one factor, whether or not
    a chosen tradition is required to have a higher rate of progress than the others. 
    This makes sense, and also explains why empirical and theoretical communities 
    could exist, side by side. 

* * *

Formulation 1: for an author, A, the probability of their papers having
a theorem in them, is relatively consistent.

1. We select authors with >= 10 papers from NeurIPS
2. Distribution of p, where p is probability of paper containing a theorem: is it bimodal?

