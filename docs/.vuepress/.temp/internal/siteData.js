export const siteData = {
  "base": "/blog/",
  "lang": "en-US",
  "title": "Uphold",
  "description": "Just playing around",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/alien.ico"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
