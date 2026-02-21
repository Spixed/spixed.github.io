---
title: Blog Detail Log
date: 2024-02-15 22:50:11+08:00
draft: false
author: spixed
featured: true
categories: [blog]
tags: [blog, hugo, github, git, theme]
description: ''
---



> 概要：该博客的建造&装修过程以及一些经验。

<!--more-->

> 前言：这个更新日志是我写的第二篇 blog，所以从这篇文章开始我将尽量坚持同时用中英文写。
>
> > （中文独有段落：本 blogger 的中文文风偏硬货风，一会儿装正经一会儿扯些有的没的，喜欢中英结合 [具体可见正文第一句]；英文部分时间不急迫大部分会自己写，但一般情况下会开翻译，所以如果你看到的是一堆直白简单的 words 就是本人写的，如果出现了多种高级用法，那不用怀疑就是作者开了（bushi
> >
> > 2024.2.18 22.13 补充：由于本文文字实在太多，作者决定本文不再编写英文版本，有兴趣者自行打开翻译。
> >
> > 2025.5.3 16:45 补充：现在又想尝试一下了 争取不用 DeepSeek /doge
> > 好吧还是用了（

## 一、背景

2023.8，我成功步入高中生活。经历了 2023.Q3 & Q4 的生活体验，我切实地体会到了老师们的***有趣***（当学生这么多年，头一次见到拥有这么多口头禅的老师 [手动/doge]），又在 Q4 的某一天度娘了一番，找到了某乎上本校的新人问话帖，也看到了我的各位老师，但是发现各位学长们对老师的介绍相当地潦草，于是有了为老师们留下一个 " 档案 " 的念头。2024.2.13 14 时左右，本人正在 surfing the Internet，然后就~~脑袋搭错一根筋~~一时兴起，加上之前~~蓄谋已久~~酝酿良久的想法，就准备再次入手一个 blog。

