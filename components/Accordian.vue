<template>
  <dl class="accordion box" role="presentation">
    <accordion-item
      v-for="item in content"
      :multiple="multiple"
      :item="item"
      :groupId="groupId"
      :key="item.id"
    >
    </accordion-item>
  </dl>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api';
export default defineComponent({
  props: {
    content: {
      type: Array,
      required: true,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      groupId: null,
    };
  },
  mounted() {
    this.groupId = this.$el.id;
  },
});
</script>

<style lang="scss" scoped>
@use 'sass:math';
$browser-context: 16;
$blue: #1779ba;
$gray: #cacaca;
$red: #cc4b37;
$white: #ffffff;

@function em($pixels, $context: $browser-context) {
  @return #{math.div($pixels, $context)}em;
}

.container {
  margin-bottom: em(24);
}

.btn-action-delete {
  color: $red;
  cursor: pointer;
}

.accordion {
  padding: 0;
  
  div:not(:last-child) {
    border-bottom: 1px solid rgba(10, 10, 10, 0.1);
  }
  
  div:last-child .accordion-item-details {
    border-radius: 5px;
  }
  
  dd {
    margin-left: 0;
  }
}
</style>