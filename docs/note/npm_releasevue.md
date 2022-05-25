# 创建和发布自己创建的NPM包
- 参考链接：https://juejin.cn/post/7091246575032205342
### vue组件发布NPM
 详细文档参考vue-cli 构建目标库方法 [](https://cli.vuejs.org/zh/guide/build-targets.html) 🎉 💯

- 首先在package.json文件中的"scripts"中加入"dist": "vue-cli-service build --target lib --name cascader --dest lib  ./src/components/cascader.vue", --name cascader打包的文件名称--dest lib打包的文件夹名称 后面跟的是打包的文件

- 运行打包命令npm run dist生成打包后的组件库文件dist

- 在package.json文件中的private对应的值改为false,下面增加"main": "./dist/cascader.umd.min.js","module": "./dist/cascader.umd.min.js",

- .gitignore文件中删除忽略dist的内容
### 项目完成后

- 如果不是npm官方原则需要安装nrm将npm源切换到官方源 
``js
npm config set registry https://registry.npmjs.org
```

- 上传发布前先去npm官网确认一下,这个项目名有没有被占用
```js
npm view 包名
这个命令用来查看 某个包的信息
如果返回404，说明这个项目名在npm官网上找不到，此时你就可以使用。 
```
- 检查一下 自己是否已登录命令如下:
```js
npm who am i
显示出自己的项目名 说明你连接成功
如果没有连接成功 则输入 npm logout 退出去
```
- 如果没有登录则需要登录npm
```js
登录账户输入命令 npm adduser 
这个命令需要输入四个信息 以供连接上npmjs 
1.用户名  (是你在npmjs注册的用户名)
2.密码  （注意 输入密码时是看不到内容的 所以慎重输入）
3.邮箱 (是你在npmjs官网上绑定的邮箱) 
4.效验密码。(它会向你的邮箱里发送验证码)  
** 如果你已经不是第一次连接这个官网了,这一步是可以省略的。

```

- 最后npm publish命令上传项目

- npm unpublish 包名    // 删除上传的项目

- 如果package.json 里配置了 files: ["lib"]，则 npm publish 的时候只会上传 lib 目录下的文件
### package.json例子
```json
{
  "name": "youselfpackagename",
  "version": "0.1.0",
  "private": false,
  "main": "./dist/afooter.umd.min.js",
  "module": "./dist/afooter.umd.min.js",
  "files": ["lib"],
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "dist": "vue-cli-service build --target lib --name afooter --dest lib ./src/components/afooter.vue",
    "prepare": "npm run dist" //发布npm包前会执行的命令，安装依赖完成后也会执行的命令
  },
  "dependencies": {
    "afooter": "^0.1.0",
    "core-js": "^3.6.5",
    "vue": "^2.6.11",
    "vue-router": "^3.2.0"
  },
  "devDependencies": {
    "@vue/cli-plugin-babel": "~4.5.0",
    "@vue/cli-plugin-router": "~4.5.0",
    "@vue/cli-service": "~4.5.0",
    "sass": "^1.26.5",
    "sass-loader": "^8.0.2",
    "vue-template-compiler": "^2.6.11"
  },
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not dead"
  ]
}

```