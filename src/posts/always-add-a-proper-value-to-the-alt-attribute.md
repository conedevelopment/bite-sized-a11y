---
title: 'Always add a proper value to the alt attribute'
summary: 'By default, the images on the web aren’t available to blind or visually impaired users using screen readers.'
date: '2022-07-12'
issue: 1
tags: 'media'
---
By default, the images on the web aren’t available to blind or visually impaired users using screen readers.

To make any image programmatically determinable (its content), you must use the `alt` attribute with a well-suited value that describes its purpose and what’s on it well.

If you have an image that is only (and honestly) decorative, use `alt=""` with an empty value, thus informing the screen reader that this image doesn’t contain any additional information.

Always define the `alt` attribute on any image element. Try to write a good alt description and use empty value if it is decorative.

Omitting an alt value is one of the most common and easily fixable errors in web accessibility.
