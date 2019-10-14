---
title: "Bài 001 : Cài đặt ruby"
type: "article"
date: 2018-06-05T19:20:17+07:00
description: "Ruby 001 Installation"
keywords: ["Ruby 001 Installation"]
subjects: ["ror"]
image: "/common/no-image-available.jpg"
---

## Current Ruby stable version

https://www.ruby-lang.org/en/downloads/

```html
2.5.1
```

## 1.Hướng dẫn cài đặt ruby với rbenv trên ubuntu(16.04)

**Chi tiết các bước thực hiện**

- Cài đặt các gói ruby dependencies
- Cài đặt rbenv
- Cài đặt ruby
- Kiểm tra version
- Cài đặt gem bundler để quản lí packages

### Update
{{<hlcode language="bash">}}
sudo apt-get update
{{</hlcode>}}

### Cài đặt các gói ruby dependencies
{{<hlcode language="bash">}}
sudo apt-get install -y libssl-dev libreadline-dev zlib1g-dev
sudo apt-get install -y curl gnupg build-essential
{{</hlcode>}}

### Cài đặt rbenv

- Link tham khảo : https://github.com/rbenv/rbenv
- Link su dung : http://javierjulio.com/rbenv/

<pre class="code-highlight"><code class="language-bash">
cd ~
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
cd ~/.rbenv && src/configure && make -C src
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
~/.rbenv/bin/rbenv init
</code></pre>

**Kiểm tra rbenv root**

```bash
echo "$(rbenv root)"
```

**Cài đặt ruby-build cho rbenv**

- Link tham khảo : https://github.com/rbenv/ruby-build#readme

```bash
git clone https://github.com/rbenv/ruby-build.git "$(rbenv root)"/plugins/ruby-build
```

**Cập nhật**

```bash
cd "$(rbenv root)"/plugins/ruby-build && git pull
```

**Sau khi cài xong chú ý gõ câu lệnh sau để add rbenv vào bashrc(lưu ý nhớ restart bash sau khi add)**

```bash
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
```

**Restart bash sau khi add**

```bash
source ~/.bashrc
```

**Kiểm tra rbenv đã cài đặt thành công chưa**

```bash
curl -fsSL https://github.com/rbenv/rbenv-installer/raw/master/bin/rbenv-doctor | bash
```

### Cài đặt ruby

**Permissions problem when install by other user(not root)**

- https://blakewilliams.me/posts/system-wide-rbenv-install

- https://stackoverflow.com/questions/31588604/rbenv-installation-permission-denied

*As an rbenv plugin*

**Make sure phân quyền chạy ruby thuộc về cùng 1 user**
```bash
cd ~/.rbenv
sudo chown -Rf ubuntu:ubuntu versions 
sudo chown -Rf ubuntu:ubuntu shims
```

**Tìm kiếm các gói ruby version**

```bash
rbenv install --list | grep 2.5
```

**Cài đặt gói ruby stable hiện tại**
```bash
rbenv install 2.5.1 --verbose
rbenv rehash
```

**Set default**
```bash
rbenv global 2.5.1
```

### Kiểm tra version

> gem -v

### Chạy thử irb

https://www.digitalocean.com/community/tutorials/how-to-use-irb-to-explore-ruby

```bash
irb
```

```bash
irb(main):001:0> 2 + 2
=> 4
```

### Cài đặt gem bundler để quản lí packages

> gem install bundler
> 
> rbenv rehash

### Chạy thử hello world

<pre><code class="language-ruby">puts "Welcome to ruby";
</code></pre>

> bundler exec ruby hello.rb

### Disable .rbenv

```bash
vi ~/.bashrc
```

**Nội dung file**

```bash
# .rbenv
# export PATH="$HOME/.rbenv/bin:$PATH"
# eval "$(rbenv init -)"
```

**Sau khi edit xong reload lai bashrc**

```bash
source ~/.bashrc
```

**Thoát khỏi phiên đăng nhập để kiểm tra lại**
```bash
exit
ssh ...
ruby -v
```

## 2.Hướng dẫn cài đặt ruby với rvm trên ubuntu(16.04)

- Link : https://github.com/rvm/rvm

- https://github.com/rvm/ubuntu_rvm

### Cài đặt các gói ruby dependencies
{{<hlcode language="bash">}}
sudo apt-get update
sudo apt-get install -y libssl-dev libreadline-dev zlib1g-dev
sudo apt-get install -y curl gnupg build-essential
{{</hlcode>}}

