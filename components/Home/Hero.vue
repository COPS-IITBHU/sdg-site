<template>
  <section class="mx-auto min-h-screen flex flex-col justify-evenly text-center relative">
    <ul class="flex flex-col md:flex-row justify-evenly" style="margin-top: 4rem; margin-bottom: 2rem;">
      <li v-for="text in headingText" :key="text">
        <h1
          class="text-5xl lg:text-7xl antialiased mx-2 my-2 text-center tracking-widest"
        >
          {{ text }}
        </h1>
      </li>
    </ul>
    <figure>
      <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold" style="margin: 1rem;">
        Software Development Group
      </h2>
      <figcaption class="text-xl font-medium tracking-widest" style="margin: 1rem;">Club of Programmers, IIT (BHU) Varanasi</figcaption>
    </figure>
    <p class="antialiased text-shadow-md px-4 text-lg lg:text-xl max-w-3xl mx-auto" style="margin-top: 2rem;">
      We at Software Development Group (SDG) are a bunch of software designers, architects and developers who aim to
      encourage the development of technology and innovation in IIT (BHU)
      campus (and beyond) by learning, sharing knowledge and solving
      problems together.
    </p>

    <div class="blob"></div>
    <div class="blob1"></div>

    <div style="margin: auto;">
          <div class="conn" style="padding:3rem; display: flex; flex-direction: row;">
              
            <!-- <div class="box"></div> -->

              <div class="cardd" style="margin:5rem; ">
                      <h2 class="text-3xl md:text-3xl lg:text-5xl font-bold" style="margin-bottom: .5rem; ">60000+</h2>
                      <h5 class="text-1xl md:text-2xl lg:text-3xl font-bold" style="color: #08FDD8;">Reach</h5>
              </div>
          
              <div class="cardd" style="margin:5rem; ">
                      <h2 class="text-3xl md:text-3xl lg:text-5xl font-bold" style="margin-bottom: .5rem; ">350+</h2>
                      <h5 class="text-1xl md:text-2xl lg:text-3xl font-bold" style="color: #08FDD8;">Members</h5>
              </div>
          
            
              <div class="cardd" style="margin:5rem; ">
                      <h2 class="text-3xl md:text-3xl lg:text-5xl font-bold" style="margin-bottom: .5rem; ">20+</h2>
                      <h5 class="text-1xl md:text-2xl lg:text-3xl font-bold" style="color: #08FDD8;" >Projects</h5>
              </div>
          
              
          </div>
        </div>
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

.blob{
  width: 260px;
  height: 160px;
  border-radius: 350px;
  background-color: #005C43;
  box-shadow: 0 0 20px #02a28a;
  position: absolute;
  top: 500px; left: -180px;
  z-index: -99;
}

.blob1{
  width: 260px;
  height: 160px;
  border-radius: 350px;
  background-color: #005C43;
  box-shadow: 0 0 20px #02a28a;
  position: absolute;
  top: 600px; right: -180px;
  z-index: -99;
}


@media screen and (max-width: 700px) {
        .conn{
          display: flex; flex-direction: column !important;
        }
      }
@media screen and (max-width: 800px) {
        .blob{
           visibility:hidden;
        }
        .blob1{
           visibility:hidden;
        }
      }      

</style>
