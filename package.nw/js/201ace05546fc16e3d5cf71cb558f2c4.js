'use strict';!function(require,directRequire){function a(){x=''}function b(b,c){let e=d.extname(c);'.js'===e?('add'==b||'unlink'==b)&&a():'.json'===e&&a()}async function c(c){if(w){let b=w.setting&&w.setting.newFeature,d=c.setting&&c.setting.newFeature;b!=d&&a()}w=c;let d=await h(c);v&&v.srcPath==d.srcPath||(a(),v&&v.unWatch(b),v=d,v.watch(b))}const d=require('path'),e=require('./d28a711224425b00101635efe1034c99.js'),f=require('./1dea83a77e99a7c94f6b6f01f5c175b0.js'),g=require('./8267de7f4ec7b70a147f3fa5ef2bdea4.js'),h=require('./162bf2ee28b76d3b3d95b685cede4146.js'),i=require('./6b5520e429c60abf5d2f924c0fa05fd0.js'),j=require('./334bc661e13bd1837a230f0835d0a1ee.js'),{asDebug:k,workerAsDebug:l,htmlBegin:m,htmlEnd:n,vendorList:o,workerVendorList:p,devVendorList:q,devWorkerList:r,noBrowser:s}=require('./ebfcad0a5e72b6e693634486564b1394.js'),t=global.appConfig.isDev&&!nw.App.manifest.forceVendor?q:o,u=global.appConfig.isDev&&!nw.App.manifest.forceVendor?r:p;var v,w,x='';e.on('VENDOR_CONFIG_CHANGE',a),e.on('VENDOR_VERSION_CHANGE',a),a(),module.exports=async function(a,b={}){if(await c(a),!x||b.force||global.appConfig.isDev){let b=[];b.push(m),global.appConfig.isDev?b.push('<script src="./__asdebug__/asdebug.js"></script>'):b.push(`<script>${k}</script>`);let c=v.getAllJSFiles(),e={},h=[],j=[],o=[],p=[];const q=await g(a),r=q.workers;r&&b.push(global.appConfig.isDev?'<script src="__workerasdebug__/workerasdebug.js"></script>':`<script>${l}</script>`);for(let a=0,c=t.length;a<c;a++){let c=t[a],e=d.extname(c);'.js'===e?b.push(`<script src="./__dev__/${c}"></script>`):'.css'===e&&b.push(`<link rel="stylesheet" type="text/css" href='./${c}' />`)}if(r){const a=[];for(let b=0,c=u.length;b<c;b++){let c=u[b],e=d.extname(c);'.js'===e&&a.push(`<script src="__workerdev__/${c}"></script>`)}const c=`<script>var __workerVendors__ = ${JSON.stringify(u)}</script>`;b.push(c+'\n'+a.join('\n'))}let s=await f(a),w=s.pages;w.forEach((a)=>{e[a]=!0,h.push(`<script>__wxRoute = '${a}';__wxRouteBegin = true</script>`),h.push(`<script>__wxAppCurrentFile__ = '${a}.js'</script>`),h.push(`<script src="./${a}.js"></script>`),h.push(`<script>require("${a}.js")</script>`),h.push(`<script>
      if(__wxRouteBegin) {
        console.group("${new Date} page 编译错误")
        console.error("${a}.js 出现脚本错误或者未正确调用 Page()")
        console.groupEnd()
      }
      </script>`)});let y=await i.getFileList(a,s);y.forEach((a)=>{e[a]||(e[a]=!0,j.push(`<script>__wxRoute = '${a}'; __wxRouteBegin = true; __wxAppCurrentFile__ = '${a}.js'</script>`),j.push(`<script src="${a}.js"></script>`),j.push(`<script>require("${a}.js")</script>`))}),c.forEach((a)=>{let b=a.replace(/\.js$/,'');if(!e[b])if('app.js'==a)p.push(`<script src="./${a}"></script>`),p.push(`<script>require("${a}")</script>`);else{if(s.subPackages){let b=!1;if(s.subPackages.forEach((c)=>{0==a.indexOf(c.root)&&(b=!0)}),b)return}o.push(`<script src="./${a}"></script>`)}}),b=b.concat(o).concat(p).concat(j).concat(h),b.push(n),x=b.join('\n')}return x}}(require('lazyload'),require);