<template><h1 id="部署在github-pages" tabindex="-1"><a class="header-anchor" href="#部署在github-pages" aria-hidden="true">#</a> 部署在GitHub Pages</h1>
<ul>
<li>1、安装官网所示创建 .github/workflows/docs.yml 文件</li>
<li>2、docs.yml 文件需要修改的可能只有branches项，如果是master分支的话，修改为master</li>
<li>3、上传代码后会自动执行docs.yml 文件，查看是否有报错，报错如果是403可能是没有权限需要修改一下配置，如图：
<img src="/gitsetting.png" alt="图片"></li>
</ul>
</template>
