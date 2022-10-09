<template>
  <div class="carousel-3d-controls">
    <a
      href="#"
      class="prev"
      :class="{ disabled: !parent.isPrevPossible }"
      :style="`width: ${width}px; height: ${height}px; line-height: ${height}px;`"
      aria-label="Previous slide"
      @click.prevent="parent.goPrev()"
    >

      <span class="control-prev"
            v-html="prevHtml"
      >
      </span>
    </a>
    <a
      href="#"
      class="next"
      :class="{ disabled: !parent.isNextPossible }"
      :style="`width: ${width}px; height: ${height}px; line-height: ${height}px;`"
      aria-label="Next slide"
      @click.prevent="parent.goNext()"
    >
      <span class="control-next" v-html="nextHtml"></span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Controls',
  props: {
    width: {
      type: [String, Number],
      default: 50
    },
    height: {
      type: [String, Number],
      default: 60
    },
    prevHtml: {
      type: String,
      default: '&lsaquo;'
    },
    nextHtml: {
      type: String,
      default: '&rsaquo;'
    }
  },
  data () {
    return {
      parent: this.$parent
    }
  }
}
</script>

<style scoped>
.carousel-3d-controls {
  position: absolute;
  bottom: 20%;
  height: 0;
  left: 37.5%;
  width: 20%;
  z-index: 1000;
  min-width: 12rem;
}
.next,
.prev {
  width: 60px;
  position: absolute;
  z-index: 1010;
  font-size: 60px;
  color: white;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-decoration: none;
  top: 0;
}
.next:hover,
.prev:hover {
  cursor: pointer;
  opacity: 0.8;
  /* filter: brightness(2); */
}
.prev {
  left: 10px;
  text-align: center;
}
.next {
  right: 10px;
  text-align: center;
}
.disabled {
  opacity: 0.2;
  cursor: default;
}
.disabled:hover {
  cursor: default;
  opacity: 0.2;
}
.control-next{
  background: rgb(0, 238, 255);
  padding: 0.5rem 50px;
  border-radius: 49% 51% 50% 50% / 0% 57% 43% 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  margin-bottom: 2rem;
  box-shadow: 0 0rem 3rem rgb(0, 238, 255);
}
.control-prev{
  border-radius: 49% 51% 50% 50% / 50% 0% 100% 50% ;
  background: rgb(0, 238, 255);
  padding: 0.5rem 50px;
  display: flex;
  justify-content: center;
  align-content: center;
  box-shadow: 0 0rem 3rem rgb(0, 238, 255);
}
@media(max-width: 963px) {
  .carousel-3d-controls {
    left: 27%;
    width: 40%;
  }
  .control-next,
  .control-prev{
    padding: 0.4rem 40px;
  }
  .next,.prev{
    font-size: 50px;
  }
}
@media(max-width: 700px){
  .carousel-3d-controls{
    width: 50%;
    left: 22%;
  }
  .control-next,
  .control-prev{
    padding: 0.1rem 35px;
  }
  .next,.prev{
    font-size: 40px;
  }
}
@media(max-width:385px){
  .carousel-3d-controls{
    left: calc(47% - 6rem);
  }
  .control-next,
  .control-prev{
    padding: 0.4px 25px;
  }
  .next,.prev{
    font-size: 30px;
  }
}
</style>
