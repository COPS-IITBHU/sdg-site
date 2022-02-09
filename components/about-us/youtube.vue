<template>
  <section class="lg:container mx-auto my-20">
    <div class="video-background">
      <iframe
        :src="videoURL"
        class="wow zoomIn"
        srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube-nocookie.com/embed/xnkg1tSivRU><img src=/aboutus/youtube-thumbnail.webp alt='Trailer Club Of ProgrammerS IIT BHU'><span>▶</span></a>"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        title="Trailer Club Of ProgrammerS IIT BHU"
      ></iframe>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup () {
    const videoURL = 'https://www.youtube-nocookie.com/embed/xnkg1tSivRU'
    return {
      videoURL
    }
  }
})
</script>

<style lang="scss" scoped>
#trailer {
  background-color: var(--white) !important;
}

.video-background {
  position: relative;
  width: inherit;
  height: inherit;
  padding-bottom: 56.25%;
  background-color: var(--white);
  box-shadow: 8px 8px 8px var(--bg);

  iframe {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
  }
}
</style>
