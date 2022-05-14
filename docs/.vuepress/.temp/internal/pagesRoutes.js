import { Vuepress } from '@vuepress/client'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"主页"},["/index.html","/README.md"]],
  ["v-e4fb069e","/array/flat.html",{"title":"ES10flat"},["/array/flat","/array/flat.md"]],
  ["v-759eed2f","/array/",{"title":"获取数组中出现次数最多的字符"},["/array/index.html","/array/README.md"]],
  ["v-83ba7504","/git/aboutgit.html",{"title":"git代码提交"},["/git/aboutgit","/git/aboutgit.md"]],
  ["v-73fec0b6","/git/pullRequest.html",{"title":""},["/git/pullRequest","/git/pullRequest.md"]],
  ["v-74473916","/git/",{"title":"git命令"},["/git/index.html","/git/README.md"]],
  ["v-4fc1118c","/git/vuepress2.html",{"title":"部署在GitHub Pages"},["/git/vuepress2","/git/vuepress2.md"]],
  ["v-443dbc5a","/javascript/algorithm.html",{"title":"算法"},["/javascript/algorithm","/javascript/algorithm.md"]],
  ["v-7c534eda","/javascript/call_apply_bind.html",{"title":"call_apply_bind"},["/javascript/call_apply_bind","/javascript/call_apply_bind.md"]],
  ["v-e39c19f0","/javascript/event.html",{"title":"js自定义事件"},["/javascript/event","/javascript/event.md"]],
  ["v-27930364","/javascript/eventloop.html",{"title":"eventloop"},["/javascript/eventloop","/javascript/eventloop.md"]],
  ["v-5e03284e","/javascript/model.html",{"title":"设计模式"},["/javascript/model","/javascript/model.md"]],
  ["v-f8ded232","/javascript/promise.html",{"title":"promise"},["/javascript/promise","/javascript/promise.md"]],
  ["v-0c07ae00","/javascript/prototype.html",{"title":"原型链"},["/javascript/prototype","/javascript/prototype.md"]],
  ["v-e02a086e","/javascript/",{"title":"javascript"},["/javascript/index.html","/javascript/README.md"]],
  ["v-17def97b","/javascript/regex.html",{"title":"正则使用（vscode,金额）"},["/javascript/regex","/javascript/regex.md"]],
  ["v-f33e46fa","/javascript/time.html",{"title":"时间相关操作"},["/javascript/time","/javascript/time.md"]],
  ["v-f0383c18","/linux/",{"title":"Linux常用命令"},["/linux/index.html","/linux/README.md"]],
  ["v-e9a1f7e4","/nginx/",{"title":"nginx"},["/nginx/index.html","/nginx/README.md"]],
  ["v-c9438ac2","/note/aboutcss.html",{"title":"页面动态更换主题"},["/note/aboutcss","/note/aboutcss.md"]],
  ["v-792f5e2c","/note/aboutiframe.html",{"title":"iframe父子页面信息传递"},["/note/aboutiframe","/note/aboutiframe.md"]],
  ["v-370c5ad5","/note/aboutios.html",{"title":"ios中嵌入web页面研发问题"},["/note/aboutios","/note/aboutios.md"]],
  ["v-af498a9a","/note/abouturl.html",{"title":""},["/note/abouturl","/note/abouturl.md"]],
  ["v-6f5b56ea","/note/aboutwechat.html",{"title":"微信公众号研发问题"},["/note/aboutwechat","/note/aboutwechat.md"]],
  ["v-065de509","/note/cardanimation.html",{"title":"一个卡片动画"},["/note/cardanimation","/note/cardanimation.md"]],
  ["v-4dd07400","/note/center.html",{"title":"css垂直水平居中"},["/note/center","/note/center.md"]],
  ["v-48c57214","/note/classArray.html",{"title":"类数组对象"},["/note/classArray","/note/classArray.md"]],
  ["v-876a08a8","/note/deepclone.html",{"title":"深拷贝与浅拷贝"},["/note/deepclone","/note/deepclone.md"]],
  ["v-620d424b","/note/layout.html",{"title":"移动端调试和适配问题"},["/note/layout","/note/layout.md"]],
  ["v-60160d19","/note/learndocker.html",{"title":"learndocker"},["/note/learndocker","/note/learndocker.md"]],
  ["v-3846778a","/note/moregitssh.html",{"title":"Git配置多个SSH key"},["/note/moregitssh","/note/moregitssh.md"]],
  ["v-7bbcd14c","/note/nodeDeploy.html",{"title":"node项目部署"},["/note/nodeDeploy","/note/nodeDeploy.md"]],
  ["v-1890ed22","/note/npm_releasevue.html",{"title":"vue组件发布npm"},["/note/npm_releasevue","/note/npm_releasevue.md"]],
  ["v-7559b9c2","/note/promise.html",{"title":""},["/note/promise","/note/promise.md"]],
  ["v-3f0edd23","/note/pspeople.html",{"title":"ps快速抠出头像"},["/note/pspeople","/note/pspeople.md"]],
  ["v-15054f24","/note/",{"title":"chrome检测内存泄漏"},["/note/index.html","/note/README.md"]],
  ["v-6e554a28","/note/rowcss.html",{"title":"箭头css"},["/note/rowcss","/note/rowcss.md"]],
  ["v-12ae67ce","/note/svg.html",{"title":"svg介绍"},["/note/svg","/note/svg.md"]],
  ["v-33c5bf84","/note/treefind.html",{"title":"遍历树结构数据"},["/note/treefind","/note/treefind.md"]],
  ["v-41d8df36","/note/vantcssquestion.html",{"title":"vant移动端适配问题"},["/note/vantcssquestion","/note/vantcssquestion.md"]],
  ["v-b0451220","/note/vueheight.html",{"title":"使用 Vue Transition 实现高度渐变动画"},["/note/vueheight","/note/vueheight.md"]],
  ["v-dc3b2a6e","/react/",{"title":"react"},["/react/index.html","/react/README.md"]],
  ["v-1f08952a","/typescript/fun.html",{"title":"函数"},["/typescript/fun","/typescript/fun.md"]],
  ["v-6da6abb1","/typescript/",{"title":"typescript 简介"},["/typescript/index.html","/typescript/README.md"]],
  ["v-2baf570a","/vue/appendbody.html",{"title":"vue中将弹出框插入body中"},["/vue/appendbody","/vue/appendbody.md"]],
  ["v-3da03dbc","/vue/axios_intercept.html",{"title":"axios全局拦截配置"},["/vue/axios_intercept","/vue/axios_intercept.md"]],
  ["v-de86e38c","/vue/clickoutside.html",{"title":"vue中点击空白处隐藏弹出框"},["/vue/clickoutside","/vue/clickoutside.md"]],
  ["v-56bb70ce","/vue/funcomponent.html",{"title":"vue函数式组件"},["/vue/funcomponent","/vue/funcomponent.md"]],
  ["v-744e35e2","/vue/",{"title":"Vue打包文件浏览器存在缓存问题"},["/vue/index.html","/vue/README.md"]],
  ["v-49b49395","/vue/slideTransition.html",{"title":"vue页面切换动画"},["/vue/slideTransition","/vue/slideTransition.md"]],
  ["v-6abdbdea","/vue/vue3.html",{"title":"Vue3新特性"},["/vue/vue3","/vue/vue3.md"]],
  ["v-c6f37ab8","/vue/vue3learn.html",{"title":""},["/vue/vue3learn","/vue/vue3learn.md"]],
  ["v-d3a00f4a","/vue/vuebuttonauth.html",{"title":"Vue中按钮权限设置"},["/vue/vuebuttonauth","/vue/vuebuttonauth.md"]],
  ["v-230a7abc","/vue/vueplugin.html",{"title":"vueplugin"},["/vue/vueplugin","/vue/vueplugin.md"]],
  ["v-3f07be76","/vue/vuex.html",{"title":"vuex"},["/vue/vuex","/vue/vuex.md"]],
  ["v-9c24121a","/vue/vue_antic.html",{"title":"vue_antic"},["/vue/vue_antic","/vue/vue_antic.md"]],
  ["v-865eeb26","/vue/vue_eslint.html",{"title":"vue_eslint"},["/vue/vue_eslint","/vue/vue_eslint.md"]],
  ["v-d57601c0","/vue/vue_husky.html",{"title":"Vue项目集成husky"},["/vue/vue_husky","/vue/vue_husky.md"]],
  ["v-fdf28c26","/vue/vue_jwt.html",{"title":""},["/vue/vue_jwt","/vue/vue_jwt.md"]],
  ["v-6ffd73d0","/vue/vue_principle.html",{"title":"vue_principle"},["/vue/vue_principle","/vue/vue_principle.md"]],
  ["v-ea20ec34","/vue/vue_proxy.html",{"title":"vue_proxy"},["/vue/vue_proxy","/vue/vue_proxy.md"]],
  ["v-36142440","/vue/vue_template_invscode.html",{"title":"vue_template_invscode"},["/vue/vue_template_invscode","/vue/vue_template_invscode.md"]],
  ["v-0e341ec9","/vue/vue_transition.html",{"title":"vue_transition"},["/vue/vue_transition","/vue/vue_transition.md"]],
  ["v-a686174a","/webpack/",{"title":"webpack"},["/webpack/index.html","/webpack/README.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: '404',
      path: '/:catchAll(.*)',
      component: Vuepress,
    }
  ]
)
