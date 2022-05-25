# git命令
### git 删除某一次的commit提交记录，并且不保留记录
- 参看链接https://tiven.cn/p/b87d03eb/
- git log 查看提交记录
- git rebase -i <commit_id> //commit_id为你要删除的commit的上一次commit
- 输入i进行编辑，将需要删除的commit之前的pick修改为drop
- shift zz保存退出
- 最后：解决冲突，强制推送更新到远程
```js
git add .                   # 冲突时使用
git commit -m "new commit"  # 冲突时使用
git rebase --continue       # 冲突时使用
git push origin master -
```
### git 用一次新的commit来回滚之前的commit,并且保留记录
- git revert <commit_id> 如果是回滚之前的merge的commit使用git revert -m 1 <commit_id>

### gitlab网页 分支合并 冲突处理
- https://blog.csdn.net/magic_kid_2010/article/details/100977008

### 查看git的所有配置
git config --global -l 

### 最新git代理设置方案
- 只对github.com
- git config --global http.https://github.com.proxy socks5://127.0.0.1:1080
- 取消代理 git config --global --unset http.https://github.com.proxy)

### git设置代理
#### 只为github设置代理
- 1、http.https: 
- git config --global http.https://github.com.proxy https://127.0.0.1:7890
#### 取消代理
- git config --global --unset http.https://github.com.proxy

### 设置代理
git config --global --add remote.origin.proxy "[http://127.0.0.1:7890]"

### git 版本回退并强制推送
git log //查看commitID
git reset --hard 需要回退的commitID
git push -f //强制推送


### 在gitlab上删除分支后，本地git branch -r还能看到
1. git remote prune --dry-run origin 查看当前有哪些是该消失还存在的分支

2. git remote prune origin 删除上面展示的所有分支

3. git fetch --prune origin

- 如果没有结果输出说明已经删除完成了

### 删除git、gitlab的分支
删除本地分支
git branch -d dev 【git branch -参数 本地分支名称】
删除远程分支
git push origin --delete dev 【git push origin --参数 远程分支名称】  
### gitlab设置分支保护
https://www.cnblogs.com/panwenbin-logs/p/11212359.html