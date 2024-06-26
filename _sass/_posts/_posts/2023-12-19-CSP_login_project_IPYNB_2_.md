---
toc: True
comments: True
layout: post
title: CSP | JWT | Login Project
description: Each individual will produce login project.  Student groups will Teach and Execute on project in a Crowdsource manner.
courses: {'csp': {'week': 18}}
type: ccc
---

##  Individual Requirements

Each individual will develop a Login and Signup system which contains roles.  Project can be collaboritive, but it is responsiblity of individual to have FE/BE assets in their own GitHub.   Demonstration of the project will be performed on localhost.

- The project will be guided by Student/Teacher lessons.  Each lesson will build upon previous lesson to ultimately create a Login and Role system.  

- Individuals will be graded by Student/Teacher teams on progress. Each lesson will be worth a point.

- Each assignment should be done in iterative fashiion in individual repository.   Student/Teacher teams need to review both commits (journey) and runtime at each review.


[Key Milestones](https://github.com/orgs/nighthawkcoders/projects/3)


## Lessons, Student/Teacher requirements.

The lessons listed are the proposed order of build up.  Each Student/Teaching team will select a lesson and produce a Step-by-Step lesson.  Lessons should build upon dependencies of previous lessons where required.

- SASS instroduction.  Teachers will provide lessons that contain SASS introduction.  These lessons will be reviewed and adapted to prepare students for build new on SASS styled page(s).

- Python Flask User db introduction.  Teachers will provide lessons and code that contain foudnation for User table with SQL database.  Students will develop anatomy of User table within SQL database lesson and discuss operations between API and Model layers in backend.

- JWT overview. Teachers will provide materials that overview JWT and implementation into flask portfolio project.  Student/Teachers will build anatomy lesson and describe concept that go into adding JWT to a flask project.  Additionally, student will review Postman and validating a JWT cookie is obtained.

- SASS / JavaScript login and signup page. This page must be built off the GitHub Pages minima theme. The page must be set up with a framework for JavaScript methods to fetch POST requests for Login and Signup. The page should consider both success and errors (401, 403, 404) when creating JavaScript and HTML.

- POST methods and Database definitions. Establish basic frontend/backend API methods to support Login/Signup. Create an anatomy lesson and drawings that explain how the frontend/backend work, including explaining the security config. Use materials from the Teacher Portfolio for the User table in the database. At the conclusion of this lesson, students should have a working Login/Signup system.

- Roles for User / Admin user. Add to the working system by creating roles for each user (ADMIN, Teacher, User). Review current and former Teacher repositories for assistance. The teacher's recommendation is to build a Roles Table that has a many-to-many relationship with User. This portion of the project also includes an anatomy lesson on JWT/cookie and displaying roles on GitHub Pages.

- HTML / JavaScript for User Profile. Allow users to edit their profile on GitHub Pages. This portion of the project allows users to perform read and update operations on their profile. To make this interesting, add some attributes to the User Profile, for instance, the ability to turn on statistics from the GitHub API, or store their favorite Coding languages and frameworks, or make a list of friends that are in the system.

- Jinja2. In the backend, build CRUD page(s) for Teacher and Admin roles. Using jQuery, build functionality to review and filter users (Read), build a function to edit roles for a user (Update), build functionality to remove a user (Delete), the delete must remove relationship data from the Roles table. Be sure to describe the anatomy of files and the process.

- Deployment. Build a lesson that requires each user to go through deployment. This starts by creating an EC2 instance and walks them through the process of deployment. In this process, students will need to learn about Docker, dotEnv, instance directory and db, CORS, security config, DNS, Nginx, Certbot. The dotEnv process should be used to manage JWT secrets. The CORS process should discuss proper definitions to support localhost and deployment verification.


