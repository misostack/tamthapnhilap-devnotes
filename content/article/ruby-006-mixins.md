---
title: "Ruby 006 Mixins"
type: "article"
date: 2018-09-11T10:37:08+07:00
description: "Ruby 006 Mixins"
keywords: ["Ruby 006 Mixins"]
subjects: ["ror"]
image: "/common/no-image-available.jpg"
---

## Problems

Imagine we have an app for sharing videos, musics, and other media.

Musics and videos both need some of same functionality: users need to be able to play songs and videos back,
as well as leave comments on them. There are some aspects that differ, howerver.Eg:

Songs: we need to track the number of beats per minute(bpm)

Videos: need to keep track of their resolution(in pixels, eg: 1920 x 1080 resolution).

![Oneclass](/posts/ruby-006-oneclass.png)

But how about a photo? You can not play a photo.

So in this case you can not interit from one parent class.

![Oneclass Copymethod](/posts/ruby-006-oneclass-copymethod.png)

How about multiple inheritance? It is messy.

![multiple-inherit](/posts/ruby-006-multiple-inherit.png)

## Solution

In this case we use modules and mixins.

```ruby
require 'faker'

module Comments
	def comments
        @comments = @comments || []
	end
	def list_comments
		puts "Total comments: #{@comments.length}"
		@comments.each { |comment|
			puts format("%s : %s", comment[:email], comment[:text])
		}
	end

	def add_comment(comment)
		comments << comment
	end
end

class Media
	include Comments
	attr_accessor :name, :source
	def initialize(opts = {})
		@name = opts[:name]
		@source = opts[:source]
	end

	def display
		puts '-'*20
		puts "Name : #{@name}"
		puts "Source: #{@source}"
		list_comments
		puts '-'*20
	end
end

module Clip
	def play
		puts "Play with #{@source}"
	end
end

class Picture < Media
	def show
		puts "<img src=\"#{@source}\" />"
	end
end

class Video < Media
	include Clip
	attr_accessor :resolution
	def initialize(opts = {})
		super
		@resolution = opts[:resolution]
	end

	def display
		super
		puts "Resolution: #{@resolution} px"
	end
end

class Song < Media
	include Clip
	attr_accessor :bpm	
	def initialize(opts = {})
		super
		@bpm = opts[:bpm]
	end

	def display
		super
		puts "Beats: #{@bpm} bpm"
	end
end

pic = Picture.new( name:'VietNam2018', source:'/media/images/vietnam2018.jpg')
(1..Random.new().rand(5..10)).each { |i|
	pic.add_comment( email: Faker::Internet.email, text: Faker::Lorem.sentences(1)[0])
}
pic.show
pic.display

video = Video.new( name: 'Việt Nam quê hương tôi', source:'/media/videos/VietNam2018.mp4', resolution: '1920x1080')
(1..Random.new().rand(5..10)).each { |i|
	video.add_comment( email: Faker::Internet.email, text: Faker::Lorem.sentences(1)[0])
}
video.play
video.display

song = Song.new( name: 'Tiến lên Việt Nam', source:'/media/videos/VietNam2018.mp4', bpm: '90' )
(1..Random.new().rand(5..10)).each { |i|
	song.add_comment( email: Faker::Internet.email, text: Faker::Lorem.sentences(1)[0])
}
song.play
song.display
```

## Important notes

**Module**

```html
A module is a collection of methods. The main diffrence between a module and a class is that you can't create instance of a module
```

**Mixins*

```html
- When you mix a module into a class, it's like adding all of the modules's methods to the class as instance methods
- Although a class can only inherit from one superclass, you can mix any number of modules into a class
```

## Amazing comparing methods

```ruby
puts 'Amazing comparing method'

class Steak
	include Comparable
	# constants
	GRADE_SCORES = {"Prime" => 3, "Choice" => 2, "Select" => 1}

	attr_accessor :grade

	def >(other)		
		GRADE_SCORES[grade] > GRADE_SCORES[other.grade]
	end
end

first_steak = Steak.new
first_steak.grade = 'Prime'

second_steak = Steak.new
second_steak.grade = 'Choice'

if first_steak > second_steak
	puts "I'll take #{first_steak.inspect}."
end

meatA = Steak.new('meatA')
meatA.grade = "Select"

meatB = Steak.new('MeatB')
meatB.grade = "Choice"

puts "I will choose #{meatA.name}" if meatA > meatB
puts "I will choose #{meatB.name}" if meatA < meatB
meatA.grade = "Choice"
puts "I will choose #{meatA.name} and #{meatB.name}" if meatA == meatB
```

### Extend vs Include

```ruby
#!/usr/bin/env ruby

module Food
	module Cream
		# def self.extended(base)
		# 	base.include self
		# end
	  def cream?
	    true
	  end
	end
end

class Cookie
	def self.extend(parent)
		self.include parent
	end
  # include Cream
end

Cookie.extend ::Food::Cream

cookie = Cookie.new
p cookie.cream?

module HackNao
	class Base
		def self.extend(expand)
			self.include expand
		end
		def cau_mot
			puts 'Con ga co truoc qua trung hay trung co truoc con ga?'
		end
	end
end

module HackNaoImprove
	module HackNao
		module ToanHoc
			def cau_hai
				puts 'Me hon con 22 tuoi, hoi khi nao tuoi me gap doi tuoi con?'
			end
		end
		::HackNao::Base.extend ToanHoc
	end
end

::HackNao::Base.new.cau_mot
::HackNao::Base.new.cau_hai
```