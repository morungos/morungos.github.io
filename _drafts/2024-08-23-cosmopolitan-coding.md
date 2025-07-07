---
layout: post
title: 'Cosmopolitan coding: the new risks of late modern software'
author: Stuart
background: '/img/posts/48349530722_4b0e1706ac_k.jpg'
summary: >-
  A blog post on the challenges of theorizing about complex systems such
  as large language models, seen through the lens of testing kittens.
tagline: |-
  How do we build ways to think about what's going on inside a really
  complex system, such as a large language model or a kitten?
image: '/img/posts/48349530722_4b0e1706ac_k.jpg'
image_description: |-
  Two small kittens, one black and white, the other a grey tabby, cuddling each other.
---

### Prologue: two Yorkshiremen, coding

Yorkshire coder 1: Who'd have thought thirty years ago we'd all be sitting here
writing TypeScript, using package managers to download code written in a
basement in Vermont, without even owning a single production computer?

Yorkshire coder 2: Luxury. Back then, we had to get up at four in the morning,
write code for sixteen hours, test it overnight when everyone else was asleep,
and if you had one bug, your boss would beat you round the head with a paper
tape reader.

Yorkshire coder 1: You try and tell the young people today that, and they won't
believe you.

## The short version of the argument

1. There has been a distinct modernization process for coding
2. There are three clear phases: early, classical, and late
3. The forces that drive the evolution of these phases are, substantially, risks
  - key pivots: widespread mainframes, open source
4. Summary of the argument
5. Implications: destandardization of labour
4. Implications: mourning the classical
- Stallman
- Blokey on LinkedIn
5. Where next?

## The modernization of software development

All mocking aside (I never mock), coding today is qualitatively different to how
it used to be, and for good reason. It has become a much more modern practice.
In the early days, even "computer science" wasn't a thing[^ComputerScience]. It
was programming, and writing code was a skilled *craft*, often done by women. 

[^ComputerScience]: Whether computer science is a science remains a fiery and
  contested topic. As we will see, I personally don't see it as a true science,
  but I do see the 'science' moniker as a marker of a modernized, more
  industrial, approach to software development. Computer engineering is 
  probably even less accurate. 

But there's a catch. Craft is hard. There is no doubt that some of the early
programs were a creative *tour de force*, but that level of skill is extremely
hard to deliver consistently, especially when demand increases. 

Not Rostrow

Generally, when demand starts to rise, you have a choice: either you get a
significant loss of quality, because people with less skill are recruited into
the process, or you harness some forms of technology[^Automation] to improve
productivity. Technology allows you to close the skill gap. 

[^Automation]: We tend to think of this as automation, but it isn't necessarily
  all automation. There are other ways technology can improve productivity:
  better tools, improving reliability of processes. For example, replacing
  alphabetical keyboards with the QWERTY keyboard layout, reducing the distances
  of common letter pairs, improves typing speed, but is certainly not automation
  in any meaningful sense. 

Much of this argument is an application of Ulrich Beck's theory of reflexive 
modernization, although the cast is a little different. Where Beck studies
tradition, its modernization in the form of industrial society, and the 
modernization of that through the risk society, coding is slightly different.
Industrial coding is a relatively new phenomenon, by comparison. 

So the terms don't fit exactly, but the question is -- are they useful? 

[ Diagram ]

+---------------------+------------------------------------------------------------------+
| Early modernity     | Establishment of progress as a social good, merchant capitalism, |
|                     | establishment of global trade                                    |
+---------------------+------------------------------------------------------------------+
| Classical modernity | Development of the industrial society through to the             |
|                     | information age, science as an organizing principle              |
+---------------------+------------------------------------------------------------------+
| Late modernity      |                    |
+---------------------+------------------------------------------------------------------+

## The three phases of software modernization

Like with other aspects of modernity, it may help to think of the evolution of
modern software through a number of distinct phases. This is something of an
analogy, but it broadly parallels modernization in other fields, like
manufacturing, art, and science. So, with your permission, I'll present the
model, and we can look at its strengths and weaknesses in a few moments.

### Early computing

In the early days of computing, it was mostly a case of getting the job done.
Early computing was essentially pure algorithm, and aligned very closely with
previous approaches to mathematics. This should not be too surprising.
Importantly, a computer was not designed out of thin air, or for some abstract
Turing machine. A computer was a model of the work performed by a human
computer, originally boys, and later women. As Bailey put it:

