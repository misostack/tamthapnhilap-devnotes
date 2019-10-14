---
title: "Ruby 008 Testing"
type: "article"
date: 2018-09-11T10:47:20+07:00
description: "Ruby 008 Testing"
keywords: ["Ruby 008 Testing"]
subjects: ["ror"]
image: "/common/no-image-available.jpg"
---

## Types of Automated Tests

**There are actually many different types of automated tests in widespread use. Here are some of the most common:**

- **Performance tests** measure the speed of your program.
- **Integration tests** run your entire program, to ensure that all its methods, classes, and other components integrate together successfully.
- **Unit tests** run individual components (units) of your program, usually individual methods.

### --Unit Test

**Keywords**

- minitest
- assert_equal
- setup
- teardown

```ruby
#!/usr/bin/env ruby

require 'minitest/autorun'

def function_a(a, b)
	a + b
end

def function_b(a, b)
	a - b
end

class SampleTest < Minitest::Test
	def setup #run only once
		@a = Random.new.rand(1..10)
		@b = Random.new.rand(5..10)
		@total = @a + @b
		@differ = @a - @b
	end
	def teardown # run before each test
		puts "#{@a} + #{@b} = #{@total}"
		puts "#{@a} - #{@b} = #{@differ}"
		puts '-'*20
	end
	def test_function_a		
		assert_equal(@total, function_a(@a,@b))
	end
	def test_function_b
		assert_equal(@differ, function_b(@a,@b))
	end	
end
```

## Readmore

- Read this book : Effective-testing-rspec-3
- Rspec is ruby's testing framework that used for : unit tests, integration tests
- Ruby Benchmark