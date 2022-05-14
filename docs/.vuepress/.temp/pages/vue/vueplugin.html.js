export const data = {
  "key": "v-230a7abc",
  "path": "/vue/vueplugin.html",
  "title": "vueplugin",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "vuex-persist数据持久化",
      "slug": "vuex-persist数据持久化",
      "children": []
    },
    {
      "level": 2,
      "title": "vue-skeleton-webpack-plugin骨架屏",
      "slug": "vue-skeleton-webpack-plugin骨架屏",
      "children": []
    },
    {
      "level": 2,
      "title": "vue的预渲染插件prerender-spa-plugin",
      "slug": "vue的预渲染插件prerender-spa-plugin",
      "children": []
    }
  ],
  "git": {
    "updatedTime": null,
    "contributors": []
  },
  "filePathRelative": "vue/vueplugin.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
