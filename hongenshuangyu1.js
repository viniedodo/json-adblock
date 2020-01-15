let url = $request.url;
let body = JSON.parse($response.body);

let bookvip = '/v3/get_book_info/';

if (url.indexOf(bookvip) != -1) {
	let obj = JSON.parse(body);
	obj.result.books.is_vip = 0;
	body = JSON.stringify(obj);
}

$done({body});
