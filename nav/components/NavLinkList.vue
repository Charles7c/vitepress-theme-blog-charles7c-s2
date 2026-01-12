<script setup lang="ts">
import { computed, shallowRef } from 'vue'
import { slugify } from '@mdit-vue/shared'

import NavLinkCard from './NavLinkCard.vue'
import type { NavLink } from './type'

const props = defineProps<{
  title: string
  items: NavLink[]
  tag?: string
  filter?: (item: any) => boolean
}>()

const emits = defineEmits<{
  (event: 'nav-click', data: Partial<NavLink>): void
}>()

const component = computed(() => props.tag ?? 'h2')

const formatTitle = computed(() => {
  return slugify(props.title)
})

const items = shallowRef([...props.items])
const filteredItems = computed(() =>
    props.filter ? items.value.filter(props.filter) : items.value
)
</script>

<template>
  <component :is="component" :id="formatTitle" tabindex="-1">
    {{ title }}
    <a class="header-anchor" :href="`#${formatTitle}`" aria-hidden="true"></a>
  </component>
  <div class="nav-links">
    <NavLinkCard
      v-for="item in filteredItems"
      :key="item.link"
      v-bind="item"
      @nav-click="emits('nav-click', $event)"
    />
  </div>
</template>

<style lang="scss" scoped>
.nav-links {
  --nav-gap: 16px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  grid-row-gap: var(--nav-gap);
  grid-column-gap: var(--nav-gap);
  grid-auto-flow: row dense;
  justify-content: center;
  margin-top: 24px;
}

@media (min-width: 992px) {
  .nav-links {
    --nav-gap: 24px;
  }
}

@media (max-width: 991px) {
  .nav-links {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  }
}

@media (max-width: 767px) {
  .nav-links {
    grid-template-columns: 1fr;
    --nav-gap: 12px;
  }
}
</style>
