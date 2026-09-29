@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion
rem ============================================================
rem  Blog Writer / Hugo 博客 - 日常一键同步脚本
rem  作用：提交你写的文章 -> 拉取远端最新内容 -> 推送到云端
rem  用法：写完文章后，双击本文件（它必须放在博客目录里）
rem ============================================================

cd /d "%~dp0"

where git >nul 2>nul
if errorlevel 1 (
    echo [错误] 没有找到 git，请先安装 Git for Windows。
    pause
    exit /b 1
)

echo [1/3] 正在收集改动...
git add -A

rem 有改动才提交
git diff --cached --quiet
if %errorlevel% neq 0 (
    set "names="
    for /f "delims=" %%f in ('git diff --cached --name-only') do set "names=!names!%%f "
    git commit -m "Blog update: !names!" >nul
    echo       已提交本地改动：!names!
) else (
    echo       没有新的改动。
)

echo [2/3] 正在拉取云端最新内容...
git pull --rebase
if errorlevel 1 (
    echo.
    echo [出错] 合并时出现冲突，已自动取消本次合并，你的文章都安全地保存在本地。
    echo 请直接把本窗口截图发给 Spixed 处理。
    git rebase --abort 2>nul
    pause
    exit /b 1
)

echo [3/3] 正在推送到云端...
git push
if errorlevel 1 (
    echo.
    echo [出错] 推送失败。先检查网络，再双击重试一次；仍失败请截图发给 Spixed。
    pause
    exit /b 1
)

echo.
echo [完成] 已同步！几分钟后博客会自动更新上线。
echo 提示：第一次使用时，如果弹出窗口要求登录 Gitee，输入你的 Gitee 账密即可。
pause
