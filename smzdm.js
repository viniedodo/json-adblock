//data.rows[4].model_type == ads;

//https://article-api.smzdm.com/article/index_home_page?ad_info=%7B%22pixel_ratio%22%3A326%2C%22timezone_offset%22%3A480%2C%22model_gdt%22%3A%22iPhone%206%22%2C%22brand%22%3A%22Apple%22%2C%22idfa%22%3A%221EB004EC-DEF2-BA2B-5D55-08E2D3D802FD%22%2C%22osv%22%3A%2210.3.1%22%2C%22openudid%22%3A%220e5aa7dafae0b592c6d3e7dcf507fa62b5568cf2%22%2C%22os%22%3A%22IOS%22%2C%22lan%22%3A%22zh_CN%22%2C%22device_width%22%3A375%2C%22ip%22%3A%22114.85.131.34%22%2C%22device_height%22%3A667%2C%22operator%22%3A%220%22%2C%22idfv%22%3A%22D9B888EA-5631-484B-942F-5ADB1204E94D%22%2C%22network%22%3A%224%22%2C%22user_agent%22%3A%22Mozilla%5C/5.0%20%28iPhone%3B%20CPU%20iPhone%20OS%2010_3_1%20like%20Mac%20OS%20X%29%20AppleWebKit%5C/603.1.30%20%28KHTML%2C%20like%20Gecko%29%20Mobile%5C/14E304%22%2C%22model%22%3A%22iPhone7%2C2%22%2C%22model_xf%22%3A%22iPhone7%2C2%22%7D&f=iphone&list_style_flow=a&page=1&sign=08B98EEBCC68B94A927BCF864A277950&smzdm_id=3082858592&tab_id=0&time=1574914789&v=9.5.17&weixin=1

// https://article-api.smzdm.com/article/index_home_page url script-response-body https://raw.githubusercontent.com/viniedodo/json-adblock/master/smzdm.js

var url = $request.url;
var body = $response.body;
var obj = JSON.parse($response.body);
obj.data.rows.forEach((element, index)=> {
    if(element["model_type"]=="ads"){ 
          obj.data.rows.splice(index,1);
     } 
})
$done({body: JSON.stringify(obj)});

