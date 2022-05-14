<template><h1 id="vueantic" tabindex="-1"><a class="header-anchor" href="#vueantic" aria-hidden="true">#</a> vueantic</h1>
<ul>
<li>jsx</li>
<li>https://www.cnblogs.com/ainyi/p/13324222.html</li>
<li>防抖节流函数</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token keyword">const</span> <span class="token function-variable function">debounced</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> deplay</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> timer
    <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//典型的闭包函数</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span> <span class="token comment">//传入的函数没有this，所以要使用call或apply</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> deplay<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>1、$on</p>
<p>用来监听组件的$emit事件，当触发某个指定的$emit事件时，触发该事件。例如：<br></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">'emitname'</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    dosomething
 <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>2、$emit</p>
<p>子组件向父组件进行通信</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token comment">//父组件</span>
 <span class="token operator">&lt;</span>son <span class="token operator">:</span>show<span class="token punctuation">.</span>sync<span class="token operator">=</span><span class="token string">"show"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>son<span class="token operator">></span>
 <span class="token comment">//子组件</span>
 <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">'update:show'</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>3、$props</p>
<p>组件向子组件传递自身所有的props。例如：<br></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>child v<span class="token operator">-</span>bind<span class="token operator">=</span><span class="token string">"$props"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>child<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>4、$listeners</p>
<!-- 子组件可以通过this.$listeners 获取它在父组件中绑定的事件，父组件可以通过v-on="$listeners" 把它自己在自己的父组件中绑定的事件进行传递 -->
<p>子组件向爷爷组件发送消息可通过在父组件中绑定v-on=&quot;$listeners&quot;进行传递</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>//爷爷组件

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>son</span> <span class="token attr-name">@check</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nowcheck<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>son</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> son <span class="token keyword">from</span> <span class="token string">"./views/son"</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    son
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">nowcheck</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"nowcheck"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

//son.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>son<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>soncheck<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>sonbtn<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>grandson</span> <span class="token attr-name">@sendmsg</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>grandsonmsg<span class="token punctuation">"</span></span> <span class="token attr-name">v-on</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$listeners<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>grandson</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> grandson <span class="token keyword">from</span> <span class="token string">"./grandson.vue"</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"son"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    grandson
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// console.log(this.$listeners) //获取父组件中绑定的事件</span>
    <span class="token comment">// this.$listeners.check()</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">soncheck</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// this.$emit("check")  //向爷爷组件传递信息</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">grandsonmsg</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"grandsonmsg"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

//grandson.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>grandson<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tosendmsg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>sonbtn<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"grandson"</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$listeners<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">tosendmsg</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">"check"</span><span class="token punctuation">)</span>  <span class="token comment">//向爷爷组件传递信息</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

可参考https://www.cnblogs.com/wjw1014/p/13739450.html
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br></div></div><p>5、$off或$destroy
移除自定义事件监听器，去除组件所有的$on事件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$off</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 或者
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>6、provider/inject</p>
<p>简单的来说就是在父组件中通过provider来提供变量，然后在子组件中通过inject来注入变量。<br></p>
<p>不论子组件有多深，只要调用了inject那么就可以注入provider中的数据。而不是局限于只能从当前父组件的prop属性来获取数据。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//父组件</span>
 <span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span>childOne<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>childOne<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>

