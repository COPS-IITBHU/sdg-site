<template>
  <iframe
    :title="uniqueTitle"
    :src="`https://discord.com/widget?id=${serverid}&theme=dark`"
    allowtransparency="true"
    frameborder="0"
    sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
    width="100%"
    height="500px"
  ></iframe>
</template>
<script lang="ts">
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['serverid'],
};
</script>
