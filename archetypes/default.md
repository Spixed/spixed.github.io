+++
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
date = {{ .Date }}
draft = true
author = "spixed"  # 对应 data/authors.toml 的 key
featured = false   # 是否精选文章
keywords = [""]
categories = [""]
tags = [""]
weight = 0         # 权重，数字越小优先级越高
+++
