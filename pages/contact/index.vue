<template>
  <main class="text-center text-light-50">
    <div id="head-map" class="flex justify-center items-center">
      <iframe
        title="IIT BHU Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.245385337551!2d82.9871848146768!3d25.26232953525508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e33ef9b1f7cdd%3A0x7555db6d623dc140!2sIndian%20Institute%20of%20Technology%20(BHU)%20Varanasi!5e0!3m2!1sen!2sin!4v1634069543926!5m2!1sen!2sin"
        width="100%"
        height="400px"
        allowfullscreen="false"
        loading="lazy"
        class="filter invert-90 hue-rotate-180 brightness-95 saturate-200 ">
      </iframe> 
      <span
        class="map-title rounded-full absolute text-light-50 font-bold font-display text-8xl p-4 <lg:(text-6xl p-4) <md:(text-4xl p-4)"
      >Contact Us</span>
    </div>

    <div class="wrapper flex flex-row justify-center m-6 mt-12 <lg:flex-col">
      <div class="flex flex-col w-full ">
        <Map />
      </div>
      <br />
      <Online class="w-full" :serverid="serverid" />
    </div>
    <br />
    <Social />
  </main>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import Online from '~/components/contact-us/discord/online.vue';
import Map from '~/components/contact-us/map.vue';
import Social from '~/components/contact-us/social.vue';

export default defineComponent({
  components: { Map, Online, Social },
  data() {
    return {
      serverid: '786971759496790046',
    } as {
      serverid: string;
    };
  },
  head: {
    title: 'Contact',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Contact us via any of the mentioned mediums. We’d highly appreciate you reaching out to us!',
      },
    ],
  },
});
</script>

<style scoped>
.map-title {
  background: rgba(0, 0, 0, 0.6);
}

.wrapper{
  margin: 6%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

@media screen and (max-width: 1030px) {
  
}
</style>
