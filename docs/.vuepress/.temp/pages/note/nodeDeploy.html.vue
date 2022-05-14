<template><h1 id="node项目部署" tabindex="-1"><a class="header-anchor" href="#node项目部署" aria-hidden="true">#</a> node项目部署</h1>
<div class="custom-container tip"><p class="custom-container-title"><span style="color:#999;font-weight: initial;">使用pm2工具进行快速部署</span></p>
<p><a href="https://blog.csdn.net/chengxuyuanyonghu/article/details/74910875" target="view_window">pm2常用的命令</a>
 </p>
</div>
<ul>
<li>项目部署常用命令
<ul>
<li>
<p>rm -rf dist //删除指定的文件夹dist</p>
</li>
<li>
<p>rm -r dist.zip //删除指定的文件dist.zip</p>
</li>
<li>
<p>rz //可以上传文件不能上传文件夹</p>
</li>
<li>
<p>unzip dist.zip //解压dist文件</p>
</li>
<li>
<p>pm2 stop all //停止所有的项目</p>
</li>
<li>
<p>pm2 start app.js //运行app.js</p>
</li>
<li>
<p>vi app.js //修改app.js文件进入修改文件后按i后进行修改，按esc然后再按shift+z+z退出并保存文件</p>
</li>
</ul>
</li>
</ul>
</template>
