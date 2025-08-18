---
layout: post
title: 'Micro-management by proxy: reflections on generative AI in the workplace'
author: Stuart
background: '/img/posts/IMG_6794.jpeg'
summary: >-
  This article describes how generative artificial intelligence tends to
  break apart teams, driving a wedge into the deep asymmetry between generating 
  information and using it. The result can be stressful for employees, but just
  as destructive on managers' strategy and vision.
image: '/img/posts/IMG_6794.jpeg'
image_description: "Cascade on the River Etherow"
---

As a software developer I've seen big changes in the way managers work with
teams, but generative artificial intelligence has taken it to a new level.
One of my colleagues -- loosely in the role of a 
["product owner"](https://www.scrum.org/resources/what-is-a-product-owner) -- is 
using generative AI to create a sequence of report
documents that -- they hope -- will assist me to solve some of the technical
challenges. Let's see how well that particular scenario played out.

For context, this work involves deep, low-level coding; almost entirely in C
and C++ on embedded systems with complex image processing pipelines and
dedicated hardware. There are a wide range of existing APIs involved, some old,
some new and fluid.

To date, I've received about 35 different reports, averaging around 10 pages
each, but some are up to 50 pages of content, varying from code samples to
detailed tables comparing alternative techniques. And some days, I'd have
three new ones before breakfast.

I will also readily admit that as a developer, I have firm (and occasionally 
inflexible) views on how managers
need to behave to a software team. We are not the easiest folks to manage. We
have a tendency to ADHD-like traits -- and my perception of the
move to agile-like approaches[^Agile] (broadly) was that it helps teams manage the
managers, by limiting the tendency to surprises.[^LasVegas].

[^Agile]: Please do not assume that any of us are recommending a "proper" agile method. we 
    don't. That said, I love the spirit of the agile manifesto, because it tries 
    to straddle the fine line of embracing flexibility while to some extent containing it. 

[^LasVegas]: On one memorable occasion, I got three entirely different radical
    changes in project direction in as many days, while my boss was at a trade
    show in Las Vegas, as each person spoke to had different needs. That is
    fine, but moving from idea to active task that frequently and inconsistently
    is a surefire way to push developers to the limits of their tolerance. 

So, with that caveat, here are some of the reflections I had on the effects of 
this usage of generative AI reports during day-to-day project work.

### 1. Strong use of the report genre

The reports looked good, visually they were glossy, professionally laid out, and
well-structured. That itself makes them seem persuasive. [As I have argued
before, persuasiveness is one of the strengths of artificial
intelligence](/2024/08/03/more-quotes/), and not in a good way. These are the
kinds of document that higher levels of management love, as they create the
illusion of considered thought. But in these reports, it is entirely illusory. 

You do not need to look far to see how thin this veneer is. For example, one
executive summary ends with: 

> "... This document uses UK English, adheres to ACM citation style, and ensures
> originality and copyright compliance." 

No real executive summary would ever say that -- especially as a final sentence,
which is where you want a nice punchy recommendation or conclusion. Firstly,
it's all obvious anyway, and secondly, it's off-topic. This is a theme we shall 
return to.

### 2. Long on comparison, short on depth

Consistently, in all reports, they put a lot of words into comparing and
contrasting things. I've seen this very consistently since the early days of
ChatGPT, and I'm convinced they're using a lot of essay-type tasks, either in
plain training, or, more likely, during reinforcement learning when, for
example, folks try to use them for undergraduate courseworks. 

Now there is a place for comparing and contrasting, but in [Bloom's
taxonomy](https://en.wikipedia.org/wiki/Bloom's_taxonomy), we usually want to
get beyond that, to critical evaluation.

Instead, what we get is a flood of information containing detailed 
numeric performance indications of the different options, often missing 
vital contextual information (as we will see in a moment). 

What we miss is a framework for assessing the options, and linking them
back to the project needs. When high throughput is a need, we need a 
coherent overview of that, but we don't get it. Instead, what we get
resembles a patchwork of vendor comparison tables, injected into the
tactical project decision-making.

### 3. Off-topic content is as big a problem as "hallucination"

I was expecting a lot of what we might impolitely call "bollocks" -- information
that is frankly wrong, or at best misleading. There is plenty of incorrect
information, but it's not as obvious as you might like.

To pick an example, latency is a big factor in this project. We need a fast response.
And these reports will merrily give you quantitative latency values, One of our
reports quoted the latency of the MJPEG image compression as "< 15ms" -- without
any source. Following up, an AI summary attributed a similar value to [this
StarLab
article](https://www.cuiyong.net/lunwen/2017/Furion-Engineering%20High-Quality%20Immersive%20Virtual%20Reality%20on%20Todays%20Mobile%20Devices.pdf),
which benchmarks virtual reality apps on smartphones. 

Problem is, these benchmarks are for *decompression*, which often does have hardware
acceleration. Hardware acceleration for MJPEG *compression* is a completely different
issue, and the computational challenges are much more significant[^MJPEG]. 

[^MJPEG]: Technical folks might want more context here. Most hardware
    acceleration for compression focuses on H.264 and H.265, which are more
    common, and better at compressing bigger videos, because they to compression
    over multiple frames. However, for low latency, MJPEG is (in theory) faster,
    because there's no need to wait for multiple frames before compressing. We
    can start to compress before we even have a full frame. Because the project
    performance requirements play a vital part in the assessment, here, by
    conflating compression and decompression, we risk making a sub-optimal
    design decision.

Is this hallucination? Not really -- the information is correct, in a different
context. It is more like missing the point. Within information retrieval, it
would not be considered
["relevant"](https://en.wikipedia.org/wiki/Relevance_(information_retrieval)) --
although to an untrained eye it *looks* relevant. And it could have been serious
-- leading to a lot of investment in development effort that might be entirely
wasted -- in effect creating a new source of [technical
debt](https://www.ibm.com/think/topics/technical-debt). At least in this
context, the big problem is the LLM is generating so much apparently-relevant
information that it's beyond the skill -- or the resources -- of *anyone* to
correct it.

### 4. Management by proxy and information overload

In this case, the effect was to establish a novel form of micromanagement,
effectively by proxy. The reports function -- this is one of the consequences 
of text genre of reports -- as a forceful factor in decision-making. The form
and structure of reports gives them a purpose: to tell us what to do. 

Now, I know the person and like them and trust them -- and
I am certain it was not due to a lack of confidence in the team. But I believe
there was a need for them to feel fully engaged in the development process, and
generative AI enabled that.

The problem is that there's a new asymmetry: it is very much faster to *create*
a large document than it is to *use* it. In the context of management, this
asymmetry enables more work and more risk to be pushed onto employees, faster.
Autonomy and delegation are reduced, because of this new form of micromanagement. 
I would put it this way: 

> **Because of the asymmetry between production and usage, generative artificial
> intelligence can, and likely will, enable harmful and** **dysfunctional
> patterns of interaction within a workplace.**

Speaking honestly, once or twice, the misunderstandings that these reports
introduced into the project direction had me wanting to bail out of
participating entirely -- until we managed to repair the overall view of the
project. I ended up saying, with feeling: "This constant rapid change of
direction gets me stressed and frustrated." On reflection, I attribute that lack
of direction to the tendency of these generative AI reports to go off topic
without those who prepared them being aware of it. So let's reflect a little more.

### 5. Generative AI as a direct threat to reflection

Big picture, then, there are problems. But I think my biggest concern was that
generative artificial intelligence directly prevented reflection -- particularly
reflection in the moment -- and therefore made it harder for us to handle our
emotions and grow in the workplace. 

[Donald Schön, in 1992's "The Reflective Practitioner"](https://www.taylorfrancis.com/books/mono/10.4324/9781315237473/reflective-practitioner-donald-sch%C3%B6n) 
described a model of reflection in professional practice that has three
phases or aspects:

* Knowledge in action -- in the situation
    - e.g., what do you know about the situation? How does that help?

* Reflection in action -- in the situation
    - e.g., what is going on, how do you feel in the moment?

* Reflection on action -- after the situation
    - e.g., what happened? why? how can we avoid it in future?

Table 1 below sketches out my different assessments of the impact of these
reports, both for and the manager, and how they impact reflection. My quick and
off-the-cuff thought is that, effectively, reflection (which is usually
considered a Good Thing for professional improvement) does take work. It does
not happen for free.

| Aspect of reflection | Me                         | Manager                                                         |
| -------------------- | -------------------------- | --------------------------------------------------------------- |
| Knowledge in action  | Reports don't add much; may solidify pre-conceived ideas, on occasion open new ones     | Reports create the illusion of knowing the situation and engaging in the work |
| Reflection in action | Information overload; frustration; lack of strategic thinking  | "Fire and forget" -- the report genre itself makes reflection redundant |
| Reflection on action | Technical debt; oriented to responsiveness rather than planning | Missing in action |
{:.table.table-striped}

**Table 1. Aspects of reflection impacted during this work.**

The report genre itself was a big part of the problem. [Trevor Collins, Paul
Mulholland and I wrote an article a good while
ago](https://isls.org/cscl/Euro2001/Papers/28.doc), discussing how textual
genres used play a vital role on managing how people grasp information,
especially within learning communities. I think there are some hard discussions
to be had on the impact of generative AI on communities of practice -- and these
impacts really haven't been considered yet, let alone addressed.

But I would draw particular attention to the overall pattern. It was bad for me, on the
receiving end, due to the stress and lack of strategy. But I think it is likely
even more harmful for the manager, who runs the risk of being completely
disconnected from all reflection processes entirely.

## Reflections on reflection

This is why I think the kind of "micromanagement by proxy" that we ended up
with, however we did end up with it, felt like a bad process. I understand the
appeal: it is always good for managers to feel like they are key to a successful
project outcome. But that does require work, on both sides. Generative AI makes
it much to easy to "fire and forget" information-rich missives than can cause
total chaos.

Particularly in anything involving technology, hardware and software, where
there are a gazillion competing constraints, it is really hard to stay focused
on a solid product outcome. The tendency of the generative LLMs to introduce the
occasional left-field surprise throughout the process -- not in a controlled way
-- was stressful, to say the least. And the tendency for sloppiness, off-topic
information, like casually ignoring the distinction between performance in
compression and in decompression,leads to making the whole information base for
the project harder to work with.

So, if you want to look at generative LLMs in the workplace, don't think only of
the errors and the hallucinations. This technology transforms the interaction
dynamics too -- in ways we may all come to regret. 
