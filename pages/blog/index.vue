<template>
  <div class="container mx-auto">
    <h1 class="text-5xl font-bold text-center my-8">
      Blogs<span role="img" aria-label="books">📚</span>
    </h1>
    <section class="text-gray-700 body-font overflow-hidden">
      <div class="container px-5 pt-24 mx-auto">
        <div v-for="article in articles" :key="article.id" class="-my-8">
          <nuxt-link :to="`blog/${article.slug}`">
            <div class="py-8 flex flex-wrap md:flex-no-wrap">
              <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span
                  class="
                    tracking-widest
                    text-xl
                    font-xl
                    title-font
                    text-gray-900
                  "
                  >Dev</span
                >
                <span class="mt-1 text-gray-500 text-md">{{
                  article.date.substring(0, 10)
                }}</span>
              </div>
              <div class="md:flex-grow">
                <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                  {{ article.title }}
                </h2>
                <p class="leading-relaxed">
                  {{ article.description.substring(0, 150) }}...
                </p>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'Blog',
  filters: {},
  async asyncData({ $content }) {
    let articles;
    try {
      articles = await $content(`blog`).sortBy('date', 'desc').fetch();
    } catch (error) {
      return { statusCode: 404, message: 'Page not found' };
    }
    return {
      articles,
    };
  },
  methods: {
    sortByTime(obj){
      obj.sort((childObj1,childObj2)=> {
        if(childObj1.date<childObj2.date)return 1;
        if(childObj1.date>childObj2.date)return -1;
        return 0;
      })
      obj.forEach(childObj => { childObj.childNodes = this.sortByTime(childObj.childNodes)})
      return obj
    },
    blogTree() {
      const hashTable = new Map();
      const posts = this.articles;
      posts.forEach(
        (blog) => hashTable.set(blog.title, {...blog, childNodes: []})
      );
      let dataTree = [];
      posts.forEach((blog) => {
        if (blog.parentBlog)
          hashTable.get(blog.parentBlog).childNodes.push(hashTable.get(blog.title))
        else dataTree.push(hashTable.get(blog.title));
      });
      this.articles = this.sortByTime(dataTree);
      console.log(this.articles)
    },
  },
  head() {
    return {};
  },
  mounted() {
    this.blogTree();
  },
});
</script>