> “Von Neumann and Goldstine were not inventing the computer. They already knew
> what a computer was, what a computer did, and how long it took a computer to do
> it.” (Bailey)

A typical computing operation probably looked something like this.

<figure class="figure">
  <img class="img-fluid" src="/img/posts/500004225-03-01.jpg" 
       alt="A large scale tabulating operation, circa 1920, six rows of women working as human computers in a large room">
    <figcaption class="figure-caption">
    A large scale tabulating operation, circa 1920, staffed by human computers. 
    Image courtesy of the Library of Congress, accession number: 500004225
    </figcaption>
</figure>

This model was remarkably similar to the factory operations of large textile
mills -- also frequently staffed by children and women. It was, obviously, a
model very much rooted in industry. As Grier (2001) put it, "ultimately, the
history of the human computer traces not only the rise of mathematics in modern
science but also the introduction of the methods of manufacture into the
laboratory". But while the working patterns of the human computers themselves
were rooted in industrial modernization, the programming part was still very
different. For a glimpse of that, take a look at Lovelace's algorithm.

<figure class="figure">
  <img class="img-fluid" src="/img/posts/Diagram_for_the_computation_of_Bernoulli_numbers.jpg" 
       alt="Lovelace's algorithm for the computing of Bernoulli numbers -- a big table of operations">
    <figcaption class="figure-caption">
    Lovelace's algorithm for the computing of Bernoulli numbers
    </figcaption>
</figure>

This now resembles early coding. Down the side, we have a numbered list of
operations, addition, subtraction, multiplication, and division. The job of the
human computer is, essentially, to work through the steps, one step at a time,
storing intermediate values in "working variables" until you get to the end. 

Early *electronic* computers were, quite simply, machines that worked through
the steps automatically. The more skilled job was creating the set of operations
in the first place. Fundamentally, apart from that automation, nothing really
changed between Lovelace's time and the 1950s. The job of the programmer was, in
Dijkstra's terms, to *instruct* the machines (hence: instructions and
instruction sets as we see them today).

Note that in this era of computing, everything tended to be pure flow of
control. There is something intuitive about that -- as I have argued 
elsewhere. 



computing broadly followed the pattern of early modernization. It
was a pure craft, every person working in the field had come from another field, and
had to learn on the job, more or less. It was that human expertise that powered all 
work in the field. Early computing was a work of craft. 

The step by step procedural basis for this also reflects early autocoders like
FLOW-MATIC, and early languages like FORTRAN and BASIC. 

```
 (0)  INPUT INVENTORY FILE-A PRICE FILE-B ; OUTPUT PRICED-INV FILE-C UNPRICED-INV
     FILE-D ; HSP D .
 (1)  COMPARE PRODUCT-NO (A) WITH PRODUCT-NO (B) ; IF GREATER GO TO OPERATION 10 ;
     IF EQUAL GO TO OPERATION 5 ; OTHERWISE GO TO OPERATION 2 .
 (2)  TRANSFER A TO D .
 (3)  WRITE-ITEM D .
 (4)  JUMP TO OPERATION 8 .
 (5)  TRANSFER A TO C .
 (6)  MOVE UNIT-PRICE (B) TO UNIT-PRICE (C) .
 (7)  WRITE-ITEM C .
 (8)  READ-ITEM A ; IF END OF DATA GO TO OPERATION 14 .
 (9)  JUMP TO OPERATION 1 .
(10)  READ-ITEM B ; IF END OF DATA GO TO OPERATION 12 .
(11)  JUMP TO OPERATION 1 .
(12)  SET OPERATION 9 TO GO TO OPERATION 2 .
(13)  JUMP TO OPERATION 2 .
(14)  TEST PRODUCT-NO (B) AGAINST ; IF EQUAL GO TO OPERATION 16 ;
     OTHERWISE GO TO OPERATION 15 .
(15)  REWIND B .
(16)  CLOSE-OUT FILES C ; D .
(17)  STOP . (END)
```

As computers grew, so did the complexity of the algorithms, especially when the
techniques began to stray outside mathematics. Making sense of dates and times,
for example, starts to get much more complicated.

A typical industrial scale programming project might well involve a few 
thousand developers, often organized into crisply defined roles, such as 
analysts, programmers, and testers.[^IndustrialDevelopment]

[^IndustrialDevelopment]: I am not describing this arbitrarily. My first
  "proper" job was exactly like this. And on my very first day I was presented
  with a flowchart describing the whole of my job, which was substantially: get
  an algorithm from an analyst, convert it to code, write tests, review with
  peers, when tests pass, start over. 

