<template>
  <div
    class="carousel-3d-container"
    :style="{ height: this.slideHeight + 'px' }"
  >
    <div
      class="carousel-3d-slider"
      :style="{
        width: this.slideWidth + 'px',
        height: this.slideHeight + 'px',
      }"
    >
      <slot></slot>
    </div>
    <!-- <controls v-if="controlsVisible" :next-html="controlsNextHtml" :prev-html="controlsPrevHtml"
              :width="controlsWidth" :height="controlsHeight"></controls> -->
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  data() {
    return {
      width: 360,
      height: 270,
      border: 1,
      slideWidth: 362,
      slideHeight: 272,
      visible: 5,
      hasHiddenSlides: true,
      total: 10,
    };
  },
});
</script>

<style scoped>
.carousel-3d-container {
  min-height: 1px;
  width: 100%;
  position: relative;
  z-index: 0;
  overflow: hidden;
  margin: 20px auto;
  box-sizing: border-box;
}

.carousel-3d-slider {
  position: relative;
  margin: 0 auto;
  left: 30px;
  transform-style: preserve-3d;
  -webkit-perspective: 1000px;
  -moz-perspective: 1000px;
  perspective: 1000px;
}
</style>
