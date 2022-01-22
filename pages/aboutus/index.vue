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
    <carousel3d>
      <slide v-for="(slide, i) in slides" :key="i" :index="i">
        <h1>{{ slide.title }}</h1>
        <p>{{ slide.desc }}</p>
      </slide>
    </carousel3d>
    <!-- <achievementsCarousel :achievements="achievements"/> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import aboutuscard from '~/components/about-us/aboutuscard.vue';
import aboutuslogo from '~/components/about-us/aboutuslogo.vue';
import achievementslogo from '~/components/about-us/achievementslogo.vue';
// import achievementsCarousel from '~/components/about-us/achievementsCarousel.vue';
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
    // achievementsCarousel,
  },
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
  data() {
    return {
      slides: [
        {
          title: 'Slide 1',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, maxime.',
          src: 'https://placehold.it/360x270',
        },
        {
          title: 'Slide 2',
          desc: 'Lorem ipsum dolor sit amet ',
          src: 'https://placehold.it/360x270',
        },
        {
          title: 'Slide 3',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
          src: 'https://placehold.it/360x270',
        },
        {
          title: 'Slide 4',
          desc: 'Lorem ipsum dolor sit amet,  Enim, maxime.',
          src: 'https://placehold.it/360x270',
        },
        {
          title: 'Slide 5',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, maxime.',
          src: 'https://placehold.it/360x270',
        },
        {
          title: 'Slide 6',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, maxime.',
          src: 'https://placehold.it/360x270',
        },
        {
          title: 'Slide 7',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, maxime.',
          src: 'https://placehold.it/360x270',
        },
        {
          title: 'Slide 8',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, maxime.',
          src: 'https://placehold.it/360x270',
        },
        {
          title: 'Slide 9',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, maxime.',
          src: 'https://placehold.it/360x270',
        },
        {
          title: 'Slide 10',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, maxime.',
          src: 'https://placehold.it/360x270',
        },
      ],
    };
  },
});
</script>

<style scoped>
.quote {
  font-family: 'Times New Roman', Times, serif;
}
</style>
