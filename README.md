# Hugo Theme Tony

这是一个基于 Tony WordPress 主题移植的 Hugo 主题，具有简洁、优雅的设计风格。

## 特性

- 响应式设计
- 自定义头像和 Logo
- 文章目录（TOC）支持
- 支持多语言（i18n）
- 明暗模式切换
- 评论系统集成（Waline）
- 阅读进度条
- 文章归档
- 标签和分类支持

## 安装

1. 创建一个新的 Hugo 站点（如果尚未创建）：

```bash
hugo new site myblog
```

2.进入站点目录：

```bash
cd myblog
```

添加主题：

```bash
git submodule add https://github.com/Spixed/hugo-theme-tony themes/tony
```

4.修改配置文件（config.toml 或 hugo.toml）：

```bash
echo 'theme = "tony"' >> config.toml
```

## 配置

主题的配置主要在 `hugo.toml` (或 `config.toml`) 中设置。以下是主要配置项的说明：

### 基本配置

```toml
baseURL = "https://example.com/"
title = "网站标题"
languageCode = "zh-cn"
defaultContentLanguage = "zh-cn"
hasCJKLanguage = true  # 如果使用中日韩文字，建议设置为 true

# 主题选择
theme = "tony"

# 文章摘要字数限制
summaryLength = 35

# 启用 GitHub 风格的 Emoji 支持
enableEmoji = true

# 每页显示的文章数量
pagination.pagerSize = 39
```

### 作者信息

```toml
[params]
    [params.author]
        # 名字
        name = "作者名"
        # 邮箱
        email = "your-email@example.com"
        # 座右铭或简介
        motto = "个人简介"
        # 头像
        avatar = "/site/avatar.png"
        # 网站（默认：baseURL）
        website = "/"
        # GitHub 链接
        github = "https://github.com/yourusername"
    
    # 兼容旧版模板的作者配置
    author = "作者名"
```

### 站点信息

```toml
[params]
    # 网站 LOGO
    siteLogo = "/site/logo.png"
    
    # 网站描述
    siteDescription = "你的网站描述"
    
    # 主要文章部分
    mainSections = ["post"]
```

### 功能设置

```toml
[params]
    # 版权保护
    enableCopyright = true
    copyrightName = "CC BY-NC 4.0"
    copyrightLink = "https://creativecommons.org/licenses/by-nc/4.0/"

    # 目录设置
    enableToc = true

    # 阅读进度条
    enableReadingBar = true

    # 上下篇文章导航
    enableAdjacentPost = true

    # 是否显示 Hugo 和 Tony 主题的链接
    displayPoweredBy = true

    # Markdown 链接在新标签页打开
    hrefTargetBlank = true

    # 评论系统
    enableComments = true
    enableWaline = true
    walineServerURL = "https://your-waline-server.com"

    # 忽略警告日志
    ignoreLogs = ['warning-goldmark-raw-html']
```

### Markdown 渲染器配置

```toml
[markup]
    defaultMarkdownHandler = "goldmark"
    [markup.goldmark]
        [markup.goldmark.extensions]
            definitionList = true
            footnote = true
            linkify = true
            strikethrough = true
            table = true
            taskList = true
            typographer = false
        [markup.goldmark.parser]
            [markup.goldmark.parser.attribute]
                block = true
                title = true
            autoHeadingID = true
            autoHeadingIDType = "github"
        [markup.goldmark.renderer]
            hardWraps = true
            unsafe = true
    [markup.highlight]
        codeFences = true
        guessSyntax = true
        lineNos = true
        lineNumbersInTable = false
        noClasses = true
        style = "onedark"
    [markup.tableOfContents]
        startLevel = 2
        endLevel = 6
        ordered = true
```

### 输出格式配置

```toml
[outputs]
    page = ["HTML"]
    home = ["HTML", "SectionsRSS", "SectionsAtom"]
    section = ["HTML"]
    taxonomy = ["HTML"]

[mediaTypes]
    [mediaTypes."application/atom+xml"]
        suffixes = ["xml"]

[outputFormats]
    [outputFormats.SectionsAtom]
        mediaType = "application/atom+xml"
        baseName = "atom"
    
    [outputFormats.SectionsRSS]
        mediaType = "application/rss+xml"
        baseName = "rss"

[services.rss]
    limit = -1
```

## 文章格式规范

### 基本 Front Matter

每个 Markdown 文件的头部应包含以下 Front Matter：

```yaml
---
title: "文章标题"
date: 2023-01-01T12:00:00+08:00
lastmod: 2023-01-02T12:00:00+08:00
draft: false
tags: ["标签1", "标签2"]
categories: ["分类1", "分类2"]
author: "作者名"
description: "文章描述"
---
```

### 自定义 Front Matter

还可以添加以下自定义项：

```yaml
---
# 是否显示文章目录
toc: true
# 自定义文章封面图
cover: "/path/to/image.jpg"
# 是否允许评论
comments: true
# 是否在首页隐藏此文章
noclick: false
---
```

### 文章结构推荐

1. 使用层次分明的标题结构（h1-h6）
2. h1 通常只有文章的主标题一个
3. 文章内容从 h2 标题开始
4. 标题遵循层级关系，不跳级（如 h2 下直接使用 h4）

### 图片使用建议

图片可以使用相对路径或绝对路径：

1.相对路径：图片放在 `static` 文件夹下

```markdown
![图片说明](/images/example.jpg)
```

2.使用 Hugo 的资源管理（推荐）：

```markdown
{{< figure src="image.jpg" title="图片标题" alt="图片描述" >}}
```

## 创建新文章

使用 Hugo 命令创建新文章：

```bash
hugo new content/post/my-first-post.md
```

## 贡献

欢迎提交 Pull Request 或创建 Issues 来改进这个主题。

## 许可证

本主题基于 GPL-3.0 许可证开源。
