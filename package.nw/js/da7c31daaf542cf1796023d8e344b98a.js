'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){function a(a,b){let c=b?`${f.newReportURL}?haveappid=1&appid=${b}`:`${f.newReportURL}?haveappid=0`,d={url:c,forceLogin:-1,body:JSON.stringify({client_useinfo:a,client_time:parseInt(+new Date/1e3)}),method:'post',needToken:1,forceLogin:-1,needCheckErrCode:-1};e(d).then(()=>{}).catch(()=>{})}function b(a){let b=[];for(let c in a)for(let d in a[c])'DEFAULT'==d?b.push({type:g[c],times:a[c].DEFAULT.times}):b.push(_extends({},a[c][d].extraFields,{type:g[c],times:a[c][d].times}));return b}function c(b,c,d){let e=[];e.push({type:g[b],times:1,data:d}),a(e,c)}function d(){for(let c in i){let d=b(i[c]),e='';'noappid'!=c&&(e=c),0<d.length&&a(d,e)}i={}}const e=require('./15ba1827c7f6564a45df6bd44da3a977.js'),f=require('./f171257bbcaef547a3cf27266ccb0db2.js'),g=require('./bd8013ddc05ec46748b69a50cb442520.js'),h=10;var i={},j=-1;setInterval(()=>{d()},300000),module.exports=async function(a,b,e,f){if(e)return void c(a,b,e);if(b&&-1!=j&&b!==j)d();else if(b?j=b:b='noappid',i[b]||(i[b]={}),i[b][a]||(i[b][a]={DEFAULT:{times:0}}),!f)i[b][a].DEFAULT.times++,i[b][a].DEFAULT.times>=h&&d();else{const c=JSON.stringify(f);i[b][a][c]||(i[b][a][c]={extraFields:f,times:0}),i[b][a][c].times++,i[b][a][c].times>=h&&d()}}}(require('lazyload'),require);