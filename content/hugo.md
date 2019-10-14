---
type: "static"
title: "Hugo Tips"
description: "Hướng dẫn sử dụng hugo để tạo bài viết bằng hugo"
keywords: ["hugo"]
image: "/pages/hugo/hugo.jpg"
date: 2018-05-24T15:57:54+07:00
---
## 1.Commands
{{<command-table>}}
    {{<command-table-row "hugo server" "run dev server in local">}}
    {{<command-table-row "hugo" "build">}}
    {{<command-table-row "hugo new page-name.md" "new page">}}
    {{<command-table-row "hugo new blog/post-name.md" "new blog post">}}
    {{<command-table-row "hugo new note/projectname-day001.md" "new project note">}}
    {{<command-table-row "hugo new article/subject-001-installation.md" "new subject's article">}}
    
{{</command-table>}}

## 2.Shortcodes

### 2.1.Hightlight Code
{{<command-table>}}
    {{<command-table-row "<OPENTAG>" "<hlcode>">}}
    {{<command-table-row "<CLOSETAG>" "</hlcode>">}}    
{{</command-table>}}

```html
{{</*OPENTAG id="example-highlight-text" text="Example hightlight text" 
language="javascript"*/>}}
    import './App.scss';
    import hello from './hello';
    hello();
{{</*CLOSETAG*/>}}

{{</*OPENTAG language="bash"*/>}}
sudo apt-get install -y libssl-dev libreadline-dev zlib1g-dev
sudo apt-get install -y build-essential
{{</*CLOSETAG*/>}}
```

## 3.Tooltips

{{<command-table>}}
    {{<command-table-row "a" "run dev server in local">}}    
{{</command-table>}}

## 3.Links

- https://discourse.gohugo.io/t/sort-order-only-bydate-or-byweight/6961/4
- https://discourse.gohugo.io/t/question-regarding-next-prev-navigation/1055/3