<template>
  <div>
    <aboutuslogo />
    <h1 class="text-4xl my-40px mx-auto text-center quote <lg:(text-3xl)">
      "Nulla rhoncus convallis risus sit amet posuere, <br />
      Integer at porttitor elit."
    </h1>
    <aboutuscard />
    <div class="w-7/10 mx-auto my-140px">
      <youtube />
    </div>
    <achievementslogo />
    <!-- <achievementsCarousel/> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import aboutuscard from '~/components/about-us/aboutuscard.vue';
import aboutuslogo from '~/components/about-us/aboutuslogo.vue';
import achievementslogo from '~/components/about-us/achievementslogo.vue';
import youtube from '~/components/about-us/youtube.vue';

export default Vue.extend({
  components: {
    aboutuscard,
    aboutuslogo,
    youtube,
    achievementslogo,
  },
});
</script>

<style scoped>
.quote {
  color: rgb(202, 200, 200);
  font-family: 'Times New Roman', Times, serif;
}
</style>
