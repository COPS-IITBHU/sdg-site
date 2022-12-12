<template>
  <footer class="p-4 bg-black shadow-lg shadow-cyan-500 md:flex md:items-center md:justify-between md:p-2 dark:bg-white-800">
    <span class="text-sm text-white-500 sm:text-center dark:text-white-400">© {{ new Date().getFullYear() }}<a href="/" class="hover:underline">   SDG™</a>. All Rights Reserved.
    </span>
    <a target="_blank" rel="noreferrer" href="https://www.copsiitbhu.co.in/"><img src="/COPS-Logo.webp" height="80" width="80" alt=""></a>
    <ul class="flex flex-wrap items-center order-2 md:order-3">
      <li v-for="x in quicklinks" :key="x.url" class="mr-4 hover:text-lg md:mr-6 ">
        <NuxtLink :to="x.url" class="flex flex-wrap items-center mt-3 text-base text-white-500 dark:text-white-400 sm:mt-0 hover:text-yellow-600" no-prefetch>{{ x.content }}</NuxtLink>
      </li>
    </ul>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'Footer',
  data  () {
    return {
      quicklinks: [
        {
          url: '/portfolio',
          content: 'Team'
        },
        {
          url: '/aboutus',
          content: 'About'
        },
        {
          url: '/blog',
          content: 'Blog'
        },
        {
          url: '/contact',
          content: 'Contact'
        }
      ]
    }
  }
})
</script>
