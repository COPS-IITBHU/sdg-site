<template>
  <body class="bg-dark-400">
    <div class="gallery w-full">
      <div
        class="
          gallery-container
          sm:max-h-xs
          max-w-7/10
          h-400px
          relative
          flex
          m-auto
          items-center
        "
      >
        <div
          v-for="achievement in achievements"
          :key="achievement.index"
          class="
            gallery-item
            bg-gray-200
            h-30
            w-45
            z-0
            opacity-0
            absolute
            transition-all
            ease-in-out
            duration-450
            flex flex-col
          "
          :class="galleryItemNumber[achievement.index]"
        >
          <h1
            class="
              font-sans
              bg-gradient-to-r
              from-blue-500
              to-green-400
              text-transparent
              bg-clip-text
              mt-1
            "
          >
            <b>{{ achievement.title }}</b>
          </h1>
          <h3
            class="
              font-serif
              text-center
              align-middle
              justify-center
              items-center
              flex flex-grow
              px-1
              sm:px-4
            "
          >
            {{ achievement.description }}
          </h3>
        </div>
        <!-- <div
          class="box gallery-item bg-gray-200"
          :class="gallery_item_number[0]"
        >
          <h1
            class="
              font-sans
              bg-gradient-to-r
              from-blue-500
              to-green-400
              text-transparent
              bg-clip-text
            "
          >
            <b>CSAW 2021</b>
          </h1>
          <br />
          <h3 class="font-serif">
            2 teams from IIT(BHU) made it to the finals of the
            <a
              href="https://ctf.csaw.io/scoreboard"
              target="_blank"
              class="text-blue-900 hover:text-green-800"
            >
              Cyber Security Awareness Week (CSAW).</a
            >
          </h3>
        </div> -->
      </div>
      <button
        class="
          gallery-controls-previous
          p-2
          mr-3vw
          transform
          rotate-135
          inline-block
          border-solid border-white border-r-3 border-l-0 border-u-0 border-b-3
          hover:border-blue-300
          focus:outline-none
          relative
        "
        @click="goPrevious"
      ></button>
      <button
        class="
          gallery-controls-next
          p-2
          ml-3vw
          transform
          -rotate-45
          inline-block
          border-solid border-white border-r-3 border-l-0 border-u-0 border-b-3
          hover:border-blue-300
          focus:outline-none
          relative
        "
        @click="goNext"
      ></button>
    </div>
  </body>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    achievements: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  data() {
    return {
      galleryItemNumber: [
        'gallery-item-1',
        'gallery-item-2',
        'gallery-item-3',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        'gallery-item-4',
        'gallery-item-5',
      ],
    };
  },

  methods: {
    goNext() {
      const tmp = this.galleryItemNumber.pop();
      this.galleryItemNumber.unshift(tmp as string);
    },
    goPrevious() {
      const tmp = this.galleryItemNumber.shift();
      this.galleryItemNumber.push(tmp as string);
    },
  },
});
</script>

<style scoped>
.gallery-item-3,
.gallery-item-4 {
  left: 15%;
  opacity: 0.4;
  transform: translateX(-50%);
}

.gallery-item-2,
.gallery-item-5 {
  height: 200px;
  opacity: 1;
  width: 300px;
  z-index: 1;
}

.gallery-item-5 {
  left: 30%;
  transform: translateX(-50%);
}

.gallery-item-1 {
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.6),
    0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25),
    0 0 100px rgba(255, 255, 255, 0.1);
  height: 300px;
  opacity: 1;
  left: 50%;
  transform: translateX(-50%);
  width: 450px;
  z-index: 2;
}

.gallery-item-1 h1 {
  font-size: 30px;
  transition: all 0.3s ease-in-out;
}
.gallery-item-1 h3 {
  font-size: 20px;
  transition: all 0.3s ease-in-out;
}
.gallery-item-2 h1 {
  font-size: 20px;
  transition: all 0.3s ease-in-out;
}
.gallery-item-2 h3 {
  font-size: 13.5px;
  transition: all 0.3s ease-in-out;
}
.gallery-item-3 h1 {
  font-size: 15px;
  transition: all 0.3s ease-in-out;
}
.gallery-item-3 h3 {
  font-size: 10px;
  transition: all 0.3s ease-in-out;
}
.gallery-item-4 h1 {
  font-size: 15px;
  transition: all 0.3s ease-in-out;
}
.gallery-item-4 h3 {
  font-size: 10px;
  transition: all 0.3s ease-in-out;
}
.gallery-item-5 h1 {
  font-size: 20px;
  transition: all 0.3s ease-in-out;
}
.gallery-item-5 h3 {
  font-size: 13.5px;
  transition: all 0.3s ease-in-out;
}

.gallery-item-2 {
  left: 70%;
  transform: translateX(-50%);
}

.gallery-item-3 {
  left: 85%;
  opacity: 0.4;
  transform: translateX(-50%);
}

@media only screen and (max-width: 600px) {
  .gallery-item {
    height: 90px;
    opacity: 0;
    position: absolute;
    transition: all 0.3s ease-in-out;
    width: 134px;
    z-index: 0;
  }

  .gallery-item-3,
  .gallery-item-4 {
    left: 15%;
    opacity: 0.4;
    transform: translateX(-50%);
  }

  .gallery-item-2,
  .gallery-item-5 {
    height: 120px;
    opacity: 1;
    width: 190px;
    z-index: 1;
  }

  .gallery-item-2,
  .gallery-item-5 {
    left: 30%;
    transform: translateX(-50%);
  }

  .gallery-item-1 {
    box-shadow: 0 0 18px rgba(255, 255, 255, 0.6),
      0 0 36px rgba(255, 255, 255, 0.45), 0 0 66px rgba(255, 255, 255, 0.25),
      0 0 60px rgba(255, 255, 255, 0.1);
    height: 180px;
    opacity: 1;
    left: 50%;
    transform: translateX(-50%);
    width: 270px;
    z-index: 2;
  }

  .gallery-item-1 h1 {
    font-size: 18px;
    transition: all 0.3s ease-in-out;
  }
  .gallery-item-1 h3 {
    font-size: 13px;
    transition: all 0.3s ease-in-out;
  }
  .gallery-item-2 h1 {
    font-size: 10px;
    transition: all 0.3s ease-in-out;
  }
  .gallery-item-2 h3 {
    font-size: 6.5px;
    transition: all 0.3s ease-in-out;
  }
  .gallery-item-3 h1 {
    font-size: 7.5px;
    transition: all 0.3s ease-in-out;
  }
  .gallery-item-3 h3 {
    font-size: 5px;
    transition: all 0.3s ease-in-out;
  }
  .gallery-item-4 h1 {
    font-size: 7.5px;
    transition: all 0.3s ease-in-out;
  }
  .gallery-item-4 h3 {
    font-size: 5px;
    transition: all 0.3s ease-in-out;
  }
  .gallery-item-5 h1 {
    font-size: 10px;
    transition: all 0.3s ease-in-out;
  }
  .gallery-item-5 h3 {
    font-size: 6.5px;
    transition: all 0.3s ease-in-out;
  }

  .gallery-item-2 {
    left: 70%;
    transform: translateX(-50%);
  }

  .gallery-item-3 {
    left: 85%;
    opacity: 0.4;
    transform: translateX(-50%);
  }
}
</style>
