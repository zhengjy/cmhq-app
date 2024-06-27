<template>
	<view>
		<u-swipe-action>
			<u-swipe-action-item @click="click" :options="options" v-for="(item,index) in list">
				<view class="w94 flex-between items-center">
					<view style="border-bottom: 2rpx solid #eee;padding:20rpx 0rpx;width:80%;"
						@click="checkItem(item)">
						<view>{{item.province}}{{item.city}}</view>
						<view class="flex-between items-center" style="width:100%;">
							<label
								style="font-size: 30rpx;font-weight: bold;">{{item.area}}{{item.address}}</label>
							<!-- <u-icon name="edit-pen" size="30" color="#999"></u-icon> -->
						</view>
						<view>{{item.name}}({{item.mobile.replace(item.mobile.substr(3,4),'****')}})</view>
						<!-- <view class="w94 flex-end">
					<u-tag type="error" text="删除" size="mini" @click.stop="delAddress(item)">
					</u-tag>
					<view style="margin-left: 20rpx;">
						<u-tag type="primary" text="编辑" size="mini"
							@click.stop="$uti.toPage('/pages/address/edit',{id:item.id})">
						</u-tag>
					</view>
				</view> -->
					</view>
					<u-icon name="edit-pen" @click="$uti.toPage('/pages/address/edit',{id:item.id})"
						:customStyle="{'position':'absolute','right':'20rpx','top':'30%'}" size="30" color="#999">
					</u-icon>
				</view>
			</u-swipe-action-item>
		</u-swipe-action>

		<view class="bottom-view" @click="$uti.toPage('/pages/address/edit',{})">新增地址</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type: -1,
				list: [],
				disabled: false,
				btnWidth: 180,
				show: false,
				options: [{
					text: '删除',
					style: {
						backgroundColor: '#dd524d'
					}
				}]
			};
		},
		onLoad(options) {
			this.type = options.type || -1;
			this.getList();
		},
		methods: {
			checkItem(item) {
				if (this.type > -1) {
					var name = this.type == 0 ? 'seller' : this.type == 1 ? 'query' : 'none';
					uni.setStorageSync(name, item);
					this.prePage().reloadAddress(name);
					this.$uti.toBack();
				}
			},
			click(e, index1) {

				if (e.index > -1) {
					var that = this;

					that.$uti.confirm('您确定要删除吗？', function() {
						that.$http.post('User/DeleteAddress', {
							adId: that.list[e.index].id,
							userGuid: that.$us.getId()
						}, function(res) {
							that.$uti.alert(res.Message);
							if (res.StatusCode == 1) {
								that.getList();
							}
						}, '处理中...')
					})
				}

				// if (index1 == 1) {
				// 	this.list.splice(index, 1);
				// 	this.$u.toast(`删除了第${index}个cell`);
				// } else {
				// 	this.list[index].show = false;
				// 	this.$u.toast(`收藏成功`);
				// }
			},
			// 如果打开一个的时候，不需要关闭其他，则无需实现本方法
			open(index) {
				// 先将正在被操作的swipeAction标记为打开状态，否则由于props的特性限制，
				// 原本为'false'，再次设置为'false'会无效
				this.list[index].show = true;
				this.list.map((val, idx) => {
					if (index != idx) this.list[idx].show = false;
				})
			},
			to(url) {
				console.log('跳转', url)
				uni.navigateTo({
					url: url
				})
			},
			getList() {
				var that = this;
				that.list = [];
				that.$http.get('ziaddress/list', {
					companyId: that.$us.getCompanyId(),
					pageNo: 1,
					pageSize: 20
				}, function(res) {
					if (res.code == 'success') {
						console.log('地址列表', res.data)
						res.data.items.forEach(item => {
							item.show = false;
							that.list.push(item);
						})
					}
				})
			},
			getItem(id) {
				return this.list.find(_ => _.id == id);
			},
			delAddress(item) {
				var that = this;

			}
		}
	};
</script>

<style>
	page {
		background: #fff;
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
