import { h } from 'vue';
import { useData, useRoute } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import Page from './views/PageView.vue';
import Group from './views/GroupView.vue';
import PostMeta from './components/PostMeta.vue';
import ThemeLayout from './views/ThemeLayout.vue';
import './styles/index.less';
import { initComponent } from 'vitepress-mermaid-preview/component';
import 'vitepress-mermaid-preview/dist/index.css';

export default {
  extends: DefaultTheme,
  Layout: () => {
    const props: Record<string, any> = {}
    // 添加自定义 class
    const { frontmatter } = useData()
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass
    }
    return h(ThemeLayout, props)
  },
  enhanceApp({ app }) {
    initComponent(app);
    app.component('Page', Page);
    app.component('Group', Group);
    app.component('PostMeta', PostMeta);
  }
};
