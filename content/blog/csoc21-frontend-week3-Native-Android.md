---
title: Native Android - CSOC'21 Dev Frontend Week 3
date: 2020-06-22T11:51:59.091Z
description: 'What happens when you log out of your Social Media account from one device and open it again on a different device? You see that all your chat messages, profile picture, groups etc. are preserved. It feels like you never changed your device at all. But how did this happen?'
parentBlog: CSOC'21 Dev Frontend Week 3
author: COPS SDG
featureImage: /blog/android.webp
---

# Android (Network Calls)

Due Date: July 2, 2021
type: Mandatory

[Introduction]()

[How to make Network Calls]()

[Assignment]()

[Submission]()

# Introduction

What happens when you log out of your Social Media account from one device and open it again on a different device? You see that all your chat messages, profile picture, groups etc. are preserved. It feels like you never changed your device at all. But how did this happen?

This can be made possible if we have a system that can store our app-data online and whenever required, this data can be provided to the client apps. For doing so our apps should be able to send and receive data to and from the Internet, and hence we need to learn about making network calls and online data storage.

# How to make Network Calls

Note that we are going to use the Backend API made by COPS to enable storing and retrieving data from an online database.

### Setup your Project

You will be interacting with a Rest API to authenticate your user and also store his/her data online. Now if you need to do any of this you will have to import some library that can help you with making network requests. Hence we prefer you to use Retrofit as it is one of the popular Android Networking Library.

- What is Rest API

  This is something which you should try to learn about your self but here is a video to help you understand it

  [What is REST API? | Web Service](https://www.youtube.com/watch?v=)
  <div class="container">
    <iframe class="responsive-iframe" width="560" height="315" src="https://www.youtube-nocookie.com/embed/qVTAB8Z2VmA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>

- How to use Retrofit (Important)

  This networking library will help you to write code for retrieving/storing data from an API. You will have to create models on how to use parse a network response into a structure. This video series will help you guide on how to use Retrofit

  [Retrofit Tutorial for Beginners - Android Programming](https://www.youtube.com/playlist?list=PLrnPJCHvNZuCbuD3xpfKzQWOj3AXybSaM)

# Assignment

In the previous week, you guys got to learn about how to store data locally on your Android Device. This week tasks will be an extension of the previous TODO List App.

## T**ODO Maker 2.0**

Enable your previously made (or you can start from scratch) TODO maker App to store and retrieve data to/from Todo-API. This means you will have the ability to have the same data on different devices on which your app is installed. Note that for different users of your App a different TODO data collection will be formed. This means that you will have a separate TODO list for individual Users and if that user opens the app on any other device then the data shown to them must be theirs only.

### Rest API

The Rest API for your tasks will be → [https://todo-app-csoc.herokuapp.com/](https://todo-app-csoc.herokuapp.com/)

It will have some specific endpoints which are going to be used for authentication, creating data, deleting data, etc. You can see more details about them here ([https://github.com/COPS-IITBHU/csoc-2021-task-2-web#end-points](https://github.com/COPS-IITBHU/csoc-2021-task-2-web#end-points))

# **Submission**

Submission has to be done by sharing your github repo link and the .apk file of your android app

### **Gunderlines :**

- Clone CSOC-task3-2021 on your machine.
- Make a folder of your name within the Android folder and add the .apk file of your app.
- Finally push your Pull request .
