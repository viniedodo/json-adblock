let url = $request.url;
let body = JSON.parse($response.body);


let purchase = '/v1/get_purchase_list/';


if (url.indexOf(purchase) != -1) {
	let obj = JSON.parse(body);
	body.result.vip_status.vip_type = 1;
	body = JSON.stringify(obj);
}


$done({body});
