import{_ as n,b as s}from"./app.78486257.js";const a={},p=s(`<h1 id="\u6DF1\u62F7\u8D1D\u4E0E\u6D45\u62F7\u8D1D" tabindex="-1"><a class="header-anchor" href="#\u6DF1\u62F7\u8D1D\u4E0E\u6D45\u62F7\u8D1D" aria-hidden="true">#</a> \u6DF1\u62F7\u8D1D\u4E0E\u6D45\u62F7\u8D1D</h1><ul><li>\u6DF1\u62F7\u8D1D: \u62F7\u8D1D\u524D\u7684\u5BF9\u8C61\u548C\u62F7\u8D1D\u540E\u7684\u5BF9\u8C61\u4E0D\u4F1A\u4E92\u76F8\u5F71\u54CD,\u62F7\u8D1D\u524D\u540E\u6CA1\u6709\u5173\u7CFB,\u62F7\u8D1D\u591A\u5C42</li><li>\u6D45\u62F7\u8D1D: \u62F7\u8D1D\u524D\u7684\u5BF9\u8C61\u548C\u62F7\u8D1D\u540E\u7684\u5BF9\u8C61\u4F1A\u4E92\u76F8\u5F71\u54CD,\u62F7\u8D1D\u524D\u540E\u6709\u5173\u7CFB,\u53EA\u62F7\u8D1D\u4E00\u5C42</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// let obj = {&quot;name&quot;:&quot;xiaoming&quot;,&quot;god&quot;:{&quot;age&quot;:58}};</span>
	<span class="token comment">// </span>
	<span class="token comment">// let vbj = {...obj};</span>
	<span class="token comment">// </span>
	<span class="token comment">// obj.name = &quot;english&quot;</span>
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
	
	
	<span class="token comment">//JSON.stringify \u6DF1\u62F7\u8D1D\u4E0D\u5B8C\u6574 \u4E0D\u80FD\u5B9E\u73B0\u590D\u6742\u7684\u62F7\u8D1D</span>
	<span class="token comment">// let obj = {&quot;name&quot;:&quot;xiaoming&quot;,&quot;god&quot;:{&quot;age&quot;:58}};</span>
	
	<span class="token comment">// let vbj = JSON.parse(JSON.stringify(obj)) </span>
	
	<span class="token comment">// obj.name = &quot;english&quot;</span>
	<span class="token comment">// obj.god.age = 99;</span>
	<span class="token comment">// console.log(obj,vbj);</span>
	
	<span class="token comment">//\u5B9E\u73B0\u4E00\u4E2A\u6DF1\u62F7\u8D1D \u5B9E\u73B0\u4E00\u4E2A\u9012\u5F52\u62F7\u8D1D</span>
	<span class="token keyword">function</span> <span class="token function">deepClone</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span>hash <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>    <span class="token comment">//WeakMap\u5F31\u5F15\u7528,key\u5FC5\u987B\u662F\u4E2A\u5BF9\u8C61</span>

		<span class="token keyword">if</span><span class="token punctuation">(</span>obj <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>  <span class="token keyword">return</span> obj<span class="token punctuation">;</span> <span class="token comment">//  \u5982\u679C\u662Fnull\u6216\u8005undefined\u6211\u5C31\u4E0D\u8FDB\u884C\u62F7\u8D1D\u64CD\u4F5C</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span class="token class-name">Date</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//\u5982\u679C\u662F\u65E5\u671F</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span class="token class-name">RegExp</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//\u5982\u679C\u662F\u6B63\u5219\u7684\u8BDD</span>
		<span class="token comment">//\u53EF\u80FD\u662F\u5BF9\u8C61 \u6216\u8005 \u666E\u901A\u7684\u503C \u5982\u679C\u662F\u51FD\u6570\u7684\u8BDD \u662F\u4E0D\u9700\u8981\u6DF1\u62F7\u8D1D\u7684</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> obj <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> obj<span class="token punctuation">;</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>hash<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> hash<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//\u662F\u5BF9\u8C61\u7684\u8BDD\u5C31\u8981\u8FDB\u884C\u6DF1\u62F7\u8D1D</span>
		<span class="token comment">// [] {}</span>
		<span class="token keyword">let</span> cloneObj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">obj<span class="token punctuation">.</span>constructor</span><span class="token punctuation">;</span>   <span class="token comment">//\u6784\u5EFA\u4E00\u4E2A\u6570\u7EC4\u6216\u5BF9\u8C61</span>
		hash<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span>cloneObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span><span class="token punctuation">{</span>
			 <span class="token keyword">if</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				 <span class="token comment">//\u5B9E\u73B0\u4E00\u4E2A\u9012\u5F52\u62F7\u8D1D</span>
				 cloneObj<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">deepClone</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span>hash<span class="token punctuation">)</span><span class="token punctuation">;</span>
			 <span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> cloneObj<span class="token punctuation">;</span>

	<span class="token punctuation">}</span>
	
	<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token number">12</span><span class="token punctuation">,</span><span class="token literal-property property">address</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span><span class="token number">200</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	obj<span class="token punctuation">.</span>o <span class="token operator">=</span> obj
	<span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token function">deepClone</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br></div></div>`,3);function t(e,o){return p}var l=n(a,[["render",t],["__file","deepclone.html.vue"]]);export{l as default};
