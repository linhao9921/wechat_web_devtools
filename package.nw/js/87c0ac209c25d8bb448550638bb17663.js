'use strict';!function(require,directRequire){function a(){s={}}function b(a,b){let c=e.extname(b);'.js'===c&&delete s[b]}async function c(c){let d=await i(c);q&&q.srcPath==d.srcPath||(a(),q&&q.unWatch(b),q=d,q.watch(b)),r&&r.es6!=c.setting.es6&&a(),r=c.setting}function d(a){u.push(a),t&&clearTimeout(t),t=setTimeout(()=>{t=void 0,k.display({command:l.DISPLAY_INFO,type:'COMPILE_JS_TOO_LARGE_IGNORE',data:{files:[...u]}}),u=[]},1e3)}const e=require('path'),f=require('./d28a711224425b00101635efe1034c99.js'),g=require('babel-code-frame'),h=require('babel-core'),i=require('./162bf2ee28b76d3b3d95b685cede4146.js'),j=require('./6238a86bb7a55c11aa0f9eb335d0f34c.js'),k=require('./2dfc6a3df6d6fc51266b293c8420e88b.js'),l=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),m=require('./949d8235c744ced2a80121e4dba34c28.js'),n=require('./8267de7f4ec7b70a147f3fa5ef2bdea4.js'),o=require('./9beb6be9c4f08fd7406b0e6f964234ea.js'),{noBrowser:p}=require('./ebfcad0a5e72b6e693634486564b1394.js');var q,r,s={};let t,u=[];const v={};a(),module.exports=async function(a,b,f={}){if(b=decodeURI(b),await c(a),!s[b]||f.force){let c=await q.getFile(b),g=await n(a),h=g.workers&&0===b.indexOf(g.workers);if(a.setting.es6){let a=e.basename(b);if(512000>c.length){v[b]=!1;let d=await o({taskName:'processJS',config:{projectPath:q.srcPath,file:b,es6:'yes',sourceMaps:'map',sourceFileName:a},dataStr:c,useBackup:!0,maxTimeout:60000});if(d.error)throw d.error;c=d.map?`${d.code}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,${new Buffer(d.map).toString('base64')}`:d.code}else v[b]=!0,f.noWarnings||d(b)}c=`define("${b}", function(require, module, exports, ${p}){ ${c}\n});`,h&&(c=`__workersCode__['${b}'] = ${JSON.stringify(c)}`),s[b]=c}else s[b]&&a.setting.es6&&v[b]&&(f.noWarnings||d(b));return s[b]}}(require('lazyload'),require);