<template>
	<view>

		<!--#ifdef H5-->

		<Flame-chooseLocation v-model="weShow" :mapkey="mapkey" @confirm="confirmNew" @change="close" :exact="true">
		</Flame-chooseLocation>

		<!--#endif-->
	</view>
</template>

<script>
	import cfg from '../../utils/config.js'
	export default { //父vue页面传递给组件的参数获取方式
		name: 'selectLoc',
		props: {
			showMap: {
				type: Boolean,
				default: false
			}
		},
		watch: {

		},
		data() {
			return {
				mapkey: cfg.h5MapKey,
				lat: '',
				lng: '',
				weShow: false
			}
		},
		mounted() {
			var that = this;
			console.log('初始化加载')
			//#ifndef H5
			console.log('不是H5')
			if (that.showMap) {
				console.log('打开位置获取')
				uni.chooseLocation({
					success: function(res) {
						console.log('位置：', res);
						console.log('详细地址：' + res.address);
						console.log('纬度：' + res.latitude);
						console.log('经度：' + res.longitude);
						let reg =
							"(?<province>[^省]+自治区|.*?省|.*?行政区|.*?市)?(?<city>[^市]+自治州|.*?地区|.*?行政单位|.+盟|市辖区|.*?市|.*?县)?(?<county>[^(区|市|县|旗|海域|岛)]+区|.*?市|.*?县|.*?旗|.*?海域|.*?岛)?(?<village>.*)";

						var dt = res.address.match(reg);
						console.log('dt', dt);

						that.province = dt[1];
						that.city = dt[2];
						that.area = dt[3];
						that.district = dt[4].replace('-', '');

						that.lat = res.latitude;
						that.lng = res.longitude;

						that.$emit('confirm', {
							province: that.province,
							city: that.city,
							area: that.area,
							district: that.district,
							lat: that.lat,
							lng: that.lng
						})
					},
					fail(err) {
						console.log('地图打开失败', err)
					}
				});
			}
			//#endif

			//#ifdef H5
			console.log('是h5')
			// document.write('<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js"></scr' + 'ipt>');
			// document.write(
			// 	'<script src="https://map.qq.com/api/gljs?v=1.exp&key=WLRBZ-TLTL5-H5RI6-QXMEJ-DJVJ6-PNBCB"></scr' +
			// 	'ipt>');
			uni.showLoading({
				title: '加载中...'
			})
			that.loadJs('https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js');
			that.loadJs('https://map.qq.com/api/gljs?v=1.exp&key=WLRBZ-TLTL5-H5RI6-QXMEJ-DJVJ6-PNBCB');

			var isfist = uni.getStorageSync('isFist');
			if (isfist == 'success') {
				uni.hideLoading();
				that.weShow = that.showMap;
			} else {
				setTimeout(function() {
					uni.hideLoading();
					uni.setStorageSync('isFist','success');
					that.weShow = that.showMap;
				}, 2000)
			}

			console.log('加载h5', that.weShow)
			//#endif
		},
		onReady() {
			//如果是H5则注入JS

		},
		onShow() {

		},
		methods: {
			close() {
				this.weShow = false;
				this.showMap = false;
				this.$emit('close', false)
			},
			confirmNew(e) {
				var that = this;
				console.log('confirm', e);
				that.lat = e.location.lat;
				that.lng = e.location.lng;

				let reg =
					"(?<province>[^省]+自治区|.*?省|.*?行政区|.*?市)?(?<city>[^市]+自治州|.*?地区|.*?行政单位|.+盟|市辖区|.*?市|.*?县)?(?<county>[^(区|市|县|旗|海域|岛)]+区|.*?市|.*?县|.*?旗|.*?海域|.*?岛)?(?<village>.*)";

				var dt = e.address.match(reg);
				console.log('dt', dt);

				that.province = dt[1];
				that.city = dt[2];
				that.area = dt[3];
				that.district = dt[4].replace('-', '');

				that.$emit('confirm', {
					province: that.province,
					city: that.city,
					area: that.area,
					district: that.district,
					lat: that.lat,
					lng: that.lng
				})

				that.weShow = false;
				that.showMap = false;
			},
			loadJs(url) {
				var script = document.createElement('script');
				script.type = "text/javascript";
				script.src = url;
				document.body.appendChild(script);
			}
		}
	}
</script>
<style>
</style>
