export default {
	myVar1: [],
	myVar2: {},
	Getotp () {
		aaaSendOtp.run().then(() => {

	if (aaaSendOtp?.data?.UserMsg === 'OTP already sent. Please wait for 30 secs before retrying.') {
		showAlert(aaaSendOtp?.data?.UserMsg);
	} else {
		storeValue("phone",aaaSendOtp?.data?.phone);
		navigateTo('VerifyOtp', {}, 'SAME_WINDOW');
	}
});

		//	write code here
		//	this.myVar1 = [1,2,3]
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}