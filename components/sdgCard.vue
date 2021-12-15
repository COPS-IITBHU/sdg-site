<template>
  <section class="col-md-3 col-sm-6 m-auto w-400">
    <div class="our-team w-70 float-left relative p-10">
      <div
        class="
          pic
          rounded-l-3xl
          overflow-hidden
          border-t-5 border-b-5 border-gray-600
          hover:border-hex-8f2d56 hover:transition-colors
        "
      >
        <nuxt-img src="/822711_user_512x512.png" alt="profile" class="w-100%" />
      </div>
      <div class="team-content m-auto">
        <h3 class="title text-xl font-600 text-hex-8f2d56 pt-10 uppercase">
          {{ name }}
        </h3>
        <span class="post text-hex-878484 font-500 text-lg"> {{ title }} </span>
        <ul class="social m-0 p-2">
          <li class="inline-block px-1">
            <a
              aria-label="linkedin"
              :href="socialMediaLink"
              class="
                border-solid border
                block
                h-8
                text-base
                leading-9
                text-center
                w-8
                rounded-full
                border-hex-8f2d56
                bg-white
                hover:bg-hex-8f2d56
              "
            >
              <span
                class="iconify text-hex-8f2d56 text-2xl m-auto"
                data-icon="uim:linkedin-alt"
              ></span>
            </a>
          </li>
          <slot>
            <li class="inline-block px-1">
              <a
                aria-label="github"
                :href="githubLink"
                class="
                  border-solid border
                  block
                  h-8
                  text-base
                  leading-9
                  text-center
                  w-8
                  rounded-full
                  border-hex-8f2d56
                  bg-white
                  hover:bg-hex-8f2d56
                "
              >
                <span
                  class="iconify text-hex-8f2d56 text-2xl m-auto mt-0.5"
                  :data-icon="icon"
                ></span>
              </a>
            </li>
          </slot>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: 'Name',
    },
    title: {
      type: String,
      default: 'Title',
    },
    socialMediaLink: {
      type: String,
      default: '#',
    },
    githubLink: {
      type: String,
      default: '#',
    },
    icon: {
      type: String,
      default: 'uim:github-alt',
    },
  },
  data() {
    return {};
  },
};
</script>

<style>
.our-team .pic {
  border-radius: 50% 50% 50% 0;
  transition: all 0.5s ease 0s;
}
.our-team:hover .pic {
  border-radius: 50% 0;
}
.our-team:hover .social li a {
  transition: all 0.5s ease 0s;
}
</style>
