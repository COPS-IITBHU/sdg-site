---
title: Linux - CSOC'21 Dev Frontend Week 0
date: 2021-05-30T11:51:59.091Z
description: 'Linux has become the de facto OS of programmers worldwide, and so you all must get comfortable with it.'
parentBlog: CSOC'21 Dev Frontend Week 0
author: COPS SDG
featureImage: /blog/linux-logo.webp
---

# Linux

Due Date: June 6, 2021
type: Mandatory

# Introduction

Surely you’ve all heard of Linux before; after all, it’s one of the tech buzzwords. But, let’s clarify that we use the word “Linux” here to refer to Linux as a distribution, which technically provides the full OS functionality.

Linux has become the de facto OS of programmers worldwide, and so you all must get comfortable with it. Out of the variety of Linux distributions ( aka distros ) available in the market (i.e. FOSS market), Ubuntu or any Debian based Linux Distro is the most common and most natural to set up.

The reason that most programmers prefer to use Linux Based OS because it is open source and hence the associated reliability and security. Alongside that, most of the program/software is first developed for Linux Distribution because of their widespread use.

# Installation

### Ubuntu Only

[Install Ubuntu desktop | Ubuntu](https://ubuntu.com/tutorials/tutorial-install-ubuntu-desktop?fbclid=IwAR3TUtu5aaPzHvAgq-ajwFWwQMvioIHcv8ZpKaxusvlIcnFgatW6t6uiPA8#1-overview)

NOTE: Take precaution before choosing “Erase disk and Install Ubuntu”. It’ll replace your pre-installed OS with the new Ubuntu. Refer this tutorial for partitioning

### Dual Boot

Please follow these steps properly and then refer the video

- Disbale fast and secure boot on your system
- Download ISO Image for Ubuntu 20.04

[Download Ubuntu Desktop | Download | Ubuntu](https://ubuntu.com/download/desktop)

- Make a bootable pendrive using **Balena Etcher**

[balenaEtcher - Flash OS images to SD cards & USB drives](https://www.balena.io/etcher/)

<div class="container">
  <iframe class="responsive-iframe" width="560" height="315" src="https://www.youtube-nocookie.com/embed/aKKdiqVHNqw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Hindi Variant for Dual Boot

<div class="container">
  <iframe class="responsive-iframe" width="560" height="315" src="https://www.youtube-nocookie.com/embed/eHBLDIwKMFE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### More Flavours

Linux won't limit you like macOS or Windows where you have to wait for the owner companies to release new features and add new things to the appearance or functionality. You can try out other Linux Distros too if you are feeling to try something new something different.

- Zorin OS - Appearance
- Pop OS - Performance
- Kali Linux - Toolbox
- Deepin OS - Appearance ( Chinese )
- Elementary OS - Apple People

## Windows Subsystem for Linux

Although not the recommended way to go about for any programmer, Windows finally had to support Ubuntu within its very system for programmers, which is known as WSL. WSL is a wrapper for Ubuntu presented to you in your old and clanky Windows 10 :P.

Sooner or later you will have to switch to Linux for Software Development purposes. But if you are a bit afraid of damaging your system during installation you can check out the following WSL resources.

[What is Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/about)

<div class="container">
  <iframe class="responsive-iframe" width="560" height="315" src="https://www.youtube-nocookie.com/embed/lDH6dvaw1B8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

**Note** you won't be shown your password as you type it in for the first time so make sure you don't type in something random as you will need that password.

## Commands

The command line is a very powerful tool that you must master to be a good developer.

Here is a video to start.

<div class="container">
  <iframe class="responsive-iframe" width="560" height="315" src="https://www.youtube-nocookie.com/embed/IVquJh3DXUA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Here is a great place to get started

[The Top 10 Linux Commands Every Programmer Should Know](https://dev.to/harvey/the-top-10-linux-commands-every-programmer-should-know-11hf)

[](https://maker.pro/linux/tutorial/basic-linux-commands-for-beginners)

### To install a package you have to use APT for Debian Based Linux

[Using apt Commands in Linux [Complete Guide] - It's FOSS](https://itsfoss.com/apt-command-guide/)

[Using Snap Packages In Ubuntu & Other Linux [Complete Guide]](https://itsfoss.com/use-snap-packages-ubuntu-16-04/)

# Assignment

Finally, we’ve reached on to give you your first assignment! A Bandit challenge where you can practice all the shell commands you’ve learnt so far:

You have a whole week so complete at least 15 levels and finally, store all the passwords in a file. You’ll get a really good practice in using shell and how you can use different commands.

[Bandit](http://overthewire.org/wargames/bandit/)

# Submission

You are required to store the list of passwords and commands you used to get the password of a level in another file - use; to separate each command of a particular level. Once done, submit both the files via this form:

[Google Forms - create and analyze surveys, for free.](https://docs.google.com/forms/d/e/1FAIpQLSc9v1kJLTwQN3HxjkCPWsFtr1XMQVYcJkC1PVQ-k4EeJIcEpA/viewform)
