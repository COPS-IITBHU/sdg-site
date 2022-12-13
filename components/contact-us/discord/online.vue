<template>
  <div class="flex flex-col w-2/5">
    <div class="text-right mx-auto mb-4 <lg:(w-full)">
      <div>
        <h2 class="py-2 text-accent-color text-3xl font-heading">Let's Talk</h2>
        <p class="text-light-50 font-display">
          With over 1700 members, the Discord server is a haven for programming
          enthusiasts! We have separate channels dedicated to the 4 verticals,
          competitions as well as some random bakar. <br />
          Hop onto the server! <br />
          Savor as well as share the infinite domains of the code!
        </p>
      </div>
    </div>
    <div
      class="flex flex-row justify-center items-center flex-wrap <lg:(w-full)"
    >
      <iframe
        title="COPS Insights"
        :src="`https://discord.com/widget?id=${serverid}&theme=dark`"
        allowtransparency="true"
        frameborder="0"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        width="100%"
        height="500px"
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
