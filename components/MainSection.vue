<template>
  <main class="section page-main-section">
    <div class="container mx-auto">
      <div class="columns">
        <aside
          v-if="computedTheme === 'sidebar-left'"
          class="column left-sidebar is-one-quarter"
        >
          <slot name="sidebar"></slot>
        </aside>
        <div
          :class="{
            column: true,
            'is-full': computedTheme === 'one-column' && !oneColumnConstrained,
            'is-offset-2':
              oneColumnConstrained && computedTheme === 'one-column',
            'is-8': oneColumnConstrained && computedTheme === 'one-column',
            'is-three-quarters': computedTheme !== 'one-column',
          }"
        >
          <slot></slot>
        </div>
        <aside
          v-if="computedTheme === 'sidebar-right'"
          class="column right-sidebar is-one-quarter"
        >
          <slot name="sidebar"></slot>
        </aside>
      </div>
    </div>
  </main>
</template>
<script>
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'MainSection',
  props: {
    oneColumnConstrained: { type: Boolean, default: false },
    theme: { type: String, default: '' }
  },
  computed: {
    computedTheme () {
      return 'one-column'
    }
  }
})
</script>

<style lang="scss">
.is-one-quarter {
  padding: 0 20px;
  &.right-sidebar {
    border-left: 1px solid #eee;
  }
  &.left-sidebar {
    border-right: 1px solid #eee;
  }
}
</style>
