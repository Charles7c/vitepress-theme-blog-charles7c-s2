<script setup lang="ts">
import {ref, onMounted, onUnmounted, watch} from 'vue'
import {SponsorData, data, base, load, Sponsor} from './sponsors'

type Placement = 'aside-after' | 'page' | 'landing' | 'sidebar'

const props = withDefaults(
  defineProps<{
    tier: keyof SponsorData
    placement?: Placement
  }>(),
  {
    placement: 'aside-after'
  }
)

/**
 * 解析赞助者数据
 *
 * @param data 赞助者原始数据
 */
function resolveList(data: SponsorData) {
  return data[props.tier]
}

const container = ref<HTMLElement>()
const visible = ref(false)

onMounted(async () => {
  // only render when entering view
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        visible.value = true
        observer.disconnect()
      }
    },
    { rootMargin: '0px 0px 300px 0px' }
  )
  observer.observe(container.value!)
  onUnmounted(() => observer.disconnect())

  // load data
  await load()
})
</script>

<template>
  <div
    ref="container"
    class="sponsor-container"
    :class="[tier, placement]"
  >
    <template v-if="data">
      <a
        v-for="{ url, img, name } of resolveList(data)"
        class="sponsor-item"
        :href="url"
        target="_blank"
        rel="sponsored noopener"
      >
        <img :src="`${base}/images/sponsor/ads/${img}`" :alt="name" />
      </a>
    </template>
  </div>
</template>

<style scoped>
.sponsor-container {
  --max-width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--max-width), 1fr));
  column-gap: 4px;
}

.sponsor-container.platinum {
  --max-width: 240px;
}
.sponsor-container.gold {
  --max-width: 180px;
}
.sponsor-container.silver {
  --max-width: 140px;
}

.sponsor-item {
  margin: 2px 0;
  background-color: var(--vp-c-bg-alt);
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 2px;
  transition: background-color 0.2s ease;
  height: calc(var(--max-width) / 2 - 6px);
}
.sponsor-item.action {
  font-size: 11px;
  color: var(--vp-c-text-3);
}
.sponsor-container.page .sponsor-item.action {
 font-size: 16px;
}
.sponsor-item img {
  max-width: calc(var(--max-width));
  max-height: calc(var(--max-width) / 2 - 20px);
  filter: grayscale(0);
}
.sponsor-item img:hover {
  opacity: 0.9;
}
.special .sponsor-item {
  height: 160px;
}
.special .sponsor-item img {
  max-width: 300px;
  max-height: 150px;
}

/* dark mode */
.dark .aside-after .sponsor-item,
.dark .sidebar .sponsor-item,
.dark .landing .sponsor-item {
  background-color: var(--vp-c-bg-soft);
}
.aside-after .sponsor-item img,
.sidebar .sponsor-item img,
.landing .sponsor-item img {
  transition: filter 0.2s ease;
}
/*
.dark .aside-after .sponsor-item img,
.dark .sidebar .sponsor-item img,
.dark .landing .sponsor-item img {
  filter: grayscale(1) invert(1);
}
*/
.dark .aside-after .sponsor-item:hover,
.dark .sidebar .sponsor-item:hover,
.dark .landing .sponsor-item:hover {
  color: var(--vp-c-text-1);
  background-color: var(--vp-c-white);
}
/*
.dark .sponsor-item:hover img {
  filter: none;
}
*/

/* PNG、SVG 图片适合 */
.dark .sidebar.special .sponsor-item img {
  filter: grayscale(1) invert(1);
}
.dark .sidebar.special .sponsor-item:hover img {
  filter: none;
}

/* side mode (on content pages) */
.sponsor-container.platinum.sidebar {
  --max-width: 100%;
}

.sidebar .sponsor-item {
  background-color: var(--vp-nav-bg-color);
}
.sidebar .sponsor-item,
.sidebar .sponsor-item img {
  border-radius: 5px;
}

.sidebar.special .sponsor-item,
.sidebar.platinum .sponsor-item {
  height: auto;
}
.sidebar.special .sponsor-item img,
.sidebar.platinum .sponsor-item img {
  max-width: 100%;
  max-height: 100%;
}

/* aside-after mode (on content pages) */
.aside-after .sponsor-item {
  margin: 1px 0;
}

.aside-after .gold .sponsor-item {
  width: 100%;
  height: 70px;
}
.aside-after .gold .sponsor-item img {
  max-width: 120px;
  max-height: 48px;
}

.sponsor-container.silver.aside-after {
  --max-width: 110px;
  column-gap: 1px;
}
.aside-after .silver .sponsor-item {
  width: 111px;
  height: 50px;
}
.aside-after .silver .sponsor-item img {
  max-width: 88px;
}

/* narrow, aside-after will be hidden under this state so it's mutually exclusive */
@media (max-width: 720px) {
  .sponsor-container.platinum {
    --max-width: 180px;
  }
  .sponsor-container.gold {
    --max-width: 140px;
  }
  .sponsor-container.silver {
    --max-width: 120px;
  }
}

@media (max-width: 480px) {
  .sponsor-container.platinum {
    --max-width: 150px;
  }
  .sponsor-container.gold {
    --max-width: 120px;
  }
  .sponsor-container.silver {
    --max-width: 100px;
  }
}
</style>
