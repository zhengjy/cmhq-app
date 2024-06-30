<template>
	<view>
		<view style="width:100%;background: #fff;">
			<u-tabs :list="tabList" @click="click" :current="current" :scrollable="false" lineColor="#3c9cff">
			</u-tabs>
		</view>

		<view v-if="dataList && dataList.length>0">
			<view class="template-view" v-for="(item,index) in dataList" :key="index">

				<view class="flex-between items-center">
					<view class="font-def">快递单号：{{item.courierCompanyWaybillNo}}</view>
					<view class="font-def">{{item.courierCompanyCode}}快递</view>
				</view>

				<view class="flex-around items-center" style="margin-top: 20rpx;">
					<view>
						<view class="address-city">{{item.fromCity}}</view>
						<view class="address-name">{{item.fromName}}</view>
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
						<view class="address-city">{{item.toCity}}</view>
						<view class="address-name">{{item.toName}}</view>
					</view>
				</view>
				<view class="flex-start items-center font-def" style="margin-top: 20rpx;">
					下单时间：{{$uti.dateFormat(item.createTime,'yyyy-MM-dd hh:mm:ss')}}
				</view>
				<view class="flex-start items-center font-def" style="margin-top: 10rpx;">
					预估费用：{{item.estimatePrice}} | 实际费用：{{item.price}}
				</view>
				
				<view class="flex-end items-center">
					<view class="flex-end" style="width:50%;">
						<u-button  @click="traces(item)"
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
	import login from '../../pages/login/login.vue'
	export default {
		components: {
			login
		},
		data() {
			return {
				isLogin: false,
				tabList: [{
						name: '全部'
					},
					{
						name: '已取件',
						orderState: '1,2'
					},
					{
						name: '运输中',
						wuliuState:'1,2'
					},
					{
						name: '已完成',
						wuliuState: '3'
					},
					{
						name: '已取消',
						isCancel: '1'
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
				
				
				that.$http.get('courierOrder/queryCourierTrack', {
					id: item.id
				}, function(res) {
					if (res.code == 'success') {
						
						
						uni.setStorageSync('orTraces', res.data);
						that.$uti.toPage('/pages/order/logistics', {})
						console.log('物流信息', res.data)
					} else {
						that.$uti.alert(res.Message);
						that.isload = false;
						that.status = 'nomore';
					}
				})
				
				
				
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

				that.$http.get('courierOrder/list', {
					orderState: that.tabList[that.current].orderState,
					wuliuState: that.tabList[that.current].wuliuState,
					isCancel: that.tabList[that.current].isCancel,
					pageNo: that.page,
					pageSize: that.rows
				}, function(res) {
					
					if (res.code == 'success') {
						if (that.page * 10 < res.data.total) {
							that.status = 'loadmore';
							that.page++;
						} else {
							that.isload = false;
							that.status = 'nomore';
						}
						console.info("courierOrder ",res.data.items)
						res.data.items.forEach(item => {
							item.statusText = '';
							item.statusText = that.getStatus(item.orderState,item.wuliuState);

							// var name = that.$cfg.logList.find(_ => _.key == 'SF');
							// if (name && name.name)
							// 	item.orShipperName = name.name;

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
			getStatus(orderState,wuliuState) {
				var status = '';
				switch (wuliuState) {
					case 1:
						status = '运输中'
						break;
					case 2:
						status = '派件中'
						break;
					case 3:
						status = '已签收'
						break;
					case 4:
						status = '异常'
						break;
					
				}
				if (status != '') {
					return status;
				}
				
				switch (orderState) {
					case 0:
						status = '待取件'
						break;
					case 1:
						status = '已调派'
						break;
					case 2:
						status = '已取件'
						break;
					case 3:
						status = '已取消'
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
