// ^https://www.xiaohongshu.com/api/sns/v6/homefeed url script-response-body https://raw.githubusercontent.com/viniedodo/json-adblock/master/xiaohongshu.js/*
/*
let body = $response.body
body=JSON.parse(body)
body['data'].forEach((element, index)=> {
    if(element['is_ads']=="1"){ 
          body['data'].splice(index,1)
          // index -= 1
     } 
 })
$done({body:JSON.stringify(obj)})

*/

/* 网上看的
for (var i = 0; i < obj.data.length; i++) {
    if (obj.data[i].is_adsis_ads == 1) {
        obj.data.splice(i, 1)
        i -= 1
     }
}

*/

var url = $request.url;
var body = $response.body;
var obj = JSON.parse(body);
obj.data.forEach((element, index)=> {
    if(element["is_ads"]==true){ 
          obj.data.splice(index,1);
     } 
 })
$done({body: JSON.stringify(obj)});
