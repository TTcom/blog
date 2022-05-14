<template><h1 id="vue-eslint" tabindex="-1"><a class="header-anchor" href="#vue-eslint" aria-hidden="true">#</a> vue_eslint</h1>
<p>在vue中使用eslint和prettier</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>首先在创建项目的时候选择eslint加prettier

如果是老项目添加的话请自行安装这两个依赖

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>v4中在ve.config.js文件中配置自动修复eslint语法错误</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports<span class="token operator">=</span><span class="token punctuation">{</span>
    <span class="token function-variable function">chainWebpack</span><span class="token operator">:</span> <span class="token parameter">config</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        config<span class="token punctuation">.</span>module
          <span class="token punctuation">.</span><span class="token function">rule</span><span class="token punctuation">(</span><span class="token string">"eslint"</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">"eslint-loader"</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">loader</span><span class="token punctuation">(</span><span class="token string">"eslint-loader"</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token parameter">options</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            options<span class="token punctuation">.</span>fix <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>   <span class="token comment">//设置自动修复eslint</span>
            <span class="token keyword">return</span> options<span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>添加文件.eslintrc.js或者在package.json中的eslintConfig对象中进行配置</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//.eslintrc.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">node</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"plugin:vue/essential"</span><span class="token punctuation">,</span>
    <span class="token string">"@vue/prettier"</span><span class="token punctuation">,</span>
   <span class="token comment">// "@vue/typescript",</span>
    <span class="token string">"plugin:prettier/recommended"</span> <span class="token comment">// add prettier-eslint plugin which will uses the `.prettierrc.js` config</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">'prettier/prettier'</span><span class="token operator">:</span> <span class="token string">'error'</span><span class="token punctuation">,</span>
    <span class="token string-property property">"no-console"</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">"production"</span> <span class="token operator">?</span> <span class="token string">"error"</span> <span class="token operator">:</span> <span class="token string">"off"</span><span class="token punctuation">,</span>
   <span class="token string-property property">"no-debugger"</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">"production"</span> <span class="token operator">?</span> <span class="token string">"error"</span> <span class="token operator">:</span> <span class="token string">"off"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token comment">// parser: "@typescript-eslint/parser"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">overrides</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">files</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"**/__tests__/*.{j,t}s?(x)"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">mocha</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>添加文件.prettierrc.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//.prettierrc.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">printWidth</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token comment">//单行最多的字符，默认80</span>
    <span class="token literal-property property">tabWidth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">// tab缩进大小,默认为2</span>
    <span class="token literal-property property">semi</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//在语句结尾打印分号</span>
    <span class="token literal-property property">singleQuote</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 使用单引号, 默认false(在jsx中配置无效, 默认都是双引号)</span>
    <span class="token literal-property property">bracketSpacing</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//打印对象文字中括号之间的空格</span>
    <span class="token literal-property property">jsxBracketSameLine</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">arrowParens</span><span class="token operator">:</span> <span class="token string">'avoid'</span><span class="token punctuation">,</span> 
    <span class="token comment">//"always" - Always include parens. Example: (x) => x</span>
    <span class="token comment">//"avoid" - Omit parens when possible. Example: x => x</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>打完收工，运行看效果</p>
</template>
