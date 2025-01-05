import{_ as n,o as a,c as l,a as p}from"./app.7c722b35.js";const f=JSON.parse('{"title":"call_apply_bind","description":"","frontmatter":{},"headers":[{"level":3,"title":"javascript中的this、call、apply、bind的区别","slug":"javascript中的this、call、apply、bind的区别","link":"#javascript中的this、call、apply、bind的区别","children":[]}],"relativePath":"javascript/call_apply_bind.md"}'),t={name:"javascript/call_apply_bind.md"};function o(e,s,c,i,y,r){return a(),l("div",null,s[0]||(s[0]=[p(`<h1 id="call-apply-bind" tabindex="-1">call_apply_bind <a class="header-anchor" href="#call-apply-bind" aria-hidden="true">#</a></h1><h3 id="javascript中的this、call、apply、bind的区别" tabindex="-1">javascript中的this、call、apply、bind的区别 <a class="header-anchor" href="#javascript中的this、call、apply、bind的区别" aria-hidden="true">#</a></h3><p>简书原文链接<a href="https://www.jianshu.com/p/bc541afad6ee" target="_blank" rel="noreferrer"></a></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">//call apply bind</span></span>
<span class="line"><span style="color:#BABED8;">	</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">//call（接收的是参数）和 apply（接收的是数组） 的特点可以改变我们当前函数的this指向,还会让当前函数执行</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 	function fn1(){</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 		console.log(this)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 	}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 	function fn2(){</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 		console.log(2);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 	}</span></span>
<span class="line"><span style="color:#BABED8;">	</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// //	fn1.call(&quot;hello&quot;,&#39;123154&#39;)</span></span>
<span class="line"><span style="color:#BABED8;">	</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 	fn1.call.call(fn2);</span></span>
<span class="line"><span style="color:#BABED8;">	</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">//bind </span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">//1) bind方法可以绑定this指向</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">//2)bind方法返回一个绑定后的函数</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">//3)如果绑定的函数被new了 当前函数的this就是当前的实例</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">jw</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">	</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">fn</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">name</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">	</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> bindFn </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> fn</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">bind</span><span style="color:#BABED8;">(obj)</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#82AAFF;">bindFn</span><span style="color:#BABED8;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">-----------------------------------------------------</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//var a = 1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// var obj1 = {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     a:2,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     fn:function(){</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//         console.log(this)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// obj1.fn();  //obj1调用的该函数所以指向obj1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// var fn1 = obj1.fn      //此时fn1为function(){console.log(this)}    所以this指向window</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// fn1()//1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 	function Product(name, price) {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 		this.name = name;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 		this.price = price;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 		if (price &lt; 0) {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 			throw RangeError(</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 				&#39;Cannot create product &#39; + this.name + &#39; with a negative price&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 			);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 		}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 	}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 	function Food(name, price) {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 		Product.apply(this, [name, price]);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 		this.category = &#39;food&#39;;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">//等同于</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">//new一个函数时，背地里会将创建一个连接到prototype成员的新对象，同时this会被绑定到那个新对象上</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 	function Food(name, price) {</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">// 这里的this都指向实例</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 		this.name = name;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 		this.price = price;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 		if (price &lt; 0) {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 			throw RangeError(</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 				&#39;Cannot create product &#39; + this.name + &#39; with a negative price&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 			);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 		}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 		this.category = &#39;food&#39;;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 	}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// var cretefood = new Food(&quot;胡萝卜&quot;, 1000);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(&#39;cretefood&#39;,cretefood);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// </span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// var a=10;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// function go(){</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 	</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 	console.log(a);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 	</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// go();</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// </span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 箭头函数体内的 this 对象, 就是定义时所在的对象, 而不是使用时所在的对象;所以不需要类似于var _this = this这种丑陋的写法</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 箭头函数不可以当作构造函数，也就是说不可以使用 new 命令, 否则会抛出一个错误</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 箭头函数不可以使用 arguments 对象,，该对象在函数体内不存在. 如果要用, 可以用 Rest 参数代替</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Dot</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">printName</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">name</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//bind 方法不会立即执行，**而是返回一个改变了上下文 this 后的函数**。而原函数 printName 中的 this 并没有被改变，依旧指向全局对象 window。</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> dot </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> printName</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">bind</span><span style="color:#BABED8;">(obj)</span></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(dot) </span><span style="color:#676E95;font-style:italic;">// function () { … }</span></span>
<span class="line"><span style="color:#82AAFF;">dot</span><span style="color:#BABED8;">()  </span><span style="color:#676E95;font-style:italic;">// Dot</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,4)]))}const D=n(t,[["render",o]]);export{f as __pageData,D as default};
