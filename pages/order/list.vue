<template>
	<view>
		<view style="width:100%;background: #fff;">
			<u-tabs :list="tabList" @click="click" :current="current" :scrollable="false" lineColor="#3c9cff">
			</u-tabs>
		</view>

		<view v-if="dataList && dataList.length>0">
			<view class="template-view" v-for="(item,index) in dataList" :key="index">

				<view class="flex-between items-center">
					<view class="font-def">订单号：{{item.orNumber}}</view>
					<view class="font-def">{{item.orShipperName}}</view>
				</view>

				<view class="flex-around items-center" style="margin-top: 20rpx;">
					<view>
						<view class="address-city">{{item.orSCityName}}</view>
						<view class="address-name">{{item.orSName}}</view>
					</view>
					<view>
						<view style="text-align: center;">
							<image src="../../static/step.png" style="width:80rpx;height: 12rpx;"></image>
						</view>
						<view style="font-size: 22rpx;color:#828282;text-align: center;">
							{{item.statusText}}
						</view>
					</view>
					<view>
						<view class="address-city">{{item.orRCityName}}</view>
						<view class="address-name">{{item.orRName}}</view>
					</view>
				</view>
				<view class="flex-start items-center font-def" style="margin-top: 20rpx;">
					下单时间：{{$uti.dateFormat(item.createTime,'yyyy-MM-dd hh:mm:ss')}}
				</view>
				<view class="flex-start items-center font-def" style="margin-top: 10rpx;">
					支付金额：{{item.orPayMoney}}
				</view>
				<view v-if="item.orLogisticsNumber" class="flex-start items-center font-def" style="margin-top: 10rpx;">
					快递单号：{{item.orLogisticsNumber}}
				</view>
				<view class="flex-end items-center">
					<view class="flex-end" style="width:50%;">
						<u-button v-if="item.state==301 || item.state==2 || item.state==3" @click="traces(item)"
							type="info" plain text="物流信息"
							:customStyle="{'height':'60rpx','width':'180rpx','margin':'0'}" shape="circle">
						</u-button>
						<u-button v-if="item.state==1" @click="cancelOrder(item)" type="info" plain text="取消订单"
							:customStyle="{'height':'60rpx','width':'180rpx','margin':'0','margin-left':'20rpx'}"
							shape="circle">
						</u-button>
						<u-button v-if="item.orPayMoney!=item.orReceivableMoney" @click="difference(item)"
							type="warning" plain :text="'补差价'+(item.orReceivableMoney-item.orPayMoney)+'元'"
							:customStyle="{'height':'60rpx','width':'220rpx','margin':'0','margin-left':'20rpx','color':'#f9ae3d'}"
							shape="circle">
						</u-button>
					</view>
				</view>
			</view>
			<u-loadmore :status="status" />
		</view>

		<view v-else style="margin-top: 200rpx;">
			<u-empty mode="order">
			</u-empty>
		</view>


		<u-popup mode="bottom" :show="!isLogin" round="10">
			<login @success="loginClose"></login>
		</u-popup>
	</view>
</template>

