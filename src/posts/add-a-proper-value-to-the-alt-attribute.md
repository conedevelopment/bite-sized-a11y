---
title: 'Add a Proper Value to the Alt Attribute'
summary: 'By default, the images on the web aren’t available to blind or visually impaired users using screen readers.'
date: '2022-07-12'
issue: 1
tags: 'media'
github: 'https://github.com/conedevelopment/bite-sized-a11y/blob/master/src/posts/add-a-proper-value-to-the-alt-attribute.md'
resources:
  - title: 'Alt Text: Why It’s Important For Accessibility & SEO'
    url: 'https://moz.com/learn/seo/alt-text'
  - title: 'H37: Using alt attributes on img elements'
    url: 'https://www.w3.org/TR/WCAG20-TECHS/H37.html'
  - title: 'Alternative Text'
    url: 'https://webaim.org/techniques/alttext/'
---

By default, the images on the web aren’t available to blind or visually impaired users using screen readers. Omitting an alt value is one of the most common and easily fixable errors in web accessibility.

To make any image programmatically determinable (its content), you must use the `alt` attribute **with a well-suited value that describes its purpose and what’s on it well**.

If you have an image that is only (and honestly) decorative, use `alt=""` with an empty value to inform the screen reader that this image doesn’t contain any additional information.

Define the `alt` attribute on any image element to make it more understandable to the assistive technologies. Try to write a good and short (no more than 150 characters) description and use empty value if it is decorative.

```html
<img src="https://images.unsplash.com/photo-1623574226937-0dad1c9a0495" alt="A green bicycle that is standing before a lake.">
```
