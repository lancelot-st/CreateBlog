---
title: Customizing your style system
description: Tune the layout rhythm, navigation links, tag pages, and micro-interactions.
pubDate: 2026-03-22
tags:
  - design
  - configuration
  - customization
---

The first version of this project focuses on a practical editing surface instead of a visual builder.

## Visual templates

Choose one of these templates in `blog.config.json`:

- `spotlight` for bold hero blocks and elevated cards
- `editorial` for calmer spacing and print-like structure
- `terminal` for a more digital, grid-forward presentation

## Navigation and tag pages

Navigation items are defined in the `navigation` array. Tag pages are generated automatically from each post's `tags`.

## Click effects

Set `appearance.clickEffect` to one of the following values:

- `sparkle`
- `pulse`
- `confetti`
- `none`

## Next iteration ideas

If you want deeper customization later, add more template presets, MDX components, or a local preview tool that writes config changes for you.
