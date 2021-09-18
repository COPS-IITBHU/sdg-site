---
title: My first blog post
image: first-post.jpg
tags:
  - Front-end
  - Programming
  - Career
---

# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading
## Emphasis
**This is bold text**
_This is italic text_
~~Strikethrough~~
## Blockquotes
> Example of a very smart quote here
## Lists
Unordered:
- Create a list by starting a line with `+`, `-`, or `*`
- Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
  - Ac tristique libero volutpat at
Ordered:
1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa
## Code
Inline `code`
Block code "fences"
```js
var foo = function (bar) {
  return bar++
}
console.log(foo(5))
```
## Links
[link text](http://dev.nodeca.com)
[link with title](http://nodeca.github.io/pica/demo/ 'title text!')

<template>
  <article class="container mx-auto my-10">
    <header class="text-4xl text-center font-bold">
      {{ article.title }}
      <p class="text-xl">
        {{ article.createdAt | formatDate }}
      </p>
    </header>
    <nuxt-content :document="article" class="w-3/4 mx-auto py-6" />
    <nuxt-link to="/blog" class="text-xl ml-64 font-bold">
      🔙 Go Back
    </nuxt-link>
  </article>
</template>

<script>
export default {
  async asyncData ({ $content, app, params }) {
    const { slug } = params
    let article
    try {
      article = await $content(`${app.i18n.locale}/blog`, slug).fetch()
    } catch (error) {
      try {
        article = await $content(
          `${app.i18n.defaultLocale}/blog`,
          slug
        ).fetch()
      } catch (error) {
        return error({ statusCode: 404, message: 'Page not found' })
      }
    }
    return {
      article
    }
  }
}
</script>

<style>
.nuxt-content {
  width: 700px;
}
.nuxt-content h2 {
  font-weight: bold;
  font-size: 20px;
  margin-top: 15px;
}
.nuxt-content p {
  margin-top: 5px;
}
/* .icon.icon-link {
  background-image: url("~assets/hashtag.svg");
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
} */
</style>