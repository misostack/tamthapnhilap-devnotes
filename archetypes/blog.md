---
title: "{{ replace .TranslationBaseName "-" " " | title }}"
type: "blog"
date: {{ .Date }}
description: "{{ replace .TranslationBaseName "-" " " | title }}"
keywords: ["{{ replace .TranslationBaseName "-" " " | title }}"]
categories: ["uncategory"]
tags: []
image: "/common/no-image-available.jpg"
---