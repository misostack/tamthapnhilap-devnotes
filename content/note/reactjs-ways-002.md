---
title: "Reactjs Ways - Advanced Solutions"
type: "note"
date: 2018-07-31T13:56:05+07:00
description: "Reactjs Ways 002"
keywords: ["Reactjs Ways 002"]
projects: ["reactjs-ways"]
image: "/common/no-image-available.jpg"
---

### 1.Accessibility


**Refs**

- [Full of story](https://reactjs.org/docs/accessibility.html)
- [Checklist](https://a11yproject.com/checklist.html)


- **WAI-ARIA**

```javascript
    <div className="form-group">
        <label>Email address</label>
        <input type="email" aria-label={`Please enter your email`} aria-required="true"
            className="form-control" onChange={this.handleChange} value={this.state.email} name="email"
            aria-describedby="emailHelp" placeholder="Enter email" />
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
```

- [Semantic HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

- **Accessible Forms**

```javascript
    <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input id="email" type="email" aria-label={`Please enter your email`} aria-required="true"
            className="form-control" onChange={this.handleChange} value={this.state.email} name="email"
            aria-describedby="emailHelp" placeholder="Enter email" />
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
```

- **User notifications:**

https://www.w3.org/WAI/tutorials/forms/notifications/

```html
<!-- main heading -->
<h1>3 Errors – Billing Address</h1>
<!-- page title -->
<title>Thank you for submitting your order.</title>
<!-- dialog -->
<script>alert('Thanks for submitting the form!');</script>
<!-- listing errors -->
<!-- inline feedback -->
- After submit
- During typing: Binary messages, Scaled feedback
- On focus change
```

- **Focus Control**

- **Mouse and pointer events**

- [**Events**](https://reactjs.org/docs/events.html#mouse-events)
- [**Animations**](https://speckyboy.com/custom-hover-click-effects-css-javascript/)

### 2.Code-Splitting

- https://reactjs.org/docs/code-splitting.html
- https://webpack.js.org/guides/code-splitting/
- https://serverless-stack.com/chapters/code-splitting-in-create-react-app.html
- https://github.com/jamiebuilds/react-loadable

```javascript
import Loadable from 'react-loadable';
import Loading from './my-loading-component';

const LoadableComponent = Loadable({
  loader: () => import('./my-component'),
  loading: Loading,
});

export default class App extends React.Component {
  render() {
    return <LoadableComponent/>;
  }
}
```

**Route-based code splitting**

- https://reacttraining.com/react-router/
- [Reactjs Ways - Router](/note/reactjs-ways-003)
### 3.Context

**Before You use context**

```html
Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult.
```

```html
If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.
```

```javascript
<Page user={user} />
// ... which renders ...
<PageLayout user={user} />
// ... which renders ...
<NavigationBar user={user} /> 
// ... which renders ...
<Avatar user={user} />
```

**becomes - no need context here**

```javascript
<Page>
    <PageLayout>
        <NavigationBar>
            <Avatar user={this.props.user} />
        </NavigationBar>
    </PageLayout>
</Page>
```
<div>
However, sometimes the same data needs to be accessible by many components in the tree, and at different nesting levels.
Context lets you <strong>“broadcast”</strong> such data, and changes to it, to all components below. Common examples where using context might be simpler than the alternatives include managing the current locale, theme, or a data cache.
</div>
