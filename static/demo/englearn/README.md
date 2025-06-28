# 高中英语写作指南 - 重构版

## 项目结构

```
englearn/
├── index.html              # 重构后的主页面
├── data/
│   └── vocabulary.json     # 英语知识数据文件
├── css/
│   └── styles.css          # 样式文件
├── js/
│   └── app.js             # JavaScript应用逻辑
└── README.md              # 项目说明文档
```

## 重构优势

### 1. 模块化设计
- **数据与展示分离**: 所有英语知识内容存储在 `vocabulary.json` 中
- **样式独立**: CSS样式单独管理，便于主题定制
- **逻辑分离**: JavaScript处理数据加载和页面渲染

### 2. 易于维护
- **内容更新**: 只需修改 `vocabulary.json` 文件即可更新所有内容
- **样式调整**: 修改 `styles.css` 即可统一调整页面外观
- **功能扩展**: 在 `app.js` 中添加新功能

### 3. 便于扩展
- **新增词汇**: 在JSON文件中添加新的词汇条目
- **新增分类**: 添加新的section类型
- **多语言支持**: 可以轻松添加多语言数据文件

### 4. 个性化高亮词汇
- 每个数据条目都有独立的 `highlightWords` 字段
- 支持短语和单词的精确高亮
- 保持原始大小写，避免首字母大写问题

### 5. 优化的字体样式
- 使用 `Noto Serif SC` 字体显示例句，提升可读性
- 改进斜体使用，只在例句中应用
- 添加 `.example-text` 类统一管理例句样式

### 6. 智能高亮算法
- 按长度排序处理词汇，避免短词替换长短语
- 支持正则表达式转义，处理特殊字符
- 保持原始文本的大小写格式

### 7. 优化的分类整合 🆕
- **整合续写专用动作词**: 将动作词整合到"高级动词替换"分类中
- **整合抽象概念**: 将抽象概念整合到"核心动词熟词生义"分类中
- **优化分类逻辑**: 按内容类型和重要性重新组织分类