<script>
	import login from '../../components/login/login.vue'
	export default {
		components: {
			login
		},
		data() {
			return {
				isLogin: false,
				tabList: [{
						name: '全部',
						state: '1,-2,-1,120,102,103,104,301,2,3'
					},
					{
						name: '已付款',
						state: '1,120,102'
					},
					{
						name: '已接单',
						state: '103,104,301,2,3'
					},
					{
						name: '已退款',
						state: '-2,-1'
					}
				],
				current: 0,
				isload: true,
				page: 1,
				rows: 10,
				dataList: [],
				status: 'loading'
			}
		},
		onLoad() {
			var that = this;
			that.isLogin = that.$us.checkLogin();
			if (that.isLogin) {
				that.getList();
			}
			console.log('是否登陆', that.isLogin)
		},
		onShow() {
			var that = this;
			that.isLogin = that.$us.checkLogin();
		},
		methods: {
			difference(item) {
				var that = this;
				that.$http.post('Order/PayOrderDifference', {
					userGuid: that.$us.getId(),
					orId: item.id
				}, function(res) {
					if (res.StatusCode == 1) {
						that.weChatPay(res.Data);
					} else {
						that.$uti.alert(res.Message);
					}
				}, '加载中...')
			},
			weChatPay(data) {
				var that = this;
				uni.requestPayment({
					provider: 'wxpay',
					nonceStr: data.nonceStr,
					package: data.package,
					paySign: data.paySign,
					signType: data.signType,
					timeStamp: data.timeStamp,
					success: (res) => {
						console.log('success:' + JSON.stringify(res));
						uni.showToast({
							title: '支付成功！',
							duration: 2000
						});
						setTimeout(function() {
							that.reload();
						}, 1000)
					},
					fail: (err) => {
						console.log('fail:' + JSON.stringify(err));
						uni.showToast({
							title: '已取消支付！',
							icon: 'none',
							duration: 2000
						});
					}
				});
			},
			traces(item) {
				var that = this;
				if (!item.orTraces) {
					that.$uti.alert('没有物流信息');
					return;
				}

				var json = JSON.parse(item.orTraces);
				uni.setStorageSync('orTraces', json);
				that.$uti.toPage('/pages/order/logistics', {})
				console.log('物流信息', json)
			},
			cancelOrder(item) {
				var that = this;
				that.$uti.confirm('您确定取消订单吗？', function(res) {
					that.$http.post('Order/CancelOrder', {
						userGuid: that.$us.getId(),
						orId: item.id
					}, function(res) {
						that.$uti.alert(res.Message);
						if (res.StatusCode == 1) {
							that.reload();
						}
					}, '取消中...')
				})
			},
			click(e) {
				console.log(e);
				this.current = e.index;
				this.reload();
			},
			loginClose() {
				var that = this;
				that.isLogin = that.$us.checkLogin();
				if (that.isLogin) {
					that.getList();
				}
			},
			reload() {
				this.dataList = [];
				this.page = 1;
				this.isload = true;
				this.getList();
			},
			getList() {
				var that = this;
				if (!that.isload) {
					that.$uti.alert('没有更多数据了');
					return;
				}
				that.status = 'loading';

				that.$http.post('Order/OrderList', {
					userGuid: that.$us.getId(),
					state: that.tabList[that.current].state,
					pageIndex: that.page,
					pageSize: that.rows
				}, function(res) {
					if (res.StatusCode == 1) {
						if (that.page * 10 < res.Data.TotalNum) {
							that.status = 'loadmore';
							that.page++;
						} else {
							that.isload = false;
							that.status = 'nomore';
						}

						res.Data.Result.forEach(item => {
							item.statusText = '';
							item.statusText = that.getStatus(item.state);

							var name = that.$cfg.logList.find(_ => _.key == item.orShipperCode);
							if (name && name.name)
								item.orShipperName = name.name;

							that.dataList.push(item);
						})
						console.log('订单列表', that.dataList)
					} else {
						that.$uti.alert(res.Message);
						that.isload = false;
						that.status = 'nomore';
					}
				})
			},
			getStatus(text) {
				var status = '未知状态';
				switch (text.toString()) {
					case '0':
						status = '待支付'
						break;
					case '1':
						status = '待分配'
						break;
					case '-2':
						status = '支付失败'
						break;
					case '-1':
						status = '已取消'
						break;
					case '99':
						status = '调度异常'
						break;
					case '120':
						status = '待接单'
						break;
					case '102':
						status = '分配网点'
						break;
					case '103':
						status = '分配快递员'
						break;
					case '104':
						status = '待取件'
						break;
					case '301':
						status = '待揽件'
						break;
					case '2':
						status = '运输中'
						break;
					case '3':
						status = '已签收'
						break;
					default:
						status = '未知状态'
						break;
				}
				return status;
			}
		},
		onPullDownRefresh() {
			this.reload();
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000)
		},
		onReachBottom() {
			this.getList();
		}
	}
</script>

<style>
	.template-view {
		width: 90%;
		margin: 0 auto;
		border-radius: 20rpx;
		background: #fff;
		padding: 20rpx;
		margin-top: 20rpx;
	}

	.address-city {
		font-weight: bold;
		font-size: 32rpx;
		text-align: center;
	}

	.address-name {
		font-size: 26rpx;
		color: #999;
		text-align: center;
	}

	.font-def {
		font-size: 26rpx;
		color: #999;
	}
</style>
