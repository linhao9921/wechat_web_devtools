'use strict';!function(require,directRequire){const a=require('./d88f42ee579ca1d959a5e9c99307ed0d.js'),b=require('./bc78839ccca8df9e5ceeb7fae11b7be2.js'),c=require('./86ebea66f6dd0e89811d15e3633ade19.js'),d=require('./822bc5aa1823c9aa222d9ffad72e7f17.js'),e={shareTimeline:'onMenuShareTimeline',sendAppMessage:'onMenuShareAppMessage',shareQQ:'onMenuShareQQ',shareWeiboApp:'onMenuShareWeibo',shareQZone:'onMenuShareQZone',"menu:share:timeline":'onMenuShareTimeline',"menu:share:appmessage":'onMenuShareAppMessage',"menu:share:qq":'onMenuShareQQ',"menu:share:weiboApp":'onMenuShareWeibo',"menu:share:QZone":'onMenuShareQZone',preVerifyJSAPI:'config',imagePreview:'previewImage',geoLocation:'getLocation',openProductViewWithPid:'openProductSpecificView',batchAddCard:'addCard',batchViewCard:'openCard',getBrandWCPayRequest:'chooseWXPay',dispatchEvent:'publish',clearLocalStorage:'clearStorage',getLocalStorage:'getStorage',setLocalStorage:'setStorage'};var f=(b,c)=>{let d=a.getRealName(b);return c.purviewFromPreVerify||(c.purviewFromPreVerify={}),!!a.hasDefaultPurview(d)||c.purviewFormGetA8key&&c.purviewFormGetA8key[d]||c.purviewFromPreVerify&&c.purviewFromPreVerify[d]};module.exports={exec:function(g,h){let{api:i,args:j,callbackID:k}=g;const l=b.getState();return(b)=>{let g,m=f(i,{purviewFormGetA8key:l.webdebugger.purviewFormGetA8key,purviewFromPreVerify:l.webdebugger.purviewFromPreVerify}),n=e[i]||i;if(!m)g={errMsg:`${n}:${a.failWording}`};else if(!c[i])g={errMsg:`${n}:${a.notExistWording}`};else return void c[i](b,{api:n,args:j,callbackID:k,runtimeID:h}).then((c)=>{if(c){let e={callbackID:k,runtimeID:h,res:c};'preVerifyJSAPI'===i&&(e.ext={sdkResExt:{defaultPurview:a.defaultPurview||{},purviewFormGetA8key:l.webdebugger.purviewFormGetA8key||{},purviewFromPreVerify:l.webdebugger.purviewFromPreVerify||{}},args:j}),b({type:d.WEBDEBUGGER_SET_JSSDKCALLBACK,data:e})}}).catch((a)=>{b({type:d.WEBDEBUGGER_SET_JSSDKCALLBACK,data:{callbackID:k,runtimeID:h,res:{errMsg:`${n}:fail,${a}`}}})});g&&b({type:d.WEBDEBUGGER_SET_JSSDKCALLBACK,data:{callbackID:k,runtimeID:h,res:g}})}}}}(require('lazyload'),require);