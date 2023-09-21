import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/blog/',
  themeConfig: {
    siteTitle: '学习指南',
    logo: '/dogs.png',
    socialLinks: [
      { icon: 'github', link: '/' }
    ],
    nav: [
      { text: 'Vue', link: '/vue/README' },
      { text: 'Git', link: '/git/README' },
    ],
    sidebar: [
      {
        text: 'nginx',
        items: [
          { text: 'nginx简介', link: '/nginx/README' },
        ],
        collapsed: true
      },
      {
        text: 'webpack',
        items: [
          { text: 'webpack', link: '/webpack/README' },
        ],

        collapsed: true
      },
      {
        text: 'javascript',
        items: [
          { text: 'javascript', link: '/javascript/README' },
          { text: 'call_apply_bind', link: '/javascript/call_apply_bind' },
          { text: 'event', link: '/javascript/event' },
          { text: 'promise', link: '/javascript/promise' },
          { text: 'prototype', link: '/javascript/prototype' },
          { text: 'algorithm', link: '/javascript/algorithm' },
          { text: 'regex', link: '/javascript/regex' },
          { text: 'eventloop', link: '/javascript/eventloop' },
          { text: 'time', link: '/javascript/time' },
          { text: 'model', link: '/javascript/model' },
        ],
        collapsed: true
      },
      {
        text: 'vue',
        items: [
          { text: 'vue', link: '/vue/README' },
          { text: 'vue_husky', link: '/vue/vue_husky' },
          { text: 'vue3', link: '/vue/vue3' },
          { text: 'vuebuttonauth', link: '/vue/vuebuttonauth' },
          { text: 'vuex', link: '/vue/vuex' },
          { text: 'vue_antic', link: '/vue/vue_antic' },
          { text: 'vue_eslint', link: '/vue/vue_eslint' },
          { text: 'vue_template_invscode', link: '/vue/vue_template_invscode' },
          { text: 'vueplugin', link: '/vue/vueplugin' },
          { text: 'vue_proxy', link: '/vue/vue_proxy' },
          { text: 'vue_jwt', link: '/vue/vue_jwt' },
          { text: 'vue_transition', link: '/vue/vue_transition' },
          { text: 'funcomponent', link: '/vue/funcomponent' },
          { text: 'axios_intercept', link: '/vue/axios_intercept' },
          { text: 'clickoutside', link: '/vue/clickoutside' },
          { text: 'appendbody', link: '/vue/appendbody' },
          { text: 'slideTransition', link: '/vue/slideTransition' },
          { text: 'vue_principle', link: '/vue/vue_principle' },

        ],
        collapsed: true
      },
      {
        text: 'react',
        items: [
          { text: 'react', link: '/react/README' },

        ],
        collapsed: true
      },
      {
        text: 'array',
        items: [
          { text: '数组练习', link: '/array/README' },
          { text: 'flat', link: '/array/flat' },

        ],
        collapsed: true
      },
      {
        text: 'typescript',
        items: [
          { text: 'typescript', link: '/typescript/README' },
          { text: 'fun', link: '/typescript/fun' },

        ],
        collapsed: true
      },
      {
        text: 'linux',
        items: [
          { text: 'linux', link: '/linux/README' },
        ],
        collapsed: true
      },
      {
        text: 'git',
        items: [
          { text: 'git', link: '/git/README' },
          { text: 'git代码提交', link: '/git/aboutgit' },
          { text: '向开源项目提PR', link: '/git/pullRequest' },
          { text: 'vuepress2.0部署', link: '/git/vuepress2' },
        ],
        collapsed: true
      },
      {
        text: 'note',
        items: [
          { text: 'npm', link: '/note/npm' },
          { text: 'note', link: '/note/README' },
          { text: 'nodeDeploy', link: '/note/nodeDeploy' },
          { text: 'pspeople', link: '/note/pspeople' },
          { text: 'layout', link: '/note/layout' },
          { text: 'treefind', link: '/note/treefind' },
          { text: 'classArray', link: '/note/classArray' },
          { text: 'deepclone', link: '/note/deepclone' },
          { text: 'center', link: '/note/center' },
          { text: 'moregitssh', link: '/note/moregitssh' },
          { text: 'vantcssquestion', link: '/note/vantcssquestion' },
          { text: 'aboutwechat', link: '/note/aboutwechat' },
          { text: 'aboutiframe', link: '/note/aboutiframe' },
          { text: 'aboutios', link: '/note/aboutios' },
          { text: 'cardanimation', link: '/note/cardanimation' },
          { text: 'learndocker', link: '/note/learndocker' },
          { text: 'svg', link: '/note/svg' },
          { text: 'npm_releasevue', link: '/note/npm_releasevue' },
          { text: 'rowcss', link: '/note/rowcss' },
          { text: 'aboutcss', link: '/note/aboutcss' },
          { text: 'vueheight', link: '/note/vueheight' },
        ],
        collapsed: true
      },

    ],
  },
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/dogs.png' }],
  ],
  description: 'A VitePress site'
})
