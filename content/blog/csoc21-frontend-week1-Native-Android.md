---
title: Native Android - CSOC'21 Dev Frontend Week 1
date: 2021-06-07T11:51:59.091Z
description: 'The aptest definition for android is - "Android is a mobile operating system based on a modified version of the Linux kernel and other open-source software, designed primarily for touchscreen mobile devices such as smartphones and tablets."'
parentBlog: CSOC'21 Dev Frontend Week 1
author: COPS SDG
featureImage: /blog/android.webp
---

# Native Android

Due Date: June 13, 2021
type: Mandatory

# Introduction

The aptest definition for android is - "Android is a mobile operating system based on a modified version of the Linux kernel and other open-source software, designed primarily for touchscreen mobile devices such as smartphones and tablets."

In short, we can say that it is an Operating system for touchscreen devices, and any device that runs on this Operating System is known as an Android Device. Now for every operating system, some applications can run on it to perform specific tasks. Similarly, for Android Devices, we have Android Apps that can run on them to perform specific tasks.

Evident enough that the software engineering field for developing such apps is known as Android App Development.

The official language for Android development is Kotlin, but Java is still used in many famous courses and many projects, so you are free to use any of them.

# Installation

### Android Studio

Android Studio is the official Integrated Development Environment (IDE) for Android app development. This software is a bit heavy on normal systems (8 GB Ram & 1 TB HDD) and can be quite laggy for any systems below this configuration.

While developing an android app you will need to test it on a device. You can test it in two ways -

- Real Device (Preffered for slower systems)

  For testing you apps on a real device you will need to have a USB cable and an Android device. Follow this tutorial to enable USB debugging in order to run your app in the device.

- Emulator

  An Android Emulator simulates Android devices on your computer so that you can test your application on a variety of devices and Android API levels without needing to have each physical device. It provides almost all of the capabilities of a real Android device.

# How to get started

If you haven't had any chance to develop android apps earlier then don't worry it's not too late to start now. Here are few resources to start with android development.

- Video Tutorial

  [Android Development Tutorial for Beginners](https://www.youtube.com/playlist?list=PLUcsbZa0qzu3Mri2tL1FzZy-5SX75UJfb)

  [Android Tutorials [Beginner ]](https://www.youtube.com/playlist?list=PLgCYzUzKIBE8TUoCyjomGFqzTFcJ05OaC)

- Written Tutorials
  1. [Create A Project](https://developer.android.com/training/basics/firstapp/creating-project)
  2. [Run Your App](https://developer.android.com/training/basics/firstapp/running-app)
  3. [Include new UI](https://developer.android.com/training/basics/firstapp/building-ui)
  4. [Make it functional](https://developer.android.com/training/basics/firstapp/starting-activity)

# Challenge

As an aspiring developer, you'd need to keep building things to keep your knowledge on tips. Now that you are good to go with the basics of native Android Development, we want you to build **one of the games** from the following list on your own.

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

As done in the previous week, you'll fork the repository, add your repo and deployed site link into the list of submissions in the `Androd.md` file . Submit pull requests from your newly created branch for this challenge.

[COPS-IITBHU/csoc-2021-task-1](https://github.com/COPS-IITBHU/csoc-2021-task-1)
