import{_ as p,r as e,o as t,c,a as n,d as o,F as l,e as s,b as r}from"./app.78486257.js";const m={},i=n("h1",{id:"call-apply-bind",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#call-apply-bind","aria-hidden":"true"},"#"),s(" call_apply_bind")],-1),b=n("h3",{id:"javascript\u4E2D\u7684this\u3001call\u3001apply\u3001bind\u7684\u533A\u522B",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#javascript\u4E2D\u7684this\u3001call\u3001apply\u3001bind\u7684\u533A\u522B","aria-hidden":"true"},"#"),s(" javascript\u4E2D\u7684this\u3001call\u3001apply\u3001bind\u7684\u533A\u522B")],-1),u=s("\u7B80\u4E66\u539F\u6587\u94FE\u63A5"),k={href:"https://www.jianshu.com/p/bc541afad6ee",target:"_blank",rel:"noopener noreferrer"},d=r(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//call apply bind</span>
	
	<span class="token comment">//call\uFF08\u63A5\u6536\u7684\u662F\u53C2\u6570\uFF09\u548C apply\uFF08\u63A5\u6536\u7684\u662F\u6570\u7EC4\uFF09 \u7684\u7279\u70B9\u53EF\u4EE5\u6539\u53D8\u6211\u4EEC\u5F53\u524D\u51FD\u6570\u7684this\u6307\u5411,\u8FD8\u4F1A\u8BA9\u5F53\u524D\u51FD\u6570\u6267\u884C</span>
<span class="token comment">// 	function fn1(){</span>
<span class="token comment">// 		console.log(this)</span>
<span class="token comment">// 	}</span>
<span class="token comment">// 	function fn2(){</span>
<span class="token comment">// 		console.log(2);</span>
<span class="token comment">// 	}</span>
	
<span class="token comment">// //	fn1.call(&quot;hello&quot;,&#39;123154&#39;)</span>
	
<span class="token comment">// 	fn1.call.call(fn2);</span>
	
	<span class="token comment">//bind </span>
	<span class="token comment">//1) bind\u65B9\u6CD5\u53EF\u4EE5\u7ED1\u5B9Athis\u6307\u5411</span>
	<span class="token comment">//2)bind\u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u7ED1\u5B9A\u540E\u7684\u51FD\u6570</span>
	<span class="token comment">//3)\u5982\u679C\u7ED1\u5B9A\u7684\u51FD\u6570\u88ABnew\u4E86 \u5F53\u524D\u51FD\u6570\u7684this\u5C31\u662F\u5F53\u524D\u7684\u5B9E\u4F8B</span>
	<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;jw&quot;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">let</span> bindFn <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
	<span class="token function">bindFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>

<span class="token comment">//var a = 1</span>
<span class="token comment">// var obj1 = {</span>
<span class="token comment">//     a:2,</span>
<span class="token comment">//     fn:function(){</span>
<span class="token comment">//         console.log(this)</span>
<span class="token comment">//     }</span>
<span class="token comment">// }</span>
<span class="token comment">// </span>
<span class="token comment">// obj1.fn();  //obj1\u8C03\u7528\u7684\u8BE5\u51FD\u6570\u6240\u4EE5\u6307\u5411obj1</span>
<span class="token comment">// var fn1 = obj1.fn      //\u6B64\u65F6fn1\u4E3Afunction(){console.log(this)}    \u6240\u4EE5this\u6307\u5411window</span>
<span class="token comment">// fn1()//1</span>

<span class="token comment">// 	function Product(name, price) {</span>
<span class="token comment">// 		this.name = name;</span>
<span class="token comment">// 		this.price = price;</span>
<span class="token comment">// </span>
<span class="token comment">// 		if (price &lt; 0) {</span>
<span class="token comment">// 			throw RangeError(</span>
<span class="token comment">// 				&#39;Cannot create product &#39; + this.name + &#39; with a negative price&#39;</span>
<span class="token comment">// 			);</span>
<span class="token comment">// 		}</span>
<span class="token comment">// 	}</span>
<span class="token comment">// </span>
<span class="token comment">// 	function Food(name, price) {</span>
<span class="token comment">// 		Product.apply(this, [name, price]);</span>
<span class="token comment">// 		this.category = &#39;food&#39;;</span>
<span class="token comment">// 	}</span>

	<span class="token comment">//\u7B49\u540C\u4E8E</span>
	<span class="token comment">//new\u4E00\u4E2A\u51FD\u6570\u65F6\uFF0C\u80CC\u5730\u91CC\u4F1A\u5C06\u521B\u5EFA\u4E00\u4E2A\u8FDE\u63A5\u5230prototype\u6210\u5458\u7684\u65B0\u5BF9\u8C61\uFF0C\u540C\u65F6this\u4F1A\u88AB\u7ED1\u5B9A\u5230\u90A3\u4E2A\u65B0\u5BF9\u8C61\u4E0A</span>
<span class="token comment">// 	function Food(name, price) {</span>
	<span class="token comment">// \u8FD9\u91CC\u7684this\u90FD\u6307\u5411\u5B9E\u4F8B</span>
<span class="token comment">// 		this.name = name;</span>
<span class="token comment">// 		this.price = price;</span>
<span class="token comment">// 		if (price &lt; 0) {</span>
<span class="token comment">// 			throw RangeError(</span>
<span class="token comment">// 				&#39;Cannot create product &#39; + this.name + &#39; with a negative price&#39;</span>
<span class="token comment">// 			);</span>
<span class="token comment">// 		}</span>
<span class="token comment">// </span>
<span class="token comment">// 		this.category = &#39;food&#39;;</span>
<span class="token comment">// 	}</span>


<span class="token comment">// var cretefood = new Food(&quot;\u80E1\u841D\u535C&quot;, 1000);</span>
<span class="token comment">// </span>
<span class="token comment">// </span>
<span class="token comment">// </span>
<span class="token comment">// console.log(&#39;cretefood&#39;,cretefood);</span>
<span class="token comment">// </span>


<span class="token comment">// var a=10;</span>
<span class="token comment">// </span>
<span class="token comment">// </span>
<span class="token comment">// function go(){</span>
<span class="token comment">// 	</span>
<span class="token comment">// 	console.log(a);</span>
<span class="token comment">// 	</span>
<span class="token comment">// }</span>
<span class="token comment">// </span>
<span class="token comment">// go();</span>
<span class="token comment">// </span>


<span class="token comment">// \u7BAD\u5934\u51FD\u6570\u4F53\u5185\u7684 this \u5BF9\u8C61, \u5C31\u662F\u5B9A\u4E49\u65F6\u6240\u5728\u7684\u5BF9\u8C61, \u800C\u4E0D\u662F\u4F7F\u7528\u65F6\u6240\u5728\u7684\u5BF9\u8C61;\u6240\u4EE5\u4E0D\u9700\u8981\u7C7B\u4F3C\u4E8Evar _this = this\u8FD9\u79CD\u4E11\u964B\u7684\u5199\u6CD5</span>
<span class="token comment">// \u7BAD\u5934\u51FD\u6570\u4E0D\u53EF\u4EE5\u5F53\u4F5C\u6784\u9020\u51FD\u6570\uFF0C\u4E5F\u5C31\u662F\u8BF4\u4E0D\u53EF\u4EE5\u4F7F\u7528 new \u547D\u4EE4, \u5426\u5219\u4F1A\u629B\u51FA\u4E00\u4E2A\u9519\u8BEF</span>
<span class="token comment">// \u7BAD\u5934\u51FD\u6570\u4E0D\u53EF\u4EE5\u4F7F\u7528 arguments \u5BF9\u8C61,\uFF0C\u8BE5\u5BF9\u8C61\u5728\u51FD\u6570\u4F53\u5185\u4E0D\u5B58\u5728. \u5982\u679C\u8981\u7528, \u53EF\u4EE5\u7528 Rest \u53C2\u6570\u4EE3\u66FF</span>





<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Dot&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">printName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">//bind \u65B9\u6CD5\u4E0D\u4F1A\u7ACB\u5373\u6267\u884C\uFF0C**\u800C\u662F\u8FD4\u56DE\u4E00\u4E2A\u6539\u53D8\u4E86\u4E0A\u4E0B\u6587 this \u540E\u7684\u51FD\u6570**\u3002\u800C\u539F\u51FD\u6570 printName \u4E2D\u7684 this \u5E76\u6CA1\u6709\u88AB\u6539\u53D8\uFF0C\u4F9D\u65E7\u6307\u5411\u5168\u5C40\u5BF9\u8C61 window\u3002</span>
<span class="token keyword">var</span> dot <span class="token operator">=</span> <span class="token function">printName</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dot<span class="token punctuation">)</span> <span class="token comment">// function () { \u2026 }</span>
<span class="token function">dot</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// Dot</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br></div></div>`,1);function h(f,_){const a=e("ExternalLinkIcon");return t(),c(l,null,[i,b,n("p",null,[u,n("a",k,[o(a)])]),d],64)}var y=p(m,[["render",h],["__file","call_apply_bind.html.vue"]]);export{y as default};
