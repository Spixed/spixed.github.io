+++
title = 'Blog Detail Log'
date = 2024-02-15T22:50:11+08:00
draft = false
keywords = [" 博客建设 "]
categories = ["blog"]
tags = ["blog", "hugo", "github", "git", "theme"]
weight = 0
+++

> Brief Introduction: Construction and renovation of this blog.

<!--more-->

> Preface: This update log is my second blog post, so I'll stick to writing in Chinese as much as possible from this post on.
>
> > 2024.2.18 22.13 补充：由于本文文字实在太多，作者决定本文不再编写英文版本，有兴趣者自行打开翻译。
> >
> > 25.5.3 16:45 update：Now I want to try again, and I'll do my utmost not to use DeepSeek /doge (well I used it at last)

# Ⅰ. Background

2023.8, I successfully stepped into high school life. After experiencing life in 2023.Q3 & Q4, I genuinely felt the teachers' ***interesting*** qualities (in all my years as a student, this was the first time I encountered teachers with so many catchphrases [manual/doge]). Then one day in Q4, I searched on Baidu and found a newcomer Q&A post about our school on Zhihu, where I also saw mentions of my teachers. However, I noticed that seniors' introductions of the teachers were quite perfunctory, thus sprouting the idea to create an "archive" for them. Around 14:00 on February 13, 2024, while surfing the Internet, I suddenly ~~had a momentary lapse of reason~~ got inspired, combined with my previously ~~long-cherished~~ well-brewed idea, and decided to start another blog.

