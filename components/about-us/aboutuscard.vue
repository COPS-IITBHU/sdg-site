<template>
  <section class="w-9/10 mx-auto my-0px">
    <div
      id="card_1"
      class="
        cards
        <lg:(flex-col-reverse
        mb-10)
        flex flex-row
        justify-between
        items-center
        flex-wrap
        py-20px
        px-30px
      "
    >
      <div class="text <lg:(w-3/4 mt-5 h-1/3 text-center) w-1/2">
        <h1 class="mb-5px font-medium text-2xl text-gray-50">WHAT IS SDG?</h1>
        <p class="text-gray-300">
          One of the prominent pillars of COPS, IITBHU is SDG. With the increasing 
          percentage of the world's population possessing an innovative and feature
          phone, the software has influenced many lives,  but ever considered how 
          this software or the websites you surf day and night or any gaming application
          you die for are developed? No worries, we at Software Developing Group are
          here to unravel all these mysteries for you to perceive, prepare and produce.
          We got you taken care of, from displaying Hello World on your Local Host 
          to developing a fully functional mobile application.
        </p>
      </div>
      <div
        class="
          figure
          <lg:(w-full
          m-0
          h-1/3)
          flex
          justify-center
          items-center
          w-2/5
        "
      >
        <nuxt-img
          src="/aboutus/1.jpeg"
          class="<lg:(w-1/2 h-1/2) w-full h-full"
          alt="WHAT IS SDG?"
        />
      </div>
    </div>

    <nuxt-img
      src="/aboutus/4.png"
      class="arrow <lg:(hidden) w-3/5 mx-auto my-0"
      alt="arrow"
    />

    <div
      id="card_2"
      class="
        cards
        <lg:(flex-col
        mb-10)
        flex flex-row
        justify-between
        items-center
        flex-wrap
        py-20px
        px-30px
      "
    >
      <div
        class="
          figure
          <lg:(w-full
          m-0
          h-1/3)
          flex
          justify-center
          items-center
          w-2/5
        "
      >
        <nuxt-img
          src="/aboutus/2.jpeg"
          class="<lg:(w-1/2 h-1/2) w-full h-full"
          alt="WHAT WE DO?"
        />
      </div>
      <div class="text <lg:(w-3/4 mt-5 h-1/3 text-center) w-1/2">
        <h1 class="mb-5px font-medium text-2xl text-gray-50">WHAT WE DO?</h1>
        <p class="text-gray-300">
          Whether Mobile Development, Desktop Development, Web Development, 
          Game Development, or Cloud Development, we manufacture all units 
          here! Along the lines of development, we enjoy discussions and 
          collaborations too. Regular DevTalks for discussions and doubts 
          about new tech and associating over Open Source provides us with 
          great opportunities of expanding our colossal network. DevOps with GitLab, 
          API with Postman, GSOC 101, and Android Study Jam are some of our sought-after workshops.
        </p>
      </div>
    </div>

    <nuxt-img
      src="/aboutus/4_2.png"
      class="arrow <lg:(hidden) w-3/5 mx-auto my-0"
      alt="arrow"
    />

    <div
      id="card_2"
      class="
        cards
        <lg:(flex-col-reverse
        mb-10)
        flex flex-row
        justify-between
        items-center
        flex-wrap
        py-20px
        px-30px
      "
    >
      <div class="text <lg:(w-3/4 mt-5 h-1/3 text-center) w-1/2">
        <h1 class="mb-5px font-medium text-2xl text-gray-50">
          OUR AREAS OF INTEREST
        </h1>
        <p class="text-gray-300">
          Our aim is constantly learning and revamping. Hackalog, 
          our very own portal for maintaining logs of our Hackathon, 
          helps us archive hackathon details and leaderboards. Lite Hai, 
          our institute's app, is every student's guide regarding 
          various student bodies, fests, workshops; and it also comes 
          with Google Maps for easy movement within the campus. Our 
          official website for the Software Development Group is a 
          storehouse for various software development blogs and our 
          achievements and projects. Our insatiable appetite towards 
          developing adores creating Telegram Bots would be fair to say.
        </p>
      </div>
      <div
        class="
          figure
          <lg:(w-full
          m-0
          h-1/3)
          flex
          justify-center
          items-center
          w-2/5
        "
      >
        <nuxt-img
          src="/aboutus/3.jpeg"
          class="<lg:(w-1/2 h-1/2) w-full h-full"
          alt="OUR AREAS OF INTEREST"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({});
</script>

<style scoped>
img {
  border-radius: 25vh;
}
</style>
