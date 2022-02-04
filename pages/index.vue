<template>
  <div>
    <main>
      <HomeHero />
    </main>
    <section id="projectList w-full flex flex-col justify-evenly">
      <div class="info relative my-12 w-3/5">
        <h2 class="text-5xl my-4 text-center">Projects</h2>
        <p class="text-lg text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          facere suscipit repellat eum facilis beatae quia odit commodi
          laudantium impedit? Dolores dolorem, saepe quibusdam assumenda
          perspiciatis ipsam ullam a repellat!
        </p>
      </div>
      <transition name="fade">
        <ul
          v-show="isListVisible"
          ref="jsDots"
          class="
            nav-dots
            fixed
            left-0
            p-4
            m-0
            cursor-pointer
            flex flex-col
            justify-center
            items-center
          "
          @click="scrollToSection"
          @keydown.enter="scrollToSection"
        >
          <li
            v-for="project in projects"
            :key="project.name"
            class="nav-dot list-none text-center text-2xl"
          >
            {{ project.name }}
          </li>
        </ul>
      </transition>
      <section class="projectCards flex flex-col justify-evenly items-center">
        <div
          v-for="project in projects"
          :key="project.name"
          ref="sections"
          class="section min-h-screen"
        >
          <HomeProject-card :project="project" />
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  data () {
    return {
      isListVisible: false,
      projects: null
    }
  },
  head: {
    title: 'Landing'
  },
  mounted () {
    window.addEventListener('scroll', this.setDotStatus)
    window.addEventListener('resize', this.displayList)
    this.fetchProjects()
  },
  unmounted () {
    window.removeEventListener('scroll', this.setDotStatus)
  },
  methods: {
    async fetchProjects () {
      const fetchedData = await this.$content('index/projectData').fetch()
      this.projects = fetchedData.projects
    },
    displayList () {
      if (window.innerWidth < 1000) {
        this.isListVisible = false
      }
    },
    removeDotStyles () {
      const dots = this.$refs.jsDots
      const isActive = dots.querySelector('.is-active')

      if (isActive != null) {
        isActive.classList.remove('is-active')
      }
    },
    setDotStatus () {
      const scrollPosition = window.scrollY
      const dots = Array.from(this.$refs.jsDots.children)
      if (
        scrollPosition > window.innerHeight - 250 &&
        window.innerWidth > 1000 &&
        scrollPosition < window.innerHeight * this.projects.length
      ) {
        this.isListVisible = true
      } else {
        this.isListVisible = false
      }

      this.$refs.sections.forEach((section, index) => {
        const halfWindow = window.innerHeight / 2
        const sectionTop = section.offsetTop
        if (
          scrollPosition > sectionTop - halfWindow &&
          scrollPosition < sectionTop + halfWindow
        ) {
          this.removeDotStyles()
          dots[index].classList.add('is-active')
        }
      })
    },
    scrollToSection (e) {
      const dots = Array.from(this.$refs.jsDots.children)
      const windowHeight = window.innerHeight
      dots.forEach((dot, index) => {
        if (dot === e.target) {
          window.scrollTo({
            top: windowHeight * index + windowHeight + 100,
            behavior: 'smooth'
          })
        }
      })
    }
  }
})
</script>

<style>
body {
  background: #111;
}
.info {
  left: 30%;
  color: white;
}
.info h2 {
  color: #00bcd4;
  text-shadow: #046af0 2px 2px 10px;
}
.nav-dots {
  height: 200px;
  width: 400px;
  top: 50%;
  transform: translateY(-50%);
}
.nav-dot {
  color: white;
  transition: all 0.3s;
}
.nav-dot:not(:last-of-type) {
  margin-bottom: 20px;
}
.nav-dot:hover {
  letter-spacing: 3px;
  background: transparent;
}
.nav-dot.is-active {
  transform: scale(1.1);
  letter-spacing: 3px;
  background: transparent;
  color: #89ff00;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
@media only screen and (max-width: 1000px) {
  .info {
    left: 5%;
    width: 90%;
  }
}
</style>
