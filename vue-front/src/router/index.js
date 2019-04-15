import Vue from 'vue';
import Router from 'vue-router';
import login from '@/views/login.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name:'Home',
			component: login,
			meta: {
				requiresAuth: false,
				checkPrivilege: false,
			},
        },
		{
			path: '/login',
			name: 'login',
			component: login,
			meta: {
				requiresAuth: false,
				checkPrivilege: false,
			},
		},
    ]
})
