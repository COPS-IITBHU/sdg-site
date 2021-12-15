<template>
  <section :class="`hero hero-theme-${computedTheme}`">
    <div class="banner">
      <nuxt-img
        alt="Loading Image"
        class="hero-bg-img"
        :src="`${image}`"
        :lazy="false"
        :srcset="responsiveImage.srcSet"
      />
      <div class="hero-body">
        <div>
          <h1 class="title animated animatedFadeInUp fadeInUp">
            {{ title }}
          </h1>
          <h2 class="subtitle">
            {{ subtitle }}
          </h2>
          <br />
          <div
            v-if="$slots.default"
            class="under-subtitle animated animatedFadeInDown fadeInDown"
          >
            <slot />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { defineComponent } from '@nuxtjs/composition-api';
export default defineComponent({
  name: 'SiteHero',
  props: {
    title: { type: String, default: '' },
    subtitle: { type: String, default: '' },
    image: { type: String, default: '' },
    color: { type: String, default: '#469af0' },
    theme: { type: String, default: '' },
  },
  computed: {
    responsiveImage() {
      return { source: `@/assets${this.image}`, srcSet: '' };
    },
    computedTheme() {
      if (this.theme === '') {
        return 'dark';
      }
      return this.theme || 'mist';
    },
  },
});
</script>

<style lang="scss" scoped>
.hero {
  margin-top: 52px;
  background-size: cover !important;
  background-position: center;
  text-align: center;
  overflow: hidden;
  position: relative;
  margin-bottom: 52px;
}

.banner {
  width: 100vw;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.title {
  font-weight: 400;
  font-size: 2rem;
  @media (min-width: 768px) {
    font-size: 3.2rem;
  }
}
.subtitle,
.under-subtitle {
  padding: 0;
  margin: 0;
}
.subtitle {
  font-size: 1rem;
  margin-bottom: 0 !important;
}
.under-subtitle {
  display: inline-block;
  font-size: 0.8rem;
  border-top: 2px solid black;
  padding-top: 5px;
}
.opti-image {
  opacity: 0;
}
.opti-image-loaded {
  opacity: 0.12;
  animation: blurIn 4.5s ease;
}
</style>
<style lang="scss">
.hero {
  .hero-bg-img {
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    filter: blur(8px);
    -webkit-filter: blur(8px);

    /* Full height */
    height: 100%;

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .opti-image {
    opacity: 0;
  }
  .opti-image-loaded {
    opacity: 1;
  }
}
.hero-theme-mist {
  .hero-bg-img {
    filter: grayscale(1);
  }
  .opti-image-loaded {
    opacity: 0.12;
    animation: blurInGrayscale 4.5s ease;
  }
}
.hero-theme-dark,
.hero-theme-light {
  &.hero:after {
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.65);
    position: absolute;
  }
  .hero-body {
    position: relative;
    z-index: 2;
  }
}
.hero-theme-dark {
  .title,
  .subtitle,
  .under-subtitle,
  .under-subtitle strong {
    color: white;
  }
}
.hero-theme-light.hero {
  &:after {
    background: rgba(255, 255, 255, 0.6);
  }
  .title,
  .subtitle,
  .under-subtitle,
  .under-subtitle strong {
    text-shadow: 1px 1px 2px white;
  }
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
