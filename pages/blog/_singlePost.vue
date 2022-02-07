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
        <strong>Published on:</strong> {{ date }}
      </span>
    </site-hero>
    <main-section :one-column-constrained="true">
      <template #default>
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
import { defineComponent } from '@nuxtjs/composition-api'
import { getFormattedDate } from '@/helper'

export default defineComponent({
  async asyncData ({ $content, params }) {
    const { singlePost } = params
    const post = await $content('blog', singlePost).fetch()
    return {
      post
    }
  },
  computed: {
    date () {
      return getFormattedDate(this.post.date)
    }
  }
})
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
.prose {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #bdc1c6;
  }
}
li,
p,
.prose strong {
  color: #bdc1c6;
}
p {
  code {
    color: #cdd1d9;
    background-color: #6e768166;
  }
}
.prose a {
  color: #8ab4f8;
}
.container {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
}
/* Then style the iframe to fit in the container div with full height and width */
.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
</style>
