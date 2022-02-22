<template>
  <div>
    <div class="flex justify-center h-0">
      <section
        class="
          container
          items-center
          flex-col flex
          relative
          z-2
          top-48
          max-w-lg
          md:max-w-2xl
        "
      >
        <h1
          data-text="SDG"
          class="text-6xl sm:text-7xl md:text-9xl xl:text-11xl antialiased py-4 text-center"
        >
          SDG
        </h1>
        <p class="antialiased text-shadow-md text-center px-4 text-lg lg:text-xl">
          <span class="font-bold text-xl md:text-3xl mb-8 font-display block">
            Club Of ProgrammerS IIT (BHU), Varanasi</span
          >
          We at Software Development Group are a bunch of designers and developers who aim to
          encourage the development of technology and innovation in IIT (BHU)
          campus (and beyond) by learning, sharing knowledge and solving
          problems.
        </p>
      </section>
    </div>
    <section id="box" class="flex flex-col overflow-hidden w-full h-screen">
      <div
        v-for="index in 27"
        :key="index"
        class="
          row
          transform
          -rotate-30
          relative
          flex
          p-0
          whitespace-nowrap
          text-6xl
          -top-110
        "
      >
        <div class="flex">
          <Icon v-for="name in iconRow1" :key="name" :name="name" />
        </div>
        <div class="flex">
          <Icon v-for="name in iconRow2" :key="name" :name="name" />
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  data () {
    return {
      iconRow1: [
        'bi:github',
        'bx:bxl-apple',
        'entypo:code',
        'ion:logo-angular',
        'dashicons:database',
        'cib:octopus-deploy',
        'fluent:branch-fork-24-filled',
        'ion:logo-linkedin',
        'akar-icons:react-fill',
        'fa-brands:js-square',
        'whh:ironman',
        'la:node-js',
        'fa-solid:robot',
        'bx:bx-coffee-togo',
        'bi:headset',
        'teenyicons:npm-outline',
        'ci:facebook',
        'fluent:people-team-16-regular',
        'fa-solid:quidditch',
        'fluent:food-pizza-20-filled'
      ],
      iconRow2: [
        'akar-icons:clock',
        'ic:baseline-cloud-download',
        'bi:camera-fill',
        'uis:calender',
        'la:reddit',
        'bx:bxs-book-bookmark',
        'ion:logo-python',
        'la:github-alt',
        'fluent:bluetooth-24-filled',
        'fa-solid:user-secret',
        'akar-icons:discord-fill',
        'ic:outline-android',
        'grommet-icons:technology',
        'cib:google-chrome',
        'bx:bxl-vuejs',
        'bx:bxs-trash',
        'grommet-icons:gamepad',
        'bx:bxs-star',
        'bx:bxl-telegram',
        'ant-design:html5-filled',
        'majesticons:ghost'
      ]
    }
  }
})
</script>
<style scoped>

.row div {
  animation: animate1 80s linear infinite;
  animation-delay: -80s;
}

.row div:nth-child(2) {
  animation: animate2 80s linear infinite;
  animation-delay: -40s;
}
.row:nth-child(even) div {
  animation: animate3 80s linear infinite;
  animation-delay: -80s;
}

.row:nth-child(even) div:nth-child(2) {
  animation: animate4 80s linear infinite;
  animation-delay: -40s;
}

@keyframes animate1 {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes animate2 {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-200%);
  }
}

@keyframes animate3 {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes animate4 {
  0% {
    transform: translateX(-200%);
  }
  100% {
    transform: translateX(0%);
  }
}

.container h1 {
  color: rgb(0, 238, 255);
}
.container p {
  color: aliceblue;
}

.container h1::before {
  position: absolute;
  content: attr(data-text);
  text-shadow: 0px 0px 20px rgb(0, 238, 255);
  filter: blur(10px) brightness(0);
  animation: flicker 5s linear infinite;
  animation-delay: 1s;
}
@keyframes flicker {
  0% {
    filter: blur(5px) brightness(1);
  }
  3% {
    filter: blur(5px) brightness(0);
  }
  6% {
    filter: blur(5px) brightness(0);
  }
  7% {
    filter: blur(5px) brightness(1);
  }
  8% {
    filter: blur(5px) brightness(0);
  }
  9% {
    filter: blur(5px) brightness(1);
  }
  10% {
    filter: blur(5px) brightness(0);
  }
  20% {
    filter: blur(5px) brightness(1);
  }
  50% {
    filter: blur(5px) brightness(1);
  }
  99% {
    filter: blur(5px) brightness(0);
  }
  100% {
    filter: blur(5px) brightness(1);
  }
}
</style>
