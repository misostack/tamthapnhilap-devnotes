---
title: "Ruby 010 - Hướng dẫn sử dụng redis"
type: "article"
date: 2018-09-11T10:48:10+07:00
description: "Ruby 010 Redis"
keywords: ["Ruby 010 Redis"]
subjects: ["ror"]
image: "/common/no-image-available.jpg"
---

## 1.Hướng dẫn cài đặt

### -- Hướng dẫn cài đặt trên ubuntu 16

**Refs**

- https://www.digitalocean.com/community/tutorials/how-to-install-and-configure-redis-on-ubuntu-16-04
- https://askubuntu.com/questions/868848/how-to-install-redis-on-ubuntu-16-04

#### -- Cách đơn giản nhất

```bash
sudo add-apt-repository ppa:chris-lea/redis-server
sudo apt-get update
sudo apt-get install redis-server
```

#### -- Cách cài đặt từ source

**Install the Build and Test Dependencies**

```bash
sudo apt-get update
sudo apt-get install build-essential tcl
```

**Download and Extract the Source Code**

```bash
cd /tmp
curl -O http://download.redis.io/redis-stable.tar.gz
tar xzvf redis-stable.tar.gz
cd redis-stable
```

**Build và Install Redis**

```bash
make
make test
sudo make install -j
cd utils
sudo ./install_server.sh
```

**Configure Redis**

```bash
sudo mkdir /etc/redis
sudo cp /tmp/redis-stable/redis.conf /etc/redis
sudo nano /etc/redis/redis.conf
```

Edit the file:

```bash
sudo nano /etc/redis/redis.conf
```

Make two changes there:

```bash
supervised systemd
dir /var/lib/redis
```

**Create a Redis systemd Unit File**

```bash
sudo nano /etc/systemd/system/redis.service
```

```bash
[Unit]
Description=Redis In-Memory Data Store
After=network.target

[Service]
User=redis
Group=redis
ExecStart=/usr/local/bin/redis-server /etc/redis/redis.conf
ExecStop=/usr/local/bin/redis-cli shutdown
Restart=always

[Install]
WantedBy=multi-user.target
```

**Create the Redis User, Group and Directories**

```bash
sudo adduser --system --group --no-create-home redis
sudo mkdir /var/lib/redis
sudo chown redis:redis /var/lib/redis
sudo chmod 770 /var/lib/redis
```

**Start and test**

```bash
sudo systemctl start redis
sudo systemctl status redis
```

```bash
redis-cli
```

**Enable Redis to Start at Boot**

```bash
sudo systemctl enable redis
```



## 2.Công cụ quản lí

- Redis Desktop Manager

## 3.Bảo mật

- https://www.digitalocean.com/community/tutorials/how-to-secure-your-redis-installation-on-ubuntu-14-04

## 4.Hướng dẫn sử dụng ruby và redis

## 5.3rd party services

- Amazon
- Heroku
