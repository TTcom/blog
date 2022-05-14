<template><h1 id="vue组件发布npm" tabindex="-1"><a class="header-anchor" href="#vue组件发布npm" aria-hidden="true">#</a> vue组件发布npm</h1>
<p>详细文档参考vue-cli 构建目标库方法 <a href="https://cli.vuejs.org/zh/guide/build-targets.html" target="_blank" rel="noopener noreferrer"><ExternalLinkIcon/></a> 🎉 💯</p>
<ul>
<li>首先在package.json文件中的&quot;scripts&quot;中加入&quot;dist&quot;: &quot;vue-cli-service build --target lib --name cascader --dest lib  ./src/components/cascader.vue&quot;, --name cascader打包的文件名称--dest lib打包的文件夹名称 后面跟的是打包的文件</li>
<li>运行打包命令npm run dist生成打包后的组件库文件dist</li>
<li>在package.json文件中的private对应的值改为false,下面增加&quot;main&quot;: &quot;./dist/cascader.umd.min.js&quot;,&quot;module&quot;: &quot;./dist/cascader.umd.min.js&quot;,</li>
<li>.gitignore文件中删除忽略dist的内容</li>
<li>如果不是npm官方原则需要安装nrm将npm源切换到官方源</li>
<li>登录npm账户</li>
<li>npm publish命令上传项目</li>
<li>npm unpublish 包名    // 删除上传的项目</li>
<li>如果package.json 里配置了 files: [&quot;lib&quot;]，则 npm publish 的时候只会打包 lib 目录下的文件</li>
</ul>
<h3 id="package-json例子" tabindex="-1"><a class="header-anchor" href="#package-json例子" aria-hidden="true">#</a> package.json例子</h3>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"afooter"</span><span class="token punctuation">,</span>
  <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"0.1.0"</span><span class="token punctuation">,</span>
  <span class="token property">"private"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"main"</span><span class="token operator">:</span> <span class="token string">"./dist/afooter.umd.min.js"</span><span class="token punctuation">,</span>
  <span class="token property">"module"</span><span class="token operator">:</span> <span class="token string">"./dist/afooter.umd.min.js"</span><span class="token punctuation">,</span>
  <span class="token property">"files"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"lib"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"serve"</span><span class="token operator">:</span> <span class="token string">"vue-cli-service serve"</span><span class="token punctuation">,</span>
    <span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"vue-cli-service build"</span><span class="token punctuation">,</span>
    <span class="token property">"dist"</span><span class="token operator">:</span> <span class="token string">"vue-cli-service build --target lib --name afooter --dest lib ./src/components/afooter.vue"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"dependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"afooter"</span><span class="token operator">:</span> <span class="token string">"^0.1.0"</span><span class="token punctuation">,</span>
    <span class="token property">"core-js"</span><span class="token operator">:</span> <span class="token string">"^3.6.5"</span><span class="token punctuation">,</span>
    <span class="token property">"vue"</span><span class="token operator">:</span> <span class="token string">"^2.6.11"</span><span class="token punctuation">,</span>
    <span class="token property">"vue-router"</span><span class="token operator">:</span> <span class="token string">"^3.2.0"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"devDependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"@vue/cli-plugin-babel"</span><span class="token operator">:</span> <span class="token string">"~4.5.0"</span><span class="token punctuation">,</span>
    <span class="token property">"@vue/cli-plugin-router"</span><span class="token operator">:</span> <span class="token string">"~4.5.0"</span><span class="token punctuation">,</span>
    <span class="token property">"@vue/cli-service"</span><span class="token operator">:</span> <span class="token string">"~4.5.0"</span><span class="token punctuation">,</span>
    <span class="token property">"sass"</span><span class="token operator">:</span> <span class="token string">"^1.26.5"</span><span class="token punctuation">,</span>
    <span class="token property">"sass-loader"</span><span class="token operator">:</span> <span class="token string">"^8.0.2"</span><span class="token punctuation">,</span>
    <span class="token property">"vue-template-compiler"</span><span class="token operator">:</span> <span class="token string">"^2.6.11"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"browserslist"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"> 1%"</span><span class="token punctuation">,</span>
    <span class="token string">"last 2 versions"</span><span class="token punctuation">,</span>
    <span class="token string">"not dead"</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div></template>
