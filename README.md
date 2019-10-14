# General

## Repositories

```
mkdir blog-nhatkiduan
cd blog-nhatkiduan
git clone git@bitbucket.org:tamthapnhilap/blog-nhatkiduan.git src
git clone git@github.com:misostack/nhatkiduan.git dist
```

## Development

```
hugo serve # run
hugo # build
```

### Setup tools

**Step 1**

```
npm init -y
npm install --save-dev webpack
```

*How to make ES6 work?*

```
npm install babel-core babel-loader babel-preset-env babel-preset-es2015 babel-preset-stage-2 --save-dev
```

```javascript
    module: {
        rules: [
          {
            test: /\.js?$/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  presets: ['es2015','stage-2'],
                },
              },
            ],
          }
        ]
    },
       
```

*How to test your js with html?*

```
npm install --save-dev webpack-dev-server
npm install --save-dev html-webpack-plugin
```

*Create new file index.html in src dir*


**Step 2**

```
npm install html-webpack-plugin --save-dev
```


```
hugo server -D
```

# New posts

```
hugo new posts/example-day-001.md
```

# References

- (Istnall)[https://gohugo.io/getting-started/installing]
- https://gohugo.io/getting-started/quick-start/

https://bwaycer.github.io/hugo_tutorial.hugo/templates/list/