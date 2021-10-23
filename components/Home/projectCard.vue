<template>
  <div class="wrapper relative my-4">
    <div class="box relative w-full min-h-lg flex justify-center items-center">
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
          flex-wrap flex-col
          sm:flex-row
        "
      >
        <img
          class="
            pl-5
            w-half
            sm:w-3/5
            max-w-full
            min-w-250px
            max-h-350px
            object-cover
            sm:h-md
            transition-all
            duration-400
          "
          :src="imgAddress"
          alt="ProjectImg"
        />
        <div
          class="
            info
            p-10
            w-half
            sm:w-2/5
            min-h-250px
            flex flex-col
            justify-center
            items-center
          "
        >
          <h2 class="text-3xl font-bold my-4">{{ project.name }}</h2>
          <p>{{ project.desc }}</p>
          <span v-if="project.tech" class="contentHeading text-xl mt-4"
            >Technologies Used</span
          >
          <ul class="techList list-none">
            <li v-for="tech in project.tech" :key="tech">{{ tech }}</li>
          </ul>
          <a :href="project.url" target="_blank">
            <button
              class="
                contentBtn
                text-white
                transition-all
                ease-in-out
                duration-150
                p-4
                rounded-xl
                my-4
              "
            >
              Open App
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
      required: true,
    },
  },
  computed: {
    imgAddress() {
      if (this.project.img) {
        return 'home/' + this.project.img;
      }
      return 'home/hackalog.png';
    },
  },
};
</script>

<style scoped>
.wrapper {
  width: 60vw;
  left: 10vw;
}
.box {
  background: #060c21;
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
  background: linear-gradient(235deg, #89ff00, #010615, #00bcd4);
}

.info h2 {
  color: #00bcd4;
}
.contentHeading {
  color: #09dba7;
}
.techList li::before {
  content: '🎯';
  margin: 0px 20px 0 0px;
}
.contentBtn {
  box-shadow: 0 0 40px 40px #0946ca inset, 0 0 0 0 #0946ca;
}
.contentBtn:hover {
  box-shadow: 0 0 10px 0 #0946ca inset, 0 0 10px 4px #0946ca;
}
@media only screen and (max-width: 500px) {
  .wrapper {
    left: 20px;
    right: 10px;
    width: 85%;
  }
}
</style>
