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
              Lets Talk
            </h2>
            <p class="m-3px p-2px text-light-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam, quos!
            </p>
          </div>
        </div>
        <div
          id="discord"
          class="
            flex flex-row
            justify-center
            items-center
            flex-wrap
            <lg:(w-full)
          "
        >
          <Online class="<sm:(w-full)" />
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
                  <h2 class="text-3xl font-bold text-light-50">Visit us</h2>
                  <p class="text-light-50">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio, porro? Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Dolorum, soluta consectetur. Adipisci
                    quisquam perferendis
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
        We’re also there
      </h3>
      <p class="m-3px p-2px text-light-50">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
#discord {
  filter: brightness(90%);
}

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
