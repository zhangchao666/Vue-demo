import Vue from 'vue';
import axios from 'axios';
import Router from '@/router';
import config from '@/config/index';
import { Loading } from 'element-ui';
const { axiosconfig, axioscallback } = config;
// 动态设置本地和线上接口域名
const Axios = axios.create(axiosconfig);

// Axios的拦截器和配置要放在export外,防止拦截器多次调用引起混淆
Axios.interceptors.request.use(
	(conf) => {
		//const userInfo: any = JSON.parse(localStorage.getItem('userInfo') || '');
		//conf.headers.Authorization = userInfo.username;
		conf.headers.Authorization = 'Basic ' + btoa("admin" + ':' + "admin");
		return conf;
	},
	(error) => {
		axioscallback.showError(error, 'request');
		return Promise.reject(error);
	},
);

Axios.interceptors.response.use(
	(response) => {
		if (response.status < 400) {
			return Promise.resolve(response.data);
		} else if (response.status === 401) {
			localStorage.removeItem('authToken');
			localStorage.removeItem('userInfo');
			//window.location.reload();
			axioscallback.showError(response, 'response');
			return Promise.reject(response);
		} else {
			Loading.service({
				background: "transparent"
			}).close();
			axioscallback.showError(response, 'response');
			return Promise.reject(response);
		}
	},
	(error) => {
		axioscallback.showError(error, 'response');
		return Promise.reject(error);
	}
);
export default Axios;
