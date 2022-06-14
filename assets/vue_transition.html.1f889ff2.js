import{_ as n,b as s}from"./app.78486257.js";const a={},e=s(`<h1 id="vue-transition" tabindex="-1"><a class="header-anchor" href="#vue-transition" aria-hidden="true">#</a> vue_transition</h1><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5982\u4F55\u5199\u4E00\u4E2A\u7B80\u5355\u7684transition\u52A8\u753B
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u6700\u7B80\u5355\u7684\u5F53\u7136\u662F\u5B98\u7F51\u7ED9\u7684
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.fade-enter-active, .fade-leave-active</span> <span class="token punctuation">{</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> opacity .5s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
.fade-enter<span class="token punctuation">,</span> .fade-leave-to <span class="token comment">/* .fade-leave-active below version 2.1.8 */</span> <span class="token punctuation">{</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u6709\u70B9\u4E0D\u592A\u6E05\u6670\u54C8
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u6765\u4E2A\u6E05\u6670\u70B9\u7684\uFF0C\u53C8\u7B80\u5355\u7684
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.activity-dialog-enter</span> <span class="token punctuation">{</span>
    //\u8FC7\u6E21\u7684\u8FDB\u5165\u5F00\u59CB\u7684\u72B6\u6001
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> -10px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.activity-dialog-enter-active</span> <span class="token punctuation">{</span>
    //\u8FC7\u6E21\u8FDB\u5165\u751F\u6548\u65F6\u7684\u72B6\u6001
    <span class="token property">transition</span><span class="token punctuation">:</span> all 0.3s<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.activity-dialog-enter-to</span> <span class="token punctuation">{</span>
    //\u8FC7\u6E21\u7684\u8FDB\u5165\u7ED3\u675F\u72B6\u6001
     <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
     <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
     <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.activity-dialog-leave</span> <span class="token punctuation">{</span>  //\u8FC7\u6E21\u7684\u79BB\u5F00\u5F00\u59CB\u72B6\u6001
    <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.activity-dialog-leave-active</span> <span class="token punctuation">{</span>  //\u8FC7\u6E21\u7684\u79BB\u5F00\u751F\u6548\u65F6\u7684\u72B6\u6001
    <span class="token property">transition</span><span class="token punctuation">:</span> all 0.3s<span class="token punctuation">;</span>
    
  <span class="token punctuation">}</span>
  <span class="token selector">.activity-dialog-leave-to</span> <span class="token punctuation">{</span>   //\u8FC7\u6E21\u7684\u79BB\u5F00\u7ED3\u675F\u72B6\u6001
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> -10px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div>`,7);function p(t,c){return e}var o=n(a,[["render",p],["__file","vue_transition.html.vue"]]);export{o as default};
