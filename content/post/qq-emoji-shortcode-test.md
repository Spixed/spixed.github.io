+++
title = "QQ表情测试"
date = 2024-01-15T10:00:00+08:00
draft = false
author = "spixed"
featured = false
tags = ["测试", "QQ表情", "Hugo", "Shortcode"]
categories = ["技术"]
keywords = ["QQ表情", "Hugo", "Shortcode"]
weight = 0
+++

> 概要：对新实现的QQ表情Shortcode功能进行各种测试。

<!--more-->

这个页面用于测试新实现的QQ表情Shortcode功能。

## 测试 普通表情 vs 超级表情

使用 `{{</* qq-emoji "表情名" */>}}` 来插入表情：

- 微笑：{{< qq-emoji "微笑" >}}
- 惊讶：{{< qq-emoji "惊讶" >}}
- 大哭：{{< qq-emoji "大哭" >}}
- 流泪：{{< qq-emoji "流泪" >}} (超级表情，Lottie动画)
- 比心：{{< qq-emoji "比心" >}} (超级表情，Lottie动画)
- 打call：{{< qq-emoji "打call" >}} (超级表情，Lottie动画)

## 错误处理测试

不存在的表情会显示为fallback：

{{< qq-emoji "不存在的表情" >}}

## 在段落中的使用

这是一段普通的文字，{{< qq-emoji "微笑" >}} 中间插入了一个表情，{{< qq-emoji "得意" >}} 然后继续文字内容。


# {{< qq-emoji "惊讶" >}} 这是一个标题 {{< qq-emoji "惊讶" >}}
## {{< qq-emoji "菜汪" >}} 这是一个二级标题 {{< qq-emoji "菜汪" >}}
### {{< qq-emoji "色" >}} 这是一个三级标题 {{< qq-emoji "色" >}}
#### {{< qq-emoji "发呆" >}} 这是一个四级标题 {{< qq-emoji "发呆" >}}
##### {{< qq-emoji "得意" >}} 这是一个五级标题 {{< qq-emoji "得意" >}}
###### {{< qq-emoji "流泪" >}} 这是一个六级标题 {{< qq-emoji "流泪" >}}
> {{< qq-emoji "比心" >}} 这是一个引用 {{< qq-emoji "比心" >}}

---

**使用说明：**

1. **单个表情**：`{{</* qq-emoji "表情名" */>}}`
2. **批量处理**：`{{</* qq-emoji-text */>}}包含:/表情名:的文本{{</* /qq-emoji-text */>}}`
3. **表情名称**：去掉前后的斜杠，如 `/微笑` 写成 `微笑`
4. **自动识别**：系统会自动识别普通表情和超级表情，使用对应的显示方式
