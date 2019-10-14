# Setup

```
npm install webpack --global
npm install
```

# Sass

```
npm install --save-dev extract-text-webpack-plugin
npm install --save-dev style-loader css-loader postcss-loader precss autoprefixer node-sass sass-loader
```

# Images

```
npm install --save-dev file-loader copy-webpack-plugin
```

# Charts

```
npm install --save-dev https://github.com/novus/nvd3.git
```

# FlexBox

(Link)[https://css-tricks.com/snippets/css/a-guide-to-flexbox/]

# Grid

(Link)[https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout]

# Version

```
npm info webpack-dev-server version
```

# Lazy load

http://jquery.eisbehr.de/lazy/

# Palettes

https://www.materialpalette.com/teal/teal

# Hugo layout

https://www.jakewiesler.com/blog/hugo-directory-structure/

https://discourse.gohugo.io/t/how-to-specify-category-slug/4856/6

```
content/
    about.md
    blog/
    contact.md
    work/
    _index.md
    projects/
    _index.md
    
layouts/
    _default
        single.html
        list.html
    blog/
        single.html
        list.html
    work/
        single.html
        list.html
    static/
        single.html
        list.html
```

# Web content

## 0. Sitemap
```
Home
    projects: list all daily notes, list projects
    blog : list all posts, list categories, list tags
    stacks: list stacks
    projects/project-name : list all daily notes in this project
    categories/category-name: list all post in this project
    projects/project-name/day-001 : detail of daily note
    blog/post-name: detail of post
    hugo: hugo tips
    contact: contact form    
```
## 1. Content
```
Home
    Post Section ( Categories, Tags ) : title, image, description, content
    Note Section ( Project, Stacks )
    
```
## 2. SEO
(later)
TEsting : https://search.google.com/structured-data/testing-tool/u/0/

eg: moz.com

http://schema.org/WebPage
https://developers.google.com/+/web/snippet/
https://developers.facebook.com/tools/debug/

## 3. Social Interaction

### Social sharing

- Google Plus: https://developers.google.com/+/web/snippet/article-rendering#example_with_full-bleed_image
- Facebook : support og meta for sharing on facebook

### Comments

**Disqus**: https://gohugo.io/content-management/comments/
