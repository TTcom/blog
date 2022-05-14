<template><h1 id="原型链" tabindex="-1"><a class="header-anchor" href="#原型链" aria-hidden="true">#</a> 原型链</h1>
<p>prototype和__proto__的区别<a href="https://www.jianshu.com/p/80bcf8b2004e" target="_blank" rel="noopener noreferrer"><ExternalLinkIcon/></a></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token comment">// prototype //原型  每一个函数都有自己的原型prototype</span>
<span class="token comment">// __proto__ //原型链  每一个对象都有自己的原型链</span>
<span class="token comment">//创建函数,原型链</span>
	<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	foo<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>z<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span> 
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>__proto__<span class="token punctuation">)</span><span class="token punctuation">;</span> 
	<span class="token comment">//prototype表示该函数的原型 属性使您有能力向对象添加属性和方法。每个对象都有一个__proto__标签</span>
	<span class="token comment">//foo.prototype是一个对象——>有原型__proto__属性 而后__proto__的原型prototype </span>
	<span class="token comment">//即__proto__这个对象的prototype为null</span>
	
	<span class="token comment">// 对象具有属性proto，可称为隐式原型，一个对象的隐式原型指向构造该对象的构造函数的原型</span>
	<span class="token comment">//使用new来构造函数</span>
	<span class="token comment">// var obj = new foo();</span>
	<span class="token comment">// obj.y = 2;</span>
	<span class="token comment">// obj.x = 1;</span>
	<span class="token comment">// obj.z=3</span>
	<span class="token comment">//console.log(obj);</span>
	<span class="token comment">//obj这个对象 即new的一个创建的一个新对象会有__proto__的属性,__proto__就是obj的隐式原型->会向上查找</span>
	<span class="token comment">//指向他的构造者(constructor):foo();</span>
	<span class="token comment">//而后会在foo()上查找prototype是否包含z</span>

	<span class="token comment">//通过原型链上的继承,我们可以继承原型链上的属性</span>
	
    <span class="token comment">//创建对象</span>
	<span class="token keyword">var</span> obj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">//相当于在对象的原型上创建了参数x</span>
	<span class="token comment">//直接在obj的原型上创建属性x</span>
	<span class="token comment">//obj本身不会有该属性,只是在他的原型上有该属性</span>
	<span class="token comment">// typeof obj.toString //function</span>
	<span class="token comment">//所以obj.hasOwnProperty(x)为false</span>
	
	<span class="token comment">//console.log(obj.hasOwnProperty(x))</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
	
	<span class="token keyword">var</span> cobj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">//也可以修改对象的原型或删除对象的原型</span>
	
	<span class="token comment">// cobj.toString //undefined</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cobj<span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	
	<span class="token comment">//js里的__proto__和prototype到底有什么区别？</span>
	<span class="token comment">// 1.在JS里，万物皆对象。方法（Function）是对象，方法的原型(Function.prototype)是对象。</span>
	<span class="token comment">// 因此，它们都会具有对象共有的特点。即：&lt;strong>对象具有属性proto，可称为隐式原型，</span>
	<span class="token comment">// 一个对象的隐式原型指向构造该对象的构造函数的原型，这也保证了实例能够访问在构造函数原型中定义的属性和方法。</span>


</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div></template>
