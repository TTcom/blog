import{_ as i,o as e,c as a,a as l}from"./app.7c722b35.js";const d=JSON.parse('{"title":"git命令","description":"","frontmatter":{},"headers":[{"level":3,"title":"git 查看当前分支从哪个分支创建的","slug":"git-查看当前分支从哪个分支创建的","link":"#git-查看当前分支从哪个分支创建的","children":[]},{"level":3,"title":"git 删除某一次的commit提交记录，并且不保留记录","slug":"git-删除某一次的commit提交记录-并且不保留记录","link":"#git-删除某一次的commit提交记录-并且不保留记录","children":[]},{"level":3,"title":"git 用一次新的commit来回滚之前的commit,并且保留记录","slug":"git-用一次新的commit来回滚之前的commit-并且保留记录","link":"#git-用一次新的commit来回滚之前的commit-并且保留记录","children":[]},{"level":3,"title":"gitlab网页 分支合并 冲突处理","slug":"gitlab网页-分支合并-冲突处理","link":"#gitlab网页-分支合并-冲突处理","children":[]},{"level":3,"title":"查看git的所有配置","slug":"查看git的所有配置","link":"#查看git的所有配置","children":[]},{"level":3,"title":"git代理设置终极方案","slug":"git代理设置终极方案","link":"#git代理设置终极方案","children":[]},{"level":3,"title":"最新git代理设置方案","slug":"最新git代理设置方案","link":"#最新git代理设置方案","children":[]},{"level":3,"title":"git设置代理","slug":"git设置代理","link":"#git设置代理","children":[]},{"level":3,"title":"设置代理","slug":"设置代理","link":"#设置代理","children":[]},{"level":3,"title":"git 版本回退并强制推送","slug":"git-版本回退并强制推送","link":"#git-版本回退并强制推送","children":[]},{"level":3,"title":"在gitlab上删除分支后，本地git branch -r还能看到","slug":"在gitlab上删除分支后-本地git-branch-r还能看到","link":"#在gitlab上删除分支后-本地git-branch-r还能看到","children":[]},{"level":3,"title":"删除git、gitlab的分支","slug":"删除git、gitlab的分支","link":"#删除git、gitlab的分支","children":[]},{"level":3,"title":"gitlab设置分支保护","slug":"gitlab设置分支保护","link":"#gitlab设置分支保护","children":[]}],"relativePath":"git/README.md"}'),r={name:"git/README.md"};function n(g,t,o,s,h,c){return e(),a("div",null,t[0]||(t[0]=[l(`<h1 id="git命令" tabindex="-1">git命令 <a class="header-anchor" href="#git命令" aria-hidden="true">#</a></h1><h3 id="git-查看当前分支从哪个分支创建的" tabindex="-1">git 查看当前分支从哪个分支创建的 <a class="header-anchor" href="#git-查看当前分支从哪个分支创建的" aria-hidden="true">#</a></h3><p>使用git reflog --date=local | grep +分支名</p><h3 id="git-删除某一次的commit提交记录-并且不保留记录" tabindex="-1">git 删除某一次的commit提交记录，并且不保留记录 <a class="header-anchor" href="#git-删除某一次的commit提交记录-并且不保留记录" aria-hidden="true">#</a></h3><ul><li>参看链接<a href="https://tiven.cn/p/b87d03eb/" target="_blank" rel="noreferrer">https://tiven.cn/p/b87d03eb/</a></li><li>git log 查看提交记录</li><li>git rebase -i &lt;commit_id&gt; //commit_id为你要删除的commit的上一次commit</li><li>输入i进行编辑，将需要删除的commit之前的pick修改为drop</li><li>shift zz保存退出</li><li>最后：解决冲突，强制推送更新到远程</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#BABED8;">git add </span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">                   # 冲突时使用</span></span>
<span class="line"><span style="color:#BABED8;">git commit </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">m </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">new commit</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">  # 冲突时使用</span></span>
<span class="line"><span style="color:#BABED8;">git rebase </span><span style="color:#89DDFF;">--</span><span style="color:#89DDFF;font-style:italic;">continue</span><span style="color:#BABED8;">       # 冲突时使用</span></span>
<span class="line"><span style="color:#BABED8;">git push origin master </span><span style="color:#89DDFF;">-</span></span>
<span class="line"></span></code></pre></div><h3 id="git-用一次新的commit来回滚之前的commit-并且保留记录" tabindex="-1">git 用一次新的commit来回滚之前的commit,并且保留记录 <a class="header-anchor" href="#git-用一次新的commit来回滚之前的commit-并且保留记录" aria-hidden="true">#</a></h3><ul><li>git revert &lt;commit_id&gt; 如果是回滚之前的merge的commit使用git revert -m 1 &lt;commit_id&gt;</li></ul><h3 id="gitlab网页-分支合并-冲突处理" tabindex="-1">gitlab网页 分支合并 冲突处理 <a class="header-anchor" href="#gitlab网页-分支合并-冲突处理" aria-hidden="true">#</a></h3><ul><li><a href="https://blog.csdn.net/magic_kid_2010/article/details/100977008" target="_blank" rel="noreferrer">https://blog.csdn.net/magic_kid_2010/article/details/100977008</a></li></ul><h3 id="查看git的所有配置" tabindex="-1">查看git的所有配置 <a class="header-anchor" href="#查看git的所有配置" aria-hidden="true">#</a></h3><p>git config --global -l</p><h3 id="git代理设置终极方案" tabindex="-1">git代理设置终极方案 <a class="header-anchor" href="#git代理设置终极方案" aria-hidden="true">#</a></h3><ul><li>git config --global http.proxy 127.0.0.1:7890</li><li>git config --global https.proxy 127.0.0.1:7890</li><li>git config --global remote.origin.proxy 127.0.0.1:7890</li><li><a href="https://www.jianshu.com/p/cba0877e1fc6" target="_blank" rel="noreferrer">来源地址</a></li></ul><h3 id="最新git代理设置方案" tabindex="-1">最新git代理设置方案 <a class="header-anchor" href="#最新git代理设置方案" aria-hidden="true">#</a></h3><ul><li><a href="http://xn--github-295jm64c.com" target="_blank" rel="noreferrer">只对github.com</a></li><li>git config --global http.<a href="https://github.com.proxy" target="_blank" rel="noreferrer">https://github.com.proxy</a> socks5://127.0.0.1:1080</li><li>取消代理 git config --global --unset http.<a href="https://github.com.proxy" target="_blank" rel="noreferrer">https://github.com.proxy</a>)</li></ul><h3 id="git设置代理" tabindex="-1">git设置代理 <a class="header-anchor" href="#git设置代理" aria-hidden="true">#</a></h3><h4 id="只为github设置代理" tabindex="-1">只为github设置代理 <a class="header-anchor" href="#只为github设置代理" aria-hidden="true">#</a></h4><ul><li>1、http.https:</li><li>git config --global http.<a href="https://github.com.proxy" target="_blank" rel="noreferrer">https://github.com.proxy</a> <a href="https://127.0.0.1:7890" target="_blank" rel="noreferrer">https://127.0.0.1:7890</a></li></ul><h4 id="取消代理" tabindex="-1">取消代理 <a class="header-anchor" href="#取消代理" aria-hidden="true">#</a></h4><ul><li>git config --global --unset http.<a href="https://github.com.proxy" target="_blank" rel="noreferrer">https://github.com.proxy</a></li></ul><h3 id="设置代理" tabindex="-1">设置代理 <a class="header-anchor" href="#设置代理" aria-hidden="true">#</a></h3><p>git config --global --add remote.origin.proxy &quot;[<a href="http://127.0.0.1:7890" target="_blank" rel="noreferrer">http://127.0.0.1:7890</a>]&quot;</p><h3 id="git-版本回退并强制推送" tabindex="-1">git 版本回退并强制推送 <a class="header-anchor" href="#git-版本回退并强制推送" aria-hidden="true">#</a></h3><p>git log //查看commitID git reset --hard 需要回退的commitID git push -f //强制推送</p><h3 id="在gitlab上删除分支后-本地git-branch-r还能看到" tabindex="-1">在gitlab上删除分支后，本地git branch -r还能看到 <a class="header-anchor" href="#在gitlab上删除分支后-本地git-branch-r还能看到" aria-hidden="true">#</a></h3><ol><li><p>git remote prune --dry-run origin 查看当前有哪些是该消失还存在的分支</p></li><li><p>git remote prune origin 删除上面展示的所有分支</p></li><li><p>git fetch --prune origin</p></li></ol><ul><li>如果没有结果输出说明已经删除完成了</li></ul><h3 id="删除git、gitlab的分支" tabindex="-1">删除git、gitlab的分支 <a class="header-anchor" href="#删除git、gitlab的分支" aria-hidden="true">#</a></h3><p>删除本地分支 git branch -d dev 【git branch -参数 本地分支名称】 删除远程分支 git push origin --delete dev 【git push origin --参数 远程分支名称】</p><h3 id="gitlab设置分支保护" tabindex="-1">gitlab设置分支保护 <a class="header-anchor" href="#gitlab设置分支保护" aria-hidden="true">#</a></h3><p><a href="https://www.cnblogs.com/panwenbin-logs/p/11212359.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/panwenbin-logs/p/11212359.html</a></p>`,32)]))}const b=i(r,[["render",n]]);export{d as __pageData,b as default};
