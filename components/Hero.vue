<template>
  <div class="m-0 p-0">
    <div class="flex justify-center">
      <section
        class="container items-center flex-col flex fixed z-2 top-48 max-w-lg"
      >
        <h1 data-text="COPS" class="text-9xl antialiased py-4 text-center">
          COPS
        </h1>
        <p class="antialiased text-shadow-md text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nemo
          ipsa rerum molestiae, hic nobis nulla quae iusto. In dolorum cumque
          magnam nobis illo, eum odio consequuntur excepturi praesentium
          delectus?
        </p>
      </section>
    </div>
    <section id="box" class="flex flex-col overflow-hidden 2-full h-screen">
      <div
        v-for="index in 27"
        :key="index"
        class="row relative flex p-0 whitespace-nowrap text-6xl -top-110"
      >
        <div class="flex">
          <span class="iconify icon" data-icon="bi:github"></span>
          <span class="iconify icon" data-icon="fa-solid:graduation-cap"></span>
          <span class="iconify icon" data-icon="bx:bxl-apple"></span>
          <span class="iconify icon" data-icon="entypo:code"></span>
          <span
            class="iconify icon"
            data-icon="fluent:clipboard-task-list-rtl-24-regular"
          ></span>
          <span class="iconify icon" data-icon="ion:logo-angular"></span>
          <span class="iconify icon" data-icon="dashicons:database"></span>
          <span class="iconify icon" data-icon="cib:octopus-deploy"></span>
          <span class="iconify icon" data-icon="icons8:idea"></span>
          <span
            class="iconify icon"
            data-icon="fluent:branch-fork-24-filled"
          ></span>
          <span class="iconify icon" data-icon="teenyicons:npm-outline"></span>
          <span class="iconify icon" data-icon="akar-icons:react-fill"></span>
          <span class="iconify icon" data-icon="fa-brands:js-square"></span>
          <span class="iconify icon" data-icon="whh:ironman"></span>
          <span class="iconify icon" data-icon="ci:cookie"></span>
          <span class="iconify icon" data-icon="bx:bx-heart"></span>
          <span
            class="iconify icon"
            data-icon="fluent:meet-now-48-filled"
          ></span>
          <span class="iconify icon" data-icon="la:node-js"></span>
          <span
            class="iconify icon"
            data-icon="fa-solid:robot"
            data-width="65"
            data-height="55"
          ></span>
          <span class="iconify icon" data-icon="fa-solid:bolt"></span>
          <span class="iconify icon" data-icon="bx:bx-coffee-togo"></span>
          <span class="iconify icon" data-icon="bi:headset"></span>
          <span class="iconify icon" data-icon="akar-icons:google-fill"></span>
          <span class="iconify icon" data-icon="bi:facebook"></span>
          <span class="iconify icon" data-icon="brandico:linkedin-rect"></span>
          <span
            class="iconify icon"
            data-icon="fluent:people-team-16-regular"
          ></span>
          <span class="iconify icon" data-icon="fa-solid:quidditch"></span>
          <span
            class="iconify icon"
            data-icon="fluent:food-pizza-20-filled"
          ></span>
        </div>
        <div class="flex">
          <span class="iconify icon" data-icon="akar-icons:clock"></span>
          <span
            class="iconify icon"
            data-icon="ic:baseline-cloud-download"
          ></span>
          <span
            class="iconify icon"
            data-icon="fluent:brain-circuit-20-filled"
          ></span>
          <span class="iconify icon" data-icon="bi:camera-fill"></span>
          <span class="iconify icon" data-icon="uis:calender"></span>
          <span class="iconify icon" data-icon="fa-regular:copy"></span>

          <span class="iconify icon" data-icon="la:reddit"></span>
          <span class="iconify icon" data-icon="ion:logo-python"></span>
          <span class="iconify icon" data-icon="ic:baseline-copyright"></span>
          <span class="iconify icon" data-icon="dashicons:book"></span>

          <span
            class="iconify icon"
            data-icon="la:github-alt"
            data-width="65"
            data-height="65"
          ></span>
          <span class="iconify icon" data-icon="ph:chalkboard-fill"></span>
          <span
            class="iconify icon"
            data-icon="fluent:bluetooth-24-filled"
          ></span>

          <span class="iconify icon" data-icon="fa-solid:user-secret"></span>
          <span class="iconify icon" data-icon="bx:bxs-share-alt"></span>
          <span class="iconify icon" data-icon="akar-icons:discord-fill"></span>
          <span class="iconify icon" data-icon="ic:outline-android"></span>
          <span
            class="iconify icon"
            data-icon="grommet-icons:technology"
          ></span>
          <span
            class="iconify icon"
            data-icon="bi:hourglass-split"
            data-width="53"
            data-height="53"
          ></span>
          <span class="iconify icon" data-icon="bx:bxs-like"></span>
          <span
            class="iconify icon"
            data-icon="cib:google-chrome"
            data-width="57"
            data-height="57"
          ></span>
          <span class="iconify icon" data-icon="bx:bxl-vuejs"></span>
          <span class="iconify icon" data-icon="bx:bxs-trash"></span>
          <span class="iconify icon" data-icon="grommet-icons:gamepad"></span>
          <span class="iconify icon" data-icon="bx:bxs-star"></span>
          <span class="iconify icon" data-icon="bx:bxl-telegram"></span>
          <span class="iconify icon" data-icon="ant-design:html5-filled"></span>
          <span class="iconify icon" data-icon="majesticons:ghost"></span>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
#box {
  background: #111;
}
.row {
  transform: rotate(-30deg);
}

.icon {
  color: rgba(0, 0, 0, 0.5);
  transition: 1s ease-in-out;
  padding: 5px 5px;
  user-select: none;
  cursor: default;
}
.icon:hover {
  transition: 0s ease-in-out;
  color: #0f0;
  text-shadow: 0 0 120px #0f0;
}

.row div {
  animation: animate1 80s linear infinite;
  animation-delay: -80s;
}

.row div:nth-child(2) {
  animation: animate2 80s linear infinite;
  animation-delay: -40s;
}
.row:nth-child(even) div {
  animation: animate3 80s linear infinite;
  animation-delay: -80s;
}

.row:nth-child(even) div:nth-child(2) {
  animation: animate4 80s linear infinite;
  animation-delay: -40s;
}

@keyframes animate1 {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes animate2 {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-200%);
  }
}

@keyframes animate3 {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes animate4 {
  0% {
    transform: translateX(-200%);
  }
  100% {
    transform: translateX(0%);
  }
}

.container h1 {
  color: rgb(0, 238, 255);
}
.container p {
  color: aliceblue;
}

.container h1::before {
  position: absolute;
  content: attr(data-text);
  text-shadow: 0px 0px 20px rgb(0, 238, 255);
  filter: blur(10px) brightness(0);
  animation: flicker 5s linear infinite;
  animation-delay: 1s;
}
@keyframes flicker {
  0% {
    filter: blur(5px) brightness(1);
  }
  3% {
    filter: blur(5px) brightness(0);
  }
  6% {
    filter: blur(5px) brightness(0);
  }
  7% {
    filter: blur(5px) brightness(1);
  }
  8% {
    filter: blur(5px) brightness(0);
  }
  9% {
    filter: blur(5px) brightness(1);
  }
  10% {
    filter: blur(5px) brightness(0);
  }
  20% {
    filter: blur(5px) brightness(1);
  }
  50% {
    filter: blur(5px) brightness(1);
  }
  99% {
    filter: blur(5px) brightness(0);
  }
  100% {
    filter: blur(5px) brightness(1);
  }
}
</style>
