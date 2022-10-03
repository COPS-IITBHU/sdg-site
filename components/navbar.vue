<template>
  <section>
    <nav class="fixed z-100 w-full backdrop-blur-sm backdrop-filter py-4 hidden md:flex justify-between py-4 px-4 items-center">
      <aside class="font-bold text-3xl tracking-widest hover:(scale-125) transform px-8 py-2">
        <nuxt-link to="/">SDG</nuxt-link>
      </aside>
      <ul class="ml-auto flex-row md:flex list-none">
        <li v-for="page in pages" :key="page.url" class="hover:(font-bold scale-125) transform px-8 transition-transform">
          <nuxt-link :to="page.url" :prefetch="page.prefetch">
            {{ page.name }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
    <button
      id="toggle"
      aria-label="navbar-toggle"
      class="
        navbar-toggle
        bg-transparent
        select-none
        border-none
        focus:outline-none
        cursor-pointer
        fixed
        z-100
        top-4
        right-4
        p-0
        md:hidden
      "
      type="button"
      :class="{ active: isActive }"
      v-on="isActive ? { click: closeNavbar } : { click: openNavbar }"
    >
      <svg viewBox="0 0 100 100" width="80">
        <path
          class="line top"
          d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
        />
        <path class="line middle" d="m 30,50 h 40" />
        <path
          class="line bottom"
          d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
        />
      </svg>
    </button>
    <section class="navbar top-0 w-screen fixed flex z-20 md:hidden">
      <ul
        v-show="isOpen"
        class="
          transform
          w-max
          -translate-y-half -translate-x-half
          fixed
          z-10
          flex flex-col
          list-none
          top-1/2
          left-1/2
        "
      >
        <nuxt-link
          v-for="(page, index) in pages"
          :key="index"
          :to="page.url"
          :prefetch="page.prefetch">
          <li
            class="
              list_item
              relative
              tracking-12px
              cursor-pointer
              text-center
              my-8
            "
            @click="closeNavbar"
            @keydown="closeNavbar"
          >
            {{ page.name }}
          </li>
        </nuxt-link>
      </ul>
    </section>
  </section>
</template>
<script>
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  data() {
    return {
      openTimeline: null,
      isActive: false,
      isOpen: false,
      pages: [
        { name: 'Home', url: '/', prefetch: false },
        { name: 'Blogs', url: '/blog', prefetch: false },
        { name: 'Team', url: '/portfolio', prefetch: false },
        { name: 'About Us', url: '/aboutus', prefetch: true },
        { name: 'Contact Us', url: '/contact', prefetch: true }
      ]
    }
  },
  mounted () {
    this.configNavbar()
  },
  methods: {
    configNavbar () {
      this.openTimeline = this.$gsap
        .timeline({ paused: true })
        .to('.navbar', { left: 0, duration: 0.7 })
        .from('.list_item', { duration: 0.4, y: 20, stagger: 0.1, autoAlpha: 0 }, 0.5)
    },
    async openNavbar () {
      this.isActive = true
      this.isOpen = true
      await this.openTimeline.play()
    },
    async closeNavbar () {
      this.isActive = false
      await this.openTimeline.reverse()
      this.isOpen = false
    }
  }
})
</script>

<style scoped>
/* BUTTON STYLING */
.navbar-toggle {
  -webkit-tap-highlight-color: transparent;
  transition: transform 400ms;
}
.navbar-toggle .line {
  fill: none;
  transition-delay: 400ms, 0;
  transition-property: stroke, stroke-dasharray, stroke-dashoffset;
  transition-timing-function: ease;
  transition-duration: 400ms;
  stroke: #fff;
  stroke-width: 5.5;
  stroke-linecap: round;
}
.navbar-toggle .line.top {
  stroke-dasharray: 40 139;
}
.navbar-toggle .line.bottom {
  stroke-dasharray: 20 180;
  stroke-dashoffset: -20px;
}
.navbar-toggle.active {
  transform: rotate(45deg);
}

.navbar-toggle.active .line.top {
  stroke-dashoffset: -98px;
}
.navbar-toggle.active .line.bottom {
  stroke-dashoffset: -138px;
}
.navbar-toggle:not(.active):hover .line.bottom {
  stroke-dasharray: 40 180;
  stroke-dashoffset: 0px;
}
/* NAVBAR STYLING */
.navbar {
  background-color: #111;
  border-left: 5px solid #56eefd;
  height: 100vh;
  left: 100vw;
}

.list_item {
  @apply text-2xl md:text-3xl lg:text-4xl;
}

.list_item:before, .list_item::after {
  content: ' ';
  display: block;
  position: absolute;
  width: 0;
  top: 2px;
  height: 100%;
  border-bottom: 2px solid #56eefd;
  transition: 0.3s;
}
.list_item:before {
  right: 0;
}

.list_item:after {
  bottom: 0;
}
.list_item:hover {
  color: #56eefd;
}

.list_item:hover:before, .list_item:hover:after {
  width: 50%;
}

</style>
