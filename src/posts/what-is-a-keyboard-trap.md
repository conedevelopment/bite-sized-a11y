---
title: 'What Is a Keyboard Trap?'
summary: 'A keyboard trap is a phenomenon where you can’t escape from a context using the tab key. Your focus won’t move to the next focusable element.'
socialImage: '/img/social-thumbnails/what-is-a-keyboard-trap.png'
date: '2022-09-13'
issue: 11
tags: ['testing']
github: 'https://github.com/conedevelopment/bite-sized-a11y/blob/master/src/posts/what-is-a-keyboard-trap.md'
resources:
  - title: 'What are keyboard traps?'
    url: 'https://www.nomensa.com/blog/what-are-keyboard-traps'
  - title: 'Keyboard trap'
    url: 'https://www.a11y-collective.com/glossary/keyboard-trap/'
  - title: 'No Keyboard Trap - Understanding SC 2.1.2'
    url: 'https://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-trapping.html'
---

A keyboard trap is a phenomenon where you can’t escape from a context using the tab key. Your focus won’t move to the next focusable element.

This behavior can be intentional - _like when you open a modal and manage the focus from code, intentionally trap it inside a container_ - but can be accidental, totally breaking the keyboard accessibility.

Accidentally we usually create them when we make custom interactive components like a WYSIWYG editor where the tab key also has a meaning besides what it means in the global document scope.

The tab is an important key; using it, we can jump from focusable element to focusable element hence navigating the whole website or application. This type of navigation is popular next to exploring with the mouse.
