<template>
  <div class="header">
    <div class="flex flex-row justify-center items-center w-full main py-12">
      <h1 class="aboutus" style="font-family: Lato">About Us</h1>
    </div>
    <div>
      <svg
        class="waves w-full min-h-20 max-h-32"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g class="parallax">
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="0"
            fill="rgba(255,255,255,0.3)"
          />
          <use xlink:href="#gentle-wave" x="48" y="7" fill="#277680" />
          <use xlink:href="#gentle-wave" x="48" y="14" fill="#82dfeb" />
          <use xlink:href="#gentle-wave" x="48" y="7" fill="#111111" />
        </g>
      </svg>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Red+Hat+Display:900&display=swap');

h1 {
  /* font-family: 'Lato', sans-serif; */
}

.header {
  background: linear-gradient(
    55deg,
    rgba(26, 25, 24, 1) 0%,
    rgba(125, 240, 254, 0.8939950980392157) 52%
  );
}

/* Animation */

.parallax > use {
  animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
}
/*Shrinking for mobile*/
@media (max-width: 768px) {
  .waves {
    height: 40px;
    min-height: 40px;
  }
  h1 {
    font-size: 24px;
  }
}

.aboutus {
  @apply lg:text-12xl text-6xl;
  /* font-family: 'Red Hat Display', sans-serif; */
  font-weight: 900;
  background: url('/aboutus/victim-collage.webp');
  background-size: 40%;
  background-position: 50% 50%;
  -webkit-background-clip: text;
  color: rgba(0, 0, 0, 0.08);
  animation: zoomout 10s ease 500ms forwards;
}

@keyframes zoomout {
  from {
    background-size: 40%;
  }
  to {
    background-size: 10%;
  }
}
</style>
