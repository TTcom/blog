import{_ as s,o as a,c as n,a as e}from"./app.9328da71.js";const B=JSON.parse('{"title":"js自定义事件","description":"","frontmatter":{},"headers":[{"level":3,"title":"js中自定义事件的使用与触发","slug":"js中自定义事件的使用与触发","link":"#js中自定义事件的使用与触发","children":[]}],"relativePath":"javascript/event.md"}'),l={name:"javascript/event.md"},o=e(`<h1 id="js自定义事件" tabindex="-1">js自定义事件 <a class="header-anchor" href="#js自定义事件" aria-hidden="true">#</a></h1><h3 id="js中自定义事件的使用与触发" tabindex="-1">js中自定义事件的使用与触发 <a class="header-anchor" href="#js中自定义事件的使用与触发" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> event </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">new</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">Event</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">build</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Listen for the event.</span></span>
<span class="line"><span style="color:#BABED8;">elem</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">build</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">e</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">...</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">},</span><span style="color:#BABED8;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Dispatch the event.</span></span>
<span class="line"><span style="color:#BABED8;">elem</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">dispatchEvent</span><span style="color:#BABED8;">(event)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,3),p=[o];function t(c,r,D,i,y,F){return a(),n("div",null,p)}const A=s(l,[["render",t]]);export{B as __pageData,A as default};