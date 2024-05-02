---
toc: True
comments: True
layout: post
title: P2 | Python/Flask | JWT
description: Team Teach for JWT; Project Backend Implementation
type: collab
courses: {'csp': {'week': 19}}
---

# Python/Flask JWT Project Backend Implementation Overview ([flask_portfolio](https://github.com/nighthawkcoders/flask_portfolio))

## Introduction to JWT

What is JWT?
    - Stands for JSON Web Token
    - Compact, URL-safe means of representing claims between two parties
    - Commonly used for authentication and information exchange in web development

### Example (Login)

Encoded JWT: https://github.com/mhr77777/jwt_demo_flask

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

- Result of applying Base64Url encoding to the JWT’s header, payload, and signature
    - String of three parts concatenated with dots: encoded header, payload, and signature
    - Purpose: makes JWT compact, URL-sage, and easy to transmit over networks
- Compact, used for transmission

Decoded JWT:
{
  "sub": "1234567890",
  "name": “John Doe",
  "iat": 1516239022
}
- Result of decoding the header, payload, and signature from Base64Url encoded JWT
    - Reveals contents of JWT/human-readable, reveals content of the token
- Contains information such as user identity, expiration time, and other relevant information/data
    - Information shown as “sub” essentially represents the time at which the information was registered
    - Information shown as “iat” represents the time at which the information will expire
    - “name” is just User ID

## Cookies

- HTTP Cookies: pieces of information/data that a web server sends to a user’s browser and are stored on a user’s device
    - Sent back to server with each request (interaction with sites that require fetching server data) → server can recognize user session, maintain session info, and store user preferences 
    - Cookies can store authentication tokens to keep a user authenticated as they navigate through a site (server)

<img src="https://github.com/tuckergol/student2/blob/main/images/RestAPI.png?raw=true" width="850" height="810">

### Tokens

Elaboration on JWT + Cookies…

- Created when information is registered (session identifier)
    - Ex: when a user inputs data in a login
    - Session identifier often stored as a Token on the client side, either as an HTTP Cookie or in local storage
    - Tokens store user data
- Relation to Cookies → session Token is sent with each subsequent request from client to server, typically in the form of an HTTP Cookie
- Authentication → with JWT, the server verifies a signature given to the JWT to ensure authenticity and bases the user’s authenticity based on whether or not the signature is valid therefore trusted

## Anatomy of Python Flask Review ([flask_portfolio](https://github.com/nighthawkcoders/flask_portfolio))

<img src="https://github.com/tuckergol/student2/blob/main/images/flaskportfolioimage.png?raw=true" width="400" height="1200">

- main.py: the Python source file that’s used to run your project
    - Use this file to run, test, and debug your project
- Dockerfile and docker-compose.yml: files used to run and test your project in Docker container
    - Simulate the project’s deployment on a server, such as with AWS
    - Use this to ensure correct project functionality across different machines
- instances: base location for storing data files that you want to remain on the server
    - Files stored here stay after web application restarts, so everything outside of this file will be recreated when restarting
- static: base location for files that you want to be stored and hidden (cached) by the web server
    - Typically used for image or JavaScript files that remain constant when executing the web server
- api: contains code that receives and responds to requests from external servers
    - The interface between the external world and the logic and code in the rest of your project
- model: contains files that implement the backend functionality for many of the files in the api directory (ex: direct interaction with the database)
- templates: contains files and subdirectories used to support home + error pages of your project’s site
