+++
title = 'Blog Detail Log'
date = 2024-02-15T22:50:11+08:00
draft = false
keywords = ["博客建设"]
categories = ["blog"]
tags = ["blog", "hugo", "github", "git", "theme"]
weight = 0
+++

> Brief Introduction: Construction and renovation of this blog.

<!--more-->

> Preface: This update log is my second blog post, so I'll stick to writing in Chinese as much as possible from this post on.
>
> > 2024.2.18 22.13 补充: 由于本文文字实在太多，作者决定本文不再编写英文版本，有兴趣者自行打开翻译。
> 
> > 25.5.3 16:45 update：Now I want to try again, and I do my utmost not to use DeepSeek /doge (actually I used it)


## Ⅰ. Background

2023.8, I successfully stepped into high school life. After experiencing life in 2023.Q3 & Q4, I genuinely felt the teachers' ***interesting*** qualities (in all my years as a student, this was the first time I encountered teachers with so many catchphrases [manual/doge]). Then one day in Q4, I searched on Baidu and found a newcomer Q&A post about our school on Zhihu, where I also saw mentions of my teachers. However, I noticed that seniors' introductions of the teachers were quite perfunctory, thus sprouting the idea to create an "archive" for them. Around 14:00 on February 13, 2024, while surfing the Internet, I suddenly ~~had a momentary lapse of reason~~ got inspired, combined with my previously ~~long-cherished~~ well-brewed idea, and decided to start another blog.

