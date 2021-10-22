<template>
  <main>
    <!-- <div class="title">
      <h2 class="m-3px p-2px text-4xl">CONTACT US</h2>
    </div> -->

    <div class="head-map">
      <iframe
        :title="uniqueTitle"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.245385337551!2d82.9871848146768!3d25.26232953525508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e33ef9b1f7cdd%3A0x7555db6d623dc140!2sIndian%20Institute%20of%20Technology%20(BHU)%20Varanasi!5e0!3m2!1sen!2sin!4v1634069543926!5m2!1sen!2sin"
        width="100%"
        height="400px"
        allowfullscreen=""
        loading="lazy"
      >
      </iframe>
    </div>

    <div class="centre_box">
      <div class="text text-left w-93/100 m-auto my-20px">
        <div class="middle_text">
          <h2 class="m-3px p-2px text-4xl font-bold">Lets Talk</h2>
          <p class="m-3px p-2px">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            quos!
          </p>
        </div>
      </div>

      <div class="centre flex flex-row justify-around">
        <div
          class="
            discord
            w-609/1000
            flex flex-row
            justify-center
            items-center
            flex-wrap
          "
        >
          <iframe
            :title="uniqueTitle"
            src="https://discordapp.com/widget?id=896414386476961792&theme=dark"
            allowtransparency="true"
            frameborder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            class="online"
            width="40%"
            height="450px"
          >
          </iframe>

          <iframe
            :title="uniqueTitle"
            src="https://e.widgetbot.io/channels/896414386476961792/896414386476961795"
            class="chat"
            width="60%"
            height="450px"
          >
          </iframe>
        </div>

        <div
          class="
            clg_img
            w-26/100
            flex flex-col
            justify-center
            items-center
            relative
          "
        >
          <div class="content w-full relative overflow-hidden">
            <img
              class="w-full h-450px object-cover select-none relative"
              src="./clg.jpg"
              alt=""
            />
            <div
              class="
                over-layer
                absolute
                top-0
                left-0
                right-0
                bottom-0
                w-full
                h-full
                object-cover
                flex flex-col
                justify-center
                items-center
              "
            >
              <div
                class="
                  contactinfo
                  w-70/100
                  flex flex-col
                  justify-center
                  items-center
                "
              >
                <div class="box">
                  <div class="icon m-5px flex justify-center items-center">
                    <span
                      class="iconify"
                      data-icon="gis:poi-map"
                      style="color: #fff"
                      data-width="60"
                      data-height="60"
                      data-flip="horizontal"
                    ></span>
                  </div>
                  <div class="info">
                    <h2 class="text-3xl font-bold">Visit us</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Odio, porro? Lorem ipsum dolor, sit amet consectetur
                      adipisicing elit. Dolorum, soluta consectetur. Adipisci
                      quisquam perferendis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="social mt-70px">
      <h3 class="m-3px p-2px text-3xl font-bold">We’re also there</h3>
      <p class="m-3px p-2px">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  setup() {},
});
</script>

<style scoped>
.head-map {
  display: flex;
  justify-content: center;
}
.head-map iframe {
  filter: invert(90%) hue-rotate(180deg) brightness(80%) saturate(200%);
}
.head-map::after {
  content: 'Contact us';
  color: white;
  position: absolute;
  font-size: 80px;
  top: 15%;
  margin: 40px;
  font-weight: bolder;
}
.middle_text h2 {
  color: rgb(47, 196, 255);
}
.middle_text p {
  color: rgb(255, 255, 255);
}
.social h3 {
  color: rgb(47, 196, 255);
}
.social p {
  color: rgb(197, 192, 192);
}
.title h2 {
  padding-bottom: 20px;
  color: white;
}
.title h2:hover {
  color: aqua;
}
.centre_box {
  padding-top: 40px;
}
.discord {
  filter: brightness(90%);
  box-shadow: 5px 5px 8px 2px rgba(4, 242, 250, 0.493);
}

.clg_img {
  box-shadow: 5px 5px 8px 2px rgba(4, 242, 250, 0.493);
}

img {
  filter: brightness(50%);
  transition: all 1s;
}

.over-layer {
  transition: all 1s;
}

.over-layer .contactinfo {
  color: white;
}

.content:hover img {
  transform: scale(1.1);
}

@media screen and (min-width: 561px) and (max-width: 1100px) {
  .centre {
    flex-direction: column;
    margin: 20px;
  }
  .discord {
    width: 100%;
  }
  .clg_img {
    width: 100%;
    margin-top: 30px;
  }
  .clg_img .content {
    width: 100%;
    height: 400px;
  }
}

@media screen and (max-width: 560px) {
  .head-map::after {
    font-size: 80px;
  }
  .text {
    width: 95%;
  }
  .centre {
    flex-direction: column;
    margin: 20px;
  }
  .discord {
    width: 100%;
    flex-direction: column;
    box-shadow: none;
  }

  .discord iframe {
    width: 100%;
    height: 450px;
    margin: auto;
    margin-bottom: 30px;
    box-shadow: 5px 5px 8px 2px rgba(4, 242, 250, 0.493);
  }

  .clg_img {
    width: 100%;
    margin-top: 10px;
  }
  .clg_img .content {
    float: none;
    width: 100%;
    height: 400px;
  }
}
</style>
