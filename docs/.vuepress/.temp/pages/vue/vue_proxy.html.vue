<template><h1 id="vue-proxy" tabindex="-1"><a class="header-anchor" href="#vue-proxy" aria-hidden="true">#</a> vue_proxy</h1>
<p>首先需要在vue.config.js中进行服务器代理配置来解决接口跨域的问题</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">8086</span><span class="token punctuation">,</span>
		<span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>         <span class="token comment">//服务器代理，解决前后端接口跨域问题</span>
		  <span class="token string-property property">'/'</span><span class="token operator">:</span> <span class="token punctuation">{</span>    <span class="token comment">//这里写需要以什么开头的地址才会去代理    </span>
					<span class="token comment">//1、这里写以什么开头的地址才会去代理；</span>
					<span class="token comment">//注意/abc是前端自己自定义的参数名称或者是实际的请求地址的参数名称</span>
					<span class="token comment">//2、在项目中'只要是'/abc'开头的请求地址才用代理.</span>
					<span class="token comment">//所以你的接口就要这么写 /abc/xx/xx. </span>
					<span class="token comment">//3、如果要代理所有的请求地址就写为"/"</span>
		    <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">'http://172.16.188.16:81'</span><span class="token punctuation">,</span>   <span class="token comment">//服务器地址</span>
		    <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>   <span class="token comment">//是否更改主机站点</span>
			<span class="token literal-property property">ws</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>    <span class="token comment">//是否代理websockets</span>
			<span class="token comment">// pathRewrite: {  //如果上面的/abc不是实际的请求地址的开头参数那么在这里就要进行冲洗写实际请求时的地址名称</span>
			<span class="token comment">//   '^/a': '/mark'</span>
			<span class="token comment">// }</span>
		  <span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	  <span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		    <span class="token literal-property property">loaderOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 向 CSS 相关的 loader 传递选项</span>
		      <span class="token literal-property property">less</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		        <span class="token literal-property property">javascriptEnabled</span><span class="token operator">:</span> <span class="token boolean">true</span>
		      <span class="token punctuation">}</span>
		    <span class="token punctuation">}</span>
		  <span class="token punctuation">}</span>



<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div></template>
