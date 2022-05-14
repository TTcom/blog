<template><h1 id="vue-principle" tabindex="-1"><a class="header-anchor" href="#vue-principle" aria-hidden="true">#</a> vue_principle</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token number">1</span>、数据劫持方式一使用Object<span class="token punctuation">.</span>defineProperty

<span class="token keyword">function</span> <span class="token function">defineData</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> prop<span class="token punctuation">,</span>value</span><span class="token punctuation">)</span><span class="token punctuation">{</span>     <span class="token comment">//obj 要定义属性的对象。prop 要定义或修改的属性的名称或 Symbol 。   value 要定义或修改的属性描述符。   </span>
    Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> prop<span class="token punctuation">,</span><span class="token punctuation">{</span>
        <span class="token literal-property property">configurable</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">enumerable</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"prop:"</span><span class="token punctuation">,</span>prop<span class="token punctuation">,</span><span class="token string">'value:'</span><span class="token punctuation">,</span>value<span class="token punctuation">)</span>
            <span class="token keyword">return</span> value
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">set</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'newVal'</span><span class="token punctuation">,</span>newVal<span class="token punctuation">)</span>
             value <span class="token operator">=</span> newVal
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">observe</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token operator">=></span><span class="token punctuation">{</span>
            <span class="token function">defineData</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span>key<span class="token punctuation">,</span>data<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">'asd'</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span>

<span class="token function">observe</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>

<span class="token comment">//arr[1]</span>

arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"dsa"</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'arr'</span><span class="token punctuation">,</span>arr<span class="token punctuation">)</span>


<span class="token number">2</span>、使用Proxy

<span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"小名"</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span><span class="token punctuation">{</span>
    <span class="token function-variable function">get</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span>propKey</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>propKey <span class="token keyword">in</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"propKey:"</span><span class="token punctuation">,</span>propKey<span class="token punctuation">,</span><span class="token string">"target:"</span><span class="token punctuation">,</span>target<span class="token punctuation">)</span>
         <span class="token keyword">return</span> target<span class="token punctuation">[</span>propKey<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">ReferenceError</span><span class="token punctuation">(</span><span class="token string">"Prop name \""</span> <span class="token operator">+</span> propKey <span class="token operator">+</span> <span class="token string">"\" does not exist."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'proxy'</span><span class="token punctuation">,</span>proxy<span class="token punctuation">.</span>name<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div></template>