与以往不同，这是我第一次使用静态网站生成器 Hugo（链接见底部），第一次尝试自己修改编写得比较完善的主题（修改版链接见底部，原版链接 [在此](https://github.com/ThemeTony/hugo-theme-tony "ThemeTony/hugo-theme-tony - GitHub")），第一次使用纯手打 Markdown 写文章，第一次使用 GitHub Repo & GitHub Pages 托管 blog 服务，……数不清的第一次也是我决心坚持做下去的动力。

> 26.2.15: 由于原来的主题代码太臭太长，维护起来很完蛋，遂放弃Tony主题，同时开始新主题的搭建。下文于今日大改，将详细介绍新主题的搭建过程。

## 二、构建

> （接下来为程序员才敢兴趣的干货内容，无关人士请快速往下滑，这一段内容会很长。若你可以看到文章左侧的目录导航，请点击跳转至下一 part）

一年前这个时候，也是我刚拥有服务器没几个月的时候，我尝试过使用 Halo 和 WordPress 搭建动态博客，搭建 Halo 是因为我觉得用着挺舒服，而搭建 WP 就是纯粹地因为其知名程度而搭建的。

所以一开始，考虑到 Vercel、Netlify 搭建的网站国内目前不可访问，Gitee 又需要实名，所以当时我脑子里的第一想法是，白嫖 GitHub Actions 算力，用 Halo 搭建我的 blog。~~（虽然没多久我也知道了 GitHub Actions 不能持续化，至少的至少免费版不能）~~ 所以我去逛了一圈度娘，确定了走 Hugo(with the theme Tony) 的路线。

> 当时还不知道现在用移动网访问不了 github.io，最后 ver.0.1-dev 发布时回国访问才发现不行。。。就挺无语的

> 2024.2.18 16:34 补充：才发现 Netlify 现在能非常流畅地访问。。。不过因为作者手上没有域名，所以作者准备今天在 Netlify 上构建一个备用的访问地址。

> 2024.2.18 22:14 补充：今天应该是来不及了，明天再来吧。

### (1.1) 安装 - 传统方法

#### 1. VSCode

   > 之所以选它最主要是因为 VSCode 是真的轻量啊，与隔壁 WebStorm 相比占用磁盘空间，占用内存空间和启动速度根本不是一个级别的；其次，因为有 Hugo 这个静态网页生成器的存在，生成一篇文章实际上不需要我写太多代码，反而对 Markdown 的适配要求要高一点，因此，VSCode 是不二之选。

   官网：https://code.visualstudio.com

   Stable Windows 64-bit Admin-unsupported: https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user

   Insiders 官网：https://code.visualstudio.com/insiders/

   Insiders Windows 64-bit Admin-unsupported: https://code.visualstudio.com/sha/download?build=insider&os=win32-x64-user

   > 请放心打开，1200% 是官方最新版链接。
   >
   > 最好别问度娘，度娘的一页里面几乎全是冒牌货，除非你有作者这样明辨是非的双眼，否则尽量不要用度娘

   下载好后打开安装包，无脑下一步即可。

   > **{{< hl "orange" >}}Author's Warm Reminder: 千万不要乱改安装路径，以上安装包不支持使用管理员的身份运行，所以请不要妄图用上面提供的安装包将 VSCode 安装在 C:\Program Files 等文件夹里，不要问我怎么知道的，千万别问，问了我也绝对不会告诉你作者因为此安装了 10min 的 VSCode……{{< /hl >}}**

   26.2.15 14:22 补充：如今是AI IDE遍地开花的时代，市面上有很多各种各样的IDE，但90%都是基于VSCode开发的，故可以用其他的IDE，后续步骤基本上完全相同，有些甚至可以找AI帮忙完成。

   安装好后打开 VSCode，对其进行一定配置。

   按下图所示位置或按下快捷键 Ctrl+Shift+X 进入 VSCode Extensions 界面，

   ![VSCode 最左侧活动栏从上往下第五个按钮](/process/img-1.png)

   安装以下扩展（直接复制粘贴扩展名到搜索框中回车搜索，或者打开链接进官网打开安装）：

   > 每个扩展的图标我就不放了，建议各位还是直接点开链接安装吧。认准 VSCode 官网顶级域名：visualstudio.com

   | 扩展名 | 链接 |
   |-----|-----|
   |Chinese (Simplified) (简体中文) Language Pack for Visual Studio Code|https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans|
   |Markdown All in One|https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one|
   |Markdown Preview Github Styling|https://marketplace.visualstudio.com/items?itemName=bierner.markdown-preview-github-styles|
   |Even Better TOML|https://marketplace.visualstudio.com/items?itemName=tamasfe.even-better-toml|

   > 第一个简体中文语言包安装完后会提示你重启 VSCode，建议重启完后再进行下一步安装。

   > 26.2.15 补充：敲下这段文本时，作者在使用Trae，这个编辑器原生支持中文和 Markdown 文件预览，所以只需安装Even Better TOML 插件以获得更好的配置文件编辑体验。

   到此，VSCode 安装完毕。

#### 2. Git

   > 因为作者使用 GitHub 托管，所以要想方便地进行本地 - 云端文件同步还是得配置 Git。Git 本身也是一个比较命令繁多而迷惑的 CLI 程序，所以本文只会涉及部分指令，若遇问题请不要问作者，因为作者本人大概率也不能解决。

   这里只给出 Windows 教程，[macOS](https://git-scm.com/download/mac) & [Linux/Unix](https://git-scm.com/download/linux) 用户请点击对应链接绕路官网下载教程。

   Git 官网：https://git-scm.com/

   官网 Windows 下载页面：https://git-scm.com/download/win

   Windows v2.43.0 64-bit: https://github.com/git-for-windows/git/releases/download/v2.43.0.windows.1/Git-2.43.0-64-bit.exe

   下载完打开后按一次下 Next 同意协议，选择好安装路径后按 Next，随后几步推荐按照图示设置（也可以除了第一张图那里都设置成默认），剩下的一路 Next 即可。 ![img-2](/process/img-2.png)![img-3](/process/img-3.png)![img-4](/process/img-4.png)

   安装完成，记得把 Launch Git Bash 和 View Release Notes 取消勾选，然后点 Finish 关闭安装窗口。接下来，可以重启电脑（或者召唤任务管理器，选中 Windows 资源管理器，点击重启任务）刷新 path 环境变量。完事后再召唤出 PowerShell，输入 `git --version` 测试 Git 是否被成功加入 path 里。若正确弹出版本号（git version 2.43.0.windows.1）则 Git 安装完毕。

#### 3. hugo

   > **{{< hl "orange" >}}Author's Warm Reminder: 一定要下载 hugo_extended 版本，不然接下来你的 hugo 很多功能无法实现！这个地方作者还是做对了的，标红只是为了提醒各位。{{< /hl >}}**
>
   > 还有，下列操作涉及访问 GitHub，请根据本地网络情况考虑是否“外出学习”或者开启 GitHub 加速器

   GitHub Releases: https://github.com/gohugoio/hugo/releases/

   0.155.3 https://github.com/gohugoio/hugo/releases/download/v0.155.3/hugo_extended_0.155.3_windows-amd64.zip

   > 由于作者时间精力有限，目前的主题（截止 2026.2.15）仅能确保 Hugo Extended v0.151.0 ~ 0.155.3 能正常使用，若有问题请等待作者随缘/高考完有空再处理。

   下载下来之后解压到一个你觉得很舒服的位置，随后将这个位置添加进 path 里，重启电脑或重启资源管理器刷新 path，召唤 PowerShell（后文简写为 ps）运行 `hugo help`，若正常输出帮助内容则安装完毕。

### (1.2) 安装 - 非传统方法

   当我要在 Windows 上使用包管理器时，阁下又该如何应对？手动/doge

   这里以 chochlatey 为例。winget 和 scoop 差别不大，但是根据官方文档介绍，个人认为 chocolatey 才是最香的一个。

   用管理员身份召唤一个 ps，运行以下指令：

   > 下列操作涉及访问国外服务，若指令一直卡住，请准备好 " 外出学习 "。

   ```powershell
      Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
   ```

   命令执行完之后输入 `choco -V` 检查是否安装成功（可重开一个 ps 窗口再输入）

   接下来：

   ```powershell
   choco install -y vscode git hugo-extended
   ```

   等待命令执行完毕即可。

   当然 VSCode 安装后还是要回去进行配置的。

   所以是不是感觉很有一种感觉呢？{{< qq-emoji "菜汪" >}}

### (2) （可选）配置评论区

  目前 Polymer 主题仅支持 Waline 评论区。
  
  [Waline](https://waline.js.org) 是一款简洁、安全的评论系统，其特性包含快速、真·安全、Markdown 语法支持、轻量易用、免费部署、多种部署部署方式和存储服务支持等等。
  
  截止26.2.15，服务端和数据库均可以在 Vercel 上免费部署。部署教程请参考[此处](https://waline.js.org/guide/get-started/)或看[bilibili视频](https://www.bilibili.com/video/BV1Ft4y1A73f)，官网写得很详尽了，此处不再赘述。部署完成后，请记住你的评论系统URL(`https://waline.yourdomain.com/`)，后面 blog 的配置文件需要它。

  当然你也可以选择不启用评论区，在后面介绍配置文件时修改一行配置即可。

### (3) 创建 blog

#### 1. 本地构建

   ，找好一个地方放置你的 blog 文件夹（不用自己新建文件夹），在这里召唤 ps 运行：

   ```powershell
   hugo new site blog
   ```

   > hugo new site 后接的网站名（官方说法）可以替换，则后文所有的`blog`目录全都替换为你输入的名称。

   随后不用去管 ps 里面 hugo 输出啥，直接 cd 到 blog 文件夹下并运行：

   ```powershell
   git init
   git submodule add https://github.com/Spixed/polymer.git themes/polymer
   ```

   > 这是为该文件夹初始化 Git 并以子模块的形式添加主题 Polymer. 该操作涉及访问 GitHub，若访问缓慢或报错请记得开代理。
>
   > 其实这一步已经可以在 VSCode 里进行了，右键文件夹选择在 VSCode 中打开，或打开 VSCode，左上角文件 > 打开文件夹，或打开 VSCode，按下快捷键`Ctrl + K`，等程序加载完毕按下`Ctrl + Shift + \\`召唤终端（默认为 powershell，或者是新版的 pwsh）

  {{< hl "orange" >}}
   **Author's Warm Reminder: 如果要开代理，请使用虚拟网卡模式；若使用系统代理，请按以下内容操作**（以 Win10+ 为例，若使用 Clash 系列且没改过系统代理地址则可跳过步骤 1）：

   1. 打开设置 -网络和 Internet-代理，找到手动使用代理 -使用代理服务器，点击右方编辑，复制 IP 和端口

   2. 召唤 ps，运行：

      ```powershell
      git config --global http.proxy http://127.0.0.1:7890
      git config --global https.proxy http://127.0.0.1:7890
      ```

      > 将后面的那串地址改成 `http://your_ip:your_port` 的形式，如果是 Clash系列且未做更改则直接运行。若要取消代理则运行：

      ```powershell
      git config --global --unset http.proxy
      git config --global --unset https.proxy
      ```

   {{< /hl >}}

   然后就正式地需要 VSCode 帮忙了。打开 VSCode 至 blog 文件夹，找到根目录里的 hugo.toml，按如下内容配置：

   ```toml
baseURL = "your_blog_url" # 你的 blog 首页访问链接
languageCode = "en" # blog 使用的语言，"en" / "zh"
title = "Polymer Grid" # blog 的标题
theme = "polymer" # 主题，必须填为这个

[languages] # 多语言配置，非必要无需变动
  [languages.en]
    languageName = 'English'
    contentDir = 'content/en'
    weight = 1
  [languages.zh]
    languageName = '中文'
    contentDir = 'content/zh'
    weight = 2

[params]
  description = "A Digital Brutalism Theme" # blog 的描述，一般而言不重要
  math = true # 是否开启对数学公式的支持
  mathEngine = "mathjax" # 数学公式引擎，"mathjax" / "katex"
  favicon = "https://api.dicebear.com/7.x/bottts/png?seed=Polymer" # blog 的 favicon，建议使用正方形图片

[params.waline]
  enable = true # 是否开启 waline 评论系统
  serverURL = "your_waline_server_url" # 设置 waline 服务器地址，若不启用则无需设置

[taxonomies]
  category = "categories" # 分类
  tag = "tags" # 标签

[markup]
  [markup.goldmark]
    [markup.goldmark.renderer]
      unsafe = true # 是否开启对 HTML 标签的渲染，若开启则可能会导致安全问题，不开启则无法渲染 HTML 标签
    [markup.goldmark.extensions]
      [markup.goldmark.extensions.passthrough] # 配置 Passthrough 扩展，以在 Markdown 中使用 LaTeX。若开启 math 则必须按照以下方式配置。
        enable = true # 是否启用 Passthrough 扩展
        [markup.goldmark.extensions.passthrough.delimiters]
          block = [['$$', '$$'], ['\\[', '\\]']] # 块状公式的 delimiter
          inline = [['$', '$'], ['\\(', '\\)']] # 行内公式的 delimiter
   ```

   随后前往 data/author.toml 文件，编辑作者信息。本 blog 主题支持多作者，每个作者都需要在该文件中配置。

   ```toml
   [alex] # 作者配置项，alex 为作者 ID，可自定义，有唯一性
    name = "Alex Bold" # 作者姓名
    nickname = "Alex" # 作者昵称
    avatar = "https://api.dicebear.com/7.x/avataaars/png?seed=A&size=128" # 作者头像，建议使用正方形图片
    bio = { en = "A digital explorer loving brutalist designs.", zh = "热爱粗野主义设计的数字探索者。" } # 作者座右铭，英文和中文各写一个
    github = "https://github.com/example" # 作者 GitHub 账号
    website = "https://example.com" # 作者个人网站
    email = "alex@example.com" # 作者邮箱
    weight = 1
   ```

   改完后 Ctrl + S 保存，按下 `Ctrl + Shift + \\` 召唤 VSCode 的终端，输入 `hugo server -D` 试运行。打开浏览器访问 localhost:1313(or 127.0.0.1:1313)，出现正常页面（即你觉得十分美观，没有不和谐的地方），则本地构建姑且完毕。

#### 2. 上传至 GitHub

   > 这一步开始可能需要持续“外出学习”，请注意“学习费用”是否充足
   > 手动/doge

   打开 [GitHub](https://github.com)，有账号的登录，没账号的参考 [这篇文章](https://zhuanlan.zhihu.com/p/658727572)（过于完善，我就不再重复了{{< qq-emoji "菜汪" >}}）

   新建一个仓库，若准备直接使用 https://[username].github.io 作为博客的 baseURL 则请将该仓库命名为 [username].github.io，将 [username] 整体替换为你的 GitHub 用户名。然后，回到 VSCode，在终端中设置用户签名：

   ```powershell
   git config --global user.name [username]
   git config --global user.email [email]
   ```

   在这里设置的 username 和 email 虽然跟后面 git push 的关系不大，但是作者还是建议设置成一样的。

   然后回到 hugo.toml 文件编辑区，将 [your_blog_root_URL] 和 [your_github_homepage] 改成 [username].spixed.io 和 https://github.com/[username]，保存。

   按照这个路径新建一个文件：./.github/workflows/hugo.yaml，打开，复制以下文本到该文件，随后保存。

   ```yaml
  # Sample workflow for building and deploying a Hugo site to GitHub Pages
name: Deploy Hugo site to Pages

on:
  # Runs on pushes targeting the default branch
  push:
    branches:
      - main

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.
# However, do NOT cancel in-progress runs as we want to allow these production deployments to complete.
concurrency:
  group: "pages"
  cancel-in-progress: false

# Default to bash
defaults:
  run:
    shell: bash

jobs:
  # Build job
  build:
    runs-on: ubuntu-latest
    env:
      HUGO_VERSION: 0.155.3
    steps:
      - name: Install Hugo CLI
        run: |
          wget -O ${{ runner.temp }}/hugo.deb https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-amd64.deb \
          && sudo dpkg -i ${{ runner.temp }}/hugo.deb
      - name: Install Dart Sass
        run: sudo snap install dart-sass
      - name: Checkout
        uses: actions/checkout@v4
        with:
          submodules: recursive
          fetch-depth: 0
      - name: Setup Pages
        id: pages
        uses: actions/configure-pages@v5
      - name: Install Node.js dependencies
        run: "[[ -f package-lock.json || -f npm-shrinkwrap.json ]] && npm ci || true"
      - name: Build with Hugo
        env:
          HUGO_CACHEDIR: ${{ runner.temp }}/hugo_cache
          HUGO_ENVIRONMENT: production
          TZ: America/Los_Angeles
        run: |
          hugo \
            --gc \
            --minify \
            --baseURL "${{ steps.pages.outputs.base_url }}/"
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./public

  # Deployment job
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
   ```

   然后回到终端运行：

   ```powershell
   git add .
   git commit -m "first commit"
   git branch -M main
   git remote add origin https://github.com/[username]/[username].github.io.git
   git push -u origin main
   ```

   > 第一次运行到上面最后一条指令时会提示输入账号密码，请输入注册 GitHub 账号时设置的**用户名**和**密码**，随后确认。以后再次运行 git push 时便不会再要求登陆了。

   回到 GitHub，打开对应仓库 -Settings-Pages(https://github.com/[username]/[username].github.io/settings/pages)，找到 Build and deployment-Source 一项，将原本的 Deploy form a branch 切换为 Github Actions。然后，你就什么都不需要做了。切到 Actions(https://github.com/[username]/[username].github.io/actions/)，你可以看到有一个 Action 正在运行，待其前面的小点从黄色变成绿色，随后访问 https://[username].github.io，如果出现了前面运行 `hugo server -D` 时出现的页面，那么恭喜你，长征已接近尾声。

#### 3. 新建文章

   为了提升 VSCode 写文章的体验，下面需要先修改 archetypes/default.md 文件。其实也简单，用 themes/polymer/archetypes/default.md 文件替换掉当前项目的 archetypes/default.md 文件即可。

   回到 VSCode，终端中运行：

   ```powershell
   hugo new content post/[zh, en]/[filename].md
   ```

   [zh, en] 二选一，并将 [filename] 改成文章对应 Markdown 文件名。然后就是自由发挥时间。

#### 4. 写文章

   Hugo 默认使用 Markdown 语法，在新建的文件中用 Markdown 语法写作即可。写完并保存文件后，`Ctrl + Shift + \\`召唤出 PowerShell 窗口，运行 `hugo server -D`，访问 `http://localhost:1313` / `http://127.0.0.1:1313` 即可预览文章。

   屏幕面前的你有可能不认识、不会用 Markdown，善良的作者在此放俩基础教程：

   （推荐优先看）GitHub Flavored Markdown(GFM) 中文版教程：https://docs.github.com/zh/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

   国内热心网友版本：https://www.jianshu.com/p/ed47397774c4

   然后，在将文章发布之前，请配置好文章的元数据。元数据是文章的一些基本信息，比如标题、作者、发布日期等。你可以在文章的 Markdown 文件顶部找到元数据的位置（又称为Front Matter），按照以下格式填写即可。

   ```yaml
   ---
title: "文章标题"
date: 1111-11-11T11:11:11+08:00 # 文章发布日期，格式为：YYYY-MM-DDTHH:MM:SS+08:00
draft: true # 是否为草稿，true 为草稿，false 为已发布
author: "spixed" # 文章作者，填入 data/author.toml 文件中对应作者的 ID
featured: false # 是否为特色文章，true 为特色，false 为普通；特色文章会挂在首页 Hero 卡片中轮播
description: "" # 文章描述，没卵用但是可以设置
categories: [] # 文章分类
tags: [] # 文章标签
keywords: [] # 文章关键词，没卵用但是可以设置
weight: 0 # 文章权重，数值越大越靠前显示，默认值为 0
---
   ```

   接下来，就是非常常规的操作了。你可以继续使用 CLI 上传文件到 GitHub，但我更推荐使用 VSCode 的源代码管理功能。图形化，非常的简单，每次不需要敲那么多命令就能完成。

   在 VSCode 中找到左侧活动栏，从上往下第三个图标（参考遥远的上文中第一张图片，即 img-1），或者按 Ctrl + Shift + G 召唤源代码管理，在我们上一次使用 Git 将本地源代码上传至 GitHub 的时候 VSCode 自己已经做好了一切准备活动。召唤出的界面会出现两个提交按钮（即两个 Git 项目），如图：

   ![img-5](/process/img-5.png)

   上传自己的文章只需要用到第一个（即 blog）项目，另一个是遥远的前文中 `git submodule add ...` 带来的主题项目，这个项目一来对文章的生成没有关系，二来除了作者也没有直接提交修改 GitHub 上源代码的权限。

   将文章保存好后可以召唤 Git 管理界面，点击提交，会出现如下图的弹窗，![img-6](/process/img-6.png)

   如果没有特殊情况，我们可以直接选择是（不选始终的原因是怕出现特殊情况，具体有啥等各位自行探索，当然若你要当一往无前的勇士也可以直接来一手始终），随后本地的 Git 项目就更新成功了。要同步到 GitHub 上，只需点击出现的那个同步更改按钮即可。

   到此，新手教程彻底结束。

## 三、结尾

我是万万没想到这篇 blog 竟然会让我连续写这么多天，这篇文章的字数也是超出了我的想象。多说无益，2024.2.18 22.19，这篇文章彻底写完；2026.2.15 15:39，改文中文版写完。感谢各位读到此处的读者们。各位可以多多在下方 Waline 评论区踊跃评论 (也可以注册一个账号支持一下，谢谢各位看官大人)。
