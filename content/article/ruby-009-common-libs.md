---
title: "Ruby 009 - Common Libs"
type: "article"
date: 2018-09-11T10:47:48+07:00
description: "Ruby 009 - Common Libs"
keywords: ["Ruby 009 - Common Libs"]
subjects: ["ror"]
image: "/common/no-image-available.jpg"
---

## Common libs

- MVC Framework : Ruby On Rails(ROR)
- dRuby
- CSV

## - Inline if and unless

```ruby
puts 'example' if true
puts 'example' unless true
```
## - Private method

```ruby
class Sample
    def hello
        puts 'hello'
    end

private
    def hi
        puts 'hi'
    end
end
```

## - Command-line arguments

```ruby
puts ARGV[0]
```

## - Regular Expressions

## - Singleton methods

```ruby
superhero = Person.new
def superhero.fly
    puts 'Fly up'
end
superhero.fly
```

## - Call any method, even undefined ones

```ruby
#!/usr/env/bin ruby

class AskMeAnyThing
    def method_missing(method_name, args = {})
        "You called #{method_name.to_s} #{args}"
    end
end
obj = AskMeAnyThing.new
p obj.an_undefined_method({'arg1' => 'a','arg2'=>'b'})
```

## - Automating tasks with Rake

- Ref1 : https://github.com/ruby/rake
- Ref2 : https://jacobswanner.com/development/2013/rake-global-tasks/
- Ref3 : http://www.virtuouscode.com/2014/04/21/rake-part-1-basics/
- Cheatsheet : https://ruby.github.io/rake/doc/rakefile_rdoc.html
- Rakelib: https://ruby-doc.org/stdlib-2.0.0/libdoc/rake/rdoc/Rake/FileList.html#method-i-gsub

**Rake commands**

```bash
rake #run default task
rake --tasks # list all tasks ( rake -T )
rake task_nameA # run task_nameA
rake task_nameA task_nameB # run task_nameA, then task_nameB
```

**Where to place tasks?**

- Global tasks are placed in **Rakefile**
- Other tasks are placed in **rakelib** folder

**Structures**
```html
rakelib
    - task1.rake
    - task2.rake
Rakefile
```

**Subjects**

### - Rake Global Tasks

```html
Rake does let you define global tasks, these global tasks can be run from any directory – even those that do not have a Rakefile in their hierarchy.
```

```ruby
desc "Default Task"
task :default do
    'Default task'
end

task :prerequisite1 do
	puts 'prerequisite1'
end

task :prerequisite2 do
	puts 'prerequisite2'
end

desc "The task's description"
task :task_name => [:prerequisite1, :prerequisite2] do |task| puts "#{task.name}" end
```
### - Rake Rule Tasks

- https://ruby-doc.org/stdlib-2.0.0/libdoc/rake/rdoc/Rake/FileList.html#method-i-gsub

**Some files need to be ignored**:

- Files that contain tilde(~). Eg: ~$myfile.doc file is a temporary file used to help recover data if a program you are using stops unexpectedly.
- A scratch file is a temporary computer file which you use as a work area or as a store while a program is operating.

**Rule tasks don’t need to be about files, as some of the examples above have shown, but if there is a file with the same name as the task’s name, then that task will have the characteristics of a file task**

```ruby
rule '.yml' => '.yml.example' do |t|
	puts "Make a copy of #{t.source} to %s" % t.name
	cp t.source, t.name
end
```

```bash
rake ./database.yml
```

```ruby
file_list = Rake::FileList.new("26/*.yml.example") do |fl|
	fl.exclude("~*")
	fl.exclude("/^scratch\//")
	fl.gsub!(".example","")
end

rule '.yml' => '.yml.example' do |t|
	puts "Make a copy of #{t.source} to %s" % t.name
	cp t.source, t.name
end

desc "Setup"
task :setup => file_list do |t|
	puts t.inspect
end
```

```bash
rake setup
```

### - Rake File Tasks

### - Directory Tasks

### - Tasks with Parallel Prerequisites

### - Tasks with Arguments

### - Namespaces

## - Bundler

- Ref : https://bundler.io/

## - Ruby special synctax

- [Asterisk or "*"](https://cbabhusal.wordpress.com/2015/10/06/ruby-what-is-the-asterix-in-function-param/)
- http://genua.github.io/ruby/2015/03/04/underscores-ampersands-asterisks/
- http://raysrashmi.com/2013/11/06/splat-operator-as-an-argument/

### Asterix

```ruby
#!/usr/env/bin ruby

puts 'Asterisk - The flat operator in ruby'

first, last = 1,2
puts "#{first} - #{last}"

a, *b = [1,2,3,4]
puts "#{a} - #{b}"

str = 'Just for your information'
puts str.split.map { |e| e.chr }.join('').upcase!
puts str.split.map(&:chr).join('').upcase!
```