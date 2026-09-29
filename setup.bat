@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion
rem ============================================================
rem  博客环境一键配置脚本（只需要运行一次）
rem ============================================================

rem ====== 请确认以下两行的 Gitee 用户名是否正确 ======
set GITEE_BLOG=https://gitee.com/Spixed/blog.git
set GITEE_POLYMER=https://gitee.com/Spixed/polymer.git
rem ===================================================

set BLOG_DIR=E:\Blog_try\blog

where git >nul 2>nul
if errorlevel 1 (
    echo [错误] 没有找到 git，请先安装 Git for Windows：
    echo        https://git-scm.com/download/win
    echo        安装时一路点 Next 即可，装完重新双击本文件。
    pause
    exit /b 1
)

echo [1/4] 正在配置 git...
rem 博客主题仓库在 GitHub 上，国内连不上，改走 Gitee 镜像（一次性配置）
git config --global url."%GITEE_POLYMER%".insteadOf "https://github.com/Spixed/polymer.git"
rem 不转换换行符，保证文件内容逐字节一致
git config --global core.autocrlf false

rem 第一次提交需要署名
set /p GIT_NAME=请输入你的名字（用于文章署名，直接回车默认为 Friend）: 
set /p GIT_EMAIL=请输入你的邮件（用于文章署名，直接回车默认为 {GIT_NAME}@gitee.local）: 
if "!GIT_NAME!"=="" set GIT_NAME=Friend
git config --global user.name "!GIT_NAME!"
git config --global user.email "!GIT_NAME!@gitee.local"

echo [2/4] 正在下载博客（含主题，约几十 MB，视网速 1-3 分钟）...
if exist "%BLOG_DIR%\.git" (
    echo       目录 %BLOG_DIR% 里已经有博客仓库了，跳过下载。
) else (
    git clone --recurse-submodules "%GITEE_BLOG%" "%BLOG_DIR%"
    if errorlevel 1 (
        echo.
        echo [出错] 下载失败。请检查网络，并让 Spixed 确认上面的 Gitee 地址。
        pause
        exit /b 1
    )
)

echo [3/4] 正在检查主题子模块...
git -C "%BLOG_DIR%" submodule update --init --recursive

echo [4/4] 完成！
echo.
echo ============================================================
echo  博客已下载到：%BLOG_DIR%
echo.
echo  以后的日常流程：
echo    1. 打开 Blog Writer，把工作区选到上面的目录
echo    2. 写文章（随时可写，不用联网）
echo    3. 写完后回到博客目录，双击 sync.bat（此时须联网）
echo ============================================================
pause
