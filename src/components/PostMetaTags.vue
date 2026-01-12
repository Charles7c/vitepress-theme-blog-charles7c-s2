<template>
  <div class="info">
    <div v-if="$frontmatter.tags">
      <span class="iconfont" title="标签">&#xe869;</span>
      <a
        :href="withBase(`${outDir}/tags.html?tag=${item.replaceAll('&', '%26')}`)"
        v-for="item in $frontmatter.tags"
        class="tag"
      >
        {{ item }}
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { withBase } from 'vitepress';
import { useOutDir } from '../composables/useOutDir';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);
dayjs.locale('zh-cn');

const { outDir } = useOutDir();
</script>

<style lang="less" scoped>
.info {
  display: flex;
  margin-bottom: 16px;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  font-size: 14px;
  color: var(--vp-c-text-2);
}

.iconfont {
  font-size: 14px;
  margin-right: 6px;
  vertical-align: bottom;
}

.date, .author {
  font-weight: 500;
}

.tag,
.category {
  font-size: 14px;
  display: inline-block;
  padding: 0 8px;
  border-radius: 2px;
  background-color: var(--vp-input-switch-bg-color);
  color: var(--vp-c-text-2);
  transition: 0.4s;

  &:not(:last-of-type) {
    margin-right: 8px;
  }

  &:hover {
    color: var(--vp-c-brand);
  }
}
</style>
