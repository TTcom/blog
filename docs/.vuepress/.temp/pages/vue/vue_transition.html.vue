<template><h1 id="vue-transition" tabindex="-1"><a class="header-anchor" href="#vue-transition" aria-hidden="true">#</a> vue_transition</h1>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>如何写一个简单的transition动画
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>最简单的当然是官网给的
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.fade-enter-active, .fade-leave-active</span> <span class="token punctuation">{</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> opacity .5s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
.fade-enter<span class="token punctuation">,</span> .fade-leave-to <span class="token comment">/* .fade-leave-active below version 2.1.8 */</span> <span class="token punctuation">{</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>有点不太清晰哈
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>来个清晰点的，又简单的
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.activity-dialog-enter</span> <span class="token punctuation">{</span>
    //过渡的进入开始的状态
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> -10px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.activity-dialog-enter-active</span> <span class="token punctuation">{</span>
    //过渡进入生效时的状态
    <span class="token property">transition</span><span class="token punctuation">:</span> all 0.3s<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.activity-dialog-enter-to</span> <span class="token punctuation">{</span>
    //过渡的进入结束状态
     <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
     <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
     <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.activity-dialog-leave</span> <span class="token punctuation">{</span>  //过渡的离开开始状态
    <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.activity-dialog-leave-active</span> <span class="token punctuation">{</span>  //过渡的离开生效时的状态
    <span class="token property">transition</span><span class="token punctuation">:</span> all 0.3s<span class="token punctuation">;</span>
    
  <span class="token punctuation">}</span>
  <span class="token selector">.activity-dialog-leave-to</span> <span class="token punctuation">{</span>   //过渡的离开结束状态
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> -10px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div></template>
