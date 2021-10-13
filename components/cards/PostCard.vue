<template>
  <div class="cards_item">
    <div class="card">
  <generic-card
    :title="title"
    :image="image"
    :link="link"
    :image-dimensions="null"
    :subBlogs="subBlogs"
  >
    <span
      v-if="author"
      class="author-wrapper"
    >
      <strong>Author:</strong> {{ author }} |
    </span>
    <span v-if="date" class="date-wrapper">
      <strong>Published on:</strong> {{ datePretty }}
    </span>
  
  </generic-card>
    </div>
  </div>
</template>

<script>
import GenericCard from './GenericCard'
import { getFormattedDate } from '~/helper'
export default {
  components: { GenericCard },
  props: {
    title: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    author: {
      type: String,
      default: ''
    },
    subBlogs: {
      type: Array,
    }
  },
  computed: {
    datePretty() {
      return getFormattedDate(this.date)
    }
  }
}
</script>

<style scoped>


.cards_item {
  display: flex;
  padding: 1rem; 
}

@media (min-width: 40rem) {
  .cards_item {
    width: 50%;
  }
}

@media (min-width: 56rem) {
  .cards_item {
    width: 33.3333%;
  }
}



.card {
  background-color: white;  
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;  
  flex-direction: column;
  overflow: hidden;  
}



</style>
