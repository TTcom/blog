<template><h1 id="深拷贝与浅拷贝" tabindex="-1"><a class="header-anchor" href="#深拷贝与浅拷贝" aria-hidden="true">#</a> 深拷贝与浅拷贝</h1>
<ul>
<li>深拷贝:  拷贝前的对象和拷贝后的对象不会互相影响,拷贝前后没有关系,拷贝多层</li>
<li>浅拷贝:  拷贝前的对象和拷贝后的对象会互相影响,拷贝前后有关系,只拷贝一层</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// let obj = {"name":"xiaoming","god":{"age":58}};</span>
	<span class="token comment">// </span>
	<span class="token comment">// let vbj = {...obj};</span>
	<span class="token comment">// </span>
	<span class="token comment">// obj.name = "english"</span>
	<span class="token comment">// obj.god.age = 99;</span>
	<span class="token comment">// //console.table(obj,vbj);</span>
	<span class="token comment">// </span>
	<span class="token comment">// let a = [3,1,2];</span>
	<span class="token comment">// </span>
	<span class="token comment">// let arr = [a];</span>
	<span class="token comment">// </span>
	<span class="token comment">// let newArr = arr.slice();</span>
	<span class="token comment">// </span>
	<span class="token comment">// newArr[0][0] = 5;</span>
	<span class="token comment">// console.log(arr[0][0]);</span>
	
	
	<span class="token comment">//JSON.stringify 深拷贝不完整 不能实现复杂的拷贝</span>
	<span class="token comment">// let obj = {"name":"xiaoming","god":{"age":58}};</span>
	
	<span class="token comment">// let vbj = JSON.parse(JSON.stringify(obj)) </span>
	
	<span class="token comment">// obj.name = "english"</span>
	<span class="token comment">// obj.god.age = 99;</span>
	<span class="token comment">// console.log(obj,vbj);</span>
	
	<span class="token comment">//实现一个深拷贝 实现一个递归拷贝</span>
	<span class="token keyword">function</span> <span class="token function">deepClone</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span>hash <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>    <span class="token comment">//WeakMap弱引用,key必须是个对象</span>

		<span class="token keyword">if</span><span class="token punctuation">(</span>obj <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>  <span class="token keyword">return</span> obj<span class="token punctuation">;</span> <span class="token comment">//  如果是null或者undefined我就不进行拷贝操作</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span class="token class-name">Date</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//如果是日期</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span class="token class-name">RegExp</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//如果是正则的话</span>
		<span class="token comment">//可能是对象 或者 普通的值 如果是函数的话 是不需要深拷贝的</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> obj <span class="token operator">!==</span> <span class="token string">'object'</span><span class="token punctuation">)</span> <span class="token keyword">return</span> obj<span class="token punctuation">;</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>hash<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> hash<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//是对象的话就要进行深拷贝</span>
		<span class="token comment">// [] {}</span>
		<span class="token keyword">let</span> cloneObj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">obj<span class="token punctuation">.</span>constructor</span><span class="token punctuation">;</span>   <span class="token comment">//构建一个数组或对象</span>
		hash<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span>cloneObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span><span class="token punctuation">{</span>
			 <span class="token keyword">if</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				 <span class="token comment">//实现一个递归拷贝</span>
				 cloneObj<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">deepClone</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span>hash<span class="token punctuation">)</span><span class="token punctuation">;</span>
			 <span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> cloneObj<span class="token punctuation">;</span>

	<span class="token punctuation">}</span>
	
	<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token number">12</span><span class="token punctuation">,</span><span class="token literal-property property">address</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span><span class="token number">200</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	obj<span class="token punctuation">.</span>o <span class="token operator">=</span> obj
	<span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token function">deepClone</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br></div></div></template>
