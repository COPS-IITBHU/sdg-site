<template>
  <div id="post-page" class="page-wrapper post-page">
    <site-hero
      :title="post.title"
      :subtitle="post.subtitle"
      :image="post.featureImage"
    >
      <span v-if="post.author" class="author-wrapper">
        <strong>Author:</strong> {{ post.author }}
      </span>
      <span v-if="post.date" class="date-wrapper">
        <strong>Published on:</strong> {{ this.date }}
      </span>
    </site-hero>
    <main-section :one-column-constrained="true">
      <template v-slot:default>
        <div class="post-wrapper">
          <nuxt-content class="mt-4 prose max-w-none" :document="post" />
          <div class="other-posts">
            <!-- <h6 class="subtitle is-size-4">
              Related Posts
            </h6> -->
            <!-- <posts-grid :number="3" :category="post.category" :exclude="post.slug" /> -->
          </div>
        </div>
      </template>
    </main-section>
  </div>
</template>
<script>
import { defineComponent } from '@nuxtjs/composition-api';
import { getFormattedDate } from '@/helper';

export default defineComponent({
  async asyncData({ $content, params }) {
    const { singlePost } = params;
    const post = await $content(`blog`, singlePost).fetch();
    return {
      post,
    };
  },
  computed: {
    date() {
      return getFormattedDate(this.post.date);
    },
  },
});
</script>
<style scoped lang="scss">
.nuxt-content {
  width: 60%;
  margin-left: auto;
  margin-right: auto;
}
.edit-post {
  margin-bottom: 20px;
}
@media screen and (max-width: 750px) {
  .nuxt-content {
    width: 95%;
    font-size: 15px;
  }
}
</style>
