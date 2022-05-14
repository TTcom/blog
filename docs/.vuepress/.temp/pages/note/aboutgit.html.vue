<template><h1 id="git代码提交" tabindex="-1"><a class="header-anchor" href="#git代码提交" aria-hidden="true">#</a> git代码提交</h1>
<h3 id="使用git遇到的问题learn" tabindex="-1"><a class="header-anchor" href="#使用git遇到的问题learn" aria-hidden="true">#</a> 使用git遇到的问题learn</h3>
<h3 id="git-重新提交commit-信息" tabindex="-1"><a class="header-anchor" href="#git-重新提交commit-信息" aria-hidden="true">#</a> git 重新提交commit 信息</h3>
<ul>
<li>git commit --amend -m &quot;新的修改提交信息&quot;</li>
</ul>
<h4 id="git如何撤销commit的方法-未push" tabindex="-1"><a class="header-anchor" href="#git如何撤销commit的方法-未push" aria-hidden="true">#</a> git如何撤销commit的方法(未push)</h4>
<img :src="$withBase('/gitcommit.png')" alt="mixureSecure">
<ul>
<li>
<p>git 撤销指定文件 git checkout 文件名</p>
</li>
<li>
<p>主要介绍了git如何撤销commit的方法(未push)</p>
</li>
<li>
<p>撤销commit一般用git reset</p>
</li>
<li>
<p>语法如下：git reset [ --mixed | --soft | --hard] commitID</p>
</li>
<li>
<p>1.使用参数--mixed(默认参数)，如git reset --mixed commitID或git reset commitID撤销git commit，撤销git add，保留编辑器改动代码</p>
</li>
<li>
<p>2.使用参数--soft，如git reset --soft commitID 撤销gitcommit，不撤销git add，保留编辑器改动代码</p>
</li>
<li>
<p>3.使用参数--hard，如git reset --hard commitID ——此方式非常暴力，全部撤销，慎用撤销gitcommit，撤销git add，删除编辑器改动代码</p>
</li>
<li>
<p>原文地址https://download.csdn.net/download/weixin_38707061/12924821?spm=1001.2101.3001.5697</p>
</li>
</ul>
<h4 id="问题一" tabindex="-1"><a class="header-anchor" href="#问题一" aria-hidden="true">#</a> 问题一</h4>
<p>在git push的点时候报错<br />
经常遇到该报错：Connection reset by 13.229.188.59 port 22 fatal: Could not read from remote repository.
意为连接远程仓库失败；可能是网络问题只需等待网络恢复即可</p>
<h4 id="或重新生成ssh" tabindex="-1"><a class="header-anchor" href="#或重新生成ssh" aria-hidden="true">#</a> 或重新生成ssh</h4>
<p>更新代码git pull（如果git pull都失败的话确实是网络问题）  或者 重置ssh——命令：ssh-keygen -t rsa -C &quot;xxx@xxx.com&quot;</p>
<h3 id="问题二git上传忽略node-modules" tabindex="-1"><a class="header-anchor" href="#问题二git上传忽略node-modules" aria-hidden="true">#</a> 问题二git上传忽略node_modules</h3>
<p>1、在需要创建 .gitignore 文件的文件夹, 右键选择Git Bash 进入命令行，进入项目所在目录。<br /></p>
<p>2、输入 touch .gitignore ，生成“.gitignore”文件。<br /></p>
<p>3、在”.gitignore” 文件里输入你要忽略的文件夹及其文件就可以了。（注意格式）<br />
我的.gitignore<br /></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>DS_Store
 
node_modules<span class="token operator">/</span>
 
dist<span class="token operator">/</span>

npm<span class="token operator">-</span>debug<span class="token punctuation">.</span>log

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>4、下面我们看看常用的规则：<br />
1）/mtk/               过滤整个文件夹<br />
2）*.zip                过滤所有.zip文件<br />
3）/mtk/do.c         过滤某个具体文件<br /></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
node_modules<span class="token operator">/</span> 表示过滤这个文件夹
 
<span class="token operator">*</span><span class="token punctuation">.</span>zip 过滤zip后缀文件
 
