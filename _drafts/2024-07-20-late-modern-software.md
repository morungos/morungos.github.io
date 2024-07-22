---
layout: post
title: 'Late modern software and organized irresponsibility'
author: Stuart
background: '/img/posts/48349530722_4b0e1706ac_k.jpg'
summary: |-
  A blog post on the challenges of theorizing about complex systems such
  as large language models, seen through the lens of testing kittens.
tagline: |-
  How do we build ways to think about what's going on inside a really
  complex system, such as a large language model or a kitten?
image: '/img/posts/48349530722_4b0e1706ac_k.jpg'
image_description: |-
  Two small kittens, one black and white, the other a grey tabby, cuddling each other.
---

## The evolution of software

Let's start with a little history.

We can broadly classify software development into phases, which roughly parallel
modernity, as follows:

* **Early modern software** -- from machine code to mainframes, COBOL, FORTRAN, 
  programs were largely monolithic, and coding was a craft, with little in the 
  way of explicit architectural patterns.
* **Classical modern software** -- development of structured programming
  languages that enabled program architectures (e.g., C, 1972; Ada, 1980; Java,
  1995), abstraction, formal notations, source code management systems (SCCS,
  launched 1977). Programs as 'descriptions of abstract mechanisms' (cf.
  Dijkstra, 1976)
* **Late modern software**

Obviously these are trends rather than clear phases, in some application areas
the changes happened much earlier, or much later than others. But I think they 
represent the more evident changes

In particular, the highly that the way programs were organized has followed a
quite specific pattern of evolution, an evolution that paralleled the way
organizations changed over the same period. And in particular:

* Increasingly 'scientific' and 'industrial' methods of program construction 
  and division of labour
* Increasingly complex supply chains of components
* Increasing individualization

According to this narrative, "mass software" (for want of a better phrase -- and
this includes open source, but not only open source) has played a similar role
to "mass media" in other spheres of modernization, i.e., it provided the main 
motivating before behind the 'classical' period of software. 

> One consequence of the power of modern computers must be mentioned here. In
> hierarchical systems, something considered as an undivided, unanalyzed entity
> at one level is considered as something composite at the next lower level of
> greater detail; as a result the natural grain of time or space that is
> appropriate for each level decreases by an order of magnitude each time we
> shift our attention from one level to the next lower one. As a consequence,
> the maximum number of levels that can be distinguished meaningfully in a
> hierarchical system is more or less proportional to the logarithm of the ratio
> between the largest and the smallest grain, and, therefore, we cannot expect
> many levels unless this ratio is very large. In computer programming our basic
> building block, the instruction, takes less than a micro-second, but our
> program may require hours of computation time. I do not know of any other
> technology than programming that is invited to cover a grain ratio of 10^10 or
> more. The automatic computer, by virtue of its fantastic speed, was the first
> to provide an environment with enough "room" for highly hierarchical
> artifacts. And in this respect the challenge of the programming task seems
> indeed without precedent. For anyone interested in the human ability to think
> difficult thoughts (by avoiding unmastered complexity) the programming task
> provides an ideal proving ground. (Dijkstra, p210)

"Separation of concerns" (ibid, p211)

"I have tried to present programming as a discipline rather than a craft" (ibid, p215)


The next phase of modernization happened, I'd suggest, around the advent of the
internet, when source code became easy to share. Although it was early "open source", key steps included:
establishment of the CMU AI repository (1993), the GNU project, 


## Dependencies

One of the most significant changes has been the transition from monolithic 

## Why does this matter?

The answer to this is simple: it helps us understand risk in software. 

One of the most powerful changes in modernization is the way risk changes. Before
the modern era, risks were, for want of a better term 'natural'. They tended to be
things that were impossible to avoid, like storms and volcanoes. 

But as industrial methods started to take hold, risks needed to be taken in hand. 
If there was a risk that your latest batch of beer might go off, or might be too 
strong and gain attention from the taxman (it was, of course, a man at the time).
So, you need to change your methods to manage that risk. And science comes to
the rescue. This is the era of classical modernization, harnessing technology to
control risk. 

But when risk becomes quantified, you can go one step further: you can sell it.

The most visible change resulting from this is... supply chains.

## Supply chains

Not all that long ago, when you wrote a program to sell, you wrote *all the code*.
Yes, you'd choose a language vendor, but on the whole, the supply chain was pretty 
small. 

Today, applications have tens of thousands of dependencies. For example, 
[Movable Type](https://movabletype.org), a publishing system built in Perl, 
at one point depended on about two thirds of CPAN, that is, two things of
virtually all Perl libraries in existence. 