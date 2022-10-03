<template>
  <main class="text-center text-light-50">
    <div id="head-map" class="flex justify-center items-center">
      <Map class="w-full" />
      <span class="map-title rounded-full absolute text-light-50 font-bold font-display
      text-8xl p-4
      <lg:(text-6xl p-4)
      <md:(text-4xl p-4)
      ">Contact Us</span>
    </div>

    <div
      class="flex flex-row justify-around m-6 mt-12 <lg:flex-col"
    >
      <div class="flex flex-col">
        <div class="text-left mx-auto mb-4 <lg:(w-full)">
          <div>
            <h2 class="py-2 text-cyan-400 text-4xl font-bold">
              LET'S TALK
            </h2>
            <p class="text-light-50 text-justify">
              With over 1700 members, the Discord server is a haven for
              programming enthusiasts! <br />
              We have separate channels dedicated to the 4 verticals,
              competitions as well as some random bakar.<br />
              Hop onto the server.<br />
              Savor as well as share the infinite domains of the code!
            </p>
          </div>
        </div>
        <div
          class="
            flex flex-row
            justify-center
            items-center
            flex-wrap
            <lg:(w-full)
          "
        >
          <Online class="w-full md:w-3/4 md:mr-auto ml-auto md:ml-0" :serverid="serverid" />
        </div>
      </div>

      <div
        id="clg_img"
        class="lg:ml-12 my-8 md:my-4 flex justify-center items-center">
        <div
          id="content"
          class="
            w-full
            relative
            overflow-hidden
          "
        >
          <nuxt-img
            src="contact/iit-varanasi.webp"
            width="600"
            alt="Institute Image"
            class="object-cover select-none filter brightness-60 mx-auto"
            loading="lazy"
          />
          <div
            class="
              absolute
              top-0
              left-0
              right-0
              bottom-0
              w-full
              h-full
              object-cover
              flex flex-col
              justify-center
              items-center
            "
          >
            <div class="w-3/5 flex flex-col justify-center items-center">
              <div class="box">
                <div class="m-1 flex justify-center items-center">
                  <span
                    class="iconify"
                    data-icon="gis:poi-map"
                    style="color: #fff"
                    data-width="60"
                    data-height="60"
                    data-flip="horizontal"
                  ></span>
                </div>
                <div>
                  <h2 class="text-2xl lg:text-3xl font-bold text-light-50">VISIT US</h2>
                  <p class="text-light-50">
                    A Malaiyo date discussing some bugs sounds cool, right?
                    Visit us in our Natural Banarasi Habitat and let us treat
                    you to something!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="my-4 px-2">
      <h3 class="py-2 text-cyan-400 text-3xl font-bold">
        WE'RE ALSO HERE
      </h3>
      <p class="text-light-50">
        Follow us on the following social media handles and stay apprised about
        the latest events and workshops!
      </p>
      <div class="mx-4 my-8">
        <ul class="flex flex-row flex-wrap justify-center items-center">
          <li
            v-for="item in items"
            :key="item.name"
            class="list-none mx-4 py-2"
          >
            <a
              :href="item.url"
              class="
            p-3
            w-16
            h-16
            rounded-full
            flex
            items-center
            justify-center
          "
              target="_blank"
              rel="noreferrer"
            >
              <span
                class="iconify"
                :data-icon="item.icon"
                :style="item.style"
                :data-height="item.height"
                :data-width="item.width"
              >
                {{ item.name }}
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import Online from '~/components/contact-us/discord/online.vue'
import Map from '~/components/contact-us/map.vue'
interface itemsObject {
  name: string
  url: string
  icon: string
  height: Number
  width: Number
  style: {
    color: string
  }
}
export default defineComponent({
  components: { Map, Online },
  data () {
    return {
      items: [],
      serverid: '786971759496790046'
    } as {
      items: itemsObject[],
      serverid: string
    }
  },
  async fetch () {
    const data = await this.$content('contacts').fetch()
    this.items = (data as unknown) as itemsObject[]
  },
  head: {
    title: 'Contact',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Contact us via any of the mentioned mediums. We’d highly appreciate you reaching out to us!'
      }
    ]
  }
})
</script>

<style scoped>
img {
  border-top-left-radius: 70px;
  border-bottom-right-radius: 70px;
  transition: all 1s;
}
#content {
  border-top-left-radius: 70px;
  border-bottom-right-radius: 70px;
}
#content:hover img {
  transform: scale(1.1);
}
ul li a {
  background-color: var(--contact-link-bg-primary);
  transition: 0.4s;
}
ul li a:hover {
  transform: translate(0, -5px) scale(1.05);
  background-color: var(--contact-link-bg-secondary);
  box-shadow: 0px 0px 18px var(--contact-link-shadow-primary);
}
.map-title{
  background: rgba(0, 0, 0, 0.6);
}
</style>
