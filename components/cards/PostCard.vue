<template>
  <div class="cards_item flex p-4 sm:w-1/2 md:w-1/3">
    <div class="card flex p-1">
      <generic-card
        :title="title"
        :image="image"
        :link="link"
        :image-dimensions="null"
        :sub-blogs="subBlogs"
      >
        <div class="card-details">
          <span v-if="author" class="author-wrapper">
            <strong>Author:</strong> {{ author }} |
          </span>
          <span v-if="date" class="date-wrapper">
            <strong>Published on:</strong> {{ datePretty }}
          </span>
        </div>
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
      default () {
        return []
      }
    }
  },
  computed: {
    datePretty () {
      return getFormattedDate(this.date)
    }
  }
}
</script>

<style scoped>
.card {
  box-shadow: 0 20px 40px -14px rgba(230, 229, 229, 0.25);
  overflow: hidden;
}
</style>
