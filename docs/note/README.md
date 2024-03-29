# chrome检测内存泄漏
### 通过Chrome控制台检测代码是否产生内存泄漏
- 产生内存泄漏的页面
``` html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Event Leak Demo</title>
    <style>
    </style>
</head>
<body>
<div id="app">
    <h1>这个页面存在一个内存泄露，当反复切换路由之后，Vue实例无法得到释放</h1>
    <p>
        <router-link to="/foo">Go to Foo</router-link>
        <router-link to="/bar">Go to Bar</router-link>
    </p>
    <router-view></router-view>
</div>
</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue-router/3.0.2/vue-router.js"></script>
<script>
    const Foo = {
        template: `
        <div>
            <p>the window width: {{width}}px</p>
            <p>the window height: {{height}}px</p>
        </div>`,
        data: function() {
            return {
                width: window.innerWidth,
                height: window.innerHeight
            }
        },
        mounted() {
            window.addEventListener('resize', () => {
                this.width = window.innerWidth;
                this.height = window.innerHeight;
            });
        }
    };
    const Bar = { template: '<div>bar</div>' };
    const routes = [
        { path: '/foo', component: Foo },
        { path: '/bar', component: Bar }
    ];
    const router = new VueRouter({
        routes // short for `routes: routes`
    });
    new Vue({
        router
    }).$mount('#app')
</script>
</html>
```
- 点击start后多次来回切换路由可以观察到控制台上有蓝色的线条明显升高，说明产生了内存泄漏
![foo](/leak1.png){data-zoomable}
![foo](/leak2.png){data-zoomable}
- 修复之后，Vue实例可以被回收
``` html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Event Leak Demo</title>
    <style>
    </style>
</head>
<body>
<div id="app">
    <h1>修复之后，Vue实例可以被回收</h1>
    <p>
        <router-link to="/foo">Go to Foo</router-link>
        <router-link to="/bar">Go to Bar</router-link>
    </p>
    <router-view></router-view>
</div>
</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue-router/3.0.2/vue-router.js"></script>
<script>
    const Foo = {
        template: `
        <div>
            <p>the window width: {{width}}px</p>
            <p>the window height: {{height}}px</p>
        </div>`,
        data: function() {
            return {
                width: window.innerWidth,
                height: window.innerHeight
            }
        },
        mounted() {
            this.resizeFunc = () => {
                this.width = window.innerWidth;
                this.height = window.innerHeight;
            };
            window.addEventListener('resize', this.resizeFunc);
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.resizeFunc);
            this.resizeFunc = null;
        }
    };
    const Bar = { template: '<div>bar</div>' };
    const routes = [
        { path: '/foo', component: Foo },
        { path: '/bar', component: Bar }
    ];
    const router = new VueRouter({
        routes // short for `routes: routes`
    });
    const app = new Vue({
        router
    }).$mount('#app')
</script>
</html>

```
![foo](/leak3.png){data-zoomable}