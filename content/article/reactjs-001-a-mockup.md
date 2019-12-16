---
title: "ReactJS 001 - build a mockup"
type: "article"
date: 2019-11-20T15:32:21+07:00
description: "Reactjs 001 a Mockup"
keywords: ["Reactjs 001 a Mockup"]
subjects: ["reactjs"]
image: "/subjects/reactjs.jpg"
---


## 1. Getting started
Getting with ["create-reactjs-app"](https://create-react-app.dev/docs/getting-started).
After installing and setup your development enviroment

#### - Editor

- https://create-react-app.dev/docs/setting-up-your-editor

#### - EsLint

- https://alligator.io/react/linting-react/
- https://eslint.org/docs/user-guide/getting-started#configuration

```bash
yarn add eslint eslint-loader babel-loader babel-eslint eslint-plugin-react -D
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### - Styles & Assets

- https://css-tricks.com/css-modules-part-1-need/
- https://alligator.io/react/react-css/
- https://programmingwithmosh.com/react/css-modules-react/

#### - CSS in React

1. Global CSS files: the CSS files live completely separately from the component files a la typical HTML and CSS
2. Javascript Stylesheets: each component has a Javascript object representing its styles which lives in the same .js component file and is applied in the styles attribute
3. Modular Stylesheets: each component gets its own .css file which lives alongside and is imported into the .js component file and applied in the className attribute to allow for scoped class names
4. Stylized Components: using frameworks such as **glamorous**, **emotion**, or **styled-components** to create clean, modular, and re-usable building blocks

```javascript
import styles from "./styles.css";

element.innerHTML = 
  `<h1 class="${styles.title}">
     An example heading
   </h1>`;
```

```html
<h1 class="_styles__title_309571057">
  An example heading
</h1>
```

```css
._styles__title_309571057 {
  background-color: red;
}
```

#### - Component

Conceptually, components are like Javascript functions. They accept arbitary inputs( called "props") and return React elements describing what should appear on the screen

In this lession, we only recommend about SPA. The root component of the app will be <App> component

Read more about:

- [JSX](https://reactjs.org/docs/introducing-jsx.html)
- [Sematic Elements](https://www.w3schools.com/html/html5_semantic_elements.asp)


```javascript
import React from "react";
import ReactDOM from "react-dom";
const App = () => {
  return (
    <Fragment>
      <header>Header</header>
      <nav>Nav</nav>
      <main>
        <aside>Aside</aside>
        <section>Section</section>
        <article>Article</article>
      </main>
      <footer>Footer</footer>
    </Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
```

#### Styles and Assets

- [Adding Sass Stylesheets](https://create-react-app.dev/docs/adding-a-sass-stylesheet)
- [ ] Adding Stylesheets
- [ ] Adding CSS Modules
- [Adding Reset CSS](https://create-react-app.dev/docs/adding-css-reset)

```bash
yarn add node-sass

# App.scss
@import-normalize; /* bring in normalize.css styles */
/* rest of app styles */
```

#### Layout

- [Flex](https://www.quackit.com/css/flexbox/examples/flexbox_website_layout_examples.cfm)

#### Code Splitting

- [Code Splitting](https://serverless-stack.com/chapters/code-splitting-in-create-react-app.html)

#### JSON SERVER

- [json-server](https://github.com/typicode/json-server)
- [CORS](https://expressjs.com/en/resources/middleware/cors.html)
- [Get a full fake REST API with zero coding in less than 30 seconds with JSON Server](https://github.com/typicode/json-server#getting-started)
- [ExpressValidator](https://express-validator.github.io/docs/custom-error-messages.html)
- [Upload Files](https://www.pluralsight.com/guides/handling-file-upload-using-ruby-on-rails-5-api)