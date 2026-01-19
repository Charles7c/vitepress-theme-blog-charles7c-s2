<script setup lang="ts">
import { computed } from 'vue'
import type { NavLink } from './type'
import { getIcon } from './utils'

const props = defineProps<{
  icon?: NavLink['icon']
  title?: NavLink['title']
  desc?: NavLink['desc']
  link: NavLink['link']
  source?: NavLink['source']
  author?: NavLink['author']
  language?: NavLink['language']
  tags?: NavLink['tags']
  badge?: NavLink['badge']
  outdated?: NavLink['outdated']
}>()

const emits = defineEmits<{
  (event: 'nav-click', data: Partial<NavLink>): void
}>()

const svg = computed(() => {
  if (typeof props.icon === 'object') return props.icon.svg
  return ''
})

const formatBadge = computed(() => {
  if (typeof props.badge === 'string') {
    return { text: props.badge }
  }
  return props.badge
})

const handleClick = () => {
  window.open(props.link, '_blank', 'noreferrer')
  emits('nav-click', props)
}
</script>

<template>
  <div class="nav-link-card" :class="{ outdated: outdated }" @click="handleClick">
    <div class="card-header">
      <div v-if="icon" class="card-icon" :class="author ? 'large-icon' : ''">
        <img v-if="typeof icon === 'string'" :src="getIcon(icon)" :alt="title" loading="lazy" />
        <div v-else-if="svg" class="svg-icon" v-html="svg"></div>
      </div>
      <div class="card-title">
        <div class="title"><a :href="source" target="_blank">{{ title }}</a></div>
        <span v-if="author" class="author">@{{ author }}</span>
      </div>
      <div v-if="formatBadge?.text" class="card-badge">
        <span class="badge-text">{{ formatBadge.text }}</span>
      </div>
    </div>
    <div v-if="desc" class="card-desc" :title="desc">{{ desc }}</div>
    <div v-if="tags || language" class="card-footer">
      <div class="card-tags">
        <span v-for="(tag, index) in tags" :key="index" class="tag">{{ tag }}</span>
      </div>
      <span v-if="language" class="card-lang">{{ language }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav-link-card {
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 0.375rem;
  padding: 14px;
  height: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.25s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    border-color: var(--vp-c-brand);
  }

  .card-header {
    display: flex;
    align-items: center;
    position: relative;

    .card-icon {
      width: 28px;
      height: 28px;
      margin-right: 12px;
      border-radius: 0.375rem;
      overflow: hidden;
      border: 1px solid var(--vp-c-divider);

      img,
      .svg-icon :deep(svg) {
        max-width: 100%;
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .large-icon {
      width: 40px;
      height: 40px;
    }

    .card-title {
      flex: 1;

      .title a {
        font-size: 16px;
        font-weight: 600;
        color: var(--vp-c-text-1);
        margin: 0;
        line-height: 1.4;
        text-decoration: none;
      }
      .author {
        font-size: 13px;
        font-weight: 500;
        color: var(--vp-c-text-2);
        margin: 0;
      }
    }

    .card-badge {
      position: absolute;
      top: -14px;
      right: -14px;
      background-color: var(--vp-c-bg-soft-up);
      border: 1px solid var(--vp-c-divider);
      border-width: 0 0 1px 1px;
      border-radius: 0.375rem;
      padding: 0 4px;
      font-size: 10px;
      font-weight: 400;
      color: var(--vp-c-text-3);
      flex-shrink: 0;

      .badge-text {
        display: flex;
        align-items: center;
        gap: 4px;
      }
    }
  }

  .card-desc {
    font-size: 13px;
    color: var(--vp-c-text-2);
    margin: 12px 0 0;
    line-height: 1.6;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-grow: 1;
  }

  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 12px;

    .card-tags {
      display: flex;
      gap: 4px;

      .tag {
        background-color: var(--vp-c-default-soft);
        color: var(--vp-c-text-2);
        border-radius: 4px;
        padding: 0 5px;
        font-size: 10px;
        font-weight: 400;
      }
    }

    .card-lang {
      font-size: 12px;
      font-weight: 400;
      line-height: 20px;
      color: var(--vp-c-text-3);
    }
  }
}

.dark {
  .nav-link-card {
    &:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      border-color: var(--vp-c-brand-dark);
    }

    .card-header .card-badge {
      background-color: #3a3a3c;
      border-color: #4a4a4c;
    }

    .card-footer .card-tags .tag {
      background-color: #3a3a3c;
      color: var(--vp-c-text-1);
    }
  }
}

@media (max-width: 767px) {
  .nav-link-card {


    .card-header {
      .card-icon {
        width: 36px;
        height: 36px;
        margin-right: 10px;
      }
      .card-title {
        .title {
          font-size: 15px;
        }
        .author {
          font-size: 12px;
        }
      }
    }

    .card-desc {
      font-size: 12px;
      margin-top: 10px;
    }

    .card-footer {
      margin-top: 10px;

      .card-tags .tag {
        padding: 2px 6px;
      }
    }
  }
}

.nav-link-card.outdated {
  opacity: 0.7;
  filter: grayscale(1);

  &:hover {
    opacity: 1;
    filter: grayscale(0);
  }
}

</style>
