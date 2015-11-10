---
layout: post
title: Information ecosystems and the engineering myth
author: Stuart
---

### A response to: "The Atlantic Was Wrong. Software Engineers Do Exist."

<blockquote>
  However, there are still software engineers deserving of the title, and
  the clue lies in a term used by Bogost himself: infrastructure.
</blockquote>

First of all, attitudes to what counts as an engineer do vary between
countries. In Canada, it's a highly regulated profession, clearly skilled.
In the UK, it's often only semi-skilled.

<blockquote>
  It’s become acceptable in tech media to portray software developers as self-entitled, overpaid neckbeards. Their readership, presumably of the nontechnical sort, accept this portrayal as accurate. But to perpetuate these stereotypes ignores those toiling thanklessly under the hood to give those overpaid “programmers” and “developers” such a cushy job in the first place.
</blockquote>

So part of the article is that engineers are the enablers: they provide
the infrastructure that allows everyone else to do their jobs.

And it's not true:

So here's a different version: engineers are the translators, the ones who take
research results and transform them into practical applications.

The problem with the concept of software infrastructure is that 99% of it is
truly awful. One of the examples in the article, OAuth, shows this nicely. OAuth2
(being precise) has a 75-page specification, although it's totally dependent on
sixteen other specifications.

What is "infrastructure" is relative.

Unlike most engineering systems, software is layered. This is because it's all
a construct, and we generally don't need to follow physical laws. Electricity
and physical forces are different: they're largely immutable. If there's a
50k volt power supply, that power is in there, and it cannot be completely
encapsulated to a point where nobody is aware of it. Software is different:
highly engineered components (and an operating system kernel is a fairly good
example) provides a nice clean interface, and by and large, people don't need
to know what's going on inside. In fact, the whole point in having an operating
system is to hide things like hardware differences. 
