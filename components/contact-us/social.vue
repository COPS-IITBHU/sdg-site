<template>
  <div>
    <div class="my-4 px-2">
      <h3 class="py-2 text-cyan-400 text-3xl social-links">
        We're also here....
      </h3>
      <br />
      <p class="text-light-50 content">
        Follow us on the following social media handles and stay apprised about
        the latest events and workshops!
      </p>
      <div class="mx-4 my-8">
        <ul class="flex flex-row flex-wrap justify-center items-center">
          <li
            v-for="item in items"
            :key="item.name"
            class="list-none mx-4 py-2"
          >
            <a
              :href="item.url"
              class="p-3 w-16 h-16 rounded-full flex items-center justify-center"
              target="_blank"
              rel="noreferrer"
            >
              <div class="icon-circle">
                <span
                  class="iconify"
                  :data-icon="item.icon"
                  :data-height="item.height"
                  :data-width="item.width"
                  style="color: black"
                >
                  {{ item.name }}
                </span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import contactDetails from '@/content/contacts/socialMedia.json';

export default defineComponent({
  data() {
    return {
      items: contactDetails.items
    };
  }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jura&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');

.social-links {
  color: #08fdd8;
  font-family: 'Jura';
}

.content {
  font-family: 'Nunito';
}
.icon-circle {
  border-radius: 50%;
  padding: 10px;
  background: #fff;
  border: 2px solid #fff;
  text-align: center;
}

ul li a {
  transition: 0.4s;
}

ul li a:hover {
  transform: translate(0, -5px) scale(1.05);
  box-shadow: 0px 0px 18px #08fdd8;
}
</style>
