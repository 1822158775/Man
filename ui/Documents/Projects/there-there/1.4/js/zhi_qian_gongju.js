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
//集合去重
function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return;
    }
    arr = arr.sort()
    var arrry = [arr[0]];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            arrry.push(arr[i]);
        }
    }
    return arrry;
}
//转换时间格式
function timestampToTime(timestamp) {
    var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    Y = date.getFullYear() + '-';
    M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    D = date.getDate() + '';
    h = date.getHours() + ':';
    m = (date.getMinutes() < 10 ? '0' + (date.getMinutes()) : date.getMinutes()) + ':';
    s = (date.getSeconds() < 10 ? '0' + (date.getSeconds()) : date.getSeconds());
    return Y + M + D;
}
//转换时间格式
function timestampToTimem(timestamp) {
    var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    Y = date.getFullYear() + '-';
    M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    D = date.getDate() + '';
    h = date.getHours() + ':';
    m = (date.getMinutes() < 10 ? '0' + (date.getMinutes()) : date.getMinutes()) + ':';
    s = (date.getSeconds() < 10 ? '0' + (date.getSeconds()) : date.getSeconds());
    return Y + M + D + h + m + s;
}
//转换时间格式
function timestampToTimeriqi(timestamp) {
    var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    Y = date.getFullYear() + '/';
    M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '/';
    D = date.getDate() + '';
    h = date.getHours() + ':';
    m = (date.getMinutes() < 10 ? '0' + (date.getMinutes()) : date.getMinutes()) + ':';
    s = (date.getSeconds() < 10 ? '0' + (date.getSeconds()) : date.getSeconds());
    return Y + M + D;
}
/***
 *验证是否为 手机号码 是返回true ，否则返回 false
 *参数 ：valStr ： 文本框的值
 */
function IsMobileTextVal(valStr) {
    if (valStr && /^1[0-9]{10}$/.test(valStr)) { //判断是否为手机号            
        return true;
    } else { //不是手机号
        return false;
    }
}

/***
 *验证是否为Email 是返回true ，否则返回 false
 *参数 ：valStr ： 文本框的值
 */
function IsEmailTextVal(valStr) {
    if (valStr && /^([a-zA-Z0-9_\.\-+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(valStr)) { //判断是否为正确           
        return true;
    } else { //不正确
        return false;
    }
}

/***
 *验证是否为 座机 是返回true ，否则返回 false
 *参数 ：valStr ： 文本框的值
 */
function IsPhoneTextVal(valStr) {
    if (valStr && /^(\d{3,4}-?)?\d{7,9}$/.test(valStr)) { //判断是否为手机号            
        return true;
    } else { //不是手机号
        return false;
    }
}
// 验证身份身份证号
function IsCard(str) {
    var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    return reg.test(str);
}
// 函数参数必须是字符串，因为二代身份证号码是十八位，而在javascript中，十八位的数值会超出计算范围，造成不精确的结果，导致最后两位和计算的值不一致，从而该函数出现错误。
// 详情查看javascript的数值范围
function checkIDCard(idcode) {
    // 加权因子
    var weight_factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    // 校验码
    var check_code = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];

    var code = idcode + "";
    var last = idcode[17]; //最后一位

    var seventeen = code.substring(0, 17);

    // ISO 7064:1983.MOD 11-2
    // 判断最后一位校验码是否正确
    var arr = seventeen.split("");
    var len = arr.length;
    var num = 0;
    for (var i = 0; i < len; i++) {
        num = num + arr[i] * weight_factor[i];
    }

    // 获取余数
    var resisue = num % 11;
    var last_no = check_code[resisue];

    // 格式的正则
    // 正则思路
    /*
    第一位不可能是0
    第二位到第六位可以是0-9
    第七位到第十位是年份，所以七八位为19或者20
    十一位和十二位是月份，这两位是01-12之间的数值
    十三位和十四位是日期，是从01-31之间的数值
    十五，十六，十七都是数字0-9
    十八位可能是数字0-9，也可能是X
    */
    var idcard_patter = /^[1-9][0-9]{5}([1][9][0-9]{2}|[2][0][0|1][0-9])([0][1-9]|[1][0|1|2])([0][1-9]|[1|2][0-9]|[3][0|1])[0-9]{3}([0-9]|[X])$/;

    // 判断格式是否正确
    var format = idcard_patter.test(idcode);

    // 返回验证结果，校验码和格式同时正确才算是合法的身份证号码
    return last === last_no && format ? true : false;
}
// 判断是否为真实姓名
function panduanshifouzhenshi(name) {

    var regName = /^[\u4e00-\u9fa5]{2,4}$/;
    var fanhuijieguo = 1;
    if (!regName.test(name)) {
        fanhuijieguo = 2;
    }
    return fanhuijieguo;
}
// 判断是否为真实身份证号
function panduanshifoushenfen(shenfen) {
    var regIdNo = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
    return regIdNo.test(shenfen);
}
// 时间比较
function compare(date1, date2) {
    var oDate1 = new Date(date1);
    var oDate2 = new Date(date2);
    if (oDate1.getTime() >= oDate2.getTime()) {
        // 第一个大
        return 1;
    } else if (oDate1.getTime() <= oDate2.getTime()) {
        // 第二个大
        return 2;
    } else {
        // 相等
        return 3;
    }

}
// 时间比较
function compare2(date1, date2) {
    var oDate1 = new Date(date1);
    var oDate2 = new Date(date2);
    if (oDate1.getTime() > oDate2.getTime()) {
        // 第一个大
        return 1;
    } else if (oDate1.getTime() < oDate2.getTime()) {
        // 第二个大
        return 2;
    } else {
        // 相等
        return 3;
    }

}
// 返回网络图片的宽和高
function getImageDimensions(imgStyleRule, shuzhi) {
    
    console.log(shuzhi);
    // 图片地址 后面加时间戳是为了避免缓存
    var img_url = imgStyleRule + '?' + Date.parse(new Date());
    // 创建对象
    var img = new Image();
    // 改变图片的src
    img.src = img_url;
    // 加载完成执行
    img.onload = function() {
        // 打印
        // alert('width:' + img.width + ',height:' + img.height);
        // 元素定位
        $('.item-tt' + shuzhi + '-1').css('margin-top', '-' + $('.item-tt' + shuzhi + '').css('height'));
        // 制定元素高度
        $('.item-tt' + shuzhi + '-1').css('height', $('.item-tt' + shuzhi + '').css('height'));
    };
}
// 返回网络图片的宽和高
function getImageDimensionszhixingdierbian(shuzhi) {
    // 打印
    // alert('width:' + img.width + ',height:' + img.height);
    // 元素定位
    for (var i = 0; i < shuzhi; i++) {
        $('.item-tt' + i + '-1').css('margin-top', '-' + $('.item-tt' + i + '').css('height'));
        // 制定元素高度
        $('.item-tt' + i + '-1').css('height', $('.item-tt' + i + '').css('height'));
    }
}
function getMyDay(date){
    var week;
    if(date.getDay()==0) week="周日";
    if(date.getDay()==1) week="周一";
    if(date.getDay()==2) week="周二";
    if(date.getDay()==3) week="周三";
    if(date.getDay()==4) week="周四";
    if(date.getDay()==5) week="周五";
    if(date.getDay()==6) week="周六";
    return week;
}