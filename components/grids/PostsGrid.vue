<template>
  <div>
    <div class="cards">
      <post-card
        v-for="(item, i) in resources"
        :key="i"
        alt="Loading Image"
        :title="item.title"
        :link="`/blog/${item.slug}/`"
        :image="item.featureImage"
        :author="item.author"
        :date="item.date"
        :sub-blogs="item.subBlogs"
      />
    </div>
  </div>
</template>

<script>
import PostCard from '~/components/cards/PostCard';
export default {
  name: 'PostsGrid',
  components: { PostCard },
  props: {
    resources: {
      type: Array,
      default() {
        return [];
      },
    },
    perRow: { type: Number, default: 3 },
    number: { type: Number, default: 0 },
    order: { type: String, default: 'DESC' },
    category: {
      type: Array,
      default() {
        return [];
      },
    },
    exclude: { type: String, default: '' },
  },
};
</script>

<style scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
  list-style: none;
}
</style>
