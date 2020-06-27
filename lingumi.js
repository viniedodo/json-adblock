//https:\/\/api.lingumi\.com\.cn\/core-users\/userInfo\/appData url script-response-body lingumi.js

/*
var obj = JSON.parse($response.body);
if($request.method=="GET")
{
obj["subscription"] = [
    {
      "expirationDate": "2030-12-27T06:47:13.360Z",
      "subscriptionType": "com.lingumi.lingumichina.lessons.level1and2",
      "subscriptionStore": "Annual Plan",
      "numberOfTrialLessons": 999
    }
  ];
$done({body: JSON.stringify(obj)});
}
*/

var body = $response.body;
var url = $request.url;
const path = "/core-users/userInfo/appData";
let obj = JSON.parse(body);
if (url.indexOf(path) != -1) {
	obj.subscription.expirationDate = "2030-12-27T06:47:13.360Z";
    obj.subscription.subscriptionType = "com.lingumi.lingumichina.lessons.level1and2and3";
    obj.subscription.subscriptionStore = "Annual Plan";
    obj.subscription.numberOfTrialLessons = 999;
	body = JSON.stringify(obj);
 }
$done({body});
