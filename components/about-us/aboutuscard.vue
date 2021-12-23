<template>
  <section class="w-9/10 mx-auto my-0px">
    <div
      class="
        cards
        <lg:(flex-col-reverse
        mb-10)
        flex flex-row
        justify-between
        items-center
        flex-wrap
        py-20px
        px-30px
      "
      id="card_1"
    >
      <div class="text <lg:(w-3/4 mt-5 h-1/3 text-center) w-1/2">
        <h1 class="mb-5px font-medium text-2xl text-gray-50">WHAT IS SDG?</h1>
        <p class="text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tortor
          eros, consequat sit amet euismod rutrum, ultricies ut dui. Donec et
          dui non lorem tincidunt scelerisque ut eu lacus. Nullam a nunc in nisi
          varius suscipit at vitae ante. Nulla magna ex, laoreet a molestie eu,
          sagittis id augue. Sed molestie hendrerit ex eu blandit. Nam ut
          imperdiet purus. Fusce pretium sollicitudin dapibus. Etiam gravida
          fermentum orci semper luctus. Maecenas est arcu, sagittis non purus
          vitae, blandit egestas nibh.
        </p>
      </div>
      <div
        class="
          figure
          <lg:(w-full
          m-0
          h-1/3)
          flex
          justify-center
          items-center
          w-2/5
        "
      >
        <nuxt-img
          src="/aboutus/1.jpeg"
          class="<lg:(w-1/2 h-1/2) w-full h-full"
          alt="WHAT IS SDG?"
        />
      </div>
    </div>

    <nuxt-img
      src="/aboutus/4.png"
      class="arrow <lg:(hidden) w-3/5 mx-auto my-0"
      alt="arrow"
    />

    <div
      class="
        cards
        <lg:(flex-col
        mb-10)
        flex flex-row
        justify-between
        items-center
        flex-wrap
        py-20px
        px-30px
      "
      id="card_2"
    >
      <div
        class="
          figure
          <lg:(w-full
          m-0
          h-1/3)
          flex
          justify-center
          items-center
          w-2/5
        "
      >
        <nuxt-img
          src="/aboutus/2.jpeg"
          class="<lg:(w-1/2 h-1/2) w-full h-full"
          alt="WHAT WE DO?"
        />
      </div>
      <div class="text <lg:(w-3/4 mt-5 h-1/3 text-center) w-1/2">
        <h1 class="mb-5px font-medium text-2xl text-gray-50">WHAT WE DO?</h1>
        <p class="text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tortor
          eros, consequat sit amet euismod rutrum, ultricies ut dui. Donec et
          dui non lorem tincidunt scelerisque ut eu lacus. Nullam a nunc in nisi
          varius suscipit at vitae ante. Nulla magna ex, laoreet a molestie eu,
          sagittis id augue. Sed molestie hendrerit ex eu blandit. Nam ut
          imperdiet purus. Fusce pretium sollicitudin dapibus. Etiam gravida
          fermentum orci semper luctus. Maecenas est arcu, sagittis non purus
          vitae, blandit egestas nibh.
        </p>
      </div>
    </div>

    <nuxt-img
      src="/aboutus/4_2.png"
      class="arrow <lg:(hidden) w-3/5 mx-auto my-0"
      alt="arrow"
    />

    <div
      class="
        cards
        <lg:(flex-col-reverse
        mb-10)
        flex flex-row
        justify-between
        items-center
        flex-wrap
        py-20px
        px-30px
      "
      id="card_2"
    >
      <div class="text <lg:(w-3/4 mt-5 h-1/3 text-center) w-1/2">
        <h1 class="mb-5px font-medium text-2xl text-gray-50">
          OUR AREAS OF INTEREST
        </h1>
        <p class="text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tortor
          eros, consequat sit amet euismod rutrum, ultricies ut dui. Donec et
          dui non lorem tincidunt scelerisque ut eu lacus. Nullam a nunc in nisi
          varius suscipit at vitae ante. Nulla magna ex, laoreet a molestie eu,
          sagittis id augue. Sed molestie hendrerit ex eu blandit. Nam ut
          imperdiet purus. Fusce pretium sollicitudin dapibus. Etiam gravida
          fermentum orci semper luctus. Maecenas est arcu, sagittis non purus
          vitae, blandit egestas nibh.
        </p>
      </div>
      <div
        class="
          figure
          <lg:(w-full
          m-0
          h-1/3)
          flex
          justify-center
          items-center
          w-2/5
        "
      >
        <nuxt-img
          src="/aboutus/3.jpeg"
          class="<lg:(w-1/2 h-1/2) w-full h-full"
          alt="OUR AREAS OF INTEREST"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({});
</script>

<style scoped>
img {
  border-radius: 25vh;
}
</style>
