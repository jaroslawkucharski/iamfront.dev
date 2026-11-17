---
layout: ../layouts/MarkdownLayout.astro
id: accessibility
title: 'Accessibility'
description: 'Accessibility statement for iamfront.dev: WCAG 2.1 AA conformance, how it is tested, known limitations and contact.'
intro: 'I want everyone to be able to use this site comfortably – with a keyboard, a screen reader or zoomed in. The site is designed and tested for conformance with WCAG 2.1 level AA.'
updated: '2026-11-16'
---

## What works

- The whole site works with a keyboard: focus is always visible, and a “Skip to content” link lets you bypass the menu.
- Text and interface contrast meets level AA in both the light and the dark theme.
- You can turn animations off in the settings; the site also respects your system’s reduced motion setting.
- Images have text alternatives, and links that open in a new tab say so to screen readers.
- You can zoom text to 200% without losing content, and the layout adapts to screens from 320 px wide.
- The contact form has visible labels, and errors are described in text and linked to their fields.

## How I test it

Before every deployment, I check the changed pages with <strong>axe DevTools</strong> and <strong>Lighthouse</strong> – in both languages, in the light and dark theme, on desktop and mobile.

I also check the site by hand: keyboard-only use, zoom up to 400% and how it works without JavaScript.

## Known limitations

The downloadable CV files (PDF) may not be fully accessible to screen readers. If you need the CV in another format, write to me and I’ll send it.

## Report a problem

If something doesn’t work as it should, write to [jaroslaw.kucharski@iamfront.dev](mailto:jaroslaw.kucharski@iamfront.dev) or use the <a href="/#contact">contact form</a>. I take every report seriously and will reply as soon as I can.
