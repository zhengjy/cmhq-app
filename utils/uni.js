const tabBarSet = new Set()
tabBarSet.add('/pages/home/home')
tabBarSet.add('/pages/center/center')
tabBarSet.add('/pages/mine/mine')

// 页面跳转
export const goPage = (path) => {
	if(path[0] != '/') {
		path = '/' + path
	}
	console.log("🚀 ~ file: uni.js:2 ~ goPage ~ path:", path)

	if(tabBarSet.has(path)){
		uni.switchTab({
			url: path,
			fail: _ => console.log(_)
		})
	}else {
		uni.navigateTo({
			url: path,
			fail: _ => console.log(_)
		})
	}
	
}

// 获取缓存
export const getLocal = (key) => {
	let res = ''
	try{
		res = uni.getStorageSync(key)
	}catch(err) {
		console.log("🚀 ~ file: uni.js:16 ~ getLocal ~ err:", err)
	}
	return res
}
// 设置缓存
export const setLocal = (key, data) => {
	uni.setStorageSync(key, data);
}
// 删除缓存
export const removeLocal = (key) => {
	uni.removeStorageSync(key)
}
// 通知
export const toast = (title, icon = 'none', duration = 3000, mask = false) => {
	uni.showToast({
		title,
		icon,
		duration,
		mask
	})
}

// 登出
export const logout = (callback) => {
	console.log("🚀 ~ file: uni.js:80 ~ logout ~ logout:")
	// 保留数据key值数组
	const saveKey = []
	const saveData = {}
	for(let item of saveKey) {
		saveData[item] = getLocal(item)
	}
	setTimeout(() => {
		// 清除数据
		uni.clearStorageSync()
		// 保留数据
		for(let item of saveKey) {
			setLocal(item, saveData[item])
		}

		if(callback && callback instanceof Function) {
			callback()
		}else {
			uni.reLaunch({
				url: '/pages/login/login'
			})
		}
	}, 500)
}
