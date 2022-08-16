<template>
  <section class="mx-auto min-h-screen flex flex-col justify-evenly text-center relative">
    <ul class="flex flex-col md:flex-row justify-evenly">
      <li v-for="text in headingText" :key="text">
        <h1
          class="text-5xl lg:text-7xl antialiased mx-2 my-2 text-center tracking-widest"
        >
          {{ text }}
        </h1>
      </li>
    </ul>
    <figure>
      <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold">
        Software Development Group
      </h2>
      <figcaption class="text-xl font-medium tracking-widest">Club of Programmers, IIT (BHU) Varanasi</figcaption>
    </figure>
    <p class="antialiased text-shadow-md px-4 text-lg lg:text-xl max-w-3xl mx-auto">
      We at Software Development Group (SDG) are a bunch of software designers, architects and developers who aim to
      encourage the development of technology and innovation in IIT (BHU)
      campus (and beyond) by learning, sharing knowledge and solving
      problems together.
    </p>
    <aside aria-hidden="true" class="absolute inset-0 overflow-hidden -z-10">
      <img src="/shapes/dots.svg" alt="dots" class="ShapesBackground_shape" style="top: 40rem; left: 90vw; width: 10.5rem; height: 12.75rem; filter: var(--teal); opacity: 0.25;">
      <img src="/shapes/dots.svg" alt="dots" class="ShapesBackground_shape" style="top: 40rem; right: 90vw; width: 10.5rem; height: 12.75rem; opacity: 0.25;">
      <img src="/shapes/hash.svg" alt="hash" class="ShapesBackground_shape" style="top: 10rem; left: 9vw; width: 3.75rem; height: 3.75rem; filter: var(--teal);">
      <img src="/shapes/hash.svg" alt="hash" class="ShapesBackground_shape" style="top: 10rem; right: 9vw; width: 3.75rem; height: 3.75rem;">
      <img src="/shapes/triangle.svg" alt="triangle" class="hidden sm:block ShapesBackground_shape" style="top: 20rem; left: 24vw; width: 4.25rem; height: 4.25rem; transform: rotate(18deg); filter: var(--teal);">
      <img src="/shapes/triangle.svg" alt="triangle" class="hidden sm:block ShapesBackground_shape" style="top: 20rem; right: 24vw; width: 4.25rem; height: 4.25rem; transform: rotate(-26deg);">
      <img src="/shapes/waves.svg" alt="waves" class="ShapesBackground_shape" style="top: 30rem; left: 20vw; width: 7.25rem; height: 3.625rem;">
      <img src="/shapes/waves.svg" alt="waves" class="ShapesBackground_shape" style="top: 30rem; right: 20vw; width: 6.375rem; height: 3.125rem; filter: var(--teal);">
    </aside>
  </section>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  data () {
    return {
      animation: null,
      headingText: [
        'Design',
        'Develop',
        'Deploy'
      ]
    }
  },
  mounted () {
    const textShadowDepth = 8

    const color = '#34b3c1'

    let t = '0px 0px '
    let TextShadowString = t + color
    let fromTextShadowString = t + color

    for (let i = 1; i <= textShadowDepth; i++) {
      t = `, -${i}px ${i}px `
      TextShadowString += t + color
      fromTextShadowString += ', 0px 0px ' + color
    }

    this.animation = this.$gsap
      .fromTo('h1', {
        textShadow: fromTextShadowString
      },
      {
        duration: 1.5,
        stagger: 1.3,
        delay: 1,
        ease: 'sine',
        repeat: -1,
        yoyo: true,
        yoyoEase: 'slow',
        textShadow: TextShadowString
      }
      )
  }
})
</script>

<style scoped lang="scss">
.ShapesBackground_shape {
    --blue: invert(53%) sepia(80%) saturate(4689%) hue-rotate(189deg) brightness(92%) contrast(93%);
    --teal: invert(76%) sepia(39%) saturate(578%) hue-rotate(110deg) brightness(91%) contrast(88%);
    position: absolute;
    filter: var(--blue);
    opacity: 0.2;
}
</style>
