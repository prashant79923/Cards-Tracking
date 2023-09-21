export default {
	url() {
		if(appsmith.URL.fullPath.includes("cards-tracking-prod")){
			return{"BaseUrl":'https://api.rupeek.co'}
		} else {
			return{"BaseUrl":'https://api-qa.rupeek.co'}
		}

	},

	async getAWBs() {
		let output;
		await jwtValidate.run().then(async(res) =>{
			showAlert('Your session is active!', 'success')
			const response = await getCardsData.run().then(() => {
				return getCardsData.data;
			});
			output = response.filter((awb) => awb.includes("EB")).map((awb) => {
				return {
					"AirwayBillNumber":awb,
					"cardStatus":"DISPATCHED"
				} 		
			});



		}).catch(async (error) =>{
			showAlert('Your session has expired, please re-login!', error)
			await storeValue("jwt", undefined);
			navigateTo('Login', {});
		})
		return output;
	},

	async changeCardStatus  (){
		await changeStatus.run().then((res) =>{
			showAlert('your status has updated successfully',res)
		}).catch((error) => {
			showAlert('status updation has failed',error)
		})

	}
}