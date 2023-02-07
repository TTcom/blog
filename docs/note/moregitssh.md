# Git配置多个SSH key


- 执行命令 ssh-keygen -t rsa -C "email@company.com" -f ~/.ssh/id_rsa
- email@company.com这个邮箱是你的仓库绑定的邮箱
- id_rsa 是你本地生成ssh文件的文件名称这里可以自己命名
- 然后一路回车就可以了

接下来在config文件中进行配置（没有的话需要新建一个config文件）
config文件示例


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


### 查看SSH Key是否添加成功

ssh -T git@gitee.com
ssh -T git@github.com


