export default {
	async myFun2 () {
		const user = AAALogin?.data?.user;
		const jwt = AAALogin?.data?.token;
		if (user){
			const roles = ['support'];
			if ((roles && _.intersection(roles, _.map(user.roles, role => role.name)).length === 0)) {
				showAlert('You are not authorized to use this dashboard');
				navigateTo('Login',{});
			} else if(jwt){
				
				await storeValue('jwt', jwt);
				navigateTo('Tracking App', {});
			}
		} else {
			showAlert('Invalid username/password');
		}
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	},
	async myFun1 () {
		const error = AAALogin?.data?.Error;
		console.log(error);

		if (error === 'E_INVALID_OTP') {
			showAlert('OTP is invalid', 'error')
		} else if (error === 'E_OTP_EXPIRED') {
			showAlert('OTP has expired, please generate a new one')
			navigateTo('Login')
		}

		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}