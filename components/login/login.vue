

<script>
	export default { //父vue页面传递给组件的参数获取方式
		name: 'login',
		props: {
			text: {
				type: String,
				default: '授权用户信息使用完整功能'
			},
			userPid: {
				type: [Number, String],
				default: 0
			}
		},
		watch: {

		},
		data() {
			return {
				title: ''
			}
		},
		onLoad() {},
		onShow() {},
		created() {
			this.title = this.text;
		},
		methods: {
			loginIn() {
				var that = this;

				that.$us.setUserInfo({
					createTime: "2023-01-09T21:04:22.413",
					id: 1,
					state: 1,
					updateTime: "2023-01-14T22:40:12.2690825+08:00",
					userAgentExpirationTime: "1900-01-01T00:00:00",
					userAgentMarkUp: null,
					userBalance: 0,
					userGuid: "111",
					userOpenId: "oDdwE5EI4nqcrya3rKXX1o3VKkGI",
					userPid: 0,
					userSource: 2,
				})
				that.$emit('success')
				return;
				
				uni.login({
					provider: 'weixin',
					success(res) {
						if (!res || !res.code) {
							that.$uti.alert('授权失败,请关闭小程序重试');
							return;
						}

						// console.log('codes', {
						// 	code: res.code,
						// 	userSource: 2
						// })

						// return;
						that.$http.post('User/UserLogin', {
							code: res.code,
							userSource: 2,
							userPid: that.userPid
						}, function(res) {
							if (res.StatusCode == 1) {
								that.$us.setUserInfo(res.Data);
							} else {
								that.$uti.alert('登陆失败');
							}

							that.$emit('success')
						})
					}
				})
			}
		},
	}
</script>

<style>
	.bottom-view {
		width: 90%;
		background: #3c9cff;
		color: #fff;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		font-size: 30rpx;
		border-radius: 10rpx;
	}
</style>
