<template>
  <button
    class="font-bold border-black border-1 px-4 mx-2"
    @click="clickFunction"
  >
    {{ innerText }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    innerText: {
      type: String,
      default: '',
    },
    clickFunction: {
      type: Function,
      default: () => {},
    },
  },
});
</script>