Dijkstra's description of this era was "the general opinion that it was our
program's purpose to instruct our machines, in contrast to the situation of
today in which more and more people are leaning towards the opinion that it is
our machines' purpose to execute our programs" (Dijkstra). This is an intriguing 
mental model.

## Classical computing

In the classical period, which started to emerge in the later 1960s, computing began
to adapt to the needs of industrial software development. Earlier languages, which 
had primarily been designed simply to get the job done, met competition from those
which were designed to be "better". 

Dijkstra makes the point very clearly, in 1976's *The Discipline of Programming*:

> "I have tried to present programming rather as a discipline than as a craft.
> Since centuries we know two main techniques for transmitting knowledge and
> skills to the next generation. The one technique is characteristic for the
> guilds: the young apprentice works for seven years with a master, all knowledge
> is transferred implicitly, the apprentice absorbs, by osmosis so to speak, until
> he may call himself a master too. (This implicit transfer makes the knowledge
> vulnerable: old crafts have been lost!) The other technique has been promoted by
> the universities, whose rise coincided (not accidentally!) with the rise of the
> printing press; here we try to formulate our knowledge and, by doing so, try to
> bring it into the public domain." (Dijkstra, p215)

The old model here is tradition, craft. People learn the skills on the job, working
alongside others. It is replaced by a *modern* approach, based on learning from 
books, sharing knowledge publicly, and -- implicitly -- moving away from tradition.
This is modern because -- unlike tradition -- it embraces *progress*. We can create
and share newer and better ways of performing the tasks.

This is not the same as newer and better languages. Better tools are good, but
better methods are better. 

Beck's description of the difference between classical and late modernity is a 
little different. He suggests that classical modernization is "the modernization
of tradition", but late (or reflexive) modernization is "the modernization of
industrial society". 

Some of the hallmarks of classical modernization include:

* **Software development lifecycles** such as the "waterfall" model
* Separation of concerns
* Scalable flow of control, and in particular, the abolition of the 'goto'
  statement, as with Dijkstra's (1968) "Go To Statement Considered Harmful"
* The three P's: principles, patterns[^Patterns], and processes

[^Patterns]: Patterns are intriguing one, and I want to make a distinction here
  between patterns and pattern languages. Some patterns were a relatively early
  arrival into software. However, a distinct meta-level awareness of patterns as
  linked associations, and as a structuring organization, that is very much
  later, and, I would suggest, quite distinctive of late modernization. That is
  very different from, for example, designing a system to include a scheduler,
  an interpreter, a lock, or a module -- all of which had been common knowledge
  for several decades.

By this account, "peak" classical modernization in software development was
probably from the mid 1960s to the late 1970s, although there was still 
much happening both before and after that time. 

Therefore, some of the hallmarks of late modernization in software include:

* **Large, networked software library resources**, starting with CTAN in 1992,
  but closely followed by similar resources for other technologies as the
  internet started to grow.
* **Agile methodologies** are perhaps the most explicit reaction to industrial-style
  software development, indeed, [2001's agile manifesto](http://agilemanifesto.org) is about as close to 
  anti-industrial as you might find.
* Interactive development environments
* **Source code management systems**, while they are less obviously opposed to 
  anything industrial, show the signs of modernizing the industrial itself. 
* Co-pilots and AI assistants are the most recent markers

These all correspond to a downturn in the large computing teams, with a strong
separation of concerns between people as well as components. Very large software
teams are now the exception rather than the rule, and when they do exist, they
look completely different, typically with a small full-time core, and a wide
periphery of additional contributors.  

Six Sigma, lean management, are also typical of late, reflexive modernization. They 
are modernizing the processes of management, using the methods of modernization
on the process itself. The agile community would come to draw on this somewhat
later. 




Perhaps the clearest example of a high classical language was Ada. Ada was designed
from the beginning to enable design by contract. 

Ada was designed partly under contract to the US Department of Defense, and between 
1991 and 1997 it was more or less mandated in every contract. 

Arguably the first global "modern" programming language was PL/1, although Java 
probably represents the peak of classical languages. 

Why PL/1? Well, it was the first, global structured language intended for use
in industry. One of its goals was quite explicitly the improvement of productivity.

"One thing that we all have a tendency to say about AI systems is that they are
easier to build than more traditional programs." (John McDermott, in McDermott
et al., 1995)

