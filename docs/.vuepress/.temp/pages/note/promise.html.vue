<template><h3 id="vue预览pdf文件" tabindex="-1"><a class="header-anchor" href="#vue预览pdf文件" aria-hidden="true">#</a> vue预览pdf文件</h3>
<p>vue-cli2中预览pdf文件爬坑，首先可以使用vue-pdf来进行预览使用方式的话也很简单都可以搜到，
问题是使用的时候印章和签名无法显示出来，很多文章说要去注释该依赖中的某一行代码，可是上线时依赖是会重新下载的，该方案不妥；
重点是最终方案，亲测可行的方案，去github上面下载并使用pdf.js。地址：https://github.com/mozilla/pdf.js/releases/tag/v2.5.207</p>
<ul>
<li>要使用指定版本的文件，按照上面链接去下载就行，注意如果项目系统兼容性不好的话，需要下载es5版本的</li>
<li>下载完成后解压放到静态文件目录中我是放到static文件中的
使用方式
vue文件：
file后面跟的是你的pdf文件地址</li>
</ul>
<div class="pdf">
      <iframe
        :src="`/static/pdfjs/web/viewer.html?file=${encodeURIComponent(pdfUrl)}`"
        frameborder="0"
        class="pdf-window"
    >
</iframe>
</div>
要注释的地方：
找到build目录下的pdf.worker.js文件;注释这段内容即可
// if (data.fieldType === "Sig") {
//   data.fieldValue = null;
<p>//   _this3.setFlags(_util.AnnotationFlag.HIDDEN);
// }
以上做完后发版上线即可看到你想要看到的所有内容了</p>
<h3 id="aboutpromise" tabindex="-1"><a class="header-anchor" href="#aboutpromise" aria-hidden="true">#</a> aboutpromise</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Promise</span><span class="token punctuation">(</span><span class="token parameter">excutor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token string">'pendding'</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>callbacks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">resolve</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token string">'pendding'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token string">'fulfilled'</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value
            <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>callbacks<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token operator">=></span><span class="token punctuation">{</span>
                    callback<span class="token punctuation">.</span><span class="token function">onFulfilled</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">reject</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token string">'pendding'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token string">'rejeced'</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value
            <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>callbacks<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token operator">=></span><span class="token punctuation">{</span>
                    callback<span class="token punctuation">.</span><span class="token function">onRejected</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">then</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">onFulfilled<span class="token punctuation">,</span> onRejected</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> onFulfilled <span class="token operator">!=</span> <span class="token string">'function'</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function-variable function">onFulfilled</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span>value
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> onRejected <span class="token operator">!=</span> <span class="token string">'function'</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function-variable function">onRejected</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span>value
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token string">'pendding'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>callbacks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                    <span class="token function-variable function">onFulfilled</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
                        <span class="token keyword">try</span> <span class="token punctuation">{</span>
                           <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">onFulfilled</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
                           <span class="token function">resolve</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
                        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                            <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token function-variable function">onRejected</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
                        <span class="token keyword">try</span> <span class="token punctuation">{</span>
                            <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">onRejected</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
                            <span class="token function">resolve</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
                        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                           console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'error'</span><span class="token punctuation">)</span>
                           <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                   <span class="token punctuation">}</span><span class="token punctuation">)</span>
           <span class="token punctuation">}</span>
           <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token string">'fulfilled'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
               <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
                   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'aaaaaaaaaaaaa'</span><span class="token punctuation">)</span>
                   <span class="token keyword">try</span><span class="token punctuation">{</span>
                    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">onFulfilled</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span>
                    <span class="token keyword">if</span><span class="token punctuation">(</span>result <span class="token keyword">instanceof</span> <span class="token class-name">Promise</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                        result<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=></span><span class="token punctuation">{</span>
                            <span class="token function">resolve</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>   
                        <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token parameter">reason</span><span class="token operator">=></span><span class="token punctuation">{</span>
                            <span class="token function">reject</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span>
                        <span class="token punctuation">}</span><span class="token punctuation">)</span>
                    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                        <span class="token function">resolve</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
                    <span class="token punctuation">}</span>
                    
                   <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
                   <span class="token punctuation">}</span>
               <span class="token punctuation">}</span><span class="token punctuation">)</span>
               <span class="token comment">// return this</span>
           <span class="token punctuation">}</span>
           <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token string">'rejeced'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
               <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
                   <span class="token keyword">try</span><span class="token punctuation">{</span>
                    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">onRejected</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span>
                    <span class="token function">resolve</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
                   <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span>
                       <span class="token function">onRejected</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
                   <span class="token punctuation">}</span>
               <span class="token punctuation">}</span><span class="token punctuation">)</span>
           <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">try</span><span class="token punctuation">{</span>
        <span class="token function">excutor</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    
<span class="token punctuation">}</span>



</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br></div></div></template>
