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
>


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

   命令执行完之后输入`choch -V`检查是否安装成功（可重开一个ps窗口再输入）

   接下来：
   ```powershell
   choco install -y vscode git hugo-extended
   ```

   等待命令执行完毕即可。

   当然VSCode安装后还是要回去进行配置的。

   所以是不是感觉很有一种感觉呢？手动/doge

#### (2) 创建blog

   2024.2.16 1:29 写到此处 作者累了，改日再写吧

   还有，看样子这一片会非常的长……要不我还是分成两个文件写吧，然后再改改主题，让它支持切换语言？

   真要那样的话，那可又是一堆工作量啊……

   这个凌晨就先这样吧，commit去了，886