/*
[rewrite_local]
^https://shared\.ivydad\.com\/api\/(audios\/resource\/|\/m-course\/coursePackage\/courseTree) url script-response-body https://raw.githubusercontent.com/viniedodo/json-adblock/master/ivydad.js
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
if ($request.url.indexOf("/api/audios/resource/") !== -1) {
    re('"type":\\w+@"is_unlocked":\\w+@"unlock_state":\w+@"has_access":\\w+@"is_bought":\\d+@"hasBought":\\w+@"is_listen":\\d+@"is_try":\\d+@"is_lock":\\d+@"is_limited":\\d+@"listen":\\d+@"course_class":\\w+@"access_type":\\w+@"type":\\w+@"vip":\\w+@"activity":\\w+@"start":\\w+@"has_started":\\d+@"is_authed":\\w+@"authed":\\w+', '"type":free@"is_unlocked":true@"unlock_state":all@"has_access":true@"is_bought":1@"hasBought":true@"is_listen":1@"is_try":1@"is_lock":1@"is_limited":0@"listen":1@"course_class":free@"access_type":free"type":free"vip":free@"activity":true@"start":true@"has_started":1@"is_authed":true@"authed":true')
}

if ($request.url.indexOf("/api/audios/resource/category/getList") !== -1) {
    re('"course_class":\\w+@"has_unlock_num":\\d+@"unlock_node_level":\\d+@"is_bought":\\d+@"has_started":\\d+@"is_start":\\w+', '"course_class":unlocked@"has_unlock_num":99@"unlock_node_level":3@"is_bought":1@"has_started":1@"is_start":true')
}

if ($request.url.indexOf("/api/m-course/coursePackage/courseTree") !== -1) {
    re('"access_type":\\d+@"course_class":\\w+@"has_unlock_num":\\d+@"unlock_node_level":\\d+@"is_bought":\\d+@"has_started":\\d+@"is_start":\\w+@"is_listen":\\d+@"is_unlocked":\\w+@"to_be_unlock":\\w+@"is_authed":\\w+@"groupBuyActivity":\\d+', '"access_type":0@"course_class":free@"has_unlock_num":99@"unlock_node_level":3@"is_bought":1@"has_started":1@"is_start":@"is_listen":1@"is_unlocked":true@"to_be_unlock":false@"is_authed":true@"groupBuyActivity":1')
}

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
    } else {
        var reg = new RegExp(arguments[0], "g");
        body = body.replace(reg, arguments[1]);
    }
    $done(body);
}