Unlike before, this marks my **first time** using the static site generator Hugo (link at bottom), my **first attempt** at modifying a relatively well-developed theme (modified version link at bottom, original version link [here](https://github.com/ThemeTony/hugo-theme-tony "ThemeTony/hugo-theme-tony - GitHub")), my **first time** writing articles with purely hand-coded Markdown, my **first time** hosting blog services via GitHub Repo & GitHub Pages... These countless "firsts" also became the driving force behind my determination to persist with this endeavor.

# Ⅱ. Building

> (The following section contains technical details only programmers would care about. Non-techies please scroll down quickly – this part will be lengthy. If you see the table of contents navigation on the left, click to jump to the next part)

At this time last year, when I had just owned a server for a few months, I attempted to build dynamic blogs using Halo and WordPress. I tried Halo because I found it comfortable to use, while installing WP was purely due to its fame.

Initially, considering that Vercel and Netlify-built sites are currently inaccessible in China, and Gitee requires real-name verification, my first thought was to ~~freeload~~ utilize GitHub Actions computing power to build my blog with Halo. ~~(Though I soon learned GitHub Actions can't sustain persistent hosting, at least not in the free tier)~~ So I did some Baidu research and settled on the Hugo(with the theme Tony) route.

> At the time, I didn't know GitHub.io was inaccessible via mobile networks in China. Only when ver.0.1-dev was released and I tried accessing it back home did I realize... pretty speechless

> 2024.2.18 16:34 update: Just discovered Netlify is now fully accessible in China... But since I don't own a domain name, I plan to build a backup access address on Netlify today.

> 2024.2.18 22:14 update: Probably won't make it today. Try again tomorrow.

> 2025.5.3 17:02 update: Should've added this earlier – already have a domain now, and didn't deploy on Netlify after all.

## (1.1) Installation - Traditional Method

### 1. VSCode

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

### 2. Git

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

### 3. hugo

> **<font color="#dd0000">Author's Warm Reminder: MUST download hugo_extended version, otherwise many Hugo features will be unavailable! I actually got this right, the red text is just to warn you all.</font>**

> Also, the following operations involve accessing GitHub. Consider "scientific internet access" based on your local network conditions.

GitHub Releases: https://github.com/gohugoio/hugo/releases/

0.141.0 https://github.com/gohugoio/hugo/releases/download/v0.141.0/hugo_extended_0.141.0_windows-amd64.zip

> Due to limited time/energy, my modified theme (as of 25.5.3) only guarantees compatibility with Hugo Extended 0.141.0. For issues, wait for my random free time/post-college-entrance-exam availability.

After downloading, unzip to a comfortable location. Add this path to system PATH, reboot or restart Explorer to refresh PATH. Open PowerShell (abbreviated as PS later) and run `hugo help`. If help content displays normally, installation succeeds.

## (1.2) Installation - Non-Traditional Method

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

## (2) Creating the Blog

   > 2024.2.16 1:29: Having written here, author's tired, will continue another day
   >
   > Also, looks like this section's going to be ridiculously long... Maybe I should split it into two files, then modify the theme to support language switching?
   >
   > If I really do that, that'd be another mountain of work...
   >
   > Calling it a night for now, time to commit. 886

   > 2024.2.16 9:35: Fully recharged and back in battle
>
   > 2025.5.10 17:02 update: Well, language switching has long been supported (see theme commit). The current i18n mode used by this blog consists of separate Chinese and English source files, combined with manual language switching via the theme.

### 1. Local Setup

With the theme already modified, the workload isn't that heavy. Find a location for your blog folder (no need to create it manually), then run in PowerShell:

```powershell
hugo new site blog
```

> The site name after `hugo new site` (official term) can be replaced, and all subsequent "blog" directories will be replaced with your input.

Then ignore Hugo's output in PS, directly cd into the blog folder and run:

```powershell
git init
git submodule add https://github.com/Spixed/hugo-theme-tony.git themes/tony
```

> This initializes Git for the folder and adds theme ThemeTony as a submodule. This operation involves accessing GitHub - if it's slow or errors occur, remember to enable proxy.

> Actually, this step can already be done in VSCode. Right-click the folder and select "Open with VSCode", or open VSCode, File > Open Folder, or open VSCode, press Ctrl + K, wait for loading, then Ctrl+Shift + \` to summon the terminal (default is PowerShell, or the newer pwsh)

   <font color="#dd0000">
**Author's Warm Reminder: If enabling proxy, MUST follow these steps first!!!** (Win10+ example, can skip step 1 if using Clash series without changing system proxy address):

1. Open Settings > Network & Internet > Proxy, find "Use a proxy server" under Manual proxy, click Edit on the right, copy IP and port
    
2. Summon PS, run:

    ```powershell
    git config --global http.proxy http://127.0.0.1:7890
    git config --global https.proxy http://127.0.0.1:7890
    ```

    > Change the address to http://your_ip:your_port. If using Clash series without modifications, run directly. To disable proxy:

    ```powershell
    git config --global --unset http.proxy
    git config --global --unset https.proxy
    ```

Don't ask why I'm giving red heart warnings again, just don't ask...

   </font>

Now we officially need VSCode's assistance. Open VSCode to the blog folder, locate `hugo.toml` in the root directory, and configure it as follows (just copy-paste and modify the [your_balabala] placeholders):

> If the following all-English content bothers you, you can refer to `themes/tony/configI18N/config.zh.toml` for corresponding [your_balabala] positions.

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

   After saving with Ctrl+S, press Ctrl+Shift+\` to open VSCode's terminal, run `hugo server -D` for a test. Open your browser to localhost:1313 (or 127.0.0.1:1313) - if the page displays properly (meaning you find it aesthetically pleasing with no visual inconsistencies), then your local setup is complete.

### 2. Uploading to GitHub

> From this step onward, you might need to engage in "extracurricular learning" - make sure your "learning budget" is sufficient
> manual/doge

  Visit [GitHub](https://github.com). If you have an account, log in. Otherwise, refer to [this guide](https://zhuanlan.zhihu.com/p/658727572) (it's too comprehensive for me to repeat/doge).

  Create a new repository. If you plan to use https://[username].github.io as your blog's baseURL, name the repository [username].github.io (replace [username] with your GitHub username). Then return to VSCode and set your user signature in the terminal:

   ```powershell
   git config --global user.name [username]
   git config --global user.email [email]
   ```

  While the username and email set here don't directly affect git push operations, the author still recommends keeping them consistent with your GitHub account.

  Then return to the hugo.toml file editor, replace [your_blog_root_URL] with [username].spixed.io and [your_github_homepage] with https://github.com/[username], then save.

  Create a new file at this path: ./.github/workflows/hugo.yaml, open it, copy the following text into the file, and save:

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

   Then turn back to the terminal to run:

   ```powershell
   git add .
   git commit -m "first commit"
   git branch -M main
   git remote add origin https://github.com/[username]/[username].github.io.git
   git push -u origin main
   ```

> When running the final command for the first time, you'll be prompted for login credentials. Enter the **username** and **password** you set when registering your GitHub account, then confirm. Subsequent git push commands won't require login.

  Return to GitHub, open your repository settings (https://github.com/[username]/[username].github.io/settings/pages), locate the Build and deployment > Source section, and switch from "Deploy from a branch" to "GitHub Actions". Nothing else required. Navigate to Actions (https://github.com/[username]/[username].github.io/actions/) where you'll see a workflow running. When the yellow dot turns green, visit https://[username].github.io. If you see the same page as when running `hugo server -D`, congratulations - your long journey is nearly complete.

<!-- ... existing content ... -->

### 3. Creating New Posts

For the quick-start version:

Return to VSCode and run in terminal:

```powershell
hugo new content post/[filename].md
```

Replace [filename] with your desired Markdown filename. Now comes free-form writing time.

For readers unfamiliar with Markdown, here are two basic tutorials:

- **(Recommended) GitHub Flavored Markdown (GFM) Chinese tutorial:** https://docs.github.com/zh/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax
- Friendly domestic netizen version: https://www.jianshu.com/p/ed47397774c4

> Author's Warm Reminder without marking in red: To make posts visible on GitHub Pages, remember to change `draft = true` to `draft = false` in the front matter.

Next, regular operations apply. While you can use CLI to upload files to GitHub, I recommend using VSCode's source control functionality. This graphical approach simplifies the process - no need to type commands every time.

Find the source control icon (3rd from top in left activity bar) or press Ctrl + Shift + G. When we previously used Git to upload our local source codes to GitHub, VSCode itself has already completed all the preparation. You'll see 2 Git projects with 2 Commit buttons like this:

![img-5](/process/img-5.png)

   Only use the first (blog) project for post uploads. The theme project (from previous `git submodule add`) can indeed be modified, but modifying it is useless for generating articles and you have no access to commit your changes directly to this repo on GitHub.

After saving your post, open the Git interface, press Commit, and you'll see this pop-up window:

   ![img-6](/process/img-6.png)

   Click "Yes" if there are no special circumstances. (Why don't choose "Always" is that you can't control it well when meeting something wrong. Otherwise, select "Always" if you're feeling adventurous.) After that, the local Git project is committed. Click the sync button to push changes to GitHub.

Tutorial complete!

# III. Author's Free Discussion

> Casual talk about the blog's development

Creating the dark mode theme actually took me an entire afternoon (17:00-22:00 during Spring Festival, though \_one and a half\_ hours weren't coding /doge). Obtaining a free domain has been another challenge - still pending as of 2024.2.18 21:22.

Recently learned Netlify is actually accessible in China. Planning to create a backup mirror there, though Netlify-generated domains are quite cumbersome. Any domain donations welcome? /doge

During js.org domain application, I accidentally wiped source code using `git rm` without checking directory. Luckily hadn't pushed changes - close call!

Now about the theme itself...

## 1. About Posts

Posts can be created in any directory under `content/`, not just `content/post/`. The theme creator recommended `content/about/index.md`.

Tip: `index.md` files can be accessed via directory path (e.g., `/about/` instead of `/about/index.html`), similar to web server behavior.

<!-- ... rest of section remains ... -->

> 2024.2.19 8:37 update: Successfully registered is-a.dev domain last night at 23:34. Surprisingly bypassed China Mobile's GitHub Pages blocking via custom domain, likely resolving DNS pollution issues. Probably won't deploy on Netlify after all.