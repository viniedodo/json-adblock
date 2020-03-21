/*

python ai

QX:
^http:\/\/ws\.60he\.com\/user\.html url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/kmh.js



Surge & QX MITM = ws.60he.com
*/

var body = $response.body;
var url = $request.url;
const path = "/user.html";
let obj = JSON.parse(body);
if (url.indexOf(path) != -1) {
	obj["vip"] = 3650;
	body = JSON.stringify(obj);
 }
$done({body});
