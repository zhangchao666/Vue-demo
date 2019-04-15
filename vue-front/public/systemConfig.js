let host = window.location.host;
let systemConfig = {
	odlConfig: {
		baseURL: 'http://10.240.70.156:8081/',
		//baseURL: 'http://' + host + ':8181/',
		timeout: 90000,
		headers: {
			// 'X-Auth-Token': 'f2b6637ddf355a476918940289c0be016a4fe99e3b69c83d',
			'Content-Type': 'application/json',
			'Accept':'application/json'
			//'Authorization': 'Basic YWRtaW46YWRtaW4='
		},
		//validateStatus返回false时拦截器内error是报错的堆栈对象而不是含有data的error对象
		validateStatus: function(status) {
			return status <= 600; // Reject only if the status code is greater than or equal to 500
		},
		responseType: 'json',
		// withCredentials: true,
	},
	webSocketConfig: {
		baseURL: 'ws://10.240.70.156:8188',
		binaryType: 'arraybuffer',
	},
};
