<template>
	<view class="container">
		<view class="header">
			<view class="title">
				欢迎登录
			</view>
			<view class="info">
				请输入账号密码登录
			</view>
		</view>
		<view class="login">
			<view class="item">
				<view class="title flexCenter">
					<image
						src="@/static/images/login/account.png"
						mode=""
					></image>
					账号
				</view>
				<input
					type="text"
					placeholder="请输入登录账号"
					v-model="form.username"
				>
			</view>
			<view class="item">
				<view class="title flexCenter">
					<image
						src="@/static/images/login/password.png"
						mode=""
					></image>
					密码
				</view>
				<input
					type="text"
					:password="true"
					placeholder="请输入登录密码"
					v-model="form.password"
				>
			</view>
		</view>
		<button
			class="submit"
			@tap="login"
		>登录</button>
		<view class="other flexCenterCol">
			<view class="title">
				—— 其他方式登录 ——
			</view>
			<view
				class="wechat flexCenterCol"
				@tap="wxlogin"
			>
				<image
					src="@/static/images/login/wechat.png"
					mode=""
				></image>
				<view class="info">
					微信登录
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { goPage, toast, setLocal, getLocal } from '@/utils/uni'
export default {
	data () {
		return {
			form: {
				username: '',
				password: ''
			}
		};
	},
	mounted () {
		let token = getLocal('token')
		if (token) {
			uni.reLaunch({
				url: "/pages/home/home"
			})
		}
	},
	methods: {
		goPage,
		wxlogin () {
			setTimeout(() => {
				goPage('/pages/login/wechat/wechat')
			}, 1000)
		},
		login () {
			var that = this;
			that.$http.post('app/auth/login', {
				username: that.form.username,
				password: that.form.password
			}, function(res) {
				if (res.token != '') {
					setLocal('token',res.token)
					var user = {
						"companyId":res.user.user.companyId,
						"token": res.token,
						"id":res.user.user.id,
						"phone":res.user.user.phone,
						"avatarPath":res.user.user.avatarPath,
						"nickName":res.user.user.nickName
						}
					that.$us.setUserInfo(user);
					that.$emit('success')
				} else {
					that.$uti.alert('登陆失败');
				}
			
				
			})

		}
	}
}
</script>

<style lang="scss" scoped>
/* 头部样式 */
.header {
	margin: 46rpx 0 94rpx 41rpx;

	.title {
		font-size: 60rpx;
		font-family: PingFang SC-Bold, PingFang SC;
		font-weight: bold;
		color: #272729;
		text-align: left;
	}

	.info {
		font-size: 26rpx;
		font-family: PingFang SC-Medium, PingFang SC;
		font-weight: 500;
		// color: #666666;
	}
}

/* 登录样式 */
.login {
	margin-left: 41rpx;
	margin-right: 53rpx;
	.item {
		border-bottom: 1px solid #e1e1e6;
		margin-bottom: 47rpx;
		padding-bottom: 17rpx;

		.title {
			font-size: 30rpx;
			font-family: PingFang SC-Bold, PingFang SC;
			font-weight: bold;
			color: #272729;
			margin-bottom: 34rpx;

			image {
				width: 36rpx;
				height: 36rpx;
				margin-right: 12rpx;
			}
		}

		input {
			width: 100%;
			height: 42rpx;
			font-size: 30rpx;
			font-family: PingFang SC-Regular, PingFang SC;
			font-weight: 400;
			// color: #AEAEBD;
		}
	}
}
.submit {
	margin-top: 49rpx;
	margin-bottom: 128rpx;
	width: 656rpx;
	height: 88rpx;
	background: linear-gradient(270deg, #ff0000 0%, #fe5454 100%);
	border-radius: 70rpx 70rpx 70rpx 70rpx;
	font-size: 32rpx;
	font-family: PingFang SC-Medium, PingFang SC;
	font-weight: 500;
	color: #ffffff;
}
.other {
	.title {
		font-size: 24rpx;
		font-family: PingFang-SC-Medium-, PingFang-SC-Medium;
		font-weight: normal;
		color: #aeaebd;
		margin-bottom: 29rpx;
	}
	.wechat {
		image {
			width: 76rpx;
			height: 76rpx;
			margin-bottom: 13rpx;
		}
		.info {
			font-size: 24rpx;
			font-family: PingFang SC-Regular, PingFang SC;
			font-weight: 400;
			color: #272729;
		}
	}
}
</style>