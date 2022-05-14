<template><h1 id="call-apply-bind" tabindex="-1"><a class="header-anchor" href="#call-apply-bind" aria-hidden="true">#</a> call_apply_bind</h1>
<h3 id="javascript中的this、call、apply、bind的区别" tabindex="-1"><a class="header-anchor" href="#javascript中的this、call、apply、bind的区别" aria-hidden="true">#</a> javascript中的this、call、apply、bind的区别</h3>
<p>简书原文链接<a href="https://www.jianshu.com/p/bc541afad6ee" target="_blank" rel="noopener noreferrer"><ExternalLinkIcon/></a></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//call apply bind</span>
	
	<span class="token comment">//call（接收的是参数）和 apply（接收的是数组） 的特点可以改变我们当前函数的this指向,还会让当前函数执行</span>
<span class="token comment">// 	function fn1(){</span>
<span class="token comment">// 		console.log(this)</span>
<span class="token comment">// 	}</span>
<span class="token comment">// 	function fn2(){</span>
<span class="token comment">// 		console.log(2);</span>
<span class="token comment">// 	}</span>
	
<span class="token comment">// //	fn1.call("hello",'123154')</span>
	
<span class="token comment">// 	fn1.call.call(fn2);</span>
	
	<span class="token comment">//bind </span>
	<span class="token comment">//1) bind方法可以绑定this指向</span>
	<span class="token comment">//2)bind方法返回一个绑定后的函数</span>
	<span class="token comment">//3)如果绑定的函数被new了 当前函数的this就是当前的实例</span>
	<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"jw"</span>
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
<span class="token comment">// obj1.fn();  //obj1调用的该函数所以指向obj1</span>
<span class="token comment">// var fn1 = obj1.fn      //此时fn1为function(){console.log(this)}    所以this指向window</span>
<span class="token comment">// fn1()//1</span>

<span class="token comment">// 	function Product(name, price) {</span>
<span class="token comment">// 		this.name = name;</span>
<span class="token comment">// 		this.price = price;</span>
<span class="token comment">// </span>
<span class="token comment">// 		if (price &lt; 0) {</span>
<span class="token comment">// 			throw RangeError(</span>
<span class="token comment">// 				'Cannot create product ' + this.name + ' with a negative price'</span>
<span class="token comment">// 			);</span>
<span class="token comment">// 		}</span>
<span class="token comment">// 	}</span>
<span class="token comment">// </span>
<span class="token comment">// 	function Food(name, price) {</span>
<span class="token comment">// 		Product.apply(this, [name, price]);</span>
<span class="token comment">// 		this.category = 'food';</span>
<span class="token comment">// 	}</span>

	<span class="token comment">//等同于</span>
	<span class="token comment">//new一个函数时，背地里会将创建一个连接到prototype成员的新对象，同时this会被绑定到那个新对象上</span>
<span class="token comment">// 	function Food(name, price) {</span>
	<span class="token comment">// 这里的this都指向实例</span>
<span class="token comment">// 		this.name = name;</span>
<span class="token comment">// 		this.price = price;</span>
<span class="token comment">// 		if (price &lt; 0) {</span>
<span class="token comment">// 			throw RangeError(</span>
<span class="token comment">// 				'Cannot create product ' + this.name + ' with a negative price'</span>
<span class="token comment">// 			);</span>
<span class="token comment">// 		}</span>
<span class="token comment">// </span>
<span class="token comment">// 		this.category = 'food';</span>
<span class="token comment">// 	}</span>


<span class="token comment">// var cretefood = new Food("胡萝卜", 1000);</span>
<span class="token comment">// </span>
<span class="token comment">// </span>
<span class="token comment">// </span>
<span class="token comment">// console.log('cretefood',cretefood);</span>
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


<span class="token comment">// 箭头函数体内的 this 对象, 就是定义时所在的对象, 而不是使用时所在的对象;所以不需要类似于var _this = this这种丑陋的写法</span>
<span class="token comment">// 箭头函数不可以当作构造函数，也就是说不可以使用 new 命令, 否则会抛出一个错误</span>
<span class="token comment">// 箭头函数不可以使用 arguments 对象,，该对象在函数体内不存在. 如果要用, 可以用 Rest 参数代替</span>





<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Dot'</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">printName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">//bind 方法不会立即执行，**而是返回一个改变了上下文 this 后的函数**。而原函数 printName 中的 this 并没有被改变，依旧指向全局对象 window。</span>
<span class="token keyword">var</span> dot <span class="token operator">=</span> <span class="token function">printName</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dot<span class="token punctuation">)</span> <span class="token comment">// function () { … }</span>
<span class="token function">dot</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// Dot</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br></div></div></template>
