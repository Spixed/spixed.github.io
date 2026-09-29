---
title: Writer Test
date: '1987-03-14 12:34:00+08:00'
draft: true
author: spixed
featured: false
description: >-
  这是专门用来测试Blog
  Writer的文章，里面会有各种Markdown格式文本，本blog特有的3个shortcode，以及各种（我亲自触发并记录的）操作日记。

  根据blog主题代码实现，这段文本不会作为显示在首页的摘要内容。
categories:
  - 功能
tags:
  - 功能
keywords:
  - 功能
weight: 0
math: true
---
这是专门用来测试Blog Writer的文章，里面会有各种Markdown格式文本，本blog特有的3个shortcode，以及各种（我亲自触发并记录的）操作日记。

这是文章内摘要。作为非引用内容第一行，首字下沉正确

这是在其他电脑上修改的文本

下面是分割线

<!--more-->

# 这是H1

## 这是H2

### 这是H3

#### 这是H4

##### 这是H5

###### 这是H6

**这是粗体**

*这是斜体*

***这是斜粗体***

`这是行内代码`

- 这是无序列表第1项
- 这是无序列表第2项

1. 这是有序列表第1项
2. 这是有序列表第2项

> 这是第1个引用，首字下沉正确
>
> > 2个模式下均可以输入`> ` 进行嵌套引用

> This is the 2nd quote, and the dropcap was correct

```python
# 这是代码块
from random import randint
for i in range(randint(1, 5)):
    print(f"Text {i} 字体正确")
```

```c
#include <stdio.h>

int main() {int num; printf("这是一段超长代码测试，请输入一个数字"); scanf("%d", &num); printf("You typed %d", num); return 0;}
```

---

（上面是分隔线）

![这是一个图注](/birthday_spixed/meme.png?width=130px "这是图片标题，鼠标长时间放上面触发")

| (1,1) | (1,2) | (1,3) |
| --- | --- | --- |
| (2,1) | (2,2) | (2,3) |
| (3,1) | (3,2) | (3,3) |

| （WYSIWYG）支持按Enter键<br>在单元格内换行 | 支持按下Tab键切到下一个 | 支持选中部分文字后拖拽换位置 |
| --- | --- | --- |
| 支持在最后一格时按Tab键<br>新建一行 |  | 支持选中单元格内所有文字后拖拽换位置或新建一列 |
|  |  | 这里按下Tab键 |
| 就会新建这一行 |  |  |

行内公式：$G=mg$

公式块：

$$
\text{质能方程}:\quad E = mc^2
$$

$$
\text{勾股定理}:\quad a^2+b^2=c^2\\
\text{三角不等式}:\quad ||a|-|b||<|a+b|<|a|+|b|
$$

$$
\text{化学方程式}:\quad \ce{2 H2 + O2 \xlongequal{\text{点燃}} 2H2O}\\
\text{化学可逆方程式}:\quad \ce{N2 + 3 H2 <=>[\text{高温、高压}][\text{催化剂}] 2NH3}
$$

$$
\begin{align} a^2 + b^2 &= c^2 \\
a^2 &= c^2 - b^2 \\
a &= \sqrt{c^2 - b^2} \end{align}
$$

{{% hl "orange" %}}橙色高亮文字{{% /hl %}}

{{% hl "yellow" %}}黄色高亮文字{{% /hl %}}

{{% hl "green" %}}绿色高亮文字{{% /hl %}} {{% hl "blue" %}}**蓝色高亮文字**{{% /hl %}}

行内表情：{{< qq-emoji "惊讶" >}}{{< qq-emoji "流泪" >}}

块状表情：{{< qq-emoji "惊讶" "block" >}}{{< qq-emoji "流泪" "block" >}}

注音：{{< ruby "漢字" "かんじ" >}} {{< ruby "双拼" "ul pb" >}} {{< ruby "汉字" "hàn zì" >}} {{< ruby "小可爱" "大傻子" >}} {{< ruby "字数不对等" "三个字" >}}

链接：[百度](https://baidu.com)
