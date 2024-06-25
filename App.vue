<script>
	export default {
		globalData: {
			latitude: '',
			longitude: ''
		},
		onLaunch: function() {
			var that = this;

			var uid = that.$us.getId();
			if (!uid)
				uid = 0;

			that.$http.post('User/UserVisit', {userGuid:uid}, function(res) {
				console.log('插入访问记录',res)
			})

		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "@/uni_modules/uview-ui/index.scss";
	@import "common/demo.scss";

	page {
		font-family: 黑体;
		background: #eeeeee;
	}

	.flex-start {
		display: flex;
		justify-content: flex-start;
	}

	.flex-end {
		display: flex;
		justify-content: flex-end;
	}

	.flex-center {
		display: flex;
		justify-content: center;
	}

	.flex-around {
		display: flex;
		justify-content: space-around;
	}

	.flex-between {
		display: flex;
		justify-content: space-between;
	}

	.items-center {
		align-items: center;
	}

	.mt20 {
		margin-top: 20rpx !important;
	}

	.radius20 {
		border-radius: 20rpx;
	}

	.w98 {
		width: 98%;
		margin: 0 auto;
	}

	.w96 {
		width: 96%;
		margin: 0 auto;
	}

	.w94 {
		width: 94%;
		margin: 0 auto;
	}
</style>
