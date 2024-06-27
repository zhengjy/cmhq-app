<template>
	<view class="container">
		<view class="logo flexCenterCol">
			<image
				src="@/static/images/icon/logo.png"
				mode=""
			></image>
			欢迎使用极兔通达
		</view>
		<view
			class="submit flexAllCenter"
			@tap="login"
		>
			<image
				src="@/static/images/icon/wechat.png"
				mode=""
			></image>
			微信授权登录
		</view>
	</view>
</template>

<script>
import {
	Login
} from '@/config/API.js'
import {
	goPage,
	toast
} from '@/utils/uni'
export default {
	data () {
		return {

		};
	},
	methods: {
		goPage,
		login () {
			uni.login({
				complete: (res) => {
					console.log(res);
					Login.loginByWeiXin({
						code: res.code
					}).then(wxRes => {
						uni.setStorageSync("userinfo", wxRes.data.userinfo)
						uni.setStorageSync("token", wxRes.data.userinfo.token)
						if (wxRes.data.userinfo.username) {
							toast('登录成功')
							setTimeout(() => {
								uni.reLaunch({
									url: "/pages/home/home"
								})
							}, 1000)
						} else {
							toast('请绑定手机号')
							setTimeout(() => {
								goPage('/pages/login/wechat/bindPhone/bindPhone')
							}, 1000)
						}
					})
				}
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.logo {
	font-size: 36rpx;
	font-family: PingFang SC-Bold, PingFang SC;
	font-weight: bold;
	color: #333333;
	margin-top: 200rpx;

	image {
		margin-bottom: 37rpx;
		width: 200rpx;
		height: 200rpx;
	}
}

.submit {
	margin: 100rpx auto 128rpx;
	width: 656rpx;
	height: 88rpx;
	background: linear-gradient(270deg, #ff0000 0%, #fe5454 100%);
	border-radius: 70rpx 70rpx 70rpx 70rpx;
	font-size: 32rpx;
	font-family: PingFang SC-Medium, PingFang SC;
	font-weight: 500;
	color: #ffffff;

	image {
		width: 44rpx;
		height: 44rpx;
		margin-right: 20rpx;
	}
}
</style>