---
layout: page
title: 'cBioPortal and Heliotrope'
subtitle: 'Translational bioinformatics for the win'
background: '/img/bg-about.jpg'
---

One field I particularly enjoyed working in was translational bioinformatics. I
ended up in this field almost by accident -- I had been working for a small
company offering application portfolio management. That involved taking an
entire organization's code base, parsing it, linking it, and creating a
searchable web site that helped developers trace connections as a management
tool. The process typically involved hundreds of millions of lines of code, in
maybe thirty or so different languages -- analyzing that code to assist
decision-making requires serious custom logic for extracting,
transforming, and loading the data, before it can be displayed.

Bioinformatics, particularly in clinical oncology, has many of the same
challenges. There are many different datasets involved, ranging from
[COSMIC](https://cancer.sanger.ac.uk/cosmic) (a database of mutations in
cancer), through [PubMed](https://pubmed.ncbi.nlm.nih.gov),
[PharmGKB](https://www.pharmgkb.org), as well as local data that cannot be
shared within each clinical research organization. Even more interestingly,
linking these to help decision-making is *hard*. COSMIC might name genes
differently from PubMed, and while there are standard namings for most genomic
variants, not everybody uses them correctly, or even at all. 

During this time I worked on two applications which both broadly aimed to 
give clinicians the information they needed.

The workflow was typically like this. If a patient is sadly diagnosed with a
form of cancer, samples of their tumour and of their blood are taken. Both were
put into genome sequencers, which essentially broke the DNA into short pieces
(sequencers can only read a few hundred bases in a go). Each of these gets turned 
into a string of As, Cs, Gs, and Ts. This gets put into an *aligner* which uses
matching to work out how these would match up to a reference for a typical
human. Of course, this is a bit fuzzy, we all have inherited differences which make
us the unique people we are. And then, the sample from the blood comes into play:
we subtract out the differences in the blood, so all we are left with us what's
known as *somatic* mutations -- where there's something like a mutation in the tumour
which is not there in the rest of the body. Those are the real point of interest, 
because some of these suggest what part of a cell's machinery have gone awry, and,
therefore, what kind of treatment might be best.

So far, so good. Many hospitals do something like this -- they might use different
technology (for example, some variants are relatively common, so sometimes there are
cheaper ways to detect them than sequencing everything).

But at the end of all this, we end up a list of variants in a particular tumour. For example, 
of the common ones is G12D in the KRAS gene, i.e., that a protein is misformed by substituting 
aspartic acid for glycine at position 12 in the protein sequence. This changes the behaviour
of the protein in a way that makes cells proliferate. KRAS G12D is easy, though, because it
is so well known -- the challenge is what information to help clinicians for the millions of
unknown variants in the other 20,000 or so human genes. 

## cBioPortal

cBioPortal is a Java application.

## Heliotrope

## Annotated bibliography

> Watt, S. N., Jiao, W., Brown, A. M. K., Petrocelli, T., Tran, B., Zhang, T.,
> McPherson, J. D., Kamel-Reid, S., Bedard, P. L., Onetto, N., Hudson, T. J.,
> Dancey, J., Siu, L. L., Stein, L., & Ferretti, V. (2013). Clinical genomic
> information management software linking cancer genome sequence and clinical
> decisions. Genomics, 102(3), 140–147.
> [https://doi.org/10.1016/j.ygeno.2013.04.007](https://doi.org/10.1016/j.ygeno.2013.04.007)
> ([*Full text available here*](https://www.sciencedirect.com/science/article/pii/S0888754313000700))



> Gao, J., Lindsay, J., Watt, S., Bahceci, I., Lukasse, P., Abeshouse, A., ... &
> Schultz, N. (2016). The cBioPortal for cancer genomics and its application in
> precision oncology. Cancer Research, 76(14_Supplement), 5277-5277.

