<template><h1 id="vue中按钮权限设置" tabindex="-1"><a class="header-anchor" href="#vue中按钮权限设置" aria-hidden="true">#</a> Vue中按钮权限设置</h1>
<h4 id="可通过自定义指令的方式进行按钮权限管理" tabindex="-1"><a class="header-anchor" href="#可通过自定义指令的方式进行按钮权限管理" aria-hidden="true">#</a> 可通过自定义指令的方式进行按钮权限管理</h4>
<p>可在main.js文件中引入以下代码片段</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
vue<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">'display-key'</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
      <span class="token function">inserted</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span>binding</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token keyword">let</span> displaykey <span class="token operator">=</span> binding<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
          <span class="token keyword">if</span><span class="token punctuation">(</span>displaykey<span class="token punctuation">)</span><span class="token punctuation">{</span>
              <span class="token keyword">let</span> hs <span class="token operator">=</span> <span class="token function">checkArray</span><span class="token punctuation">(</span>displaykey<span class="token punctuation">)</span>  <span class="token comment">//checkArray是一个返回数组中是否包含该参数的一函数</span>
              <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>hs<span class="token punctuation">)</span><span class="token punctuation">{</span>
                  el<span class="token punctuation">.</span>parentNode <span class="token operator">&amp;&amp;</span> el<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
              <span class="token comment">//抛出异常</span>
              thow <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'vue need a value'</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>当存在多个路由配置文件时可通过遍历所有文件的方式引入路由</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> routerlist <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token keyword">function</span> <span class="token function">importall</span><span class="token punctuation">(</span><span class="token parameter">r</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    r<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token operator">=></span><span class="token punctuation">{</span>
        routerlist<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">r</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">.</span>default<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">//获取route文件夹下的所有routes.js文件中导出的对象</span>
<span class="token function">importall</span><span class="token punctuation">(</span>require<span class="token punctuation">.</span><span class="token function">context</span><span class="token punctuation">(</span><span class="token string">'../route'</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.routes\.js</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
     <span class="token punctuation">{</span>
         <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">'/'</span><span class="token punctuation">,</span>
         <span class="token literal-property property">component</span><span class="token operator">:</span>home
     <span class="token punctuation">}</span><span class="token punctuation">,</span>
     <span class="token operator">...</span>routerlist

<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div></template>
