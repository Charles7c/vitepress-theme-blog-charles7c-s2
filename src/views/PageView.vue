<template>
  <div class="ZCContainer">
    <div class="ZCContent">
      <AdItem
        v-if="ads?.docBefore || adsense?.docBefore"
        :ads="ads?.docBefore"
        :adsense="{ client: adsense?.client, slot: adsense?.docBefore }"
        type="doc"
      />

      <template v-if="posts">
        <PostList :posts="pagePosts" />
        <div class="pagination">
          <button class="pagination__link iconfont" v-if="total > maxShowPage" @click="handleChange(1)">
            &#xe86a;
          </button>
          <button
            class="pagination__link"
            v-for="page in pages"
            :key="page"
            :class="{ 'pagination__link--active': pageNo === page }"
            @click="handleChange(page)"
          >
            {{ page }}
          </button>
          <button class="pagination__link iconfont" v-if="total > maxShowPage" @click="handleChange(total)">&#xe86b;</button>
        </div>
      </template>

      <AdItem
        v-if="ads?.docAfter || adsense?.docAfter"
        :ads="ads?.docAfter"
        :adsense="{ client: adsense?.client, slot: adsense?.docAfter }"
        type="doc"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import AdItem from '../components/AdItem.vue';
import PostList from '../components/PostList.vue';
import type { Post } from '../types';
import { data } from '../posts.data.js';
import { useAds } from '../composables/useAds';

const props = defineProps({
  pagination: { type: Number, required: true },
  size: { type: Number, required: true },
});

const { ads, adsense } = useAds();

const pageNo = ref(props.pagination);
// 排序：[置顶：排序] + 其他
const posts: Post[] = [...data
  .filter(post => post.top)
  .sort((a, b) => {
    if (a.order && b.order) {
      return a.order - b.order; // 如果 a 和 b 都有 order 属性，按 order 排序
    }
    if (a.order) return -1; // 如果只有 a 有 order 属性，a 优先
    if (b.order) return 1; // 如果只有 b 有 order 属性，b 优先
    return 0; // 如果都没有 order 属性，保持原有顺序
  }), ...data.filter(post => !post.top)];
// 获取分页数据
const pagePosts = computed(() => {
  const start = (pageNo.value - 1) * props.size;
  const end = pageNo.value * props.size;
  return posts.slice(start, end);
});

// 获取所有页码
const maxShowPage = 5;
// 获取所有页码
const total = computed(() => {
  return Math.ceil(posts.length / props.size);
});
function findNeighbors(target: number, total: number) {
  const result: number[] = [];
  const maxVisible = Math.min(maxShowPage, total);
  const half = Math.floor(maxVisible / 2);

  let start = Math.max(1, target - half);
  let end = Math.min(total, target + half);

  if (end - start + 1 < maxVisible) {
    if (start === 1) {
      end = Math.min(total, start + maxVisible - 1);
    } else {
      start = Math.max(1, end - maxVisible + 1);
    }
  }

  for (let i = start; i <= end; i++) {
    result.push(i);
  }

  return result;
}
const pages = ref(findNeighbors(pageNo.value, total.value));

// 切换页码
function handleChange(page: number) {
  if (page === pageNo.value) return;
  pages.value = findNeighbors(page, total.value);
  pageNo.value = page;
}
</script>

<style lang="less" scoped>
.ZCContent {
  max-width: 60rem;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .ZCContainer {
    padding: 0;
  }
}

@media (min-width: 768px) and (max-width: 1030px) {
  .ZCContainer {
    padding: 0 32px;
  }
}

.iconfont {
  font-size: 14px;
  vertical-align: bottom;
  margin-right: 6px;
}

.pagination {
  margin-top: 32px;
  // margin-bottom: v-bind(margin_bottom);
  display: flex;
  justify-content: center;

  &__link {
    display: inline-block;
    width: 36px;
    height: 36px;
    line-height: 34px;
    text-align: center;
    border: 1px var(--vp-c-divider) solid;
    margin: 0 0.2rem;
    font-weight: 400;
    transition: color 0.3s, background 0.5s, border 0.5s;
    color: var(--vp-c-text-1);

    &:hover,
    &--active {
      color: var(--vp-c-bg-soft);
      background: var(--vp-c-text-1);
      border: 1px solid var(--vp-c-text-1);
    }

    &:first-of-type {
      margin-left: 0;
    }

    &:last-of-type {
      margin-right: 0;
    }
  }
}
</style>
