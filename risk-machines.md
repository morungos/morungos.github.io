---
layout: page
title: 'Risk Machines'
background: '/img/bg-about.jpg'
sitemap: false
---

## Risk Machines

{: .mark}
This is very much a work in progress, so please do not share, cite,
or link to it. It'll be packaged and shared when I am good and ready.
Obviously, if you have any comments or suggestions, I would be very 
glad to hear from you.

{: .list-unstyled}
{% for chapter in site.chapters %}
* [**Chapter {{ chapter.chapter}} &mdash; {{ chapter.title }}**]({{ chapter.url }}) - 
  *{{ chapter.content | number_of_words }} words*
{% endfor %}
