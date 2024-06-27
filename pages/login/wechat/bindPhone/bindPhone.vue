<template>
	<view class="container">
		<view class="title">
			绑定手机号
		</view>
		<view class="list">
			<view class="item">
				<view class="top flexCenter">
					<image
						src="@/static/images/mine/phone.png"
						mode=""
					></image>
					手机号
				</view>
				<view class="bottom flexBetween">
					<input
						type="text"
						placeholder="请输入手机号"
						v-model="form.mobile"
					>
				</view>
			</view>
			<view class="item">
				<view class="top flexCenter">
					<image
						src="@/static/images/mine/pwd.png"
						mode=""
					></image>
					密码
				</view>
				<view class="bottom flexBetween">
					<input
						type="text"
						:password="true"
						placeholder="请输入密码"
						v-model="form.password"
					>
				</view>
			</view>
		</view>
		<button
			class="submit"
			@tap="query"
		>确认</button>
	</view>
</template>

<script>
import { Login } from '@/config/API.js'
import { toast } from '@/utils/uni.js'
import { isTel } from '@/config/utils.js'
export default {
	data () {
		return {
			form: {
				mobile: '',
				password: ''
			}
		};
	},
	methods: {
		// 绑定手机号
		query () {
			if (!this.form.mobile || !isTel(this.form.mobile)) {
				toast('请输入正确手机号')
				return
			}else if(!this.form.password) {
				toast('请输入密码')
				return
			}
			Login.bindMobile(this.form).then(res => {
				uni.removeStorageSync('userinfo')
				uni.removeStorageSync('token')
				uni.setStorageSync("userinfo", res.data.userinfo)
				uni.setStorageSync("token", res.data.userinfo.token)
				toast('绑定成功')
				setTimeout(() => {
					uni.reLaunch({
						url: "/pages/home/home"
					})
				}, 1000)
			})
		},

	}
}
</script>

<style lang="scss" scoped>
.container {
	padding: 0 48rpx;
}

.title {
	font-size: 60rpx;
	font-family: PingFang SC-Bold, PingFang SC;
	font-weight: bold;
	color: #272729;
	margin-top: 50rpx;
}
.marked {
	font-size: 26rpx;
	font-family: PingFang SC-Medium, PingFang SC;
	font-weight: 500;
	color: #666666;
}
.list {
	margin-top: 47rpx;
	.item {
		.top {
			margin-top: 43rpx;
			margin-bottom: 18rpx;

			font-size: 30rpx;
			font-family: PingFang SC-Bold, PingFang SC;
			font-weight: bold;
			color: #272729;

			image {
				width: 36rpx;
				height: 36rpx;
				margin-right: 11rpx;
			}
		}
		.bottom {
			margin-top: 33rpx;
			height: 76rpx;
			line-height: 76rpx;
			font-size: 30rpx;
			font-family: PingFang SC-Bold, PingFang SC;
			font-weight: bold;
			color: #333333;
			border-bottom: 1px solid #e1e1e6;
			.button {
				width: 176rpx;
				height: 64rpx;
				line-height: 64rpx;
				text-align: center;
				background: linear-gradient(270deg, #ff0000 0%, #fe5454 100%);
				border-radius: 70rpx 70rpx 70rpx 70rpx;

				font-size: 24rpx;
				font-family: PingFang SC-Regular, PingFang SC;
				font-weight: 400;
				color: #ffffff;
			}
		}
	}
}
.submit {
	margin-top: 83rpx;
}
</style>