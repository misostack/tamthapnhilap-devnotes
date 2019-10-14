---
title: "Rails 003 - The Powerfull Active Record"
type: "article"
date: 2018-10-31T14:05:30+07:00
description: "Rails 003 Active Record"
keywords: ["Rails 003 Active Record"]
subjects: ["ror"]
image: "/common/no-image-available.jpg"
---

**In this chapter, you will see how powerfull the Active Record is!**

## The Powering of rails console to make your query with active record

```ruby
Game::Team.all
Game::Team.first
Game::Team.first.class
Status::Message.all
Status::Message.find(1)
Status::Message.find([1,2,3])
Status::Message.where(:status => 1)
Status::Message.where(:status => 1..3)
Status::Message.where(:status => [1,2])
Status::Message.where(:status => [1,2]).count
Status::Message.where_not(:status => [1,2]).count
Status::Message.where(:status => 1).or(Status::Message.where(:status => 2)).count
Status::Message.where('title like ?', '%doing%') # prepared statement
Status::Message.where('status = ? or status = ?', 1,2)
Status::Message.where('status = :active or status = :inactive', :inactive => 2, :active => 1)
Status::Message.order(:status).reverse_order.first
Status::Message.order(:id).limit(5).offset(0) #page 1
Status::Message.order(:id).limit(5).offset(1) #page 2
Status::Message.group(:status).limit(-1).count # {-1=>2000, 0=>2042, 1=>1992, 2=>2002, 3=>1974}
Status::Message.order(:title).limit(2).offset(0).pluck(:id, :title)# return an array like [[123, "example mssage"],["124","eample 2"]]
Status::Message.select(:id, :title).order(:title).limit(2).offset(0) # return array object like Status::Message id: 35, title: "A little trick for achieving the proper competitiv..."
Status::Message.where(:title => 'Sample First Or Create', :status => -1).first_or_create # // will find and create if not exists.
m = Status::Message.where(:title => 'Sample First Or Initialize', :status => -1).first_or_initialize # // will find and init object if not exists
m.new_record?
m.save
# calculation
Status::Message.average(:status)# AVG(status). Eg: calculate average annual income or expenses
Status::Message.group(:status).sum(:status)# . Eg: sum annual income or expenses by month or year
maximum|minimum # MAX, MIN. Eg: highest and lowest income or expenses
#lazyload
m = Status::Message.all
m.find(1)
m.where(:status => 1)
m.order(:title)
m.limit(3)
m.order('id DESC').first
m.order(:id).first
#clear
system('cls')
```

## In some case, you wanna use raw sql query

- https://rubyplus.com/articles/3251-How-to-use-ActiveRecord-to-Execute-SQL-Query

```bash
cpool = ActiveRecord::Base.establish_connection
cpool.class # ActiveRecord::ConnectionAdapters::ConnectionPool
c = cpool.connection
results = c.execute('select m.status, count(m.status) as total from messages m group by m.status;')
results = c.execute('select m.* from messages m order by m.status LIMIT 10 OFFSET 0')
```

## Query from multiple table

```sql
Product.count_by_sql "SELECT COUNT(*) FROM sales s, customers c WHERE s.customer_id = c.id"
Post.find_by_sql "SELECT p.title, c.author FROM posts p, comments c WHERE p.id = c.post_id"
Post.find_by_sql ["SELECT title FROM posts WHERE author = ? AND created > ?", author_id, start_date]
Post.find_by_sql ["SELECT body FROM comments WHERE author = :user_id OR approved_by = :user_id", { :user_id => user_id }]
```

## Debugging

```sql
EXPLAIN for: SELECT "albums".* FROM "albums" WHERE ("albums"."release_year"
BETWEEN 1960 AND 1969)
```

## Batch

```html
Imagine, the cart have ten types of products, and you have to store it in order details table.
If for each type, you make a query, it would become a nightmare later.
So the solution here is batch insert.
```

### Find in batches

- https://api.rubyonrails.org/classes/ActiveRecord/Batches.html#method-i-find_in_batches
- http://docs.w3cub.com/rails~5.1/activerecord/batches/

### Insert batch

```bash
INSERT INTO messages(title, created_at, status) VALUES
('Custom message ' + strftime('%s', 'now'), strftime('%s', 'now'), 0),
('Custom message ' + strftime('%s', 'now'), strftime('%s', 'now'), 1),
('Custom message ' + strftime('%s', 'now'), strftime('%s', 'now'), 2),
('Custom message ' + strftime('%s', 'now'), strftime('%s', 'now'), 3),
('Custom message ' + strftime('%s', 'now'), strftime('%s', 'now'), 1);
```

## Design schema and tests

- Object
- Dataset
- Relation or Associations
- CRUD
- Pagination & Search
- Index
- Elastic search
- Caching
- Choose the right database for your target.

### Ví dụ và hướng dẫn chi tiết

(IOME Application)[./note/iome-001-initialize]