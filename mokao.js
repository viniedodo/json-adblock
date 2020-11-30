var body = $response.body;
var url = $request.url;
const path = "/Api/V1/Topic/";
let obj = JSON.parse(body);
if (url.indexOf(path) != -1) {
	obj.info.test_num = 9999;
	body = JSON.stringify(obj);
 }
$done({body});
