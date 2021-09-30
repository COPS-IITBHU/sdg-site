<template>
  <div id="wrapper">
    <button
      id="toggle"
      class="
        navbar-toggle
        bg-transparent
        select-none
        border-none
        focus:outline-none
        cursor-pointer
        fixed
        z-20
        top-4
        right-4
        p-0
      "
      type="button"
      :class="{ active: isActive }"
      @click="openNavbar"
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
    <div class="navbar top-0 left-0 w-screen z-10 fixed flex">
      <div v-for="div in 4" :key="div" class="navBg h-0"></div>
      <ul
        v-show="isOpen"
        class="
          routeList
          transform
          -translate-y-half -translate-x-half
          fixed
          z-10
          flex flex-col
          list-none
          top-1/2
          left-1/2
        "
      >
        <nuxt-link to="/">
          <li
            class="list_item py-10px my-20px"
            @click="closeNavbar"
            @keydown="closeNavbar"
          >
            Home
          </li>
        </nuxt-link>
        <nuxt-link to="/projects">
          <li
            class="list_item py-10px my-20px mx-25px"
            @click="closeNavbar"
            @keydown="closeNavbar"
          >
            Projects
          </li>
        </nuxt-link>
        <nuxt-link to="/">
          <li
            class="list_item py-10px my-20px"
            @click="closeNavbar"
            @keydown="closeNavbar"
          >
            Blogs
          </li>
        </nuxt-link>
        <nuxt-link to="/">
          <li
            class="list_item py-10px my-20px"
            @click="closeNavbar"
            @keydown="closeNavbar"
          >
            Portfolio
          </li>
        </nuxt-link>
        <nuxt-link to="/">
          <li
            class="list_item py-10px my-20px"
            @click="closeNavbar"
            @keydown="closeNavbar"
          >
            About Us
          </li>
        </nuxt-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openTimeline: null,
      isActive: false,
      isOpen: false,
    };
  },
  mounted() {
    this.configNavbar();
  },
  methods: {
    configNavbar() {
      this.openTimeline = this.$gsap
        .timeline({ paused: true })
        .to('.navBg', {
          duration: 0.8,
          height: '100vh',
          stagger: 0.3,
        })
        .to('#navTitle', { duration: 0.6, opacity: 1 })
        .to(
          '.list_item',
          { duration: 0.6, y: 0, stagger: 0.15, opacity: 1 },
          1
        );
    },
    async openNavbar() {
      if (this.isActive) {
        this.isActive = false;
        await this.openTimeline.reverse();
        this.isOpen = false;
      } else {
        this.openTimeline.play();
        this.isActive = true;
        this.isOpen = true;
      }
    },
    async closeNavbar() {
      this.isActive = false;
      await this.openTimeline.reverse();
      this.isOpen = false;
    },
  },
};
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
  stroke: #000;
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
.navbar-toggle.active .line {
  stroke: rgb(236, 233, 233);
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
.navBg {
  width: 25%;
  background-color: #2c2525;
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
  letter-spacing: 15px;
}

.list_item:hover:after {
  width: 50%;
}
</style>
