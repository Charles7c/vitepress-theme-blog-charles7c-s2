<template>
  <div class="ZCContainer">
    <div class="ZCContent">
      <AdItem
        v-if="ads?.docBefore || adsense?.docBefore"
        :ads="ads?.docBefore"
        :adsense="{ client: adsense?.client, slot: adsense?.docBefore }"
        type="doc"
      />
      <template v-if="type === 'archive'">
        <template v-for="year in keys" :key="year">
          <div class="title">{{ year }} ({{ posts[year].length }}篇)</div>
          <template v-for="monthItem in getMonthPosts(posts[year])" :key="monthItem.month">
            <div class="sub-title">{{ monthItem.month }}月 ({{ monthItem.posts.length }}篇)</div>
            <PostListLite :posts="monthItem.posts" />
          </template>
        </template>
      </template>

      <template v-else-if="type === 'category' || type === 'tag'">
        <LinkList @change="handleChange" :links="keys" :posts="posts" :selected="select" />
        <div v-show="select" class="title bold">{{ type === 'category' ? '分类: ' : '标签: ' }}{{ select }}</div>
        <PostListLite :posts="posts[select]" date="full" />
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
import { ref } from 'vue';
import { useAds } from '../composables/useAds';
import { useGroup } from '../composables/useGroup';
import AdItem from '../components/AdItem.vue';
import LinkList from '../components/LinkList.vue';
import PostListLite from '../components/PostListLite.vue';
import { data as postsData } from '../posts.data.js';

const props = defineProps({
  type: {
    type: String,
    required: true
  }
});

const { ads, adsense } = useAds();
const { keys, data: posts } = useGroup(postsData || [], props.type);

const getMonthPosts = (posts: any[]) => {
  const data: Record<string, any[]> = {};
  posts.forEach((post) => {
    const month = new Date(post.datetime.time).getMonth() + 1;
    if (!data[month]) {
      data[month] = [];
    }
    data[month].push(post);
  });
  const keys = Object.keys(data).sort((a, b) => parseInt(b) - parseInt(a));
  return keys.map((k) => ({ month: k, posts: data[k] }));
};

const url = location.href.split('?')[0];
const search = location.href.split('?')[1];
const params = new URLSearchParams(search);
const select = ref(params.get(props.type) || '');
const handleChange = (link: string) => {
  if (select.value === link) {
    select.value = '';
  } else {
    select.value = link;
  }
  const query = select.value ? `?${props.type}=${select.value.replaceAll('&', '%26')}` : '';
  window.history.replaceState(null, '', `${url}${query}`);
};
</script>

<style lang="less" scoped>
@import '../styles/page.less';
.title {
  font-size: 1.25rem;
  padding: 14px 0 8px;
}

.sub-title {
  font-size: 1.1rem;
  padding: 10px 0 6px;
}

.bold {
  font-weight: 700;
}

@media screen and (max-width: 768px) {
  .bold {
    font-size: 1.5rem;
  }
}
</style>
