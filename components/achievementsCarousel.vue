<template>
  <body>
    <div class="gallery">
      <div class="gallery-container">
        <div class="box gallery-item gallery-item-1 bg-gray-100" data-index="1">
          <h1>Achievement 1</h1>
          <h3>bla bla bla</h3>
        </div>
        <div class="box gallery-item gallery-item-2 bg-gray-100" data-index="2">
          <h1>Achievement 2</h1>
          <h3>bla bla bla</h3>
        </div>
        <div class="box gallery-item gallery-item-3 bg-gray-100" data-index="3">
          <h1>Achievement 3</h1>
          <h3>bla bla bla</h3>
        </div>
        <div class="box gallery-item gallery-item-4 bg-gray-100" data-index="4">
          <h1>Achievement 4</h1>
          <h3>bla bla bla</h3>
        </div>
        <div class="box gallery-item gallery-item-5 bg-gray-100" data-index="5">
          <h1>Achievement 5</h1>
          <h3>bla bla bla</h3>
        </div>
        <div class="box gallery-item gallery-item-6 bg-gray-100" data-index="6">
          <h1>Achievement 6</h1>
          <h3>bla bla bla</h3>
        </div>
        <div class="box gallery-item gallery-item-7 bg-gray-100" data-index="7">
          <h1>Achievement 7</h1>
          <h3>bla bla bla</h3>
        </div>
      </div>
      <button id="prev" class="arrow left gallery-controls-previous"></button>
      <button id="next" class="arrow right gallery-controls-next"></button>
      <div class="gallery-controls"></div>
    </div>
  </body>
</template>

<script>
export default {
  mounted() {
    const galleryContainer = document.querySelector('.gallery-container');
    const galleryControls = ['previous', 'next'];
    const galleryItems = document.querySelectorAll('.gallery-item');

    class Carousel {
      constructor(container, items, controls) {
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
      }

      // Update css classes for gallery
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
      }

      // Update the current order of the carouselArray and gallery
      setCurrentState(direction) {
        if (direction.className === 'arrow left gallery-controls-previous') {
          this.carouselArray.unshift(this.carouselArray.pop());
        } else {
          this.carouselArray.push(this.carouselArray.shift());
        }

        this.updateGallery();
      }

      // Add a click event listener to trigger setCurrentState method to rearrange carousel
      useControls() {
        document.getElementById('prev').addEventListener('click', (e) => {
          e.preventDefault();
          this.setCurrentState(document.getElementById('prev'));
        });
        document.getElementById('next').addEventListener('click', (e) => {
          e.preventDefault();
          this.setCurrentState(document.getElementById('next'));
        });
      }
    }

    const exampleCarousel = new Carousel(
      galleryContainer,
      galleryItems,
      galleryControls
    );

    // exampleCarousel.setControls();
    exampleCarousel.useControls();
  },
};
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
  color: white;
  display: flex;
  justify-content: center;
  margin: 30px 0;
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
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 15px;
  margin-right: 3vw;
  margin-left: 3vw;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
  position: relative;
}

.gallery-controls-previous::before {
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 15px;
  margin-right: 3vw;
  margin-left: 3vw;
  transform: rotate(135deg) translateY(-50%);
  transition: left 0.15s ease-in-out;
  left: -10px;
}

.gallery-controls-previous:hover::before {
  left: -18px;
}

.gallery-controls-next {
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 15px;
  margin-right: 3vw;
  margin-left: 3vw;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

.gallery-controls-next::before {
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 15px;
  margin-right: 3vw;
  margin-left: 3vw;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
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
