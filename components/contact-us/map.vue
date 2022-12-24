<template>
  <div>
    <div class="map-desc mb-9 text-left  <lg:(w-full)">
      <div>
        <h2 class="py-2 text-accent-color text-4xl font-heading">Visit Us</h2>
        <p class="text-light-50 ">
          A Malaiyo date discussing some bugs sounds <br />
          cool, right? Visit us in our Natural Banarasi <br />
          Habitat and let us treat you to something!
        </p>
      </div>
    </div>
    <div
      class="map  flex flex-row justify-start justify-sm-center flex-wrap <lg:w-full">
      <iframe
        title="IIT BHU Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.245385337551!2d82.9871848146768!3d25.26232953525508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e33ef9b1f7cdd%3A0x7555db6d623dc140!2sIndian%20Institute%20of%20Technology%20(BHU)%20Varanasi!5e0!3m2!1sen!2sin!4v1634069543926!5m2!1sen!2sin"
        width="100%"
        height="400px"
        allowfullscreen="false"
        loading="lazy"
        class="md:w-4/5 filter invert-90 hue-rotate-180 brightness-95 saturate-200 rounded-r">
      </iframe> 
    </div>
  </div>
</template>

<style scoped>

@media screen and (max-width: 1030px) {
  .map{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0;
  }

  .map-desc{
    text-align: center;
  }
}

</style>
