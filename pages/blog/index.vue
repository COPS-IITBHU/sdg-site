<template>
  <div id="home-page" class="page-wrapper home-page">
    <site-hero :title="title" :subtitle="subtitle" :image="featureImage" />
    <main-section theme="one-column">
      <template v-slot:default>
        <!-- All Posts -->
        <posts-grid :resources="articles" />
      </template>
      <template v-slot:sidebar>
        <!-- Nothing here -->
      </template>
    </main-section>
    <!-- <news-letter-form-modal /> -->
  </div>
</template>

<script>
// import { mapState } from 'vuex'
// import { setPageData } from '@/helper'
// import NewsLetterFormModal from '~/components/NewsLetterFormModal.vue'
import PostsGrid from '~/components/grids/PostsGrid.vue'

import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'HomePage',
  async asyncData({ $content }) {
    let articles;
    articles = await $content(`blog`).fetch();
    return {
      articles,
    };
  },
  data() {
    return {
      title: 'COPS SDG',
      subtitle: '',
      featureImage: '/uploads/about-hero.jpg'
    }
  },
  head() {
    return {
      title: `Blog`
    }
  },
  methods: {
    sortByTime(obj) {
      obj.sort((childObj1, childObj2) => {
        if (childObj1.date < childObj2.date) return 1;
        if (childObj1.date > childObj2.date) return -1;
        return 0;
      });
      obj.forEach((childObj) => {
        childObj.subBlogs = this.sortByTime(childObj.subBlogs);
      });
      return obj;
    }, 
    blogTree() {
      const hashTable = new Map();
      const posts = this.articles;
      posts.forEach((blog) =>
        hashTable.set(blog.title, { ...blog, subBlogs: [] })
      );
      const dataTree = [];
      posts.forEach((blog) => {
        if (blog.parentBlog)
          hashTable
            .get(blog.parentBlog)
            .subBlogs.push(hashTable.get(blog.title));
        else dataTree.push(hashTable.get(blog.title));
      });
      this.articles = this.sortByTime(dataTree);
      console.log(this.articles)
    },
  },
  mounted() {
    this.blogTree();
  },
  components: {
    PostsGrid,
    // NewsLetterFormModal
  },
  // fetch({ store, params }) {
  //   setPageData(store, { slug: 'home' })
  // }
})
</script>

<style>
.home-page .under-subtitle {
  border-top: none;
}
</style>
