<template>
  <view>
    <u-input v-model="selectedItem" @click="showDropdown" placeholder="选择项目"></u-input>
    <u-popup v-model="showPopup" :position="popupPosition" :style="{ height: '200rpx' }">
      <view style="width: 100%;">
        <u-picker :data="items" @change="handleItemChange"></u-picker>
      </view>
    </u-popup>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        items: ["Item 1", "Item 2", "Item 3"],
        selectedItem: "",
        showPopup: false,
        popupPosition: "bottom"
      };
    },
    methods: {
      showDropdown() {
        this.showPopup = true;
      },
      handleItemChange(value) {
        this.selectedItem = value;
        this.showPopup = false;
      }
    }
  };
</script>

<style>
  /* 根据需要设置样式 */
  .u-picker .u-picker-content .u-popup {
    height: 100%;
	color: blue;
  }
</style>