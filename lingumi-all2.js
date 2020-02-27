//https:\/\/api.lingumi\.com\.cn\/core-users\/userInfo\/appData url script-response-body lingumi.js

var obj = JSON.parse($response.body);
if(true)
{
obj.subscription = [
    {
      "expirationDate": "2030-12-27T06:47:13.360Z",
      "subscriptionType": "com.lingumi.lingumichina.lessons.level1and2",
      "subscriptionStore": "Annual Plan",
      "numberOfTrialLessons": 999
    }
  ];
$done({body: JSON.stringify(obj)});
}
