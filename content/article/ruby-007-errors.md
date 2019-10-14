---
title: "Ruby 007 Errors"
type: "article"
date: 2018-09-11T10:37:16+07:00
description: "Ruby 007 Errors"
keywords: ["Ruby 007 Errors"]
subjects: ["ror"]
image: "/common/no-image-available.jpg"
---

## Keywords

- rescue
- ensure
- raise {ErrorType} => error
- error.message
- CustomError < StandardError

![r](/posts/ruby-exceptions.png)

```ruby
#!/usr/bin/env ruby
class GreaterFive < StandardError
end
class EqualFive < StandardError
end
def example_errors number
	begin
		random_number = Random.new.rand(10)
		puts '-'*20
		puts "Test Case #{number}"		
		raise GreaterFive, "#{random_number} > 5" if random_number > 5
		raise EqualFive, "#{random_number} = 5" if random_number == 5
		raise "#{random_number} < 5"
	rescue GreaterFive => error
		puts "GreaterFive: #{error.message}"
	rescue EqualFive => error
		puts "EqualFive: #{error.message}"
	rescue => error	
		puts "LesserFive: #{error.message}!"
	ensure
		puts '-'*20
	end
end

(1..10).each { |i| example_errors(i) }

```