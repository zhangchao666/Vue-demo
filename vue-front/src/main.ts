import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'  // 默认主题
// import '../static/css/theme-green/index.css';       // 浅绿色主题
import locale from 'element-ui/lib/locale/lang/en';
Vue.use(ElementUI, {locale});
Vue.use(ElementUI);
Vue.prototype.$axios = axios;

router.beforeEach((to, from, next) => {
    const token = window.localStorage.getItem('token')
    if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
        if (token) {
            Vue.prototype.$axios.defaults.headers.common['Authorization'] = token;
            next();
        }
        else {
            next({
                path: '/login',
                query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    }
    else {
        next();
    }
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
