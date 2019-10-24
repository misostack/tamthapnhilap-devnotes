---
title: "Postgresql 20191023 Headfirst"
type: "article"
date: 2019-10-23T18:43:05+07:00
description: "Postgresql 20191023 Headfirst"
keywords: ["Postgresql 20191023 Headfirst"]
subjects: ["postgresql"]
image: "/common/no-image-available.jpg"
---

## Objectives

1. Install PostgreSQL
2. Most common PostgreSQL cli commands
3. PostgreSQL Fundamentals
4. PostgreSQL Datatypes
6. Managing Databases
7. Managing Tables
8. Database Constraints
9. Managing database schemas
10. Conditional Expressions & Operators

## Installation

### Windows

- [Download Link](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads#windows)

**Allow Remote Connection**

```bash
- C:\Program Files\PostgreSQL\{VERSION}\data\pg_hba.conf
# change config: trust to md5
host    all             all             127.0.0.1/32            md5
# IPv6 local connections:
host    all             all             ::1/128                 md5
# then restart service and open cmd
psql -h 127.0.0.1 -U postgres
# set password
ALTER USER postgres with password '123456';
# quit
\q
# try logged with password
psql -h 127.0.0.1 -U postgres
123456
# short url
psql postgresql://postgres:123456@127.0.0.1:5432/postgres
```


### Ubuntu

```bash
sudo apt-get update
sudo dpkg --configure -a
sudo apt-get install postgresql postgresql-contrib
```

## Some References

- http://www.postgresqltutorial.com/postgresql-cheat-sheet/