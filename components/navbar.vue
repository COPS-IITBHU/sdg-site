<template>
  <nav>
    <div class="box" @click="play" @keydown="play">
      <div class="burgers b1"></div>
      <div class="burgers b2"></div>
      <div class="burgers b3"></div>
    </div>
    <div v-if="show" class="container">
      <div class="circle"></div>
      <div class="menu_container">
        <ul class="menu">
          <li class="list_item" @click="pause" @keydown="pause">
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li class="list_item" @click="pause" @keydown="pause">
            <nuxt-link to="/projects">Projects</nuxt-link>
          </li>
          <li class="list_item" @click="pause" @keydown="pause">
            <nuxt-link to="/">Blogs</nuxt-link>
          </li>
          <li class="list_item" @click="pause" @keydown="pause">
            <nuxt-link to="/">About Us</nuxt-link>
          </li>
        </ul>
        <div class="close" @click="pause" @keydown="pause">
          <div class="cross cross1"></div>
          <div class="cross cross2"></div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api';
import gsap from 'gsap';

export default defineComponent({
  data() {
    return {
      show: false,
      t1: null,
    };
  },
  mounted() {},
  methods: {
    showEl() {
      this.show = !this.show;
    },
    async play() {
      await this.showEl();
      this.t1 = gsap
        .timeline({ paused: true })
        .to('.circle', { duration: 0.5, width: '300%', height: '300vh' })
        .to('.menu_container', { display: 'flex' })
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: fixed;
}

.box {
  position: fixed;
  top: 50px;
  right: 50px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
}

.burgers {
  height: 10%;
  background: #000000;
}
.b1 {
  width: 60%;
}
.b2 {
  width: 80%;
}
.b3 {
  width: 100%;
}

.circle {
  clip-path: circle(50%);
  background: #30663e;
  width: 0;
  height: 0;
  position: fixed;
}

.menu_container {
  top: 20%;
  position: fixed;
  display: flex;
}

.menu {
  left: 0;
  list-style: none;
}

.list_item {
  position: relative;
  padding: 20px 15px;
  margin: 40px 15px;
  font-size: 35px;
  letter-spacing: 12px;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
  color: #ffffff;
  text-align: center;
  transform: translate(0, 50%);
  opacity: 0;
}

.list_item::before {
  display: block;
  position: absolute;
  right: 0;
  top: -2px;
  width: 0;
  height: 100%;
  border-bottom: 2px solid white;
  transition: 0.3s;
}

.list_item:hover::before {
  width: 50%;
}

.list_item::after {
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

.list_item:hover::after {
  width: 50%;
}

.close {
  width: 30px;
  height: 30px;
  position: fixed;
  top: 50px;
  right: 50px;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  cursor: pointer;
}

.cross {
  position: absolute;
  width: 100%;
  height: 10%;
  background: #ffffff;
}

.cross1 {
  transform: rotate(45deg);
}

.cross2 {
  transform: rotate(-45deg);
}
</style>
