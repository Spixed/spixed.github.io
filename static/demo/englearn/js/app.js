class VocabularyApp {
    constructor() {
        this.data = null;
        this.init();
    }

    async init() {
        try {
            await this.loadData();
            this.renderPage();
            this.setupEventListeners();
        } catch (error) {
            console.error('初始化失败:', error);
        }
    }

    async loadData() {
        try {
            const response = await fetch('./data/vocabulary.json');
            this.data = await response.json();
        } catch (error) {
            console.error('加载数据失败:', error);
            throw error;
        }
    }

    renderPage() {
        this.renderHeader();
        this.renderSections();
        this.renderExamples();
        this.renderWarnings();
        this.renderSummary();
    }

    renderHeader() {
        const header = document.getElementById('page-header');
        if (header) {
            header.innerHTML = `
                <div class="text-center mb-12">
                    <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">${this.data.title}<span class="highlight text-xl md:text-xl">熟词生义 & 高级词汇</span></h1>
                    <p class="text-lg text-gray-600 max-w-2xl mx-auto">${this.data.subtitle}</p>
                    <div class="mt-6 flex justify-center">
                        <div class="w-24 h-1 bg-amber-400 rounded-full"></div>
                    </div>
                </div>
            `;
        }
    }

    renderSections() {
        const container = document.getElementById('sections-container');
        if (!container) return;

        // 检查是否支持宽屏布局
        const isWideScreen = window.innerWidth >= 1200;
        const layout = this.data.layout?.wideScreen;

        if (isWideScreen && layout?.asymmetric) {
            this.renderAsymmetricLayout(container);
        } else {
            this.renderStandardLayout(container);
        }
    }

    renderAsymmetricLayout(container) {
        // 智能布局算法：支持模块灵活占据1/2/3列
        const sections = this.data.sections;
        
        // 创建网格布局容器
        container.innerHTML = `
            <div class="smart-grid-layout">
                ${this.renderSmartGrid(sections)}
            </div>
        `;
    }

    renderSmartGrid(sections) {
        // 按位置和列数对sections进行排序和分组
        const layoutMap = {
            'top': [],
            'left': [],
            'right': [],
            'bottom-left': [],
            'bottom-right': []
        };

        // 将sections按位置分组
        sections.forEach(section => {
            const position = section.layout?.wideScreen?.position || 'left';
            layoutMap[position].push(section);
        });

        let html = '';

        // 渲染顶部区域（占据2列）
        if (layoutMap.top.length > 0) {
            html += `<div class="grid-row top-row">`;
            layoutMap.top.forEach(section => {
                const columns = section.layout?.wideScreen?.columns || 1;
                html += `<div class="grid-item span-${columns}">${this.renderSection(section)}</div>`;
            });
            html += `</div>`;
        }

        // 渲染中间区域（左右并排）
        if (layoutMap.left.length > 0 || layoutMap.right.length > 0) {
            html += `<div class="grid-row middle-row">`;
            
            // 左侧区域
            if (layoutMap.left.length > 0) {
                html += `<div class="grid-column left-column">`;
                layoutMap.left.forEach(section => {
                    const columns = section.layout?.wideScreen?.columns || 1;
                    html += `<div class="grid-item span-${columns}">${this.renderSection(section)}</div>`;
                });
                html += `</div>`;
            }

            // 右侧区域
            if (layoutMap.right.length > 0) {
                html += `<div class="grid-column right-column">`;
                layoutMap.right.forEach(section => {
                    const columns = section.layout?.wideScreen?.columns || 1;
                    html += `<div class="grid-item span-${columns}">${this.renderSection(section)}</div>`;
                });
                html += `</div>`;
            }
            
            html += `</div>`;
        }

        // 渲染底部区域（左右并排）
        if (layoutMap['bottom-left'].length > 0 || layoutMap['bottom-right'].length > 0) {
            html += `<div class="grid-row bottom-row">`;
            
            // 底部左侧
            if (layoutMap['bottom-left'].length > 0) {
                html += `<div class="grid-column bottom-left-column">`;
                layoutMap['bottom-left'].forEach(section => {
                    const columns = section.layout?.wideScreen?.columns || 1;
                    html += `<div class="grid-item span-${columns}">${this.renderSection(section)}</div>`;
                });
                html += `</div>`;
            }

            // 底部右侧
            if (layoutMap['bottom-right'].length > 0) {
                html += `<div class="grid-column bottom-right-column">`;
                layoutMap['bottom-right'].forEach(section => {
                    const columns = section.layout?.wideScreen?.columns || 1;
                    html += `<div class="grid-item span-${columns}">${this.renderSection(section)}</div>`;
                });
                html += `</div>`;
            }
            
            html += `</div>`;
        }

        return html;
    }

    renderStandardLayout(container) {
        container.innerHTML = this.data.sections.map(section => 
            this.renderSection(section)
        ).join('');
    }

    renderSection(section) {
        if (section.type === 'table') {
            return this.renderTableSection(section);
        } else if (section.type === 'grid') {
            return this.renderGridSection(section);
        }
        return '';
    }

    renderTableSection(section) {
        const colorClass = `bg-${section.color}-500`;
        const textColorClass = `text-${section.color}-600`;

        return `
            <div class="bg-white rounded-xl shadow-md overflow-hidden mb-10 card">
                <div class="${colorClass} px-6 py-4">
                    <h2 class="text-xl font-bold text-white"><i class="${section.icon} mr-2"></i>${section.title}</h2>
                </div>
                <div class="p-6">
                    <div class="table-container">
                        <table class="w-full">
                            <thead>
                                <tr class="text-left border-b border-gray-200">
                                    ${section.headers.map(header => `<th class="pb-3 font-bold text-gray-700">${header}</th>`).join('')}
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200">
                                ${section.data.map(item => `
                                    <tr>
                                        <td class="py-4 font-bold text-gray-800">${item.word}</td>
                                        <td class="py-4 text-gray-700">${item.meaning}</td>
                                        <td class="py-4 text-gray-600 example-text">${this.highlightKeywords(item.example, textColorClass, item.highlightWords)}</td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `;
    }

    renderGridSection(section) {
        const colorClass = `bg-${section.color}-500`;
        const textColorClass = `text-${section.color}-600`;

        return `
            <div class="bg-white rounded-xl shadow-md overflow-hidden mb-10 card">
                <div class="${colorClass} px-6 py-4">
                    <h2 class="text-xl font-bold text-white"><i class="${section.icon} mr-2"></i>${section.title}</h2>
                </div>
                <div class="p-6">
                    <div class="grid-container">
                        ${section.data.map(item => `
                            <div class="grid-item">
                                <h3 class="font-bold text-gray-800">${item.word}</h3>
                                <p class="text-gray-700">${item.meaning}</p>
                                <p class="example-text">${this.highlightKeywords(item.example, textColorClass, item.highlightWords)}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    renderExamples() {
        const container = document.getElementById('examples-container');
        if (!container) return;

        container.innerHTML = `
            <div class="bg-white rounded-xl shadow-md overflow-hidden mb-10 card">
                <div class="bg-indigo-500 px-6 py-4">
                    <h2 class="text-xl font-bold text-white"><i class="fas fa-lightbulb mr-2"></i>灵活运用示例</h2>
                </div>
                <div class="p-6">
                    <div class="space-y-6">
                        ${this.data.examples.map(example => `
                            <div class="example-item">
                                <h3 class="font-bold text-gray-800 mb-2">${example.title}</h3>
                                <p class="content example-text">${this.highlightKeywords(example.content, 'text-indigo-600', example.highlightWords)}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    renderWarnings() {
        const container = document.getElementById('warnings-container');
        if (!container) return;

        container.innerHTML = `
            <div class="bg-white rounded-xl shadow-md overflow-hidden mb-10 card">
                <div class="bg-red-500 px-6 py-4">
                    <h2 class="text-xl font-bold text-white"><i class="fas fa-exclamation-triangle mr-2"></i>使用注意事项</h2>
                </div>
                <div class="p-6">
                    <div class="space-y-6">
                        ${this.data.warnings.map(warning => `
                            <div class="warning-item">
                                <h3 class="font-bold text-gray-800 mb-2">${warning.title}</h3>
                                <p class="content">${warning.content}</p>
                                <div class="warning-box">
                                    <p class="correct example-text">✅ ${this.highlightKeywords(warning.correct, 'text-green-600', warning.highlightWords)}</p>
                                    <p class="incorrect example-text">❌ ${this.highlightKeywords(warning.incorrect, 'text-red-600', warning.highlightWords)}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    renderSummary() {
        const container = document.getElementById('summary-container');
        if (!container) return;

        container.innerHTML = `
            <div class="summary-container">
                <div class="summary-header">
                    <div class="summary-icon">
                        <i class="fas fa-graduation-cap"></i>
                    </div>
                    <div class="summary-content">
                        <h2>掌握这些熟词生义与高级词汇，让你的写作脱颖而出</h2>
                        <p>掌握这些词汇，结合具体场景灵活使用，能让你的文章在语言丰富性和准确性上脱颖而出！</p>
                        <div class="tips-box">
                            <h3>学习建议：</h3>
                            <ul>
                                ${this.data['learning-tips'].map(tip => `<li>${tip}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    highlightKeywords(text, colorClass, highlightWords = []) {
        if (!highlightWords || highlightWords.length === 0) {
            return text;
        }

        let highlightedText = text;
        
        // 按长度排序，先处理长短语，避免短词替换长短语中的部分
        const sortedWords = highlightWords.sort((a, b) => b.length - a.length);
        
        sortedWords.forEach(keyword => {
            if (!keyword) return;
            
            // 创建不区分大小写的正则表达式，但保持原始大小写
            const regex = new RegExp(`(${this.escapeRegExp(keyword)})`, 'gi');
            highlightedText = highlightedText.replace(regex, (match, p1) => {
                // 保持原始大小写
                return `<span class="${colorClass} font-semibold">${p1}</span>`;
            });
        });

        return highlightedText;
    }

    escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    setupEventListeners() {
        // 平滑滚动效果
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

        // 卡片悬停效果
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-5px)';
                card.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
                card.style.boxShadow = '';
            });
        });

        // 窗口大小变化时重新渲染布局
        window.addEventListener('resize', () => {
            this.handleResize();
        });
    }

    handleResize() {
        // 防抖处理
        clearTimeout(this.resizeTimeout);
        this.resizeTimeout = setTimeout(() => {
            this.renderSections();
        }, 250);
    }
}

// 页面加载完成后初始化应用
document.addEventListener('DOMContentLoaded', () => {
    new VocabularyApp();
}); 