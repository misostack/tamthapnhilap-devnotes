---
title: "Backend 001 Headfirst Curl"
type: "article"
date: 2019-10-16T15:09:59+07:00
description: "Backend 001 Headfirst Curl"
keywords: ["Backend 001 Headfirst Curl"]
subjects: ["backend"]
image: "/common/no-image-available.jpg"
---

## General

- [Curl Doc](https://curl.haxx.se/docs/manual.html)

## Usage

### Simple Usage

```bash
curl -v http://devnotes.tamthapnhilap.site
# Get a web page and store in a local file with a specific name:
curl -o index.html http://devnotes.tamthapnhilap.site
# Get a web page and store in a local file, make the local file get the name of the remote document (if no file name part is specified in the URL, this will fail):
curl -O http://devnotes.tamthapnhilap.site/index.html
```

### POST (HTTP)

```bash
curl -d "user=foobar&pass=12345&id=blablabla&ding=submit"
  http://api.tamthapnhilap.site/example

# Send multiple files in a single "field" with a single field name:
curl -F "pictures=@dog.gif,cat.gif" $URL
Send two fields with two field names
curl -F "docpicture=@dog.gif" -F "catpicture=@cat.gif" $URL
```