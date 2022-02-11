---
title: Web Development - CSOC'21 Dev Frontend Week 2
date: 2021-06-15T11:51:59.091Z
description: 'Last week you learned about creating static websites. The next step before moving on to creating Web Applications is to know about what is the difference between the two.'
parentBlog: CSOC'21 Dev Frontend Week 2
author: COPS SDG
featureImage: /blog/WEB.webp
---

# Web Development

Due Date: June 21, 2021
type: Mandatory

# What is a Web Application?

Last week you learned about creating static websites. The next step before moving on to creating Web Applications is to know about what is the difference between the two.

Very often, the terminologies dynamic websites and web applications are used exchangably.

A very basic and detailed answer to the difference between static websites and dynamic web applications is given here

[What is the difference between a website and a webapp?](https://www.quora.com/What-is-the-difference-between-a-website-and-a-webapp)

## Components of a Web App

A web app is more of functionality than just the design. Anything worthwhile is not simple and does not come easily. Technically, a Web app is an application program that is stored on a remote server and delivered over the Internet through a browser interface. Creating and serving a web app requires

- A backend server that supplies the API endpoints to the frontend.

  [Back-End Web Architecture | Codecademy](https://www.codecademy.com/articles/back-end-architecture)

  Endpoints are important aspects of interacting with server-side web APIs, as they specify where resources lie that can be accessed by third party software. Usually the access is via a URI to which HTTP requests are posted, and from which the response is thus expected.

  [An Introduction To Backend Development and REST APIs](https://medium.com/techloop/an-introduction-to-backend-development-and-rest-apis-b1a1a978821f)

- A server environment (we shall use node) and HTTPS server that listens to server ports and sends responses from the server back to the client (Also known as MiddleWare).

  [The HTTP Server Explained](https://medium.com/@gabriellamedas/the-http-server-explained-c41380307917)

  [What is Node? | Codecademy](https://www.codecademy.com/articles/what-is-node)

- The frontend code which will actually be running in the users' browser.

  Read the HTML, CSS and Javascript from here.

**Why Separate backend and frontend code?**

For a better understanding of why backend and frontend should necessarily be well-separated, read the below article.

[](https://www.forbes.com/sites/forbestechcouncil/2018/07/19/seven-reasons-why-a-websites-front-end-and-back-end-should-be-kept-separate/#2088321a4fca)

# Web app architecture

A little extra knowledge never goes amiss

[Web Application Architecture: Definition, Models, Types, and More](https://hackr.io/blog/web-application-architecture-definition-models-types-and-more)

# APIs

So this week you are going to get started with using API endpoints. For basic knowledge of APIs, as to what basically is an API and what is it's purpose, take a look at the following video.

<div class="container">
  <iframe class="responsive-iframe" width="560" height="315" src="https://www.youtube-nocookie.com/embed/s7wmiS2mSXY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

For apps of all shapes and sizes (mobile app, web app, IoT, desktop app) they need a well-defined **Application Programming _Interface_ (API)** to abstract away the business logic of backend and to cater to any client supporting only HTTP.

Now that you know what an API actually is, the next stage is to learn how can we use APIs and what are the ways to interact with these APIs

[Working with APIs | The Odin Project](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/working-with-apis)

Due to security concerns browsers implement a security policy called as CORS which can surely pop up as error many times. So it's important to understand what is CORS or Cross Origin Resource Sharing

[Cross-Origin Resource Sharing (CORS) - HTTP | MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

We'll cover the most popular pattern of HTTP APIs, the so-called RESTful APIs next week! However for a brief intro, here you go

[Understanding And Using REST APIs - Smashing Magazine](https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/)

---

So much for the conceptual part, let's get started with the practical knowledge!

# Axios

In a nutshell, `Axios` is a JavaScript library used to make HTTP requests from Node.js or XMLHttpRequests from the browser that also supports the ES6 Promise API.

In simpler terms, Axios allows us to communicate with APIs easily in our web apps. Though this can also be achieved by other methods like `fetch` , Axios can provide a little more functionality that makes our job easier. It is one of the most convenient and popular libraries for making HTTP requests to APIs.

With over 85k stars on GitHub and over 17 million weekly downloads on npm, Axios is definitely one of the most popular JavaScript libraries.

[What is Axios.js and why should I care?](https://medium.com/@MinimalGhost/what-is-axios-js-and-why-should-i-care-7eb72b111dc0)

## Resources

Before starting with the task for the week, you need to be comfortable with the use of Axios, sending HTTP requests like GET, POST, PATCH, DELETE, etc.

The following video will give a general overview of how to send these HTTP requests to an API using Axios

<div class="container">
  <iframe class="responsive-iframe" width="560" height="315" src="https://www.youtube-nocookie.com/embed/6LyagkoRWYA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

The complete documentation can be found here in case you wish to dive deep

[axios](https://www.npmjs.com/package/axios#installing)

# Bonus Treats

In this task we have provided you with a Development Enviornment which has been configured using **Vite** ( French for Fast pronounced as _Veet_ ) which is the new standard for Hot Module Replacement and build step uses **Rollup** which is a javascript bundler. To know more about what thing does Next Gen bundlers do different from something like **Webpack** or **Parcel**

[448: Next Gen Bundlers with Jason Miller and Fred Schott - ShopTalk](https://shoptalkshow.com/448/)

# Challenge and Submission

**So much for learning, here is your next Assignment!**

[COPS-IITBHU/csoc-2021-task-2-web](https://github.com/COPS-IITBHU/csoc-2021-task-2-web)

**All the details of the task are provided in the [README.md](https://github.com/COPS-IITBHU/csoc-2020-task-1/blob/master/README.md) file.**

**As you are aware, you need to fork from and the repository, clone the forked repository, complete the task, commit and push your changes and finally open the pull request back here.**
