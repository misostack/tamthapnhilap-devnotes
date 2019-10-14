---
title: "Ruby Arrays - Blocks"
type: "article"
date: 2018-09-05T16:10:05+07:00
description: "Ruby Arrays Blocks"
keywords: ["Ruby Arrays Blocks"]
subjects: ["ror"]
image: "/common/no-image-available.jpg"
---

## Arrays

```ruby
require 'faker'

filepath = './15-votes.txt'

module Votes
	def self.generate_votes(filepath, numbers = 100)
		return if File.exist?(filepath)
		votes = []
		(1..numbers).each do |num|
			name = Faker::Name.name
			(1..Random.new.rand(100)).each do |i|
				votes << name
			end			
		end
		File.open(filepath,'w+') { |fh|
			votes.shuffle.each do |name|				
				fh.puts format("%s", name)
			end
		}
	end
	def self.read_votes(filepath)
		votes = {}
		File.readlines(filepath).each { |line|			
			name = line.chomp
			votes[name] += 1 if votes[name]
			votes[name] = 1 unless votes[name]
		}
		final_votes = []
		votes.each do |name, v|
			final_votes << { name: name, votes: v}
		end
		final_votes
	end
	def self.add_rank(records)
		records.sort_by{ |item| item[:votes] }.reverse.each_with_index do |record, idx|
			record[:rank] = idx + 1
		end
	end
end

Votes::generate_votes(filepath)
# Votes::read_votes(filepath).sort_by{ |item| item[:votes] }.reverse.each { |record|
# 	puts format("%s has %s", record[:name], record[:votes])
# }
Votes::add_rank(Votes::read_votes(filepath)).each { |record|
	puts format("Name: %s - Votes: %s - Rank: %s", record[:name], record[:votes], record[:rank])
}
```

## Blocks

```ruby
def yield_number
	yield 4
end

array = [1,2,3]
yield_number { |number| array << number }
p array

sum = 0
[1,2,3].each{ |number| sum += number }
p sum

def print_block_value
	puts yield
end

def other_method
	print_block_value { 12 * 12 }
end

other_method
```

```ruby
songs = [
	{:name => 'Ngắm hoa lệ rơi', :singer => 'Châu Khải Phong', :views => 1500},
	{:name => 'Ngắm hoa lệ rơi Offical', :singer => 'Châu Khải Phong', :views => 2000},
	{:name => 'Ông ngoại tuổi 30', :singer => 'Trịnh Thăng Bình', :views => 500},
	{:name => 'Nắng ấm xa dần', :singer => 'Sơn Tùng MTP', :views => 10000},
	{:name => 'Đếm ngày xa em', :singer => 'Only C', :views => 1600}
]

module TopSongs
	def self.list_songs(songs)
		matching_songs = []
		songs.each do |song|
			if yield(song)
				matching_songs << song
			end
		end
		matching_songs
	end

	def self.print_list(songs)
		songs.each do |song|
			yield(song)
		end
	end

	def self.reduce(songs)
		arr = []
		songs.each do |ele|
			arr << yield(ele)
		end
		arr.uniq
	end
end

TopSongs::print_list TopSongs::reduce(songs) { |song| song[:singer] } do |singer|
	puts format "Những bài hát hay nhất của %s :", singer
	puts ' '*30
	TopSongs::print_list(TopSongs::list_songs(songs) { |song| song[:singer] == singer}) do |song|
	puts format "Bài hát: %s", song[:name]
	puts format "Lượt xem: %s lượt", song[:views]
	puts '-'*30		
	end
	puts '*'*30
end
```