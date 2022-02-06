<template>
  <iframe
    title="COPS Insights"
    :src="`https://discord.com/widget?id=${serverid}&theme=dark`"
    allowtransparency="true"
    frameborder="0"
    sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
    width="100%"
    height="500px"
  ></iframe>
</template>
<script lang="ts">import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  // eslint-disable-next-line vue/require-prop-types
  props: {
    serverid: {
      type: String,
      default: '',
      required: true
    }
  }
})
</script>
