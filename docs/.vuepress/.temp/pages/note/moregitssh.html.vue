<template><h1 id="git配置多个ssh-key" tabindex="-1"><a class="header-anchor" href="#git配置多个ssh-key" aria-hidden="true">#</a> Git配置多个SSH key</h1>
<p>1、执行命令 ssh-keygen -t rsa -C &quot;email@company.com&quot; -f ~/.ssh/id_rsa <br/></p>
<ul>
<li>email@company.com这个邮箱是你的仓库绑定的邮箱</li>
<li>id_rsa 是你本地生成ssh文件的文件名称这里可以自己命名</li>
<li>然后一路回车就可以了</li>
</ul>
<p>接下来在config文件中进行配置（没有的话需要新建一个config文件）
config文件示例</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
# github
Host github.com
    HostName github.com
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/github_rsa
    User dayingxiong

# gitee
Host gitee.com
    HostName gitee.com
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/gitee_gmail
    User captain

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="查看ssh-key是否添加成功" tabindex="-1"><a class="header-anchor" href="#查看ssh-key是否添加成功" aria-hidden="true">#</a> 查看SSH Key是否添加成功</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>ssh <span class="token operator">-</span><span class="token constant">T</span> git@gitee<span class="token punctuation">.</span>com
ssh <span class="token operator">-</span><span class="token constant">T</span> git@github<span class="token punctuation">.</span>com
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>///下面是一些解释可以忽略不看</p>
<ul>
<li>//默认的输出文件就是根目录下的.ssh/id_rsa 你需要重新指定一个文件名
//如：.ssh/id_rsa_emal1 文件名如何定义自行决定
Enter file in which to save the key (/Users/a58/.ssh/id_rsa): <!-- 这里填写你要生成的ssh的文件--></li>
<li>接下来一路回车</li>
<li>在你本地的~/.ssh/ 下面新建config文件 文件里面添加如下内容</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">config文件中的内容</p>
<p><span>#</span> gitlab     //自己任意定义的名字  <br>
Host github.com    //ssh关联的主机名 <br>
Port 22     //端口号 <br>
HostName github.com     //要登录主机的主机名（建议与Host一致）<br>
PreferredAuthentications publickey <br>
IdentityFile C:\Users\tong.yifang.ssh\id_github        //生成的ssh的地址<br>
User ttcom        //登录名 <br></p>
<p>多个的话以此类推</p>
<p><span>#</span> gitlab22     //自己任意定义的名字  <br>
Host github.com    //ssh关联的主机名 <br>
Port 22     //端口号 <br>
HostName github.com     //要登录主机的主机名（建议与Host一致）<br>
PreferredAuthentications publickey <br>
IdentityFile C:\Users\tong.yifang.ssh\id_github        //生成的ssh的地址<br>
User ttcom        //登录名 <br></p>
</div>
</template>
