<template>
	<view>
		<view style="width:100%;">
			<u-notice-bar :text="noticeList" direction="column" :customStyle="{'padding':'14rpx 10rpx;'}">
			</u-notice-bar>
		</view>

		<view class="template-view">
			<view style="display: flex;">
				<view class="address-view flex-between items-center" style="display: flex;" @click="$uti.toPage('/pages/address/edit',{type:0})">
					<view>
						<view class="address-tag" style="background: #00d969;color:#fff;">
							寄
						</view>
					</view>
					<view style="margin-left: 10rpx;width:80%;">
						<view class="user-info">
							{{seller.name || '暂无地址'}} {{seller.mobile || ''}}
						</view>
						<view class="address-info">
							{{seller.province || '点击选择地址'}}{{seller.city || ''}}{{seller.area || ''}}{{seller.address || ''}}{{seller.mobile || ''}}
						</view>
					</view>
					<view>
						<u-icon name="arrow-right" size="16"></u-icon>
					</view>
				</view>
				<view class="" style="display: flex;width: 30%;"  @click="$uti.toPage('/pages/address/list',{type:0})">
					<view style="border-left: 1px solid #999; height: 20px; margin: 10px;">
					</view>
					<view class="user-info" style="margin-top:10px; ">地址薄</view>
				</view>
			</view>
			
			<view style="width:84%;height: 2rpx;background: #eee;margin:20rpx 0rpx;left:8%;position: relative;">

			</view>
			<view style="display: flex;">
				<view class="address-view flex-between items-center" style="display: flex;" @click="$uti.toPage('/pages/address/edit',{type:1})">
					<view>
						<view class="address-tag" style="background: #3c9cff;color:#fff;">
							收
						</view>
					</view>
					<view style="margin-left: 10rpx;width:80%;">
						<view class="user-info">
							{{query.name || '暂无地址'}} {{query.mobile || ''}}
						</view>
						<view class="address-info">
							{{query.province || '点击选择地址'}}{{query.city || ''}}{{query.area || ''}}{{query.address || ''}}{{query.mobile || ''}}
						</view>
					</view>
					<view>
						<u-icon name="arrow-right" size="16"></u-icon>
					</view>
				</view>
				<view class="" style="display: flex;width: 30%;"  @click="$uti.toPage('/pages/address/list',{type:1})">
					<view style="border-left: 1px solid #999; height: 20px; margin: 10px;">
					</view>
					<view class="user-info" style="margin-top:10px; ">地址薄</view>
				</view>
			</view>
			
			<view v-if="reason" class="flex-center"
				style="width:100%;background: rgba(255,0,0,0.3);color:#fff;font-size: 26rpx;border-radius: 20rpx;margin-top: 20rpx;padding:10rpx 0rpx;">
				<u-icon name="info-circle-fill" color="#fff" :label="'当前地址不可发货/收货，原因是'+reason+'！'" labelColor="#fff"
					labelSize="12"></u-icon>
			</view>
		</view>

		<view class="template-view">
			<u-cell-group :border="false">
				<u-cell :border="false" title="类型" :customStyle="{'padding':'20rpx 0rpx;'}">
					<view slot="right-icon" @click="show=true">
						<u-icon name="arrow-right" :label="file" labelPos="left" size="16"></u-icon>
						<!-- <view class="flex-end items-center" style="flex-wrap: wrap;">
							<view style="margin-bottom: 10rpx;margin-left: 10rpx;" v-for="(item,index) in columns[0]" :key="index">
								<u-tag type="primary" :plain="true"
									:text="item" size="mini"></u-tag>
							</view>
						</view> -->
					</view>
				</u-cell>
				<u-cell :border="false" title="重量(KG)" :customStyle="{'padding':'20rpx 0rpx;'}">
					<view slot="right-icon">
						<u-number-box v-model="weight" @change="valChange" color="indianred" iconStyle="indianred">
						</u-number-box>
					</view>
				</u-cell>
				<u-cell :border="false" title="体积" :customStyle="{'padding':'20rpx 0rpx;'}">
					<view slot="right-icon">
						<view class="flex-center items-center" style="font-size: 24rpx;color:indianred;">
							长(CM)
							<u-input type="number" placeholder="CM" border="bottom" :customStyle="{'width':'50rpx'}"
								v-model="length" inputAlign="center"></u-input>

							宽(CM)
							<u-input type="number" placeholder="CM" border="bottom" :customStyle="{'width':'50rpx'}"
								v-model="width" inputAlign="center"></u-input>

							高(CM)
							<u-input type="number" placeholder="CM" border="bottom" :customStyle="{'width':'50rpx'}"
								v-model="height" inputAlign="center"></u-input>
						</view>
					</view>
				</u-cell> 
				<!-- <u-cell :border="false" title="优惠券" :customStyle="{'padding':'20rpx 0rpx;'}">
					<view slot="right-icon">
						<u-icon name="arrow-right" label="您有1张优惠券可选" labelPos="left" size="16"></u-icon>
					</view>
				</u-cell>-->
			</u-cell-group>
			<view class="flex-center"
				style="width:96%;margin:0 auto;color:indianred;font-size: 26rpx;border-radius: 20rpx;margin-top: 20rpx;padding:10rpx 0rpx;">
				如果重量存在误差会导致运费计算不精确,快递方收件后可能会额外收取运费,该费用平台会通知您进行补差
				<!-- <u-icon name="info-circle-fill" color="#fff" label="请确保重量和体积正确无误,如果存在误差会导致运费计算不正确,快递方收件后会额外收取运费,该费用平台会通知您进行补差" labelColor="#fff"
					labelSize="12"></u-icon> -->
			</view>
		</view>

		<!-- <view class="flex-center items-center"
			style="width:100%;margin:0 auto;color:#999;text-align: center;padding-top:20rpx;font-size: 26rpx;">
			<view style="width:6%;">
				<u-radio-group @change="groupChange" v-model="xieyi">
					<u-radio shape="circle" name="success" activeColor="#3c9cff"></u-radio>
				</u-radio-group>
			</view>
			<view>
				我已阅读并同意<label style="color:blue;" @click="$uti.toPage('/pages/xieyi')">《用户协议》</label>
			</view>

		</view> -->

		<view class="template-view" v-if="logList && logList.length>0">
			<u-cell-group :border="false">
				<u-cell v-for="(item,index) in logList" :key="index" :border="false" :icon="item.icon"
					:customStyle="{'padding':'20rpx 0rpx;'}"
					:iconStyle="{'width':'60rpx','height':'60rpx','border-radius':'50%'}">
					<view slot="label" style="font-size: 30rpx;color:#000;margin-left: 10rpx;">
						{{item.name}}
					</view>
					<view slot="label" style="font-size: 26rpx;color:#999;margin-left: 10rpx;">
						预估金额：<label style="color:indianred;">￥{{item.totalFee}}</label>
					</view>
					<view slot="label" style="font-size: 26rpx;color:#999;margin-left: 10rpx;">
						<label style="color:indianred;">{{item.info}}</label>
					</view>
					<view slot="right-icon">
						<u-tag text="下单" size="mini" type="primary" @click="createOrder(item.shipperCode)"></u-tag>
					</view>
				</u-cell>
			</u-cell-group>
		</view>
		<!-- <view class="template-view" style="color:#999;font-size: 24rpx;text-align: center;" v-else>
			选择寄件收件地址后系统自动读取快递公司信息
		</view> -->

		<u-divider text="广州硕米信息技术有限公司提供技术支持" :dashed="true"></u-divider>

		<!-- <image src="/static/service.png"
			style="width:120rpx;height: 150rpx;position: fixed;bottom: 50rpx;left:20rpx" @click="makePhone"></image> -->
