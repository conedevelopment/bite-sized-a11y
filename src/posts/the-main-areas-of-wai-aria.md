---
title: 'The Main Areas of WAI-ARIA'
summary: 'ARIA has three main areas that we can utilize: roles, properties and states.'
date: '2023-01-11'
issue: 16
tags: ['aria']
github: 'https://github.com/conedevelopment/bite-sized-a11y/blob/master/src/posts/the-main-areas-of-wai-aria.md'
resources:
  - title: 'WAI-ARIA basics'
    url: 'https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics'
  - title: 'aria-busy'
    url: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-busy'
  - title: 'Using ARIA: Roles, states, and properties'
    url: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques'
  - title: 'WAI-ARIA Roles'
    url: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles'
---

ARIA has three main areas that we can utilize:

- **Roles** define what an element does or mean. These are similar - and often overlap - with the HTML landmark elements like the `role="banner"` which is the same as the `<header>` element. We mostly meet these roles on the structures of our websites/applications but solve most of the problems with HTML.
- **Properties** are additional extensions to existing elements whose goal is to give more meaning to them. Using `aria-labelledby` we can extend our HTML `<label>` elements text with additional extended description.
- **States** are for managing the condition of an element. Using `aria-busy="true"`, we can tell assistive technologies that this element is being modified; please wait until it ends (like when you send an AJAX form).

Using ARIA, we can give more information about our elements and behavior to the accessibility APIs.
