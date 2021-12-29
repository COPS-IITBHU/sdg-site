<template>
  <main>
    <header>
      <navbar />
    </header>
    <Nuxt keep-alive />
  </main>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  data() {
    return {
      title: 'SDG Site',
    };
  },
});
</script>
