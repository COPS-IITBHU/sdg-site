---
title: Express REST Framework - CSOC'21 Dev Backend Week 5
date: 2020-07-14T11:51:59.091Z
description: 'Express provides support for using both Relational and NoSQL databases.Creating a backend without user login and authentication is incomplete. '
subblogs: []
display: False
parentBlog: CSOC'21 Dev Backend Week 5
author: COPS SDG
featureImage: /blog/Nodejs.webp
---

# Express

Due Date: August 7, 2021
type: Mandatory

# Introduction

# Resources

## Basic

Here is a complete tutorial in Express

[Express web framework (Node.js/JavaScript) - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs)

[Using middleware](https://expressjs.com/en/guide/using-middleware.html)

[Writing middleware for use in Express apps](https://expressjs.com/en/guide/writing-middleware.html)

[How To Create a Custom Middleware in Express.js | DigitalOcean](https://www.digitalocean.com/community/tutorials/nodejs-creating-your-own-express-middleware)

Alternatively, if you like videos as tutorials.

<div class="container">
  <iframe class="responsive-iframe" width="560" height="315" src="https://www.youtube-nocookie.com/embed/L72fhGm1tfE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Using Mongodb Database with express

Express provides support for using both Relational and NoSQL databases. Relation databases are generally derivative of SQL family data bases where one has to define different tables and relations between them for storing data. NoSQL databases do not use the traditional tables and relation format for storing data. Hence this becomes handy as developers get the freedom to store the data just in format it is used in their application. So, we will be using Mongodb a famous rival of SQL database family.

This tutorial from MDN will help you get started with using Mongodb:

[Express Tutorial Part 3: Using a Database (with Mongoose) - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose)

Although freedom to store data just as it is used in application is helpful. It can also make life of developers terrible if there is no standard definitions about what is the format of data being stored. One cannot imagine using a data without knowing what it contains. So it becomes necessary to define some formal definitions (schema) and relations so that data can be used efficiently in the application. To help with this task another javascript framework **Mongoose** comes to rescue. There is no better way to learn using Mongoose than going through its documentation.

[Mongoose v5.13.2: Schemas](https://mongoosejs.com/docs/guides.html)

Populating relations in mongoose models:

[Mongoose v5.13.2: Query Population](https://mongoosejs.com/docs/populate.html)

## User Authentication System

Creating a backend without user login and authentication is incomplete. A user authentication system makes the app personalized for users. It takes the web app to altogether another level. There are several ways for authentication when working with `Express.js`. In you task we are using `passport` framework.

Here you can learn more about it

<div class="container">
  <iframe class="responsive-iframe" width="560" height="315" src="https://www.youtube-nocookie.com/embed/mbsmsi7l3r4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div><br><br>

<div class="container">
  <iframe class="responsive-iframe" width="560" height="315" src="https://www.youtube-nocookie.com/embed/QQwo4E_B0y8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

[Authentication and Authorization with JWTs in Express.js](https://stackabuse.com/authentication-and-authorization-with-jwts-in-express-js)

[Documentation](http://www.passportjs.org/docs/)

## Testing the API

Well anything untested is never reliable. We provide you resources for setting up applications that can help you with testing the APIs you made. You can choose anyone or both and learn more about them through resources we have attached or through whatever sources of you choice.

[Desktop API Design Editor and API Client](https://insomnia.rest/products/insomnia)

[API Client for REST, SOAP, & GraphQL Queries | Postman](https://www.postman.com/product/api-client/)

## RESTful APIs in Express

[HTTP Methods for RESTful Services](https://www.restapitutorial.com/lessons/httpmethods.html#:~:text=The%20primary%20or%20most%2Dcommonly,but%20are%20utilized%20less%20frequently)

[What are GET, POST, PUT, PATCH, DELETE? A walkthrough with JavaScript's Fetch API.](https://medium.com/@9cv9official/what-are-get-post-put-patch-delete-a-walkthrough-with-javascripts-fetch-api-17be31755d28)

<div class="container">
  <iframe class="responsive-iframe" width="560" height="315" src="https://www.youtube-nocookie.com/embed/Sb8xyCa2p7A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Challenge and submission

**So much for learning, here is your next Assignment!**

**All the details of the task are provided in the [README.md](https://github.com/COPS-IITBHU/CSOC-2021-task-5-Express-Apis/blob/master/README.md) file.**

**As you are aware, you need to fork from and the repository, clone the forked repository, complete the task, commit and push your changes and finally open the pull request back here.**

[GitHub - COPS-IITBHU/CSOC-2021-task-5-Express-Apis](https://github.com/COPS-IITBHU/CSOC-2021-task-5-Express-Apis)
