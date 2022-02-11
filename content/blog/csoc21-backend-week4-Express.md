---
title: Express - CSOC'21 Dev Backend Week 4
date: 2020-06-22T11:51:59.091Z
description: 'So After Frontend, we are left with Web Backend to gain a good command over web dev. That is why we bring you here, to Express!'
subblogs: []
display: False
parentBlog: CSOC'21 Dev Backend Week 4
author: COPS SDG
featureImage: /blog/Nodejs.webp
---

# Express

Due Date: July 24, 2021
type: Mandatory

# Introduction

So After Frontend, we are left with Web Backend to gain a good command over web dev. That is why we bring you here, to Express!

Express is a Javascript Framework. This lets developers to develop their application without caring much for language difference in backend and frontend part of applications.

Here is a brief intro to why we use Express:

[What is Express.js? | Why should use Express.js? | Features of Express.js](https://www.besanttechnologies.com/what-is-expressjs)

Check out the guide in official website:

[Express - Node.js web application framework](https://expressjs.com/)

# Resources

## MVC (Model-View-Controller) core architecture

You don't have to understand code in below tutorial, but just understand how we organize our project in a MVC architecture so that things are easily manageable even if our project is super giant.

[Understanding MVC pattern in Nodejs](https://dev.to/eaetukudo/understanding-mvc-pattern-in-nodejs-2bdn)

## Basic

Here is a complete tutorial in Exppress

[Express web framework (Node.js/JavaScript) - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs)

Alternatively, if you like videos as tutorials.

[Node.js With Passport Authentication | Full Project](https://youtu.be/6FOq4cUdH8k)

[Express JS Crash Course](https://youtu.be/L72fhGm1tfE)

## Using Mongodb Database with express

Express provides support for using both Relational and NoSQL databases. Relation databases are generally derivative of SQL family data bases where one has to define different tables and relations between them for storing data. NoSQL databases do not use the traditional tables and relation format for storing data. Hence this becomes handy as developers get the freedom to store the data just in format it is used in their application. So, we will be using Mongodb a famous rival of SQL database family.

This tutorial from MDN will help you get started with using Mongodb:

[Express Tutorial Part 3: Using a Database (with Mongoose) - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose)

Although freedom to store data just as it is used in application is helpful. It can also make life of developers terrible if there is no standard definitions about what is the format of data being stored. One cannot imagine using a data without knowing what it contains. So it becomes necessary to define some formal definitions (schema) and relations so that data can be used efficiently in the application. To help with this task another javascript framework **Mongoose** comes to rescue. There is no better way to learn using Mongoose than going through its documentation.

[Mongoose v5.13.2: Schemas](https://mongoosejs.com/docs/guides.html)

Populating relations in mongoose models:

[Mongoose v5.13.2: Query Population](https://mongoosejs.com/docs/populate.html)

## Writing views in express

Express uses template engine for rendering views. The Express application generator uses [Jade](https://www.npmjs.com/package/jade) as its default, but it also supports several others. Some great names in this list are [Pug](https://pugjs.org/api/getting-started.html), [Mustache](https://www.npmjs.com/package/mustache), and [Ejs](https://www.npmjs.com/package/ejs).

We will use **[Ejs](https://www.npmjs.com/package/ejs)** for this task so we will focus on its tutorials here. But at the end we've attached official express documentation about templating support in express to quench your curiosity.

[ejs](https://www.npmjs.com/package/ejs)

[EJS](https://ejs.co/)

In order to learn more about template engine support in Express check out the official guide:

[Using template engines with Express](https://expressjs.com/en/guide/using-template-engines.html)

## User Authentication System

Creating a backend without user login and authentication is incomplete. A user authentication system makes the app personalized for users. It takes the web app to altogether another level. There are several ways for authentication when working with `Express.js`. In you task we are using `passport` framework.

Here you can learn more about it:

<div class="container">
  <iframe class="responsive-iframe" width="560" height="315" src="https://www.youtube-nocookie.com/embed/-RCnNyD0L-s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

[Documentation](http://www.passportjs.org/docs/)

_We are sure by now you've realized that world of web development is dominated by javascript._

## Challenge and submission

**So much for learning, here is your next Assignment!**

**All the details of the task are provided in the [](https://github.com/COPS-IITBHU/csoc-2020-task-2/blob/master/README.md)[README.md](https://github.com/COPS-IITBHU/csoc2021-task4-express#readme) file.**

**As you are aware, you need to fork from and the repository, clone the forked repository, complete the task, commit and push your changes and finally open the pull request back here.**

[COPS-IITBHU/csoc2021-task4-express](https://github.com/COPS-IITBHU/csoc2021-task4-express)
