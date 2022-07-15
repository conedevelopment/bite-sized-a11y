---
title: 'Always Add a Proper Value to the Alt Attribute'
summary: 'By default, the images on the web aren’t available to blind or visually impaired users using screen readers.'
date: '2022-07-12'
issue: 1
tags: ['media', 'a11y']
github: 'https://github.com/conedevelopment/bite-sized-a11y/blob/master/src/posts/always-add-a-proper-value-to-the-alt-attribute.md'
resources:
  - title: 'Alt Text: Why It’s Important For Accessibility & SEO'
    url: 'https://moz.com/learn/seo/alt-text'
  - title: 'H37: Using alt attributes on img elements'
    url: 'https://www.w3.org/TR/WCAG20-TECHS/H37.html'
  - title: 'Alternative Text'
    url: 'https://webaim.org/techniques/alttext/'
---
By default, the images on the web aren’t available to blind or visually impaired users using screen readers.

To make any image programmatically determinable (its content), you must use the `alt` attribute with a well-suited value that describes its purpose and what’s on it well.

If you have an image that is only (and honestly) decorative, use `alt=""` with an empty value, thus informing the screen reader that this image doesn’t contain any additional information.

Always define the `alt` attribute on any image element. Try to write a good alt description and use empty value if it is decorative.

Omitting an alt value is one of the most common and easily fixable errors in web accessibility.

```html
<img src="your-image.png" alt="">
```
