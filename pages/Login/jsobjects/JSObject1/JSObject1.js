export default {
		url() {
		if(appsmith.URL.fullPath.includes("cards-tracking-prod")){
			return{"BaseUrl":'https://api.rupeek.co'}
		} else {
			return{"BaseUrl":'https://api-qa.rupeek.co'}
		}

	},
	
	
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
	}
	
}