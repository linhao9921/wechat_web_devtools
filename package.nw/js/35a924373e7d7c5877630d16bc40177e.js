'use strict';!function(require,directRequire){module.exports={startRecord:async function(a,b){let{api:c,args:d,callbackID:e,runtimeID:f}=b;return{errMsg:`${c}:ok`}},stopRecord:async function(a,b){let{api:c,args:d,callbackID:e,runtimeID:f}=b;return{errMsg:`${c}:ok`,localId:'wxLocalResource://voiceLocalId1234567890123'}},playVoice:async function(a,b){let{api:c,args:d,callbackID:e,runtimeID:f}=b;return{errMsg:`${c}:ok`}},pauseVoice:async function(a,b){let{api:c,args:d,callbackID:e,runtimeID:f}=b;return d.localId?{errMsg:`${c}:ok`}:{errMsg:`${c}:fail,missing localId`}},stopVoice:async function(a,b){let{api:c,args:d,callbackID:e,runtimeID:f}=b;return d.localId?{errMsg:`${c}:ok`}:{errMsg:`${c}:fail,missing localId`}},uploadVoice:async function(a,b){let{api:c,args:d,callbackID:e,runtimeID:f}=b;return d.localId?{errMsg:`${c}:ok`,serverId:'1237378768e7q8e7r8qwesafdasdfasdfaxss111'}:{errMsg:`${c}:fail,missing localId`}},downloadVoice:async function(a,b){let{api:c,args:d,callbackID:e,runtimeID:f}=b;return d.serverId?{errMsg:`${c}:ok`,localId:'wxLocalResource://voiceLocalId1234567890123'}:{errMsg:`${c}:fail,missing serverId`}},translateVoice:async function(a,b){let{api:c,args:d,callbackID:e,runtimeID:f}=b;return d.localId?{errMsg:`${c}:ok`,translateResult:`只是一个模拟调试的结果`}:{errMsg:`${c}:fail,missing localId`}}}}(require('lazyload'),require);