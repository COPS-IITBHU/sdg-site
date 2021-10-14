<!--<template>
   <resource-grid
    v-bind="$props"
    :resource="resources"
    :theme="null" 
  > -->
<template>
  <div>
    <div class="cards">
      <post-card
        v-for="(item, i) in resources"
        :key="i"
        :title="item.title"
        :link="`/blog/${item.slug}/`"
        :image="item.featureImage"
        :author="item.author"
        :date="item.date"
        :subBlogs="item.subBlogs"
      />
    </div>
  </div>
</template>
<!-- </resource-grid> 
</template>-->

<script>

import PostCard from '~/components/cards/PostCard';
import ResourceGrid from '~/components/grids/ResourceGrid.vue';
export default {
  name: 'PostsGrid',
  components: { PostCard, ResourceGrid },
  props: {
    resources: { type: Array },
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
