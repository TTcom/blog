import{_ as s,o as n,c as a,a as l}from"./app.9328da71.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"vue_jwt","slug":"vue-jwt","link":"#vue-jwt","children":[]}],"relativePath":"vue/vue_jwt.md"}'),o={name:"vue/vue_jwt.md"},p=l(`<h3 id="vue-jwt" tabindex="-1">vue_jwt <a class="header-anchor" href="#vue-jwt" aria-hidden="true">#</a></h3><p>vue_jwt实现请求拦截验证</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;">  </span><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> axiosjwt </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">config</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">           </span></span>
<span class="line"><span style="color:#F07178;">	</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">instance</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">axios</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">   </span><span style="color:#676E95;font-style:italic;">//创建了一个axios实例</span></span>
<span class="line"><span style="color:#F07178;">			baseURL</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;">process</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">env</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">NODE_ENV</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">development</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">?</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http://localhost:3000</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">			timeout</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">2000</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">		</span><span style="color:#676E95;font-style:italic;">//请求的时候会执行此方法-拦截器</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#BABED8;">instance</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">interceptors</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">request</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">config</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">//config当前请求的配置</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#BABED8;">config</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">headers</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">Authorization</span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;">localStorage</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getItem</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">token</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">config</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">},</span><span style="color:#BABED8;font-style:italic;">err</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reject</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">err</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">		</span><span style="color:#676E95;font-style:italic;">//设置响应拦截器</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#BABED8;">instance</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">interceptors</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">response</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#F07178;">(</span><span style="color:#BABED8;font-style:italic;">res</span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;">res</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">data</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;font-style:italic;">err</span><span style="color:#C792EA;">=&gt;</span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reject</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">err</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">		</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">instance</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">config</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">         </span><span style="color:#676E95;font-style:italic;">//返回创建的axios实例 </span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,3),t=[p];function e(c,r,F,y,D,i){return n(),a("div",null,t)}const E=s(o,[["render",e]]);export{A as __pageData,E as default};