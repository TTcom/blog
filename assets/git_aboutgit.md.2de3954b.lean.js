import{_ as a,o as n,c as l,a as p}from"./app.7c722b35.js";const t="/blog/gitcommit.png",g=JSON.parse('{"title":"git代码提交","description":"","frontmatter":{},"headers":[{"level":3,"title":"使用git遇到的问题learn","slug":"使用git遇到的问题learn","link":"#使用git遇到的问题learn","children":[]},{"level":3,"title":"git 重新提交commit 信息","slug":"git-重新提交commit-信息","link":"#git-重新提交commit-信息","children":[]},{"level":3,"title":"问题二git上传忽略node_modules","slug":"问题二git上传忽略node-modules","link":"#问题二git上传忽略node-modules","children":[]},{"level":3,"title":"git stash","slug":"git-stash","link":"#git-stash","children":[]}],"relativePath":"git/aboutgit.md"}'),e={name:"git/aboutgit.md"};function o(i,s,c,r,y,D){return n(),l("div",null,s[0]||(s[0]=[p('<h1 id="git代码提交" tabindex="-1">git代码提交 <a class="header-anchor" href="#git代码提交" aria-hidden="true">#</a></h1><h3 id="使用git遇到的问题learn" tabindex="-1">使用git遇到的问题learn <a class="header-anchor" href="#使用git遇到的问题learn" aria-hidden="true">#</a></h3><h3 id="git-重新提交commit-信息" tabindex="-1">git 重新提交commit 信息 <a class="header-anchor" href="#git-重新提交commit-信息" aria-hidden="true">#</a></h3><ul><li>git commit --amend -m &quot;新的修改提交信息&quot;</li></ul><h4 id="git如何撤销commit的方法-未push" tabindex="-1">git如何撤销commit的方法(未push) <a class="header-anchor" href="#git如何撤销commit的方法-未push" aria-hidden="true">#</a></h4><p><img src="'+t+`" alt="foo" data-zoomable=""></p><ul><li><p>git 撤销指定文件 git checkout 文件名</p></li><li><p>主要介绍了git如何撤销commit的方法(未push)</p></li><li><p>撤销commit一般用git reset</p></li><li><p>语法如下：git reset [ --mixed | --soft | --hard] commitID</p></li><li><p>1.使用参数--mixed(默认参数)，如git reset --mixed commitID或git reset commitID撤销git commit，撤销git add，保留编辑器改动代码</p></li><li><p>2.使用参数--soft，如git reset --soft commitID 撤销gitcommit，不撤销git add，保留编辑器改动代码</p></li><li><p>3.使用参数--hard，如git reset --hard commitID ——此方式非常暴力，全部撤销，慎用撤销gitcommit，撤销git add，删除编辑器改动代码</p></li><li><p>原文地址<a href="https://download.csdn.net/download/weixin_38707061/12924821?spm=1001.2101.3001.5697" target="_blank" rel="noreferrer">https://download.csdn.net/download/weixin_38707061/12924821?spm=1001.2101.3001.5697</a></p></li></ul><h4 id="问题一" tabindex="-1">问题一 <a class="header-anchor" href="#问题一" aria-hidden="true">#</a></h4><p>在git push的点时候报错<br> 经常遇到该报错：Connection reset by 13.229.188.59 port 22 fatal: Could not read from remote repository. 意为连接远程仓库失败；可能是网络问题只需等待网络恢复即可</p><h4 id="或重新生成ssh" tabindex="-1">或重新生成ssh <a class="header-anchor" href="#或重新生成ssh" aria-hidden="true">#</a></h4><p>更新代码git pull（如果git pull都失败的话确实是网络问题） 或者 重置ssh——命令：ssh-keygen -t rsa -C &quot;<a href="mailto:xxx@xxx.com" target="_blank" rel="noreferrer">xxx@xxx.com</a>&quot;</p><h3 id="问题二git上传忽略node-modules" tabindex="-1">问题二git上传忽略node_modules <a class="header-anchor" href="#问题二git上传忽略node-modules" aria-hidden="true">#</a></h3><p>1、在需要创建 .gitignore 文件的文件夹, 右键选择Git Bash 进入命令行，进入项目所在目录。<br></p><p>2、输入 touch .gitignore ，生成“.gitignore”文件。<br></p><p>3、在”.gitignore” 文件里输入你要忽略的文件夹及其文件就可以了。（注意格式）<br> 我的.gitignore<br></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">DS_Store</span></span>
<span class="line"><span style="color:#BABED8;"> </span></span>
<span class="line"><span style="color:#BABED8;">node_modules</span><span style="color:#89DDFF;">/</span></span>
<span class="line"><span style="color:#BABED8;"> </span></span>
<span class="line"><span style="color:#BABED8;">dist</span><span style="color:#89DDFF;">/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">npm</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">debug</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">log</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>4、下面我们看看常用的规则：<br> 1）/mtk/ 过滤整个文件夹<br> 2）*.zip 过滤所有.zip文件<br> 3）/mtk/do.c 过滤某个具体文件<br></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#BABED8;">node_modules</span><span style="color:#89DDFF;">/</span><span style="color:#BABED8;"> 表示过滤这个文件夹</span></span>
<span class="line"><span style="color:#BABED8;"> </span></span>
<span class="line"><span style="color:#89DDFF;">*.</span><span style="color:#BABED8;">zip 过滤zip后缀文件</span></span>
<span class="line"><span style="color:#BABED8;"> </span></span>
<span class="line"><span style="color:#BABED8;">demo</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">html 过滤该文件</span></span>
<span class="line"><span style="color:#BABED8;"> </span></span>
<span class="line"><span style="color:#89DDFF;">!</span><span style="color:#BABED8;">src</span><span style="color:#89DDFF;">/</span><span style="color:#BABED8;"> 不过滤该文件夹</span></span>
<span class="line"><span style="color:#BABED8;"> </span></span>
<span class="line"><span style="color:#89DDFF;">!*.</span><span style="color:#BABED8;">js 不过滤java源文件</span></span>
<span class="line"><span style="color:#BABED8;"> </span></span>
<span class="line"><span style="color:#BABED8;"> </span></span>
<span class="line"><span style="color:#89DDFF;">!</span><span style="color:#BABED8;">index</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">html 不过滤该文件</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#F78C6C;">1</span><span style="color:#BABED8;">）配置语法：</span></span>
<span class="line"><span style="color:#BABED8;">以斜杠“</span><span style="color:#89DDFF;">/</span><span style="color:#BABED8;">”开头表示目录；</span></span>
<span class="line"><span style="color:#BABED8;">以星号“</span><span style="color:#89DDFF;">*</span><span style="color:#BABED8;">”通配多个字符；</span></span>
<span class="line"><span style="color:#BABED8;">以问号“</span><span style="color:#89DDFF;">?</span><span style="color:#BABED8;">”通配单个字符</span></span>
<span class="line"><span style="color:#BABED8;">以方括号“[]”包含单个字符的匹配列表；</span></span>
<span class="line"><span style="color:#BABED8;">以叹号“</span><span style="color:#89DDFF;">!</span><span style="color:#BABED8;">”</span><span style="color:#82AAFF;">表示不忽略</span><span style="color:#BABED8;">(跟踪)匹配到的文件或目录；</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">此外，git 对于 </span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">ignore 配置文件是按行从上到下进行规则匹配的，意味着如果前面的规则匹配的范围更大，则后面的规则将不会生效；</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">2</span><span style="color:#BABED8;">）示例说明</span></span>
<span class="line"><span style="color:#BABED8;">a）规则：fd1</span><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">说明：忽略目录 fd1 下的全部内容；注意，不管是根目录下的 /fd1/ 目录，还是某个子目录 /child/fd1/ 目录，都会被忽略；</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">b）规则：/fd1/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">说明：忽略根目录下的 /fd1/ 目录的全部内容；</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">c）规则：</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">!.gitignore</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">!/fw/bin/</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">!/fw/sf/</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">说明：忽略全部内容，但是不忽略 .gitignore 文件、根目录下的 /fw/bin/ 和 /fw/sf/ 目录；</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">5、操作方法</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">一是常规的windows操作</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">根目录下创建gitignore.txt；</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">编辑gitignore.txt，写下你的规则，例如加上node_modules/；</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">打开命令行窗口，切换到根目录（可以直接在文件夹上面的地址栏输入cmd回车）；</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">执行命令ren gitignore.txt .gitignore。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">二是用Git Bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">根目录下右键选择“Git Bash Here”进入bash命令窗口；</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">输入vim .gitignore命令，打开文件（没有文件会自动创建）；</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">按i键切换到编辑状态，输入规则，例如node_modules/，然后按Esc键退出编辑，输入:wq保存退出。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">最后需要强调的一点是，如果你不慎在创建.gitignore文件之前就push了项目，那么即使你在.gitignore文件中写入新的过滤规则，这些规则也不会起作用，Git仍然会对所有文件进行版本管理。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">简单来说，出现这种问题的原因就是Git已经开始管理这些文件了，所以你无法再通过过滤规则过滤它们。因此一定要养成在项目开始就创建.gitignore文件的习惯，否则一旦push，处理起来会非常麻烦。</span></span>
<span class="line"></span></code></pre></div><p><a href="https://blog.csdn.net/qq_37818095/article/details/82145062" target="_blank" rel="noreferrer">如何在Vue项目中使用vw实现移动端适配</a></p><h3 id="git-stash" tabindex="-1">git stash <a class="header-anchor" href="#git-stash" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#F78C6C;">1</span><span style="color:#BABED8;">、 git stash save </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">save message</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">  : 执行存储时，添加备注，方便查找，只有git stash 也要可以的，但查找时不方便识别。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">2</span><span style="color:#BABED8;">、git stash list  ：查看stash了哪些存储</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">3</span><span style="color:#BABED8;">、git stash show ：显示做了哪些改动，默认show第一个存储</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;">如果要显示其他存贮，后面直接跟id，比如第二个 git stash show 跟list中的id号</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">4</span><span style="color:#BABED8;">、git stash </span><span style="color:#FFCB6B;">apply</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;">应用某个存储</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;">但不会把存储从存储列表中删除，默认使用第一个存储</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;">即stash@</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">，注意apply后面直接跟0不要写stash@</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">5</span><span style="color:#BABED8;">、git stash pop ：命令恢复之前缓存的工作目录，将缓存堆栈中的对应stash删除，并将对应修改应用到当前的工作目录下</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;">默认为第一个stash</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;">即stash@</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">，注意pop后面直接跟0不要写stash@</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">6</span><span style="color:#BABED8;">、git stash drop stash@</span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;">$num</span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> ：丢弃stash@</span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;">$num</span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">存储，从列表中删除这个存储</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">7</span><span style="color:#BABED8;">、git stash clear ：删除所有缓存的stash</span></span>
<span class="line"></span></code></pre></div>`,22)]))}const B=a(e,[["render",o]]);export{g as __pageData,B as default};
