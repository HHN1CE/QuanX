/*
*
*
Unlock Any Revenuecat
nice自用脚本
description: 试用订阅 => 取消试用 => 解锁
lists: 1Blocker, Anybox, darkroom, Grow, iPTV, Noto, PhotoSync, Python3IDE, Planny, pillow, Scanner Pro, Spark mail, Vsco, Widgetsmith +..
updated time 2023-03-04
使用声明：⚠️⚠️⚠️此脚本仅供学习与交流，严禁转载与贩卖！⚠️⚠️⚠️
*********************
[rewrite_local]
# Unlock Any Revenuecat
^https?:\/\/api\.revenuecat\.com\/v1\/subscribers\/\$\S{48} url script-response-body https://raw.githubusercontent.com/HHN1CE/QuanX/main/Script/revenuecat.js
[mitm]
hostname = api.revenuecat.com
*
*
*/

re('"expires_date":"\\w{4}@"period_type":"\\w+"','"expires_date":"2100@"period_type":"active"');
function re() {
var body = $response.body;
if(!body){
$done({});
}
 if (arguments[0].includes("@")) {
  var regs = arguments[0].split("@");
  var strs = arguments[1].split("@");
  for (i = 0;i < regs.length;i++) {
   var reg = new RegExp(regs[i],"g");
   body = body.replace(reg, strs[i]);
 }
}
 else {
  var reg = new RegExp(arguments[0],"g");
  body = body.replace(reg, arguments[1]);
}
 $done({body});
} 
