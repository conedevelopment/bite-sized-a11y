---
title: 'Watch Out for a Link and Its Surrounding Text Contrast'
summary: 'When it comes to links, visibility is essential. A user has to know what a link is in different contexts.'
socialImage: '/img/social-thumbnails/watch-out-for-a-link-and-its-surrounding-text-contrast.png'
date: '2023-03-06'
issue: 18
tags: ['color', 'contrast']
github: 'https://github.com/conedevelopment/bite-sized-a11y/blob/master/src/posts/watch-out-for-a-link-and-its-surrounding-text-contrast.md'
resources:
  - title: 'Link Contrast Checker'
    url: 'https://webaim.org/resources/linkcontrastchecker/'
  - title: 'Links'
    url: 'https://usability.yale.edu/web-accessibility/articles/links'
---

When it comes to links, visibility is essential. A user has to know what a link is in different contexts. One of the contexts is a body copy, a block of text where:

- The link must have a 3 : 1 contrast ratio to its surrounding body text.
- The link must have a 4.5 : 1 contrast ratio to its background.
- Its `hover` and `focus` state must have an additional visual indicator, typically underlined.

Although - right now - we do not necessarily have to underline a body copy text link as a default state (if it has a sufficient contrast), it is still the best option out there to mark it. Reducing the cognitive load is good for usability, and an underlined link will always stand out in its context. It is a default behavior; we should try not to remove it.
