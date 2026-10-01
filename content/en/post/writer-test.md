---
title: Writer Test
date: '1987-03-14 12:34:00+08:00'
draft: true
author: spixed
featured: false
description: >-
  This article is specifically for testing the Blog
  Writer. It contains various Markdown formatted text, the 3 shortcodes
  unique to this blog, and various operation diaries (personally triggered and recorded by me).

  According to the blog theme code implementation, this text will not be used as the summary content displayed on the homepage.
categories:
  - Feature
tags:
  - Feature
keywords:
  - Feature
weight: 0
math: true
---
This article is specifically for testing the Blog Writer. It contains various Markdown formatted text, the 3 shortcodes unique to this blog, and various operation diaries (personally triggered and recorded by me).

This is the in-article summary. As the first line of non-quote content, the dropcap is correct

This is the text modified on another computer

This is the text modified on Blog Writer v0.2.0

Below is a horizontal rule

<!--more-->

# This is H1

## This is H2

### This is H3

#### This is H4

##### This is H5

###### This is H6

**This is bold**

*This is italic*

***This is bold italic***

`This is inline code`

- This is unordered list item 1
- This is unordered list item 2

1. This is ordered list item 1
2. This is ordered list item 2

> This is the 1st quote, and the dropcap is correct
>
> > 2 modes support typing `> ` for nested quotes

> 这是第2个引用，首字下沉正确

```python
# This is a code block
from random import randint
for i in range(randint(1, 5)):
    print(f"Text {i} font is correct")
```

```c
#include <stdio.h>

int main() {int num; printf("This is a super long code test, please enter a number"); scanf("%d", &num); printf("You typed %d", num); return 0;}
```

---

(The above is a horizontal rule)

![This is an image caption](/birthday_spixed/meme.png?width=130px "This is the image title, triggered by hovering the mouse for a long time")

| (1,1) | (1,2) | (1,3) |
| --- | --- | --- |
| (2,1) | (2,2) | (2,3) |
| (3,1) | (3,2) | (3,3) |

| (WYSIWYG) Supports pressing Enter<br>for line breaks within a cell | Supports pressing Tab to switch to the next | Supports dragging selected text to change position |
| --- | --- | --- |
| Supports pressing Tab on the last cell<br>to create a new row |  | Supports dragging all text within a selected cell to change position or create a new column |
|  |  | Press Tab here |
| This row will be created |  |  |

Inline formula: $G=mg$

Formula block:

$$
\text{Mass-energy equation}:\quad E = mc^2
$$

$$
\text{Pythagorean theorem}:\quad a^2+b^2=c^2\\
\text{Triangle inequality}:\quad ||a|-|b||<|a+b|<|a|+|b|
$$

$$
\text{Chemical equation}:\quad \ce{2 H2 + O2 \xlongequal{\text{ignition}} 2H2O}\\
\text{Reversible chemical equation}:\quad \ce{N2 + 3 H2 <=>[\text{high temperature, high pressure}][\text{catalyst}] 2NH3}
$$

$$
\begin{align} a^2 + b^2 &= c^2 \\
a^2 &= c^2 - b^2 \\
a &= \sqrt{c^2 - b^2} \end{align}
$$

{{% hl "orange" %}}Orange highlighted text{{% /hl %}}

{{% hl "yellow" %}}Yellow highlighted text{{% /hl %}}

{{% hl "green" %}}Green highlighted text{{% /hl %}} {{% hl "blue" %}}**Blue highlighted text**{{% /hl %}}

Inline emoji: {{< qq-emoji "surprised" >}}{{< qq-emoji "crying" >}}

Block emoji: {{< qq-emoji "surprised" "block" >}}{{< qq-emoji "crying" "block" >}}

Ruby annotation: {{< ruby "漢字" "かんじ" >}} {{< ruby "双拼" "ul pb" >}} {{< ruby "汉字" "hàn zì" >}} {{< ruby "小可爱" "大傻子" >}} {{< ruby "字数不对等" "三个字" >}}

Link: [Baidu](https://baidu.com)
