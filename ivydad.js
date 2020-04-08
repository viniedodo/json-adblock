/*
[rewrite_local]
^https?://shared\.ivydad\.com\/api\/ url script-response-body https://raw.githubusercontent.com/viniedodo/json-adblock/master/ivydad.js
(vod\/show|(user|vod|topic|type)\/index)
const user = "/index.php/app/ios/user/index";
[mitm]
hostname = shared.ivydad.com,
 
if (url.indexOf(topic) != -1||url.indexOf(type) != -1) {}
var url = $request.url;
const user = "";
if (url.indexOf(user) != -1){
re()	
}
*/
//if ($request.url.indexOf("/api/audios/resource/*") != -1) {
re('"type":\\w+@"is_unlocked":\\w+@"unlock_state":\w+@"has_access":\\w+@"is_bought":\\d+@"hasBought":\\w+@"is_listen":\\d+@"is_try":\\d+@"is_lock":\\d+@"is_limited":\\d+@"listen":\\d+@"course_class":\\w+@"access_type":\\w+@"type":\\w+@"vip":\\w+@"activity":\\w+@"start":\\w+@"has_started":\\d+@"is_authed":\\w+@"authed":\\w+', '"type":free@"is_unlocked":true@"unlock_state":all@"has_access":true@"is_bought":1@"hasBought":true@"is_listen":1@"is_try":1@"is_lock":1@"is_limited":0@"listen":1@"course_class":free@"access_type":free"type":free"vip":free@"activity":true@"start":true@"has_started":1@"is_authed":true@"authed":true')
//}
// re('"type":\\w+@"is_unlocked":\\w+@"unlock_state":\w+@"has_access":\\w+@"is_bought":\\d+@"hasBought":\\w+@"is_listen":\\d+@"is_try":\\d+@"is_lock":\\d+@"is_limited":\\d+@"listen":\\d+@"course_class":\\w+@"access_type":\\w+@"type":\\w+@"vip":\\w+@"activity":\\w+@"start":\\w+@"has_started":\\d+@"is_authed":\\w+@"authed":\\w+', '"type":free@"is_unlocked":true@"unlock_state":all@"has_access":true@"is_bought":1@"hasBought":true@"is_listen":1@"is_try":1@"is_lock":1@"is_limited":0@"listen":1@"course_class":free@"access_type":free"type":free"vip":free@"activity":true@"start":true@"has_started":1@"is_authed":true@"authed":true')

function re() {
var body = $response.body;
var obj = JSON.parse($response.body);
body = JSON.stringify(obj);
	//响应体gzip需要转换后修改
if (arguments[0].includes("@")) {
	var regs = arguments[0].split("@");
	var strs = arguments[1].split("@");
	for (i = 0; i < regs.length; i++) {
		var reg = new RegExp(regs[i], "g");
		body = body.replace(reg, strs[i]);
	}
} 
else {
	var reg = new RegExp(arguments[0], "g");
	body = body.replace(reg, arguments[1]);
}
$done(body);
}



/*
if ($request.url.indexOf("/api/audios/*") != -1) {
    // 判断请求路径存在则调用函数re()调试该路径下的响应体

    re('"access_type":\\w+@"has_bought":\\d+', '"access_type":free@"has_bought":1')
    // 匹配里若需用到正则的反斜杠语句像\d+、\w+时请用双反斜杆\\d+、\\w+
}


if ($request.url.indexOf("/api/m-course/*") != -1) {
    re('"is_listen":\\d', '"is_listen":1')
}


if ($request.url.indexOf("/api/audios/resource/*") != -1) {
    re('"type":\\w+@"is_unlocked":\\w+@"unlock_state":\w+@"has_access":\\w+@"is_bought":\\d+@"hasBought":\\w+@"is_listen":\\d@"is_try":\\d@"is_lock":\\d+@"is_limited":\\d+@"listen":\\d+@"course_class":\\w+', '"type":free@"is_unlocked":true@"unlock_state":all@"has_access":true@"is_bought":1@"hasBought":true@"is_listen":1@"is_try":1@"is_lock":1@"is_limited":0@"listen":1@"course_class":free')
}
*/

//body=JSON.stringify(obj);
//$done({body});

// re('"isVip":\\d@"userType":\\d', '"isVip":1@"userType":2')
// 在这里re('匹配', '替换')匹配有用到正则的反斜杠语句时请用双反斜杆


//	re('匹配1@匹配2@匹配3...','替1@替2@替3...') 只有一个替换的需要则不用@，直接re('匹配1','替1')
//	由于带有单反斜杆的字符串在经过split()拆分后会丢失，所以需要用到正则的反斜杠语句时请用双反斜杆，如果是用.+之类的匹配则不用，上面也能进行这样全部内容替换：
//	re('.+','ipsubnow=1585760627&ipsubexp=1646033923&ipsub=1')

//	var 变量 = /要匹配的内容支持正则如\d+或.+等/g 这是以字面量的方式定义了一个正则表达式，可选标志g代表全局匹配，还有标志i代表不区分大小写，另一个m表示多行模式，先知道一下就行。
