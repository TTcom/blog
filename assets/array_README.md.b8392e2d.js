import{_ as s,o as a,c as n,a as l}from"./app.9328da71.js";const A=JSON.parse('{"title":"获取数组中出现次数最多的字符","description":"","frontmatter":{},"headers":[],"relativePath":"array/README.md"}'),p={name:"array/README.md"},o=l(`<h1 id="获取数组中出现次数最多的字符" tabindex="-1">获取数组中出现次数最多的字符 <a class="header-anchor" href="#获取数组中出现次数最多的字符" aria-hidden="true">#</a></h1><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> arr</span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">v</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">c</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">v</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">n</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">c</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">v</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> res</span><span style="color:#89DDFF;">={};</span></span>
<span class="line"><span style="color:#BABED8;">	</span></span>
<span class="line"><span style="color:#BABED8;">	arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">value</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;font-style:italic;">i</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">		</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">!</span><span style="color:#BABED8;">res</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">value</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#BABED8;">res</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">value</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#BABED8;">res</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">value</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">++;</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span></span>
<span class="line"><span style="color:#BABED8;">	</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> keys </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">keys</span><span style="color:#BABED8;">(res)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">	</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> maxnum</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;">maxvalue</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">	</span></span>
<span class="line"><span style="color:#BABED8;">	console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(keys)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">	console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(res)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">	keys</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">value</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;font-style:italic;">i</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">		</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">res</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">value</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">maxnum</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#BABED8;">maxnum</span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;">res</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">value</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#BABED8;">maxvalue</span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;">value</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span></span>
<span class="line"><span style="color:#BABED8;">	</span></span>
<span class="line"><span style="color:#BABED8;">	console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">出现次数最多的字符是</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">+</span><span style="color:#BABED8;">maxvalue</span><span style="color:#89DDFF;">+</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">出现的次数为</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">+</span><span style="color:#BABED8;">maxnum)</span></span>
<span class="line"></span></code></pre></div>`,2),t=[o];function e(c,D,r,F,y,B){return a(),n("div",null,t)}const i=s(p,[["render",e]]);export{A as __pageData,i as default};