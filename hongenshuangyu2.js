let url = $request.url;
let body = JSON.parse($response.body);


let levelvip = '/v1/get_level_book_info/';



if (url.indexOf(levelvip) != -1) {
	let obj = JSON.parse(body);
	obj.result.levels.books.is_vip = 0;
	obj = JSON.stringify(obj);
}


$done({body});
