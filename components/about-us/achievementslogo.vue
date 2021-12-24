<template>
  <section class="flex justify-center items-center h-3/10 mb-20">
    <h1 class="text-center text-8xl <lg:(text-5xl)">
      <span class="mr-20px">OUR</span> ACHIEVEMENTS
    </h1>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Sacramento&display=swap');

h1 {
  text-shadow: 0px 0px 20px rgb(0, 238, 255);
  color: rgb(0, 238, 255);
  animation: blink 7s infinite;
  -webkit-animation: blink 7s infinite;
}

@-webkit-keyframes blink {
  20%,
  24%,
  55% {
    color: #111;
    text-shadow: none;
  }

  0%,
  19%,
  21%,
  23%,
  25%,
  54%,
  56%,
  100% {
    text-shadow: 0px 0px 20px rgb(0, 238, 255);
    color: rgb(0, 238, 255);
  }
}

@keyframes blink {
  20%,
  24%,
  55% {
    color: #111;
    text-shadow: none;
  }

  0%,
  19%,
  21%,
  23%,
  25%,
  54%,
  56%,
  100% {
    text-shadow: 0px 0px 20px rgb(0, 238, 255);
    color: rgb(0, 238, 255);
  }
}
</style>
