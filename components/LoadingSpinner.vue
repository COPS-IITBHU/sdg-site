<template>
  <aside class="w-60 h-60 flex justify-center items-center bg-transparent mx-auto">
    <div class="absolute w-40 h-40 p-2 flex items-center justify-center leo-border-1">
      <div class="w-full h-full leo-core-1"></div>
    </div>
    <div class="absolute w-40 h-40 p-2 flex items-center justify-center leo-border-2">
      <div class="w-full h-full leo-core-2"></div>
    </div>
  </aside>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'LoadingSpinner'
})
</script>

<style>
@keyframes spin3D {
  from {
    transform: rotate3d(.5,.5,.5,360deg);
  }
  to{
    transform: rotate3d(0,0,0,0deg);
  }
}

/* SPINNING CIRCLE */

.leo-border-1 {
  border-radius: 50%;
  background: rgb(63,249,220);
  background: linear-gradient(0deg, rgba(63,249,220,0.1) 33%, rgba(63,249,220,1) 100%);
  animation: spin3D 1.8s linear 0s infinite;
}

.leo-core-1 {
  background-color: #37474faa;
  border-radius: 50%;
}

.leo-border-2 {
  border-radius: 50%;
  background: rgb(251, 91, 83);
  background: linear-gradient(0deg, rgba(251, 91, 83, 0.1) 33%, rgba(251, 91, 83, 1) 100%);
  animation: spin3D 2.2s linear 0s infinite;
}

.leo-core-2 {
  background-color: #1d2630aa;
  border-radius: 50%;
}
</style>
