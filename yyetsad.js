//YYets ads block
//https:\/\/api\.termius\.com\/api\/v3\/bulk\/account\/ 
//http:\/\/ctrl\.playcvn\.com\/app\/adsurl script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/Terminus.js


var obj = JSON.parse($response.body);
obj.ads= [];
$done({body: JSON.stringify(obj)});
