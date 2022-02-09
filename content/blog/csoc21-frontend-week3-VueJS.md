---
title: Javascript Framework VueJS - CSOC'21 Dev Frontend Week 3
date: 2021-06-22T11:51:59.091Z
description: 'VueJS is a Progressive Javascript Framework which was born as a cumulation of the best parts from older frameworks like React and Angular.'
parentBlog: CSOC'21 Dev Frontend Week 3
author: COPS SDG
featureImage: /blog/VUE.webp
---

# Javascript Framework VueJS

Due Date: July 2, 2021
type: Mandatory

# Introduction

VueJS is a Progressive Javascript Framework which was born as a cumulation of the best parts from older frameworks like React and Angular. It provides you out of the box access to a reactive system, state mangement and template compiler. VueJS is performant, versatile and approachable.

VueJS is very intuitive and beginner friendly and that doesn't mean your page performance has to suffer because of that in any way. You know HTML, CSS and JS that's great you can dive into Vue right away!

Despite not being backed by any big company VueJS ecosystem thrives on its open source contributors who are always adding in something to make your task simple and squeeze out extra performance for your App.

Watch this small video to know about why and how VueJS ?

<div class="container">
  <iframe class="responsive-iframe" width="560" height="315" src="https://www.youtube-nocookie.com/embed/OrxmtDw4pVI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## One Stop Solutions

One of the crucial points that make learning anything easy is documentation for that particular language/library/framework. VueJS Ecosystem boasts about it documentation being one of the best and that isn't false. So your one stop solution for learning VueJS is the VueJS Site

It will be great if you can first head over to the guide and specific parts that will be necessary for this task will be mentioned below

