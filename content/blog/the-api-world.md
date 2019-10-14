---
title: "The Api World"
type: "blog"
date: 2018-08-16T16:00:49+07:00
description: "The Api World"
keywords: ["The Api World"]
categories: ["uncategory"]
tags: []
image: "/common/no-image-available.jpg"
---

## References

- https://www.moesif.com/blog/api-guide/api-design-guidelines/
- https://www.restapitutorial.com/lessons/restfulresourcenaming.html
- https://www.programmableweb.com/category/all/apis

## Completely Stateless

- Origin : https://www.youtube.com/watch?v=67mezK3NzpU

1.Several problems with session id

**One server is not enough**

- We use load balancer? Where to stored memory? 

=> This will lead us to shared cache ==> not works with a overloading connections
=> Distributed cache ( but complicated )

- Sticky sessions in load balancer?

==> Sticky sessions + distributed cache

2. Manage this in client side: JSON + WEB + TOKEN ( JWT )

**JWT vs SessionID**

There are 2 kinds of tokens:

- By reference ( credit card ): Eg, sessionid = a42 ==> ah ha this is John
- By value. JWT=HEADER.PAYLOAD.SIGNATURE Like bank note checking with bank

JWT token usually has 3 parts

- encodedHeader
- encodedPayload
- signature

**encodedHeader**

> parseJSON(base64URL_decode(encodedHeader));
'{"alg":"HS256", "typ":"JWT"}'

**encodedPayload**
{
    // Issuer: who signed the token
    "iss": "auth-backend",
    // Subject : loggin on ... Depends on context
    "sub": "johnsnow",
    // Audience
    "aud": "web-frontend",
    // Expiration Time
    "exp": 14214312312,
    // Not before: 
    "nbf": null,
    // Issued At
    "iat": 14214312012,
    // JWT ID
    "jti":"8123casd-5123-acasd-e433-98123asdac312"
    // private claims
    "name": "John Snow",
    "permissions": ["READ_POSTS","WRITE_POSTS"]
}

**signature**

> hmacSha256(encodedHeader + '.' + encodedPayload, 's3cr3tk3y')

With JWT we can use:

- A dead simple load balancer
- Multi programming language
- Microservice architectures

There are 2 ways to sign signatures:

*symmetric ( ma hoa doi xung ): shared secret*

![signature-asymmetic.png](/posts/signature-symmetic.png)


*asymmetric ( ma hoa bat doi xung ): private key + public key*

![signature-asymmetic.png](/posts/signature-asymmetic.png)

Security provider: keycloak is a consider

## OAuth2 Tokens

- Check access_token
- Check refresh_token

==> Completely stateless

## Drawbacks or Cons of JWT

- Tokens revokation? banknote, passport

Eg: if you have a blacklist that are not suppose to pass

Other ways: no one can access, we have a whitelist that can access

- Single page applications SECURITY

Eg: if you use local database or cookie to store the JWT token, you can be xss attacks: user content injections, third party scripts, non-secured http over public wifis

![jwt-with-browser.png](/posts/jwt-with-browser.png)

![jwt-with-mobieapp-third-party.png](/posts/jwt-with-mobileapp-third-party.png)

CSRF Attacks

![CSRF Attacks](/posts/csrf-jwt.png)

# Mix sessionID and JWT

![session-plus-jwt.png](/posts/session-plus-jwt.png)

It means one side we have reference, another side is by value

# Q/A

1.Token size?

# REST Security

- https://www.youtube.com/watch?v=9CJ_BAeOmW0&t=521s

# Comparing

TPS : transaction processing system

![base line architecture.png](/posts/baseline-architecture.png)

## Basic Auth

![a-basic-auth-message](/posts/a-basic-auth-message.png)

![a-basic-auth-message](/posts/a-basic-auth.png)

If you use a door in the cors at the backend the new tps will be

![basic-auth-both-sides.png](/posts/basic-auth-both-sides.png)

# Micro service patterns

- https://microservices.io/patterns/microservices.html