### 8. 智能网格布局算法 🆕
- **灵活列宽支持**: 每个模块可以占据1/2/3列，不再限制在固定列中
- **位置导向布局**: 通过position属性控制模块在页面中的位置
- **响应式优化**: 宽屏下智能网格布局，小屏下自动切换为单栏
- **视觉层次**: 不同区域采用不同的间距和紧凑度
- 基于[CSS多列布局规范](https://www.w3.org/TR/css-multicol-1/)和[表单布局最佳实践](https://baymard.com/blog/avoid-multi-column-forms)设计

## 分类结构优化

### 重新整合的分类
1. **核心动词熟词生义** (第一列)
   - 包含原有的核心动词
   - 整合了抽象概念"小词大用"中的动词用法
   - 占据最大空间，突出重要性

2. **高级动词替换** (第二列)
   - 包含原有的高级动词替换
   - 整合了续写专用动作词
   - 提供多样化的动词选择

3. **高级形容词/副词** (第二列)
   - 保持原有结构
   - 与高级动词替换并列展示

4. **抽象名词** (第三列)
   - 保持原有结构
   - 作为辅助内容展示

5. **万能短语** (第三列)
   - 保持原有结构
   - 与抽象名词并列展示

## 数据文件结构

### vocabulary.json 主要字段

```json
{
  "title": "页面标题",
  "subtitle": "页面副标题",
  "layout": {
    "wideScreen": {
      "columns": 3,
      "asymmetric": true
    }
  },
  "sections": [
    {
      "id": "唯一标识",
      "title": "分类标题",
      "icon": "FontAwesome图标类名",
      "color": "颜色主题",
      "type": "table|grid",
      "data": [
        {
          "word": "词汇",
          "meaning": "含义",
          "example": "例句",
          "highlightWords": ["高亮词汇1", "高亮词汇2"]
        }
      ]
    }
  ],
  "examples": [
    {
      "title": "示例标题",
      "content": "示例内容",
      "highlightWords": ["高亮词汇"]
    }
  ],
  "warnings": [
    {
      "title": "警告标题",
      "content": "警告内容",
      "correct": "正确用法",
      "incorrect": "错误用法",
      "highlightWords": ["高亮词汇"]
    }
  ],
  "learning-tips": ["学习建议数组"]
}
```

## 使用方法

### 1. 添加新词汇
在 `vocabulary.json` 的相应section中添加新条目：

```json
{
  "word": "新词汇",
  "meaning": "新含义",
  "example": "新例句",
  "highlightWords": ["新词汇", "相关词汇"]
}
```

### 2. 添加新分类
在 `sections` 数组中添加新的section对象：

```json
{
  "id": "new-section",
  "title": "新分类标题",
  "icon": "fas fa-new-icon",
  "color": "blue",
  "type": "table",
  "headers": ["列1", "列2", "列3"],
  "data": [...]
}
```

### 3. 修改样式
编辑 `css/styles.css` 文件，支持的颜色主题：
- amber (琥珀色)
- blue (蓝色)
- green (绿色)
- purple (紫色)
- indigo (靛蓝色)
- red (红色)

### 4. 添加新功能
在 `js/app.js` 中扩展 `VocabularyApp` 类：

```javascript
class VocabularyApp {
    // 添加新方法
    newFeature() {
        // 新功能实现
    }
}
```

## 高亮功能说明

### 个性化高亮
每个条目可以指定自己的高亮词汇：

```json
{
  "word": "address",
  "meaning": "v. 处理；应对（问题）",
  "example": "建议信/议论文: We must address the issue of pollution.",
  "highlightWords": ["address", "issue"]
}
```

### 短语高亮
支持多词短语的高亮，保持原始大小写：

```json
{
  "word": "in light of...",
  "meaning": "（鉴于...）",
  "example": "应用文开头: In light of recent events, we propose...",
  "highlightWords": ["In light of", "recent", "propose"]
}
```

## 智能布局算法说明

### 布局逻辑
- **第一列 (2.5fr)**: 核心动词熟词生义 - 最重要的内容，占据最大空间
- **第二列 (1.5fr)**: 高级动词替换 + 高级形容词/副词 - 提升表达层次
- **第三列 (1fr)**: 抽象名词 + 万能短语 - 辅助内容，紧凑展示

### 响应式设计
- **小屏 (<1200px)**: 单栏布局，垂直堆叠
- **宽屏 (≥1200px)**: 三栏非对称布局，优化阅读体验

### 视觉优化
- 不同列采用不同的间距和紧凑度
- 第三列内容更紧凑，适合快速浏览
- 第一列内容更宽松，适合深入学习

## 非对称布局说明

### 布局配置
在 `vocabulary.json` 中配置布局：

```json
{
  "layout": {
    "wideScreen": {
      "columns": 3,
      "asymmetric": true
    }
  }
}
```

### 列分配
每个section可以指定在宽屏下的位置：

```json
{
  "layout": {
    "wideScreen": {
      "column": 1,        // 1-3列
      "width": "full"     // "full" 或 "half"
    }
  }
}
```

### 响应式行为
- **小屏 (< 1200px)**: 单栏垂直布局
- **宽屏 (≥ 1200px)**: 三栏非对称布局
  - 第1列: 2fr宽度（主要内容）
  - 第2列: 1fr宽度（辅助内容）
  - 第3列: 1fr宽度（辅助内容）

## 智能网格布局说明

### 布局配置
每个模块可以通过以下配置控制布局：

```json
{
  "layout": {
    "wideScreen": {
      "columns": 1,        // 占据列数：1/2/3
      "position": "top"    // 位置：top/left/right/bottom-left/bottom-right
    }
  }
}
```

### 位置说明
- **top**: 顶部区域，占据全宽，适合重要内容
- **left**: 中间左侧，与右侧内容并排
- **right**: 中间右侧，与左侧内容并排  
- **bottom-left**: 底部左侧，与底部右侧并排
- **bottom-right**: 底部右侧，与底部左侧并排

### 列宽说明
- **columns: 1**: 占据1列宽度
- **columns: 2**: 占据2列宽度（在top位置时）
- **columns: 3**: 占据3列宽度（在top位置时）

### 响应式行为
- **小屏 (<1200px)**: 所有模块垂直堆叠，列宽设置失效
- **宽屏 (≥1200px)**: 按配置的position和columns进行智能布局

### 布局优势
1. **灵活性**: 每个模块可以独立配置列宽和位置
2. **可扩展性**: 轻松添加新模块并配置布局
3. **用户体验**: 避免[多列布局的常见问题](https://baymard.com/blog/avoid-multi-column-forms)
4. **维护性**: 布局配置集中在数据文件中，便于管理

## 部署说明

1. 确保所有文件在同一目录下
2. 使用支持静态文件服务的Web服务器
3. 访问 `index.html` 查看重构后的页面

## 浏览器兼容性

- 现代浏览器支持 (Chrome, Firefox, Safari, Edge)
- 需要支持 ES6+ 和 Fetch API
- 建议使用 HTTPS 协议以避免混合内容问题
- 响应式布局支持各种屏幕尺寸

## 注意事项

1. **数据文件路径**: 确保 `vocabulary.json` 文件路径正确
2. **CORS问题**: 本地开发时可能需要使用本地服务器
3. **字体加载**: 确保网络连接正常以加载Google Fonts
4. **高亮词汇**: 确保 `highlightWords` 数组中的词汇在例句中存在
5. **布局配置**: 宽屏布局需要正确配置 `layout` 字段

## 扩展建议

1. **搜索功能**: 添加词汇搜索功能
2. **收藏功能**: 允许用户收藏常用词汇
3. **练习模式**: 添加词汇练习功能
4. **导出功能**: 支持导出词汇列表
5. **多语言**: 支持英文界面切换
6. **高亮配置**: 允许用户自定义高亮颜色和样式
7. **布局切换**: 允许用户手动切换布局模式
8. **主题切换**: 支持深色/浅色主题切换 