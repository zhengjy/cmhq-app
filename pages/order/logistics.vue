<template>
	<view class="w94" style="margin-top: 50rpx;">
		<u-steps current="1" direction="column">
			<u-steps-item v-for="(val,key) in orTraces" :key="index" :title="val" :desc="key"></u-steps-item>
		</u-steps>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				orTraces: []
			}
		},
		computed: {

		},
		onLoad() {
			this.orTraces = uni.getStorageSync('orTraces') || [];
			if (!this.orTraces || this.orTraces.length <= 0) {
				this.$uti.alert('无效数据');
				this.$uti.toBack(1000);
			}
		},
		methods: {}
	}
</script>

<style>
	page{
		background: #fff;
	}
</style>
