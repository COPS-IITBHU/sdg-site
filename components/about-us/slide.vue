<template>
  <div class="carousel-3d-slide" :style="slideStyle" :class="computedClasses">
    <slot
      :index="index"
      :isCurrent="isCurrent"
      :leftIndex="leftIndex"
      :rightIndex="rightIndex"
    />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: {
    index: {
      type: Number,
    },
  },
  data() {
    return {
      currentIndex: 0,
      visible: 5,
      inverseScaling: 300,
      perspective: 35,
      width: 360,
      styles: {},
      zIndex: 999,
      border: 1,
      slideWidth: 362,
      slideHeight: 272,
      animationSpeed: 500,
      total: 10,
    };
  },
  computed: {
    isCurrent() {
      return this.index === this.currentIndex;
    },
    isLastSlide() {
      return this.currentIndex === this.total - 1;
    },
    isFirstSlide() {
      return this.currentIndex === 0;
    },
    leftIndices() {
      let n = (this.visible - 1) / 2;

      n = Math.ceil(n);

      const indices = [];

      for (let m = 1; m <= n; m++) {
        indices.push((this.currentIndex - m) % this.total);
      }
      return indices;
    },
    leftIndex() {
      return this.getSideIndex(this.leftIndices);
    },
    rightIndices() {
      let n = (this.visible - 1) / 2;

      n = Math.floor(n);
      const indices = [];

      for (let m = 1; m <= n; m++) {
        indices.push((this.currentIndex + m) % this.total);
      }
      return indices;
    },
    rightIndex() {
      return this.getSideIndex(this.rightIndices);
    },

    leftOutIndex() {
      let n = (this.visible - 1) / 2;

      n = Math.ceil(n);
      n++;
      return this.currentIndex - n;
    },

    rightOutIndex() {
      let n = (this.visible - 1) / 2;

      n = Math.floor(n);
      n++;

      return this.total - this.currentIndex - n <= 0
        ? -parseInt(this.total - this.currentIndex - n, 10)
        : this.currentIndex + n;
    },

    slideStyle() {
      let styles = {};

      if (!this.isCurrent) {
        const lIndex = this.leftIndex;
        const rIndex = this.rightIndex;
        if (rIndex >= 0 || lIndex >= 0) {
          styles =
            rIndex >= 0
              ? this.calculatePosition(rIndex, true, this.zIndex)
              : this.calculatePosition(lIndex, false, this.zIndex);
          styles.opacity = 1;
          styles.visibility = 'visible';
        }

        if (this.matchIndex(this.leftOutIndex)) {
          styles = this.calculatePosition(
            this.leftIndices.length - 1,
            false,
            this.zIndex
          );
        } else if (this.matchIndex(this.rightOutIndex)) {
          styles = this.calculatePosition(
            this.rightIndices.length - 1,
            true,
            this.zIndex
          );
        }
      }

      return Object.assign(styles, {
        'border-width': this.border + 'px',
        width: this.slideWidth + 'px',
        height: this.slideHeight + 'px',
        transition: ' transform ' + this.animationSpeed + 'ms, ',

        // transition:
        //   ' transform ' +
        //   this.animationSpeed +
        //   'ms, ' +
        //   '               opacity ' +
        //   this.parent.animationSpeed +
        //   'ms, ' +
        //   '               visibility ' +
        //   this.parent.animationSpeed +
        //   'ms',
      });
    },
    computedClasses() {
      return {
        [`left-${this.leftIndex + 1}`]: this.leftIndex >= 0,
        [`right-${this.rightIndex + 1}`]: this.rightIndex >= 0,
        current: this.isCurrent,
      };
    },
  },
  methods: {
    getSideIndex(array) {
      let index = -1;

      array.forEach((pos, i) => {
        if (this.matchIndex(pos)) {
          index = i;
        }
      });

      return index;
    },
    matchIndex(index) {
      return index >= 0
        ? this.index === index
        : this.total + index === this.index;
    },
    calculatePosition(i, positive, zIndex) {
      const z = this.inverseScaling + (i + 1) * 100;
      const y = this.perspective;
      const leftRemain = parseInt((i + 1) * (this.width / 1.5), 10);
      const transform = positive
        ? 'translateX(' +
          leftRemain +
          'px) translateZ(-' +
          z +
          'px) ' +
          'rotateY(-' +
          y +
          'deg)'
        : 'translateX(-' +
          leftRemain +
          'px) translateZ(-' +
          z +
          'px) ' +
          'rotateY(' +
          y +
          'deg)';
      const top = 0;

      return {
        transform,
        top,
        zIndex: zIndex - (Math.abs(i) + 1),
      };
    },
  },
});
</script>

<style>
.carousel-3d-slide {
  position: absolute;
  opacity: 0;
  visibility: hidden;
  overflow: hidden;
  top: 0;
  border-radius: 1px;
  border-color: #000;
  border-color: rgba(0, 0, 0, 0.4);
  border-style: solid;
  background-size: cover;
  background-color: #ccc;
  display: block;
  margin: 0;
  box-sizing: border-box;
}

.carousel-3d-slide img {
  width: 100%;
}

.carousel-3d-slide.current {
  opacity: 1 !important;
  visibility: visible !important;
  transform: none !important;
  z-index: 999;
}
</style>
