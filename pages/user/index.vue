<template>
	<view>
		<image src="../../static/userBg.png" style="width:100%;position: absolute;height:300rpx"></image>
		<view class="user-box w94 flex-between items-center" @click="to('/pages/user/syset')">
			<view class="flex-start items-center" style="z-index: 99;">
				<view>
					<image src="../../static/header.png" class="head-img"></image>
				</view>
				<view style="margin-left: 14rpx;" v-if="userInfo && userInfo.id">
					<view style="font-size: 36rpx;font-weight: bold;color:#000;">
						用户{{$uti.dateFormat(userInfo.createTime,'hhmmss')}}</view>
					<view style="font-size: 28rpx;color:#323232;">ID:{{userInfo.id+10000}}</view>
				</view>
				<view style="margin-left: 14rpx;" v-else>
					<view style="font-size: 36rpx;font-weight: bold;color:#000;">未登录</view>
					<view style="font-size: 28rpx;color:#323232;">ID:0000</view>
				y</view>
			</view>
			<view>
				<u-icon name="arrow-right" color="#000" size="14"></u-icon>
			</view>
		</view>

		<view style="z-index: 99;position: relative;width:100%;">
			<view class="flex-between" style="padding:20rpx;">
				<u-grid :col="4" :border="false">
					<u-grid-item :customStyle="{'padding':'20rpx 0rpx'}" bgColor="transparent"
						@click="to('/pages/user/coupon')">
						<view style="font-weight: bold;font-size: 42rpx;">{{Statistics.SubTotalCount}}</view>
						<view class="grid-text">我的下级</view>
					</u-grid-item>
					<u-grid-item :customStyle="{'padding':'20rpx 0rpx'}" bgColor="transparent">
						<view style="font-weight: bold;font-size: 42rpx;">{{Statistics.CommissionTotalMoney}}</view>
						<view class="grid-text">我的佣金</view>
					</u-grid-item>
					<u-grid-item :customStyle="{'padding':'20rpx 0rpx'}" bgColor="transparent">
						<view style="font-weight: bold;font-size: 42rpx;">{{Statistics.WithdrawalTotalMoney}}</view>
						<view class="grid-text">提现金额</view>
					</u-grid-item>
					<u-grid-item :customStyle="{'padding':'20rpx 0rpx'}" bgColor="transparent">
						<view style="font-weight: bold;font-size: 42rpx;">{{Statistics.ValidOrderTotalCount}}</view>
						<view class="grid-text">下单总数</view>
					</u-grid-item>
				</u-grid>
			</view>
		</view>

		<view class="w94 radius20 bgwhite" style="z-index: 99;margin-top: 20rpx;">
			<view class="w96 flex-between" style="padding-top:20rpx">
				<label style="font-weight: bold;font-size: 32rpx;">服务与工具</label>
				<!-- 	<u-icon name="arrow-right" label="全部订单" label-pos="left" color="#6a6a6a" label-color="#6a6a6a" size="24"
					label-size="24"></u-icon> -->
			</view>
			<view class="flex-between" style="padding:20rpx;">
				<u-grid :col="4" :border="false">
					<u-grid-item :customStyle="{'padding':'20rpx 0rpx'}" v-for="(item,index) in gridList2"
						@click="to(item.path)">
						<u-icon :name="item.icon" size="25" color="#3c9cff"></u-icon>
						<view class="grid-text">{{item.text}}</view>
					</u-grid-item>
				</u-grid>
			</view>
		</view>

		<u-divider text="广州硕米信息技术有限公司提供技术支持" :dashed="true"></u-divider>

		<view style="width:100%;height: 100rpx;">
		</view>

		<u-popup :show="showPhone" @close="showPhone=false" round="10" mode="bottom" :customStyle="{'width':'100%'}">
			<view class="w94">
				<u-cell-group>
					<u-cell :border="false" :arrow="false" :title="'客服'+(index+1)" :label="item"
						@click="openPhone(item)" v-for="(item,index) in phones" :key="index">
						<!-- <u-icon slot="icon" size="40" name="account-fill"></u-icon> -->
						<u-icon slot="right-icon" size="32" name="phone-fill"></u-icon>
					</u-cell>
				</u-cell-group>
			</view>
		</u-popup>

		<u-popup mode="bottom" :show="!isLogin" round="10">
			<login @success="loginClose"></login>
		</u-popup>
	</view>
