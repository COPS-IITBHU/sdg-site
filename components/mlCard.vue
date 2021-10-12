<template>
  <sdg-card>
    <li class="inline-block">
      <a
        aria-label="kaggle"
        href="#"
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
          class="iconify text-hex-8f2d56 hover:text-white text-2xl m-auto"
          data-icon="fa-brands:kaggle"
        ></span>
      </a>
    </li>
  </sdg-card>
</template>
<script>
import sdgCard from './sdgCard.vue';
export default {
  components: { sdgCard },
  data() {
    return {};
  },
};
</script>
<style>
.our-team:hover .social li a {
  transition: all 0.5s ease 0s;
  background: #8f2d56;
}
.our-team:hover .social li a .iconify {
  color: #fff;
}
@media only screen and (max-width: 990px) {
  .our-team {
    margin-bottom: 30px;
  }
}
</style>
