<template>
  <main class="text-center my-10">
    <h1 class="text-3xl hover:text-teal-500 py-4">Let's Get Started</h1>
    <figure class="text-xl">
      <span>{{ counter }}</span>
      <sample-button inner-text="+" :click-function="incrementCounter" />
      <sample-button inner-text="-" :click-function="decrementCounter" />
    </figure>
  </main>
</template>

<script setup lang="ts">
import { ref } from '@nuxtjs/composition-api';

const counter = ref(0);

const incrementCounter = () => (counter.value += 1);
const decrementCounter = () => (counter.value -= 1);
</script>