</template>

<script>
	import login from '../../pages/login/login.vue'
	export default {
		components: {
			login
		},
		data() {
			return {
				isLogin: true,
				showPhone: false,
				phones: ['13570513190', '18890262450'],
				gridList2: [{
						icon: 'map',
						text: '地址管理',
						path: '/pages/address/list'
					},
					{
						icon: 'kefu-ermai',
						text: '我的客服',
						path: 'showPhone'
					},
					{
						icon: 'order',
						text: '提现记录',
						path: 'showPhone'
					}
				],
				Statistics: [],
				userInfo: []
			}
		},
		computed: {

		},
		onLoad() {
			var that = this;
			that.isLogin = that.$us.checkLogin();
			if (that.isLogin) {
				uni.showShareMenu({
					withShareTicket: true,
					menus: ["shareAppMessage", "shareTimeline"]
				})
				this.getUserInfo();
				this.getStatistics();
			}
		},
		onShow() {
			var that = this;
			that.isLogin = that.$us.checkLogin();
		},
		methods: {
			loginClose() {
				// this.isLogin = true;
				var that = this;
				that.isLogin = that.$us.checkLogin();
				that.getUserInfo();
				that.getStatistics();
			},
			to(url) {
				if (url.indexOf('/pages/') <= -1) {
					if (url == 'showPhone') {
						this.showPhone = true;
						console.log('showPhone', this.showPhone)
					}
				} else {
					uni.navigateTo({
						url: url
					})
				}
			},
			openPhone(phone) {
				uni.makePhoneCall({
					phoneNumber: phone, //电话号码
					success: function(e) {
						console.log(e);
					},
					fail: function(e) {
						console.log(e);

					}
				})
			},
			getStatistics() {
				var that = this;
				that.$http.post('User/UserDataStatistics', {
					userGuid: that.$us.getId()
				}, function(res) {
					if (res.StatusCode == 1) {
						that.Statistics = res.Data;
						console.log('数据统计', that.Statistics)
					}
				})
			},
			getUserInfo() {
				var that = this;
				// that.$http.post('User/UserInfo', {
				// 	userGuid: that.$us.getId()
				// }, function(res) {
				// 	if (res.StatusCode == 1) {
				// 		that.userInfo = res.Data;
				// 	} else {
				// 		that.$uti.alert(res.Message);
				// 		uni.clearStorageSync();
				// 		that.isLogin = false;
				// 	}
				// })
			}
		},
		onShareAppMessage(res) {
			let that = this;
			var title = '这里寄快递超便宜,5块钱起寄全国,赶紧收藏起来';
			let imageUrl = '/static/share.jpg';
			if (res.from === 'button') {
				//这块需要传参，不然链接地址进去获取不到数据
				return {
					title: title,
					path: '/pages/index/index?uid=' + that.$us.getId(),
					imageUrl: imageUrl
				};
			}
			if (res.from === 'menu') {
				return {
					title: title,
					path: '/pages/index/index?uid=' + that.$us.getId(),
					imageUrl: imageUrl
				};
			}
		},
		// 分享到朋友圈
		onShareTimeline() {
			let imageUrl = '/static/share.jpg';
			return {
				title: title,
				path: '/pages/index/index?uid=' + that.$us.getId(),
				imageUrl: imageUrl
			};
		}
	}
</script>

<style>
	page {
		background: #eeeeee52;
	}

	.bgwhite {
		background: #fff;
	}

	.user-box {
		/* #ifdef H5*/
		padding-top: 50rpx;
		/*#endif*/
		/* #ifndef H5*/
		padding-top: 100rpx;
		/*#endif*/

	}

	.head-img {
		width: 150rpx;
		height: 150rpx;
		border-radius: 50%;
	}

	.grid-text {
		font-size: 24rpx;
		margin-top: 12rpx;
		color: #000;
	}


	.sm-item {
		width: 25%;
		flex-direction: column;
	}

	.sm-item-title {
		font-weight: bold;
		font-size: 32rpx;
		color: #000;
	}

	.sm-item-tips {
		font-size: 24rpx;
		color: #999;
		margin-top: 10rpx;
	}

	.sm_cur {
		color: #2d80fd
	}
</style>
