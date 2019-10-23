---
title: "Monday Api 001 Dev"
type: "note"
date: 2019-10-23T14:18:56+07:00
description: "Monday Api 001 Dev"
keywords: ["Monday Api 001 Dev"]
projects: ["monday-api"]
image: "/common/no-image-available.jpg"
---

Things need to do:

- Design REST API
- Make an example for Example resource
- Secured REST API with JWT

Related things:

- Most-common-programming-case-types

### Manifesto

- Object
- Dataset
- Relation or Associations
- CRUD
- Pagination & Search
- Index
- Elastic search
- Caching
- Choose the right database for your target.


### Design REST API

**Ref**:

- https://restfulapi.net/
- https://blog.octo.com/en/design-a-rest-api/
- https://www.thoughtworks.com/insights/blog/rest-api-design-resource-modeling
- https://www.moesif.com/blog/api-guide/api-design-guidelines/#general-best-practices
- https://blog.feathersjs.com/design-patterns-for-modern-web-apis-1f046635215
- https://www.freecodecamp.org/news/structuring-a-flask-restplus-web-service-for-production-builds-c2ec676de563/#security-and-authentication

#### From Requirements to Specifications

**Requirements**:

Imagine you have a lot ebooks in your computer. And you want to read as much as possible. The main issue is you can not read all of them in a short period. The good way is making a plan for reading. Also, it is not easy to find an ebook with related subject in your PC/laptop. And of course you wanna know how many books you read in this month, this year, even you wanna compare the number of books that had been read in last year.

**Specifications**:

Make the new APIs that allow:

- Manipulate ebook's data: name, category, author(not mandatory), public_date
- Search ebook by: name, category, author, public time, and other related data. Eg: list all the books that are not readed
- Adjust your reading's plan
- Log your reading's status. Eg: the book A has been read in 3 weeks from dd-mm-yyyy to dd-mm-yyyy
- Analysis your reading's milestone with chart. Eg: number of books i've readed in this month.

### Related things

#### Most-common-programming-case-types

{{<command-table thead="Case Type,Example">}}
    {{<command-table-row "Original Variable as String" "some awesome var">}}
    {{<command-table-row "Camel Case" "someAwesomeVar">}}
    {{<command-table-row "Snake Case" "some_awesome_var">}}
    {{<command-table-row "Kebab Case" "the-url-endpoint">}}
    {{<command-table-row "Pascal Case" "AnyClassName">}}
    {{<command-table-row "Upper Case Snake Case" "ANY_CONSTANT">}}
    
{{</command-table>}}

...

#### Naming Conventions in Database Modelling

- http://www.wilsonmar.com/sql_adventureworks.htm
- https://stackoverflow.com/questions/7662/database-table-and-column-naming-conventions
- https://www.vertabelo.com/blog/naming-conventions-in-database-modeling/
- https://www.red-gate.com/simple-talk/blogs/sql-naming-conventions/