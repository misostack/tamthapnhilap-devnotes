---
title: "Cài đặt ruby"
type: "article"
date: 2018-08-21T14:30:58+07:00
description: "Hướng dẫn các cách cài đặt ruby trên các môi trường"
keywords: ["rvm","rbenv"]
subjects: ["ror"]
image: "/common/no-image-available.jpg"
---

Hướng dẫn cài đặt ruby trên các môi trường. Phiên bản ruby trong bài hướng dẫn hiện tại là **2.5.1**.

Link trang chủ : https://www.ruby-lang.org/en/downloads/

## Cài đặt ruby trên window cho môi trường dev

- Link cài đặt : https://rubyinstaller.org/downloads/

Lưu ý trên window cần cài đặt phiên bản ruby có tích hợp DevKit ( tool này tích hợp MSYS2-Devkit - công cụ build gems cho ruby trên window )

Sau khi cài đặt xong nên tạo RUBY_PATH đến thư mục bin của phiên bản ruby đã cài đặt.

Ví dụ : RUBY_PATH=C:\Ruby24-x64\bin

Kiểm tra kết quả

```bash
C:\Users\Son Nguyen>ruby -v
ruby 2.4.4p296 (2018-03-28 revision 63013) [x64-mingw32]
```

## Cài đặt ruby trên ubuntu ( 16.x ) cho môi trường dev

Có 2 hướng thông dụng để cài đặt ruby: rbenv và rvm

- RVM : Ruby Version Manager (thích hợp cho môi trường dev)
- Rbenv( thích hợp cho môi trường stage và prod )

Do Ruby được viết trên C, nên cần cài đặt các package để máy tính có thể biên dịch được C, cũng như
các dependency libraries tương tác với các loại database phổ biến như: mysql, posgresql, ...

### --- Cài đặt các gói dependency

```bash
sudo apt-get update
sudo apt-get install -y libssl-dev libreadline-dev zlib1g-dev
sudo apt-get install -y curl gnupg build-essential
```

### --- Cài đặt rvm

Link tham khảo:

- https://github.com/rvm/rvm
- https://github.com/rvm/ubuntu_rvm

Lưu ý, nên cài đặt dưới phân quyền user đang sử dụng

Các bước:

```bash
gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
```

```bash
\curl -sSL https://get.rvm.io | bash -s stable
```

**Sau khi cài đặt xong hệ thống sẽ hiện câu thông báo sau**

```bash
Installing RVM to /home/ubuntu/.rvm/
    Adding rvm PATH line to /home/ubuntu/.profile /home/ubuntu/.mkshrc /home/ubuntu/.bashrc /home/ubuntu/.zshrc.
    Adding rvm loading line to /home/ubuntu/.profile /home/ubuntu/.bash_profile /home/ubuntu/.zlogin.
Installation of RVM in /home/ubuntu/.rvm/ is almost complete:

  * To start using RVM you need to run `source /home/ubuntu/.rvm/scripts/rvm`
    in all your open shell windows, in rare cases you need to reopen all shell windows.
```

**Để sử dụng rvm ngay lập tức**
```bash
source /home/ubuntu/.rvm/scripts/rvm
```

**Gỡ bỏ rmv**
```bash
rvm implode
```

**Và chú ý cần remove các dòng PATH đã include sau khi cài**

Tham khảo thêm về bashrc, profile tại đây : https://top.quora.com/What-is-bash_profile-and-what-is-its-use

**Cài đặt ruby**

```bash
rvm install ruby-2.5.1
rvm list
rvm install ruby-2.3.0
rvm list
```

**Chuyển đổi giữa các phiên bản**

```bash
rvm 2.5.1
```

**Thiết lập default ruby version**

```bash
rvm --default use 2.5.1
```

**Tạo alias để dễ dàng chuyển đổi hơn**

Có 1 alias mặc định là : default

```bash
rvm alias list
rvm alias create alias-name ruby-version
rvm alias delete alias-name
```

**Tạo gemset**

```bash
rvm 2.3.0
rvm gemset create example
rvm gemset list
rvm gemset use example
```

**Ứng dụng rvm cho phép nhiều ứng dụng độc lập chạy các phiên bản ruby khác nhau**

```bash
Giả sử chúng ta có các app như sau
~/apps/app_a
~/apps/app_b
~/apps/app_c

Và mỗi app này sẽ sử dụng các loại gem khác nhau, cũng như phiên bản ruby khác nhau, để làm được điều này,
trong mỗi app ta sẽ sử dụng 2 file để chỉ định phiên bản ruby, cũng như gemset cho chúng:
.ruby-version
2.3.0
.ruby-gemset
app_a
```

**Test thử**

```bash
ruby -v
ruby hello.rb
```

### --- Cài đặt rbenv

## Cài đặt ruby trên Vultr Ubuntu Server

## Cài đặt ruby trên Amazon EC2 Ubuntu Server

## Hướng dẫn cấu hình để chạy ruby web service trên Heroku

## Các công cụ hữu ích cho ruby developer

- [Bundle & Gemfile](https://bundler.io/)
- https://rubygems.org/stats
- http://www.ruby-forum.com/
- [Ruby for admins](http://rubyforadmins.com/input-and-output)