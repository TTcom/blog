<template><h1 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> nginx</h1>
<div class="custom-container tip"><p class="custom-container-title">Nginx</p>
<p>Nginx是一款轻量级的HTTP服务器，采用事件驱动的异步非阻塞处理方式框架，这让其具有极好的IO性能，时常用于服务端的反向代理和负载均衡。</p>
</div>
<div class="custom-container tip"><p class="custom-container-title"><span style="color:#999;font-weight: initial;"><a href="https://juejin.im/post/5bacbd395188255c8d0fd4b2">猛戳详细原文介绍</a></span> 🎉 💯</p>
<p> </p>
</div>
<p>1、nginx转发和跨域配置</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
server {
        listen       80;     //监听的端口
        server_name  test.com;          //这里可以自定义server_name

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {       //转发的地址                         
            proxy_pass   http://192.168.71.12:8085;  
        }
        location ~ /cgi-bin {         //解决跨域：以/cgi-bin开头的跨域请求全部转发到下面的地址
                 proxy_pass   https://qyapi.weixin.qq.com;
        }

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>2、nginx在linux下常用的命令</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>linux 查看当前路径命令：pwd
切换到目录/usr/local/nginx/sbin，/usr/local为nginx的默认安装目录
#启动
./nginx
#查看命令帮助
./nginx -h
验证配置文件状态
./nginx -t
#编辑配置文件
vim /usr/local/nginx/conf/nginx.conf# 重新载入配置文件./nginx -s reload  # 重启 Nginx./nginx -s reopen# 停止 Nginx./nginx -s stop(quit)
如果我们的Nginx运行在80端口，那么就可以通过netstat -anp | grep :80命令来判断Nginx是否启动。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>3、nginx在window下常用命令</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>1、启动：

C:\server\nginx-1.0.2>start nginx

或

C:\server\nginx-1.0.2>nginx.exe

注：建议使用第一种，第二种会使你的cmd窗口一直处于执行中，不能进行其他命令操作。

2、停止：

C:\server\nginx-1.0.2>nginx.exe -s stop

或

C:\server\nginx-1.0.2>nginx.exe -s quit
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div></template>