Unlike before, this marks my **first time** using the static site generator Hugo (link at bottom), my **first attempt** at modifying a relatively well-developed theme (modified version link at bottom, original version link [here](https://github.com/ThemeTony/hugo-theme-tony "ThemeTony/hugo-theme-tony - GitHub")), my **first time** writing articles with purely hand-coded Markdown, my **first time** hosting blog services via GitHub Repo & GitHub Pages... These countless "firsts" also became the driving force behind my determination to persist with this endeavor.

## Ⅱ. Building
> (The following section contains technical details only programmers would care about. Non-techies please scroll down quickly – this part will be lengthy. If you see the table of contents navigation on the left, click to jump to the next part)

At this time last year, when I had just owned a server for a few months, I attempted to build dynamic blogs using Halo and WordPress. I tried Halo because I found it comfortable to use, while installing WP was purely due to its fame.

Initially, considering that Vercel and Netlify-built sites are currently inaccessible in China, and Gitee requires real-name verification, my first thought was to ~~freeload~~ utilize GitHub Actions computing power to build my blog with Halo. ~~(Though I soon learned GitHub Actions can't sustain persistent hosting, at least not in the free tier)~~ So I did some Baidu research and settled on the Hugo(with the theme Tony) route.

> At the time, I didn't know GitHub.io was inaccessible via mobile networks in China. Only when ver.0.1-dev was released and I tried accessing it back home did I realize... pretty speechless

> 2024.2.18 16:34 update: Just discovered Netlify is now fully accessible in China... But since I don't own a domain name, I plan to build a backup access address on Netlify today.

> 2024.2.18 22:14 update: Probably won't make it today. Try again tomorrow.

> 2025.5.3 17:02 update: Should've added this earlier – already have a domain now, and didn't deploy on Netlify after all.

### (1.1) Installation - Traditional Method

#### 1. VSCode

> The main reasons for choosing it are: VS Code is truly lightweight – its disk space usage, memory consumption, and startup speed are on a completely different level compared to WebStorm. Secondly, since Hugo (the static site generator) handles most heavy lifting, writing articles doesn't require much coding but demands better Markdown support. Hence, VS Code is the optimal choice.

Official site: https://code.visualstudio.com

Stable Windows 64-bit Admin-unsupported: https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user

Insiders official site: https://code.visualstudio.com/insiders/

Insiders Windows 64-bit Admin-unsupported: https://code.visualstudio.com/sha/download?build=insider&os=win32-x64-user

> Rest assured to open – 1200% official latest version links.
> 
> Avoid Baidu searches – a single page of Baidu results is full of fake links. Unless you have my eagle-eyed discernment, better not use Baidu.

After downloading, open the installer and just click Next mindlessly.

> **<font color="#dd0000">Author's Warm Reminder: NEVER modify the installation path! The provided installers don't support admin privileges, so don't even think about installing VS Code in C:\Program Files etc. Don't ask how I know – and even if you do, I'll never tell you I spent 10 minutes installing VSCode because of this...</font>**

After installation, launch VS Code and configure it.

Enter Extensions interface via the position shown below or using Ctrl+Shift+X shortcut:

![The 5th button from top to bottom in the leftest activity bar of VSCode](/process/img-1.png)

Install these extensions (copy-paste extension names into search box, or open links to install via official site):

> Not including extension icons here. Recommend installing directly through links. Verify VS Code official domain: visualstudio.com

| Extension Name | Link |
|-----|-----|
|Markdown All in One|https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one|
|Markdown Preview Github Styling|https://marketplace.visualstudio.com/items?itemName=bierner.markdown-preview-github-styles|
|TOML Language Support|https://marketplace.visualstudio.com/items?itemName=be5invis.toml|


VSCode installation complete.

#### 2. Git
   
   > Since I'm using GitHub for hosting, configuring Git is essential for convenient local-cloud file synchronization. Git itself is a command-heavy and bewildering CLI program, so this article will only cover partial commands. If issues arise, please don't ask me – chances are I can't solve them either.

This guide is for Windows only. [macOS](https://git-scm.com/download/mac) & [Linux/Unix](https://git-scm.com/download/linux) users click respective links for official installation guides.

Git official site: https://git-scm.com/

Windows download page: https://git-scm.com/download/win

Windows v2.43.0 64-bit: https://github.com/git-for-windows/git/releases/download/v2.43.0.windows.1/Git-2.43.0-64-bit.exe

After downloading, click Next once to accept the license, choose installation path, then follow recommended settings shown in images below (you can also keep defaults except for the first image). Continue clicking Next. ![img-2](/process/img-2.png)![img-3](/process/img-3.png)![img-4](/process/img-4.png)

When installation completes, remember to uncheck both "Launch Git Bash" and "View Release Notes", then click Finish. Next steps:
1. Reboot your PC (or restart "Windows Explorer" via Task Manager) to refresh PATH environment variable
2. Open PowerShell and run `git --version`
3. If version info appears (git version 2.43.0.windows.1), Git is successfully installed.

#### 3. hugo
   
> **<font color="#dd0000">Author's Warm Reminder: MUST download hugo_extended version, otherwise many Hugo features will be unavailable! I actually got this right, the red text is just to warn you all.</font>**

> Also, the following operations involve accessing GitHub. Consider "scientific internet access" based on your local network conditions.

GitHub Releases: https://github.com/gohugoio/hugo/releases/

0.141.0 https://github.com/gohugoio/hugo/releases/download/v0.141.0/hugo_extended_0.141.0_windows-amd64.zip

> Due to limited time/energy, my modified theme (as of 25.5.3) only guarantees compatibility with Hugo Extended 0.141.0. For issues, wait for my random free time/post-college-entrance-exam availability.

After downloading, unzip to a comfortable location. Add this path to system PATH, reboot or restart Explorer to refresh PATH. Open PowerShell (abbreviated as PS later) and run `hugo help`. If help content displays normally, installation succeeds.

### (1.2) Installation - Non-Traditional Method

When I want to use a package manager on Windows, how would you respond, dear reader? [manual/doge]

Here we'll use Chocolatey as an example. While winget and scoop are similar, based on official documentation, I personally find Chocolatey the most fragrant option.

Open PowerShell **as Administrator** and run:  

   > The following operations involve accessing overseas services. If commands hang, prepare for "scientific internet access".

   ```powershell
   Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
   ```

After execution, verify installation with `choco -V` (may need to reopen PowerShell).

Proceed with:
   ```powershell
   choco install -y vscode git hugo-extended
   ```

   Wait for completion.

 Well, VS Code still requires manual configuration post-installation.  

So... does this approach give you *that* particular feeling? [manual/doge]

### (2) 创建blog

   > 2024.2.16 1:29 写到此处 作者累了，改日再写吧
   > 
   > 还有，看样子这一片会非常的长……要不我还是分成两个文件写吧，然后再改改主题，让它支持切换语言？
   > 
   > 真要那样的话，那可又是一堆工作量啊……
   > 
   > 这个凌晨就先这样吧，commit去了，886

   > 2024.2.16 9:35 满血复活 回来再战

#### 1. 本地构建

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

   > 这一步开始可能需要持续”外出学习“，请注意“学习费用“是否充足
   > 手动/doge

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

#### 3. 新建文章
   先说快速上手版本。
 
   回到VSCode，终端中运行：
 
   ```powershell
   hugo new content post/[filename].md
   ```
   
   记得将[filename]改成文章对应Markdown文件名。然后就是自由发挥时间。
 
   屏幕面前的你有可能不认识、不会用Markdown，善良的作者在此放俩基础教程：

   （推荐优先看）GitHub Flavored Markdown(GFM)中文版教程: https://docs.github.com/zh/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

   国内热心网友版本：https://www.jianshu.com/p/ed47397774c4

   > 不标红的Author's Warm Reminder: 若要在GitHub Pages上看到该文章，记得把Markdown文件顶部的`draft = true`改成`draft = false`。

   接下来，就是非常常规的操作了。你可以继续使用CLI上传文件到GitHub，但我更推荐使用VSCode的源代码管理功能。图形化，非常的简单，每次不需要敲那么多命令就能完成。

   在VSCode中找到左侧活动栏，从上往下第三个图标（参考遥远的上文中第一张图片，即img-1），或者按Ctrl + Shift + G召唤源代码管理，在我们上一次使用Git将本地源代码上传至GitHub的时候VSCode自己已经做好了一切准备活动。召唤出的界面会出现两个提交按钮（即两个Git项目），如图：

   ![img-5](/process/img-5.png)

   上传自己的文章只需要用到第一个（即blog）项目，另一个是遥远的前文中`git submodule add ...`带来的主题项目，这个项目一来对文章的生成没有关系，二来除了作者也没有直接提交修改GitHub上源代码的权限。

   将文章保存好后可以召唤Git管理界面，点击提交，会出现如下图的弹窗，![img-6](/process/img-6.png)

   如果没有特殊情况，我们可以直接选择是（不选始终的原因是怕出现特殊情况，具体有啥等各位自行探索，当然若你要当一往无前的勇士也可以直接来一手始终），随后本地的Git项目就更新成功了。要同步到GitHub上，只需点击出现的那个同步更改按钮即可。

   到此，新手教程彻底结束。

## 三、作者的自由发言时间

> 即作者接下来说的part 不分主题的那种

其实吧，作者编写程序效率还是挺低的，例如为原版主题添加一个深色模式就花了作者一下午(过年期间某一天的17:00 ~ 22:00，当然其中有一坤小时都没在编程 /doge)的时间，为了一个免费的域名折腾了好几天，一直到写到这里的今天(2024.2.18 21:22)申请都还没过……

没几天之前我都还坚信Netlify国内不可访问，结果。。。看样子如遥远的前文所说，我准备在Netlify上面再建一个备用的访问站，主要是不出我所料的话Netlify给的默认域名又臭又长，而我有没有自己的域名。要不哪位看官老爷捐赠我一个？/doge

前些天在申请js.org域名的时候我在那用git rm准备删除分支里的其他文件，结果忘了cd到空目录，直接导致了我的源代码全部销毁。得亏当时没有继续commit和push上去，所以我的blog勉强留住了一命。说到js.org，我没仔细看文档，申请交上去，结果告诉我现在不能为blog注册js.org域名了。。。

回到博客本身上，作者针对这个主题还有一点话说。

### 1. 有关文章

其实文章不只是可以在content/post文件夹里生成，还可以在content路径下生成其他文章，例如该主题的原作者在本地试运行阶段就推荐我们创建content/about/index.md。

说到index.md，其实各位接触过网页前端的都知道某个目录下放置index.html/index.php文件，web服务打开后可以直接输入路径名访问该网页，而不用输入index.html/index.php文件名。Hugo也采用了相同的方案（本质是将md转成相同名称的html嘛，所以肯定也符合上述现象），任何文件夹下新建index.md文件，那么可以直接通过文件夹的路径访问到该文章，而不用多输入index。

话说各位注意到没有，每次通过hugo new content生成的.md文件开头默认有5行文本，第一行和第五行各三个`+`包裹了2 ~ 4行的三行参数。其实，这里的文章参数(又叫Front Matter)不只这三个，还有以下部分(来源于主题文档)：

|项|作用|示例|
| :---: | :---: | :---: |
|title|文章标题|title: "Hugo Theme Tony主题文档"|
|date|文章发布日期|date: 2020-05-07T09:51:27+08:00|
|draft|是否草稿|draft: false|
|keywords|文章关键词，用于HTML头部|keywords: ["移植主题"]|
|categories|分类|categories: ["博客"]|
|tags|标签|tags: ["博客"]|
|noclick|不允许点击（类似碎碎念），仅在主页展示|notclick: false|
|categoryLink|分类按钮点击时的链接|categoryLink: "/"|
|toc|是否开启目录|toc: true|
|buy: false<br/>buyLink: ""<br/>buyName: ""<br/>buyInfo: ""<br/>buyImage: ""<br/>buyButtonText: ""|购物链接|buyLink: "https://htony.js.org"<br/>buyName: "hugo-theme-tony"<br/>buyInfo: "WP-Theme-Tony的hugo移植版"<br/>buyImage: "/images/t.jpg"<br/>buyButtonText: "官网"|
|thumbnail|缩略图|thumbnail: "https://cdn.jsdelivr.net/gh/FFRaycoder/cdn/imgs/20200507094721.png"|
|weight|文章权重|weight: 2|
|adjacentPost|是否显示上下页|adjacentPost: true|

你可以每篇文章生成后定制Front Matters，也可以找到一些大部分文章都需要的部分写进生成.md文件的模板里。找到/archetypes/default.md，对其进行修改即可。

> 不标红的Author's Warm Reminder: 不要用上述表格中实例的格式，参照default.md中的格式修改。(即不要用`key: value`，用`key = value`的形式)


### 2. 有关主题

原作者早在2022.7.14就将原仓库Archive了，所以相当于这个主题已经1年半没更新了。2024.2.13日，我fork了原仓库并很快进行了初步修改。后因为我的误操作我将fork来的仓库删除，重新建立了一个仓库并进行了多次修改（原来的什么文档一点没改，后面有时间再改），逐渐的变成了现在这个样子。

改动不多，主要是增添了一点点功能，如：

· 深色模式手动切换（目前暂时先支持手动切换）；

· 在配置文件中增添了对Waline的支持并修改了主题中原有的layouts/partials/third-party/waline.html，使其适应了当前的最新版本，并且通过修改layouts/partials/head.html修复了Waline在本站出现表情包拉伸不正常的情况；

· 除此之外，我将网站的logo和blogger的头像文件移到了主题外部，以方便更改。

大概就这么多了。以后有更新我尽量写在某篇文章里。

欢迎屏幕面前的各位前来Issue & PR这个仓库，我严格来说也算是GitHub新人，不太懂这个圈子的规矩，像什么Contributors之类的我可能需要各位大佬们的建议，对于大部分人来说，支持作者以及未来的贡献者继续更新这个主题的动力就是帮点小忙，如帮忙修改文档，issue里面提建议，有能力者可自愿当Contributor。

有关主题的内容就差不多这些了。咱们有机会再聊。

### 3. 有关评论区Waline

说实话这个我没什么想写的，官方文档已经做的十分详尽了，我也没什么想说的。该主题中同时支持了utterances, valine, 以及waline。第一个是通过GitHub Discussions实现评论功能的。考虑到国内GitHub实际访问情况以及作者个人主观意见来说，我不太喜欢这个方案。接下来，我在valine与waline中选择了waline，二者最大的区别在于实现方式与配置项目上。前者无需后端，但只允许使用LeanCloud做存储端；后者可看作为Valine的衍化升级版，需要部署后端，但是可用多种程序存储(如LeanCloud, MongoDB, MySQL, etc.)。建议使用后者（前者似乎以前报过危险漏洞），我比较推荐将Waline部署到Deta.space上，因为Deta.space不需要多配置一次存储段，其本身自带存储且部署在此的Waline不需要对存储进行配置即可直接使用。最最重要的是，Deta.space的存储空间目前看来没有明写，暂时认为是无限大吧。要知道LeanCloud免费版也只有1GB(虽然对于评论区而言已经完全够用了，但是多多益善嘛)

> 25.5.3 补充：可惜 Deta.space 于 24 年就已经寄了，到现在我也没补上评论区……

## 四、结尾

我是万万没想到这篇blog竟然会让我连续写这么多天，这篇文章的字数也是超出了我的想象。多说无益，2024.2.18 22.19，这篇文章彻底写完。感谢各位读到此处的读者们。各位可以多多在下方Waline评论区踊跃评论(也最好注册一个账号支持一下，谢谢各位看官大人)。

> 2024.2.19 8:37 补充: 昨晚23:34，我申请的is-a.dev域名已通过验证，现已投入使用。我惊奇地发现通过自定义域名真的解决了中国移动访问不了GitHub Pages的情况。看来应该是运营商DNS被污染的问题。如果这样的话，Netlify上我就不太想再部署了。