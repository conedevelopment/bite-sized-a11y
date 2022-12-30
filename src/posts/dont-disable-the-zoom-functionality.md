---
title: 'Don’t Disable the Zoom Functionality'
summary: 'The zoom functionality in the browsers is not there by accident; people use it. As a generic category, visual impairment is one of the most widespread disabilities.'
date: '2022-11-12'
issue: 14
tags: 'design'
github: 'https://github.com/conedevelopment/bite-sized-a11y/blob/master/src/posts/dont-disable-the-zoom-functionality.md'
resources:
  - title: 'Visual Impairment & Blindness Global Data & Statistics'
    url: 'https://www.lasereyesurgeryhub.co.uk/data/visual-impairment-blindness-data-statistics/'
  - title: 'Resize text: Understanding SC 1.4.4'
    url: 'https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html'
permalink: /14-dont-disable-the-zoom-functionality/
---

The zoom functionality in the browsers is not there by accident; people use it. As a generic category, visual impairment is one of the most widespread disabilities.

Disabling our content’s scalability affects many users and, in the end, is pointless. Leaving the capability of zooming in is not a thing that takes away anything from our site, application, or product. From a generic point of view, we shouldn’t take anything from our users that the browser or the OS provides.

To control the zoom, we can use the `viewport` meta with `user-scalable="no"` or the combination of `*-scale=1` values.

```html
<meta name="viewport" content="initial-scale=1, user-scalable=no">
<meta name="viewport" content="initial-scale=1, maximum-scale=1">
```

**Disabling the zoom is always a bad idea; if we do so, we need a compelling argument.**
