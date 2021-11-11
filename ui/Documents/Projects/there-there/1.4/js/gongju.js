function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
//参数n为休眠时间，单位为毫秒:
function sleep(n) {
	var start = new Date().getTime();
	//  console.log('休眠前：' + start);
	while (true) {
		if (new Date().getTime() - start > n) {
			break;
		}
	}
	// console.log('休眠后：' + new Date().getTime());
}

//加载层
function loading(msg){
	var loading = layer.msg(msg, {
		icon:16,
		shade:[0.1, '#fff'],
		time:false  //取消自动关闭
	})
}
// 关闭所有的订单状态
function off_order(){
	$('#app').css("display","none");
	$('#app-2').css("display","none");
	$('#app-3').css("display","none");
}
//setTimeout 1000ms后执行1次
// var test1 = setTimeout(function(){
// 	//your codes
// },1000);
 
// //setInterval 每隔1000ms执行一次
// var test2 = setInterval(function(){
//    //your codes
// },1000)
 
// //清除Timeout的定时器,传入变量名(创建Timeout定时器时定义的变量名)
// clearTimeout(test1);
 
// //清除Interval的定时器,传入变量名(创建Interval定时器时定义的变量名)
// clearInterval(test2);
//网络图片处理
function imgUrl(imgUrl){
	if(imgUrl == null){
		return imgUrl;
	}
	var imgs = 'upload/';
	var title = imgUrl.replace(new RegExp(imgs, 'g'), "./youyaboot/upload/");
	if(title.length == 0){
		return imgUrl;
	}
	var s = title.split(",");
	for(var i = 0;i < s.length;i++){
		if(s[i].length > 7){
			title = s[i];
		}
	}
	return title;
}
// var uid = GetRequest().uid;
// if(uid == null){
//     uid = localStorage.getItem("userId");
//   $.ajax({
//     	url:"http://106.15.56.132:8080/api/token/user",
//      // 	url:"http://106.15.56.132:8765/api/token/user",
//     	type: "POST",
//     	async: false,
//     	data:{"uid":uid},
//     	dataType:'json',
//     	success:function(result){
//     		if(result.code == 0){
//     		// 	layer.msg('得到了用户'+result.value.openId);
//     			localStorage.setItem("userId", result.value.userId);
//     		}else{
//     		// 	layer.msg("服务器响应失败请联系管理员");
//     		    alert("尊敬的客户，很抱歉，您并非本次活动的指定用户");
//     		    window.history.back();
//     		    window.close();
//     		}
//     	},error:function(result){
//     		// layer.msg("服务器响应失败请联系管理员");
    	
//     	    window.history.back();
//     	}
//   });
// // localStorage.setItem("userId", uid);
// }else{
//   $.ajax({
// 	url:"http://106.15.56.132:8080/api/token/user",
//  // 	url:"http://106.15.56.132:8765/api/token/user",
// 	type: "POST",
// 	async: false,
// 	data:{"uid":uid},
// 	dataType:'json',
// 	success:function(result){
// 		if(result.code == 0){
// 		// 	layer.msg('得到了用户'+result.value.openId);
// 			localStorage.setItem("userId", result.value.userId);
// 		}else{
// 		// 	layer.msg("服务器响应失败请联系管理员");
// 		    alert("尊敬的客户，很抱歉，您并非本次活动的指定用户");
// 		    window.history.back();
// 		    window.close();
// 		}
// 	},error:function(result){
// 		// layer.msg("服务器响应失败请联系管理员");
	
// 	    window.history.back();
// 	}
//   });
// // localStorage.setItem("userId", uid);
// }
// console.log(uid)
//是否显示满减
function manJian(name,huoDongId){
	if(huoDongId != null && huo_dong(huoDongId) != null){
		return '<div class="shangpins_zhu_ti-shang-pin-zi-name">'+name+'</div><div style="height:18px;position: relative;"><div class="shangpins_zhu_ti-shang-pin-zi-buttom">'+huo_dong(huoDongId)+'</div></div>';
	}else{
		return '<div class="shangpins_zhu_ti-shang-pin-zi-name">'+name+'</div>';
	}
}

var wechat = localStorage.getItem("wechat");
localStorage.removeItem("wechat");
if(wechat != null){
	window.location.href = wechat;
}

function changeTwoDecimal_f(x) {
	var f_x = parseFloat(x);
	if (isNaN(f_x)) {
	console.log('function:changeTwoDecimal->parameter error');
	return false;
	}
	var f_x = Math.round(x * 10) / 10;
	var s_x = f_x.toString();
	var pos_decimal = s_x.indexOf('.');
	if (pos_decimal < 0) {
	pos_decimal = s_x.length;
	s_x += '.';
	}
	while (s_x.length <= pos_decimal + 1) {
	s_x += '0';
	}
	return s_x;
}
//加载完成
document.onreadystatechange = function() {
    if (document.readyState == "complete") {
        $(".mask").css("display","none");
		$(".jia_zai_zhong").css("display","none");
		$("#app").css("filter","blur(0px)");
    }
}
function isToday(date) {
  //Code goes here.
    var d = new Date(date.toString().replace(/-/g,"/"));
    var todaysDate = new Date();
    if(d.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)){
        return true;
    } else {
        return false;
    }
}