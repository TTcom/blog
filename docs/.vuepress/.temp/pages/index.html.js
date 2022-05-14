export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "主页",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "友情提示",
      "slug": "友情提示",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1652535468000,
    "contributors": [
      {
        "name": "ttcom",
        "email": "1902305073@qq.com",
        "commits": 3
      }
    ]
  },
  "filePathRelative": "README.md"
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
