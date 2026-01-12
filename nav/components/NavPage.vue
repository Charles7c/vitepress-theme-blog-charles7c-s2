<script setup lang="ts">
import { ref } from 'vue'
import { inBrowser } from 'vitepress'

import VTIconSearch from '@theme/components/icons/VTIconSearch.vue'
import NavLinkList from './NavLinkList.vue'
import type { NavData, NavLink } from './type'

const props = defineProps<{
  data: NavData[]
  recentLinksKey: string
}>()

const RECENT_LINKS_KEY = props.recentLinksKey

/**
 * 获取最近使用链接
 *
 * @returns 最近使用链接列表
 */
const getRecentLinks = () => {
  if (!inBrowser) {
    return []
  }
  const value = localStorage.getItem(RECENT_LINKS_KEY)
  if (value) {
    try {
      return JSON.parse(value)
    } catch (e) {
      return []
    }
  }
  return []
}

const recentLinks = ref<NavLink[]>(getRecentLinks())

/**
 * 处理点击事件
 *
 * @param data 点击的链接数据
 */
const handleClick = (data: NavLink) => {
  let newData = recentLinks.value.filter((item) => item.link !== data.link)
  newData.unshift(data)
  if (newData.length > 6) {
    newData = newData.slice(0, 6)
  }
  localStorage.setItem(RECENT_LINKS_KEY, JSON.stringify(newData))
  recentLinks.value = newData
}

// 搜索
const query = ref('')
function filter(p: NavLink): boolean {
  return (
      includes(p.title, query.value) || includes(p.desc, query.value)
  )
}

function includes(a: string, b: string) {
  return a.toLowerCase().includes(b.toLowerCase())
}
</script>

<template>
  <div class="search">
    <VTIconSearch class="icon" />
    <input placeholder="通过名称或描述搜索导航" v-model="query"/>
  </div>
  <NavLinkList v-if="recentLinks.length" title="最近使用" :items="recentLinks" :filter="filter" @nav-click="handleClick" />
  <NavLinkList v-for="item in props.data as NavData[]" v-bind="item" :filter="filter" @nav-click="handleClick" />
</template>

<style scoped>
.search {
  margin: 1em auto 0;
  position: relative;

  input {
    font-size: 15px;
    width: 100%;
    padding: 8px 12px 8px 25px;
    border-bottom: 1px solid var(--vp-c-divider);
  }

  .icon {
    width: 18px;
    height: 18px;
    fill: var(--vp-c-text-3);
    position: absolute;
    top: 10px;
  }
}
</style>