<span class="token operator">&lt;</span>script<span class="token operator">></span>
  <span class="token keyword">import</span> childOne <span class="token keyword">from</span> <span class="token string">'../components/test/ChildOne'</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Parent"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">provide</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span><span class="token operator">:</span> <span class="token string">"demo"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span><span class="token punctuation">{</span>
      childOne
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">//子组件</span>
  <span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>div<span class="token operator">></span>
    <span class="token punctuation">{</span><span class="token punctuation">{</span>demo<span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span>childtwo<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>childtwo<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>

<span class="token operator">&lt;</span>script<span class="token operator">></span>
  <span class="token keyword">import</span> childtwo <span class="token keyword">from</span> <span class="token string">'./ChildTwo'</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"childOne"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'for'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">demo</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>for
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      childtwo
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>

<span class="token comment">//孙子组件</span>

<span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>div<span class="token operator">></span>
    <span class="token punctuation">{</span><span class="token punctuation">{</span>demo<span class="token punctuation">}</span><span class="token punctuation">}</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>

<span class="token operator">&lt;</span>script<span class="token operator">></span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'for'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">demo</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>for
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>

在<span class="token number">2</span>个子组件中我们使用jnject注入了provide提供的变量<span class="token keyword">for</span>，那么就都可以拿到<span class="token keyword">for</span>这个变量
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>7、$attrs
子组件不用写props部分的内容就可以直接获取在父组件中绑定的所有参数吗，并可以向自己的子组件绑定v-bind="$attrs" 可通过{{$attrs.xxx}}直接获取参数值
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>8、Vue任意组件间通信方式</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$bus<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">'eventName'</span><span class="token punctuation">,</span>value<span class="token punctuation">)</span> <span class="token comment">//触发事件</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$bus<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">'eventName'</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>  <span class="token comment">//接收事件</span>
<span class="token comment">//解绑当前组件所用到的事件</span>
 <span class="token function">beforeDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	 <span class="token keyword">this</span><span class="token punctuation">.</span>$bus<span class="token punctuation">.</span><span class="token function">$off</span><span class="token punctuation">(</span><span class="token string">'enentName'</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>vue-cli-service build 环境设置</p>
<div class="custom-container tip"><p class="custom-container-title"><span style="color:#999;font-weight: initial;"><a href="https://blog.csdn.net/linbenjian/article/details/85261201">猛戳详细原文介绍</a></span> 🎉 💯</p>
<p> </p>
</div>
<p>使用vue-cli3打包项目，通过配置不同的指令给项目设置不一样的配置。</p>
<p>npm run serve时会把process.env.NODE_ENV设置为‘development’；
根目录下以.env.development文件中的配置会生效
配置参数命名必须以VUE_APP_开头
npm run build 时会把process.env.NODE_ENV设置为‘production’；
根目录下以.env.production文件中的配置会生效
配置参数命名必须以VUE_APP_开头</p>
<p>除以上两种方式命名外还可以自定义命名但需要声明环境且在运行时需要指明是哪一个文件
例如：
.env.prod</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">NODE_ENV</span> <span class="token operator">=</span> <span class="token string">'production'</span>
<span class="token constant">VUE_APP_BASE_URL</span> <span class="token operator">=</span> <span class="token string">'http://www.linbenjian.work'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>然后在package.json文件中,example
需要在--mode后面指明文件名称，serve默认就是development
build默认是production</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>    <span class="token property">"serve"</span><span class="token operator">:</span> <span class="token string">"vue-cli-service serve --mode"</span><span class="token punctuation">,</span>
    <span class="token property">"dev-serve"</span><span class="token operator">:</span> <span class="token string">"vue-cli-service serve --mode dev"</span><span class="token punctuation">,</span>
    <span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"vue-cli-service build --mode"</span><span class="token punctuation">,</span>
    <span class="token property">"dev"</span><span class="token operator">:</span> <span class="token string">"vue-cli-service build --mode dev"</span><span class="token punctuation">,</span>
    <span class="token property">"uat1"</span><span class="token operator">:</span> <span class="token string">"vue-cli-service build --mode uat1"</span><span class="token punctuation">,</span>
    <span class="token property">"fat"</span><span class="token operator">:</span> <span class="token string">"vue-cli-service build --mode fat"</span><span class="token punctuation">,</span>
    <span class="token property">"stg"</span><span class="token operator">:</span> <span class="token string">"vue-cli-service build --mode stg"</span><span class="token punctuation">,</span>
    <span class="token property">"prd"</span><span class="token operator">:</span> <span class="token string">"vue-cli-service build --mode prd"</span><span class="token punctuation">,</span>
    <span class="token property">"lint"</span><span class="token operator">:</span> <span class="token string">"vue-cli-service lint"</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>在项目中使用，直接通过process.env.VUE_APP_去拿
process.env.VUE_APP_BASE_URL</p>
</template>
