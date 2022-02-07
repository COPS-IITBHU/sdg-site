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
    <carousel3d v-if="!$fetchState.pending">
      <slide v-for="(slide, i) in slides" :key="i" :index="i">
        <h1><b>{{ slide.title }}</b></h1>
        <p class="p-10">
          {{ slide.description }}
          <br /><a style="color:blue" v-if="slide.showlink" :href="slide.link">{{
            slide.linkdes
          }}</a>
        </p>
      </slide>
    </carousel3d>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import aboutuscard from '~/components/about-us/aboutuscard.vue';
import aboutuslogo from '~/components/about-us/aboutuslogo.vue';
import achievementslogo from '~/components/about-us/achievementslogo.vue';
import youtube from '~/components/about-us/youtube.vue';
import carousel3d from '~/components/about-us/carousel/carousel-3d.vue';
import slide from '~/components/about-us/carousel/carousel-slide.vue';

export default Vue.extend({
  components: {
    aboutuscard,
    aboutuslogo,
    youtube,
    achievementslogo,
    carousel3d,
    slide,
  },
  data() {
    return {
      slides: [] as any,
    };
  },
  async fetch () {
    const fetchedData = await this.$content('achievements').fetch()
    this.slides = fetchedData
  },
});
</script>

<style scoped>
.quote {
  font-family: 'Times New Roman', Times, serif;
}
</style>
