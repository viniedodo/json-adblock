//YYets ads block
//http:\/\/ctrl\.playcvn\.com\/app\/ads url script-response-body https://raw.githubusercontent.com/viniedodo/json-adblock/master/yyetsad.js

var obj = JSON.parse($response.body);
obj.ads= [];
$done({body: JSON.stringify(obj)});
