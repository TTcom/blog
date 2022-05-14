export const data = {
  "key": "v-a686174a",
  "path": "/webpack/",
  "title": "webpack",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
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
  "filePathRelative": "webpack/README.md"
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
