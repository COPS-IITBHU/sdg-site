<template>
  <div class="flex flex-col ">
    <div class="online-desc text-right mb-4 <lg:(w-full)">
      <div>
        <h2 class="py-2 text-accent-color text-4xl font-heading">Let's Talk</h2>
        <p class="text-light-50 font-display justify">
          With over 1700 members, the Discord server is a haven for programming <br/>
          enthusiasts! We have separate channels dedicated to the 4 verticals,
          competitions <br/> as well as some random bakar. 
          Hop onto the server! <br/>
          Savor as well as share the infinite domains of the code!
        </p>
      </div>
    </div>
    <div
      class="online flex flex-row justify-end flex-wrap <lg:(w-full)"
    >
      <iframe
        title="COPS Insights"
        :src="`https://discord.com/widget?id=${serverid}&theme=dark`"
        allowtransparency="true"
        frameborder="0"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        width="100%"
        height="400px"
        class="md:w-4/5">
        ></iframe>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  // eslint-disable-next-line vue/require-prop-types
  props: {
    serverid: {
      type: String,
      default: '',
      required: true,
    },
  },
});
</script>


<style scoped>

@media screen and (max-width: 1030px) {
  .online{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .online-desc{
    text-align: center;
  }
}

</style>