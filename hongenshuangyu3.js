let url = $request.url;
let body = JSON.parse($response.body);


let bookfree = '/v1/get_limited_free_book_list/';


if (url.indexOf(bookfree) != -1) {
	let obj = JSON.parse(body);
	obj.result.today_end = 1672416000;	
	obj = JSON.stringify(obj);
} 



$done({body});
