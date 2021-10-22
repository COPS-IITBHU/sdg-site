<template>
  <div class="social-menu m-10px mt-20px">
    <ul class="flex flex-row flex-wrap justify-center items-center">
      <li>
        <a href="https://www.facebook.com/cops.iitbhu" target="_blank"
          ><span
            class="iconify"
            data-icon="fa-brands:facebook-square"
            style="color: #4267b2"
            data-width="30"
            data-height="30"
            >Facebook</span
          ></a
        >
      </li>
      <li>
        <a href="https://github.com/COPS-IITBHU" target="_blank">
          <span
            class="iconify"
            data-icon="ant-design:github-filled"
            style="color: #211f1f"
            data-width="30"
            data-height="30"
            >Github</span
          ></a
        >
      </li>
      <li>
        <a href="https://www.linkedin.com/company/cops-iitbhu" target="_blank"
          ><span
            class="iconify"
            data-icon="brandico:linkedin-rect"
            style="color: #006192"
            data-width="28"
            data-height="28"
            >LikedIn</span
          ></a
        >
      </li>
      <li>
        <a
          href="https://groups.google.com/forum/#!forum/copsiitbhu"
          target="_blank"
          ><span
            class="iconify"
            data-icon="dashicons:groups"
            style="color: #32cd32"
            data-width="32"
            data-height="32"
            >Google Groups</span
          ></a
        >
      </li>
      <li>
        <a
          href="https://www.youtube.com/channel/UC01TZlNfu29QgG4FmUqVsdg"
          target="_blank"
          ><span
            class="iconify"
            data-icon="logos:youtube-icon"
            style="color: #006192"
            data-width="30"
            data-height="30"
            >Youtube</span
          ></a
        >
      </li>
      <li>
        <a href="mailto:iitbhu.cops@gmail.com">
          <span
            class="iconify"
            data-icon="logos:google-gmail"
            style="color: #006192"
            data-width="30"
            data-height="30"
            >Gmail</span
          ></a
        >
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  setup() {},
});
</script>

<style scoped>
.social-menu ul li {
  list-style: none;
  margin: 0 15px;
  margin-bottom: 20px;
  padding-bottom: 50px;
}
.social-menu ul li a {
  display: block;
  padding: 13px 15px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  text-align: center;

  background-color: rgba(196, 233, 250, 0.911);
  transition: 0.4s;
  box-shadow: 0px 0px 15px rgba(11, 202, 250, 0.911);
}
.social-menu ul li a:hover {
  transform: translate(0, -5px) scale(1.05);
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 0px 25px rgba(8, 253, 241, 0.959);
}
</style>
