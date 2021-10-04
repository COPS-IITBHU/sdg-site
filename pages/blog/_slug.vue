<template>
  <!-- <article class="container mx-auto my-10">
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
  </article> -->
  <article class="grid grid-cols-12 pb-24">
    <div class="w-full col-start-1 col-span-12 grid grid-cols-12">
      <nav class="mt-8 col-span-2 shadow-2xl rounded-lg p-4 self-start">
        <ul class="space-y-2">
          <!-- <li v-for="link of post.toc" :key="link.id">
            <NuxtLink
              class="uppercase tracking-wider text-gray-500 hover:underline"
              :to="`#${link.id}`"
              >{{ link.text }}</NuxtLink
            >
            >
          </li> -->
        </ul>
      </nav>
      <div class="col-start-4 col-span-6 w-full">
        <div>
          <NuxtLink to="/blog" href="/" class="block text-gray-400 mt-8"
            >← Go Back</NuxtLink
          >
          <ul v-if="post.tags" class="flex space-x-3 mt-2">
            <li
              v-for="tag in post.tags"
              :key="tag"
              class="text-gray-400 font-bold"
            >
              {{ tag }}
            </li>
          </ul>
          <h1 class="text-5xl font-black mt-2">{{ post.title }}</h1>
        </div>
        <nuxt-content class="mt-4 prose max-w-none" :document="post" />
      </div>
    </div>
  </article>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  async asyncData({ $content, params }) {
    const { slug } = params;
    let post;
    try {
      post = await $content(`blog`, slug).fetch();
    } catch (error) {
      return { statusCode: 404, message: 'Page not found' };
    }
    return {
      post,
    };
  },
});
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
