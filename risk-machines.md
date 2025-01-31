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


{: .list-unstyled.table-of-contents}
{% assign total = 0 %}
{% for chapter in site.chapters %}
{% assign count = chapter.content | number_of_words %}
{% assign total = count | plus: total %}
* [**Chapter {{ chapter.chapter}} &mdash; {{ chapter.title }}**]({{ chapter.url }}) - 
  *{{ count }} words*
{% endfor %}

**Total word count: {{ total }}**
