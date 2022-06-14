import{_ as n,b as s}from"./app.78486257.js";const a={},e=s(`<h1 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> nginx</h1><div class="custom-container tip"><p class="custom-container-title">Nginx</p><p>Nginx\u662F\u4E00\u6B3E\u8F7B\u91CF\u7EA7\u7684HTTP\u670D\u52A1\u5668\uFF0C\u91C7\u7528\u4E8B\u4EF6\u9A71\u52A8\u7684\u5F02\u6B65\u975E\u963B\u585E\u5904\u7406\u65B9\u5F0F\u6846\u67B6\uFF0C\u8FD9\u8BA9\u5176\u5177\u6709\u6781\u597D\u7684IO\u6027\u80FD\uFF0C\u65F6\u5E38\u7528\u4E8E\u670D\u52A1\u7AEF\u7684\u53CD\u5411\u4EE3\u7406\u548C\u8D1F\u8F7D\u5747\u8861\u3002</p></div><div class="custom-container tip"><p class="custom-container-title"><span style="color:#999;font-weight:initial;"><a href="https://juejin.im/post/5bacbd395188255c8d0fd4b2">\u731B\u6233\u8BE6\u7EC6\u539F\u6587\u4ECB\u7ECD</a></span> \u{1F389} \u{1F4AF}</p><p>\u2002</p></div><p>1\u3001nginx\u8F6C\u53D1\u548C\u8DE8\u57DF\u914D\u7F6E</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>
server {
        listen       80;     //\u76D1\u542C\u7684\u7AEF\u53E3
        server_name  test.com;          //\u8FD9\u91CC\u53EF\u4EE5\u81EA\u5B9A\u4E49server_name

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {       //\u8F6C\u53D1\u7684\u5730\u5740                         
            proxy_pass   http://192.168.71.12:8085;  
        }
        location ~ /cgi-bin {         //\u89E3\u51B3\u8DE8\u57DF\uFF1A\u4EE5/cgi-bin\u5F00\u5934\u7684\u8DE8\u57DF\u8BF7\u6C42\u5168\u90E8\u8F6C\u53D1\u5230\u4E0B\u9762\u7684\u5730\u5740
                 proxy_pass   https://qyapi.weixin.qq.com;
        }

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>2\u3001nginx\u5728linux\u4E0B\u5E38\u7528\u7684\u547D\u4EE4</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>linux \u67E5\u770B\u5F53\u524D\u8DEF\u5F84\u547D\u4EE4\uFF1Apwd
\u5207\u6362\u5230\u76EE\u5F55/usr/local/nginx/sbin\uFF0C/usr/local\u4E3Anginx\u7684\u9ED8\u8BA4\u5B89\u88C5\u76EE\u5F55
#\u542F\u52A8
./nginx
#\u67E5\u770B\u547D\u4EE4\u5E2E\u52A9
./nginx -h
\u9A8C\u8BC1\u914D\u7F6E\u6587\u4EF6\u72B6\u6001
./nginx -t
#\u7F16\u8F91\u914D\u7F6E\u6587\u4EF6
vim /usr/local/nginx/conf/nginx.conf# \u91CD\u65B0\u8F7D\u5165\u914D\u7F6E\u6587\u4EF6./nginx -s reload  # \u91CD\u542F Nginx./nginx -s reopen# \u505C\u6B62 Nginx./nginx -s stop(quit)
\u5982\u679C\u6211\u4EEC\u7684Nginx\u8FD0\u884C\u572880\u7AEF\u53E3\uFF0C\u90A3\u4E48\u5C31\u53EF\u4EE5\u901A\u8FC7netstat -anp | grep :80\u547D\u4EE4\u6765\u5224\u65ADNginx\u662F\u5426\u542F\u52A8\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>3\u3001nginx\u5728window\u4E0B\u5E38\u7528\u547D\u4EE4</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>1\u3001\u542F\u52A8\uFF1A

C:\\server\\nginx-1.0.2&gt;start nginx

\u6216

C:\\server\\nginx-1.0.2&gt;nginx.exe

\u6CE8\uFF1A\u5EFA\u8BAE\u4F7F\u7528\u7B2C\u4E00\u79CD\uFF0C\u7B2C\u4E8C\u79CD\u4F1A\u4F7F\u4F60\u7684cmd\u7A97\u53E3\u4E00\u76F4\u5904\u4E8E\u6267\u884C\u4E2D\uFF0C\u4E0D\u80FD\u8FDB\u884C\u5176\u4ED6\u547D\u4EE4\u64CD\u4F5C\u3002

2\u3001\u505C\u6B62\uFF1A

C:\\server\\nginx-1.0.2&gt;nginx.exe -s stop

\u6216

C:\\server\\nginx-1.0.2&gt;nginx.exe -s quit
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,9);function r(i,l){return e}var c=n(a,[["render",r],["__file","index.html.vue"]]);export{c as default};
