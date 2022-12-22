<template>
  <section class="mx-auto min-h-screen flex flex-col justify-evenly text-center relative">
    <ul class="flex flex-col md:flex-row justify-evenly relative font-Jura">
      <li>
        <h1
        class="text-5xl xl:text-8xl antialiased mx-2 my-2 text-center tracking-widest"
        >
          Design
        </h1>
      </li>
      <li>
        <h1
        class="text-5xl xl:text-8xl antialiased mx-2 my-2 text-center tracking-widest relative top-16"
        >
          Develop
        </h1>
      </li>
      <li>
        <h1
        class="text-5xl xl:text-8xl antialiased mx-2 my-2 text-center tracking-widest relative top-32"
        >
          Deploy
        </h1>
      </li>
    </ul>
    <figure>
      <h2 class="text-4xl md:text-5xl lg:text-6xl font-Jura pt-10">
        Software Development Group
      </h2>
      <figcaption class="text-xl font-medium tracking-widest pt-5 shapes">Club of Programmers, IIT (BHU) Varanasi</figcaption>
    </figure>
    <!-- <p class="antialiased text-shadow-md px-4 text-lg lg:text-xl max-w-3xl mx-auto">
      We at Software Development Group (SDG) are a bunch of software designers, architects and developers who aim to
      encourage the development of technology and innovation in IIT (BHU)
      campus (and beyond) by learning, sharing knowledge and solving
      problems together.
    </p> -->
    <aside aria-hidden="true" class="absolute inset-0 overflow-hidden -z-10">
     
      <img src="/shapes/vector1.png" alt="dots" class="ShapesBackground_shape   " style="top: 12rem; right: 70vw; width: 25%; height: auto; opacity: 0.2;">

      <img src="/shapes/vector2.png" alt="hash" class="ShapesBackground_shape  " style="top: 5%; right: 40vw; width: 50%; height: auto; opacity: 0.2;">
   
      <img src="/shapes/vector3.png" alt="triangle" class=" sm:block ShapesBackground_shape  bg-center " style="top: 50%; right: 37vw; width: 15.5%; height: auto; opacity: 0.2;">

      <img src="/shapes/vector4.png" alt="waves" class="ShapesBackground_shape bg-center  " style="top: 4%; right: 6vw; width: 50%; height: auto; opacity: 0.2;">
     
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
    // --blue: invert(53%) sepia(80%) saturate(4689%) hue-rotate(189deg) brightness(92%) contrast(93%);
    // --teal: invert(76%) sepia(39%) saturate(578%) hue-rotate(110deg) brightness(91%) contrast(88%);
    position: absolute;
    // filter: var(--blue);
    opacity: 0.75;
}
.shapes{
  -webkit-text-fill-color: #08FD7C;
  opacity: 0.9;
}
</style>