[Vue.js](https://vuejs.org/)

## Intro to VueJS by [Sarah Drasner](https://twitter.com/sarah_edo)

One of the best courses that you can find for learning VueJS and its not some big heavy course its a 4hr workshop and Voila! you become a Vue Expert

[Learn Vue 3 in this Introduction to Vue.js Course by Core Vue Team Member, Sarah Drasner](https://frontendmasters.com/courses/vue-3/)

For accessing the course you will need a Frontend Masters Account which you don't have to worry about as Github Education Pack got you covered with a 6 month subscription. If you dont have apply for it or use your friends till you get yours ;)

[GitHub Student Developer Pack](https://education.github.com/pack)

It's recommended that you try out all the guides using NuxtJS. For that you can clone the below repository and experiment on it

[king-11/nuxt-template](https://github.com/king-11/nuxt-template)

## Template Syntax

Vue uses a template syntax to bind your reactive javascript to elements in your DOM/HTML

[Template Syntax - Vue.js](https://vuejs.org/v2/guide/syntax.html)

Vue uses directives things like `v-if` , `v-model` , `v-for` , `v-bind` etc to perform special binding from the data and methods in your `script` tag to html in your `template` tag.

[Intro to Vue.js: Rendering, Directives, and Events | CSS-Tricks](https://css-tricks.com/intro-to-vue-1-rendering-directives-events/)

## Single File Component ( SFC )

In earlier guide you might have seen use of things like Vue.use .... blah blah we dont do that here. We have a single file that does it all for us. VueJS uses a single file architecture where your `HTML` lies in `template` tag, `javascript` inside of `script` tag and finally all your `styles` lie inside `style` tag.

[](https://vuejs.org/v2/guide/single-file-components.html)

How does those SFC translate to pages in our application ? That is handled by [NuxtJS]() so that we dont have to worry about any sort of configurations or anything.

[File System Routing](https://nuxtjs.org/docs/2.x/features/file-system-routing)

## Data

Frontend Frameworks provide us with a way to manage our data on any page or component dynamically using certain methods or more technically APIs ( not HTTP one ). The three main methods to enter reactive data into your vue templates is using :

- `data()`
- `computed`
- `props`

Each is a part of options API you can read about them below. Briefly stating `data` is used for normal data that can be dynamically updated, `computed` is used to respond to change in data returned by a function based on changes in `literals` inside the `function` and finally `props` are something that are passed on to children from parent as data.

[API - Vue.js](https://vuejs.org/v2/api/#Options-Data)

## Lifecycle Hooks

In certain situations we might want to perform some action based on things like whether component is mounted into DOM, its is created, is is destroyed, etc. For that we use Lifecycle hooks some of the most prominent ones include `mounted` , `destroyed` and `updated` others you can read but wont be needed for this task.

[API - Vue.js](https://vuejs.org/v2/api/#Options-Lifecycle-Hooks)

## Conditional Rendering and Loops

You might want to render some componets based on a boolean variable in your `data` this can be done as simply as `v-if="variable"` okay so want to do an else if fine we have `v-else-if` ohh so now you want else too here you go `v-else` . Else should be chained with a preceeding `v-if`.

[https://vuejs.org/v2/guide/#Conditionals-and-Loops](https://vuejs.org/v2/guide/#Conditionals-and-Loops)

List Rendering is something that still gives you scare right in vanillat JS you have to write string based `li` component. Need not worry this time `v-for` has you covered where you can do something like `<li v-for="todo in todos` and there you go. But to ensure that list is rendered properly in a sequential manner each element needs a `key` element which can be binded to it using `:key="todo.id"`. Key should be unique

[List Rendering - Vue.js](https://vuejs.org/v2/guide/list.html)

## Components

Check this only to know how you import components in a page and how we use them. You need not worry about registering them `NuxtJS` will do that for you.

[Component Registration - Vue.js](https://vuejs.org/v2/guide/components-registration.html#Automatic-Global-Registration-of-Base-Components)

## State Management

You might have used `localStorage` for managing global state in your app but that changes from here onwards because using `localStorage` is not a fast neither a scalable solution. VueJS comes out of the box with `VueX` its global state management solution unlike some libraries that call themselves frameworks and dont even have their own routing and state management ( ahem ahem `R` something :P )

[State | Vuex](https://vuex.vuejs.org/guide/state.html#single-state-tree)

Changes to state are made using `mutations` in `VueX` and for asynchronous changes like making axios calls we use `actions`

[Mutations | Vuex](https://vuex.vuejs.org/guide/mutations.html)

## Nuxt JS

Populary known as **the Initutive VueJS Framework** its makes some trivial task very easy for us which includes routing, state management, etc. And that isn't all the biggest change that it makes is providing a better SEO ( Search Engine Optimization ) experience for your web app so that its page ranking can increase.

The issue with web apps made from just VueJS also called **Single Page Applications** ( SPA ) and not NuxtJS is that it lacks any HTML/DOM everything is created dynamically through Javascript at runtime when browser fetches your JS files. So all that a web crawler will see is a blank page and hence there down goes your ranking. There are several components to good page rankings that are meta information, hydration, image optimization, etc. **NuxtJS** handles it all so that we get good page rankings.

[https://www.youtube.com/watch?v=IRKx97XfiYI](https://www.youtube.com/watch?v=IRKx97XfiYI)

The above video was just a short introduction to deep dive into NuxtJS read this blog. Dont be afraid by its length its mostly code snippets and image.

[Getting Started With Nuxt - Smashing Magazine](https://www.smashingmagazine.com/2020/04/getting-started-nuxt/)

NuxtJS handles separation of concerns for us using its directory structure which separates components, pages, static, assets, etc.

[Directory Structure](https://nuxtjs.org/docs/2.x/get-started/directory-structure)

The framework has certain special component that are needed for its routing as well as for prefetching optimizations. `Nuxt` and `nuxt-link` most important ones.

[Nuxt Components](https://nuxtjs.org/docs/2.x/features/nuxt-components)

The Component directory will store in all your components that you can then import into your pages or even bigger components.

[Components directory](https://nuxtjs.org/docs/2.x/directory-structure/components)

Remember we added `script` tag in head so that we call handle `auth` and `no_auth` . Middleware does a similar task where it can be added to perform some operation before page loads.

[Middleware directory](https://nuxtjs.org/docs/2.x/directory-structure/middleware)

## Advanced Features

[Class and Style Bindings - Vue.js](https://vuejs.org/v2/guide/class-and-style.html)

[Components Basics - Vue.js](https://vuejs.org/v2/guide/components.html#Listening-to-Child-Components-Events)

## Optional

### Vue 3 One Piece

Vue3 introduced several new features biggest of which is the composition api. You don't need it but it will certainly make your task and separation of concerns easier.

<div class="container">
  <iframe class="responsive-iframe" width="560" height="315" src="https://www.youtube-nocookie.com/embed/8jOVi4fRSKo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Axios with Vue

[Using Axios to Consume APIs - Vue.js](http://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html)

## Challenges and Submission

This week will again provide you will a UI ready Todo frontend Application and you will have to integrate the API into using VueJS tooling.

If you see **lang=**"**ts"** or **.ts** somewhere dont worry its just typescript a super set of javascript which you dont need to worry about as of now its only there to provide you with code completions to make your life easy.

At some places **setup** function has been used for providing access to **Composition API** which you dont need to you are to continue with **Options API.** Thats the default for all your tasks except login that much you can handle :)

### Useful Extensions

These extension will help you debug your code better and also format your code to align with checks. Vetur and WindiCSS ( Faster TailwindCSS ) provides you with intellisense and code completions.

[Vue.js devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/ljjemllljcmogpfapbkkighbhhppjdbg?hl=en)

[Vetur](https://vuejs.github.io/vetur/)

[windicss/windicss-intellisense](https://github.com/windicss/windicss-intellisense)

[ESLint - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

[Prettier - Code formatter - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

**So much for learning, here is your next Assignment!**

Remember to ask for help wherever required!

### Submission Guidelines

[COPS-IITBHU/csoc-2021-task-3-vue](https://github.com/COPS-IITBHU/csoc-2021-task-3-vue)

**All the details of the task are provided in the README.md file.**

**As you are aware, you need to fork from and the repository, clone the forked repository, complete the task, commit and push your changes and finally open the pull request back here.**
