---
title: Flutter - CSOC'21 Dev Frontend Week 1
date: 2021-06-07T11:51:59.091Z
description: 'Flutter is Google’s UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.'
parentBlog: CSOC'21 Dev Frontend Week 1
author: COPS SDG
featureImage: /blog/Flutter.webp
---

# Flutter

Due Date: June 13, 2021
type: Mandatory

# Introduction

A quote by the very company that developed flutter, sums it all up...

> "Flutter is Google’s UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.” - Google

The Keywords to understand in the above quote are

### UI Toolkit

A UI kit generally contains a bunch of graphic files including UI components (buttons, check boxes, progress bars, etc.) for the purpose of user interface design. This prevents the wasting of time figuring out how to implement components, but create wonderful designs.

## Native mobile application

Native mobile application, are usually applications that has been written using the native development language and tools specific to that platform. A native iOS application written in Swift or Objective-C and compiled through Xcode, a native Android application written in Kotlin or Java and compiled using Android Studio.

Since these applications are developed using the platform’s default solutions, developers have full and easier access to the device’s capabilities; like all the device’s sensors, the user’s address book. Native applications are also more performant than web or hybrid applications.

However, any application written for iOS using Swift cannot run on Android, and vice versa, thus forcing you to develop specifically for each platform.

These disadvantages are not the issue in flutter. To know why, see [Flutter Architecture.]()

## Codebase

The source code. By single codebase it means that you can create web, mobile and desktop applications by writing code only for one and allow access to all through this. The Programming language flutter uses is Dart.

# Why Flutter?

For a start, have a look at companies that use flutter

![Flutter%206f40b83ab85e4deea146ed1c8877db97/flut.png](Flutter%206f40b83ab85e4deea146ed1c8877db97/flut.png)

Flutter provides the advantage of native applications providing performance, greater control over the hardware as well as ease of use for developers.

# Flutter Architecture

Best to get the overview from flutter itself to know about it and it's uses.

[Technical overview](https://flutter.dev/docs/resources/technical-overview)

Here is the architecture in short.

[How Flutter Works - Build Flutter](https://buildflutter.com/how-flutter-works/)

Here is a video explaining the same.

<div class="container">
  <iframe class="responsive-iframe" width="560" height="315" src="https://www.youtube-nocookie.com/embed/l-YO9CmaSUM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## What does flutter consist of?

Flutter consists of two important parts:

- An SDK (Software Development Kit): A collection of tools that are going to help you develop your applications. This includes tools to compile your code into native machine code (code for iOS and Android).
- A Framework (UI Library based on widgets): A collection of reusable UI elements (buttons, text inputs, sliders, and so on) that you can personalize for your own needs.

# Installation

Here is how you can install Flutter. Do not install Android Studio right now, this week you do not require it. Read until writing your first flutter app.

[Install](https://flutter.dev/docs/get-started/install)

To use flutter consistently between different terminal sessions, go through this

[Linux install](https://flutter.dev/docs/get-started/install/linux#update-your-path)

Install a suitable IDE. VS Code (compared to Android Studio) is good choice for a light and better experience.

# Basics

## Dart

To develop with Flutter, you will use a programming language called Dart. You can download dart sdk or use the online DartPad. But as we are developing flutter apps, we do not need Dart sdk.

Dart focuses on front-end development, and you can use it to create mobile and web applications.

Let's learn a little about it. (Use below given online IDE)

[DartPad](https://dartpad.dartlang.org/)

Use the links below for issues related to dart language

[Topcoder](https://www.topcoder.com/thrive/articles/Dart%20Programming%20Language)

[Dart Programming - Syntax](https://www.tutorialspoint.com/dart_programming/dart_programming_syntax.htm)

## Create your first app

The best way to learn flutter is to create an app on your own. Dont worry, its easy!

If you are more of a watch-and-learn person, here's a full video to help you get started. Just skip the initial installation parts:

[Flutter Tutorial for Beginners - Build iOS and Android Apps with Google's Flutter & Dart](https://youtu.be/GLSG_Wh_YWc)

Or if you want to read and learn, you can visit these:

[The Flutter Series: Exploring a Flutter project and building your first Flutter app](https://medium.com/@dev.n/the-complete-flutter-series-article-1-exploring-a-flutter-project-and-building-your-first-flutter-e438ea941d70)

[The Flutter Series: Basic Widgets and Layout](https://medium.com/@dev.n/the-complete-flutter-series-article-2-basic-widgets-and-layout-in-flutter-92a4fbd4a3e1)

Don't forget to switch on USB Debugging on your mobile. (In case you are not using an emulator)

For reference, keep this handy

[Flutter - Dart API docs](https://api.flutter.dev/)

## Basic Understanding

Crucial for understanding, so don't skip!

[Flutter Widgets - Javatpoint](https://www.javatpoint.com/flutter-widgets)

Everything in flutter is a widget!

[Flutter - Container Cheat Sheet](https://medium.com/jlouage/container-de5b0d3ad184)

# Challenge

As an aspiring developer, you'd need to keep building things to keep your knowledge on tips. Now that you are good to go with the basics of Flutter, we want you to build **one of the games** from the following list on your own.

1. Tic-Tac-Toe Game
2. Sudoku game

You have to provide your Repo and APK File as part of submission

### **Judging**

The evaluation would be done mainly on the following basis:

1. User Interface and User Experience
2. Authenticity and readability of the code
3. Completion of mentioned tasks
4. Bonus Points for implementing extra features depending on your creativity😉

Remember, the deadline for this week's task is **June 13th, 2021, 23:59**.

## Tic Tac Toe

**Objective:** You need to build a Tic Tac Toe game

**Tasks:-**

- **Task 1**: Implement a two-player mode that allows two people to compete against each other.
- **Task 2**: Add a single-player mode that allows users to play with an intelligent bot that never loses.
- **Task 3**: Add an option to select which shape to begin with (X/O).
- **Task 4:** In single-player mode, add an option to choose who will start first - computer or player.
- **Extras:** You may keep a record of scores and use player names for interactivity.

**Resources**

[Minimax Algorithm in Game Theory | Set 3 (Tic-Tac-Toe AI - Finding optimal move) - GeeksforGeeks](https://www.geeksforgeeks.org/minimax-algorithm-in-game-theory-set-3-tic-tac-toe-ai-finding-optimal-move/)

## Sudoku

**Objective:** You need to build a Sudoku board game.

**Tasks:-**

- **Task 1**: Implement a Sudoku game. (The board may remain the same every time).
- **Task 2**: Implement a board generator and generate a random board in every game. You may use backtracking or naive approaches to generate the board.
- **Task 3:** Add a timer to the game, where the user may select a particular time to complete the game within it. **Bonus**: As the time reaches 0, the user can be warned about the time running out.
- **Task 4:** Warning the user about incorrect inputs and user engagement.
- **Extras:** To make the game more engaging, you may provide hints if the user is stuck for like 10-20 seconds.

**Resources**

[Program for Sudoku Generator - GeeksforGeeks](https://www.geeksforgeeks.org/program-sudoku-generator/)

[Generating and solving Sudoku puzzles with Python](https://lvngd.com/blog/generating-and-solving-sudoku-puzzles-python/)

# Submission

As done in the previous week, you'll fork the repository, add your repo and apk link into the list of submissions in the `Flutter.md` file . Submit pull requests from your newly created branch for this challenge.

[COPS-IITBHU/csoc-2021-task-1](https://github.com/COPS-IITBHU/csoc-2021-task-1)
