<template>
  <section :class="`hero hero-theme-${computedTheme}`">
    <div class="banner">
      <img
        class="hero-bg-img"
        :src="require(`@/assets${image}`)"
        :lazy="false"
        :srcset="responsiveImage.srcSet"
      />
      <div class="hero-body">
        <div>
          <h1 class="title animated fadeInUp">
            {{ title }}
          </h1>
          <h2 class="subtitle">
            {{ subtitle }}
          </h2>
          <br />
          <div
            v-if="$slots.default"
            class="under-subtitle animated fadeInDown slower"
          >
            <slot />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
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
};
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
  font-size: 2.0rem;
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
    // top: 0;
    // left: 0;
    // right: 0;
    // bottom: 0;
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
</style>
