export default {
	pay(data, toUrl, type = 'wxpay') {
		var that = this;
		//#ifndef H5
		uni.requestPayment({
			provider: type,
			nonceStr: data.nonceStr,
			package: data.package,
			paySign: data.paySign,
			signType: data.signType,
			timeStamp: data.timeStamp,
			success: function(res) {
				console.log('success:' + JSON.stringify(res));
				
				uni.showToast({
					title:'支付成功',
					icon:'success'
				})
				
				if (toUrl) {
					uni.reLaunch({
						url: toUrl
					})
				}else{
					uni.setStorageSync('paySuccess',true)
				}
			},
			fail: function(err) {
				console.log('fail:' + JSON.stringify(err));
				uni.showToast({
					title:'支付失败',
					icon:'none'
				})
				if (toUrl) {
					uni.reLaunch({
						url: toUrl
					})
				}else{
					uni.setStorageSync('paySuccess',true)
				}
			}
		});
		//#endif

		//#ifdef H5
		if (type == 'wxpay') {
			that.callPay(data, toUrl);
		}
		//#endif
	},
	callPay(response, toUrl) {
		if (typeof WeixinJSBridge === "undefined") {
			if (document.addEventListener) {
				document.addEventListener('WeixinJSBridgeReady', this.onBridgeReady(response, toUrl), false);
			} else if (document.attachEvent) {
				document.attachEvent('WeixinJSBridgeReady', this.onBridgeReady(response, toUrl));
				document.attachEvent('onWeixinJSBridgeReady', this.onBridgeReady(response, toUrl));
			}
		} else {
			this.onBridgeReady(response, toUrl);
		}
	},
	onBridgeReady(response, toUrl) {
		let that = this;
		if (!response.package) {
			return;
		}

		WeixinJSBridge.invoke(
			'getBrandWCPayRequest', {
				"appId": response.appId, //公众号名称，由商户传入
				"timeStamp": response.timeStamp, //时间戳，自1970年以来的秒数
				"nonceStr": response.nonceStr, //随机串
				"package": response.package,
				"signType": 'MD5', //微信签名方式：
				"paySign": response.paySign //微信签名
			},
			function(res) {
				if (res.err_msg === "get_brand_wcpay_request:ok") {
					// 使用以上方式判断前端返回,微信团队郑重提示：
					//res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
					uni.showToast({
						title:'支付成功',
						icon:'success'
					})
					setTimeout(function() {
	
						if (toUrl) {
							uni.reLaunch({
								url: toUrl
							})
						}else{
							uni.setStorageSync('paySuccess',true)
						}
					}, 1000);
				} else {
					uni.showToast({
						title:'支付失败',
						icon:'none'
					})
				}
				WeixinJSBridge.log(response.err_msg);
			}
		);
	}
}
