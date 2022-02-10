---
title: Django REST Framework- CSOC'21 Dev Backend Week 5
date: 2020-07-14T11:51:59.091Z
description: 'Consider that after having completed the CSOC Django Assignment, you now built your own web app backed with Django as the backend.'
subblogs: []
display: False
parentBlog: CSOC'21 Dev Backend Week 5
author: COPS SDG
featureImage: /blog/django.webp
---

# Django REST Framework

Due Date: August 7, 2021
type: Mandatory

# Introduction

## What is REST, and what are RESTful APIs?

Representational State Transfer (REST) is an architectural style that specifies a particular style (and a few constraints). If applied to a web service, render desirable services to work best on the Web, such as performance, scalability, and modifiability. In a RESTful API, endpoints (URLs) define the API structure and how end users access data from our application using the HTTP methods: GET, POST, PUT, DELETE.

Here you can learn more about RESTful Web Services

[Introduction to REST APIs - RESTful Web Services - DZone Integration](https://dzone.com/articles/introduction-to-rest-api-restful-web-services)

A server issues status codes in response to a client's request made to the server. The server always returns a message for every request, whether it is successful or not. Thus they are helpful to know the state of your code.

[HTTP Status Codes](https://restfulapi.net/http-status-codes/)

## What is DRF? Why should I learn it?

Consider that after having completed the CSOC Django Assignment, you now built your own web app backed with Django as the backend. Overnight your web app became a star success!! Congrats! They love it so much that they want a mobile phone version! Time to create an Android Version! And an ios version...

And then, you have to replicate 2 times the same code to Add, View, Remove, Update and Delete data with different languages.

That opens the door to many possible mistakes… And that is where DRF shines out.....

In short, as DRF uses URIs for accessing the DataBase, we can provide access to the database to any application that can read from, generate and send a URI. May that be an android app, web app, iOS app etc.

Consider this against using Django without DRF library, where to provide access to Android, iOS in addition to the web; you have to replicate 2 times the same code to Add, View, Remove, Update and Delete data, with different languages.

All that DRF provides can be implemented through Django without explicitly using DRF, but it is tedious.

Now that was a good start to understanding DRF, but a developer's understanding and terminologies go beyond... Offering you this possibility, have a go through the documentation.

### Documentation and Installation

[Home - Django REST framework](https://www.django-rest-framework.org/)

## Architecture

A DRF API is composed of 3 layers: the serializer, the viewset, and the router.

- Serializer: converts the information stored in the database and defined by the [Django models](https://docs.djangoproject.com/en/2.0/topics/db/models/) into a more easily transmitted format via an API.
- Viewset: defines the functions (read, create, update, delete) which will be available via the API
- Router: defines the URLs which will provide access to each viewset.

# Quickstart

After having installed

[Quickstart](https://www.django-rest-framework.org/tutorial/quickstart/)

## Serializers

Django models intuitively represent data stored in your database, but an API will need to transmit information in a less complex structure. While your data will be represented as instances of your Model classes in your Python code, it needs to be translated into a format like JSON to be communicated over an API.

You can learn about serializers here.

[1 - Serialization - Django REST framework](https://www.django-rest-framework.org/tutorial/1-serialization/)

## Requests and Responses

Well aware that you are about the REST framework, there is nothing better than getting started right away with Django's Requests and Responses.

[2 - Requests and responses - Django REST framework](https://www.django-rest-framework.org/tutorial/2-requests-and-responses/)

## **ViewSets and Routers**

A given serializer will parse the information in both directions (reads and writes), but the ViewSet is where the available operations are defined. The most common ViewSet is the ModelViewSet, which has the following built-in operations:

- Create an instance: `create()`
- Retrieve/Read an instance: `retrieve()`
- Update an instance (all fields or only selected fields): `update()` or `partial_update()`
- Destroy/Delete an instance: `destroy()`
- List instances (paginated by default): `list()`

[6 - Viewsets and routers - Django REST framework](https://www.django-rest-framework.org/tutorial/6-viewsets-and-routers/)

# Tutorial

[Official Django REST Framework Tutorial - A Beginners Guide | LearnDjango](https://wsvincent.com/official-django-rest-framework-tutorial-beginners-guide/)

Django docs contain a tutorial to build Polls API. You can try implementing the same app using DRF. Follow below tutorials:

[Introductions - Building API Django 2.0 documentation](https://books.agiliq.com/projects/django-api-polls-tutorial/en/latest/introduction.html)

# Other resources

You can refer to other articles in these websites for better understanding of Django and DRF:

[Categories](https://www.agiliq.com/categories/#drf)

[Will Vincent](https://wsvincent.com/)

[Article Archive - Simple is Better Than Complex](https://simpleisbetterthancomplex.com/archive/)

# Clean Code

One should always use sensible names for views, variables etc. and write clean code.
Follow this guide to understand how to name your urls.

[REST API Naming Conventions and Best Practices - REST API Tutorial](https://restfulapi.net/resource-naming/)

Python naming guidelines

[PEP 8 -- Style Guide for Python Code](https://www.python.org/dev/peps/pep-0008/)

# Task and Submission

**So much for learning, here is your next Assignment!**

**All the details of the task are provided in the README.md file.**

**As you are aware, you need to fork from and the repository, clone the forked repository, complete the task, commit and push your changes and finally open the pull request back here.**

[GitHub - COPS-IITBHU/csoc-2021-task5-Django-REST-Framework](https://github.com/COPS-IITBHU/csoc-2021-task5-Django-REST-Framework.git)
