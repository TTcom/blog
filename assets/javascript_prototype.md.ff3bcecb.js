import{_ as n,o as a,c as l,a as o}from"./app.7c722b35.js";const F=JSON.parse('{"title":"原型链","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/prototype.md"}'),p={name:"javascript/prototype.md"};function t(e,s,c,r,y,D){return a(),l("div",null,s[0]||(s[0]=[o(`<h1 id="原型链" tabindex="-1">原型链 <a class="header-anchor" href="#原型链" aria-hidden="true">#</a></h1><p>prototype和__proto__的区别<a href="https://www.jianshu.com/p/80bcf8b2004e" target="_blank" rel="noreferrer"></a></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// prototype //原型  每一个函数都有自己的原型prototype</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// __proto__ //原型链  每一个对象都有自己的原型链</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//创建函数,原型链</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">foo</span><span style="color:#89DDFF;">(){};</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#FFCB6B;">foo</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">z</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">	console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(</span><span style="color:#FFCB6B;">foo</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">prototype)</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> </span></span>
<span class="line"><span style="color:#BABED8;">	console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(foo)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">	console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(</span><span style="color:#FFCB6B;">foo</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">__proto__)</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> </span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">//prototype表示该函数的原型 属性使您有能力向对象添加属性和方法。每个对象都有一个__proto__标签</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">//foo.prototype是一个对象——&gt;有原型__proto__属性 而后__proto__的原型prototype </span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">//即__proto__这个对象的prototype为null</span></span>
<span class="line"><span style="color:#BABED8;">	</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">// 对象具有属性proto，可称为隐式原型，一个对象的隐式原型指向构造该对象的构造函数的原型</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">//使用new来构造函数</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">// var obj = new foo();</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">// obj.y = 2;</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">// obj.x = 1;</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">// obj.z=3</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">//console.log(obj);</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">//obj这个对象 即new的一个创建的一个新对象会有__proto__的属性,__proto__就是obj的隐式原型-&gt;会向上查找</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">//指向他的构造者(constructor):foo();</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">//而后会在foo()上查找prototype是否包含z</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">//通过原型链上的继承,我们可以继承原型链上的属性</span></span>
<span class="line"><span style="color:#BABED8;">	</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//创建对象</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">x</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;">     </span><span style="color:#676E95;font-style:italic;">//相当于在对象的原型上创建了参数x</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">//直接在obj的原型上创建属性x</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">//obj本身不会有该属性,只是在他的原型上有该属性</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">// typeof obj.toString //function</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">//所以obj.hasOwnProperty(x)为false</span></span>
<span class="line"><span style="color:#BABED8;">	</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">//console.log(obj.hasOwnProperty(x))</span></span>
<span class="line"><span style="color:#BABED8;">	console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(obj)</span></span>
<span class="line"><span style="color:#BABED8;">	</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> cobj </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">null</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;">     </span><span style="color:#676E95;font-style:italic;">//也可以修改对象的原型或删除对象的原型</span></span>
<span class="line"><span style="color:#BABED8;">	</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">// cobj.toString //undefined</span></span>
<span class="line"><span style="color:#BABED8;">	console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(cobj)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">	</span></span>
<span class="line"><span style="color:#BABED8;">	</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">//js里的__proto__和prototype到底有什么区别？</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">// 1.在JS里，万物皆对象。方法（Function）是对象，方法的原型(Function.prototype)是对象。</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">// 因此，它们都会具有对象共有的特点。即：&lt;strong&gt;对象具有属性proto，可称为隐式原型，</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">// 一个对象的隐式原型指向构造该对象的构造函数的原型，这也保证了实例能够访问在构造函数原型中定义的属性和方法。</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,3)]))}const B=n(p,[["render",t]]);export{F as __pageData,B as default};
