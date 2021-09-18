<template>
  <div class="container mx-auto">
    <h1 class="text-5xl font-bold text-center my-8">Blogs📚</h1>
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
                  article.createdAt
                }}</span>
              </div>
              <div class="md:flex-grow">
                <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                  {{ article.title }}
                </h2>
                <p class="leading-relaxed">
                  {{ article.description }}
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
export default {
  name: 'Blog',
  filters: {},
  async asyncData({ $content, app }) {
    let articles;
    try {
      articles = await $content(`blog`, {deep:true}).sortBy('date', 'asc').fetch();
    } catch (error) {
      try {
        articles = await $content(`blog`)
          .sortBy('date', 'desc')
          .fetch();
      } catch (error) {
        return { statusCode: 404, message: 'Page not found' };
      }
    }
    return {
      articles,
    };
  },
  head() {
    return {
      //   title: this.$i18n.t('blog.title')
    };
  },
};
</script>