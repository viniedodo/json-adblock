// https:\/\/www\.xiaohongshu\.com\/api\/sns\/v6\/homefeed\/ url script-response-body https://raw.githubusercontent.com/viniedodo/kaishujianggushi/master/xiaohongshu.js?token=AAHK64ZY62AM5EQ7NXCCKYK53X7C2

let body = $response.body
body=JSON.parse(body)
body['data'].forEach((element, index)=> {
    if(element['is_ads']=="1"){ 
          body['data'].splice(index,1)  
     } 
 })
$done({body:JSON.stringify(obj)})
