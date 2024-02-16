+++
title = 'Blog Detail Log'
date = 2024-02-15T22:50:11+08:00
draft = false
+++

> 概要：该博客的建造&装修过程。
> 
> Brief Introduction: Construction and renovation of this blog.

> 前言：这个更新日志是我写的第二篇blog，所以从这篇文章开始我将尽量坚持同时用中英文写。
> 
> Preface: This update log is my second blog post, so I'll stick to writing in Chinese as much as possible from this post on.
>
> > （中文独有段落：本blogger的中文文风偏硬货风，一会儿装正经一会儿扯些有的没的，喜欢中英结合[具体可见正文第一句]；英文部分时间不急迫大部分会自己写，但一般情况下会开翻译，所以如果你看到的是一堆直白简单的words就是本人写的，如果出现了多种高级用法，那不用怀疑就是作者开了（bushi


## 正文开始

### 一、 背景
2023.8，我成功步入高中生活。经历了2023.Q3 & Q4的生活体验，我切实地体会到了老师们的***有趣***（当学生这么多年，头一次见到拥有这么多口头禅的老师[手动/doge]），又在Q4的某一天度娘了一番，找到了某乎上本校的新人问话帖，也看到了我的各位老师，但是发现各位学长们对老师的介绍相当地潦草，于是有了为老师们留下一个“档案”的念头。2024.2.13 14时左右，本人正在surfing the Internet，然后就~~脑袋搭错一根筋~~一时兴起，加上之前~~蓄谋已久~~酝酿良久的想法，就准备再次入手一个blog。

