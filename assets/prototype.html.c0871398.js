import{_ as p,r as t,o,c as e,a as n,d as c,F as l,e as s,b as r}from"./app.78486257.js";const u={},i=n("h1",{id:"\u539F\u578B\u94FE",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u539F\u578B\u94FE","aria-hidden":"true"},"#"),s(" \u539F\u578B\u94FE")],-1),b=s("prototype\u548C__proto__\u7684\u533A\u522B"),m={href:"https://www.jianshu.com/p/80bcf8b2004e",target:"_blank",rel:"noopener noreferrer"},k=r(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
<span class="token comment">// prototype //\u539F\u578B  \u6BCF\u4E00\u4E2A\u51FD\u6570\u90FD\u6709\u81EA\u5DF1\u7684\u539F\u578Bprototype</span>
<span class="token comment">// __proto__ //\u539F\u578B\u94FE  \u6BCF\u4E00\u4E2A\u5BF9\u8C61\u90FD\u6709\u81EA\u5DF1\u7684\u539F\u578B\u94FE</span>
<span class="token comment">//\u521B\u5EFA\u51FD\u6570,\u539F\u578B\u94FE</span>
	<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	foo<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>z<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span> 
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>__proto__<span class="token punctuation">)</span><span class="token punctuation">;</span> 
	<span class="token comment">//prototype\u8868\u793A\u8BE5\u51FD\u6570\u7684\u539F\u578B \u5C5E\u6027\u4F7F\u60A8\u6709\u80FD\u529B\u5411\u5BF9\u8C61\u6DFB\u52A0\u5C5E\u6027\u548C\u65B9\u6CD5\u3002\u6BCF\u4E2A\u5BF9\u8C61\u90FD\u6709\u4E00\u4E2A__proto__\u6807\u7B7E</span>
	<span class="token comment">//foo.prototype\u662F\u4E00\u4E2A\u5BF9\u8C61\u2014\u2014&gt;\u6709\u539F\u578B__proto__\u5C5E\u6027 \u800C\u540E__proto__\u7684\u539F\u578Bprototype </span>
	<span class="token comment">//\u5373__proto__\u8FD9\u4E2A\u5BF9\u8C61\u7684prototype\u4E3Anull</span>
	
	<span class="token comment">// \u5BF9\u8C61\u5177\u6709\u5C5E\u6027proto\uFF0C\u53EF\u79F0\u4E3A\u9690\u5F0F\u539F\u578B\uFF0C\u4E00\u4E2A\u5BF9\u8C61\u7684\u9690\u5F0F\u539F\u578B\u6307\u5411\u6784\u9020\u8BE5\u5BF9\u8C61\u7684\u6784\u9020\u51FD\u6570\u7684\u539F\u578B</span>
	<span class="token comment">//\u4F7F\u7528new\u6765\u6784\u9020\u51FD\u6570</span>
	<span class="token comment">// var obj = new foo();</span>
	<span class="token comment">// obj.y = 2;</span>
	<span class="token comment">// obj.x = 1;</span>
	<span class="token comment">// obj.z=3</span>
	<span class="token comment">//console.log(obj);</span>
	<span class="token comment">//obj\u8FD9\u4E2A\u5BF9\u8C61 \u5373new\u7684\u4E00\u4E2A\u521B\u5EFA\u7684\u4E00\u4E2A\u65B0\u5BF9\u8C61\u4F1A\u6709__proto__\u7684\u5C5E\u6027,__proto__\u5C31\u662Fobj\u7684\u9690\u5F0F\u539F\u578B-&gt;\u4F1A\u5411\u4E0A\u67E5\u627E</span>
	<span class="token comment">//\u6307\u5411\u4ED6\u7684\u6784\u9020\u8005(constructor):foo();</span>
	<span class="token comment">//\u800C\u540E\u4F1A\u5728foo()\u4E0A\u67E5\u627Eprototype\u662F\u5426\u5305\u542Bz</span>

	<span class="token comment">//\u901A\u8FC7\u539F\u578B\u94FE\u4E0A\u7684\u7EE7\u627F,\u6211\u4EEC\u53EF\u4EE5\u7EE7\u627F\u539F\u578B\u94FE\u4E0A\u7684\u5C5E\u6027</span>
	
    <span class="token comment">//\u521B\u5EFA\u5BF9\u8C61</span>
	<span class="token keyword">var</span> obj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">//\u76F8\u5F53\u4E8E\u5728\u5BF9\u8C61\u7684\u539F\u578B\u4E0A\u521B\u5EFA\u4E86\u53C2\u6570x</span>
	<span class="token comment">//\u76F4\u63A5\u5728obj\u7684\u539F\u578B\u4E0A\u521B\u5EFA\u5C5E\u6027x</span>
	<span class="token comment">//obj\u672C\u8EAB\u4E0D\u4F1A\u6709\u8BE5\u5C5E\u6027,\u53EA\u662F\u5728\u4ED6\u7684\u539F\u578B\u4E0A\u6709\u8BE5\u5C5E\u6027</span>
	<span class="token comment">// typeof obj.toString //function</span>
	<span class="token comment">//\u6240\u4EE5obj.hasOwnProperty(x)\u4E3Afalse</span>
	
	<span class="token comment">//console.log(obj.hasOwnProperty(x))</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
	
	<span class="token keyword">var</span> cobj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">//\u4E5F\u53EF\u4EE5\u4FEE\u6539\u5BF9\u8C61\u7684\u539F\u578B\u6216\u5220\u9664\u5BF9\u8C61\u7684\u539F\u578B</span>
	
	<span class="token comment">// cobj.toString //undefined</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cobj<span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	
	<span class="token comment">//js\u91CC\u7684__proto__\u548Cprototype\u5230\u5E95\u6709\u4EC0\u4E48\u533A\u522B\uFF1F</span>
	<span class="token comment">// 1.\u5728JS\u91CC\uFF0C\u4E07\u7269\u7686\u5BF9\u8C61\u3002\u65B9\u6CD5\uFF08Function\uFF09\u662F\u5BF9\u8C61\uFF0C\u65B9\u6CD5\u7684\u539F\u578B(Function.prototype)\u662F\u5BF9\u8C61\u3002</span>
	<span class="token comment">// \u56E0\u6B64\uFF0C\u5B83\u4EEC\u90FD\u4F1A\u5177\u6709\u5BF9\u8C61\u5171\u6709\u7684\u7279\u70B9\u3002\u5373\uFF1A&lt;strong&gt;\u5BF9\u8C61\u5177\u6709\u5C5E\u6027proto\uFF0C\u53EF\u79F0\u4E3A\u9690\u5F0F\u539F\u578B\uFF0C</span>
	<span class="token comment">// \u4E00\u4E2A\u5BF9\u8C61\u7684\u9690\u5F0F\u539F\u578B\u6307\u5411\u6784\u9020\u8BE5\u5BF9\u8C61\u7684\u6784\u9020\u51FD\u6570\u7684\u539F\u578B\uFF0C\u8FD9\u4E5F\u4FDD\u8BC1\u4E86\u5B9E\u4F8B\u80FD\u591F\u8BBF\u95EE\u5728\u6784\u9020\u51FD\u6570\u539F\u578B\u4E2D\u5B9A\u4E49\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u3002</span>


</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div>`,1);function _(f,d){const a=t("ExternalLinkIcon");return o(),e(l,null,[i,n("p",null,[b,n("a",m,[c(a)])]),k],64)}var j=p(u,[["render",_],["__file","prototype.html.vue"]]);export{j as default};
