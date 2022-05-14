<template><h1 id="vueplugin" tabindex="-1"><a class="header-anchor" href="#vueplugin" aria-hidden="true">#</a> vueplugin</h1>
<h2 id="vuex-persist数据持久化" tabindex="-1"><a class="header-anchor" href="#vuex-persist数据持久化" aria-hidden="true">#</a> vuex-persist数据持久化</h2>
<div class="custom-container tip"><p class="custom-container-title">vuex-persist</p>
<p><span>Vuex持久化存储之<a href="https://github.com/championswimmer/vuex-persist" target="view_window">vuex-persist</a></span> 🎉 💯</p>
</div>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token number">1</span>、持久化所有的状态
<span class="token keyword">import</span> VuexPersistence <span class="token keyword">from</span> <span class="token string">'vuex-persist'</span>
<span class="token keyword">const</span> vuexLocal <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VuexPersistence</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">storage</span><span class="token operator">:</span> window<span class="token punctuation">.</span>localStorage
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token operator">&lt;</span>State<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>vuexLocal<span class="token punctuation">.</span>plugin<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
or
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>vuexLocal<span class="token punctuation">.</span>plugin<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token number">2</span>、持久化部分状态
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token punctuation">{</span>
    state<span class="token punctuation">,</span>
    getters<span class="token punctuation">,</span>
    actions<span class="token punctuation">,</span>
    mutations<span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">VuexPersistence</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token function-variable function">reducer</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">query</span><span class="token operator">:</span> state<span class="token punctuation">.</span>query <span class="token comment">//这个就是存入localStorage的值</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token literal-property property">storage</span><span class="token operator">:</span> window<span class="token punctuation">.</span>sessionStorage
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>plugin
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token number">3</span>、vuex中action的作用可以记录用户每次的操作，可以配合开发工具进行时光穿梭，可以操作多个mutation<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h2 id="vue-skeleton-webpack-plugin骨架屏" tabindex="-1"><a class="header-anchor" href="#vue-skeleton-webpack-plugin骨架屏" aria-hidden="true">#</a> vue-skeleton-webpack-plugin骨架屏</h2>
<p>首先在vue.config.js中进行配置</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> skeleton <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'vue-skeleton-webpack-plugin'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 

<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">configureWebpack</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token keyword">new</span> <span class="token class-name">skeleton</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                 <span class="token literal-property property">webpackConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					 <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
						 <span class="token literal-property property">app</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'./src/entry.js'</span><span class="token punctuation">)</span>   <span class="token comment">//骨架屏渲染的内容</span>
					 <span class="token punctuation">}</span>
                 <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="vue的预渲染插件prerender-spa-plugin" tabindex="-1"><a class="header-anchor" href="#vue的预渲染插件prerender-spa-plugin" aria-hidden="true">#</a> vue的预渲染插件prerender-spa-plugin</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>vue的路由模式需要是hash模式
在vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js中进行配置
<span class="token keyword">const</span> PrerenderSPAPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'prerender-spa-plugin'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">configureWebpack</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>

			 <span class="token keyword">new</span> <span class="token class-name">PrerenderSPAPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
						<span class="token literal-property property">staticDir</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'dist'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
						<span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token string">'/about'</span><span class="token punctuation">,</span><span class="token punctuation">]</span><span class="token punctuation">,</span>  <span class="token comment">//需要预渲染的路由地址</span>
			     <span class="token punctuation">}</span><span class="token punctuation">)</span>
			
			
			
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>



</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div></template>
