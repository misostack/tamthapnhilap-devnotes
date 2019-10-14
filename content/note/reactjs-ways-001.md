---
title: "Reactjs Ways - Main Concepts"
type: "note"
date: 2018-07-31T13:47:58+07:00
description: "Reactjs Ways 001"
keywords: ["Reactjs Ways 001"]
projects: ["reactjs-ways"]
image: "/common/no-image-available.jpg"
---

### **1.JSX**

<blockquote class="important">
<ul>
    <li>javascript syntax extension</li>
    <li>Since JSX is closer to JavaScript than to HTML, React DOM uses camelCase property naming convention instead of HTML attribute names.</li>
</ul>
</blockquote>

```javascript
const element = <img src={user.avatarUrl}></img>;

const element = <h1>Hello, {formatName(user)}!</h1>

const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);

ReactDOM.render(element, document.getElementById('root'));
```

### **2.Render**

<blockquote class="important">
<ol>
<li>Elements are the smallest building blocks of React apps.</li>
<li>React elements are immutable. Once you create an element, you can’t change its children or attributes</li>
<li>React Only Updates What’s Necessary</li>
</ol>
</blockquote>

```javascript
ReactDOM.render(element, document.getElementById('root'));
```

**https://en.wikipedia.org/wiki/Immutable_object**

### **3.Components and Props**

- Rendering a Component
- Composing Components
- Extracting Components
- Props are Read-Only

<blockquote class="important">
- Conceptually, components are like JavaScript functions. <br/>
- They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.<br/>
- All React components must act like <strong>pure functions</strong> with respect to their props.
</blockquote>

**The simplest way to define a component is to write a JavaScript function:**

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

**Common way to define a component(ES6 class):**

```javascript
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```

**Note:**

- https://reactjs.org/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized

<blockquote class="important">
- Always start component names with a capital letter.<br>
- React treats components starting with lowercase letters as DOM tags
</blockquote>

### **4.State and Lifecyle**

<blockquote class="important">
- State is similar to props, but it is private and fully controlled by the component. <br/>
- Do Not Modify State Directly<br/>
- State Updates May Be Asynchronous<br/>
- State Updates are Merged<br/>
- The Data Flows Down
</blockquote>

- Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state.

{{<hlcode id="example-sample-component" text="sample-component" language="javascript">}}
// Wrong
this.setState({
  counter: this.state.counter + this.props.increment,
});

// Correct
this.setState((prevState, props) => ({
  counter: prevState.counter + props.increment
}));

// Correct
this.setState(function(prevState, props) {
  return {
    counter: prevState.counter + props.increment
  };
});

componentDidMount() {
    fetchPosts().then(response => {
      this.setState({
        posts: response.posts
      });
    });

    fetchComments().then(response => {
      this.setState({
        comments: response.comments
      });
    });
  }

{{</hlcode>}}
<br/>
{{<hlcode id="example-timer-component" text="timer-component" language="javascript">}}

import * as React from "react";
interface TimerProps {
    wrapperClass: string
}

interface TimerState {
    date: Date
}

export default class Timer extends React.Component<TimerProps, TimerState> {
    timerID: any;

    constructor(props: any) {
        super(props);
        this.state = {
            date: new Date()
        }
        // let numbers: any = [9, 3, 6, 2];
        // console.log(...numbers);
        // console.log("Min number of this array ", numbers, Math.min.apply(null, numbers));
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    componentDidMount() {
        this.timerID = setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div className={this.props.wrapperClass}><i className="fa fa-clock mr-md-2"></i>{this.state.date.toLocaleTimeString()}</div>
        )
    }
}

{{</hlcode>}}
<br/>

### **5.State and Lifecyle**

<blockquote class="important">
- React events are named using camelCase, rather than lowercase.<br/>
- With JSX you pass a function as the event handler, rather than a string.
</blockquote>

**Arrow Functions**

```javascript
// Basic Syntax with Multiple Parameters
const multiplyES6 = (x, y) => { return x * y };
console.log(multiplyES6(2,3));
// Basic Syntax with One Parameter
const phraseSplitterEs6 = phrase => phrase.split(" ");
console.log(phraseSplitterEs6("ES6 Awesomeness"));  // ["ES6", "Awesomeness"]
// Basic Syntax with No Parameters
const docLogEs6 = () => { console.log('hello'); };
docLogEs6();
// Object Literal Syntax
const setNameIdsEs6 = (id, name) => ({ id: id, name: name });
console.log(setNameIdsEs6 (4, "Kyle"));   // Object {id: 4, name: "Kyle"}
```

*Use Cases for Arrow Functions*

- https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/
- https://javascriptplayground.com/real-life-es6-arrow-fn/
- https://www.sitepoint.com/es6-let-const/
- https://medium.com/@owenyangg/javascript-call-apply-and-bind-explained-to-a-total-noob-63f146684564

```javascript
    const smartPhones = [
        { name: 'iphone', price: 649 },
        { name: 'Galaxy S6', price: 576 },
        { name: 'Galaxy Note 5', price: 489 }
    ];
    console.log(smartPhones.map(smartphone => smartphone.price));
    console.log(smartPhones.filter(smartphone => smartphone.price > 500));
    
    // ES5
    aAsync()
    .then(function () { return bAsync(); })
    .then(function () { return cAsync(); })
    .done(function () { finish(); });    

    // ES6
    aAsync()
    .then(() => return bAsync())
    .then(() => return cAsync())
    .done(() => finish)
```

**Javascript call() & apply() vs bind()?**

- https://stackoverflow.com/questions/15455009/javascript-call-apply-vs-bind

