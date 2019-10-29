---
title: "Monday Api 001 Dev"
type: "note"
date: 2019-10-23T14:18:56+07:00
description: "Monday Api 001 Dev"
keywords: ["Monday Api 001 Dev"]
projects: ["monday-api"]
image: "/common/no-image-available.jpg"
---

## Things need to do:

- [ ] Design Application Structures: REST API, Core Module
- [ ] Design REST API Endpoints
- [ ] Design Models, Schemas, Services
- [ ] Document REST API Endpoints
- [ ] Design Data Validations
- [ ] Design Pagination, Search
- [ ] Integrate Services with Related Resources
- [ ] Secured: CORS, JWT
- [ ] Testing API with Postman
- [ ] Improvement with: Index, Caching, Elastic Search,...
- [ ] Automation: make generators that generate new resources endpoint from json data
- [ ] Common Services: Mailer & SMS, Cron, [Task Queues](https://www.fullstackpython.com/task-queues.html)
- [ ] Deployment: Heroku, VPS, CI & CD with gitlab, ci

Related things:

- Most-common-programming-case-types

### Keywords

- Object, Dataset, Relation or Associations
- CRUD, Pagination & Search
- Evolution: index, caching, elastic search
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

Imagine you have a lot books need to read. And you want to read as much as possible. The main issue is you can not read all of them in a short period. The good way is making a plan for reading. Also, it is not easy to find an ebook with related subject in your PC/laptop. And of course you wanna know how many books you read in this month, this year, even you wanna compare the number of books that had been read in last year.

**Specifications**:

Make the new APIs that allow:

- Manipulate book's data: name, category, author(not mandatory), public_date
- Search ebook by: name, category, author, public time, and other related data. Eg: list all the books that are not readed
- Adjust your reading's plan
- Log your reading's status. Eg: the book A has been read in 3 weeks from dd-mm-yyyy to dd-mm-yyyy
- Analysis your reading's milestone with chart. Eg: number of books i've readed in this month.

#### Database Modelling

1.Objects:

```javascript

"book": {
	"id": {"type": "uuid", "primary_key": true},
	"name": { "type": "string", "required": true},
	"categories": { "type":  "Array", "required": false, "default": []},// use category id
	"tags": { "type":  "Array", "required": false, "default": []},// use tag id
	"author": {"type": "string", "required": false},
	"public_date": {"type": "number", "required": true}, // UNIX_TIMESTAMP	
	"type": {"type": "string", "isIn":["ebook", "print"]},
	"reading_state": {
		"type": "string",
		"required": false,
		"default": "unread",
		"isIn": ["unread", "reading", "read", 'stopped', 'skipped']
	}
}

"category": {
	"id": {"type": "uuid", "primary_key": true},
	"name": { "type":"string", "required": true },
	"slug": { "type":"string", "required": true, "unique": true }
}

"tag": {
	"id": {"type": "uuid", "primary_key": true},
	"name": { "type":"string", "required": true },
	"slug": { "type":"string", "required": true, "unique": true }
}


"reading_plan": {
	"book_id": {"type": "string", "foreign_key":"book.id"},
	"start_at": {"type": "number", "required": true}, // UNIX_TIMESTAMP	
	"end_at": {"type": "number", "required": true}, // UNIX_TIMESTAMP	
}

"reading_log": {
	"book_id": {"type": "string", "foreign_key":"book.id"},
	"record_at": {"type": "number", "required": false, "default": "current_time"},
	"spent_time": {"type": "integer", "required": true}, // unit: hour
}

```

#### Object-relational Mapping

In this case, my ORM is SQLAlchemy

#### Testing

> Mock an item where it is used, not where it came from.

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

#### Must read articles

- https://www.toptal.com/python/an-introduction-to-mocking-in-python
- https://semaphoreci.com/community/tutorials/getting-started-with-mocking-in-python


#### Tips

```bash
# https://stackoverflow.com/questions/20006000/install-a-package-and-write-to-requirements-txt-with-pip
pip install requests && pip freeze | grep -i requests >> requirements.txt
```