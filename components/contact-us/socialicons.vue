<template>
  <div class="m-10px mt-20px">
    <ul class="flex flex-row flex-wrap justify-center items-center">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="list-none my-0 mx-15px mb-20px"
      >
        <a
          :href="item.url"
          class="
            p-13px
            w-60px
            h-60px
            rounded-full
            flex
            items-center
            justify-center
          "
          target="_blank"
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
</template>

<script lang="ts">
// eslint-disable-next-line import/named
import { PropType } from 'vue';

interface itemsObject {
  name: string;
  url: string;
  icon: string;
  height: Number;
  width: Number;
  style: {
    color: string;
  };
}
export default {
  props: {
    items: {
      type: Object as PropType<itemsObject>,
      default() {
        return { object: 'items' };
      },
    },
  },
};
</script>

<style scoped>
ul li a {
  background-color: rgba(255, 255, 255, 0.911);
  transition: 0.4s;
}
ul li a:hover {
  transform: translate(0, -5px) scale(1.05);
  background-color: rgba(255, 255, 255, 0.979);
  box-shadow: 0px 0px 18px rgba(116, 227, 235, 0.959);
}
</style>
