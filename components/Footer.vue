<template>
  <footer class="p-4 container mx-auto bg-white">
    <div class="flex box-border justify-evenly h-70">
      <div class="flex flex-col justify-center pr-6">
        <img
          class="mx-auto object-contain p-4 h-50 w-50"
          :src="logo"
          alt="Club of Programmers IIT BHU"
        />
        <div class="ml-10 text-base">
          <a
            target="_blank"
            aria-label="Code of Conduct"
            href="https://github.com/COPS-IITBHU/Code-Of-Conduct/blob/master/README.md"
            style="text-decoration-line: none"
            >Code of Conduct</a
          >
        </div>
      </div>
      <div class="flex flex-col justify-center pl-6">
        <p class="text-2xl font-semibold">Quick Links</p>
        <br />
        <ul class="text-xl">
          <li><a href="/">Home</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/blogs">Blogs</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/aboutus">About Us</a></li>
        </ul>
      </div>
      <div class="flex">
        <div class="flex flex-col">
          <div class="flex text-2xl font-semibold mt-38 ml-1">Reach Us</div>
          <div class="flex">
            <div v-for="icon in SocialMedia" :key="icon.url">
              <a
                :href="icon.url"
                target="_blank"
                rel="noreferrer"
                :aria-label="icon.content"
              >
                <span
                  class="
                    iconify
                    icon
                    w-10
                    h-10
                    hover:scale-120
                    transform
                    select-none
                    cursor-pointer
                  "
                  :data-icon="icon.icon"
                ></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="border-t-2 border-grey">
      <div class="flex flex-row justify-end">
        Copyright &copy; {{ new Date().getFullYear() }}
        <a href="/">COPS</a>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  name: 'Footer',
  data() {
    return {
      logo: require('../assets/Images/COPS-Logo.jpeg'),
      SocialMedia: [
        {
          icon: 'mdi:github',
          url: 'https://github.com/COPS-IITBHU',
          content: 'Github Org',
        },
        {
          icon: 'mdi:facebook',
          url: 'https://www.facebook.com/cops.iitbhu',
          content: 'Facebook Page',
        },
        {
          icon: 'mdi:google',
          url: 'https://groups.google.com/g/copsiitbhu',
          content: 'Google Group',
        },
        {
          icon: 'mdi:email',
          url: 'mailto:copsiitbu@gmail.com',
          content: 'Support Email ID',
        },
      ],
    };
  },
};
</script>

<style scoped>
.icon {
  color: rgba(0, 0, 0, 0.5);
  transition: 1s ease-in-out;
}
.icon:hover {
  transition: 0s ease-in-out;
  color: #0f0;
  text-shadow: 0 0 120px #0f0;
}
</style>
