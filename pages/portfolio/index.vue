<template>
  <section class="overflow-hidden">
    <div class="h-50vh relative z-1 bg-hex-1f2124 lg:text-xl w-100%">
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
          class="z-0 absolute w-100% inset-0 h-40vh"
          color="#ccc"
          :particles-number="70"
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
          m-auto
          w-150
          md:w-200
          lg:w-350 lg:p-20
          drop-shadow-sm
          z-1
          relative
        "
      >
        <div
          class="
            w-80vw
            md:w-65
            lg:w-95
            shadow-xl
            m-auto
            mx-10
            md:float-left
            lg:float-left
            p-10
            text-stroke-blue-gray-800 text-xl text-center
            rounded-3xl
          "
        >
          <nuxt-img src="/coding.png" alt="sdg" class="float-left w-12 h-12" />
          <h2 class="block text-right text-lg m-auto">Software Development</h2>
          <a
            href="#mem"
            class="
              bg-hex-8c4d79
              hover:bg-hex-5a003f
              text-white text-center text-sm
              px-2
              py-2
              font-500
              mb-10
              rounded
            "
            @click="showSdg()"
          >
            View Team
          </a>
        </div>
        <div
          class="
            w-80vw
            md:w-65
            lg:w-95
            shadow-xl
            m-auto
            mx-10
            md:float-right
            lg:float-right
            p-10
            text-stroke-blue-gray-800 text-xl text-center
            rounded-3xl
          "
        >
          <nuxt-img
            src="/binary-code.png"
            alt="cp"
            class="float-left w-12 h-12"
          />
          <h2 class="text-md m-auto">Competitive Programming</h2>
          <a
            href="#mem"
            class="
              bg-hex-8c4d79
              hover:bg-hex-5a003f
              text-white text-center
              py-2
              px-2
              text-sm
              font-500
              mb-10
              rounded
            "
            @click="showCP()"
          >
            View Team
          </a>
        </div>
        <nuxt-img
          src="/octocat.png"
          alt="octacat"
          class="m-auto w-40 md:w-60 lg:w-70 mt-20 mx-25 md:mx-75"
        />
        <div
          class="
            w-80vw
            md:w-65
            lg:w-85
            m-auto
            mx-10
            md:float-right
            lg:float-right
            shadow-xl
            p-10
            text-stroke-blue-gray-800 text-xl text-center
            rounded-3xl
          "
        >
          <nuxt-img
            src="/machine-learning.png"
            alt="sdg"
            class="float-left w-15 h-15"
          />
          <h2 class="text-lg m-auto">Machine Learning</h2>
          <a
            href="#mem"
            class="
              bg-hex-8c4d79
              hover:bg-hex-5a003f
              text-white text-center
              py-2
              px-2
              text-sm
              font-500
              mb-10
              rounded
            "
            @click="showML()"
          >
            View Team
          </a>
        </div>

        <div
          class="
            overflow-hidden
            w-80vw
            md:w-65
            lg:w-85
            shadow-xl
            m-auto
            mx-10
            md:float-left
            lg:float-left
            p-10
            text-stroke-blue-gray-800 text-xl text-center
            rounded-3xl
          "
        >
          <nuxt-img
            src="/cyber-security.png"
            alt="sdg"
            class="float-left w-15 h-15"
          />
          <h2 class="text-lg m-auto">Infosec</h2>
          <a
            href="#mem"
            class="
              bg-hex-8c4d79
              hover:bg-hex-5a003f
              text-white text-center
              py-2
              px-2
              text-sm
              font-500
              mb-10
              rounded
            "
            @click="showInfosec"
          >
            View Team
          </a>
        </div>
      </div>
    </transition>
    <div class="text-center mt-20">
      <h2
        v-if="showCard"
        class="text-center text-3xl md:text-4xl lg:text-6xl mt-50"
      >
        Software Development Group
      </h2>
      <h2
        v-if="showCpCard"
        class="text-center text-3xl md:text-4xl lg:text-6xl mt-50"
      >
        Competitive Programming Group
      </h2>
      <h2
        v-if="showMlCard"
        class="text-center text-3xl md:text-4xl lg:text-6xl mt-50"
      >
        Machine Learning Group
      </h2>
      <h2
        v-if="showInfosecCard"
        class="text-center text-2xl md:text-4xl lg:text-6xl mt-50"
      >
        InfoSec Group
      </h2>
      <div v-for="member in members" id="mem" :key="member" class="m-auto">
        <transition appear @before-enter="beforeEnter" @enter="enter">
          <sdgCard
            v-show="showCard"
            class="w-120 md:w-220 lg:w-320 m-auto px-10 flex md:block lg:block"
          />
        </transition>
        <transition appear @before-enter="beforeEnter" @enter="enter">
          <cpCard
            v-show="showCpCard"
            class="w-120 md:w-220 lg:w-320 m-auto px-10 flex md:block lg:block"
          />
        </transition>
        <transition appear @before-enter="beforeEnter" @enter="enter">
          <mlCard
            v-show="showMlCard"
            class="w-120 md:w-220 lg:w-320 m-auto px-10 flex md:block lg:block"
          />
        </transition>
        <transition appear @before-enter="beforeEnter" @enter="enter">
          <infosecCard
            v-show="showInfosecCard"
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
      showCard: false,
      showCpCard: false,
      showMlCard: false,
      showInfosecCard: false,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 1000);
    });
  },
  methods: {
    showSdg() {
      this.showCard = true;
      this.showCpCard = false;
      this.showInfosecCard = false;
      this.showMlCard = false;
    },
    showCP() {
      this.showCpCard = true;
      this.showCard = false;
      this.showInfosecCard = false;
      this.showMlCard = false;
    },
    showML() {
      this.showMlCard = true;
      this.showCard = false;
      this.showCpCard = false;
      this.showInfosecCard = false;
    },
    showInfosec() {
      this.showInfosecCard = true;
      this.showCpCard = false;
      this.showMlCard = false;
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
body {
  scroll-behavior: smooth;
}
</style>
