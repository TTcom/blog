<template><h1 id="vue3新特性" tabindex="-1"><a class="header-anchor" href="#vue3新特性" aria-hidden="true">#</a> Vue3新特性</h1>
<h3 id="vue2与vue3的对比" tabindex="-1"><a class="header-anchor" href="#vue2与vue3的对比" aria-hidden="true">#</a> vue2与vue3的对比</h3>
<ul>
<li>1、vue3源码全部采用typescript开发，对typescript支持友好</li>
<li>2、Vue 3 源代码体积优化，使用函数api ,支持 tree-shaking</li>
<li>3、数据劫持优化，使用Proxy</li>
<li>3、编译优化，vue3实现了静态模板分析，重写diff算法</li>
<li>4、新增了一些内置组件</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title"><span style="color:#999;font-weight: initial;"><a href="https://github.com/TTcom/vue3_learn">vue3_learn demo链接</a></span> 🎉 💯</p>
<p> </p>
</div>
<p>数据劫持使用proxy对象（原使用defineProperty）;Proxy 对象用于定义基本操作的自定义行为（如属性查找，赋值，枚举，函数调用等）。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> a<span class="token operator">=</span><span class="token punctuation">{</span>
    <span class="token literal-property property">c</span><span class="token operator">:</span><span class="token number">1</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> proxya <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">proxy</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span><span class="token punctuation">{</span>
     <span class="token function-variable function">get</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

     <span class="token punctuation">}</span><span class="token punctuation">,</span>
     <span class="token function-variable function">set</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
         
     <span class="token punctuation">}</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>重新定义vdom对比思路
借鉴svelte框架--模板解析采用以指令切分的方式进行解析，切分为静态块和动态块，对比时只对动态块进行对比</p>
<p>函数式编程一切皆函数,更灵活方便组合逻辑，体积更小，在打包时使用tree-shaking它会过滤掉没有使用过的函数，更好压缩</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>vue2<span class="token punctuation">.</span><span class="token number">0</span>中如果要在所有的vue文件中使用一些共同的方法的时候的写法
vue<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function-variable function">mounted</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'mousemove'</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">=</span> e<span class="token punctuation">.</span>pageX<span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">=</span> e<span class="token punctuation">.</span>pageY<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


在vue3<span class="token punctuation">.</span><span class="token number">0</span>中的写法我们可以将vue中的方法引入
<span class="token keyword">import</span> <span class="token punctuation">{</span>onMounted<span class="token punctuation">,</span>watch<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">var</span> app <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>

        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>

        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">//util.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">usermovemsg</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> x <span class="token operator">=</span> ref<span class="token operator">&lt;</span>number<span class="token operator">></span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> y <span class="token operator">=</span> ref<span class="token operator">&lt;</span>number<span class="token operator">></span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">function</span> <span class="token function">getgrid</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">e</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    x<span class="token punctuation">.</span>value <span class="token operator">=</span> e<span class="token punctuation">.</span>x<span class="token punctuation">;</span>
    y<span class="token punctuation">.</span>value <span class="token operator">=</span> e<span class="token punctuation">.</span>y<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"mousemove"</span><span class="token punctuation">,</span> getgrid<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">//let obj =</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    x<span class="token punctuation">,</span>
    y
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><p>支持typescript写法</p>
</template>
