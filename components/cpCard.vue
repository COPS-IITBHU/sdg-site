<template>
  <sdg-card>
    <li class="inline-block">
      <a
        aria-label="codeforces"
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
          class="iconify text-hex-8f2d56 text-2xl m-auto"
          data-icon="simple-icons:codeforces"
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
.our-team .pic {
  border-radius: 50% 50% 50% 0;
  transition: all 0.5s ease 0s;
}
.our-team:hover .pic {
  border-radius: 50% 0;
}
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
