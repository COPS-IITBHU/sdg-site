<template>
  <div class="card">
    <div class="card-image">
      <component
        :is="link ? 'nuxt-link' : 'span'"
        :to="{ path: link, query: { subBlogs: subBlogs } }"
      >
        <figure :class="`image is-${imageRatioClass}`">
          <opti-image
            v-if="image"
            :src="`${image}`"
            :srcset="responsiveImage.srcSet"
            :width="imageRatio[0]"
            :height="imageRatio[1]"
            :sizes="`(min-width: 768px) ${100 / 4}vw`"
          />
        </figure>
      </component>
    </div>
    <div class="card-content">
      <nuxt-link :to="link">
        <h2 :class="`${title ? '' : 'empty-content-placeholder'}`">
          {{ title }}
        </h2>
        <h4
          :class="{
            subtitle: true,
            'is-6': true,
            'empty-content-placeholder': !$slots.default,
          }"
        >
          <slot></slot>
        </h4>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
import { OptiImage } from 'opti-image';
import { defineComponent } from '@nuxtjs/composition-api';
const imageDimensionDefault = '16x9';
export default defineComponent({
  components: {
    OptiImage,
  },
  props: {
    title: { type: String, default: '' },
    image: { type: String, default: '' },
    link: { type: String, default: '' },
    imageDimensions: { type: String, default: imageDimensionDefault },
  },
  computed: {
    subBlogs() {
      return [];
    },
    imageRatioClass() {
      const imageDimensions = this.imageDimensions || imageDimensionDefault;
      return imageDimensions.toLowerCase().replace('x', 'by');
    },
    imageRatio() {
      const imageDimensions = this.imageDimensions || imageDimensionDefault;
      return imageDimensions
        .toLowerCase()
        .split('x')
        .map((size) => {
          return size * 2000;
        });
    },
    responsiveImage() {
      return { src: this.image, srcSet: '' };
    },
  },
});
</script>
<style scoped lang="scss">
.subtitle {
  opacity: 0.5;
  font-size: 0.8rem;
}
.empty-content-placeholder {
  background: transparent;
  color: transparent;
  position: relative;
  height: 1em;
  &:before {
    transform-origin: left;
    content: '';
    background: #eee;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    animation: fillHorizontal 2s linear infinite;
  }
  &.subtitle {
    width: 70%;
  }
}
.card-content {
  padding: 1rem;
}
</style>
<style lang="scss">
.opti-image-loaded + .spinner-wrapper {
  display: none;
}
.card img {
  transition: 0.8s ease-in-out all;
  &:hover {
    transform: scale(1.02);
  }
}
</style>
