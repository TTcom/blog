## Git如何合并两个仓库的代码
### 应用场景
本地有一个仓库A，想用另一个仓库B的分支代码。也就是说我想要合并两个仓库的代码，应该如何操作
- 先查看本地现有的仓库A的git地址
```js
git remote -v
origin  http://gitlab.com/xxx1.git (fetch)
origin  http://gitlab.com/xxx1.git (push)
```
- 将仓库A中加入仓库B的git地址
```js
git remote add 仓库B的名称 仓库B的git地址
git remote add b http://gitlab.com/xxx2.git; 
```
- 拉取仓库B的远端地址，但是不会在本地新建分支
```js
git fetch b
```
- 再次查看git remote -v
```js
origin  http://gitlab.com/xxx1.git (fetch)
origin  http://gitlab.com/xxx1.git (push)
b       http://gitlab.com/xxx2.git (fetch)
b       http://gitlab.com/xxx2.git (push)
```
- 选择自己想要拉取的分支
```js
git merge 仓库B的地址/仓库B的某一分支
git merge b/master
注意：这里可能有冲突，自己解决一下就行
```
- 最后删除仓库B的git地址
```js
git remote rm b
```