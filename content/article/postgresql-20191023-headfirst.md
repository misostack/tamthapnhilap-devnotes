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

## I.Installation

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

## II.Most common PostgreSQL cli commands

```bash
# access postgres cli ubuntu
sudo -u postgres psql
# check version
SELECT version();
# connect to specific database
\c database_name
# quit
\q
# list all databases
\l
# list all schemas
\dn
# list all stored procedures and functions
\df
# list all views
\dv
# list all tables in a current database
\dt or \dt+
# detail info of table
\d+ table_name
# list all users
\du
# new role
CREATE ROLE role_name;
# Create a new role with a username and password:
CREATE ROLE username NOINHERIT LOGIN PASSWORD password;
# Change role for the current session to the new_role:
SET ROLE new_role;
#Allow role_1 to set its role as role_2:
GRANT role_2 TO role_1;

# new user
CREATE ROLE dbdesign WITH
	LOGIN
	NOSUPERUSER
	CREATEDB
	NOCREATEROLE
	INHERIT
	NOREPLICATION
	CONNECTION LIMIT -1
	PASSWORD '123456';
GRANT postgres TO dbdesign WITH ADMIN OPTION;
COMMENT ON ROLE dbdesign IS 'dbdesign';
```

```md
postgres-# \du
                                      List of roles
   Role name    |                         Attributes                         | Member of
----------------+------------------------------------------------------------+------------
 dbdesign       | Create DB                                                  | {postgres}
 medecineonline |                                                            | {}
 odoo           | Create DB, Cannot login                                    | {}
 postgres       | Superuser, Create role, Create DB, Replication, Bypass RLS | {}
 ubuntu         | Superuser, Create role, Create DB                          | {postgres}
```

### Managing databases

```bash
CREATE DATABASE dbdesign
    WITH 
    OWNER = dbdesign
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1;

# Test login
psql postgresql://dbdesign:123456@127.0.0.1:5432/dbdesign
```

## Some References

- http://www.postgresqltutorial.com/postgresql-cheat-sheet/