<template>
  <section>
    <site-hero :title="title" :subtitle="subtitle" image="/team.webp"></site-hero>
    <main
      class="w-full"
    >
      <section class="flex-col lg:flex-row flex justify-evenly items-center">
        <figure class="nav-elements px-4 md:px-8 drop-shadow-3xl flex-col md:flex-row flex my-4 block max-w-lg rounded-3xl">
          <div>
            <lottie
              :width="250"
              :options="lottieOptions.first"
              class="mr-8"
              @animCreated="handleAnimation($event, 'firstAnim')"
            />
          </div>
          <figcaption class="py-4">
            <span class="text-3xl py-10 font-heading">Developers</span>
            <p class="text-sm mt-2 text-justify">
              A team of zealous coders improvising the world as you complete reading this sentence.
            </p>
            <button
              class="
                btn
                w-30
                p-2
                mt-8
                border
                rounded-lg
                hover:bg-hex-fff hover:text-black
              "
              aria-label="view-team"
              @click="showSdg()"
            >
              View Team
            </button>
          </figcaption>
        </figure>
        <figure class="nav-elements px-4 md:px-8 drop-shadow-3xl flex-col md:flex-row flex my-4 block max-w-lg rounded-3xl">
          <div>
            <lottie
              :width="250"
              :options="lottieOptions.sophies"
              class="lottie"
              @mouseover="play"
              @focus="play"
              @animCreated="handleAnimation($event, 'sophiesAnim')"
            />
          </div>
          <figcaption class="py-4">
            <span class="text-3xl py-10 font-heading">Alums</span>
            <p class="text-sm mt-2 text-justify">
              They are the building blocks, our mentors, and the very soul of this team.
            </p>
            <button
              class="
                btn
                w-30
                p-2
                mt-8
                border
                font-400
                rounded-lg
                hover:bg-hex-fff hover:text-black
              "
              aria-label="view-alums"
              @click="showAlums()"
            >
              View Alums
            </button>
          </figcaption>
        </figure>
      </section>
      <section v-if="showCard && !showAlum" id="team-id">
        <div v-for="(value, header) in members" :key="header" class="text-center px-4 mx-auto my-4">
          <h2
            class="
              text-center text-4xl
              md:text-4xl
              lg:text-6xl
            "
          >
            {{ header }}
          </h2>
          <div class="line"></div>
          <ul class="flex flex-row flex-wrap mx-auto list-none justify-center">
            <li
              v-for="person in value"
              :key="person.github"
            >
              <transition appear @before-enter="beforeEnter" @enter="enter">
                <sdgCard
                  v-show="showCard"
                  :name="person.name"

                  :title="person.title"
                  :social-media-link="person.link"
                  :github-link="person.github"
                  :image-url="`${person.github}.png`"
                />
              </transition>
            </li>
          </ul>
        </div>
      </section>

      <!-- Alums -->
      <section v-if="showAlum && !showCard" id="team-id" class="text-center p-20">
        <h2
          class="text-center text-3xl md:text-4xl lg:text-6xl"
        >
          ALUMNI
        </h2>
        <div class="line"></div>
        <ul class="flex flex-row flex-wrap mx-auto list-none justify-center">
          <li
            v-for="person in alums"
            :key="person.name"
          >
            <transition appear @before-enter="beforeEnter" @enter="enter">
              <sdgCard
                v-show="showAlum"
                :name="person.name"
                :company="person.company"
                :title="person.designation"
                :social-media-link="person.link"
                :github-link="person.github"
                :image-url="`${person.github}.png`"
              />
            </transition>
          </li>
        </ul>
      </section>
    </main>
  </section>
</template>
<script>
import { defineComponent } from '@nuxtjs/composition-api'
import lottie from 'vue-lottie/src/lottie.vue'
import * as alumniAnimationData from '~/assets/30304-back-to-school.json'
import * as devAnimationData from '~/assets/55885-developer.json'
import SiteHeroVue from '~/components/SiteHero.vue'
export default defineComponent({
  components: {
    lottie,
    SiteHero: SiteHeroVue
  },
  data () {
    return {
      alums: [],
      members: {
        Seniors: [],
        Juniors: [],
        Sophomores: []
      },
      showCard: false,
      showAlum: false,
      anim: {
        firstAnim: null,
        sophiesAnim: null
      },
      lottieOptions: {
        first: { animationData: devAnimationData.default },
        sophies: { animationData: alumniAnimationData.default }
      },
      title: 'Meet the Team',
      subtitle: 'Since the inception of COPS in 2015, we have continuously developed the incredible. From kingpins who drive the group to reach greater heights to comrades who constantly pursue, we are a bunch that assimilates knowledge, applies resources, and achieves goals.'
    }
  },
  async fetch () {
    let currentYear = new Date().getFullYear()
    const currentMonth = new Date().getMonth()

    if (currentMonth < 7) {
      currentYear -= 1
    }

    try {
      const [seniors, juniors, sophies, alums] = await Promise.all([
        this.$content('members').where({ year: { $lte: currentYear - 3 } }).fetch(),
        this.$content('members').where({ year: currentYear - 2 }).fetch(),
        this.$content('members').where({ year: currentYear - 1 }).fetch(),
        this.$content('alums').fetch()
      ])

      this.members.Seniors = seniors
      this.members.Juniors = juniors
      this.members.Sophomores = sophies
      this.alums = alums
    } catch (e) {
      throw new Error('Failed to fetch data')
    }
  },
  head: {
    title: 'Team',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'We have been working as an extraordinary team since the inception of COPS in 2015. We assimilate knowledge, employ resources, and achieve goals. From kingpins who lead the group to greater heights to comrades who relentlessly seek knowledge, we aim to reach greater heights.'
      }
    ]
  },
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 1000)
    })
  },
  methods: {
    showSdg () {
      this.showCard = true
      this.showAlum = false
      setTimeout(() => {
        document.getElementById('team-id').scrollIntoView({
          behavior: 'smooth'
        })
      }
      , 1000)
    },
    showAlums () {
      this.showAlum = true
      this.showCard = false
      setTimeout(() => {
        document.getElementById('team-id').scrollIntoView({
          behavior: 'smooth'
        })
      }
      , 1000)
    },
    beforeEnter (el) {
      el.style.opacity = 0
      el.style.transform = 'translateY(-60px)'
    },
    enter (el) {
      this.$gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'bounce.out'
      })
    },
    handleAnimation (anim, type) {
      this.anim[type] = anim
    },
    play (type) {
      this.anim[type].play()
    }
  }
})
</script>
<style>
.nav-elements {
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
}
.nav-elements:hover {
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
}

.line {
  position: relative;
  margin-bottom: 2rem;
  margin-top: 2rem;
}
.divider {
  position: relative;
  margin-top: 300px;
  height: 1px;
}

.div-transparent:before {
  content: '';
  position: absolute;
  top: 0;
  left: 5%;
  right: 5%;
  width: 90%;
  height: 1px;
  background-image: linear-gradient(
    to right,
    transparent,
    rgb(48, 49, 51),
    transparent
  );
}
.div-dot:after {
  content: '';
  position: absolute;
  z-index: 1;
  top: -9px;
  left: calc(50% - 9px);
  width: 18px;
  height: 18px;
  background-color: goldenrod;
  border: 1px solid rgb(48, 49, 51);
  border-radius: 50%;
  box-shadow: inset 0 0 0 2px white, 0 0 0 4px white;
}
</style>
