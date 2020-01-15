let url = $request.url;
let obj = JSON.parse($response.body);


obj.result.levels.books.is_vip = 0;
body = JSON.stringify(obj);



$done({body});
