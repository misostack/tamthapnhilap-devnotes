---
title: "Ubuntu 001 Cheatsheet"
type: "article"
date: 2019-10-24T11:40:50+07:00
description: "Ubuntu 001 Cheatsheet"
keywords: ["Ubuntu 001 Cheatsheet"]
subjects: ["backend"]
image: "/common/no-image-available.jpg"
---

##

## APT

```bash
# Update packages
apt update, apt update -y
# Upgrade all existing packages
apt upgrade
# Install/remove package
apt install curl, which curl, apt remove curl
#Search package
apt search curl
```

## APT GET

```bash
# Install/remove package
apt-get install curl, which curl, apt-get remove curl
# Download without install
apt-get download curl, ls -lth curl*.deb
# Update package list
apt-get update
```