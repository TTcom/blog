<template><h1 id="页面动态更换主题" tabindex="-1"><a class="header-anchor" href="#页面动态更换主题" aria-hidden="true">#</a> 页面动态更换主题</h1>
<ul>
<li>https://juejin.cn/post/7024025899813044232</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
        <span class="token selector">:root</span> <span class="token punctuation">{</span>
        <span class="token property">--main-bg-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>  
        <span class="token property">--el-color-primary</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>  
        <span class="token punctuation">}</span>
 
        <span class="token selector">#div1</span> <span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--main-bg-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>  
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>div1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        paddingdiv1
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">turncolor</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>change<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  
 <span class="token keyword">function</span> <span class="token function">turncolor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token comment">/* element官网指南 */</span> 

<span class="token comment">// document.documentElement is global</span>
<span class="token keyword">const</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement

<span class="token comment">// const el = document.getElementById('xxx')</span>

<span class="token comment">// get css var</span>

<span class="token comment">// console.log(getComputedStyle(el))</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getComputedStyle</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getPropertyValue</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">--main-bg-color</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//获取样式</span>
<span class="token comment">// set css var</span>
<span class="token comment">// el.style['--el-color-primary'] = 'red'</span>

<span class="token comment">// // set css var 如果 style 中没有这个变量需要这样设置</span>
el<span class="token punctuation">.</span>style<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">'--main-bg-color'</span><span class="token punctuation">,</span> <span class="token string">'red'</span><span class="token punctuation">)</span>  <span class="token comment">//设置样式</span>

 <span class="token punctuation">}</span>


</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br></div></div><h3 id="简述rem和em的区别" tabindex="-1"><a class="header-anchor" href="#简述rem和em的区别" aria-hidden="true">#</a> 简述rem和em的区别</h3>
<div class="custom-container tip"><p class="custom-container-title">rem</p>
<p>rem:rem中的r意思是root（根源），就是相对于html的font-size的大小，元素的大小乘以根（html的font-size的大小）。</p>
</div>
<div class="custom-container tip"><p class="custom-container-title">em</p>
<p>rem:em子元素字体大小的em是相对于父元素字体大小(子元素的fontSize=数值乘以父元素的大小),元素的width/height/padding/margin用em的话是相对于该元素的font-size（大小等于数值乘以本身的font-size的大小）。</p>
</div>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
			<span class="token selector">#father</span><span class="token punctuation">{</span>
				<span class="token property">font-size</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
				<span class="token property">width</span><span class="token punctuation">:</span> 10em<span class="token punctuation">;</span>
				<span class="token property">border</span><span class="token punctuation">:</span> 1px solid #00BFFF<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			 <span class="token selector">#father #son</span><span class="token punctuation">{</span>
				<span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
				<span class="token property">width</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>
				<span class="token property">border</span><span class="token punctuation">:</span> 1px solid #00BFFF<span class="token punctuation">;</span>
			<span class="token punctuation">}</span> 
		</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
		
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>father<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
			 father
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>son<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                   son     				
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
		
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>


</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div></template>