- Call invokes the function and allows you to pass in arguments one by one.
- Apply invokes the function and allows you to pass in arguments as an array.
- Bind returns a new function, allowing you to pass in a this array and any number of arguments.

```javascript
class MyMath{
  constructor(){
      this.multipleTwo = this.multiple.bind(this, 2);
  }
  multiple = (x,y) =>{
    return x * y;
  }
  calculateWith2 = () => {
    for(let i = 1; i <=10;i++){
      console.log('2*',i, '=',this.multipleTwo(i));
    }
  }
}

const obj = new MyMath();
obj.calculateWith2();
```

### **6.Conditonal Rendering**

<blockquote class="important">
- Conditional rendering<br/>
- Element Variables<br/>
- Inline If with Logical && Operator<br/>
- Preventing Component from Rendering<br/>
</blockquote>

**Conditional rendering**

```javascript
    render() {
        const isLogged = this.state.isLogged;
        let button;
        if (isLogged) {
            button = <a href="#logout" className="btn btn-danger" onClick={this.handleLogout}>Logout</a>
        } else {
            button = <a href="#logout" className="btn btn-primary" onClick={this.handleLogin}>Login</a>
        }
        return (
            button
        )
    }
```

**Element Variables**

```javascript

render() {
    const isLogged = this.getLogInState();
    let button;

    if (isLogged) {
        button = <a href="#logout" className="btn btn-danger" onClick={this.handleLogout}>Logout</a>
    } else {
        button = <a href="#logout" className="btn btn-primary" onClick={this.handleLogin}>Login</a>
    }
    return (
        button
    )
}

```

**Inline If with Logical && Operator**

```javascript
    const logInBtn = <a href="#login" className="btn btn-primary" onClick={this.handleLogin}>Login</a>
    const logOutBtn = <a href="#logout" className="btn btn-danger" onClick={this.handleLogout}>Logout</a>
    return (
        isLogged ? logOutBtn : logInBtn
    )
```

## References

- [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/)
- [Import & Export modules](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export)
- [Naming Conventions](https://hackernoon.com/react-components-naming-convention-%EF%B8%8F-b50303551505)
- [Event naming](https://jaketrent.com/post/naming-event-handlers-react/)
- [Best practice organization](https://web-design-weekly.com/2015/01/29/opinionated-guide-react-js-best-practices-conventions/)
- [Other best practice](https://unbug.gitbooks.io/react-native-training/content/45_naming_convention.html)

### **7.Lists and Keys**

```javascript
    public createModules(): any {
        let modules: any = [];
        this.state.modules.map((module: any, index: any) => {
            modules.push((
                <li key={'module' + index}>
                    <a href={module.path}>{module.name}</a>
                </li>
            ))
        });
        return modules;
    }
```

### 8.Form

- https://reactjs.org/docs/forms.html
- https://reactjs.org/docs/uncontrolled-components.html#the-file-input-tag

<blockquote class="important">
In most cases, we recommend using controlled components to implement forms. In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.
</blockquote>

### 9.Lifting State Up

<blockquote class="important">
- Often, several components need to reflect the same changing data. We recommend lifting the shared state up to their closest common ancestor. Let’s see how this works in action.
</blockquote>

<blockquote class="important">
- Lifting state involves writing more “boilerplate” code than two-way binding approaches, but as a benefit, it takes less work to find and isolate bugs. Since any state “lives” in some component and that component alone can change it, the surface area for bugs is greatly reduced. Additionally, you can implement any custom logic to reject or transform user input.
</blockquote>

```javascript
<Navbar isLogged={this.state.isLogged} handleLoginState={this.handleLoginState} />
<main className="main container">
    <div className="row clearfix">
        <div className="col-md-3">
            <Sidebar modules={this.state.modules} />
        </div>
        <div className="col-md-9">
            { /* HTML tags always use lowercase tag names, while React components start with Uppercase. */}
            <h1 style={inlineStyles} className="page-title">{this.title ? this.title : 'ReactJS Ways'}</h1>
            <LoginForm isLogged={this.state.isLogged} handleLoginState={this.handleLoginState} />
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum provident magni consequatur libero, eum aut numquam quisquam sunt quod aperiam quo eius, reprehenderit similique ex incidunt blanditiis, veritatis beatae quibusdam.
            </p>
        </div>
    </div>
</main>
```

```javascript
    handleSubmit(event: any) {
        console.log(this.state.email, this.state.password, this.state.regionID, this.state.stores, this.state.remember ? 'Remember!' : "Dont' remember me!");
        this.props.handleLoginState(true);
        event.preventDefault();
    }

    render() {
        let isLogged = this.props.isLogged;
        if (isLogged) {
            return null;
        }
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" onChange={this.handleChange} value={this.state.email} name="email"
                        aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" onChange={this.handleChange} name="password" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
```
**There are several ways to create modal with reactjs. You can take a look into these links:**

- https://react.semantic-ui.com/usage
- https://medium.com/front-end-hacking/react-redux-no-need-to-component-state-for-modals-73871157b52e
- https://hackernoon.com/introducing-reactjs-popup-modals-tooltips-and-menus-all-in-one-227de37766fa
- https://reactjs.org/docs/integrating-with-other-libraries.html
- https://codeburst.io/modals-in-react-f6c3ff9f4701
- https://react.rocks/example/react-notification-system
- V3 bootstrap : https://react-bootstrap.github.io/

### 10.Thinking in React

- Start With A Mock
- Break The UI Into A Component Hierarchy
- Build A Static Version in React
- Identify The Minimal (but complete) Representation Of UI State
- Identify Where Your State Should Live
- Add Inverse Data Flow