### Cài đặt RVM

```bash
gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
```
**Single User Installations**

*Single-User installations (recommended) - For an isolated install within a user's $HOME, not for root.*

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

### Cài đặt ruby

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

```html
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

**Install bundler**

```bash
gem install bundler
```

```bash
bundle install
```

**Instal node**

```bash
sudo apt-get install nodejs
```

http://railsapps.github.io/installrubyonrails-ubuntu.html

**Example puma.service**

{{<hlcode id="example-puma-service" text="puma.service" language="bash">}}
ubuntu@cloud002:~# cat /etc/systemd/system/puma.service
[Unit]
Description=Puma HTTP Server
After=network.target

# Uncomment for socket activation (see below)
# Requires=puma.socket

[Service]
# Foreground process (do not use --daemon in ExecStart or config.rb)
Type=simple

# Preferably configure a non-privileged user
User=ubuntu
Group=ubuntu

# The path to the puma application root
# Also replace the "<WD>" place holders below with this path.
WorkingDirectory=/home/ubuntu/webs/ror

# Helpful for debugging socket activation, etc.
# Environment=PUMA_DEBUG=1

# Variant: Use config file with `bind` directives instead:
ExecStart=/home/ubuntu/.rbenv/shims/bundler exec --keep-file-descriptors puma -C /home/ubuntu/webs/ror/config/puma.rb
# Variant: Use `bundle exec --keep-file-descriptors puma` instead of binstub

Restart=always

[Install]
WantedBy=multi-user.target
{{</hlcode>}}

**Example puma.rb**

{{<hlcode id="example-puma-rb" text="ror/config/puma.rb" language="bash">}}
# Puma can serve each request in a thread from an internal thread pool.
# The `threads` method setting takes two numbers: a minimum and maximum.
# Any libraries that use thread pools should be configured to match
# the maximum value specified for Puma. Default is set to 5 threads for minimum
# and maximum; this matches the default thread size of Active Record.
#
threads_count = ENV.fetch("RAILS_MAX_THREADS") { 5 }
threads threads_count, threads_count

# Specifies the `port` that Puma will listen on to receive requests; default is 3000.
#
port        ENV.fetch("PORT") { 3000 }

# Specifies the `environment` that Puma will run in.
#
environment ENV.fetch("RAILS_ENV") { "development" }

# Specifies the number of `workers` to boot in clustered mode.
# Workers are forked webserver processes. If using threads and workers together
# the concurrency of the application would be max `threads` * `workers`.
# Workers do not work on JRuby or Windows (both of which do not support
# processes).
#
# workers ENV.fetch("WEB_CONCURRENCY") { 2 }
workers = 1

# Use the `preload_app!` method when specifying a `workers` number.
# This directive tells Puma to first boot the application and load code
# before forking the application. This takes advantage of Copy On Write
# process behavior so workers use less memory. If you use this option
# you need to make sure to reconnect any threads in the `on_worker_boot`
# block.
#
# preload_app!

# If you are preloading your application and using Active Record, it's
# recommended that you close any connections to the database before workers
# are forked to prevent connection leakage.
#
# before_fork do
#   ActiveRecord::Base.connection_pool.disconnect! if defined?(ActiveRecord)
# end

# The code in the `on_worker_boot` will be called if you are using
# clustered mode by specifying a number of `workers`. After each worker
# process is booted, this block will be run. If you are using the `preload_app!`
# option, you will want to use this block to reconnect to any threads
# or connections that may have been created at application boot, as Ruby
# cannot share connections between processes.
#
# on_worker_boot do
#   ActiveRecord::Base.establish_connection if defined?(ActiveRecord)
# end
#

# Allow puma to be restarted by `rails restart` command.
plugin :tmp_restart

app_dir = File.expand_path("../..", __FILE__)
shared_dir="/home/ubuntu/shared"

# Set up socket location
bind "unix://#{shared_dir}/sockets/puma.sock"

# Set master PID and state locations
pidfile "#{shared_dir}/pids/puma.pid"
state_path "#{shared_dir}/pids/puma.state"
activate_control_app

on_worker_boot do
  require "active_record"
  ActiveRecord::Base.connection.disconnect! rescue ActiveRecord::ConnectionNotEstablished
  ActiveRecord::Base.establish_connection(YAML.load_file("#{app_dir}/config/database.yml")[rails_env])
end
{{</hlcode>}}