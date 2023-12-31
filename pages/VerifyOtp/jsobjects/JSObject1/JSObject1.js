export default {
	url() {
		if(appsmith.URL.fullPath.includes("cards-tracking-prod")){
			return{"BaseUrl":'https://api.rupeek.co'}
		} else {
			return{"BaseUrl":'https://api-qa.rupeek.co'}
		}

	},
	async loginAAA () {
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
	async otpExpireCheck () {
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