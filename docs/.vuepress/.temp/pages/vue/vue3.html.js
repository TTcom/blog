export const data = {
  "key": "v-6abdbdea",
  "path": "/vue/vue3.html",
  "title": "Vue3新特性",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "vue2与vue3的对比",
      "slug": "vue2与vue3的对比",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1652535468000,
    "contributors": [
      {
        "name": "ttcom",
        "email": "1902305073@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "vue/vue3.md"
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