demo<span class="token punctuation">.</span>html 过滤该文件
 
<span class="token operator">!</span>src<span class="token operator">/</span> 不过滤该文件夹
 
<span class="token operator">!</span><span class="token operator">*</span><span class="token punctuation">.</span>js 不过滤java源文件
 
 
<span class="token operator">!</span>index<span class="token punctuation">.</span>html 不过滤该文件

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token number">1</span>）配置语法：
以斜杠“<span class="token operator">/</span>”开头表示目录；
以星号“<span class="token operator">*</span>”通配多个字符；
以问号“<span class="token operator">?</span>”通配单个字符
以方括号“<span class="token punctuation">[</span><span class="token punctuation">]</span>”包含单个字符的匹配列表；
以叹号“<span class="token operator">!</span><span class="token function">”表示不忽略</span><span class="token punctuation">(</span>跟踪<span class="token punctuation">)</span>匹配到的文件或目录；

此外，git 对于 <span class="token punctuation">.</span>ignore 配置文件是按行从上到下进行规则匹配的，意味着如果前面的规则匹配的范围更大，则后面的规则将不会生效；

<span class="token number">2</span>）示例说明
a）规则：fd1<span class="token comment">/*
说明：忽略目录 fd1 下的全部内容；注意，不管是根目录下的 /fd1/ 目录，还是某个子目录 /child/fd1/ 目录，都会被忽略；
b）规则：/fd1/*
说明：忽略根目录下的 /fd1/ 目录的全部内容；
c）规则：
/*
!.gitignore
!/fw/bin/
!/fw/sf/
说明：忽略全部内容，但是不忽略 .gitignore 文件、根目录下的 /fw/bin/ 和 /fw/sf/ 目录；

5、操作方法

一是常规的windows操作

根目录下创建gitignore.txt；
编辑gitignore.txt，写下你的规则，例如加上node_modules/；
打开命令行窗口，切换到根目录（可以直接在文件夹上面的地址栏输入cmd回车）；
执行命令ren gitignore.txt .gitignore。
二是用Git Bash

根目录下右键选择“Git Bash Here”进入bash命令窗口；
输入vim .gitignore命令，打开文件（没有文件会自动创建）；
按i键切换到编辑状态，输入规则，例如node_modules/，然后按Esc键退出编辑，输入:wq保存退出。
最后需要强调的一点是，如果你不慎在创建.gitignore文件之前就push了项目，那么即使你在.gitignore文件中写入新的过滤规则，这些规则也不会起作用，Git仍然会对所有文件进行版本管理。
简单来说，出现这种问题的原因就是Git已经开始管理这些文件了，所以你无法再通过过滤规则过滤它们。因此一定要养成在项目开始就创建.gitignore文件的习惯，否则一旦push，处理起来会非常麻烦。
</span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><p><a href="https://blog.csdn.net/qq_37818095/article/details/82145062" target="view_window">如何在Vue项目中使用vw实现移动端适配</a></p>
<h3 id="git-stash" tabindex="-1"><a class="header-anchor" href="#git-stash" aria-hidden="true">#</a> git stash</h3>
<p>1、 git stash save &quot;save message&quot;  : 执行存储时，添加备注，方便查找，只有git stash 也要可以的，但查找时不方便识别。</p>
<p>2、git stash list  ：查看stash了哪些存储</p>
<p>3、git stash show ：显示做了哪些改动，默认show第一个存储,如果要显示其他存贮，后面直接跟id，比如第二个 git stash show 跟list中的id号</p>
<p>4、git stash apply :应用某个存储,但不会把存储从存储列表中删除，默认使用第一个存储,即stash@{0}，注意apply后面直接跟0不要写stash@{0}</p>
<p>5、git stash pop ：命令恢复之前缓存的工作目录，将缓存堆栈中的对应stash删除，并将对应修改应用到当前的工作目录下,默认为第一个stash,即stash@{0}，注意pop后面直接跟0不要写stash@{0}</p>
<p>6、git stash drop stash@{$num} ：丢弃stash@{$num}存储，从列表中删除这个存储</p>
<p>7、git stash clear ：删除所有缓存的stash</p>
</template>
