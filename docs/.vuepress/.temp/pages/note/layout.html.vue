<template><h1 id="移动端调试和适配问题" tabindex="-1"><a class="header-anchor" href="#移动端调试和适配问题" aria-hidden="true">#</a> 移动端调试和适配问题</h1>
<h3 id="关于连接真机进行移动端调试问题" tabindex="-1"><a class="header-anchor" href="#关于连接真机进行移动端调试问题" aria-hidden="true">#</a> 关于连接真机进行移动端调试问题</h3>
<ul>
<li>使用chrome调试需要科学上网地址栏输入chrome://inspect会打开设备监视页面</li>
<li>使用edg浏览器调试需要科学上网地址栏输入edge://inspect/#devices，然后等待页面出现WebView in com.tdh.shell.app (65.0.3325.110)点击inspect</li>
<li>使用谷歌浏览器需翻墙才能看到手机页面，亲测可以，使用edg浏览器不用翻墙未测试过</li>
<li>可参考https://www.ruanyifeng.com/blog/2019/06/android-remote-debugging.html</li>
</ul>
<h3 id="关于移动端适配" tabindex="-1"><a class="header-anchor" href="#关于移动端适配" aria-hidden="true">#</a> 关于移动端适配</h3>
<ul>
<li>使用flexible.js或hotCss.js 改js可适配不同屏幕-使用动态的HTML根字体大小和动态的viewport scale</li>
<li>安装插件postcss-plugin-px2rem该插件可将px转为rem</li>
<li>安装插件lib-flexible该插件可将根据不同的设备宽为HTML设置不同的font-size</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install postcss<span class="token operator">-</span>pxtorem <span class="token operator">-</span><span class="token constant">D</span>
npm install lib<span class="token operator">-</span>flexible <span class="token operator">-</span><span class="token constant">S</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul>
<li>如果是vue-cli3为例首先在main.js中引入flexible.js或hotCss.js</li>
<li>在根目录中新建postcss.config.js按如下格式对postcss-pxtorem进行设置</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">autoprefixer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">overrideBrowserslist</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"Android >= 4.0"</span><span class="token punctuation">,</span> <span class="token string">"iOS >= 8"</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">"postcss-pxtorem"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">rootValue</span><span class="token operator">:</span> <span class="token number">37.5</span><span class="token punctuation">,</span>
      <span class="token literal-property property">propList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"*"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token string">""</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><ul>
<li>如果是vue-cli2为例首先在main.js中引入flexible.js或hotCss.js</li>
<li>在根目录中新建.postcssrc.js按如下格式对postcss-pxtorem进行设置</li>
<li>如果你的项目很老了可能需要安装指定版本的依赖</li>
<li>在package.json中安装以下依赖</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>    <span class="token property">"postcss-import"</span><span class="token operator">:</span> <span class="token string">"11.1.0"</span><span class="token punctuation">,</span>
    <span class="token property">"postcss-loader"</span><span class="token operator">:</span> <span class="token string">"2.1.6"</span><span class="token punctuation">,</span>
    <span class="token property">"postcss-pxtorem"</span><span class="token operator">:</span> <span class="token string">"^5.1.1"</span><span class="token punctuation">,</span>
    <span class="token property">"postcss-url"</span><span class="token operator">:</span> <span class="token string">"7.3.2"</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">"plugins"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"postcss-import"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">"postcss-url"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// to edit target browsers: use "browserslist" field in package.json</span>
    <span class="token string-property property">'autoprefixer'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">browsers</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'Android >= 4.0'</span><span class="token punctuation">,</span> <span class="token string">'iOS >= 8'</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">'postcss-pxtorem'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">rootValue</span><span class="token operator">:</span> <span class="token number">37.5</span><span class="token punctuation">,</span>
      <span class="token literal-property property">propList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'*'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">selectorBlackList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token string">"styles|element-ui|Front|manage|errorLog|errorPage|layout|login|components"</span> <span class="token comment">//不需要处理的文件目录</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div></template>
