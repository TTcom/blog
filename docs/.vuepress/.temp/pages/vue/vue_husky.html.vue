<template><h1 id="vue项目集成husky" tabindex="-1"><a class="header-anchor" href="#vue项目集成husky" aria-hidden="true">#</a> Vue项目集成husky</h1>
<h3 id="增加-husky和lint-staged" tabindex="-1"><a class="header-anchor" href="#增加-husky和lint-staged" aria-hidden="true">#</a> 增加  husky和lint-staged</h3>
<p>npm install husky --save-dev 或者使用下面的命令
npx husky-init and npm install
yarn add lint-staged --dev</p>
<h3 id="如果-git文件和项目文件在一个层级" tabindex="-1"><a class="header-anchor" href="#如果-git文件和项目文件在一个层级" aria-hidden="true">#</a> 如果.git文件和项目文件在一个层级</h3>
<p>&quot;prepare&quot;: &quot;husky install&quot;</p>
<h3 id="如果-git文件和项目文件不在一个层级-在父级文件中" tabindex="-1"><a class="header-anchor" href="#如果-git文件和项目文件不在一个层级-在父级文件中" aria-hidden="true">#</a> 如果.git文件和项目文件不在一个层级，在父级文件中</h3>
<p>&quot;prepare&quot;: &quot;cd .. &amp;&amp; husky install driverhomepage/.husky&quot;</p>
<h3 id="增加需要的钩子文件" tabindex="-1"><a class="header-anchor" href="#增加需要的钩子文件" aria-hidden="true">#</a> 增加需要的钩子文件</h3>
<p>yarn husky add .husky/pre-commit
yarn husky add .husky/post-commit
yarn husky add .husky/commit-msg
在对应的钩子文件下面执行对应的命令</p>
<h3 id="注意如果-git文件和项目文件不在一个层级commit-msg文件中需要先打开父级文件" tabindex="-1"><a class="header-anchor" href="#注意如果-git文件和项目文件不在一个层级commit-msg文件中需要先打开父级文件" aria-hidden="true">#</a> 注意如果.git文件和项目文件不在一个层级commit-msg文件中需要先打开父级文件</h3>
<p>cd my-app
npx --no-install commitlint --edit</p>
<h3 id="集成git-cz" tabindex="-1"><a class="header-anchor" href="#集成git-cz" aria-hidden="true">#</a> 集成git-cz</h3>
<p>npm install commitizen -D
npx commitizen init cz-customizable -D --save-exact</p>
<h3 id="新建-cz-config-js-文件" tabindex="-1"><a class="header-anchor" href="#新建-cz-config-js-文件" aria-hidden="true">#</a> 新建 .cz-config.js 文件</h3>
<p>npm i @commitlint/config-conventional @commitlint/cli -D</p>
<h3 id="新建-commitlint-config-js-文件" tabindex="-1"><a class="header-anchor" href="#新建-commitlint-config-js-文件" aria-hidden="true">#</a> 新建 commitlint.config.js 文件</h3>
<p>npx husky add .husky/commit-msg &quot;npx --no-install commitlint --edit $1&quot;</p>
<h3 id="集成commit命令" tabindex="-1"><a class="header-anchor" href="#集成commit命令" aria-hidden="true">#</a> 集成commit命令</h3>
<p>&quot;commit&quot;: &quot;git add . &amp;&amp; git-cz&quot;,</p>
<h3 id="如果-git文件和项目文件不在一个层级-在父级文件中执行" tabindex="-1"><a class="header-anchor" href="#如果-git文件和项目文件不在一个层级-在父级文件中执行" aria-hidden="true">#</a> 如果.git文件和项目文件不在一个层级，在父级文件中执行</h3>
<p>yarn add @commitlint/cli @commitlint/config-conventional cz-customizable -D</p>
<h3 id="集成提交日志-conventional-changelog-cli" tabindex="-1"><a class="header-anchor" href="#集成提交日志-conventional-changelog-cli" aria-hidden="true">#</a> 集成提交日志 conventional-changelog-cli</h3>
<p>npm i conventional-changelog-cli -D</p>
<h3 id="根目录下新建-changelog-md" tabindex="-1"><a class="header-anchor" href="#根目录下新建-changelog-md" aria-hidden="true">#</a> 根目录下新建 CHANGELOG.md</h3>
<h3 id="配置package-json" tabindex="-1"><a class="header-anchor" href="#配置package-json" aria-hidden="true">#</a> 配置package.json</h3>
<p>&quot;log&quot;: &quot;conventional-changelog -p angular -i CHANGELOG.md -s&quot;</p>
<h3 id="以上参考文章地址" tabindex="-1"><a class="header-anchor" href="#以上参考文章地址" aria-hidden="true">#</a> 以上参考文章地址</h3>
<p>https://juejin.cn/post/6963048999922171917#heading-13
https://blog.csdn.net/Banterise/article/details/115206267
https://typicode.github.io/husky/#/?id=monorepo
https://qdmana.com/2021/04/20210404032516818j.html
https://github.com/TTcom/vite-vue-ts</p>
</template>
