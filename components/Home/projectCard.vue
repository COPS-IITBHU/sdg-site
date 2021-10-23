<template>
  <div class="wrapper relative my-4">
    <div class="box relative w-full min-h-lg flex justify-center items-center">
      <div
        class="glass absolute top-0 left-0 h-full block pointer-events-none"
      ></div>
      <div
        class="
          content
          flex
          justify-between
          items-center
          flex-wrap flex-col
          sm:flex-row
        "
      >
        <img
          class="projectImg max-w-full object-cover sm:h-md lg:h-lg"
          :src="imgAddress"
          alt="ProjectImg"
        />
        <div class="info flex flex-col justify-center items-center">
          <h2 class="text-3xl font-bold my-4">{{ project.name }}</h2>
          <p>{{ project.desc }}</p>
          <span v-if="project.tech" class="contentHeading text-xl mt-4"
            >Technologies Used</span
          >
          <ul class="techList list-none">
            <li v-for="tech in project.tech" :key="tech">{{ tech }}</li>
          </ul>
          <a :href="project.url" target="_blank">
            <button class="contentBtn p-4 rounded-xl my-4">Open App</button>
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
.box .glass {
  width: 50%;
  background: rgba(255, 255, 255, 0.1);
}
.box .content {
  color: #fff;
}
.projectImg {
  width: 50%;
  min-width: 250px;
  transition: all 0.4s;
  min-height: 250px;
}
.info {
  width: 50%;
  padding: 5%;
  min-width: 250px;
  min-height: 250px;
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
  color: white;
  box-shadow: 0 0 40px 40px #0946ca inset, 0 0 0 0 #0946ca;
  transition: all 150ms ease-in-out;
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
