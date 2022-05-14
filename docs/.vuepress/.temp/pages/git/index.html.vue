<template><h1 id="git命令" tabindex="-1"><a class="header-anchor" href="#git命令" aria-hidden="true">#</a> git命令</h1>
<h3 id="git-用一次新的commit来回滚之前的commit" tabindex="-1"><a class="header-anchor" href="#git-用一次新的commit来回滚之前的commit" aria-hidden="true">#</a> git 用一次新的commit来回滚之前的commit</h3>
<ul>
<li>git revert &lt;commit_id&gt; 如果是回滚之前的merge的commit使用git revert -m 1 &lt;commit_id&gt;</li>
</ul>
<h3 id="gitlab网页-分支合并-冲突处理" tabindex="-1"><a class="header-anchor" href="#gitlab网页-分支合并-冲突处理" aria-hidden="true">#</a> gitlab网页 分支合并 冲突处理</h3>
<ul>
<li>https://blog.csdn.net/magic_kid_2010/article/details/100977008</li>
</ul>
<h3 id="查看git的所有配置" tabindex="-1"><a class="header-anchor" href="#查看git的所有配置" aria-hidden="true">#</a> 查看git的所有配置</h3>
<p>git config --global -l</p>
<h3 id="最新git代理设置方案" tabindex="-1"><a class="header-anchor" href="#最新git代理设置方案" aria-hidden="true">#</a> 最新git代理设置方案</h3>
<ul>
<li>只对github.com</li>
<li>git config --global http.https://github.com.proxy socks5://127.0.0.1:1080</li>
<li>取消代理 git config --global --unset http.https://github.com.proxy)</li>
</ul>
<h3 id="git设置代理" tabindex="-1"><a class="header-anchor" href="#git设置代理" aria-hidden="true">#</a> git设置代理</h3>
<h4 id="只为github设置代理" tabindex="-1"><a class="header-anchor" href="#只为github设置代理" aria-hidden="true">#</a> 只为github设置代理</h4>
<ul>
<li>1、http.https:</li>
<li>git config --global http.https://github.com.proxy https://127.0.0.1:7890</li>
</ul>
<h4 id="取消代理" tabindex="-1"><a class="header-anchor" href="#取消代理" aria-hidden="true">#</a> 取消代理</h4>
<ul>
<li>git config --global --unset http.https://github.com.proxy</li>
</ul>
<h3 id="设置代理" tabindex="-1"><a class="header-anchor" href="#设置代理" aria-hidden="true">#</a> 设置代理</h3>
<p>git config --global --add remote.origin.proxy &quot;[http://127.0.0.1:7890]&quot;</p>
<h3 id="git-版本回退并强制推送" tabindex="-1"><a class="header-anchor" href="#git-版本回退并强制推送" aria-hidden="true">#</a> git 版本回退并强制推送</h3>
<p>git log //查看commitID
git reset --hard 需要回退的commitID
git push -f //强制推送</p>
<h3 id="在gitlab上删除分支后-本地git-branch-r还能看到" tabindex="-1"><a class="header-anchor" href="#在gitlab上删除分支后-本地git-branch-r还能看到" aria-hidden="true">#</a> 在gitlab上删除分支后，本地git branch -r还能看到</h3>
<ol>
<li>
<p>git remote prune --dry-run origin 查看当前有哪些是该消失还存在的分支</p>
</li>
<li>
<p>git remote prune origin 删除上面展示的所有分支</p>
</li>
<li>
<p>git fetch --prune origin</p>
</li>
</ol>
<ul>
<li>如果没有结果输出说明已经删除完成了</li>
</ul>
<h3 id="删除git、gitlab的分支" tabindex="-1"><a class="header-anchor" href="#删除git、gitlab的分支" aria-hidden="true">#</a> 删除git、gitlab的分支</h3>
<p>删除本地分支
git branch -d dev 【git branch -参数 本地分支名称】
删除远程分支
git push origin --delete dev 【git push origin --参数 远程分支名称】</p>
<h3 id="gitlab设置分支保护" tabindex="-1"><a class="header-anchor" href="#gitlab设置分支保护" aria-hidden="true">#</a> gitlab设置分支保护</h3>
<p>https://www.cnblogs.com/panwenbin-logs/p/11212359.html</p>
</template>
