/*[rewrite_local]
^https？://123\.abc\.com(/路径1|/路径2) url script-response-body 命名.js
[mitm]
hostname = 123.abc.com,
*/

if ($request.url.indexOf("/路径1") != -1) {
	// 判断请求路径存在则调用函数re()调试该路径下的响应体 re('匹配1@匹配2...', '替1@替2...') 
	// 匹配里若需用到正则的反斜杠语句像\d+、\w+时请用双反斜杆\\d+、\\w+
	}if ($request.url.indexOf("/路径2") != -1) {
		re('匹配1', '替1')
		}

function re() {
	var body = $response.body;
	if (arguments[0].includes("@")) {
		var regs = arguments[0].split("@");
		var strs = arguments[1].split("@");
		for (i = 0;i < regs.length;i++) {
			var reg = newRegExp(regs[i],"g");
			body = body.replace(reg, strs[i]);
			}
	}
	else {
		var reg = newRegExp(arguments[0],"g");
		body = body.replace(reg, arguments[1]);
		} 
		$done(body);
}
