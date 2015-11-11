---
layout: post
title: Information ecosystems and the engineering myth
author: Stuart
---

### A response to: "The Atlantic Was Wrong. Software Engineers Do Exist"

The debate starts with this:

<blockquote>
  An article written by Ian Bogost in The Atlantic today declared that
  programmers should “stop calling themselves engineers”, declaring it a
  disservice to the civic professionals who build our skyscrapers and heavy
  machinery.
</blockquote>

It is a spirited response, defending engineering as part of the software
sector. Unfortunately, it does so on the basis that what software engineers
do is, essentially *harder* than what developers and programmers do.

<blockquote>
  If Bogost is correct, and today’s computer programmers don’t really do that
  much complicated work, then we must acknowledge there is still a quiet class
  of true “software engineers” who are working hard to make it easy on the rest
  of us.
</blockquote>

The fallacy is fairly obvious when stated as two assumptions:

1. Engineering involves an aspect of public responsibility and service
2. Today’s computer programmers don’t do that much complicated work

Therefore

3. There exist true software engineers

This is a non sequitur. As stated, there is no way to draw this
conclusion, or even to link the premises. There are ways to connect them, but
they involve bridging inferences, such as:

1A. Engineering work that involves public responsibility is complicated

Bogost's point (1) is much better defended, although it's still contestable.
Attitudes to what counts as engineering vary between countries. In Canada, it's
a highly regulated profession, clearly skilled. That isn't true elsewhere. In
the UK, for example, repair technicians are typically engineers, yet they
would fall well outside Bogost's interpretation. So (1) is not universally
true, although there are states and sectors where it is.

Now, what about (1A)? In some areas, it's probably true. The electrical code
in Ontario is about 1500 pages, so it's a fair bet it's complicated. And this is
just a specification, it doesn't necessarily cover how things are supposed to be
done, just what is supposed to be done. 

, but we can fill in the implication.
The implied link is that "true" engineering is complicated, because it requires
acceptance of public responsibility and service.



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