与以往不同，这是我第一次使用静态网站生成器Hugo（链接见底部），第一次尝试自己修改编写得比较完善的主题（修改版链接见底部，原版链接[在此](https://github.com/ThemeTony/hugo-theme-tony "ThemeTony/hugo-theme-tony - GitHub")），第一次使用纯手打Markdown写文章，第一次使用 GitHub Repo & GitHub Pages 托管blog服务，……数不清的第一次也是我决心坚持做下去的动力。

### 二、 构建
> （接下来为程序员才敢兴趣的干货内容，无关人士请快速往下滑，这一段内容会很长。若你可以看到文章左侧的目录导航，请点击跳转至下一part）

一年前这个时候，也是我刚拥有服务器没几个月的时候，我尝试过使用Halo和WordPress搭建动态博客，搭建Halo是因为我觉得用着挺舒服，而搭建WP就是纯粹地因为其知名程度而搭建的。

所以一开始，考虑到Vercel、Netlify搭建的网站国内目前不可访问，Gitee又需要实名，所以当时我脑子里的第一想法是，白嫖GitHub Actions算力，用Halo搭建我的blog。~~（虽然没多久我也知道了GitHub Actions不能持续化，至少的至少免费版不能）~~ 所以我去逛了一圈度娘，确定了走Hugo(with the theme Tony)的路线。

> 当时还不知道现在github.io国内访问成问题，最后ver.0.1-dev发布时回国访问才发现不行。。。就挺无语的

#### (1.1) 安装预备-传统方法

##### 1. VSCode
   
   > 之所以选它最主要是因为VSCode是真的轻量啊，与隔壁WebStorm相比占用磁盘空间，占用内存空间和启动速度根本不是一个级别的；其次，因为有Hugo这个静态网页生成器的存在，生成一篇文章实际上不需要我写太多代码，反而对Markdown的适配要求要高一点，因此，VSCode是不二之选。

   官网：https://code.visualstudio.com

   Stable Windows 64-bit Admin-unsupported：https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user

   Insiders官网：https://code.visualstudio.com/insiders/

   Insiders Windows 64-bit Admin-unsupported：https://code.visualstudio.com/sha/download?build=insider&os=win32-x64-user

   > 请放心打开，1200%是官方最新版链接。
   > 
   > 最好别问度娘，度娘的一页里面几乎全是冒牌货，除非你有作者这样明辨是非的双眼，否则尽量不要用度娘

   下载好后打开安装包，无脑下一步即可。

   > **<font color="#dd0000">Author's Warm Reminder: 千万不要乱改安装路径，以上安装包不支持使用管理员的身份运行，所以请不要妄图用上面提供的安装包将VSCode安装在C:\Program Files等文件夹里，不要问我怎么知道的，千万别问，问了我也绝对不会告诉你作者因为此安装了10min的VSCode……</font>**

   安装好后打开VSCode，对其进行一定配置。

   按下图所示位置或按下快捷键Ctrl+Shift+X进入VSCode Extensions界面，

   ![VSCode最左侧活动栏从上往下第五个按钮](/process/img-1.png)

   安装以下扩展（直接复制粘贴扩展名到搜索框中回车搜索，或者打开链接进官网打开安装）：

   > 每个扩展的图标我就不放了，建议各位还是直接点开链接安装吧。认准VSCode官网顶级域名：visualstudio.com

   | 扩展名 | 链接 |
   |-----|-----|
   |Chinese (Simplified) (简体中文) Language Pack for Visual Studio Code|https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans|
   |Markdown All in One|https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one|
   |Markdown Preview Github Styling|https://marketplace.visualstudio.com/items?itemName=bierner.markdown-preview-github-styles|
   |TOML Language Support|https://marketplace.visualstudio.com/items?itemName=be5invis.toml|
   
   > 第一个简体中文语言包安装完后会提示你重启VSCode，建议重启完后再进行下一步安装。

   到此，VSCode安装完毕。

##### 2. Git
   
   > 因为作者使用GitHub托管，所以要想方便地进行本地-云端文件同步还是得配置Git。Git本身也是一个比较命令繁多而迷惑的CLI程序，所以本文只会涉及部分指令，若遇问题请不要问作者，因为作者本人大概率也不能解决。

   这里只给出Windows教程，[macOS](https://git-scm.com/download/mac) & [Linux/Unix](https://git-scm.com/download/linux)用户请点击对应链接绕路官网下载教程。

   Git官网：https://git-scm.com/

   官网Windows下载页面：https://git-scm.com/download/win

   Windows v2.43.0 64-bit：https://github.com/git-for-windows/git/releases/download/v2.43.0.windows.1/Git-2.43.0-64-bit.exe

   下载完打开后按一次下Next同意协议，选择好安装路径后按Next，随后几步推荐按照图示设置（也可以除了第一张图那里都设置成默认），剩下的一路Next即可。 ![img-2](/process/img-2.png)![img-3](/process/img-3.png)![img-4](/process/img-4.png)

   安装完成，记得把Launch Git Bash和View Release Notes取消勾选，然后点Finish关闭安装窗口。接下来，可以重启电脑（或者召唤任务管理器，选中Windows资源管理器，点击重启任务）刷新path环境变量。完事后再召唤出PowerShell，输入`git --version`测试Git是否被成功加入path里。若正确弹出版本号（git version 2.43.0.windows.1）则Git安装完毕。

##### 3. hugo
   
   > **<font color="#dd00000">Author's Warm Reminder: 一定要下载hugo_extended版本，不然接下来你的hugo很多功能无法实现！这个地方作者还是做对了的，标红只是为了提醒各位。</font>**
   
   > 还有，下列操作涉及访问GitHub，请根据本地网络情况考虑是否“外出学习”或者开启GitHub加速器
   
   GitHub Releases：https://github.com/gohugoio/hugo/releases/

   0.122.0 https://github.com/gohugoio/hugo/releases/download/v0.122.0/hugo_extended_0.122.0_windows-amd64.zip

   下载下来之后解压到一个你觉得很舒服的位置，随后将这个位置添加进path里，重启电脑或重启资源管理器刷新path，召唤PowerShell（后文简写为ps）运行`hugo help`，若正常输出帮助内容则安装完毕。

#### (1.2) 安装-非传统方法

   当我要在Windows上使用包管理器时，阁下又该如何应对？手动/doge

   这里以chochlatey为例。winget和scoop差别不大，但是根据官方文档介绍，个人认为chocolatey才是最香的一个。

   用管理员身份召唤一个ps，运行以下指令：

   > 下列操作涉及访问国外服务，若指令一直卡住，请准备好“外出学习”。

   ```powershell
      Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
   ```

   命令执行完之后输入`choco -V`检查是否安装成功（可重开一个ps窗口再输入）

   接下来：
   ```powershell
   choco install -y vscode git hugo-extended
   ```

   等待命令执行完毕即可。

   当然VSCode安装后还是要回去进行配置的。

   所以是不是感觉很有一种感觉呢？手动/doge

#### (2) 创建blog

   > 2024.2.16 1:29 写到此处 作者累了，改日再写吧
   > 
   > 还有，看样子这一片会非常的长……要不我还是分成两个文件写吧，然后再改改主题，让它支持切换语言？
   > 
   > 真要那样的话，那可又是一堆工作量啊……
   > 
   > 这个凌晨就先这样吧，commit去了，886

   > 2024.2.16 9:35 满血复活 回来再战

   ##### 1. 本地构建

   在我已经将主题修改好的情况下，其实工作量没有那么的大。所以，找好一个地方放置你的blog文件夹（不用自己新建文件夹），在这里召唤ps运行：
   ```powershell
   hugo new site blog
   ```
   > hugo new site后接的网站名（官方说法）可以替换，则接下来的blog目录全都替换为你输入的名称。

   随后不用去管ps里面hugo输出啥，直接cd到blog文件夹下并运行：

   ```powershell
   git init
   git submodule add https://github.com/Spixed/hugo-theme-tony.git themes/tony
   ```

   > 这是为该文件夹初始化Git并以子模块的形式添加主题ThemeTony. 该操作涉及访问GitHub，若访问缓慢或报错请记得开代理。
   
   > 其实这一步已经可以在VSCode里进行了，右键文件夹选择在VSCode中打开，或打开VSCode，左上角文件-打开文件夹，或打开VSCode，按下快捷键Ctrl + K，等程序加载完毕按下Ctrl + Shift + `召唤终端（默认为powershell，或者是新版的pwsh）

   <font color="#dd0000">
   **Author's Warm Reminder: 如果要开代理，请一定先按以下内容操作！！！**（以Win10+为例，若使用Clash系列且没改过系统代理地址则可跳过步骤1）：

   1. 打开设置-网络和Internet-代理，找到手动使用代理-使用代理服务器，点击右方编辑，复制IP和端口
   
   2. 召唤ps，运行：

      ```powershell
      git config --global http.proxy http://127.0.0.1:7890
      git config --global https.proxy http://127.0.0.1:7890
      ```

      > 将后面的那串地址改成http://your_ip:your_port的形式，如果  是Clash系列且未做更改则直接运行。若要取消代理则运行：

      ```powershell
      git config --global --unset http.proxy
      git config --global --unset https.proxy
      ```
   
   不要问作者怎么又来红色爱心提醒，问就是别问。。。
   </font>
   
   然后就正式地需要VSCode帮忙了。打开VSCode至blog文件夹，找到根目录里的hugo.toml，按如下内容配置（直接复制，修改[your_balabala]对应内容即可）：

   > 若你觉得以下全英文内容看着烦，可找到themes/tony/configI18N/config.zh.toml参照下方[your_balabala]的位置进行配置。

   ```toml
########################################
# Site configuration
# Icon: https://RemixIcon.com/

baseURL = "[your_blog_root_URL]"
title = "[your_blog_title]"
languageCode = "zh-cn"
defaultContentLanguage = "zh-cn"
hasCJKLanguage = false

# Theme selection
theme = "tony"

# `hugo new` text editor for automatically opening new articles
newContentEditor = ""

# Summary word limit
summaryLength = 35

# Whether to enable GitHub style Emoji writing
enableEmoji = true

# Number of articles per page
paginate = 39

# author information
[author]
    # First name
    name = "[your_name]"
    # Mailbox
    email = "[your_email]"
    # Motto or introduction
    motto = "[your_motto]"
    # Avatar
    avatar = "/site/avatar.png"
    # Website (default: baseURL)
    website = "/"
    # GitHub
    github = "[your_github_homepage]"

# Page category
[taxonomies]
  category = "categories"
  tag = "tags"

########################################
# Menu configuration

# The configuration instructions in the menu are as follows:
# url link address
# name text (leave blank ("") no)
# weight

[menu]
    # Menu Bar
    [[menu.main]]
        url = "/"
        name = "Home"
        weight = 1
    [[menu.main]]
        url = "/categories"
        name = "Categories"
        weight = 2
    [[menu.main]]
        url = "/tags"
        name = "Tags"
        weight = 3
    [[menu.main]]
        url = "/about/"
        name = "About"
        weight = 4

[[params.pinned]]
    title = "[your_homepage_title]"
    name = "[your(author's)_name]"
    icon = "ri-code-box-line"
    url = "/about#about-me"

# Markdown renderer
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
            attribute = true
            autoHeadingID = true
            autoHeadingIDType = "github"
        [markup.goldmark.renderer]
            hardWraps = true
            unsafe = true
            xHTML = false
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

# Hugo output control
[outputs]
    page = ["HTML"]
    home = ["HTML", "SectionsRSS", "SectionsAtom"]
    section = ["HTML"]
    taxonomy = ["HTML"]

# Atom file format media type
[mediaTypes."application/atom+xml"]
    suffixes = ["xml"]

# Tony theme custom Atom template from MemE
[outputFormats.SectionsAtom]
    mediaType = "application/atom+xml"
    baseName = "atom"

# Tony theme customized RSS template from MemE
[outputFormats.SectionsRSS]
    mediaType = "application/rss+xml"
    baseName = "rss"

# RSS & Atom Article limit
[services.rss]
    limit = -1

########################################
# Theme configuration

[params]

    #####################################
    # Site Information

    # Site LOGO
    siteLogo = "/site/logo.png"
    
    # Site description
    siteDescription = "[your_site_description]"

    #####################################
    # Copyright Protection

    # Whether to open
    enableCopyright = true

    copyrightName = "CC BY-NC 4.0"
    copyrightLink = "https://creativecommons.org/licenses/by-nc/4.0/"

    #####################################
    # table of Contents
    
    # Whether to open (global settings)
    enableToc = true

    #####################################
    # Reading progress bar
    
    # Whether to open (global settings)
    enableReadingBar = true

    #####################################
    # Article up and down page
    
    # Whether to open (global settings)
    enableAdjacentPost = true

    #####################################
    # Whether to show the link between Hugo and Tony

    displayPoweredBy = true

    #####################################
    # Markdown Related

    # Open link in new tab page?
    hrefTargetBlank = true

    #####################################
    # Comments

    # Whether to open (global settings)
    enableComments = false
    # Description: "comments" in the front Matter of the article
    # Has priority over here

    # ## Valine
    # enableValine = false
    # valineVersion = "latest"
    # valineAppId = ""
    # valineAppKey = ""
    # valinePlaceholder = ""
    # valinePath = ""
    # valineAvatar = "mm"
    # valineMeta = ["nick", "mail", "link"]
    # valinePageSize = 15
    # valineVisitor = true
    # valineHighlight = true
    # avatarForce = true
    # valineRecordIP = true
    # valineServerURLs = ""
    # valineEmojiCDN = ""
    # valineEmojiMaps = """"""
    # valineEnableQQ = false
    # valineRequiredFields = []
    # Description: https://valine.js.org/

    ## Waline
    enableWaline = false
    walineServerURL = ""

    #####################################
    # Google Analytics

    enableGoogleAnalytics = false

    # Type of tracking code
    trackingCodeType = ""
    # Description: gtag or analytics

    trackingID = ""

    #####################################
    # Google Site Verification

    googleSiteVerification = ""


    #####################################
    # Baidu push

    enableBaiduPush = true
   ```

   改完后Ctrl + S保存，按下Ctrl + Shift + \`召唤VSCode的终端，输入`hugo server -D`试运行。打开浏览器访问localhost:1313(or 127.0.0.1:1313)，出现正常页面（即你觉得十分美观，没有不和谐的地方），则本地构建姑且完毕。

   ##### 2. 上传至GitHub

   > 这一步开始可能需要持续”外出学习“，请注意“学习费用“是否充足　手动/doge

   打开[GitHub](https://github.com)，有账号的登录，没账号的参考[这篇文章](https://zhuanlan.zhihu.com/p/658727572)（过于完善 我就不再重复了/doge）

   新建一个仓库，若准备直接使用https://[username].github.io作为博客的baseURL则请将该仓库命名为[username].github.io，将[username]整体替换为你的GitHub用户名。然后
   
   然后，回到VSCode，在终端中设置用户签名：

   ```powershell
   git config --global user.name [username]
   git config --global user.email [email]
   ```

   在这里设置的username和email虽然跟后面git push的关系不大，但是作者还是建议设置成一样的。

   然后回到hugo.toml文件编辑区，将[your_blog_root_URL]和[your_github_homepage]改成[username].spixed.io和https://github.com/[username]，保存。

   按照这个路径新建一个文件：./.github/workflows/hugo.yaml，打开，复制以下文本到该文件，随后保存。
   ```yaml
   # Sample workflow for building and deploying a Hugo site to GitHub Pages
name: My Blog

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
      HUGO_VERSION: 0.122.0
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
        uses: actions/configure-pages@v4
      - name: Install Node.js dependencies
        run: "[[ -f package-lock.json || -f npm-shrinkwrap.json ]] && npm ci || true"
      - name: Build with Hugo
        env:
          # For maximum backward compatibility with Hugo modules
          HUGO_ENVIRONMENT: production
          HUGO_ENV: production
        run: |
          hugo \
            --gc \
            --minify \
            --baseURL "${{ steps.pages.outputs.base_url }}/"          
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
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
        uses: actions/deploy-pages@v3
   ```

   然后回到终端运行：

   ```powershell
   git add .
   git commit -m "first commit"
   git branch -M main
   git remote add origin https://github.com/[username]/[username].github.io.git
   git push -u origin main
   ```

   > 第一次运行到上面最后一条指令时会提示输入账号密码，请输入注册GitHub账号时设置的**用户名**和**密码**，随后确认。以后再次运行git push时便不会再要求登陆了。

   回到GitHub，打开对应仓库-Settings-Pages(https://github.com/[username]/[username].github.io/settings/pages)，找到Build and deployment-Source一项，将原本的Deploy form a branch切换为Github Actions。然后，你就什么都不需要做了。切到Actions(https://github.com/[username]/[username].github.io/actions/)，你可以看到有一个Action正在运行，待其前面的小点从黄色变成绿色，随后访问https://[username].github.io，如果出现了前面运行`hugo server -D`时出现的页面，那么恭喜你，长征已接近尾声。

