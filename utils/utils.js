Date.prototype.format = function(fmt) {
	var o = {
		"M+": this.getMonth() + 1, //月份 
		"d+": this.getDate(), //日 
		"h+": this.getHours(), //小时 
		"m+": this.getMinutes(), //分 
		"s+": this.getSeconds(), //秒 
		"q+": Math.floor((this.getMonth() + 3) / 3), //季度 
		"S": this.getMilliseconds() //毫秒 
	};
	if (/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	}
	for (var k in o) {
		if (new RegExp("(" + k + ")").test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k])
				.length)));
		}
	}
	return fmt;
}

export default {
	getMyDay(dt) {
		var date = new Date(dt);
		var week;
		if (date.getDay() == 0) week = "周日"
		if (date.getDay() == 1) week = "周一"
		if (date.getDay() == 2) week = "周二"
		if (date.getDay() == 3) week = "周三"
		if (date.getDay() == 4) week = "周四"
		if (date.getDay() == 5) week = "周五"
		if (date.getDay() == 6) week = "周六"
		return week;
	},
	thumb(url) {
		console.log('修改路径')
		return url.replace('/img_oringinal/', '/img_thumb/')
	},
	copy(text) {
		uni.setClipboardData({
			data: text, //要被复制的内容
			success: () => { //复制成功的回调函数
				uni.showToast({ //提示
					title: '复制成功'
				})
			}
		})
	},
	formatDate(d) {
		var now = new Date(d);
		var year = now.getFullYear();
		var month = now.getMonth() + 1;
		var date = now.getDate();
		var hour = now.getHours();
		var minute = now.getMinutes();
		var second = now.getSeconds();
		return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
	},
	/*获取一个月的天数 */
	getCountDays(dt) {
		var curDate = new Date(dt);
		/* 获取当前月份 */
		var curMonth = curDate.getMonth();
		/*  生成实际的月份: 由于curMonth会比实际月份小1, 故需加1 */
		curDate.setMonth(curMonth + 1);
		/* 将日期设置为0, 这里为什么要这样设置, 我不知道原因, 这是从网上学来的 */
		curDate.setDate(0);
		/* 返回当月的天数 */
		return curDate.getDate();
	},
	dateFormat: function(date, format) {
		// var oldTime = (new Date(date.replace(/-/g, '/'))).getTime();
		var oldTime = (new Date(date)).getTime();
		var curTime = new Date(oldTime).format(format);
		return curTime;
	},
	getNowTime() {
		var date = new Date();
		this.year = date.getFullYear();
		this.month = date.getMonth() + 1;
		this.date = date.getDate();
		this.hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
		this.minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
		this.second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
		this.milliSeconds = date.getMilliseconds();
		var currentTime = this.year + '-' + this.month + '-' + this.date + ' ' + this.hour + ':' + this.minute + ':' +
			this.second + '.' + this.milliSeconds;
		return currentTime;
	},
	AddDays(date, days) {
		var nd = new Date(date);
		nd = nd.valueOf();
		nd = nd + days * 24 * 60 * 60 * 1000;
		nd = new Date(nd);
		var y = nd.getFullYear();
		var m = nd.getMonth() + 1;
		var d = nd.getDate();
		if (m <= 9) m = "0" + m;
		if (d <= 9) d = "0" + d;
		var cdate = y + "-" + m + "-" + d;
		return cdate;
	},
	getInervalHour(startDate, endDate) {
		var ms = endDate.getTime() - startDate.getTime();
		if (ms < 0) return 0;
		return Math.floor(ms / 1000 / 60 / 60);
	},
	twoTimeInterval(startTime, endTime) {

		// 开始时间
		//let d1 = startTime;//.replace(/\-/g, "/");
		let date1 = new Date(startTime);
		// console.log('开始时间',date1)

		// 结束时间
		//let d2 = endTime.replace(/\-/g, "/");
		let date2 = new Date(endTime);
		// console.log('结束时间',date2)

		// 时间相差秒数
		let dateDiff = date2.getTime() - date1.getTime();

		// 计算出相差天数
		let days = Math.floor(dateDiff / (24 * 3600 * 1000));

		// 计算出小时数
		let residue1 = dateDiff % (24 * 3600 * 1000); // 计算天数后剩余的毫秒数
		let hours = Math.floor(residue1 / (3600 * 1000));

		// 计算相差分钟数
		let residue2 = residue1 % (3600 * 1000); // 计算小时数后剩余的毫秒数
		let minutes = Math.floor(residue2 / (60 * 1000));

		// 计算相差秒数
		let residue3 = residue2 % (60 * 1000); // 计算分钟数后剩余的毫秒数
		let seconds = Math.round(residue3 / 1000);

		let returnVal =
			// ((days == 0) ? "" : days + "天") +
			((hours == 0) ? "" : (hours > 9 ? hours : '0' + hours) + "小时") +
			((minutes == 0) ? "" : (minutes > 9 ? minutes : '0' + minutes) + "分") +
			((seconds == 0) ? "" : (seconds > 9 ? seconds : '0' + seconds) + "秒");

		return returnVal;

	},
	replaceAll(s, y, t) {
		while (s.indexOf(y) > -1) {
			s = s.replace(y, t);
		}
		return s;
	},
	//弹窗
	alert: function(title, type = 'none') {
		uni.showToast({
			icon: type,
			title: title
		})
	},
	//询问
	confirm: function(content = '确定执行吗？', confirm) {
		uni.showModal({
			title: '提示',
			content: content,
			success: function(res) {
				if (res.confirm) {
					return typeof confirm == "function" && confirm(true);
				}
			}
		});
	},
	//编码
	encode: function(val) {
		return encodeURIComponent(val);
	},
	//解码
	decode: function(val) {
		return decodeURIComponent(val);
	},
	parseParams: function(data) {
		try {
			var tempArr = [];
			for (var i in data) {
				var key = encodeURIComponent(i);
				var value = encodeURIComponent(data[i]);
				tempArr.push(key + '=' + value);
			}
			var urlParamsStr = tempArr.join('&');
			return urlParamsStr;
		} catch (err) {
			return '';
		}
	},
	toPage: function(url, params, time = 0) {
		var p = this.parseParams(params);
		setTimeout(function() {
			// // #ifdef H5
			// window.open(document.domain+'/#'+url + '?' + p);
			// // #endif
			// // #ifndef H5
			// uni.navigateTo({
			// 	url: url + '?' + p
			// })
			// // #endif
			uni.navigateTo({
				url: url + '?' + p
			})
		}, time)
	},
	toBack: function(time = 0) {
		setTimeout(function() {
			uni.navigateBack({

			})
		}, time)
	},
	showImage: function(images, index = 0) {
		var urls = [];
		if (images[index]['name']) {
			for (var i = 0; i < images.length; i++) {
				urls.push(images[i]['name']);
			}
		} else if (images[index]['image']) {
			for (var i = 0; i < images.length; i++) {
				urls.push(images[i]['image']);
			}
		} else if (Object.prototype.toString.call(images) == "[object String]") {
			urls = [images];
		} else {
			urls = images;
		}

		uni.previewImage({
			urls: urls, //需要预览的图片http链接列表，多张的时候，url直接写在后面就行了
			current: index, // 当前显示图片的http链接，默认是第一个
			success: function(res) {},
			fail: function(res) {},
			complete: function(res) {},
		})
	},
	getLocation(func) {
		uni.getLocation({
			success(loc) {
				console.log('当前位置的经度：' + loc.longitude);
				console.log('当前位置的纬度：' + loc.latitude);

				uni.request({
					url: 'https://restapi.amap.com/v3/geocode/regeo',
					method: 'GET',
					data: {
						key: 'c49f0054d7984f0f7225c0514dae8764',
						location: loc.longitude + ',' + loc.latitude
					},
					success(res) {
						if (res.statusCode == 200 && res.data) {
							var json = res.data; //JSON.parse(res);
							console.log('高德地图解析成功', json);
							if (json.status == 1 && json.info == 'OK') {
								var reg = json.regeocode;
								var address = {
									"country": reg.addressComponent.country,
									"province": reg.addressComponent.province,
									"city": reg.addressComponent.city,
									"district": reg.addressComponent.district,
									"street": reg.addressComponent.streetNumber.street,
									"streetNum": reg.addressComponent.streetNumber.number,
									"poiName": reg.addressComponent.streetNumber.street + reg
										.addressComponent.streetNumber.number,
									"cityCode": reg.addressComponent.citycode,
									"longitude": lo,
									"latitude": la
								};
								// reg.formatted_address
								console.log('组合数据', address)
								return typeof func == "function" && func(address)

							} else {
								console.log('高德地图解析成功，但是参数有点不对',
									res)

								uni.showToast({
									title: '经纬度解析失败'
								})
								return typeof func == "function" && func(null)
							}
						}
					},
					fail(err) {
						uni.showToast({
							title: '致命错误'
						})
						console.log('高德地图解析失败',
							err)
						return typeof func == "function" && func(null)
					}
				})
			},
			fail(err) {
				console.log('获取定位失败', err)
				return typeof func == "function" && func(null)
			}
		})
	}
}
