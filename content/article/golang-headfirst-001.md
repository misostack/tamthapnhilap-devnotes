---
title: "[Headfirst GO] The beginning"
type: "article"
date: 2019-12-16T10:44:52+07:00
description: "Golang Headfirst 001"
keywords: ["Golang Headfirst 001"]
subjects: ["go"]
image: "/subjects/golang.jpg"
---

### 1.Installation

- Download binary and creat GOPATH

- [Binaries](https://golang.org/dl/)
- [GOPATH](https://github.com/golang/go/wiki/SettingGOPATH)

```bash
wget https://dl.google.com/go/go1.13.5.linux-amd64.tar.gz
sudo tar -C /usr/local -xzf go1.13.5.linux-amd64.tar.gz
which go
go version
go env
```
**Important**

>> GOPATH can be any directory on your system. In Unix examples, we will set it to $HOME/go (the default since Go 1.8). Note that GOPATH must not be the same path as your Go installation. Another common setup is to set GOPATH=$HOME.

### 2.First build

```go
package main

import "fmt"

func main() {
	fmt.Printf("hello, world\n")
}
```

```json
- hello
		hello.go
cd $HOME/hello/
go build
./hello
```

### 3.Workspace

- https://golang.org/doc/code.html#Workspaces

```md
bin/
    hello                           # command executable
src/
    github.com/golang/example/
				.git/                       # Git repository metadata
        hello/
            hello.go                # command source
        stringutil/
            reverse.go              # package source
            reverse_test.go         # test source
    github.com/user/
        hello/
            hello.go                # command source
        stringutil/
            reverse.go              # package source
            reverse_test.go         # test source
```

- https://rominirani.com/setup-go-development-environment-with-visual-studio-code-7ea5d643a51a
- https://code.visualstudio.com/docs/languages/go
- https://www.bogotobogo.com/GoLang/GoLang_Visual_Studio_Code.php

### 4.Install a package

```bash
go get [packagepath]
```

### 5.Editor ( VS Code )

```bash
  gocode
  gopkgs
  go-outline
  go-symbols
  guru
  gorename
  gotests
  gomodifytags
  impl
  fillstruct
  goplay
  godoctor
  dlv
  gocode-gomod
  godef
  goreturns
  golint
```

- Install Go tools : https://go.googlesource.com/tools


```bash
go install github.com/mdempsky/gocode
go install github.com/ramya-rao-a/go-outline
go install github.com/acroca/go-symbols
go install golang.org/x/tools/cmd/guru
go install golang.org/x/tools/cmd/gorename
go install github.com/stamblerre/gocode
go install github.com/ianthehat/godef
go install github.com/sqs/goreturns
go install golang.org/x/lint/golint
```

### 6. References:

- https://github.com/golang/go/wiki/Learn
- https://www.bogotobogo.com/GoLang/GoLang_Visual_Studio_Code.php
- https://www.golangprograms.com/go-language/constants.html
- [Golang Forum](https://forum.golangbridge.org/)
- https://yourbasic.org/golang/

### 7. Some ideas for headfirst projects

#### 7.1. Sprint Projects

> Less 01 : Print alphabet

#### 7.2. Final Projects

> Xay dung REST API quan li data cho du an thucan bang beego
> 
> https://beego.me/


> Xay-dung-chatbot-telegram-bang-golang
> 
> https://telegram.org/
