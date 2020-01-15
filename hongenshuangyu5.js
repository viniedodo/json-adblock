let url = $request.url;
let body = JSON.parse($response.body);


let user = '/v1/get_user_info/';


if (url.indexOf(user) != -1) {
	let obj = JSON.parse(body);
	obj.result.userinfo.vip_status.vip_type = 1;
	body = JSON.stringify(obj);
}


$done({body});
