<template>
  <div id="home-page" class="page-wrapper home-page">
    <site-hero :title="title" :subtitle="subtitle" :image="featureImage" />
    <posts-grid :resources="articles" />
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import PostsGrid from '~/components/grids/PostsGrid.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    PostsGrid
  },
  async asyncData ({ $content }) {
    const articles = await $content('blog').fetch()
    return {
      articles
    }
  },
  data () {
    return {
      title: 'COPS SDG',
      subtitle: '',
      featureImage: '/blog/about-hero.webp'
    }
  },
  head: {
    title: 'Blogs',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'We aim at spreading the love for code to the masses and to facilitate this, our members jot down all the knowledge they have in the form of blogs. SDG Blogs is a storehouse of knowledge-packed, beginner-friendly and structured resources to help you delve into the colossal world of development.'
      }
    ]
  },
  mounted () {
    this.blogTree()
  },
  methods: {
    sortByTime (obj) {
      obj.sort((childObj1, childObj2) => {
        if (childObj1.date < childObj2.date) { return 1 }
        if (childObj1.date > childObj2.date) { return -1 }
        return 0
      })
      obj.forEach((childObj) => {
        childObj.subBlogs = this.sortByTime(childObj.subBlogs)
      })
      return obj
    },
    blogTree () {
      const hashTable = new Map()
      const posts = this.articles
      posts.forEach(blog =>
        hashTable.set(blog.title, { ...blog, subBlogs: [] })
      )
      const dataTree = []
      posts.forEach((blog) => {
        if (blog.parentBlog) {
          hashTable
            .get(blog.parentBlog)
            .subBlogs.push(hashTable.get(blog.title))
        } else { dataTree.push(hashTable.get(blog.title)) }
      })
      this.articles = this.sortByTime(dataTree)
    }
  }
})
</script>

<style>
.home-page .under-subtitle {
  border-top: none;
}
</style>
