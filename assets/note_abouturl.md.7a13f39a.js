import{_ as s,o as a,c as n,a as l}from"./app.9328da71.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"使用URLSearchParams","slug":"使用urlsearchparams","link":"#使用urlsearchparams","children":[]},{"level":3,"title":"从 URL 获取查询参数","slug":"从-url-获取查询参数","link":"#从-url-获取查询参数","children":[]}],"relativePath":"note/abouturl.md"}'),o={name:"note/abouturl.md"},p=l(`<h3 id="使用urlsearchparams" tabindex="-1">使用URLSearchParams <a class="header-anchor" href="#使用urlsearchparams" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#BABED8;">    </span><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> url </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">?token_android=0e876ea3dd9d4315af56256ba05e4d64&amp;completeInformation=-1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> urlParams </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">new</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">URLSearchParams</span><span style="color:#BABED8;">(url)</span></span>
<span class="line"><span style="color:#BABED8;">    console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(urlParams</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">token_android</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">))</span></span>
<span class="line"></span></code></pre></div><p>链接<a href="https://blog.csdn.net/xr510002594/article/details/92101545" target="_blank" rel="noreferrer">https://blog.csdn.net/xr510002594/article/details/92101545</a></p><h3 id="从-url-获取查询参数" tabindex="-1">从 URL 获取查询参数 <a class="header-anchor" href="#从-url-获取查询参数" aria-hidden="true">#</a></h3><p>可以通过传递 window.location 或原始 URL <a href="http://goole.com?search=easy&amp;page=3" target="_blank" rel="noreferrer">goole.com?search=easy&amp;page=3</a> 轻松地从 url 检索查询参数</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> getParameters </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">URL</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#BABED8;">URL</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">parse</span><span style="color:#F07178;">(</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{&quot;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">decodeURI</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">URL</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">split</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">?</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)[</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">])</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">replace</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">&quot;</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">g</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">\\\\</span><span style="color:#C3E88D;">&quot;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">replace</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">&amp;</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">g</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&quot;,&quot;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">replace</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">=</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">g</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&quot;:&quot;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">+</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&quot;}</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">  )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stringify</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">URL</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">getParameters</span><span style="color:#BABED8;">(window</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">location)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Result: { search : &quot;easy&quot;, page : 3 }</span></span>
<span class="line"></span></code></pre></div><p>或者Object.fromEntries(new URLSearchParams(window.location.search))</p>`,7),e=[p];function t(r,c,F,y,D,i){return a(),n("div",null,e)}const B=s(o,[["render",t]]);export{d as __pageData,B as default};