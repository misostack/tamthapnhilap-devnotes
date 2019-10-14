---
title: "Reactjs Ways - React Router - React Redux"
type: "note"
date: 2018-08-03T10:18:06+07:00
description: "Reactjs Ways 003"
keywords: ["Reactjs Ways 003"]
projects: ["reactjs-ways"]
image: "/common/no-image-available.jpg"
---

### 1.Install

- Refs : https://reacttraining.com/react-router/web/guides/philosophy

```javascript
npm install react-router-dom -D
```

### 2.Folder Structure

Refs: https://engineering.opsgenie.com/how-to-organize-react-files-before-its-messed-up-c85387f691be

There are several ways, but in summary:

**By File Type**

This is very simple structure which almost use for small application and for learning purpose

```html
└── src
    └── actions
        └── group.js
        └── user.js
    └── components
        └── group-list.js
        └── group-item.js
        └── user-avatar.js
        └── user-box.js
        └── user-item.js 
    └── containers
        └── App.js
        └── group.js
        └── user.js
    └── reducers
        └── group.js
        └── group-members.js
        └── user.js
    └── index.js
    └── Routes.js
```

**By Features**

We can also group files by their domain

```html
└── src
    └── app
        └── layout
            └── footer.js
            └── header.js
        └── App.js
        └── index.js
        └── Routes.js
    └── groups
        └── actions/
        └── components/
        └── constants/
        └── containers/
        └── reducers/
    └── users
        └── actions/
        └── components/
        └── constants/
        └── containers/
        └── reducers/
```

<div class="important">
However, as your application grows you’ll have directories which are very deep and you’ll lose your way in the jungle.
</div>

```html
└── src
    └── user
        └── components
            └── important-user-component.js
                └── components
                    └── important-user-component-has-component.js
                        └── some-where-over-the-rainbow.js
```

- A kind of best practice structure : https://medium.com/lexical-labs-engineering/redux-best-practices-64d59775802e

```html
└── src
    └── modules
        └── reducers.js
        └── users
            └── constants.js
            └── actions
                └── user_fetch.js
                └── user_login.js
                └── permissions_fetch.js
            └── reducers
                └── index.js
                └── user.js
                └── permission.js
        └──projects/
    └── routes
        └── login
            └── index.js
            └── containers
                └── login.js
            └── components
                └── login.js
        └── logged_in/
        └── project_list/
        └── project_view/
```

- Routing v4: https://css-tricks.com/react-router-4/
- Redux : https://medium.com/@resir014/a-type-safe-approach-to-redux-stores-in-typescript-6474e012b81e

**Full redux with typescript**
- Super simple example : http://blog.tylerbuchea.com/super-simple-react-redux-application-example/
- https://hackernoon.com/redux-step-by-step-a-simple-and-robust-workflow-for-real-life-apps-1fdf7df46092
- https://dev.to/resir014/redux-4--typescript-29-a-type-safe-approach-2lf4
- https://codesandbox.io/s/github/piotrwitek/typesafe-actions-todo-app

**Single Page Application**

Let's imagine, your application will be a big component called App. In this App component,
We'll configure a router or switcher to switch between screens( other components called container ).
We also use redux to manage states.
Three principles:
- Single source of truth: the state of your application is stored in an object tree within a single store
- State is readonly : the only way to change the state is to emit an action
- Changes are made with pure functions

**Extends the Single Page Application**

Let say we have a cms system