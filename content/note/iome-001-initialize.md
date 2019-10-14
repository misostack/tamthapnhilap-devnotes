---
title: "Iome 001 Initialize"
type: "note"
date: 2018-11-21T16:16:13+07:00
description: "Iome 001 Initialize"
keywords: ["Iome 001 Initialize"]
projects: ["iome"]
image: "/common/no-image-available.jpg"
---

## Requirements

1. Bài toán 1: SimpleAuth - xây dựng chức năng auth đơn giản, ko cần phân quyền theo module
2. Bài toán 2: SimpleTodoList: List(Group Of TodoList), Statuses( Backlog, OnGoing, Postponed, ToBeTested, TobeValidated, Closed ), Types(2M, A, B, C, D)
3. Bài toán 3: Messages: nhật kí dự án( message, statuses['new','done','inprogress','error','delayed','removed'])
3. Bài toán 4: Status: system status( status, statuses['up','bug','down'])

#### Diễn giải

2M: 2 minutes work: do it now, and the deadline is in 10 mins.
A: URGENT + IMPORTANT ( DO IT NOW ) : do it now, and the deadline is in a day
B: NOT URGENT + IMPORTANT ( SCHEDULE A TIME TO DO IT ): set a deadline for it and plan time to start
C: URGENT + NOT IMPORTANT ( CAN BE DELEGATED or do later )
D: NOT URGENT + NOT IMPORTANT ( ELIMINATE IT): watching TV,... ( delete if you have no time for it )

#### Objects and Dataset

1.Objects:

- User : main auth params - email|phonenumber|username, password
- List: can be kind of : books to read, project a, project b,...
- PriorityType: 2M(5), A(4), B(3) , C(2), D(1)
- Issue
- Message: nhat ki du

2. Dataset

- Ref : https://moz.com/blog/googles-longer-snippets

```json
[messages]
id: integer auto_increment primary key,
content: varchar[180]
statuses: varchar(20)
created_at: DateTime
updated_at: DateTime
```

## The first steps

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

### Change DB Config and install gem

```bash
bundle add pg
```

```yaml

default: &default
  pool: <%= ENV.fetch("RAILS_MAX_THREADS") { 5 } %>
  timeout: 5000

development:
  <<: *default
  adapter: postgresql
  database: iome_dev
  host: localhost
  username: postgres
  password: 123456

# Warning: The database defined as "test" will be erased and
# re-generated from your development database when you run "rake".
# Do not set this db to the same as development or production.
test:
  <<: *default
  adapter: sqlite3
  database: db/test.sqlite3

production:
  <<: *default
  database: iome_prod

```

### DB Manipulation

```
rake db:setup
rake db:migrate:status
RAILS_ENV=development && rake db:migrate:status
RAILS_ENV=development && rake db:migrate
RAILS_ENV=development && rake db:rollback
```

### Model

- [x] Generate
- [x] Add Migration
- [x] Run
- [x] Validate Inputs : https://guides.rubyonrails.org/active_record_validations.html
- [x] Enum : https://api.rubyonrails.org/v5.1.3/classes/ActiveRecord/Enum.html , https://naturaily.com/blog/ruby-on-rails-enum
- [x] Never use **"new"** for enum : https://stackoverflow.com/questions/24854203/using-activerecord-enum-give-error-about-generating-new-class-method-on-model

#### Message

```bash
rails generate model Message
rails destroy model Message
```

```ruby
class CreateMessages < ActiveRecord::Migration[5.2]
  def up
    create_table :messages do |t|
      t.string :content, :limit => 180
      t.string :status, :limit => 20, :comments => "['backlog','done','ongoing','error','delayed','removed']"

      t.timestamps
    end
  end

  def down
    drop_table :messages
  end
end
```

```bash
rails console
reload!
```

```ruby
msg = Message.new({ :content => 'initialize project', :status => 'inprogress' })
msg.new_record?
msg.save
Message.last

Message.create({ :content => 'sample line', :status => 'unknown progress' })
Message.last
```


