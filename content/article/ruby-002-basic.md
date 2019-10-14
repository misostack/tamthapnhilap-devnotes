---
title: "Tổng quan về ruby"
type: "article"
date: 2018-08-22T10:52:27+07:00
description: "Tổng quan các kiến thức cần biết về ruby"
keywords: ["ruby"]
subjects: ["ror"]
image: "/common/no-image-available.jpg"
---

Lời nói đầu, tổng hợp các keywords cần biết khi học ngôn ngữ ruby.

- First step : https://www.tutorialspoint.com/ruby/index.htm

## The Basics

### Unix shebang

- Ref : https://en.wikipedia.org/wiki/Shebang_%28Unix%29
- https://en.wikibooks.org/wiki/Ruby_Programming/Hello_world

example.rb
```ruby
#!/usr/bin/env ruby
puts 'Hello world'
```

Thì khi đó chúng ta có thể thực thi file này chỉ bằng cách

```
./example.rb
```

### The IO class

- Official : https://ruby-doc.org/core-2.5.1/IO.html
- Ref : http://zetcode.com/lang/rubytutorial/io/

**Unix Commands:**

- https://unix.stackexchange.com/questions/89386/what-is-symbol-and-in-unix-linux
- https://linux.101hacks.com/unix/bind/
- https://www.linux.org/threads/file-permissions-chmod.4124/

**Exercises**

- https://www.w3resource.com/c-programming-exercises/file-handling/

**Summary**

### String manipulation

- Official : https://ruby-doc.org/core-2.5.1/String.html#method-i-chomp
- https://www.digitalocean.com/community/tutorials/how-to-work-with-string-methods-in-ruby

### File IO

- File mode : https://ruby-doc.org/core-2.5.1/IO.html#method-c-new
- Official : https://ruby-doc.org/core-2.5.1/File.html#method-c-open
- Binary : http://www.rubyguides.com/2017/01/read-binary-data/
- PNG Parser : https://github.com/matugm/png_parser
- Binary File Knowledge : https://www.nayuki.io/page/what-are-binary-and-text-files
- http://www.visuality.pl/posts/cs-lessons-001-working-with-binary-files
- https://www.webascender.com/blog/working-bits-bytes-ruby/
- Pack : https://apidock.com/ruby/Array/pack
- http://blog.anidear.com/2011/11/convert-string-to-binary-in-ruby.html
- https://blog.bigbinary.com/2011/07/20/ruby-pack-unpack.html
- http://arduino.vn/reference/bit-math-cac-phep-toan-thao-tac-tren-bit

### Blocks, Interators

- https://en.wikipedia.org/wiki/Ruby_(programming_language)#Blocks_and_iterators
- https://en.wikipedia.org/wiki/Anonymous_function#Ruby
- http://rubylearning.com/satishtalim/ruby_procs.html
- https://medium.com/@sihui/what-the-heck-are-code-blocks-procs-lambdas-and-closures-in-ruby-2b0737f08e95
- http://www.rubyguides.com/2016/02/ruby-procs-and-lambdas/
- https://blog.newrelic.com/engineering/weird-ruby-part-4-code-pods/
- https://docs.plesk.com/en-US/onyx/customer-guide/ruby-support-linux/manage-ruby-applications.76554/