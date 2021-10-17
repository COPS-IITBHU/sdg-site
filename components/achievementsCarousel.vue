<template>
  <body>
    <div class="gallery">
      <div ref="galleryContainer" class="gallery-container">
        <li
          ref="galleryItem"
          class="box gallery-item gallery-item-1"
          data-index="1"
        >
          Achievement 1
        </li>
        <li
          ref="galleryItem"
          class="box gallery-item gallery-item-2"
          data-index="2"
        >
          Achievement 2
        </li>
        <li
          ref="galleryItem"
          class="box gallery-item gallery-item-3"
          data-index="3"
        >
          Achievement 3
        </li>
        <li
          ref="galleryItem"
          class="box gallery-item gallery-item-4"
          data-index="4"
        >
          Achievement 4
        </li>
        <li
          ref="galleryItem"
          class="box gallery-item gallery-item-5"
          data-index="5"
        >
          Achievement 5
        </li>
      </div>
      <div class="gallery-controls">
        <button @click="left"><i class="arrow left"></i></button>
        <button @click="right"><i class="arrow right"></i></button>
      </div>
    </div>
  </body>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  data() {
    return {
      carouselContainer: this.$refs.galleryContainer,
      carouselControls: ['previous', 'add', 'next'],
      carouselArray: this.$refs.galleryItem,
    };
  },
  methods: {
    updateGallery() {
      this.carouselArray.forEach((el) => {
        el.classList.remove('gallery-item-1');
        el.classList.remove('gallery-item-2');
        el.classList.remove('gallery-item-3');
        el.classList.remove('gallery-item-4');
        el.classList.remove('gallery-item-5');
      });

      this.carouselArray.slice(0, 5).forEach((el, i) => {
        el.classList.add(`gallery-item-${i + 1}`);
      });
    },
    setCurrentState(direction) {
      if (direction.className == 'gallery-controls-previous') {
        this.carouselArray.unshift(this.carouselArray.pop());
      } else {
        this.carouselArray.push(this.carouselArray.shift());
      }

      this.updateGallery();
    },
    setControls() {
      this.carouselControls.forEach((control) => {
        galleryControlsContainer.appendChild(
          document.createElement('button')
        ).className = `gallery-controls-${control}`;

        document.querySelector(`.gallery-controls-${control}`).innerText =
          control;
      });
    },
    useControls() {
      const triggers = [...galleryControlsContainer.childNodes];

      triggers.forEach((control) => {
        control.addEventListener('click', (e) => {
          e.preventDefault();

          if (control.className == 'gallery-controls-add') {
            const newItem = document.createElement('img');
            const latestItem = this.carouselArray.length;
            const latestIndex =
              this.carouselArray.findIndex(
                (item) =>
                  item.getAttribute('data-index') == this.carouselArray.length
              ) + 1;

            // Assign the necessary properties for new gallery item
            Object.assign(newItem, {
              className: 'gallery-item',
              src: `http://fakeimg.pl/300/?text=${
                this.carouselArray.length + 1
              }`,
            });
            newItem.setAttribute('data-index', this.carouselArray.length + 1);

            // Then add it to the carouselArray and update the gallery
            this.carouselArray.splice(latestIndex, 0, newItem);
            document
              .querySelector(`[data-index="${latestItem}"]`)
              .after(newItem);
            this.updateGallery();
          } else {
            this.setCurrentState(control);
          }
        });
      });
    },

    async getName() {},
  },
});
</script>

<style scoped>
.gallery {
  width: 100%;
}

.gallery-container {
  align-items: center;
  display: flex;
  height: 400px;
  margin: 0 auto;
  max-width: 1000px;
  position: relative;
}

.box {
  width: 12rem;
  height: 20rem;
  box-shadow: 0px 0px 2rem 0px #888888;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.gallery-item {
  height: 150px;
  opacity: 0;
  position: absolute;
  transition: all 0.3s ease-in-out;
  width: 150px;
  z-index: 0;
}

.gallery-item-1 {
  left: 15%;
  opacity: 0.4;
  transform: translateX(-50%);
}

.gallery-item-2,
.gallery-item-4 {
  height: 200px;
  opacity: 1;
  width: 200px;
  z-index: 1;
}

.gallery-item-2 {
  left: 30%;
  transform: translateX(-50%);
}

.gallery-item-3 {
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.6),
    0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25),
    0 0 100px rgba(255, 255, 255, 0.1);
  height: 300px;
  opacity: 1;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  z-index: 2;
}

.gallery-item-4 {
  left: 70%;
  transform: translateX(-50%);
}

.gallery-item-5 {
  left: 85%;
  opacity: 0.4;
  transform: translateX(-50%);
}

.gallery-controls {
  display: flex;
  justify-content: center;
  margin: 30px 0;
}

.arrow {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}

.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}

.gallery-controls button {
  background-color: transparent;
  border: 0;
  cursor: pointer;
  font-size: 16px;
  margin: 0 20px;
  padding: 0 12px;
  text-transform: capitalize;
}

.gallery-controls button:focus {
  outline: none;
}

.gallery-controls-previous {
  position: relative;
}

.gallery-controls-previous::before {
  border: solid #000;
  border-width: 0 2px 2px 0;
  content: '';
  display: inline-block;
  height: 4px;
  left: -10px;
  padding: 2px;
  position: absolute;
  top: 0;
  transform: rotate(135deg) translateY(-50%);
  transition: left 0.15s ease-in-out;
  width: 4px;
}

.gallery-controls-previous:hover::before {
  left: -18px;
}

.gallery-controls-next {
  position: relative;
}

.gallery-controls-next::before {
  border: solid #000;
  border-width: 0 2px 2px 0;
  content: '';
  display: inline-block;
  height: 4px;
  padding: 2px;
  position: absolute;
  right: -10px;
  top: 50%;
  transform: rotate(-45deg) translateY(-50%);
  transition: right 0.15s ease-in-out;
  width: 4px;
}

.gallery-controls-next:hover::before {
  right: -18px;
}

.gallery-nav {
  bottom: -15px;
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  position: absolute;
  width: 100%;
}

.gallery-nav li {
  background: #ccc;
  border-radius: 50%;
  height: 10px;
  margin: 0 16px;
  width: 10px;
}

.gallery-nav li.gallery-item-selected {
  background: #555;
}
</style>
