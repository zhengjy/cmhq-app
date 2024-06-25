<template>
	<view>
		<view class="title-tips">
			<view class="w94">
				地址信息仅用于下单，隐私信息将完全保密
			</view>

			<view class="w94 mt20">
				<u-textarea placeholder="请粘贴地址信息进行自动解析" v-model="detail"></u-textarea>
			</view>
			<view class="w94 mt20 flex-end">
				<u-tag type="primary" text="解析" @click="addrParse"></u-tag>
			</view>
			<view class="w94 flex-between items-center" style="padding:10rpx 0rpx;" v-for="(item,index) in values">
				<view style="width:20%;color:#505050;text-align: left;">
					{{item.name}}
				</view>
				<view style="width:70%">
					<u-input :type="item.type=='map'?'text':item.type" v-model="item.value" border="none"
						:placeholder="item.place?item.place:''"></u-input>
				</view>
				<view style="width:10%;color:#999;display: flex;align-items: center;justify-content:center;">
					<u-icon v-if="item.type=='map'" name="map-fill" size="20" @click="showMap=true"></u-icon>
				</view>
			</view>

			<!-- <view class="w94 flex-between items-center" style="padding:10rpx 0rpx;">
				<view style="width:20%;color:#505050;text-align: left;">
					设为默认
				</view>
				<view style="width:60%">

				</view>
				<view style="width:20%;color:#999;display: flex;align-items: center;justify-content:center;">
					<u-switch v-model="isDef"></u-switch>
				</view>
			</view> -->

		</view>

		<view class="bottom-view" @click="onSubmit">保存</view>

		<view v-if="showMap">
			<selectLoc :showMap="showMap" @close="closeLoc" @confirm="confirmLoc"></selectLoc>
		</view>
	</view>
</template>

<script>
	import selectLoc from '../../components/selectLoc/selectLoc.vue'
	import AddressParse from 'address-parse';
	export default {
		components: {
			selectLoc
		},
		data() {
			return {
				showMap: false,
				id: 0,
				isDef: false,
				prov: '',
				city: '',
				area: '',
				detail: '',
				lng: '',
				lat: '',
				values: [{
						name: '联系人',
						key: 'adName',
						value: '',
						type: 'text'
					},
					{
						name: '手机号',
						key: 'adMobile',
						value: '',
						type: 'number'
					},
					{
						name: '所在地',
						key: 'adDetail',
						value: '',
						type: 'map'
					},
					{
						name: '详细地址',
						key: 'adHouseNumber',
						value: '',
						place: '非必填',
						type: 'text'
					}
				]
			}
		},
		onLoad(options) {
			var that = this;
			that.id = options.id || 0;
			if (that.id > 0) {
				var item = that.prePage().getItem(that.id);
				that.lng = item.adLongitude;
				that.lat = item.adLatitude;
				that.prov = item.adProvince;
				that.city = item.adCity;
				that.area = item.adArea;
				// that.detail = 
				for (var key in item) {
					if (that.values.findIndex(_ => _.key == key) > -1)
						that.values.find(_ => _.key == key).value = item[key];
					// console.log(key)
					// console.log(markers[key])
				}
			} else {
				that.getClipInfo();
			}
		},
		onShow() {
			if (this.id > 0) {
				this.getClipInfo();
			}
		},
		methods: {
			getClipInfo() {
				var that = this;
				uni.getClipboardData({
					success: function(res) {
						//console.log('解析地址', res.data);
						if (res.data) { 
							var reg = /.+?(省|市|自治区|自治州|县|区)/g // 省市区的正则
							var result = res.data.match(reg);
							console.log('解析结果', result)
							if (result && result.length >= 3) {
								that.$uti.confirm('检测到您有复制文本，是否自动解析？', function() {
									that.detail = res.data;
									that.addrParse();
								})
							}
						}
					}
				});
			},
			addrParse() {
				var that = this;
				if (!that.detail) {
					that.$uti.alert('请先粘贴地址信息');
					return;
				}
				uni.showLoading({
					title: '解析中...'
				})
				
				that.$http.get('courierOrder/addressAnalysis', {
					text: that.detail
				}, function(res) {
					console.log('解析结果', res)
					if (res.StatusCode == 'success') {
						that.prePage().getList();
						that.$uti.toBack();
					} else {
						that.$uti.alert(res.Message);
					}
				})
				

				// var data = AddressParse.parse(that.detail);
				// console.log('解析结果', res)
				// if (data && data.length > 0) {
				// 	var res = data[0];
				// 	that.prov = res.province;
				// 	that.city = res.city;
				// 	that.area = res.area;
				// 	that.values.find(_ => _.key == 'adName').value = res.name;
				// 	that.values.find(_ => _.key == 'adDetail').value = res.details;
				// 	that.values.find(_ => _.key == 'adHouseNumber').value = '';
				// 	that.values.find(_ => _.key == 'adMobile').value = res.phone;
				// 	uni.hideLoading();
				// } else {
				// 	uni.hideLoading();
				// 	that.$uti.alert('解析失败,请您手动填写一下哦~')
				// }

			},
			onSubmit() {
				var that = this;
				that.$http.post('User/AddOrUpdateAddress', {
					adId: that.id,
					userGuid: that.$us.getId(),
					adMobile: that.values.find(_ => _.key == 'adMobile').value,
					adName: that.values.find(_ => _.key == 'adName').value,
					adProvince: that.prov,
					adCity: that.city,
					adArea: that.area,
					adDetail: that.values.find(_ => _.key == 'adDetail').value,
					adHouseNumber: that.values.find(_ => _.key == 'adHouseNumber').value,
					adLongitude: that.lng,
					adLatitude: that.lat
				}, function(res) {
					if (res.StatusCode == 1) {
						that.prePage().getList();
						that.$uti.toBack();
					} else {
						that.$uti.alert(res.Message);
					}
				})
			},
			confirmLoc(res) {
				this.showMap = false;
				this.lat = res.lat;
				this.lng = res.lng;
				this.prov = res.province;
				if (!res.city) {
					this.city = this.prov;
					this.prov = this.prov.replace('市', '')
				} else {
					this.city = res.city;
				}
				this.area = res.area;
				//this.address = res.district;
				this.values.find(_ => _.key == 'adDetail').value = res.district;
				console.log('选择的信息', res);
			},
			closeLoc() {
				this.showMap = false;
			},
		}
	}
</script>

<style>
	page {
		background: #fff;
	}

	.title-tips {
		width: 100%;
		height: 70rpx;
		line-height: 70rpx;
		background: #fcf0e2;
		color: #a0783d;
		font-size: 28rpx;
	}

	.bottom-view {
		width: 90%;
		/* margin:0 auto; */
		left: 5%;
		background: #2e80fe;
		color: #fff;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		font-size: 30rpx;
		border-radius: 50rpx;
		position: fixed;
		bottom: 20rpx;
	}
</style>
