#!/usr/bin/env python3
"""
QQ表情数据转换工具
将 Qmoji mapping.json 转换为直接嵌入到 Hugo shortcode 中的格式
支持从 GitHub 爬取最新数据
"""

import json
import os
import sys
import urllib.request
import urllib.error

def download_emoji_data_from_github(url="https://cdn.jsdelivr.net/gh/Spixed/Qmoji@main/mapping.json"):
    """从 GitHub 下载最新的QQ表情数据"""
    try:
        print(f"正在从 GitHub 下载最新数据: {url}")
        with urllib.request.urlopen(url) as response:
            data = response.read().decode('utf-8')
            return json.loads(data)
    except urllib.error.URLError as e:
        print(f"网络错误：无法下载数据 - {e}")
        return None
    except json.JSONDecodeError as e:
        print(f"JSON解析错误 - {e}")
        return None

def load_emoji_data(json_path):
    """加载QQ表情JSON数据"""
    try:
        with open(json_path, 'r', encoding='utf-8') as f:
            return json.load(f)
    except FileNotFoundError:
        print(f"错误：找不到文件 {json_path}")
        sys.exit(1)
    except json.JSONDecodeError as e:
        print(f"错误：JSON格式错误 - {e}")
        sys.exit(1)

def generate_hugo_map(emoji_data):
    """生成Hugo模板中的表情映射"""
    hugo_map_lines = []
    processed_names = set()  # 跟踪已处理的表情名称

    for emoji in emoji_data:
        describe = emoji.get('describe', '')
        emoji_id = emoji.get('emojiId', '')
        emoji_type = emoji.get('emojiType', 0)

        # 生成Hugo模板条件
        if describe:
            # 去掉前缀斜杠用作键名
            key_name = describe.lstrip('/')

            # 跳过已处理的表情名称
            if key_name in processed_names:
                continue
            processed_names.add(key_name)

            hugo_map_lines.append(f'        {{{{- else if eq $emojiName "{key_name}" -}}}}')

            if emoji_type == 2:  # 超级表情，使用Lottie动画
                unique_id = f"lottie-emoji-{emoji_id}-{{{{ now.UnixNano }}}}"
                hugo_map_lines.append(f'            {{{{- $uniqueId := "{unique_id}" -}}}}')
                hugo_map_lines.append(f'            <div id="{{{{ $uniqueId }}}}" class="super-qmoji" data-lottie-path="https://cdn.jsdelivr.net/gh/Spixed/Qmoji@main/res/{emoji_id}/lottie.json" title="{describe}"></div>')
            elif emoji_type == 1:  # 普通表情，使用APNG
                hugo_map_lines.append(f'            <img src="https://cdn.jsdelivr.net/gh/Spixed/Qmoji@main/res/{emoji_id}/apng.png" class="qmoji" alt="{describe}" title="{describe}" />')
            else:  # emoji_type == 0，使用静态图片
                hugo_map_lines.append(f'            <img src="https://cdn.jsdelivr.net/gh/Spixed/Qmoji@main/res/{emoji_id}/thumb.png" class="qmoji" alt="{describe}" title="{describe}" />')

    return hugo_map_lines

def generate_shortcode_template(hugo_map_lines):
    """生成完整的shortcode模板"""
    template = '''{{/* QQ表情单个表情shortcode */}}
{{/* 用法: {{< qq-emoji "微笑" >}} */}}

{{- $emojiName := .Get 0 -}}
{{- if not $emojiName -}}
    <span class="qq-emoji-error">❌ 请提供表情名称</span>
{{- else -}}
    {{/* 内嵌表情数据映射 */}}
    {{- if false -}}
        {{/* 这个条件永远不会执行，只是为了语法结构 */}}
''' + '\n'.join(hugo_map_lines) + '''
    {{- else -}}
        <span class="qq-emoji-fallback">:/{{ $emojiName }}:</span>
    {{- end -}}
{{- end -}}'''
    
    return template

