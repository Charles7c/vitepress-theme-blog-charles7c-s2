<template>
  <div class="post-header" v-if="enabled">
    <div class="post-meta">
      <div class="post-meta-left">
        <div v-if="author">
          <span v-if="author === globalAuthor">原创: </span>
          <span v-else>转载: </span>
          <span v-if="authorLink"><a :href="authorLink" target="_blank" rel="noopener noreferrer">{{ author }}</a></span>
          <span v-else>{{ author }}</span>
        </div>
        <div v-if="datetime">
          发布于: <span :title="dayjs(datetime).format('YYYY-MM-DD HH:mm')">{{ dayjs(datetime).format('YYYY-MM-DD HH:mm') }}</span>
        </div>
      </div>
      <div class="post-meta-right">
        <div v-if="lastUpdated">
          <span :title="dayjs(lastUpdated).format('YYYY-MM-DD HH:mm:ss')">{{ dayjs(lastUpdated).fromNow() }}更新</span>
        </div>
      </div>
    </div>
    <div class="post-tip" v-if="hasTip">
      <span class="label">提示</span>
      <span>本文发布于 <b style="color:#ff4400;">{{ dayjs(datetime).fromNow() }}</b>，其中信息可能已经时过境迁...</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useData } from 'vitepress';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);
dayjs.locale('zh-cn');

const { theme, frontmatter, page } = useData();

const enabled = ref((theme.value.postMetaConfig?.enabled ?? false) && (frontmatter.value.lastUpdated ?? true));
const lastUpdated = ref(page.value.lastUpdated);
const tipTime = ref(theme.value.postMetaConfig?.tipTime ?? 30);
const author = ref(frontmatter.value.author);
const globalAuthor = ref(theme.value.footerConfig?.copyright.author);
const authorLink = ref(frontmatter.value.authorLink);
const datetime = ref(frontmatter.value.datetime);

const hasTip = computed(() => {
  return datetime.value && dayjs().diff(dayjs(datetime.value), 'day') >= tipTime.value
});
</script>

<style scoped>
.post-header {
  margin-top: 20px;
  font-size: 15px;
  color: var(--vp-c-text-2);
}

.post-meta {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
}

.post-meta-left {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.post-meta-right {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  text-align: right;
}

.post-tip {
  margin-top: 10px;
  background-color: var(--vp-c-bg-soft);
  padding: 0.75rem;
  position: relative;
  display: flex;
  border-radius: 8px;

  .label {
    white-space: nowrap;
    display: inline-block;
    color: #3b8eed;
    font-size: 12px;
    border: 1px solid #3b8eed;
    border-radius: 4px;
    padding: 0 4px;
    margin-right: 0.75rem;
    height: 22px;
  }

  a {
    color: var(--vp-c-text-2);
    text-decoration: none;
  }
}

@media (max-width: 512px) {
  .post-tip {
    font-size: 12px;
    letter-spacing: -0.1px;
  }
}
</style>
