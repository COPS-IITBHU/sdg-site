<template>
  <section>
    <div
      class="
        h-auto
        md:h-65vh
        lg:h-55vh
        relative
        z-1
        bg-hex-050505
        lg:text-xl
        w-100%
      "
    >
      <transition appear @before-enter="beforeEnter" @enter="enter">
        <h2
          class="
            text-white text-4xl
            md:text-5xl
            lg:text-7xl
            font-mono font-700
            text-center
            p-20
          "
        >
          Meet the Team
        </h2>
      </transition>
      <transition appear @before-enter="beforeEnter" @enter="enter">
        <p
          class="
            w-80vw
            m-auto
            text-gray-300
            font-400
            text-lg
            md:text-xl
            sm:text-md
            text-center
            -mt-10
          "
        >
          Since the inception of COPS in 2015, we have continuously developed the incredible. From kingpins who drive the group to reach greater heights to comrades who constantly pursue, we are a bunch that assimilates knowledge, applies resources, and achieves goals.
        </p>
      </transition>
      <client-only>
        <Particles
          class="z-0 absolute w-100% inset-0 h-50vh"
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
    <main
      class="w-100% bg-hex-101010 z-1 p-10"
    >
      <div class="nav flex p-10">
        <div class="nav-elements w-1/2 p-8 drop-shadow-3xl">
          <lottie
            :width="250"
            :height="250"
            :options="lottieOptions.first"
            class="lottie"
            @animCreated="handleAnimation($event, 'firstAnim')"
          />
          <span class="text-3xl mt-10 py-10">Developers</span>
          <p class="text-sm mt-10">
            A team of zealous coders improvising the world as you complete reading this sentence.
          </p>
          <button
            class="
              btn
              w-30
              p-2
              mt-10
              border
              rounded-lg
              hover:bg-hex-fff hover:text-black
            "
            @click="showSdg()"
          >
            View Team
          </button>
        </div>
        <div class="nav-elements w-50vw p-8 -mt-20">
          <lottie
            :width="250"
            :height="250"
            :options="lottieOptions.sophies"
            class="lottie"
            @mouseover="play"
            @focus="play"
            @animCreated="handleAnimation($event, 'sophiesAnim')"
          />
          <span class="text-3xl mt-10 py-10">Alums</span>
          <p class="text-sm mt-10">
            They are the building blocks, our mentors, and the very soul of this team.
          </p>
          <button
            class="
              btn
              w-30
              p-2
              mt-10
              border
              font-400
              rounded-lg
              hover:bg-hex-fff hover:text-black
            "
            @click="showAlums()"
          >
            View Team
          </button>
        </div>
      </div>
      <section v-if="showCard && !showAlum">
        <div v-for="(value, header) in members" :key="header" class="text-center px-4 mx-auto my-4">
          <h2
            class="
              text-white text-center text-4xl
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
      <section v-if="showAlum && !showCard" class="text-center p-20">
        <h2
          class="text-white text-center text-3xl md:text-4xl lg:text-6xl"
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
export default defineComponent({
  components: {
    lottie
  },
  data () {
    return {
      alums: [],
      members: {
        Juniors: [],
        Sophomores: [],
        Seniors: []
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
      }
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
    },
    showAlums () {
      this.showAlum = true
      this.showCard = false
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
.nav {
  margin-top: 5px;
  margin-inline: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.nav-elements {
  margin: 0 auto;
  letter-spacing: 2px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
  color: #fff;
  // display: flex;
  width: 500px;
}
.nav-elements:hover {
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
}
.nav-elements .lottie {
  float: left;
  position: relative;
  margin-right: 30px;
}
.line {
  position: relative;
  margin-bottom: 2rem;
  margin-top: 2rem;

  &:before {
    display: block;
    content: '';
    width: 12px;
    height: 12px;
    background-color: #eee;
    position: relative;
    transform: rotate(45deg) translateX(-50%);
    left: 50%;
    top: 10px;
  }

  &:after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 20vw;
    max-width: 780px;
    height: 3px;
    background: #eeeeee;
  }
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
body {
  scroll-behavior: smooth;
  background: #050505;
}
</style>