"Our first "autocoders" (the later ones of which were denoted by misnomers such
as "automatic programming systems" or -even worse- "high level programming
languages") certainly did not cater to such possibilities. They were conceived
at a time when it was the general opinion that it was our program's purpose to
instruct our machines, in contrast to the situation of today in which more and
more people are leaning towards the opinion that it is our machines' purpose to
execute our programs. In those early days it was quite usual to find all sorts
of machine properties directly reflected in the write-up of our programs. For
instance, because machines had so-called "jump instructions", our programs used
"go to statements". Similarly, because machines had constant size stores,
computations were regarded as evolving in a state space with a constant number
of dimensions, i.e. manipulating the values of a constant set of variables.
Similarly, because in a random access store each storage location is equally
well accessible, the programmer was allowed to refer at any place in the program
text to any variable of the program." (Dijkstra, p81)

Aside: an early incarnation of handling risks within classical modernization
is Brooks's (1976) advocation for prototyping -- although it is worth noting
that prototyping was long established as an industrial method. So, Brooks's 
insight that not all risks can be foreseen, and yet, that there are solid
methods for minimizing those risks, is typical of classical modern software
development.

## Non-knowledge and late modernization

In his *World Risk Society*, which explores the impacts of risk on a more global
scale, we can find some of the clues to the next issue, in Beck's discussion of
*non-knowledge*.

The basis for the waterfall model is that risks are known, can be foreseen, and
mitigated by planning. However, as the world becomes increasingly complex, and
software does too, that begins to fall. Non-knowledge runs the gamut from
willful ignorance to the 'unknown unknowns'. 

This is, I believe, one of the areas where the agile movement (and it's antecedents ....)
were more right than wrong. It is, quite simply, impossible to foresee all risks. 



## Risks as drivers of modernization

Beck's thesis is that the primary driver for the transition from classical 
to late modernity is risk. The short version is: during the "classical" 
phase, wealth production matters more than risk production, and using the
"late" phase, risk production matters more than wealth production. 

In early stages, risks are, for want of a better word, natural. They cannot
be foreseen or avoided, any more than tornadoes or volcanoes. The "bugs"
of early computing could could, literally, be bugs. Valves might just 
fail. 

But as modernization progresses, a new kind of risk emerges, initially
as a latent side effect. 

Software life cycles, like the waterfall model -- and even the agile model --
emerged as ways to manage these risks. Finding a bug late is vastly more
expensive than not making one on the first place, so any means to prevent bugs
from getting that far are fair game. If the costs of a late bug are sufficiently
high, even techniques like formal methods become worthwhile. In a sense,
all that we do in software development, every innovation we create, they are
all intended to trade or manage risks. Let's see some examples.

* **Software libraries** allow risks to be distributed over a group. If you want
  to use secure sockets, and so do a few hundred other developers, sharing the
  code means risks are pooled, just like with insurance.
* **Public clouds** similarly allow us to pay someone else to manage risks for
  us. If there's a server failure, we may still lose transient service, but
  we're not having to worry about acquiring replacement hardware, getting
  engineers to install it, and rebuilding the basic system. All of that is handled
  by a provider. It's no different to a bank, really -- delegating care over 
  our assets to a full-time, professional organization, rather than storing our
  money under a mattress. 
* **Agile methods** can sometimes deservedly take a bad rap, but the original
  concept was a sound one, driven by the real risk that you might simply deliver 
  an application that was either fundamentally broken, or just didn't meet
  a customer's needs. It mitigates that risk by working alongside them on 
  features, so the risks of a big surprise at the end are reduced.

Beck's second point is that risks almost behave like an anti-money: where wealth
tends to accumulate at the top, risks tend to accumulate for the less
privileged. Think of the UK Post Office Horizon scandal: the people who were
prosecuted incorrectly were not the rich and powerful, but lowly
sub-postmasters. While there is a 'boomerang effect' 

## Destandardization of labour

> "In the current and coming waves of automation, this *system of standardized
> full employment* is beginning to soften and fray at the margins into
> flexibilizations of its three supporting pillars: labor law, work site and
> working hours. Thus the *boundaries between work and non-work* are becoming
> *fluid*. Flexible, pluralized forms of underemployment are spreading." (Beck,
> 1992, p 142, original emphasis)"

Hybriod labout, bertween paid and unpaid (Beck, p220) 
"the proportion of unpaid consumer labor is increasing"

