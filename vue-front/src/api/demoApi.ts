import BaseApi from './base';

class Login extends BaseApi {
	constructor() {
		super();
	}

	public login() {
		return this.get('zhangchao/login/aaaa')
	}
}

export default new Login();