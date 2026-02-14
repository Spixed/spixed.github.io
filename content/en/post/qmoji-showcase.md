---
title: Qmoji Showcase
date: 2024-05-23 15:00:00+08:00
draft: false
author: spixed
featured: false
categories: [Features]
tags: [Qmoji, Shortcodes]
description: Demonstrating the Qmoji shortcode integration.
---


Polymer supports QQ-style emojis (Qmoji) via shortcodes. These add a fun, expressive layer to your content.

## Usage

Use the `qq-emoji` shortcode followed by the emoji name.

```markdown
{{< qq-emoji "微笑" >}}
{{< qq-emoji "菜汪" "block" >}}
```

## Examples

### Static Images (APNG)

Standard static or simple animated emojis.

- Smile: {{< qq-emoji "微笑" >}}
- Cool: {{< qq-emoji "酷" >}}
- Cry: {{< qq-emoji "大哭" >}}

### Small Thumbnails

Smaller inline emojis.

- Shiver: {{< qq-emoji "发抖" >}}
- Sweat: {{< qq-emoji "流汗" >}}

### Lottie Animations

High-quality vector animations (if supported).

- Tears: {{< qq-emoji "流泪" >}}
- Party: {{< qq-emoji "庆祝" >}}

### With Prefix

You can also use the `/` prefix common in chat apps.

- Sex: {{< qq-emoji "/色" >}}

### Block Qmoji

- Smile: {{< qq-emoji "微笑" "block" >}}
- Vegetable Dog: {{< qq-emoji "菜汪" "block" >}}

## Full List

Check the [Koishi QFace documentation](https://koishi.js.org/QFace/#/qqnt) for a full list of supported names.
