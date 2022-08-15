<template>
  <div class="hero text-center">
    <div class="card-main-body flex-col flex justify-center items-center relative" :style="{'--bg-image': `url(${image})`}">
      <h1 class="title animated animatedFadeInUp fadeInUp font-display text-4xl xl:text-6xl px-4 z-10">
        {{ title }}
      </h1>
      <h2 class="subtitle w-full md:w-3/4 2xl:w-1/2 px-4 mx-auto font-heading mt-2 text-lg xl:text-2xl z-10">
        {{ subtitle }}
      </h2>
      <div
        v-if="$slots.default"
        class="under-subtitle animated animatedFadeInDown fadeInDown z-10"
      >
        <slot />
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'SiteHero',
  props: {
    title: { type: String, default: '' },
    subtitle: { type: String, default: '' },
    image: { type: String, default: '' }
  },
  computed: {
    responsiveImage () {
      return { source: `@/assets${this.image}`, srcSet: '' }
    }
  }
})
</script>

<style lang="scss">
.card-main-body {
  width: 100vw;
  height: 40vh;

  &::after {
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.65);
    position: absolute;
  }

  &::before {
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    background: var(--bg-image) no-repeat center;
    background-size: cover;
    filter: blur(6px) brightness(0.5);
    z-index: 1;
  }
}

.subtitle {
  margin-bottom: 0 !important;
}

.under-subtitle {
  display: inline-block;
  border-top: 2px solid black;
  padding-top: 5px;
}

@keyframes fadeInUp {
  from {
    transform: translate3d(0, 40px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@-webkit-keyframes fadeInUp {
  from {
    transform: translate3d(0, 40px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
  -webkit-animation-duration: 1s;
  -webkit-animation-fill-mode: both;
}
.animatedFadeInUp,
.animatedFadeInDown {
  opacity: 0;
}
.fadeInUp {
  opacity: 0;
  animation-name: fadeInUp;
  -webkit-animation-name: fadeInUp;
}
@keyframes fadeInDown {
  from {
    transform: translate3d(0, -40px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@-webkit-keyframes fadeInDown {
  from {
    transform: translate3d(0, -40px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
.fadeInDown {
  opacity: 0;
  animation-name: fadeInDown;
  -webkit-animation-name: fadeInDown;
}
</style>
