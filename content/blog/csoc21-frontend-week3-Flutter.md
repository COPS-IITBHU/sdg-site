---
title: Flutter - CSOC'21 Dev Frontend Week 3
date: 2020-06-22T11:51:59.091Z
description: 'What happens when you log out of your Social Media account from one device and open it again on a different device? You see that all your chat messages, profile picture, groups etc. are preserved. It feels like you never changed your device at all. But how did this happen?'
parentBlog: CSOC'21 Dev Frontend Week 3
author: COPS SDG
featureImage: /blog/Flutter.webp
---

# Flutter ( Network Calls )

Due Date: July 2, 2021
type: Mandatory

# Introduction

What happens when you log out of your Social Media account from one device and open it again on a different device? You see that all your chat messages, profile picture, groups etc. are preserved. It feels like you never changed your device at all. But how did this happen?

This can be made possible if we have a system that can store our app-data online and whenever required, this data can be provided to the client apps. For doing so our apps should be able to send and receive data to and from the Internet, and hence we need to learn about making network calls and online data storage.

## Components of an Application

- A backend server that supplies the API endpoints to the frontend.

  [Back-End Web Architecture | Codecademy](https://www.codecademy.com/articles/back-end-architecture)

  Endpoints are important aspects of interacting with server-side web APIs, as they specify where resources lie that can be accessed by third party software. Usually the access is via a URI to which HTTP requests are posted, and from which the response is thus expected.

  [An Introduction To Backend Development and REST APIs](https://medium.com/techloop/an-introduction-to-backend-development-and-rest-apis-b1a1a978821f)

- A server environment (we shall use node) and HTTPS server that listens to server ports and sends responses from the server back to the client (Also known as MiddleWare).

  [The HTTP Server Explained](https://medium.com/@gabriellamedas/the-http-server-explained-c41380307917)

  [What is Node? | Codecademy](https://www.codecademy.com/articles/what-is-node)

- The frontend code which would interact with the user.

**Why Separate backend and frontend code?**

For a better understanding of why backend and frontend should necessarily be well-separated, read the below article.

[](https://www.forbes.com/sites/forbestechcouncil/2018/07/19/seven-reasons-why-a-websites-front-end-and-back-end-should-be-kept-separate/#2088321a4fca)

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

# Using REST APIs for handling data over internet

## JSON and Serialization

[https://flutter.dev/docs/development/data-and-backend/json](https://flutter.dev/docs/development/data-and-backend/json)

## Implementing REST APIs in Flutter

[Parse JSON in the background](https://flutter.dev/docs/cookbook/networking/background-parsing)

[https://www.geeksforgeeks.org/implementing-rest-api-in-flutter/](https://www.geeksforgeeks.org/implementing-rest-api-in-flutter/)

<div class="container">
  <iframe class="responsive-iframe" width="560" height="315" src="https://www.youtube-nocookie.com/embed/1rXFKhBZXxY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

# Assignment

In the previous week, you guys got to learn about how to store data locally on your Android Device. This week tasks will be an extension of the previous TODO List App.

Enable your previously made (or you can start from scratch) TODO maker App to store and retrieve data to/from provided REST APIs. This means you will have the ability to have the same data on different devices on which your app is installed.

# Challenge and Submission

So much for learning, here is your next Assignment

[COPS-IITBHU/csoc-2021-task-3](https://github.com/COPS-IITBHU/csoc-2021-task-3)

All the details of the task are provided in the README.md file go through it.

Just like last task you have to create your own repo and then make a PR in above repo to add your entry into `[Flutter.md](http://flutter.md)` with **apk link and repo link only**
