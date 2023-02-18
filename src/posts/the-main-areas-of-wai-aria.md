---
title: 'The Main Areas of WAI-ARIA'
summary: 'ARIA has three main areas that we can utilize: roles, properties and states.'
socialImage: '/img/social-thumbnails/the-main-areas-of-wai-aria.png'
date: '2023-01-11'
issue: 16
tags: ['aria']
github: 'https://github.com/conedevelopment/bite-sized-a11y/blob/master/src/posts/the-main-areas-of-wai-aria.md'
resources:
  - title: 'WAI-ARIA basics'
    url: 'https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics'
  - title: 'WAI-ARIA Roles'
    url: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles'
  - title: 'Using ARIA: Roles, states, and properties'
    url: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques'
  - title: 'aria-labelledby'
    url: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby'
  - title: 'aria-pressed'
    url: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-pressed'
---

ARIA has three main areas that we can utilize:

**Roles** define what an element does or means by adding a semantic meaning. Using roles, we can redefine how assistive technologies should treat an element. We mostly meet these roles on the structures of our websites/applications, but some scenarios overlap with the native HTML landmarks (so we don’t need a role).

```html
<form id="search" role="search">
  ...
</form>
```

**Properties** are additional information about an element that is communicated through the browser’s accessibility tree to assistive technologies. Using `aria-labelledby` on an HTML `<input>` element, we can add and share extra description text that a screen reader can connect and read.

```html
<div class="form-group">
  <label class="form-label" for="first-name">First Name</label>
  <input class="form-control" id="first-name" name="first-name" type="text" aria-describedby="first-name-description">
  <span id="first-name-description" class="form-description">Just a help text for presentation purposes.</span>
</div>
```

**States** are for managing the condition of an element. Using `aria-pressed="true"`, we can tell assistive technologies that this toggle button’s current state is pressed.

```html
<button aria-pressed="false">Play</button>
```

Using ARIA, we can give more information about our elements and behavior to the accessibility APIs.
