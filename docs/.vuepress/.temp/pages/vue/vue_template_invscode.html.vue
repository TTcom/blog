<template><h1 id="vue-template-invscode" tabindex="-1"><a class="header-anchor" href="#vue-template-invscode" aria-hidden="true">#</a> vue_template_invscode</h1>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>文件>首选项>用户片段>输入vue>点击vue
讲一下代码拷入文件中
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"Print to console"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"prefix"</span><span class="token operator">:</span> <span class="token string">"log"</span><span class="token punctuation">,</span>
        <span class="token property">"body"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">"console.log('$1');"</span><span class="token punctuation">,</span>
            <span class="token string">"$2"</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"Log output to console"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"Create vue template"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"prefix"</span><span class="token operator">:</span> <span class="token string">"vue"</span><span class="token punctuation">,</span>
        <span class="token property">"body"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
			<span class="token string">"&lt;template>"</span><span class="token punctuation">,</span>
			<span class="token string">"  &lt;div>&lt;/div>"</span><span class="token punctuation">,</span>
            <span class="token string">"&lt;/template>"</span><span class="token punctuation">,</span>
            <span class="token string">"&lt;script>"</span><span class="token punctuation">,</span>
            <span class="token string">"export default {"</span><span class="token punctuation">,</span>
            <span class="token string">"  name: ' ',"</span><span class="token punctuation">,</span>
            <span class="token string">"  data() {"</span><span class="token punctuation">,</span>
            <span class="token string">"    return {"</span><span class="token punctuation">,</span>
            <span class="token string">"    }"</span><span class="token punctuation">,</span>
            <span class="token string">"  }"</span><span class="token punctuation">,</span>
            <span class="token string">"}"</span><span class="token punctuation">,</span>
            <span class="token string">"&lt;/script>"</span><span class="token punctuation">,</span>
            <span class="token string">"&lt;style lang=\"${2:scss}\" scoped>&lt;/style>"</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"Create vue template"</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div></template>
