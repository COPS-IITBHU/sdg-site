<template>
  <main class="text-center text-light-50">
    <div id="head-map" class="flex justify-center items-center">
      <Map class="w-full" />
      <span class="absolute text-light-50 text-8xl font-bold">Contact us</span>
    </div>

    <div
      class="flex flex-row justify-around m-20px mt-50px <lg:(flex-col m-20px)"
    >
      <div class="flex flex-col">
        <div class="text-left mx-auto mb-20px <lg:(w-full)">
          <div>
            <h2 class="m-3px p-2px text-cyan-400 text-4xl font-bold">
              LET'S TALK
            </h2>
            <p class="m-3px p-2px text-light-50">
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
          <Online class="<sm:(w-full)" :serverid="serverid" />
        </div>
      </div>

      <div id="clg_img" class="ml-100px <lg:(w-full mt-30px ml-0px)">
        <div
          id="content"
          class="
            w-11/12
            h-3/5
            relative
            top-15
            flex
            justify-center
            items-center
            overflow-hidden
            mx-auto
            <lg:(w-full
            h-400px
            top-0)
          "
        >
          <nuxt-img
            src="contact/iit-varanasi.jpg"
            alt="Institute Image"
            class="w-full h-400px object-cover select-none filter brightness-60"
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
                <div class="m-5px flex justify-center items-center">
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
                  <h2 class="text-3xl font-bold text-light-50">VISIT US</h2>
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
    <div class="mt-70px">
      <h3 class="m-3px p-2px text-cyan-400 text-3xl font-bold">
        WE'RE ALSO THERE
      </h3>
      <p class="m-3px p-2px text-light-50">
        Follow us on the following social media handles and stay apprised about
        the latest events and workshops!
      </p>
      <socialicons :items="items" />
    </div>
  </main>
</template>

<script>
import Online from '~/components/contact-us/discord/online.vue';
import Map from '~/components/contact-us/map.vue';
import Socialicons from '~/components/contact-us/socialicons.vue';

export default {
  components: { Map, Online, Socialicons },
  data() {
    return {
      items: [],
      serverid: '786971759496790046',
    };
  },
  mounted() {
    this.fetchdata();
  },
  methods: {
    async fetchdata() {
      const data = await this.$content('contacts').fetch();
      this.items = data;
    },
  },
};
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
</style>
