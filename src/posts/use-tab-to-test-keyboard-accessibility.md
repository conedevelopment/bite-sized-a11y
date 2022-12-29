---
title: 'Use Tab to Test Keyboard Accessibility'
summary: 'The keyboard accessibility is one of the essential parts of inclusivity that is easily testable.'
date: '2022-08-06'
issue: 8
tags: 'testing'
github: 'https://github.com/conedevelopment/bite-sized-a11y/blob/master/src/posts/use-tab-to-test-keyboard-accessibility.md'
resources:
  - title: 'Keyboard Accessibility'
    url: 'https://webaim.org/techniques/keyboard/'
  - title: 'Keyboard Testing Basics'
    url: 'https://knowbility.org/blog/2018/keyboard-testing-basics'
---

The keyboard accessibility is one of the essential parts of inclusivity that is easily testable. Using the tab key to jump through the interactive elements in our document manually is a simple but crucial step in any testing.

Also, navigating with the keyboard (with the tab key) is a fundamental interaction, just like the mouse.

In HTML [just a few elements can receive](https://stackoverflow.com/questions/1599660/which-html-elements-can-receive-focus) focus by default: `<select>`, `<inputs>`, `<button>` and `<a>`.

We can use the [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) attribute to alter this behavior which is often needed when we make an interactive component.

Using the tab key, we can make sure that:

- Our focus state has a proper contrast and/or focus ring.
- The document’s focus order is the same as it is seen on the screen.
- All of our focusable elements can get focus.
- Just the needed parts can get focus (not the hidden navigation).
- We can eliminate any [keyboard traps](https://bite-sized-a11y.com/11-what-is-a-keyboard-trap/).
