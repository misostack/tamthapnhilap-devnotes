---
title: "Ruby 016 Web Apps"
type: "article"
date: 2018-09-19T14:39:41+07:00
description: "Ruby 016 Web Apps"
keywords: ["Ruby 016 Web Apps"]
subjects: ["ror"]
image: "/common/no-image-available.jpg"
---

## First approach

### -- Set up project directory

- Create your own project directory

![ruby simple webapp](/posts/ruby-simple-webapp.png)

### -- Install sinatra lib for handling web requests

- Set up routes
- Create first HTML Page
- Set up sinatra to respond with HTML

**Overview**

- The lastest version of sinatra used **thin** as a **web server** instead of WEBrick
- Refs : http://code.macournoyer.com/thin/

```bash
gem install sinatra
```

```ruby
#!/usr/bin/env ruby
#puts $LOAD_PATH
require 'sinatra'

get ('/') do
	'Home Page'
end
```

### -- Display objects with HTML

- Refs : https://ruby-doc.org/stdlib-2.5.1/libdoc/erb/rdoc/ERB.html

```ruby
$LOAD_PATH.unshift(File.join(File.dirname(__FILE__),'lib'))
require 'sinatra'
require 'todo'

get ('/') do	
	@paths = $LOAD_PATH
	erb :"todo/index"
end
```

```erb
<%# @paths %>
<% @paths.each do |path| %>
<li class="list-group-item"><%= path %></li>
<% end %>
```

### -- Saving and loading objects

- Create a todo object base on form contents
- Save a todo object to a file
- Load the list of todo
- Find todo within file
- Display todo list