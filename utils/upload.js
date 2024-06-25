import cfg from './config.js';
//递归上传 this 文件集 上传数据 上传结果 回调函数
var cycleUpload = function(that, files,data, array, func) {
	if (!files || files.length<=0) //全部上传后返回
		return typeof func == "function" && func(array);

	that.upload(files[0], data, function(back) {
		if (back)
			array.push(back);

		files.splice(0, 1); //上传后不管成功失败都将此项删除

		cycleUpload(that, files,data, array, func); //递归上传
	});
}
export default {
	//单个上传
	upload: function(file, data, func) {
		//var api = apiPath;//utils.decode(apiPath);
		console.log('请求数据', data);
		console.log('文件路径', file);
		uni.uploadFile({
			url:  cfg.httpUrl+'Currency/UploadSingleImage', //post请求的地址
			filePath: file,
			name: 'file',
			// header: {
			// 	'Content-Type': 'multipart/form-data',
			// },
			fileType: 'image',
			formData: data,
			success: (res) => {
				console.log(res)
				var obj = JSON.parse(res.data);
				if(obj.StatusCode==1)
				return typeof func == "function" && func(obj.Data);
				else
				return typeof func == "function" && func(null);
			},
			fail: function(err) {

				console.log('上传失败', err)
				return typeof func == "function" && func(null)
			}
		})
	},
	//批量上传 files格式[{file:'选择或拍照的tempFilePaths',data:{带着上传的数据}}]
	uploadArray: function(files,data, func) {
		var that = this;
		//递归上传
		cycleUpload(that, files,data, [], function(res) {
			console.log('cycleUpload回调',res)
			return typeof func == "function" && func(res); //返回全部成功项目
		});

	}
}
