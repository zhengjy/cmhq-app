const appId = '';//微信公众平台APPID
const httpUrl = 'http://192.168.0.103:8000/';//正式接口
// const httpUrl = 'http://b.ahjttd.com:81/';//正式接口
const h5MapKey = '';//腾讯地图Key
const debug = true;
const logList = [{
	key:'SF',
	name:'顺丰',
	icon:'/static/kuaidi/sf.jpg'
},
{
	key:'STO',
	name:'申通快递',
	icon:'/static/kuaidi/st.jpg'
},
{
	key:'YD',
	name:'韵达快递',
	icon:'/static/kuaidi/yd.jpg'
},
{
	key:'YTO',
	name:'圆通快递',
	icon:'/static/kuaidi/yt.jpeg'
},
{
	key:'ZTO',
	name:'中通快递',
	icon:'/static/kuaidi/zt.jpg'
}]

export default {
	appId,
	httpUrl,
	h5MapKey,
	debug,
	logList
}

