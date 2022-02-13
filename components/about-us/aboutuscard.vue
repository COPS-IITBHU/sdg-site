<template>
  <div
    :class="[index&1 ? 'flex-row-reverse': 'flex-row', '<lg:(mb-10 flex-col-reverse) flex justify-between items-center md:px-10 xl:px-20 my-10']"
  >
    <div class="text <lg:(w-3/4 mt-5 h-1/3 text-center) w-1/2">
      <h1 class="mb-5 font-medium text-2xl lg:text-3xl text-gray-50">{{ heading }}</h1>
      <p class="text-gray-300 text-lg text-justify <md:line-clamp-6 <xl:line-clamp-8">
        {{ text }}
      </p>
    </div>
    <div
      class="<lg:w-4/5 flex justify-center items-center w-2/5"
    >
      <nuxt-img
        :src="image"
        height="851"
        width="1280"
        class="rounded-full border-light-100 border-8 object-cover"
        :alt="heading"
        loading="lazy"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    index: {
      type: Number,
      default: 0
    },
    heading: String,
    image: String,
    text: String
  }
})
</script>
