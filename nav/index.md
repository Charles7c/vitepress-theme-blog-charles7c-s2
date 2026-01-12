---
layoutClass: nav-layout
lastUpdated: false
outline: [2, 3, 4]
---

<script setup>
import NavPage from './components/NavPage.vue'
import data from './data.json'
</script>

# 个人导航

<NavPage :data="data" recent-links-key="nav-recent-links" />
