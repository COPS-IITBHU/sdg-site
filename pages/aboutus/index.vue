<template>
  <div>
    <aboutuslogo />
    <h1
      class="
        text-lg
        my-20
        mx-auto
        text-center
        quote
        md:text-2xl
        text-gray-200
        px-2
        italic
      "
    >
      “Any fool can write code that a computer can understand. <br />
      Good programmers write code that humans can understand.” <br />
      - Martin Fowler
    </h1>
    <section class="w-9/10 mx-auto">
      <figure v-for="(con, idx) in content" :key="con.heading">
        <about-us-card :index="idx" :heading="con.heading" :image="con.image" :text="con.text" />
        <nuxt-img
          v-if="!(idx & 1) && (idx != content.length - 1)"
          src="/aboutus/4.png"
          class="<lg:(hidden) w-3/5 mx-auto my-0"
          alt="arrow"
        />

        <nuxt-img
          v-if="(idx & 1) && (idx != content.length - 1)"
          src="/aboutus/4_2.png"
          class="<lg:(hidden) w-3/5 mx-auto my-0"
          alt="arrow"
        />
      </figure>
    </section>
    <youtube />
    <achievementslogo />
    <carousel3d v-if="!$fetchState.pending">
      <slide v-for="(slide, i) in slides" :key="i" :index="i">
        <h3 class="text-xl font-semibold">{{ slide.title }}</h3>
        <p class="px-6 my-2">
          {{ slide.description }}
          <br /><a
            v-if="slide.showlink"
            style="color: blue"
            :href="slide.link"
          >{{ slide.linkdes }}</a
          >
        </p>
      </slide>
    </carousel3d>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import AboutUsCard from '~/components/about-us/aboutuscard.vue'
import aboutuslogo from '~/components/about-us/aboutuslogo.vue'
import achievementslogo from '~/components/about-us/achievementslogo.vue'
import carousel3d from '~/components/about-us/carousel/carousel-3d.vue'
import slide from '~/components/about-us/carousel/carousel-slide.vue'
import youtube from '~/components/about-us/youtube.vue'

export default defineComponent({
  components: {
    aboutuslogo,
    youtube,
    achievementslogo,
    carousel3d,
    slide,
    AboutUsCard
  },
  data () {
    return {
      slides: [] as any,
      content: [
        {
          heading: 'WHAT IS SDG?',
          image: '/aboutus/1.jpeg',
          text: `One of the prominent pillars of COPS, IITBHU is SDG. With the
          increasing percentage of the world's population possessing an
          innovative and feature phone, the software has influenced many lives,
          but ever considered how this software or the websites you surf day and
          night or any gaming application you die for are developed? No worries,
          we at Software Developing Group are here to unravel all these
          mysteries for you to perceive, prepare and produce. We got you taken
          care of, from displaying Hello World on your Local Host to developing
          a fully functional mobile application.`
        },
        {
          heading: 'WHAT WE DO?',
          image: '/aboutus/2.jpeg',
          text: `Whether Mobile Development, Desktop Development, Web Development, Game
          Development, or Cloud Development, we manufacture all units here!
          Along the lines of development, we enjoy discussions and
          collaborations too. Regular DevTalks for discussions and doubts about
          new tech and associating over Open Source provides us with great
          opportunities of expanding our colossal network. Multiverse of
          Languages, API with Postman, GSOC 101, and Android Study Jam are some
          of our sought-after workshops.`
        },
        {
          heading: 'OUR AREAS OF INTEREST',
          image: '/aboutus/3.jpeg',
          text: `Our motto is constantly learning and revamping. Hackalog, our very own
          portal for maintaining logs of our Hackathon, helps us archive
          hackathon details and leaderboards. Lite Hai, our institute's app, is
          every student's guide to various student bodies, fests, workshops; and
          it also comes with Google Maps for easy movement within the campus.
          Our official website for the Software Development Group is a
          storehouse for various software development blogs and our achievements
          and projects. Our insatiable appetite towards developing adores
          creating Telegram Bots would be fair to say.`
        }
      ]
    }
  },
  async fetch () {
    const fetchedData = await this.$content('achievements').fetch()
    this.slides = fetchedData
  },
  head: {
    title: 'About Us'
  }
})
</script>

<style scoped>
.quote {
  font-family: 'Times New Roman', Times, serif;
}
</style>
