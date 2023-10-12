---
title: 'Links and New Tab'
summary: 'Opening a link in a new tab is quite common (mostly with external links), but it is worth reconsidering.'
socialImage: '/img/social-thumbnails/links-and-new-tab.png'
date: '2023-05-14'
issue: 20
tags: ['design']
github: 'https://github.com/conedevelopment/bite-sized-a11y/blob/master/src/posts/links-and-new-tab.md'
resources:
  - title: 'External links: In or Out'
    url: 'https://www.digitala11y.com/external-links-in-or-out/'
---

Opening a link in a new tab is quite common (mostly with external links), but it is worth reconsidering.

The standard behavior for any link is to open in the same window. If we don't have a good argument to modify it, we should leave it as is.

If you open a link in a new tab, keep in mind:

- The user doesn't expect to leave your site. Opening a new tab means leaving it and can cause confusion.
- Use `target="_blank"` and `rel="noopener"` to open it properly and protect the link.
- A best practice is to use an "out arrow" icon and a hidden text (with a caption "open in new window") to mark these links.
- Opening a new tab can be a valid solution, e.g., a form with a privacy policy link. If you open the link with blank, you will retain the data in the populated fields.

```html
<a href="https://conedevelopment.com" target="_blank" rel="noopener">
  <span class="sr-only">Open in new window</span>
  Cone Development
  <svg class="icon">...</svg>
</a>
```
