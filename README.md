# Spixed's Blog

Welcome to the source code of [Spixed's Blog](https://spixed.is-a.dev/). This is a static blog site built with [Hugo](https://gohugo.io/) and the [Polymer](https://github.com/Spixed/polymer) theme.

欢迎来到 [Spixed's Blog](https://spixed.is-a.dev/) 的源码仓库。这是一个基于 [Hugo](https://gohugo.io/) 和 [Polymer](https://github.com/Spixed/polymer) 主题构建的静态博客站点。

## 🌟 Features / 特性

- **Bilingual Support**: Fully supported English and Chinese content structure.
  - **双语支持**：完全支持中英文内容结构。
- **Digital Brutalism Design**: Uses the custom Polymer theme with a unique visual style.
  - **数字粗野主义设计**：使用自定义的 Polymer 主题，具有独特的视觉风格。
- **Interactive Elements**: Includes Qmoji support and interactive components.
  - **交互元素**：包含 Qmoji 支持和交互组件。

## 🛠️ Project Structure / 项目结构

```text
.
├── archetypes/      # Content templates / 内容模板
├── content/         # Blog posts (en/zh) / 博客文章 (英/中)
├── data/            # Data files (authors, etc.) / 数据文件 (作者等)
├── static/          # Static assets / 静态资源
├── themes/          # Themes (Polymer as submodule) / 主题 (Polymer 作为子模块)
└── hugo.toml        # Main configuration / 主配置文件
```

## 🚀 How to Run / 如何运行

0. **Prerequisites / 环境要求**

   [Hugo Extended](https://gohugo.io/installation/) **v0.166.0+** is required — the theme uses the new `locale` / `label` / `(hugo).Data` syntax introduced in Hugo v0.156–0.158, and older versions will fail to build.
   需要 [Hugo Extended](https://gohugo.io/installation/) **v0.166.0 及以上**——主题已迁移到 Hugo v0.156–0.158 引入的 `locale` / `label` / `(hugo).Data` 新写法，旧版本无法构建。

1. **Clone the repository / 克隆仓库**

   ```bash
   git clone --recursive https://github.com/Spixed/spixed.github.io.git
   cd spixed.github.io
   ```

   *Note: Use `--recursive` to pull the theme submodule.*
   *注意：使用 `--recursive` 参数以拉取主题子模块。*

2. **Run Hugo Server / 运行 Hugo 服务**

   ```bash
   hugo server
   ```

3. **Access the site / 访问站点**

   Open [http://localhost:1313](http://localhost:1313) in your browser.
   在浏览器中打开 [http://localhost:1313](http://localhost:1313)。

## 📝 License / 许可证

Content is licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).
Code is licensed under the MIT License.

内容采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) 许可。
代码采用 MIT 许可。
