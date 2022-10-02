<template>
  <div class="wrapper relative my-4 rounded-xl">
    <div class="box relative w-full min-h-lg flex justify-center items-center rounded-3xl">
      <div
        class="
          w-half
          bg-black-500 bg-opacity-10
          absolute
          top-0
          left-0
          h-full
          block
          pointer-events-none
        "
      ></div>
      <div
        class="
          text-white
          flex
          justify-between
          items-center
          flex-col
          md:flex-row
        "
      >
        <nuxt-img
          height="500"
          class="w-full lg:w-half min-w-250px object-cover md:h-lg rounded-t-3xl md:rounded-t-none md:rounded-l-3xl"
          :src="imgAddress"
          alt="ProjectImg"
          loading="lazy"
        />
        <div
          class="
            info
            px-10
            w-full
            lg:w-half
            min-h-250px
            flex flex-col
            justify-center
            items-center
            text-center
          "
        >
          <h2 class="text-3xl font-semibold my-4">{{ project.name }}</h2>
          <p class="text-lg font-light md:leading-relaxed lg:leading-loose">{{ project.desc }}</p>
          <span v-if="project.tech" class="contentHeading text-xl mt-4">
            Technologies Used</span
          >
          <ul class="techList list-none text-left">
            <li v-for="tech in project.tech" :key="tech">{{ tech }}</li>
          </ul>
          <a :href="project.url" target="_blank" rel="noreferrer">
            <button
              class="
                contentBtn
                text-white
                transition-all
                ease-in-out
                duration-150
                px-6
                py-2
                rounded-full
                mt-4
                md:mb-4
                mb-8
                font-heading
              "
            >
              Explore
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  computed: {
    imgAddress () {
      if (this.project.img) {
        return 'home/' + this.project.img
      }
      return 'home/hackalog.webp'
    }
  }
}
</script>

<style scoped>
.wrapper {
  width: 60vw;
  left: 10vw;
}
.box {
  background: var(--project-card-background);
}
.box::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: #fff;
  z-index: -1;
}
.box::after {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: #fff;
  z-index: -2;
  filter: blur(40px);
}
.box::before,
.box::after {
  border-radius: 1.5rem;
  background: linear-gradient(235deg, var(--project-card-glow-primary), #010615, var(--project-card-glow-secondary));
}
.info h2 {
  color: #00bcd4;
}
.contentHeading {
  color: #09dba7;
}
.techList li::before {
  content: '🎯';
  margin: 0px 16px 0 0px;
}
.contentBtn {
  box-shadow: 0 0 40px 40px var(--project-card-content) inset, 0 0 0 0 var(--project-card-content);
}
.contentBtn:hover {
  box-shadow: 0 0 10px 0 var(--project-card-content) inset, 0 0 10px 4px var(--project-card-content);
}
@media only screen and (max-width: 1000px) {
  .wrapper {
    left: 5%;
    right: 5%;
    width: 90%;
  }
}
</style>
