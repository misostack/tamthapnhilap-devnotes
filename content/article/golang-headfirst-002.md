---
title: "[Headfirst GO] Datatypes"
type: "article"
date: 2019-12-16T11:32:26+07:00
description: "Golang Headfirst 002"
keywords: ["Golang Headfirst 002"]
subjects: ["go"]
image: "/subjects/golang.jpg"
---

> Case is sensitive

#### Datatypes:

- String ( literals ): "bla bla"
- Runes: 'A' 'B' '\n'
- Booleans: true or false
- Numbers : 42(Integer)

#### Refs

- https://yourbasic.org/golang/convert-int-to-string/

```golang
package main

import "fmt"

func main() {
	fmt.Println("Headfirst GO")
	fmt.Println("The alphabet")
	theAlphabet(true)
	theAlphabet(false)
}

func theAlphabet(uppercase bool) {
	var str = ""
	if uppercase {
		for i:= 'A'; i<= 'Z'; i++ {
			str += string(i) + " "
		}
	}else {
		for i:= 'a'; i<= 'z'; i++ {
			str += string(i) + " "
		}		
	}
	fmt.Println(str)
}

func theEvenNumbers(start int, end int) {
	theNumbers(start, end, false)
}

func theOddNumbers(start int, end int) {
	theNumbers(start, end, true)
}

func theNumbers(start int, end int, isOdd bool) {
	var str = "\n"
	if isOdd { str += "The odd numbers:\n" }
	if !isOdd{ str += "The even numbers:\n" }

	for i:= start; i<= end; i++ {
		if(isOdd && i % 2 != 0) {
			str += strconv.Itoa(i) + " "
		}
		if(!isOdd && i % 2 == 0) {
			str += strconv.Itoa(i) + " "
		}
	}
	fmt.Println(str)
}
```

```golang
package main

import "fmt"

const (
	PRODUCT  = "Mobile"
	QUANTITY = 50
	PRICE    = 50.50
	STOCK  = true
)

func main() {
	fmt.Println(QUANTITY)
	fmt.Println(PRICE)
	fmt.Println(PRODUCT)
	fmt.Println(STOCK)
}
```