<template><h3 id="向开源项目提pr" tabindex="-1"><a class="header-anchor" href="#向开源项目提pr" aria-hidden="true">#</a> 向开源项目提PR</h3>
<ul>
<li>先点击右上角的fork项目，然后项目会出现在自己的github上面</li>
<li>然后git clone 出现在自己的github上面的这个项目</li>
<li>使用git remote -v 命令，可以看到此时只与自己的远程仓库建立了连接</li>
<li>与上游建立连接，git remote add upstream https://github.com/Wechat-Group/WxJava 上游的项目地址</li>
<li>git remote -v 可以看到与上游是否建立连接</li>
<li>git checkout -b xxx 创建本地分支</li>
<li>修改代码并提交</li>
<li>提交成功后就可以Create pull request，需要检查内容和分支是否争取</li>
</ul>
</template>
