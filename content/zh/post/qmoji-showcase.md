---
title: Qmoji 表情展示
date: 2024-05-23 15:00:00+08:00
draft: false
author: spixed
featured: false
categories: [功能]
tags: [Qmoji, Shortcodes]
description: 展示 Qmoji 短代码集成效果。
---


Polymer 主题通过短代码支持 QQ 风格的表情（Qmoji）。这为您的内容增添了一层有趣的表现力。

## 用法

使用 `qq-emoji` 短代码，后跟表情名称。

```markdown
\{\{< qq-emoji "微笑" >\}\}
\{\{< qq-emoji "block" "菜汪" >\}\}
```

## 示例

### 静态图片 (APNG)

标准的静态或简单动画表情。

- 微笑: {{< qq-emoji "微笑" >}}
- 酷: {{< qq-emoji "酷" >}}
- 大哭: {{< qq-emoji "大哭" >}}

### 小缩略图

较小的内联表情。

- 发抖: {{< qq-emoji "发抖" >}}
- 流汗: {{< qq-emoji "流汗" >}}

### Lottie 动画

高质量矢量动画（如果支持）。

- 流泪: {{< qq-emoji "流泪" >}}
- 庆祝: {{< qq-emoji "庆祝" >}}

### 带前缀

您也可以使用聊天应用中常见的 `/` 前缀。

- 色: {{< qq-emoji "/色" >}}

### 块状表情

- 微笑：{{< qq-emoji "微笑" "block" >}}
- 菜汪: {{< qq-emoji "菜汪" "block" >}}

## 完整列表

请查阅 [Koishi QFace 文档](https://koishi.js.org/QFace/#/qqnt) 获取支持名称的完整列表。
