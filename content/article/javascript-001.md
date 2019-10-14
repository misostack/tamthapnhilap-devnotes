---
title: "Javascript 001"
type: "article"
date: 2018-10-05T11:42:10+07:00
description: "Javascript 001"
keywords: ["Javascript 001"]
subjects: ["javascript"]
image: "/subjects/javascript.jpg"
---

# General

## --You may concern

- Head First Javascript

## --Sublime plugin

- html5 snippet

## --THe first step with webpack

- Official : https://webpack.js.org/

```bash
npm install webpack webpack-cli --save-dev
```

- Assets: https://webpack.js.org/guides/asset-management/

```bash
npm install webpack webpack-cli --save-dev
npm i -D style-loader css-loader
npm install --save-dev file-loader
npm install --save-dev html-webpack-plugin
npm install --save-dev clean-webpack-plugin
npm install --save-dev webpack-dev-server
npm install --save-dev express webpack-dev-middleware
```

- CLI : https://webpack.js.org/api/cli/#environment-options

- Hotmodule : https://webpack.js.org/guides/hot-module-replacement/

## --Service worker

- https://developers.google.com/web/fundamentals/primers/service-workers/

**Chrome checking:**

```bash
chrome://inspect/#service-workers
```

Later ...

## **Some tricks

- [x] Arguments
- [x] Exceptions
- [x] Event handlers
- [x] RegExp
- [x] Recursive
- [x] JSON
- [x] [Server Side Javascript](/article/nodejs-001/)

```javascript
export function someTricks(){
	printArgs(1,'hai',3, {'a':'1','b':'2'});
	theExceptions();
	eventHandles();
	commonRegex();
	recursives();
	jsonSamples();
}

function printArgs()
{
	const appRoot = document.querySelector('#app');
	const args = document.createElement('ul');
	args.id = 'args-test';
	for(let i = 0; i < arguments.length; i++){
		let arg = document.createElement('li');
		console.log(arguments[i]);
		arg.innerHTML = arguments[i].inspect();
		args.appendChild(arg);
	}
	appRoot.prepend(args);
}

Object.prototype.inspect = function(){	
	let str = ''
	if(this instanceof Object){
		str += '{';
		let associates = [];
		for(var key in this){
			if(this.hasOwnProperty(key)){
				associates.push(key + ':' + this[key]);	
			}
		}
		str += associates.join(', ');
		str += '}';
	}else{
		str = this.toString();
	}
	return str;
};

function theExceptions(){	
	try {
		let sampleNode = document.getElementById('samplenode');
		samplenode.innerHTML = 'abcxyz';
	} catch(e) {
		// statements
		const appRoot = document.getElementById('app');
		appRoot.prepend(e);
	}	
}

window.addEventListener('load', init, false);

function init(){
	const appRoot = document.getElementById('app');
	appRoot.prepend('init');	
}

function eventHandles(){
	const appRoot = document.getElementById('app');
	let sampleBox = document.createElement('div');
	sampleBox.classList = 'sample-box';
	sampleBox.innerHTML = 'BOX';
	appRoot.prepend(sampleBox);
	let ele = document.createElement('div');
	ele.innerHTML = '<button>Toggle DIV</button>';
	ele.addEventListener('click', eventClick, false);
	appRoot.prepend(ele);
}

function eventClick(e){
	let target = e.target;
	let p = document.createElement('p');
	p.innerHTML = 'lorem upsum';
	target.append(p);
	target.removeEventListener('click', eventClick, false);
}

function commonRegex(){
	const emailRegex = new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
	let emails = ['exmapl@gmail.com','abc@xyz.domain','asdasd.asd.@123.com','123132','asdads'];
	const appRoot = document.getElementById('app');
	emails.forEach( function(email, index) {
		let ele = document.createElement('div');
		ele.innerHTML = '<strong>' + email + '</strong>' + ' is ' + (email.match(emailRegex)? 'valid': 'invalid') + ' email';
		appRoot.append(ele);
	});
}

function recursives(){
	const appRoot = document.getElementById('app');
	let ele = document.createElement('div');
	ele.innerHTML = 'fibonaci(10):<br/> ' + fibonaciArray(10);
	appRoot.prepend(ele);
}

function fibonaci(n){
	if(n <= 0) return 0;
	if(n == 1) return 1;
	if(n== 2) return 1;
	return fibonaci(n-1) + fibonaci(n-2);
}

function fibonaciArray(n){
	let arr = [];
	for(let i = 1; i<= n;i++){
		arr.push(fibonaci(i));
	}
	return arr.join(" ");
}

function jsonSamples(){
	let misostack_str = '{"name": "misostack", "languages": ["php","javascripts","nodejs","ruby","java","go","c","c#","python"]}';
	let misostack = JSON.parse(misostack_str);
	console.log(misostack.name, misostack.languages.join(','));
	console.log(JSON.stringify(misostack));
}
```
