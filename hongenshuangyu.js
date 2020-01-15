/*

^https://bookapi.ihuman.com/v* url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/Zymh.js



*/



let url = $request.url;
let body = JSON.parse($response.body);

let bookvip = '/v3/get_book_info/';
let levelvip = '/v1/get_level_book_info/';
let bookfree = '/v1/get_limited_free_book_list/';
let purchase = '/v1/get_purchase_list/';
let user = '/v1/get_user_info/';

if (url.indexOf(bookvip) != -1) {
	body.result.books.is_vip = 0;
}

else if (url.indexOf(levelvip) != -1) {
	body.result.levels.books.is_vip = 0;
}

else if (url.indexOf(bookfree) != -1) {
	body.result.today_end = 1672416000;	
} 

else if (url.indexOf(purchase) != -1) {
	body.result.vip_status.vip_type = 1;
}

else if (url.indexOf(user) != -1) {
	body.result.userinfo.vip_status.vip_type = 1;
}

	body = JSON.stringify(body);

$done({body});
