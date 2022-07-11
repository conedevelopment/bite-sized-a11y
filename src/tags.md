---
title: 'Tag Archive'
layout: 'layouts/posts.html'
pagination:
  data: collections
  size: 1
  reverse: true
  alias: tag
permalink: '/tag/{{ tag | slug }}/'
---

<h1>Tagged “{{ tag }}”</h1>

<ol>
{% set taglist = collections[ tag ] %}
{% for post in taglist | reverse %}
  <li><a href="{{ post.url | url }}">{{ post.data.title }}</a></li>
{% endfor %}
</ol>
