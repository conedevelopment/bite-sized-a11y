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

**Roles** identify the purpose of an element or component. Using roles, we can revise how assistive technologies expose an element to assistive technology. Many HTML elements have implicit roles, so we do not need to specify them ourselves. For instance, `<button>` and `<main>` elements have an implicit role of `button` and `main`. Roles such as `menu` and `tab` don’t have equivalent HTML elements.

```html
<form id="search" role="search">
  ...
</form>
```

**Properties** provide accessibility information about an element that is conveyed to assistive technology via the browser’s accessibility tree. For instance, using `aria-describedby` on an HTML `<input>` element, we can associate text that provides additional information to the form field so that a screen reader can announce this to its user.

```html
<div class="form-group">
  <label class="form-label" for="first-name">First Name</label>
  <input class="form-control" id="first-name" name="first-name" type="text" aria-describedby="first-name-description">
  <span id="first-name-description" class="form-description">Just some helpful text related to entering your first name.</span>
</div>
```

**States** are for managing the condition of an element. Using `aria-pressed="true"`, we can tell assistive technologies that this toggle button’s current state is pressed.

```html
<button aria-pressed="true">Bold</button>
```
