---
layout: post
title: 'More quotes'
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

As those of you I've met in person may know, I've been exploring the use of
tiny language models on inspirational quotes. So this is part progress update, 
and part reflections, given the challenges of trying to make it fit for 
purpose.

[All the previous work so far](/) was done using character-based recurrent
networks, which were relatively easy, and worked sort of okay. The flavour of
the quotes partly comes through in the generated versions, but they were
often obviously ungrammatical, so whether it worked out was partly luck. 

[Since I had present that](/) I've been considering how to "complete" it
(i.e., get it good enough to let it out of my hands). 

## Inspirational quotes as distilled rhetoric

The world of inspirational quotes is essentially, pure rhetoric, distilled into
one or two sentences. Pretty much any rhetorical device you can think of us
used, although some are particularly common. 

The table below shows many of the most common rhetorical figures, with examples
drawn from the data set. All of these are handily represented in the training
data. In fact, well over half of the quotes in the data match one or more of
these rhetorical forms.

Although almost any rhetorical figure can be used for impact, there are two
particularly common groups. First, the various forms of repetition, including
anaphora, antimetabole, diacope, epistrophe, and epizeuxis. And second, metaphor
and simile. 


| Device          | Description         | Example quote            |
|---------------- | ------------------- | ------------------- | 
| Alliteration    | Repeating initial sounds in adjacent words | "Every calm and quiet place is the true temple of the wise man" |
| Anacoluthon     | Changing syntax mid-sentence               | "Eternity is a terrible thought &mdash; I mean, where's it going to end?" |
| Anadiplosis     | Repeating a key word at the end and start of a new clause | "Inner peace can be reached only when we practice forgiveness &mdash; forgiveness is letting go of the past" |
| Anaphora | Repeating words at the beginning of clauses for rhetorical effect | "Everything we hear is an opinion, not a fact &mdash; everything we see is a perspective, not the truth" |
| Antimetabole | Repeating words in successive clauses, but in an opposite order | "There is no hope without fear, nor any fear without hope" |
| Apophasis | Bringing up an issue by explicitly not discussing it |  "Youth is something very new: twenty years ago no one mentioned it" |
| Aporia | Feigned doubt for rhetorical effect | "I confess I do not know why, but looking at the stars always makes me dream" |
| Chiasmus | Repeating syntactical forms, not mere words, in a transposed order | "Failing doesn't make you a failure &mdash; giving up, accepting your failure, refusing to try again, does" |
| Diacope | Repeating a word or phrase, with a single intervening word | "I can see myself before myself &mdash; a being through dark scenery" |
| Dysphemism | Using an offensive term for impact | "Experience is a dear teacher, but fools will learn from no other" |
| Epistrophe | Multiple repetitions of the same word at the end of a sequence of phrases | "Prepare to succeed, plan to succeed, strive to succeed, expect to succeed and you will surely succeed" |
| Epizeuxis | Repeating words in immediate succession for emphasis | "Every blade of grass has its angel that bends over it and whispers: grow, grow" |
| Hypallage | Switching the relationships between words to change the meaning | "Some people say funny things, but I say things funny" |
| Hyperbaton | Using an idiomatic word order for emphasis | "He doubly benefits the needy who gives quickly" |
| Hyperbole | Excessive exaggeration for rhetorical effect | "An undecided man is the worst disaster of the village" |
| Hypophora | Making a point through a question and an answer | "How can we learn to know ourselves? By reflection, never, but by our actions" |
| Litotes | Using a negative -- often a double negative -- to emphasize a point with irony | "Laughter is not a bad beginning for a friendship" |
| Meiosis | Using an underemphasis to make a point | "Geography is just physics slowed down, with a couple of trees stuck in it" |
| Metaphor | Suggesting a deeper analogy between concepts | "Fight falsehood with wisdom not violence, it is rain that grows flowers not thunder" |
| Oxymoron | Combining that usually don't make sense together | "Bitter wisdom is better than sweet folly" |
| Paradiastole | Reframing a vice as a virtue | "Do not be afraid to fail &mdash; most do every day" |
| Simile | Comparing two unlike things, typically using "like" or "as" |  "A conscience is like a baby &mdash; it has to go to sleep before you can" |
{:.w-100.table.table-striped}

**Table 1. Some of the more common rhetorical figures found in inspirational quotes**

This is why I am fascinated by AI and inspirational quotes -- AI is pretty bad at the 
substance, but it's surprisingly good at the nuances of the form. 

## So, back to validity

Testing a generative AI system is a big challenge, but now that we have something
vaguely resembling a *theory* of what we expect, we can begin. We can code our
output quotes, and see how well they do against some of these patterns. Note that
as before, we're using a very *very* small model, so that we can embed it, so 
grammar is often the first victim. 

Having said that, we do get close hits. Here's one:

> "If you want to be a fool, then you will not be a problem -- if you want to be
> a problem, you will never be a fool”

This one really impressed me -- it's got a lot of rhetoric in there -- although
it still doesn't really *mean* anything (which is, as far as I am concerned,
completely fine). We definitely see antimetabole and dysphemism. 

But, after all, this is a language model -- it's probabilistic, and can produce
surprises. 