<!-- 
		<u-popup mode="bottom" :show="!isLogin" round="10">
			<login @success="loginClose" :userPid="uid"></login>
		</u-popup> -->

		<u-picker :show="show" :columns="columns" @confirm="firmPicker" @cancel="show=false"></u-picker>

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
				show: false,
				columns: [
					['日用品', '文件', '化妆品', '图书', '衣服鞋帽', '箱包', '其他']
				],
				file: '请选择',
				length: 1,
				width: 1,
				height: 1,
				isLogin: true,
				xieyi: 'null',
				weight: 1,
				noticeList: ['加盟代理请联系：zs9527gblw', '使用途中出现任何问题请联系客服'],
				seller: [],
				query: [],
				reason: '',
				logList: [],
				uid: 0
			}
		},
		onLoad(options) {
			var that = this;
			that.isLogin = that.$us.checkLogin();
			if (that.isLogin) {
				this.uid = options.uid || 0;

				this.init();
				uni.showShareMenu({
					withShareTicket: true,
					menus: ["shareAppMessage", "shareTimeline"]
				})
			}
			// console.log('是否登陆', that.isLogin)
		},
		onShow() {
			var that = this;
			that.isLogin = that.$us.checkLogin();
		},
		methods: {
			init() {
				var that = this;
				that.isLogin = true;
				
				// that.isLogin = that.$us.checkLogin();
				that.file = (uni.getStorageSync('filePicker') || '请选择');
				if (that.isLogin) {
					that.reloadAddress('seller');
					that.reloadAddress('query');
				}

				this.xieyi = uni.getStorageSync('xieyi') || 'null';
			},
			firmPicker(e) {
				console.log('firmPicker', e)
				this.file = e.value[0];
				uni.setStorageSync('filePicker', e.value[0]);
				this.show = false;
			},
			loginClose() {
				// this.isLogin = true;
				this.init();
			},
			groupChange(e) {
				console.log(e);
				this.xieyi = e;
				uni.setStorageSync('xieyi', this.xieyi)
			},
			reloadAddress(name) {
				var that = this;
				if (name == 'none') {
					that.$uti.alert('无效选择');
					return;
				}
				this[name] = uni.getStorageSync(name) || [];

				if (this.seller &&  this.query ) {
					// that.$http.post('Order/AreaVerification', {
					// 	r_ProvinceName: that.query.adProvince,
					// 	r_CityName: that.query.adCity,
					// 	r_ExpAreaName: that.query.adArea,
					// 	r_Address: that.query.adDetail + that.query.adHouseNumber,
					// 	s_ProvinceName: that.seller.adProvince,
					// 	s_CityName: that.seller.adCity,
					// 	s_ExpAreaName: that.seller.adArea,
					// 	s_Address: that.seller.adProvince + that.seller.adHouseNumber,
					// }, function(data) {
					// 	var res = JSON.parse(data.Data);
					// 	that.reason = res.Success ? '' : res.Reason;
					// })

					that.getEstimatedFreight();
				}
			},
			valChange(e) {
				console.log('当前值为: ' + e.value);
				this.weight = e.value;
				this.getEstimatedFreight();
			},
			getEstimatedFreight() {
				var that = this;
				that.logList = [];
				if (that.seller && that.query ) {
					that.$http.post('courierOrder/getCourierFreightCharge',{
						fromProv: that.seller.province,
						fromCity: that.seller.city,
						fromArea: that.seller.area,
						fromAddress: that.seller.address,
						toProv: that.query.province,
						toCity: that.query.city,
						toArea: that.query.area,
						toAddress: that.query.address,
						weight: that.weight
					}, function(res) {
						console.log('getEstimatedFreight', res)
						if (res.code == 'success') {
							let item ={ "totalFee": res.data.totalPrice, "name": '京东',"info" :res.data.info, "icon":'/static/kuaidi/st.jpg' }
							that.logList.push(item);
						} else {
							that.$uti.alert(res.Message);
						}
					}, '加载中...')
				}
			},
			createOrder(code) {
				var that = this;
				console.log('协议', that.xieyi)
				if (that.xieyi != 'success') {
					that.$uti.alert('请阅读并同意用户协议');
					return;
				}

				if (that.file == '请选择') {
					that.$uti.alert('请选择类型');
					return;
				}

				if (this.seller  && this.query ) {
					that.$http.post('Order/PayOrder', {
						userGuid: that.$us.getId(),
						orShipperCode: code,
						orRName: that.query.adName,
						orRMobile: that.query.adMobile,
						orRProvinceName: that.query.adProvince,
						orRCityName: that.query.adCity,
						orRExpAreaName: that.query.adArea,
						orRAddress: that.query.adDetail + that.query.adHouseNumber,
						orSName: that.seller.adName,
						orSMobile: that.seller.adMobile,
						orSProvinceName: that.seller.adProvince,
						orSCityName: that.seller.adCity,
						orSExpAreaName: that.seller.adArea,
						orSAddress: that.seller.adDetail + that.seller.adHouseNumber,
						orWeight: that.weight,
						orCGoodsName: that.file
					}, function(res) {
						if (res.StatusCode == 1) {
							that.weChatPay(res.Data);
						} else {
							that.$uti.alert(res.Message);
						}
					}, '创建订单中...')
				} else {
					that.$uti.alert('请先选择地址');
				}
			},
			weChatPay(data) {
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
						uni.reLaunch({
							url: '/pages/order/list'
						})
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
					path: '/pages/index/index' + that.$us.getId(),
					imageUrl: imageUrl
				};
			}
		},
		// 分享到朋友圈
		onShareTimeline() {
			let imageUrl = '/static/share.jpg';
			return {
				title: title,
				path: '/pages/index/index' + that.$us.getId(),
				imageUrl: imageUrl
			};
		}
	}
</script>

<style>
	@import url('index.css');
</style>
