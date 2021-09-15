<template>
  <main>
    <header>
      <Navbar />
    </header>
    <Nuxt />
  </main>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api';
import Navbar from '@/components/navbar.vue';
export default defineComponent({
  components: {
    Navbar,
  },
  data() {
    return {
      title: 'SDG Site',
    };
  },
});
</script>
