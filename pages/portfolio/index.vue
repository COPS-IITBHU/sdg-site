<template>
  <section class="overflow-hidden">
    <div class="h-35vh relative z-1 bg-hex-1f2124 lg:text-xl w-100%">
      <transition appear @before-enter="beforeEnter" @enter="enter">
        <h2
          class="
            text-white text-4xl
            md:text-5xl
            lg:text-7xl
            font-mono font-700
            text-center
            p-10
          "
        >
          Meet the Team
        </h2>
      </transition>
      <transition appear @before-enter="beforeEnter" @enter="enter">
        <p
          class="
            w-80
            md:w-200
            lg:w-300
            m-auto
            text-gray-300
            font-400
            text-lg
            md:text-xl
            sm:text-md
            text-center
          "
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus sit
          vitae pariatur, debitis maiores quisquam deleniti impedit quae dolores
          voluptatum repellendus explicabo natus, tenetur nostrum
          exercitationem. Voluptates cupiditate quo reiciendis.
        </p>
      </transition>
      <client-only>
        <Particles
          class="z-0 absolute w-100% inset-0 h-35vh"
          color="#ccc"
          :particles-number="100"
          shape-type="circle"
          :particle-size="4"
          movement-direction="top-left"
          lines-color="#dedede"
          :line-linked="true"
          :move-speed="1.5"
        />
      </client-only>
    </div>
    <transition appear @before-enter="beforeEnter" @enter="enter">
      <div
        class="
          -mt-14
          w-screen
          md:w-200
          lg:w-350 lg:p-20
          drop-shadow-sm
          z-1
          relative
        "
      >
        <div class="nav flex">
          <a href="#mem" class="nav-elements w-1/2" @click="showAll()">
            All Team
          </a>
          <a href="#mem" class="nav-elements w-1/2" @click="showSdg()">
            Developers
          </a>
          <a href="#mem" class="nav-elements w-1/2" @click="showAlums()">
            Alums
          </a>
        </div>
      </div>
    </transition>
    <div class="text-center">
      <h2
        v-if="showCard && showAlum"
        class="text-white text-center text-3xl md:text-4xl lg:text-6xl"
      >
        ALL TEAM
      </h2>
      <h2
        v-if="showCard && !showAlum"
        class="text-white text-center text-3xl md:text-4xl lg:text-6xl"
      >
        DEVELOPER TEAM
      </h2>
      <div v-for="member in members" id="mem" :key="member" class="m-auto">
        <transition appear @before-enter="beforeEnter" @enter="enter">
          <sdgCard
            v-show="showCard"
            :name="member.name"
            :title="member.title"
            :social-media-link="member.link"
            :github-link="member.github"
            :image-url="`${member.github}.png`"
            class="w-120 md:w-220 lg:w-320 m-auto px-10 flex md:block lg:block"
          />
        </transition>
      </div>
      <h2
        v-if="showAlum && !showCard"
        class="text-white text-center text-3xl md:text-4xl lg:text-6xl"
      >
        ALUMNI
      </h2>
      <div v-for="alum in alums" id="mem" :key="alum" class="m-auto">
        <transition appear @before-enter="beforeEnter" @enter="enter">
          <sdgCard
            v-show="showAlum"
            :name="alum.name"
            :title="alum.title"
            :social-media-link="alum.link"
            :github-link="alum.github"
            :image-url="`${alum.github}.png`"
            class="w-120 md:w-220 lg:w-320 m-auto px-10 flex md:block lg:block"
          />
        </transition>
      </div>
    </div>
  </section>
</template>
<script>
import { defineComponent } from '@nuxtjs/composition-api';
export default defineComponent({
  components: {},
  data() {
    return {
      members: 8,
      alums: 8,
      showCard: false,
      showAlum: false,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 1000);
    });
    this.fetchMembers();
    this.fetchAlums();
    this.showAll();
  },
  methods: {
    async fetchMembers() {
      const data = await this.$content('members').fetch();
      this.members = data;
    },
    async fetchAlums() {
      const data = await this.$content('alums').fetch();
      this.alums = data;
    },
    showAll() {
      this.showCard = true;
      this.showAlum = true;
    },
    showSdg() {
      this.showCard = true;
      this.showAlum = false;
    },
    showAlums() {
      this.showAlum = true;
      this.showCard = false;
    },
    beforeEnter(el) {
      el.style.opacity = 0;
      el.style.transform = 'translateY(-60px)';
    },
    enter(el) {
      this.$gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'bounce.out',
      });
    },
  },
});
</script>
<style>
.nav {
  margin-top: 5px;
  margin-inline: auto;
  /* width: 150px; */
}
.nav-elements {
  text-align: center;
  font-size: 25px;
  font-family: 'Roboto', monospace;
  letter-spacing: 2px;
  /* border-bottom: 2px solid rgb(130, 247, 247);
  transition: 0.3s; */
  color: rgb(130, 247, 247);
}
body {
  scroll-behavior: smooth;
}
</style>
