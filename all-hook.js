/*[rewrite_local]
^https?://123\.abc\.com(/路径1|/路径2) url script-response-body 命名.js
[mitm]
hostname = 123.abc.com,
 */

if ($request.url.indexOf("/路径1") != -1) {
    // 判断请求路径存在则调用函数re()调试该路径下的响应体

    re('匹配1@匹配2...', '替1@替2...')
    // 匹配里若需用到正则的反斜杠语句像\d+、\w+时请用双反斜杆\\d+、\\w+
}

if ($request.url.indexOf("/路径2") != -1) {
    re('匹配1', '替1')
}

function re() {
    var body = $response.body;
    if (arguments[0].includes("@")) {
        var regs = arguments[0].split("@");
        var strs = arguments[1].split("@");
        for (i = 0; i < regs.length; i++) {
            var reg = newRegExp(regs[i], "g");
            body = body.replace(reg, strs[i]);
        }
    } else {
        var reg = newRegExp(arguments[0], "g");
        body = body.replace(reg, arguments[1]);
    }
    $done(body);
}

re('"isVip":\\d@"userType":\\d', '"isVip":1@"userType":2')
// 在这里re('匹配', '替换')匹配有用到正则的反斜杠语句时请用双反斜杆


//	re('匹配1@匹配2@匹配3...','替1@替2@替3...') 只有一个替换的需要则不用@，直接re('匹配1','替1')
//	由于带有单反斜杆的字符串在经过split()拆分后会丢失，所以需要用到正则的反斜杠语句时请用双反斜杆，如果是用.+之类的匹配则不用，上面也能进行这样全部内容替换：
//	re('.+','ipsubnow=1585760627&ipsubexp=1646033923&ipsub=1')

//	var 变量 = /要匹配的内容支持正则如\d+或.+等/g 这是以字面量的方式定义了一个正则表达式，可选标志g代表全局匹配，还有标志i代表不区分大小写，另一个m表示多行模式，先知道一下就行。
