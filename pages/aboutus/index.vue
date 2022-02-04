<template>
  <div>
    <aboutuslogo />
    <h1
      class="
        text-4xl
        my-40px
        mx-auto
        text-center
        quote
        <lg:(text-3xl)
        text-gray-200
      "
    >
      "Nulla rhoncus convallis risus sit amet posuere, <br />
      Integer at porttitor elit."
    </h1>
    <aboutuscard />
    <div class="w-7/10 mx-auto my-140px">
      <youtube />
    </div>
    <achievementslogo />
    <!-- <achievementsCarousel :achievements="achievements"/> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import aboutuscard from '~/components/about-us/aboutuscard.vue'
import aboutuslogo from '~/components/about-us/aboutuslogo.vue'
import achievementslogo from '~/components/about-us/achievementslogo.vue'
// import achievementsCarousel from '~/components/about-us/achievementsCarousel.vue';
import youtube from '~/components/about-us/youtube.vue'

export default Vue.extend({
  components: {
    aboutuscard,
    aboutuslogo,
    youtube,
    achievementslogo
    // achievementsCarousel,
  }
  //  data() {
  //   return {
  //     achievements: [],
  //   };
  // },
  // mounted() {
  //   this.fetchdata();
  // },
  // methods: {
  //   async fetchdata() {
  //     const data = await this.$content('achievements').fetch();
  //     this.achievements = data;
  //   },
  // },
})
</script>

<style scoped>
.quote {
  font-family: 'Times New Roman', Times, serif;
}
</style>
