const nav = require('./nav.js')
const { defaultTheme } = require('vuepress')
module.exports = {
  base:"/blog/",
  title: 'WakeUp',
  description: "Don't need say more",
  port: 8082,
  head: [['link', { rel: 'icon', href: 'alien.ico' }]],
  theme: defaultTheme({
    navbar: nav,
    sidebar: {
      '/nginx/': [
        {
          text: 'nginx',
          children:['README.md']
        },
      ],
      '/webpack/': [
        {
          text: 'webpack',
          children:['README.md']
        },
      ],
      '/javascript/': [
        {
          text: 'javascript',
          children:[
            'README.md',
            'call_apply_bind',
            'event',
            'promise',
            'prototype',
            'algorithm',
            'regex',
            'eventloop',
            'time',
            'model',
          ]
        },
      ],
      '/vue/': [
        {
          text: 'VUE',
          children:[
            'README.md',
            'vue_husky',
            'vue3',
            'vuebuttonauth',
            'vuex',
            'vue_antic.md',
            'vue_eslint',
            'vue_template_invscode',
            'vueplugin',
            'vue_proxy',
            'vue_jwt',
            'vue_transition',
            'funcomponent',
            'axios_intercept',
            'clickoutside',
            'appendbody',
            'slideTransition',
            'vue_principle',
          ]
        },
      ],
      '/react/': [
        {
          text: 'REACT',
          children:['README.md']
        },
      ],
      '/array/': [
        {
          text: '数组练习',
          children:['README.md','flat']
        },
      ],
      '/typescript/': [
        {
          text: 'typescript',
          children:['README.md','fun']
        },
      ],
      '/linux/': [
        {
          text: 'linux',
          children:['README.md']
        },
      ],
      '/git/': [
        {
          text: 'git',
          children:['README.md']
        },
        {
          text: 'git代码提交',
          children:['aboutgit.md']
        },
        {
          text: '向开源项目提PR',
          children:['pullRequest.md']
        },
        {
          text: 'vuepress2.0部署',
          children:['vuepress2.md']
        },
      ],
      '/note/': [
        {
          text: 'note',
          children:[
            'README.md',
            'nodeDeploy',
            'pspeople',
            'layout',
            'treefind',
            'classArray',
            'deepclone',
            'center',
            'moregitssh',
            'vantcssquestion',
            'aboutwechat',
            'aboutiframe',
            'aboutios',
            'cardanimation',
             'learndocker',
             'svg',
             'npm_releasevue',
             'rowcss',
             'aboutcss',
             'vueheight',
          ]
        },
      ]
    },
    sidebarDepth: 2
  }),





}