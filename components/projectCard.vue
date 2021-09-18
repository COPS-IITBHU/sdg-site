<template>
  <div class="card-container">
    <div class="card-body">
      <div class="card-side side-front">
        <div class="container">
          <div class="row">
            <div class="col-xs-7 justify-center">
              <img src="./hackalog.png" alt="icon" />
            </div>

            <div class="col-xs-5 side-front-content">
              <h2>COPS</h2>

              <h1>{{ title }}</h1>

              <p>The home for hackathons organised under COPS IIT(BHU)</p>

              <p>
                Build products, practice skills, learn technologies, win
                prizes,and connect with people..
              </p>
              <p>sa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
export default defineComponent({
  props: {
    title: {
      type: String,
      default: '',
    },
  },
});
</script>

<style scoped>
/*- Typograpy and resets -*/
html {
  font-size: 16px;
}
body {
  font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 100%;
  background-color: #fff;
}
h1,
h2 {
  margin-top: 0;
}
h1 {
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 700;
}
h2 {
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: 400;
}
/*- Card container -*/
.card-container {
  position: relative;
  z-index: 1;
  margin: 32px auto;
  max-width: 920px;
  height: 420px;
  perspective: 1000px;
}
img {
  max-width: 100%;
  max-height: 100%;
}
/*- Card body -*/
.card-body {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: all 0.7s linear;
}
/*- Flipping the card -*/
/*- Card sides -*/
.card-side {
  position: absolute;
  top: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  color: #212121;
  background-color: #fff;
  backface-visibility: hidden;
  box-shadow: 0 10px 35px rgba(50, 50, 93, 0.1), 0 2px 15px rgba(0, 0, 0, 0.07);
}
/*- Front side -*/
.side-front [class^='col-xs']:first-of-type {
  padding-left: 0;
}
.side-front-content {
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 32px;
}
@media (min-width: 576px) {
  .col-xs-7 {
    grid-column: span 7;
  }
  .col-xs-5 {
    grid-column: span 5;
  }
}
.container {
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
}
.row {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 20px;
  align-items: center;
}
</style>
