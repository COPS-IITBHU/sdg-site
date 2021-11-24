<template>
  <body>
    <div class="gallery w-full">
      <div
        class="
          gallery-container
          max-w-3/5
          h-xs
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
            rounded-xl
            justify-around
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
              mb-2
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
              text-justify
              items-center
            "
          >
            {{ achievement.description }}
          </h3>
          <a
            v-if="achievement.link"
            :href="achievement.link"
            target="_blank"
            class="flex-row self-end mr-4"
          >
            <span
              class="iconify text-blue-700 hover:text-blue-900"
              data-icon="akar-icons:link-out"
            >
              link</span
            >
          </a>
        </div>
      </div>

      <button
        class="
          gallery-controls-previous
          p-2
          mr-3vw
          mb-4
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
          mb-4
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
import { defineComponent, PropType } from '@nuxtjs/composition-api';

interface achievementsArray {
  index: number;
  title: string;
  description: string;
  link: string;
}

export default defineComponent({
  props: {
    achievements: {
      type: Array as PropType<achievementsArray[]>,
      default() {
        return null;
      },
    },
  },

  data() {
    return {
      // add a 'gallery-item-none' in the middle if a new achievement is added in achievements.json
      galleryItemNumber: [
        'gallery-item-1',
        'gallery-item-2',
        'gallery-item-3',
        'gallery-item-none',
        'gallery-item-none',
        'gallery-item-none',
        'gallery-item-none',
        'gallery-item-none',
        'gallery-item-none',
        'gallery-item-none',
        'gallery-item-none',
        'gallery-item-none',
        'gallery-item-none',
        'gallery-item-none',
        'gallery-item-none',
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
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.gallery-item-2,
.gallery-item-5 {
  height: 200px;
  opacity: 1;
  width: 300px;
  z-index: 1;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
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
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.gallery-item-none h1,
.gallery-item-none h3,
.gallery-item-none a {
  display: none;
}
.gallery-item-1 h1 {
  font-size: 30px;
  transition: all 0.3s ease-in-out;
}
.gallery-item-1 h3 {
  font-size: 20px;
  transition: all 0.3s ease-in-out;
  min-height: 8rem;
}
.gallery-item-2 h1 {
  font-size: 20px;
  transition: all 0.3s ease-in-out;
}
.gallery-item-2 h3 {
  font-size: 13.5px;
  transition: all 0.3s ease-in-out;
  min-height: 5rem;
}
.gallery-item-3 h1 {
  font-size: 15px;
  transition: all 0.3s ease-in-out;
}
.gallery-item-3 h3 {
  font-size: 10px;
  transition: all 0.3s ease-in-out;
  min-height: 3rem;
}
.gallery-item-4 h1 {
  font-size: 15px;
  transition: all 0.3s ease-in-out;
}
.gallery-item-4 h3 {
  font-size: 10px;
  transition: all 0.3s ease-in-out;
  min-height: 3rem;
}
.gallery-item-5 h1 {
  font-size: 20px;
  transition: all 0.3s ease-in-out;
}
.gallery-item-5 h3 {
  font-size: 13.5px;
  transition: all 0.3s ease-in-out;
  min-height: 5rem;
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
    width: 134px;
  }

  .gallery-item-3,
  .gallery-item-4 {
    left: 15%;
    opacity: 0.4;
    transform: translateX(-50%);
  }

  .gallery-item-2,
  .gallery-item-5 {
    height: 145px;
    opacity: 1;
    width: 220px;
    z-index: 1;
  }

  .gallery-item-2,
  .gallery-item-5 {
    left: 30%;
    transform: translateX(-50%);
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  .gallery-item-1 {
    box-shadow: 0 0 18px rgba(255, 255, 255, 0.6),
      0 0 36px rgba(255, 255, 255, 0.45), 0 0 66px rgba(255, 255, 255, 0.25),
      0 0 60px rgba(255, 255, 255, 0.1);
    height: 210px;
    opacity: 1;
    left: 50%;
    transform: translateX(-50%);
    width: 280px;
    z-index: 2;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .gallery-item-1 h1 {
    font-size: 18px;
    transition: all 0.3s ease-in-out;
  }
  .gallery-item-1 h3 {
    font-size: 13px;
    transition: all 0.3s ease-in-out;
    min-height: 5rem;
  }
  .gallery-item-2 h1 {
    font-size: 10px;
    transition: all 0.3s ease-in-out;
  }
  .gallery-item-2 h3 {
    font-size: 6.5px;
    transition: all 0.3s ease-in-out;
    min-height: 3rem;
  }
  .gallery-item-3 h1 {
    font-size: 7.5px;
    transition: all 0.3s ease-in-out;
  }
  .gallery-item-3 h3 {
    font-size: 5px;
    transition: all 0.3s ease-in-out;
    min-height: 1.5rem;
  }
  .gallery-item-4 h1 {
    font-size: 7.5px;
    transition: all 0.3s ease-in-out;
  }
  .gallery-item-4 h3 {
    font-size: 5px;
    transition: all 0.3s ease-in-out;
    min-height: 1.5rem;
  }
  .gallery-item-5 h1 {
    font-size: 10px;
    transition: all 0.3s ease-in-out;
  }
  .gallery-item-5 h3 {
    font-size: 6.5px;
    transition: all 0.3s ease-in-out;
    min-height: 3rem;
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
