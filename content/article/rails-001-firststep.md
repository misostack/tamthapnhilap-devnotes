---
title: "Rails 001 - MVC"
type: "article"
date: 2018-10-05T16:02:51+07:00
description: "The introduction of MVC in Ruby on Rails"
keywords: ["ror","mvc"]
subjects: ["ror"]
image: "/common/no-image-available.jpg"
---

## All References

- [Official](https://guides.rubyonrails.org/index.html)
- [Routes](https://blog.bigbinary.com/2016/02/16/rails-5-options-for-rake-routes.html)
- [Generators](https://guides.rubyonrails.org/generators.html)
- [Mime] (https://rubyplus.com/articles/3231-How-To-Get-A-List-Of-All-Currently-Registered-MIME-Types-With-Rails)
- [Web Mime](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)
- [DateTime](https://ruby-doc.org/stdlib-2.3.1/libdoc/date/rdoc/DateTime.html#method-c-now)
- [Routing](https://guides.rubyonrails.org/routing.html)
- [Controller](https://guides.rubyonrails.org/action_controller_overview.html#the-request-and-response-objects)
- [Self Singed SSL Certificate](https://www.devmynd.com/blog/rails-local-development-https-using-self-signed-ssl-certificate/)
- [Rails Server PUma SSL Not Avaible For this Build](https://stackoverflow.com/questions/49049111/rails-server-puma-ssl-not-available-in-this-build-standarderror?rq=1)
- [Layout rendering](https://guides.rubyonrails.org/layouts_and_rendering.html)

## New Project

### Install rails

```bash
rails new appname --skip-install
cd appname
bundle install
```

### Change Test Framework

```bash
bundle add rspec-rails --group=development,test
```

**config/application.rb**

```ruby

    config.generators do |g|
      g.orm             :active_record
      g.test_framework  :rspec
    end

ENV['TMP'] = File.join(Rails.root, 'tmp')    
```

```bash
rails generate rspec:install
```

## Initialize

```bash
gem install rails
rails new webapp -B
cd webapp
bundler install
rails s -b 0.0.0.0 -p 3000 -e development
rails console
Mime::LOOKUP
gem install puma
bundle update puma
```

## Samples

```ruby
Rails.application.routes.draw do
  get '/ping', {to: 'home#ping'} # run
  get '/ping', {to: 'home#index'} # never run
  root to: "home#index" # default
end
```

## Cheatsheet

- [x] [Routes cheatsheet](/article/rails-002-cheatsheets/#article-titles-0)
- [x] [Controller Cheatsheet](/article/rails-002-cheatsheets/#article-titles-1)
- [x] [View Cheatsheet](/article/rails-002-cheatsheets/#article-titles-2)
- [x] [Model Cheatsheet](/article/rails-002-cheatsheets/#article-titles-3)

## The main points

- [x] The default Database is SQLite
- [x] The default webserver is puma
- [x] MVC: controller, model, view
- [x] Routes applied this priority( top to bottom )
- [x] Gem version: [twiddle-wakka](https://robots.thoughtbot.com/rubys-pessimistic-operator)

### Controllers

- [x] Naming Convention: Pluralization is preferable( eg : ClientsController or SiteAdminsController )
- [x] Layout and rendering : by default **render method** will be execute and finding the view with the same name as action with this structure: 'views/{namespace/controllernames/action.html.erb}'( eg: views/status/messages/index.html.erb)
- [x] Parameters
- [x] Routes parameters
- [x] Strong parameters
- [x] HTTP Basic Auth

### Routes

- [x] [Official](https://guides.rubyonrails.org/routing.html)
- [x] [Details](/article/rails-005-routing)
- [x] root to:'home#index' : home route
- [x] rake routes : list all routes
- [x] routing types: resources, namespace, nested resources, routing concerns
- [x] priority: top to bottom
- [x] Resources should never be nested more than 1 level deep

### Views

- [x] By default
- [x] ERB Template
- [x] [HAML](https://rubygems.org/gems/haml/versions/5.0.4)

### Models

- [x] [SQLite](https://www.sqlite.org/download.html)
- [x] [SQLite tutorials](https://www.tutorialspoint.com/sqlite/sqlite_create_database.htm)
- [x] [ActiveRecord](https://guides.rubyonrails.org/active_record_basics.html)
- [x] [ActiveRecord Validation](https://guides.rubyonrails.org/active_record_validations.html)
- [x] [ActiveRecord Migration](https://guides.rubyonrails.org/active_record_migrations.html)

### Testing with RSpec

- [x] [Rspec Rails](https://github.com/rspec/rspec-rails)

```bash
bundle add rspec-rails --group=development,test
```

```ruby
gem "rspec-rails", "~> 3.8", :groups => [:development, :test]
```

**config/application.rb**

```ruby

    config.generators do |g|
      g.orm             :active_record
      g.test_framework  :rspec
    end

ENV['TMP'] = File.join(Rails.root, 'tmp')    
```

```bash
rails generate rspec:install
```

### Generators

- [Official](https://guides.rubyonrails.org/generators.html)

### Assets

```ruby
# Debug mode disables concatenation and preprocessing of assets.
# This option may cause significant delays in view rendering with a large
# number of complex assets.
# Prevent using compiled assets for all envs
```

```ruby
config.assets.debug = true
```

## Common errors

### 1.Bootstrap gem

```bash
bundle add bootstrap # current gem version cause error
```

Ref: https://github.com/twbs/bootstrap-rubygem/issues/157

### 2.Test Framework

- Ref : https://github.com/rspec/rspec-rails

```bash
rails g rspec:install
```

==> Errors on window 10 : https://stackoverflow.com/questions/35517997/rspec-installation-error-invalid-argument

Because of the rails generate rspec:install command:

1. Creates a temporary directory
2. Populates it with the files it needs
3. Uses Thor to copy those files into your Rails app

**The Workaround**

1. Open config/application.rb.
2. Add the following to the bottom of your Application class.
ENV['TMP'] = File.join(Rails.root, 'tmp') # or any other valid temp directory
3. Run rails generate rspec:install.
4. Remove the line that was added in step 2.

**config/application.rb**

```ruby
    config.generators do |g|      
        g.test_framework :rspec
    end
```

**Gemfile**

```ruby
# gem 'chromedriver-helper'
```

