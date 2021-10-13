<template>
  <div id="post-page" class="page-wrapper post-page">
    <site-hero :title="post.title" :subtitle="post.subtitle" :image="post.featureImage">
      <span
        v-if="post.author"

        class="author-wrapper"
      >
        <strong>Author:</strong> {{ post.author }}
      </span>
      <span v-if="post.date" class="date-wrapper">
        <strong>Published on:</strong> {{ post.date }}
      </span>
    </site-hero>
    <main-section :one-column-constrained="true">
      <template v-slot:default>
        <div class="post-wrapper">
          <nuxt-content class="mt-4 prose max-w-none" :document="post" />
          <!-- <markdown :markdown="post.content" /> -->
          <div class="other-posts">
            <h6 class="subtitle is-size-4">
              <!-- Related Posts -->
            </h6>
            <!-- Related Posts -->
            <!-- <posts-grid :number="3" :category="post.category" :exclude="post.slug" /> -->
          </div>
          <!-- <disqus-comments :identifier="$route.params.singlePost" /> -->
        </div>
      </template>
      <template v-slot:sidebar>
        <post-sidebar />
      </template>
    </main-section>
  </div>
</template>
<script>
// import { mapState } from 'vuex'
import { setPageData, getFormattedDate } from '@/helper'
import { defineComponent } from '@nuxtjs/composition-api';
import PostSidebar from '~/components/PostSidebar'
export default defineComponent({
  // data(){
  //   title, subtitle, featureImage, underSubtitle, author, category, slug, date
  // },
  async asyncData({ $content, params }) {
    const { singlePost } = params;
    let post = await $content(`blog`, singlePost).fetch();
    return {
      post,
    };
  },
  components: {
    PostSidebar
  },
  computed: {
    date() {
      return getFormattedDate(this.post.date)
    },
    url() {
      return `${process.env.URL}/${this.$route.fullPath}`
    }
  },
  // fetch({ store, params }) {
  //   setPageData(store, { resource: 'post', slug: params.singlePost })
  // }
})
</script>
<style scoped lang="scss">  // Fix font-size issue for all sizes of screens
.nuxt-content {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}
.edit-post {
  margin-bottom: 20px;
}
</style>
