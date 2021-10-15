<template>
  <span
    class="iconify icon p-2 select-none cursor-default"
    :data-icon="name"
  ></span>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.icon {
  color: rgba(0, 0, 0, 0.5);
  transition: 1s ease-in-out;
}
.icon:hover {
  transition: 0s ease-in-out;
  color: #0f0;
  text-shadow: 0 0 120px #0f0;
}
</style>
