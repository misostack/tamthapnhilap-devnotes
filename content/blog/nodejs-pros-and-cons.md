---
title: "Nodejs Pros and Cons"
type: "blog"
date: 2018-07-11T10:48:10+07:00
description: "Nodejs Pros and Cons"
keywords: ["Nodejs Pros and Cons"]
categories: ["languages"]
tags: []
image: "/posts/nodejs.jpg"
---

## Đầu tiên nodejs là cái quái gì vậy?

```markdown
Bạn nghĩ sao nếu javascript có thể chạy trên máy chủ?
```

## Các đặc tính quan trọng của nodejs

**Một điển hình về mô hình truyền thống**

![js client structure](/posts/js-client-structure.jpg)

**Mô hình mà js ở phía server**

![js server structure](/posts/js-server-structure.jpg)

Được sự hậu thuẩn của google

```markdown
Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
```

Trang chủ download nodejs: [nodejs.org](https://nodejs.org/en/)

As an [asynchronous](https://www.facebook.com/notes/it-terms-vietnam/synchronous-vs-asynchronous/1774898502589348/) event driven JavaScript runtime, Node is designed to build scalable network applications

**Blocking IO**

![Blocking](/posts/blocking-io.png)

**Non Blocking IO**

![Non Blocking](/posts/non-blocking-io.png)

Một khái niệm quan trong khác nữa của nodejs là [blocking vs non-blocking](https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/)

**Asynchronous vs Synchronous**

![Asynchronous vs Synchronous](/posts/asynchronous-vs-synchronous.png)

**Concurrency and Throughput**


JavaScript execution in Node.js is single threaded, so concurrency refers to the event loop's capacity to execute JavaScript callback functions after completing other work. Any code that is expected to run in a concurrent manner must allow the event loop to continue running as non-JavaScript operations, like I/O, are occurring.

As an example, let's consider a case where each request to a web server takes 50ms to complete and 45ms of that 50ms is database I/O that can be done asynchronously. Choosing non-blocking asynchronous operations frees up that 45ms per request to handle other requests. This is a significant difference in capacity just by choosing to use non-blocking methods instead of blocking methods.

The event loop is different than models in many other languages where additional threads may be created to handle concurrent work.

## Related topics

- https://github.com/libuv/libuv
- https://www.quora.com/What-are-the-pros-and-cons-of-Node-js
- https://www.cleveroad.com/blog/node-js-vs-ruby-on-rails--the-power-behind-technologies
- https://tech.3si.vn/2017/07/10/nodejs-lua-chon-moi-cho-nen-tang-server-side/

## Summary

<div class="important">
    <ol>
        <li>It is single threaded, asynchronous and event-drive which makes it a good choice for real-time apps like messengers and all.</li>
        <li>The main event loop is single-threaded but most of the I/O works run on separate threads, because the I/O APIs in Node.js are asynchronous/non-blocking by design,in order to accommodate the event loop.</li>
        <li>Non IO Blocking</li>
        <li>A good choice for web application development: website, file uploads, realtime webapp:chat,groupchat, Restful API</li>
</div>

## Where can you start?
<ol>
    <li><a href="https://www.w3schools.com/jS/default.asp">Javascript</a></li>
    <li><a href="https://freetuts.net/ecmascript-2015-es6-la-gi-603.html">ES6</a></li>
    <li><a href="https://nodejs.org/en/about/">About NodeJS</a></li>
    <li><a href="https://expressjs.com/">ExpressJS</a></li>
    <li><a href="https://koajs.com/">Koajs</a></li>
</ol>