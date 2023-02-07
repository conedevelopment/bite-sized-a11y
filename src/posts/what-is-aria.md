---
title: 'What is ARIA?'
summary: 'WAI-ARIA stands for Web Accessibility Initiative - Accessible Rich Internet Applications Suite, which defines a way to make any web content, site, or application more accessible for people with disabilities.'
socialImage: '/img/social-thumbnails/what-is-aria.png'
date: '2022-10-07'
issue: 12
tags: ['standards', 'aria']
github: 'https://github.com/conedevelopment/bite-sized-a11y/blob/master/src/posts/what-is-aria.md'
resources:
  - title: 'WAI-ARIA Overview'
    url: 'https://www.w3.org/WAI/standards-guidelines/aria/'
  - title: 'aria-expanded'
    url: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded'
  - title: 'ARIA live regions'
    url: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions'
  - title: 'aria-hidden'
    url: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden'
---

WAI-ARIA stands for Web Accessibility Initiative - Accessible Rich Internet Applications Suite, which defines a way to make any web content, site, or application more accessible for people with disabilities.

It is a framework that introduces new roles (e.g., menu, slider) and properties (e.g., haspopup, expanded, hidden). It is a complete collection of solutions that can help us create more accessible, dynamic, custom code (like a calendar-based date picker) for people who navigate with a keyboard and/or screen reader software.

- We can communicate any collapsable element’s [open or closed state](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) (like in a case of a mobile - _hamburger_ - navigation).
- Using `aria-live`, we can interact with the screen readers and communicate with our users directly through voice.
- With `aria-hidden`, we can control what should display in the accessibility API.
