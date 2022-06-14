import{_ as n,b as s}from"./app.78486257.js";const a={},p=s(`<h1 id="vue-proxy" tabindex="-1"><a class="header-anchor" href="#vue-proxy" aria-hidden="true">#</a> vue_proxy</h1><p>\u9996\u5148\u9700\u8981\u5728vue.config.js\u4E2D\u8FDB\u884C\u670D\u52A1\u5668\u4EE3\u7406\u914D\u7F6E\u6765\u89E3\u51B3\u63A5\u53E3\u8DE8\u57DF\u7684\u95EE\u9898</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">8086</span><span class="token punctuation">,</span>
		<span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>         <span class="token comment">//\u670D\u52A1\u5668\u4EE3\u7406\uFF0C\u89E3\u51B3\u524D\u540E\u7AEF\u63A5\u53E3\u8DE8\u57DF\u95EE\u9898</span>
		  <span class="token string-property property">&#39;/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>    <span class="token comment">//\u8FD9\u91CC\u5199\u9700\u8981\u4EE5\u4EC0\u4E48\u5F00\u5934\u7684\u5730\u5740\u624D\u4F1A\u53BB\u4EE3\u7406    </span>
					<span class="token comment">//1\u3001\u8FD9\u91CC\u5199\u4EE5\u4EC0\u4E48\u5F00\u5934\u7684\u5730\u5740\u624D\u4F1A\u53BB\u4EE3\u7406\uFF1B</span>
					<span class="token comment">//\u6CE8\u610F/abc\u662F\u524D\u7AEF\u81EA\u5DF1\u81EA\u5B9A\u4E49\u7684\u53C2\u6570\u540D\u79F0\u6216\u8005\u662F\u5B9E\u9645\u7684\u8BF7\u6C42\u5730\u5740\u7684\u53C2\u6570\u540D\u79F0</span>
					<span class="token comment">//2\u3001\u5728\u9879\u76EE\u4E2D&#39;\u53EA\u8981\u662F&#39;/abc&#39;\u5F00\u5934\u7684\u8BF7\u6C42\u5730\u5740\u624D\u7528\u4EE3\u7406.</span>
					<span class="token comment">//\u6240\u4EE5\u4F60\u7684\u63A5\u53E3\u5C31\u8981\u8FD9\u4E48\u5199 /abc/xx/xx. </span>
					<span class="token comment">//3\u3001\u5982\u679C\u8981\u4EE3\u7406\u6240\u6709\u7684\u8BF7\u6C42\u5730\u5740\u5C31\u5199\u4E3A&quot;/&quot;</span>
		    <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;http://172.16.188.16:81&#39;</span><span class="token punctuation">,</span>   <span class="token comment">//\u670D\u52A1\u5668\u5730\u5740</span>
		    <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>   <span class="token comment">//\u662F\u5426\u66F4\u6539\u4E3B\u673A\u7AD9\u70B9</span>
			<span class="token literal-property property">ws</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>    <span class="token comment">//\u662F\u5426\u4EE3\u7406websockets</span>
			<span class="token comment">// pathRewrite: {  //\u5982\u679C\u4E0A\u9762\u7684/abc\u4E0D\u662F\u5B9E\u9645\u7684\u8BF7\u6C42\u5730\u5740\u7684\u5F00\u5934\u53C2\u6570\u90A3\u4E48\u5728\u8FD9\u91CC\u5C31\u8981\u8FDB\u884C\u51B2\u6D17\u5199\u5B9E\u9645\u8BF7\u6C42\u65F6\u7684\u5730\u5740\u540D\u79F0</span>
			<span class="token comment">//   &#39;^/a&#39;: &#39;/mark&#39;</span>
			<span class="token comment">// }</span>
		  <span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	  <span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		    <span class="token literal-property property">loaderOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// \u5411 CSS \u76F8\u5173\u7684 loader \u4F20\u9012\u9009\u9879</span>
		      <span class="token literal-property property">less</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		        <span class="token literal-property property">javascriptEnabled</span><span class="token operator">:</span> <span class="token boolean">true</span>
		      <span class="token punctuation">}</span>
		    <span class="token punctuation">}</span>
		  <span class="token punctuation">}</span>



<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div>`,3);function t(e,r){return p}var l=n(a,[["render",t],["__file","vue_proxy.html.vue"]]);export{l as default};
