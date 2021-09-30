<template>
  <div>
    <div class="cont h-100 p-10 m-auto lg:text-xl scrollbar scrollbar-blue-600">
      <transition appear @before-enter="beforeEnter" @enter="enter">
        <h2 class="text-white text-7xl font-mono font-700 text-center">
          Meet the Team
        </h2>
      </transition>
      <transition appear @before-enter="beforeEnter" @enter="enter">
        <p
          class="mt-20 w-300 m-auto text-gray-300 font-400 text-2xl text-center"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus sit
          vitae pariatur, debitis maiores quisquam deleniti impedit quae dolores
          voluptatum repellendus explicabo natus, tenetur nostrum
          exercitationem. Voluptates cupiditate quo reiciendis.
        </p>
      </transition>
      <client-only>
        <Particles
          class="particles z-0"
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
      <div class="p-30 m-auto w-350 h-120 drop-shadow-sm do">
        <div
          class="
            w-85
            h-30
            shadow-xl
            float-left
            p-10
            text-stroke-blue-gray-800 text-xl text-center
            rounded-3xl
          "
        >
          <img
            src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-coding-interface-kiranshastry-lineal-color-kiranshastry.png"
            alt="sdg"
            class="float-left w-12 h-12"
          />
          <h2 class="block text-right text-lg m-auto">Software Development</h2>
          <a
            href="#mem"
            class="
              bg-hex-8c4d79
              hover:bg-hex-5a003f
              text-white text-center
              py-2
              px-4
              text-sm
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
            w-85
            h-30
            shadow-xl
            float-right
            p-10
            text-stroke-blue-gray-800 text-xl text-center
            rounded-3xl
          "
        >
          <img
            src="https://img-premium.flaticon.com/png/512/2115/premium/2115955.png?token=exp=1632721086~hmac=edb5b82a73cd0c1fd935667d495d2b51"
            alt="sdg"
            class="float-left w-12 h-12"
          />
          <h2 class="block text-right text-lg m-auto">
            Competitive Programming
          </h2>
          <a
            href="#mem"
            class="
              bg-hex-8c4d79
              hover:bg-hex-5a003f
              text-white text-center
              py-2
              px-4
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
        <img
          src="https://www.pngkit.com/png/full/63-639012_github-octocat-logo-png-transparent-github-octocat.png"
          alt="octacat"
          class="m-auto w-70 mt-20"
        />
        <div
          class="
            w-85
            h-30
            float-right
            shadow-xl
            p-10
            text-stroke-blue-gray-800 text-xl text-center
            rounded-3xl
          "
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2103/2103626.png"
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
              px-4
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
            w-85
            h-30
            shadow-xl
            float-left
            p-10
            text-stroke-blue-gray-800 text-xl text-center
            rounded-3xl
          "
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2092/2092757.png"
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
              px-4
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
    <div class="">
      <h2 v-if="showCard" class="text-center text-6xl mt-50">
        Software Development Group
      </h2>
      <h2 v-if="showCpCard" class="text-center text-6xl mt-50">
        Competitive Programming Group
      </h2>
      <h2 v-if="showMlCard" class="text-center text-6xl mt-50">
        Machine Learning Group
      </h2>
      <h2 v-if="showInfosecCard" class="text-center text-6xl mt-50">
        InfoSec Group
      </h2>
      <div v-for="member in members" id="mem" :key="member" class="">
        <transition appear @before-enter="beforeEnter" @enter="enter">
          <sdgCard v-show="showCard" />
        </transition>
        <transition appear @before-enter="beforeEnter" @enter="enter">
          <cpCard v-show="showCpCard" />
        </transition>
        <transition appear @before-enter="beforeEnter" @enter="enter">
          <mlCard v-show="showMlCard" />
        </transition>
        <transition appear @before-enter="beforeEnter" @enter="enter">
          <infosecCard v-show="showInfosecCard" />
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from '@nuxtjs/composition-api';
import gsap from 'gsap';
import Particles from '~/components/Particles.vue';
export default defineComponent({
  components: {
    Particles,
  },
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
      gsap.to(el, {
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
.cont {
  background: #1f2124;
  background-size: cover;
  max-width: 100%;
  z-index: 1;
}
.particles {
  position: absolute;
  top: 0;
  width: 100%;
  height: 55vh;
  left: 0;
  z-index: 0;
}
.do {
  z-index: 1;
  position: relative;
}
</style>
