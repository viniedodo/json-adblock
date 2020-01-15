let url = $request.url;
let obj = JSON.parse($response.body);



obj.result.vip_status.vip_type = 1;
body = JSON.stringify(obj);



$done({body});
