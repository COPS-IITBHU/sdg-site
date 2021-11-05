<template>
  <main class="text-center bg-dark-400">
    <h2
      class="
        text-white text-4xl
        hover:text-green-300
        sm:text-4xl
        md:text-5xl
        lg:text-7xl
        font-mono font-700
        text-center
        p-10
      "
    >
      About Us
    </h2>
    <h3
      class="
        text-white text-3xl
        hover:text-green-300
        sm:text-xl sm:pt-1 sm:pb-1
        md:text-2xl md:pt-3 md:pb-1
        lg:text-4xl lg:pt-5 lg:pb-5
      "
    >
      ACHIEVEMENTS
    </h3>
    <achievementsCarousel :achievements="achievements" />
  </main>
</template>

<script>
import AchievementsCarousel from '~/components/achievementsCarousel.vue';
export default {
  components: { AchievementsCarousel },
  data() {
    return {
      achievements: [],
    };
  },
  mounted() {
    this.fetchdata();
  },
  methods: {
    async fetchdata() {
      const data = await this.$content('achievements').fetch();
      this.achievements = data;
    },
  },
};
</script>
<style scoped></style>