def generate_text_shortcode_template(emoji_data):
    """生成文本批量处理shortcode模板"""
    # 生成表情名称到数据的映射，避免重复
    emoji_map = {}
    for emoji in emoji_data:
        describe = emoji.get('describe', '')
        if describe:
            key_name = describe.lstrip('/')
            # 只保留第一个有效的表情定义
            if key_name not in emoji_map:
                emoji_map[key_name] = emoji
    
    # 生成替换逻辑
    replace_lines = []
    for key_name, emoji in emoji_map.items():
        emoji_type = emoji.get('emojiType', 0)
        describe = emoji.get('describe', '')
        emoji_id = emoji.get('emojiId', '')
        
        if emoji_type == 2:  # 超级表情，使用Lottie动画
            unique_id = f"lottie-emoji-{emoji_id}-{{{{ now.UnixNano }}}}"
            replacement = f'<div id="{unique_id}" class="super-qmoji" data-lottie-path="https://cdn.jsdelivr.net/gh/Spixed/Qmoji@main/res/{emoji_id}/lottie.json" title="{describe}"></div>'
        elif emoji_type == 1:  # 普通表情，使用APNG
            replacement = f'<img src="https://cdn.jsdelivr.net/gh/Spixed/Qmoji@main/res/{emoji_id}/apng.png" class="qmoji" alt="{describe}" title="{describe}" />'
        else:  # emoji_type == 0，使用静态图片
            replacement = f'<img src="https://cdn.jsdelivr.net/gh/Spixed/Qmoji@main/res/{emoji_id}/thumb.png" class="qmoji" alt="{describe}" title="{describe}" />'
        
        replace_lines.append(f'    {{{{- $processedContent = replace $processedContent ":/{key_name}:" `{replacement}` -}}}}')
    
    template = '''{{/* QQ表情文本批量处理shortcode */}}
{{/* 用法: {{< qq-emoji-text >}}这是一段包含:/微笑:表情的文本:/大哭:{{< /qq-emoji-text >}} */}}

{{- $content := .Inner -}}
{{- $processedContent := $content -}}

{{/* 内嵌表情替换逻辑 */}}
''' + '\n'.join(replace_lines) + '''

{{/* 输出处理后的内容 */}}
{{ $processedContent | safeHTML }}'''
    
    return template

def main():
    """主函数"""
    # 获取脚本所在目录
    script_dir = os.path.dirname(os.path.abspath(__file__))
    project_root = os.path.dirname(script_dir)

    # JSON文件路径
    json_path = os.path.join(project_root, 'themes', 'tony', 'data', 'qq_emoji_mapping.json')

    # 输出目录
    output_dir = os.path.join(project_root, 'themes', 'tony', 'layouts', 'shortcodes')

    # 检查命令行参数
    use_github = len(sys.argv) > 1 and sys.argv[1] == '--github'

    if use_github:
        print("使用 GitHub 数据源...")
        emoji_data = download_emoji_data_from_github()
        if emoji_data is None:
            print("GitHub 下载失败，尝试使用本地文件...")
            emoji_data = load_emoji_data(json_path)
        else:
            print(f"从 GitHub 加载了 {len(emoji_data)} 个表情")
            # 保存到本地作为备份
            with open(json_path, 'w', encoding='utf-8') as f:
                json.dump(emoji_data, f, ensure_ascii=False, indent=2)
            print(f"已保存到: {json_path}")
    else:
        print(f"读取本地QQ表情数据: {json_path}")
        emoji_data = load_emoji_data(json_path)
        print(f"加载了 {len(emoji_data)} 个表情")
        print("提示：使用 --github 参数可从 GitHub 获取最新数据")
    
    # 生成单个表情shortcode
    print("生成单个表情shortcode...")
    hugo_map_lines = generate_hugo_map(emoji_data)
    single_template = generate_shortcode_template(hugo_map_lines)
    
    single_output_path = os.path.join(output_dir, 'qq-emoji.html')
    with open(single_output_path, 'w', encoding='utf-8') as f:
        f.write(single_template)
    print(f"已生成: {single_output_path}")
    
    # 生成文本批量处理shortcode
    print("生成文本批量处理shortcode...")
    text_template = generate_text_shortcode_template(emoji_data)
    
    text_output_path = os.path.join(output_dir, 'qq-emoji-text.html')
    with open(text_output_path, 'w', encoding='utf-8') as f:
        f.write(text_template)
    print(f"已生成: {text_output_path}")
    
    print("转换完成！")

if __name__ == '__main__':
    main()
