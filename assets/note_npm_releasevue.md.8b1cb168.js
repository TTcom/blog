import{_ as n,o as a,c as l,a as p}from"./app.7c722b35.js";const i=JSON.parse('{"title":"创建和发布自己创建的NPM包","description":"","frontmatter":{},"headers":[{"level":3,"title":"vue组件发布NPM","slug":"vue组件发布npm","link":"#vue组件发布npm","children":[]},{"level":3,"title":"项目完成后","slug":"项目完成后","link":"#项目完成后","children":[]},{"level":3,"title":"package.json例子","slug":"package-json例子","link":"#package-json例子","children":[]}],"relativePath":"note/npm_releasevue.md"}'),o={name:"note/npm_releasevue.md"};function e(t,s,c,r,D,F){return a(),l("div",null,s[0]||(s[0]=[p(`<h1 id="创建和发布自己创建的npm包" tabindex="-1">创建和发布自己创建的NPM包 <a class="header-anchor" href="#创建和发布自己创建的npm包" aria-hidden="true">#</a></h1><ul><li>参考链接：<a href="https://juejin.cn/post/7091246575032205342" target="_blank" rel="noreferrer">https://juejin.cn/post/7091246575032205342</a></li></ul><h3 id="vue组件发布npm" tabindex="-1">vue组件发布NPM <a class="header-anchor" href="#vue组件发布npm" aria-hidden="true">#</a></h3><p>详细文档参考vue-cli 构建目标库方法 <a href="https://cli.vuejs.org/zh/guide/build-targets.html" target="_blank" rel="noreferrer"></a> 🎉 💯</p><ul><li><p>首先在package.json文件中的&quot;scripts&quot;中加入&quot;dist&quot;: &quot;vue-cli-service build --target lib --name cascader --dest lib ./src/components/cascader.vue&quot;, --name cascader打包的文件名称--dest lib打包的文件夹名称 后面跟的是打包的文件</p></li><li><p>运行打包命令npm run dist生成打包后的组件库文件dist</p></li><li><p>在package.json文件中的private对应的值改为false,下面增加&quot;main&quot;: &quot;./dist/cascader.umd.min.js&quot;,&quot;module&quot;: &quot;./dist/cascader.umd.min.js&quot;,</p></li><li><p>.gitignore文件中删除忽略dist的内容</p></li></ul><h3 id="项目完成后" tabindex="-1">项目完成后 <a class="header-anchor" href="#项目完成后" aria-hidden="true">#</a></h3><ul><li>如果不是npm官方原则需要安装nrm将npm源切换到官方源 \`\`js npm config set registry <a href="https://registry.npmjs.org" target="_blank" rel="noreferrer">https://registry.npmjs.org</a></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">- 上传发布前先去npm官网确认一下,这个项目名有没有被占用</span></span>
<span class="line"><span style="color:#babed8;">\`\`\`js</span></span>
<span class="line"><span style="color:#babed8;">npm view 包名</span></span>
<span class="line"><span style="color:#babed8;">这个命令用来查看 某个包的信息</span></span>
<span class="line"><span style="color:#babed8;">如果返回404，说明这个项目名在npm官网上找不到，此时你就可以使用。 </span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><ul><li>检查一下 自己是否已登录命令如下:</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#BABED8;">npm who am i</span></span>
<span class="line"><span style="color:#BABED8;">显示出自己的项目名 说明你连接成功</span></span>
<span class="line"><span style="color:#BABED8;">如果没有连接成功 则输入 npm logout 退出去</span></span>
<span class="line"></span></code></pre></div><ul><li>如果没有登录则需要登录npm</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#BABED8;">登录账户输入命令 npm adduser </span></span>
<span class="line"><span style="color:#BABED8;">这个命令需要输入四个信息 以供连接上npmjs </span></span>
<span class="line"><span style="color:#BABED8;">1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">用户名</span><span style="color:#BABED8;">  (是你在npmjs注册的用户名)</span></span>
<span class="line"><span style="color:#BABED8;">2</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">密码  （注意 输入密码时是看不到内容的 所以慎重输入）</span></span>
<span class="line"><span style="color:#BABED8;">3</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">邮箱</span><span style="color:#BABED8;"> (是你在npmjs官网上绑定的邮箱) </span></span>
<span class="line"><span style="color:#BABED8;">4</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">效验密码。(它会向你的邮箱里发送验证码)  </span></span>
<span class="line"><span style="color:#89DDFF;">**</span><span style="color:#BABED8;"> 如果你已经不是第一次连接这个官网了</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;">这一步是可以省略的。</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><ul><li><p>最后npm publish命令上传项目</p></li><li><p>npm unpublish 包名 // 删除上传的项目</p></li><li><p>如果package.json 里配置了 files: [&quot;lib&quot;]，则 npm publish 的时候只会上传 lib 目录下的文件</p></li></ul><h3 id="package-json例子" tabindex="-1">package.json例子 <a class="header-anchor" href="#package-json例子" aria-hidden="true">#</a></h3><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">youselfpackagename</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">version</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0.1.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">private</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">false,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">main</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./dist/afooter.umd.min.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">module</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./dist/afooter.umd.min.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">files</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">lib</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">serve</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue-cli-service serve</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">build</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue-cli-service build</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">dist</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue-cli-service build --target lib --name afooter --dest lib ./src/components/afooter.vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">prepare</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">npm run dist</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">//发布npm包前会执行的命令，安装依赖完成后也会执行的命令</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">dependencies</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">afooter</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">^0.1.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">core-js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">^3.6.5</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">^2.6.11</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">vue-router</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">^3.2.0</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">devDependencies</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">@vue/cli-plugin-babel</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">~4.5.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">@vue/cli-plugin-router</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">~4.5.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">@vue/cli-service</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">~4.5.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">sass</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">^1.26.5</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">sass-loader</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">^8.0.2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">vue-template-compiler</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">^2.6.11</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">browserslist</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&gt; 1%</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">last 2 versions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">not dead</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,15)]))}const u=n(o,[["render",e]]);export{i as __pageData,u as default};
