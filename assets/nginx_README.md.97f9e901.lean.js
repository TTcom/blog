import{_ as s,o as a,c as l,a as e}from"./app.7c722b35.js";const d=JSON.parse('{"title":"nginx","description":"","frontmatter":{},"headers":[{"level":2,"title":"nginx转发和跨域配置","slug":"nginx转发和跨域配置","link":"#nginx转发和跨域配置","children":[]},{"level":2,"title":"nginx在linux下常用的命令","slug":"nginx在linux下常用的命令","link":"#nginx在linux下常用的命令","children":[]},{"level":2,"title":"nginx在window下常用命令","slug":"nginx在window下常用命令","link":"#nginx在window下常用命令","children":[]}],"relativePath":"nginx/README.md"}'),p={name:"nginx/README.md"};function i(c,n,t,o,r,g){return a(),l("div",null,n[0]||(n[0]=[e(`<h1 id="nginx" tabindex="-1">nginx <a class="header-anchor" href="#nginx" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">Nginx</p><p>Nginx是一款轻量级的HTTP服务器，采用事件驱动的异步非阻塞处理方式框架，这让其具有极好的IO性能，时常用于服务端的反向代理和负载均衡。</p></div><div class="tip custom-block"><p class="custom-block-title"><span style="color:#999;font-weight:initial;"><a href="https://juejin.im/post/5bacbd395188255c8d0fd4b2" target="_blank" rel="noreferrer">猛戳详细原文介绍</a></span> 🎉 💯</p><p> </p></div><h2 id="nginx转发和跨域配置" tabindex="-1">nginx转发和跨域配置 <a class="header-anchor" href="#nginx转发和跨域配置" aria-hidden="true">#</a></h2><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#BABED8;">server {</span></span>
<span class="line"><span style="color:#BABED8;">        listen       80;     //监听的端口</span></span>
<span class="line"><span style="color:#BABED8;">        server_name  test.com;          //这里可以自定义server_name</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">        #charset koi8-r;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">        #access_log  logs/host.access.log  main;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">        location / {       //转发的地址                         </span></span>
<span class="line"><span style="color:#BABED8;">            proxy_pass   http://192.168.71.12:8085;  </span></span>
<span class="line"><span style="color:#BABED8;">        }</span></span>
<span class="line"><span style="color:#BABED8;">        location ~ /cgi-bin {         //解决跨域：以/cgi-bin开头的跨域请求全部转发到下面的地址</span></span>
<span class="line"><span style="color:#BABED8;">                 proxy_pass   https://qyapi.weixin.qq.com;</span></span>
<span class="line"><span style="color:#BABED8;">        }</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="nginx在linux下常用的命令" tabindex="-1">nginx在linux下常用的命令 <a class="header-anchor" href="#nginx在linux下常用的命令" aria-hidden="true">#</a></h2><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#BABED8;">linux 查看当前路径命令：pwd</span></span>
<span class="line"><span style="color:#BABED8;">切换到目录/usr/local/nginx/sbin，/usr/local为nginx的默认安装目录</span></span>
<span class="line"><span style="color:#BABED8;">#启动</span></span>
<span class="line"><span style="color:#BABED8;">./nginx</span></span>
<span class="line"><span style="color:#BABED8;">#查看命令帮助</span></span>
<span class="line"><span style="color:#BABED8;">./nginx -h</span></span>
<span class="line"><span style="color:#BABED8;">验证配置文件状态</span></span>
<span class="line"><span style="color:#BABED8;">./nginx -t</span></span>
<span class="line"><span style="color:#BABED8;">#编辑配置文件</span></span>
<span class="line"><span style="color:#BABED8;">vim /usr/local/nginx/conf/nginx.conf# 重新载入配置文件./nginx -s reload  # 重启 Nginx./nginx -s reopen# 停止 Nginx./nginx -s stop(quit)</span></span>
<span class="line"><span style="color:#BABED8;">如果我们的Nginx运行在80端口，那么就可以通过netstat -anp | grep :80命令来判断Nginx是否启动。</span></span>
<span class="line"></span></code></pre></div><h2 id="nginx在window下常用命令" tabindex="-1">nginx在window下常用命令 <a class="header-anchor" href="#nginx在window下常用命令" aria-hidden="true">#</a></h2><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#BABED8;">1、启动：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">C:\\server\\nginx-1.0.2&gt;start nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">或</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">C:\\server\\nginx-1.0.2&gt;nginx.exe</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">注：建议使用第一种，第二种会使你的cmd窗口一直处于执行中，不能进行其他命令操作。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">2、停止：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">C:\\server\\nginx-1.0.2&gt;nginx.exe -s stop</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">或</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">C:\\server\\nginx-1.0.2&gt;nginx.exe -s quit</span></span>
<span class="line"></span></code></pre></div>`,9)]))}const B=s(p,[["render",i]]);export{d as __pageData,B as default};
