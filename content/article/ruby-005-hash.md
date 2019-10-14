---
title: "Ruby 005 Hash"
type: "article"
date: 2018-09-11T10:36:58+07:00
description: "Ruby 005 Hash"
keywords: ["Ruby 005 Hash"]
subjects: ["ror"]
image: "/common/no-image-available.jpg"
---

## Hash

```html
A hash can be created by:
- Implicit form
- With Symbol
- Or using new method
```

```ruby
grades = { "Jane Doe" => 10, "Jim Doe" => 6 }
puts "grades['Jane Done'] = #{grades['Jane Doe']}"
opts = {:font_size => 10, :font_family => 'Arial'}
puts "opts[:font_size] =  #{opts[:font_size]}"
new_opts = { font_size: 12, font_family: 'Arial' }
puts "new_opts[:font_size] = #{new_opts[:font_size]}"
new_opts[:font_weight] = 'bold'
puts "new_opts[:font_weight] = #{new_opts[:font_weight]}"
```


## Important notes about hash

```html
Hashes have a default value that is returned when accessing keys that do not exist in the hash.
If no default is set nil is used. You can set the default value by sending it as an argument to ::new:
```

```ruby
grades = Hash.new
grades["Dorothy Doe"] = 9
grades.default = 0 # or grades = Hash.new(0)
puts grades['anonymous'] # => 0

class CelestialBody
	attr_accessor :type, :name
end

default_body = CelestialBody.new
default_body.type = 'planet'
bodies = Hash.new(default_body)
p bodies.default
bodies['Mars'].name = 'Mars'
p bodies['Mars'].name
p bodies['Mars'].type
```

## Hash default block call

```ruby
#!/usr/bin/env ruby

puts 'Sample 1'
foods = Hash.new([])
foods['A'] << "Apple 1"
foods['A'] << "Avocado 1"
foods['B'] << "Bacon 1"
foods['B'] << "Bread 1"
p foods['A']
p foods['B']
p foods

# Array is an object, and << is a call to an attribute write method. This does not assign to the hash
puts 'Sample 2'
foods2 = Hash.new { |hash,key|  []}
foods2['A'] << "Apple 2" 
foods2['A'] << "Avocado 2"
foods2['B'] << "Bacon 2"
foods2['B'] << "Bread 2"
p foods2['A']
p foods2['B']
p foods2

puts 'Sample 3 : hash default block'
foods3 = Hash.new { |hash,key| hash[key] = []}
foods3['A'] << "Apple 2"
foods3['A'] << "Avocado 2"
foods3['B'] << "Bacon 2"
foods3['B'] << "Bread 2"
p foods3['A']
p foods3['B']
p foods3

characters = ['a','b','c','a','c','d','e']
counters = Hash.new(0)

characters.each { |char|
	counters[char] += 1
}

p counters
```

**Output**

```bash
Sample 1
["Apple 1", "Avocado 1", "Bacon 1", "Bread 1"]
["Apple 1", "Avocado 1", "Bacon 1", "Bread 1"]
{}
Sample 2
[]
[]
{}
Sample 3 : hash default block
["Apple 2", "Avocado 2"]
["Bacon 2", "Bread 2"]
{"A"=>["Apple 2", "Avocado 2"], "B"=>["Bacon 2", "Bread 2"]}
{"a"=>2, "b"=>1, "c"=>2, "d"=>1, "e"=>1}
```

## Summary

- if your default value is **a number**, you can use a hash default object
- if your default value is **anything else**, you should use a hash default block
- Variables, arrays, hashes, and other data structures don't contain objects, just references to them