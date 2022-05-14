<template><h1 id="learndocker" tabindex="-1"><a class="header-anchor" href="#learndocker" aria-hidden="true">#</a> learndocker</h1>
<h4 id="首先通过xshell连接云主机" tabindex="-1"><a class="header-anchor" href="#首先通过xshell连接云主机" aria-hidden="true">#</a> 首先通过xshell连接云主机</h4>
<ul>
<li>
<p>yum update   升级所有的包，更新系统</p>
</li>
<li>
<p>yum install git   安装Git</p>
</li>
<li>
<p>mkdir /usr/projects    新建用户项目目录</p>
</li>
<li>
<p>ssh-keygen -t rsa -b 4096 -C &quot;1902305073@qq.com&quot;<br>
生成github ssh公钥 -t rsa使用rsa算法 -b 4096大小字节为4096</p>
</li>
<li>
<p>cat /root/.ssh/id_rsa.pub<br>
查找生成的秘钥并拷贝出来并关联到github上</p>
</li>
<li>
<p>clone github上面的项目到projects中</p>
</li>
<li>
<p>安装nvm
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash</p>
</li>
<li>
<p>将nvm配置到环境变量中,执行以下脚本
. /root/.bashrc</p>
</li>
<li>
<p>安装最新的稳定版本的node
nvm install stable</p>
</li>
<li>
<p>安装nrm用来切换npm源
npm install nrm -g</p>
</li>
<li>
<p>将npm切换为taobao源
nrm use taobao</p>
</li>
</ul>
<h4 id="安装docker" tabindex="-1"><a class="header-anchor" href="#安装docker" aria-hidden="true">#</a> 安装docker</h4>
<ul>
<li>yum install -y yum-utils <br>
device-mapper-persistent-data <br>
lvm2
首先安装依赖包</li>
<li>yum-config-manager <br>
--add-repo <br>
https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
添加阿里云镜像</li>
<li>yum install docker-ce docker-ce-cli containerd.io	
安装docker-ce 社区版docker（免费）</li>
</ul>
<h4 id="在docker中安装系统需要阿里云镜像加速" tabindex="-1"><a class="header-anchor" href="#在docker中安装系统需要阿里云镜像加速" aria-hidden="true">#</a> 在docker中安装系统需要阿里云镜像加速</h4>
<ul>
<li>首先新建docker文件 mkdir -p /etc/docker</li>
<li>配置镜像加速器 阿里云网址（<a href="https://cr.console.aliyun.com/cn-beijing/instances/mirrors" target="_blank" rel="noopener noreferrer"><ExternalLinkIcon/></a>）</li>
<li>tee /etc/docker/daemon.json &lt;&lt;-'EOF'
{
&quot;registry-mirrors&quot;: [&quot;https://40lrm95m.mirror.aliyuncs.com&quot;]
}
EOF</li>
<li>systemctl restart docker 重载docker</li>
<li>systemctl restart docker 重启docker</li>
<li>npm i pm2 -g  安装pm2</li>
</ul>
</template>
