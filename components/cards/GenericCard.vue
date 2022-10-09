<template>
  <div class="card">
    <div class="card-image">
      <component
        :is="link ? 'nuxt-link' : 'span'"
        :to="{ path: link, query: { subBlogs: subBlogs } }"
      >
        <figure class="overflow-hidden">
          <opti-image
            v-if="image"
            class="image_flex"
            :src="`${image}`"
            :alt="`Loading`"
            :srcset="responsiveImage.srcSet"
            :width="imageRatio[0]"
            :height="imageRatio[1]"
            :sizes="`(min-width: 768px) ${100 / 4}vw`"
          />
        </figure>
      </component>
    </div>
    <nuxt-link :to="link">
      <div class="card-content">
        <h2 :class="`${title ? '' : 'empty-content-placeholder'}`">
          {{ title }}
        </h2>
        <h3
          :class="{
            subtitle: true,
            'is-6': true,
            'empty-content-placeholder': !$slots.default,
          }"
        >
          <slot></slot>
        </h3>
      </div>
    </nuxt-link>
  </div>
</template>
<script>
import { defineComponent } from '@nuxtjs/composition-api'
import { OptiImage } from 'opti-image'
export default defineComponent({
  components: {
    OptiImage
  },
  props: {
    title: { type: String, default: '' },
    image: { type: String, default: '' },
    link: { type: String, default: '' },
    imageDimensions: { type: String, default: '16x9' }
  },
  data () {
    return { screenWidth: 2000 }
  },
  computed: {
    subBlogs () {
      return []
    },
    imageRatio () {
      return [this.screenWidth, (9 / 16) * this.screenWidth]
    },
    responsiveImage () {
      return { src: this.image, srcSet: '' }
    }
  },
  mounted () {
    this.screenWidth = (window.screen.width) * 0.90
  }
})
</script>
<style scoped lang="scss">
.image_flex {
  @media only screen and (max-width: 640px) {
    max-height: 30vh !important;
  }

  transition: transform 0.8s ease-in-out 0s;
  &:hover {
    transform: scale(1.1);
  }
}

.opti-image-before-load {
  transform: scaleY(0);
  transform-origin: center center;
}

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
  color: white;
}
</style>
