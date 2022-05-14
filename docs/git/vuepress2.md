# 部署在GitHub Pages

- 1、安装官网所示创建 .github/workflows/docs.yml 文件
- 2、docs.yml 文件需要修改的可能只有branches项，如果是master分支的话，修改为master
- 3、上传代码后会自动执行docs.yml 文件，查看是否有报错，报错如果是403可能是没有权限需要修改一下配置，如图：
![图片](/gitsetting.png)