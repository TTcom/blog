import{_ as s,o as n,c as a,a as l}from"./app.9328da71.js";const u=JSON.parse('{"title":"移动端调试和适配问题","description":"","frontmatter":{},"headers":[{"level":2,"title":"使用vw单位适配","slug":"使用vw单位适配","link":"#使用vw单位适配","children":[]},{"level":2,"title":"关于连接真机进行移动端调试问题","slug":"关于连接真机进行移动端调试问题","link":"#关于连接真机进行移动端调试问题","children":[]},{"level":2,"title":"关于移动端适配","slug":"关于移动端适配","link":"#关于移动端适配","children":[]}],"relativePath":"note/layout.md"}'),o={name:"note/layout.md"},p=l(`<h1 id="移动端调试和适配问题" tabindex="-1">移动端调试和适配问题 <a class="header-anchor" href="#移动端调试和适配问题" aria-hidden="true">#</a></h1><h2 id="使用vw单位适配" tabindex="-1">使用vw单位适配 <a class="header-anchor" href="#使用vw单位适配" aria-hidden="true">#</a></h2><ul><li>参考链接<a href="https://juejin.cn/post/7061866685166256142" target="_blank" rel="noreferrer">https://juejin.cn/post/7061866685166256142</a></li><li>postcss-px-to-viewport依赖作者长时间未更新导致include无效，可安装postcss-px-to-viewport-update替换</li></ul><h2 id="关于连接真机进行移动端调试问题" tabindex="-1">关于连接真机进行移动端调试问题 <a class="header-anchor" href="#关于连接真机进行移动端调试问题" aria-hidden="true">#</a></h2><ul><li>使用chrome调试需要科学上网地址栏输入chrome://inspect会打开设备监视页面</li><li>使用edg浏览器调试需要科学上网地址栏输入edge://inspect/#devices，然后等待页面出现WebView in com.tdh.shell.app (65.0.3325.110)点击inspect</li><li>使用谷歌浏览器需翻墙才能看到手机页面，亲测可以，使用edg浏览器不用翻墙未测试过</li><li>可参考<a href="https://www.ruanyifeng.com/blog/2019/06/android-remote-debugging.html" target="_blank" rel="noreferrer">https://www.ruanyifeng.com/blog/2019/06/android-remote-debugging.html</a></li></ul><h2 id="关于移动端适配" tabindex="-1">关于移动端适配 <a class="header-anchor" href="#关于移动端适配" aria-hidden="true">#</a></h2><ul><li>使用flexible.js或hotCss.js 改js可适配不同屏幕-使用动态的HTML根字体大小和动态的viewport scale</li><li>安装插件postcss-plugin-px2rem该插件可将px转为rem</li><li>安装插件lib-flexible该插件可将根据不同的设备宽为HTML设置不同的font-size</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#BABED8;">npm install postcss</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">pxtorem </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">D</span></span>
<span class="line"><span style="color:#BABED8;">npm install lib</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">flexible </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">S</span></span>
<span class="line"></span></code></pre></div><ul><li>如果是vue-cli3为例首先在main.js中引入flexible.js或hotCss.js</li><li>在根目录中新建postcss.config.js按如下格式对postcss-pxtorem进行设置</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">autoprefixer</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#F07178;">overrideBrowserslist</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Android &gt;= 4.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">iOS &gt;= 8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">]</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">postcss-pxtorem</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#F07178;">rootValue</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">37.5</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#F07178;">propList</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">*</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#F07178;">exclude</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><ul><li>如果是vue-cli2为例首先在main.js中引入flexible.js或hotCss.js</li><li>在根目录中新建.postcssrc.js按如下格式对postcss-pxtorem进行设置</li><li>如果你的项目很老了可能需要安装指定版本的依赖</li><li>在package.json中安装以下依赖</li></ul><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">postcss-import</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">11.1.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">postcss-loader</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2.1.6</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">postcss-pxtorem</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">^5.1.1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">postcss-url</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">7.3.2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">,</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">postcss-import</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">postcss-url</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// to edit target browsers: use &quot;browserslist&quot; field in package.json</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">autoprefixer</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#F07178;">browsers</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Android &gt;= 4.0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">iOS &gt;= 8</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">]</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">postcss-pxtorem</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#F07178;">rootValue</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">37.5</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#F07178;">propList</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">*</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#F07178;">selectorBlackList</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> []</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#F07178;">exclude</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">styles|element-ui|Front|manage|errorLog|errorPage|layout|login|components</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">//不需要处理的文件目录</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,13),e=[p];function t(c,r,D,y,F,i){return n(),a("div",null,e)}const E=s(o,[["render",t]]);export{u as __pageData,E as default};