<template>
  <ul>
    <li v-for="post in posts" :key="post.title">
      <a :href="post.url" class="post">
        <div class="post__title" :title="post.title">
          {{ post.title }}
        </div>
        <div class="post__date">
          {{ date === 'full' ? post.datetime.string : post.datetime.string.slice(5) }}
        </div>
      </a>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { Post } from '../types';
defineProps({
  posts: Array<Post>,
  date: String
});
</script>

<style lang="less" scoped>
li {
  list-style: none;
}

.post {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 15px;
  color: var(--vp-c-text-1);
  line-height: 1.75rem;
  border-radius: 0.25rem;
  transition: 0.4s;

  &:hover {
    background-color: var(--vp-c-bg-soft);
    color: var(--vp-c-brand);

    .post__title::before {
      background-color: var(--vp-c-brand);
    }
  }

  &__title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    
    &::before {
      display: inline-block;
      content: '';
      margin: 0 10px 2px 0;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: var(--vp-c-text-1);
      transition: 0.4s;
    }
  }

  &__date {
    flex-shrink: 0;
  }
}

@media screen and (max-width: 768px) {
  .post {
    padding: 4px;

    &__title {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 16.5em;
    }
  }
}
</style>
