export const themeData = {
  "navbar": [
    {
      "text": "Home",
      "link": "/"
    },
    {
      "text": "study",
      "link": "/note/"
    },
    {
      "text": "vue",
      "link": "/vue/"
    },
    {
      "text": "react",
      "link": "/react/"
    },
    {
      "text": "数组练习",
      "link": "/array/"
    },
    {
      "text": "javascript",
      "link": "/javascript/"
    },
    {
      "text": "typescript",
      "link": "/typescript/"
    },
    {
      "text": "webpack",
      "link": "/webpack/"
    },
    {
      "text": "Nginx",
      "link": "/nginx/"
    },
    {
      "text": "git",
      "link": "/git/"
    },
    {
      "text": "linux",
      "link": "/linux/"
    },
    {
      "text": "github",
      "link": "https://github.com/TTcom"
    }
  ],
  "sidebar": {
    "/nginx/": [
      {
        "text": "nginx",
        "children": [
          "README.md"
        ]
      }
    ],
    "/webpack/": [
      {
        "text": "webpack",
        "children": [
          "README.md"
        ]
      }
    ],
    "/javascript/": [
      {
        "text": "javascript",
        "children": [
          "README.md",
          "call_apply_bind",
          "event",
          "promise",
          "prototype",
          "algorithm",
          "regex",
          "eventloop",
          "time",
          "model"
        ]
      }
    ],
    "/vue/": [
      {
        "text": "VUE",
        "children": [
          "README.md",
          "vue_husky",
          "vue3",
          "vuebuttonauth",
          "vuex",
          "vue_antic.md",
          "vue_eslint",
          "vue_template_invscode",
          "vueplugin",
          "vue_proxy",
          "vue_jwt",
          "vue_transition",
          "funcomponent",
          "axios_intercept",
          "clickoutside",
          "appendbody",
          "slideTransition",
          "vue_principle"
        ]
      }
    ],
    "/react/": [
      {
        "text": "REACT",
        "children": [
          "README.md"
        ]
      }
    ],
    "/array/": [
      {
        "text": "数组练习",
        "children": [
          "README.md",
          "flat"
        ]
      }
    ],
    "/typescript/": [
      {
        "text": "typescript",
        "children": [
          "README.md",
          "fun"
        ]
      }
    ],
    "/linux/": [
      {
        "text": "linux",
        "children": [
          "README.md"
        ]
      }
    ],
    "/git/": [
      {
        "text": "git",
        "children": [
          "README.md"
        ]
      },
      {
        "text": "git代码提交",
        "children": [
          "aboutgit.md"
        ]
      },
      {
        "text": "vuepress2.0部署",
        "children": [
          "vuepress2.md"
        ]
      }
    ],
    "/note/": [
      {
        "text": "note",
        "children": [
          "README.md",
          "nodeDeploy",
          "pspeople",
          "layout",
          "treefind",
          "classArray",
          "deepclone",
          "center",
          "moregitssh",
          "vantcssquestion",
          "aboutwechat",
          "aboutiframe",
          "aboutios",
          "cardanimation",
          "learndocker",
          "svg",
          "npm_releasevue",
          "rowcss",
          "aboutcss",
          "vueheight"
        ]
      }
    ]
  },
  "sidebarDepth": 2,
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "logo": null,
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
