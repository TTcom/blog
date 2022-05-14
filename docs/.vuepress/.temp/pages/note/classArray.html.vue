<template><h1 id="类数组对象" tabindex="-1"><a class="header-anchor" href="#类数组对象" aria-hidden="true">#</a> 类数组对象</h1>
<p>条件</p>
<ul>
<li>属性要为数组索引（数字）</li>
<li>必须有length属性</li>
<li>最好添加&quot;push&quot;属性 Array.prototype.push</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>任何实现了 Iterator 接口的对象，都可以用扩展运算符转为真正的数组

<span class="token keyword">let</span> nodeList <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>nodeList<span class="token punctuation">]</span><span class="token punctuation">;</span>
上面代码中，querySelectorAll方法返回的是一个nodeList对象。它不是数组，而是一个类似数组的对象。这时，扩展运算符可以将其转为真正的数组，原因就在于NodeList对象实现了 Iterator 。

对于那些没有部署 Iterator 接口的类似数组的对象，扩展运算符就无法将其转为真正的数组。
<span class="token keyword">let</span> arrayLike <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string">'0'</span><span class="token operator">:</span> <span class="token string">'a'</span><span class="token punctuation">,</span>
  <span class="token string">'1'</span><span class="token operator">:</span> <span class="token string">'b'</span><span class="token punctuation">,</span>
  <span class="token string">'2'</span><span class="token operator">:</span> <span class="token string">'c'</span><span class="token punctuation">,</span>
  length<span class="token operator">:</span> <span class="token number">3</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// TypeError: Cannot spread non-iterable object.</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>arrayLike<span class="token punctuation">]</span><span class="token punctuation">;</span>
上面代码中，arrayLike是一个类似数组的对象，但是没有部署 Iterator 接口，扩展运算符就会报错。这时，可以改为使用Array<span class="token punctuation">.</span>from方法将arrayLike转为真正的数组。
————————————————
<span class="token literal-property property">原文链接：https</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>blog<span class="token punctuation">.</span>csdn<span class="token punctuation">.</span>net<span class="token operator">/</span>qq_24892029<span class="token operator">/</span>article<span class="token operator">/</span>details<span class="token operator">/</span><span class="token number">79215133</span>


</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div></template>
