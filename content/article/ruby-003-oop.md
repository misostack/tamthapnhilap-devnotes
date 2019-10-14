---
title: "Ruby Module and Classes"
type: "article"
date: 2018-09-05T13:41:28+07:00
description: "Ruby 003 OOP"
keywords: ["Ruby 003 OOP"]
subjects: ["ror"]
image: "/common/no-image-available.jpg"
---

## Object Oriented Programming

- Data Abstraction
- Encapsulation
- Inheritance
- Polymorphism

```ruby
class Animal
	# symbols : immutable
	attr_reader :name, :talk	
	def initialize
		@name = self.class.name.capitalize		
	end	
	def speak
		puts "#{@name} says 'hello'"
	end
end

class Dog < Animal
	def initialize
		super
		@talk = 'gou gou gou'
	end
end

class Cat < Animal
	def initialize
		super
		@talk = 'meow meow meow'
	end	
end

dog = Dog.new
dog.speak
puts dog.name
cat = Cat.new
cat.speak
puts cat.name
```

## Symbol

- https://www.culttt.com/2015/04/22/what-are-symbols-in-ruby/

- A Symbol is basically the same as a String, but with one important difference.
- A Symbol is **immutable**.
- Symbols are better for performance

```html
When you create two String objects with the same value, those two objects are treated as two different objects. When you create a Symbol, referencing the Symbol will always use the same object.

This is much better for performance because the same String object will be created and destroyed over and over again when in reality the same object can just be reused each time.
```

```ruby
:hello.class  
=> Symbol

"hello".class  
=> String  

name = "Philip"  
=> "Philip"

name.freeze  
=> "Philip"

name << "Jim"  
RuntimeError: can’t modify frozen String  

"philip".object_id  
=> 70288511587360  
"philip".object_id  
=> 70288504327720

:philip.object_id  
=> 539368  
:philip.object_id  
=> 539368  
```

**When should you use Symbols?**

- Identifying things

```ruby
person = {:name => "Philip"} # Symbol
person = {"name" => "Philip"} # String
person = {name: "Philip"}  # Symbol
```

- Used in method calls

```ruby
people = ["Marty", "Emmett", "Bif"]  
=> ["Marty", "Emmett", "Bif"]

people.send(:pop) # execute method pop of array
=> "Bif"

people.respond_to?(:map) # Check to see if the map method is available on this object.

class Dog  
attr_accessor :name
end

dog1 = Dog.new  
dog1.name = "Einstein"
```

- When you want to set the status of something?(Same as Enums)

```ruby
module IkariamUnit
	class Unit
		attr_reader :name, :description, :hitpoints, :armour, :size, :type, :speed, :cost, :barracks, :status
		def initialize(unit_type)
			@name = unit_type
			@status = :inactive if(unit_type == 'Hoptile')
			@status = :active unless(unit_type == 'Hoptile')
			Object.const_get( self.class.name.split('::')[0] + "::#{unit_type}")
		end

		def display			
			puts prepare_display
		end

		protected

		def prepare_display
			'-' * 20
			"Name: #{name}\n" +
			"Description: #{description}\n".capitalize +
			"hitpoints: #{hitpoints}\n".capitalize +
			"armour: #{armour}\n".capitalize +
			"size: #{size}\n".capitalize +
			"type: #{type}\n".capitalize +
			"speed: #{speed}\n".capitalize +
			"cost: #{cost}\n".capitalize +
			"barracks: #{barracks}\n".capitalize +
			"status: #{status}\n".capitalize +
			'-' * 20
		end
	end

	class Hoptile < Unit
	end

	class SteamGiant < Unit
	end

	class Swordman < Unit
	end

	class Spearman < Unit
	end

	class SulphurCarabineer < Unit
	end

	def self.show_all_units
		['Hoptile','SteamGiant','Swordman','Spearman','SulphurCarabineer'].each do |u|
			unit_obj = Unit.new(u)
			unit_obj.display
		end
	end
end

IkariamUnit.show_all_units
```

### A Payroll System


**Fixnum and Float**
```ruby
puts 1/2
puts 1.0/ 2
puts Float(1.0) /2

class Employee
	attr_reader :name, :salary

	def initialize(name = 'Anonymous', salary = 0.0)
		@name = name
		@salary = salary
	end

	def name=(name)
		raise 'Name can not be blank' if name == ''
		@name = name
	end

	def salary=(salary)
		raise "A salary of #{salary} is not valid!" if salary < 0
		puts salary.class
		@salary = salary * 1.0
		puts @salary.class
	end

	def print_pay_stub
		puts format("The %s 's pay period is $%0.2f", @name, @salary/365 * 14)
	end
end

jack = Employee.new 'Jack', 100000
# jack.name = "Jack"
# jack.salary = 100000
jack.print_pay_stub

```

### Modules and its useful

**Ruby Object Model (ROM)**

```ruby
module Cream
  def cream?
    true
  end
end

class Cookie
  include Cream
end

cookie = Cookie.new
p cookie.cream?
```

**Look this sample**

```ruby
require 'digest'

module Encryption
	def encrypt(string)
		Digest::SHA2.hexdigest(string)
	end
end

class User
	include Encryption
	
	def login(username,password)
		@hashed_password = encrypt_password(password)
		p "#{username} - #{@hashed_password}"
	end

	def encrypt_password(password, salt = '')
		encrypt(password.to_s + (salt.empty? ? '123456' : salt).to_s )
	end
end

u = User.new
u.login 'username', '123456'
```

Có 3 điều chúng ta có thể làm với một module:

1. Include nó trong class-objects
2. Prepend nó trong class-objects
3. Extend nó trong class objects hoặc tạo objects với nó

**The Helicopter Rule**

![ruby-module.png](/posts/ruby-module.png)

```ruby
module A; end
module B; end
module C; end

class MyClass
    include A
    prepend B
    extend C
end

MyClass.ancestors
=> [B, MyClass, A, Object, Kernel, BasicObject] 
MyClass.singleton_class.ancestors
=> [#<Class:MyClass>, C, #<Class:Object>, #<Class:BasicObject>, Class, Module, Object, Kernel, BasicObject]
```

### Build Method

```bash
build won't "create" a record in database, just create a new object in memory so that the view can take this object and display something, especially for a form.
```

```ruby
params = {name: 'A'}
obj = objAType.send(:build, params)
obj.displayName
```

**You wanna read more?**

- http://ruby-for-beginners.rubymonstas.org/advanced/modules.html
- https://learnrubythehardway.org/book/ex40.html
- https://viblo.asia/p/tim-hieu-sau-ve-ruby-modules-jvElaLgYZkw
- https://www.sitepoint.com/get-the-low-down-on-ruby-modules/
- https://stackoverflow.com/questions/19761766/build-method-on-ruby-on-rails