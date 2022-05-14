<template><h1 id="ios中嵌入web页面研发问题" tabindex="-1"><a class="header-anchor" href="#ios中嵌入web页面研发问题" aria-hidden="true">#</a> ios中嵌入web页面研发问题</h1>
<ul>
<li>1、当原生app包含下拉刷新页面的功能时，如果你的web页面中顶部有input输入框的功能，当input获取焦点时，会触发原生的下拉刷新并会失去焦点无法输入内容</li>
<li>1、 解决方案：调用原生的openWebView方法，将页面嵌入webview中进行打开，或者调用原生app的方法关闭下拉刷新的功能</li>
</ul>
</template>
