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
      required: true
    }
  }
}
</script>

<style scoped>
.icon {
  color: rgba(255, 255, 255, 0.05);
  transition: 1s ease-in-out;
}
.icon:hover {
  transition: 0s ease-in-out;
  color: #1ad3a9;
  text-shadow: 0 0 120px #1ad3a9;
}
</style>
