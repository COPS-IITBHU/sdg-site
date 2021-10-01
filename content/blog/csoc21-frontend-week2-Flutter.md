---
title: Flutter - CSOC'21 Dev Frontend Week 2
date: 2021-06-15T11:51:59.091Z
description: "You must have encountered keywords like async, await and Future till now. These are very important blocks that one should comprehend."
parentBlog: CSOC'21 Dev Frontend Week 2
---
# Flutter

Due Date: June 21, 2021
type: Mandatory

# Asynchronous code in Dart & Flutter

You must have encountered keywords like async, await and Future till now. These are very important blocks that one should comprehend. 

Get this concept with this video created by Google developers themselves

[Async/Await - Flutter in Focus](https://www.youtube.com/watch?v=SmTCmDMi4BY)

# Storing data locally

## Persisting Key-Value based data using SharedPreferences

There are a lot of options for storing data locally. The most basic one is using the [shared_preferences](https://pub.dev/packages/shared_preferences) plugin.

Here is a video explaining the [shared_preferences](https://pub.dev/packages/shared_preferences) plugin

[Flutter: Shared Preferences In 5 Minutes | Data Persistence](https://www.youtube.com/watch?v=uyz0HrGUamc)

or you can read this tutorial

[Store key-value data on disk](https://flutter.dev/docs/cookbook/persistence/key-value)

Although key-value storage is easy and convenient to use, it has limitations: 

- Only primitive types can be used: int, double, bool, string, and stringList.
- It’s not designed to store a lot of data.

sqflite plugin overcomes these limitations.

## Persist and Query data locally on the device with SQLite.

### What is SQLite?

Before moving any forward, you must know what exactly is SQLite. The following tutorial gives you a brief overview of the same.

[What is SQLite? Top SQLite Features You Should Know](https://www.sqlitetutorial.net/what-is-sqlite/)

### Creating a local SQLite database using   [sqflite](https://pub.dev/packages/sqflite)  package Flutter

Here comes the Flutter part.

There are a bunch of packages available to store data locally on the device, but the one recommended by Flutter is the "sqflite" package which is an SQLite plugin for Flutter.

Here is a short video by Flutter team explaining the sqflite package

[sqflite (Flutter Package of the Week)](https://www.youtube.com/watch?v=HefHf5B1YM0)

Now, let's read and learn about the sqflite plugin!

[Persist data with SQLite](https://flutter.dev/docs/cookbook/persistence/sqlite)

or if you are more of a video person

[Flutter Tutorial - SQL Database Storage Using Sqlite & Sqflite CRUD | Android & iOS](https://www.youtube.com/watch?v=UpKrhZ0Hppk)

## The sqflite Alternative

sqflite is all you need for storing structured data locally therefore, explore this section only when you are done with sqflite.

### Hive

Hive is a key-value (NoSQL) based database that is much faster than sqflite. 

[Hive Docs](https://docs.hivedb.dev)

A beginners tutorial to Hive

[Hive (Flutter Tutorial) - Lightweight & Fast NoSQL Database in Pure Dart](https://www.youtube.com/watch?v=R1GSrrItqUs&t=1712s)

# Challenge and Submission

So much for learning, here is your next Assignment

[COPS-IITBHU/csoc-2021-task-2](https://github.com/COPS-IITBHU/csoc-2021-task-2)

All the details of the task are provided in the README.md file.

Just like last task you have to create your own repo and then make a PR in above repo to add your entry into `[Flutter.md](http://flutter.md)` with **apk link and repo link only**