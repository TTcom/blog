<template><h1 id="vue打包文件浏览器存在缓存问题" tabindex="-1"><a class="header-anchor" href="#vue打包文件浏览器存在缓存问题" aria-hidden="true">#</a> Vue打包文件浏览器存在缓存问题</h1>
<ul>
<li>https://www.jianshu.com/p/302b0bd9abb2</li>
<li>https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzUxNjQ1NjMwNw==&amp;action=getalbum&amp;album_id=1619085427984957440&amp;scene=173&amp;from_msgid=2247484034&amp;from_itemidx=1&amp;count=3&amp;nolastread=1#wechat_redirect</li>
<li>https://www.bilibili.com/video/BV1Tf4y1L7YH?from=search&amp;seid=4625895786093377797&amp;spm_id_from=333.337.0.0</li>
</ul>
<h3 id="vue-cli" tabindex="-1"><a class="header-anchor" href="#vue-cli" aria-hidden="true">#</a> vue-cli</h3>
<ul>
<li>优化 https://blog.csdn.net/qq_21567385/article/details/107634781?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1.no_search_link&amp;depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1.no_search_link</li>
<li>Vue-Cli 2和3是不能并存的，至少不能同时安装，只能保留一个，在保留3的前提下还想用vue init怎么办？</li>
<li>卸载你的Vue-Cli 2：npm uninstall vue-cli -g或yarn global remove vue-cli</li>
<li>安装Vue-Cli 3：npm install -g @vue/cli或yarn global add @vue/cli</li>
<li>安装一个包：npm install -g @vue/cli-init或yarn global add @vue/cli-init</li>
</ul>
<h3 id="vue打包文件浏览器存在缓存问题-1" tabindex="-1"><a class="header-anchor" href="#vue打包文件浏览器存在缓存问题-1" aria-hidden="true">#</a> Vue打包文件浏览器存在缓存问题</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//修改配置文件</span>

<span class="token keyword">const</span> Timestamp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//当前时间为了防止打包缓存不刷新，所以给每个js文件都加一个时间戳</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// 输出重构打包后的css文件</span>
    <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">extract</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">//打包后的css带版本号，不改变文件名</span>
        <span class="token comment">// filename: 'css/[name].css?v=' + Timestamp,</span>
        <span class="token comment">// chunkFilename : 'css/[name].css?v=' + Timestamp</span>
        <span class="token comment">//打包后的css带版本号,文件名会改变</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'css/[name].['</span> <span class="token operator">+</span> Timestamp <span class="token operator">+</span> <span class="token string">'].css'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">chunkFilename</span><span class="token operator">:</span> <span class="token string">'css/[name].['</span> <span class="token operator">+</span> Timestamp <span class="token operator">+</span> <span class="token string">'].css'</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>    
    <span class="token literal-property property">configureWebpack</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 输出重构  打包编译后的 文件名称  【模块名称.时间戳】</span>
            <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">[name].</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_CURRENTMODE</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>Timestamp<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.js</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">chunkFilename</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">[name].</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_CURRENTMODE</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>Timestamp<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.js</span><span class="token template-punctuation string">`</span></span>
        <span class="token punctuation">}</span>
     <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">//process.env.VUE_APP_CURRENTMODE获取.env文件中的配置</span>
<span class="token punctuation">.</span>env文件配置
<span class="token constant">NODE_ENV</span><span class="token operator">=</span>production
<span class="token constant">VUE_APP_CURRENTMODE</span><span class="token operator">=</span><span class="token string">"prd"</span>
<span class="token comment">//package.json文件配置</span>
<span class="token string-property property">"prd"</span><span class="token operator">:</span> <span class="token string">"vue-cli-service build --mode prd"</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>1、当对一个表格的数据进行删除的时候，当获取到新的数据时，
此时加一个判断，当请求结束时，如果当前的页数大于总页数，那么将当前页等于总页数并重新请求数据（主要看后端怎么处理如果后端返回的是最后一页的数据并且有数据那么就不用重新请求数据），如果当前页小于等于总页数，那么当前页不做改变。</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></template>
