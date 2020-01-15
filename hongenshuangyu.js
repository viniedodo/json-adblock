/*

^https://bookapi.ihuman.com/v* url script-response-body https://raw.githubusercontent.com/viniedodo/json-adblock/master/hongenshuangyu.js


l
*/



let url = $request.url;
let body = JSON.parse($response.body);

let bookvip = '/v3/get_book_info/';
let levelvip = '/v1/get_level_book_info/';
let bookfree = '/v1/get_limited_free_book_list/';
let purchase = '/v1/get_purchase_list/';
let user = '/v1/get_user_info/';

if (url.indexOf(bookvip) != -1) {
	let obj = JSON.parse(body);
	body.result.books.is_vip = 0;
	body = JSON.stringify(obj);
}

if (url.indexOf(levelvip) != -1) {
	let obj = JSON.parse(body);
	body.result.levels.books.is_vip = 0;
	body = JSON.stringify(obj);
}

if (url.indexOf(bookfree) != -1) {
	let obj = JSON.parse(body);
	body.result.today_end = 1672416000;	
	body = JSON.stringify(obj);
} 

if (url.indexOf(purchase) != -1) {
	let obj = JSON.parse(body);
	body.result.vip_status.vip_type = 1;
	body = JSON.stringify(obj);
}

if (url.indexOf(user) != -1) {
	let obj = JSON.parse(body);
	body.result.userinfo.vip_status.vip_type = 1;
	body = JSON.stringify(obj);
}


$done({body});
