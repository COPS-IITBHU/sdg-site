<template>
  <nav>
    <div
      class="box fixed flex w-30px h-30px top-50px right-50px"
      @click="play"
      @keydown="play"
    >
      <div class="burgers w-3/5 h-1/10 bg-black"></div>
      <div class="burgers w-4/5 h-1/10 bg-black"></div>
      <div class="burgers w-full h-1/10 bg-black"></div>
    </div>
    <div v-if="show" class="container fixed flex w-full h-screen">
      <div class="circle fixed w-0 h-0"></div>
      <div class="flex fixed">
        <ul class="menu fixed top-half left-half">
          <nuxt-link to="/">
            <li
              class="list_item py-20px my-40px"
              @click="pause"
              @keydown="pause"
            >
              Home
            </li>
          </nuxt-link>
          <nuxt-link to="/projects">
            <li
              class="list_item py-20px my-40px mx-15px"
              @click="pause"
              @keydown="pause"
            >
              Projects
            </li>
          </nuxt-link>
          <nuxt-link to="/">
            <li
              class="list_item py-20px my-40px"
              @click="pause"
              @keydown="pause"
            >
              Blogs
            </li>
          </nuxt-link>
          <nuxt-link to="/">
            <li
              class="list_item py-20px my-40px"
              @click="pause"
              @keydown="pause"
            >
              About Us
            </li>
          </nuxt-link>
        </ul>
        <div
          class="
            close
            justify-center
            items-center
            opacity-0
            flex-col
            hidden
            cursor-pointer
            fixed
            w-30px
            h-30px
            top-50px
            right-50px
          "
          @click="pause"
          @keydown="pause"
        >
          <div class="w-full h-1/10 absolute bg-white cross1"></div>
          <div class="w-full h-1/10 absolute bg-white cross2"></div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  data() {
    return {
      show: false,
      t1: null,
      hover: false,
    };
  },
  mounted() {},
  methods: {
    showEl() {
      this.show = !this.show;
    },
    async play() {
      await this.showEl();
      this.t1 = this.$gsap
        .timeline({ paused: true })
        .to('.circle', { duration: 0.5, width: '300%', height: '300vh' })
        .to('.list_item', { duration: 0.3, y: 0, stagger: 0.15, opacity: 1 })
        .to('.close', { display: 'block' })
        .to('.close', { opacity: 1, duration: 0.07 });
      this.t1.play();
    },
    async pause() {
      await this.t1.reverse();
      this.t1 = null;
      this.showEl();
    },
  },
});
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

* {
  margin: 0;
  padding: 0;
}

.container {
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 1;
}

.box {
  cursor: pointer;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
}

.circle {
  clip-path: circle(50%);
  background: #2c2525;
}

.menu {
  list-style: none;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.list_item {
  position: relative;
  font-size: 35px;
  letter-spacing: 12px;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
  color: #ffffff;
  text-align: center;
  transform: translate(0, 50%);
  opacity: 0;
}

.list_item:before {
  content: ' ';
  display: block;
  position: absolute;
  right: 0;
  top: -2px;
  width: 0;
  height: 100%;
  border-bottom: 2px solid white;
  transition: 0.3s;
}

.list_item:hover:before {
  width: 50%;
}

.list_item:after {
  content: ' ';
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  top: -2px;
  height: 100%;
  border-bottom: 2px solid white;
  transition: 0.3s;
}

.list_item:hover:after {
  width: 50%;
}
.cross1 {
  transform: rotate(45deg);
}
.cross2 {
  transform: rotate(-45deg);
}
</style>
