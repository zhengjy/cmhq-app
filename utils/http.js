// var apiPath = 'http://store.wealthyman.cn/api/';
// var apiPath= 'http://localhost:49478/api/'

import cfg from './config.js';


function request(method, url, data, func, title) {

	// let baseUrl =process.env.NODE_ENV === 'development' ? cfg['httpUrl'] :'http://localhost:3000'
	// console.log('baseUrl',baseUrl)

	if (cfg.debug) {
		console.log('原请求', data);
	}

	if (title) {
		uni.showLoading({
			title: title
		})
	}

	uni.request({
		url: cfg['httpUrl'] + url,
		method: method,
		withCredentials: true,
		header: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		data: data,
		success(res) {
			if (title) {
				uni.hideLoading();
			}
			if (cfg.debug) {
				console.log('原结果', res);
			}

			if (res && res.statusCode == 200) {
				return typeof func == "function" && func(res.data);
			} else {
				return typeof func == "function" && func({
					statusCode: 401,
					msg: '数据格式错误',
					data: {}
				})
			}
		},
		fail(err) {
			return typeof func == "function" && func({
				statusCode: 400,
				msg: '请求异常',
				data: {}
			})
		}
	})
}

function post_request(method, url, data, func, title) {

	// let baseUrl =process.env.NODE_ENV === 'development' ? cfg['httpUrl'] :'http://localhost:3000'
	// console.log('baseUrl',baseUrl)

	if (cfg.debug) {
		console.log('原请求', data);
	}

	if (title) {
		uni.showLoading({
			title: title
		})
	}

	uni.request({
		url: cfg['httpUrl'] + url,
		method: method,
		// withCredentials: true,
		header: {
			'Content-Type': 'application/json;charset=UTF-8'
		},
		data: data,
		success(res) {
			if (title) {
				uni.hideLoading();
			}
			if (cfg.debug) {
				console.log('原结果', res);
			}

			if (res && res.statusCode == 200) {
				return typeof func == "function" && func(res.data);
			} else {
				return typeof func == "function" && func({
					statusCode: 401,
					msg: '数据格式错误',
					data: {}
				})
			}
		},
		fail(err) {
			return typeof func == "function" && func({
				statusCode: 400,
				msg: '请求异常',
				data: {}
			})
		}
	})
}

function isJSON(str) {
	if (typeof str == 'string') {
		try {
			var obj = JSON.parse(str);
			if (typeof obj == 'object' && obj) {
				return true;
			} else {
				return false;
			}

		} catch (e) {
			console.log('error：' + str + '!!!' + e);
			return false;
		}
	} else
		return true;
	console.log('It is not a string!')
}


export default {
	get(url, data, func, title) {
		request('GET', url, data, function(res) {
			return typeof func == "function" && func(res)
		}, title);
	},
	post(url, data, func, title) {
		post_request('POST', url, data, function(res) {
			return typeof func == "function" && func(res)
		}, title);
	}
}
