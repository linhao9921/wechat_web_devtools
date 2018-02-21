'use strict';!function(require,directRequire){async function a(a,b={}){let c=b.error,d=b.title||'',e=c.code,h=c.message,k=n.getCurrent();switch(e){case i.APP_JSON_READ_ERR:{d=`${d} app.json 文件读取错误`;break}case i.APP_JSON_PARSE_ERR:{d=`${d} app.json 文件解析错误`;break}case i.APP_JSON_PAGES_ERR:case i.APP_JSON_ENTRANCE_NOT_FOUND_ERR:case i.APP_JSON_CONTENT_ERR:case i.APP_JSON_WXML_NOT_FOUND:case i.APP_JSON_JS_NOT_FOUND:{d=`${d} app.json 文件内容错误`;break}case i.PAGES_JSON_PARSE_ERR:{d=`${d} ${c.path}.json 文件错误`;break}case i.EXT_JSON_PARSE_ERR:{d=`${d} ext.json 文件解析错误`;break}case i.EXT_JSON_PAGES_ERR:case i.EXT_JSON_CONTENT_ERR:{d=`${d} ext.json 文件内容错误`;break}case i.APPSERVICE_LOSE_WXML:case i.APPSERVICE_LOSE_JS:case i.FILE_NOT_UTF8:case i.BABEL_TRANS_JS_ERR:case i.UGLIFY_JS_ERR:case i.BABILI_JS_ERR:{d=`${d} appservice 生成错误`;break}case i.JS_ES6_ERR:{d=`${d} JS 文件编译错误`,h=`${c.path}\n${h}`;break}case i.POST_WXSS_ERR:{d=`${d} wxss 转换错误`;break}case i.TRANS_WXML_JS_ERR:{let a=await j.parseWxmlErr(k,c.msgForConsole);d=`${d} WXML 文件编译错误`,h=`${a.file}\n${a.msg}`;break}case i.TRANS_WXSS_JS_ERR:{let a=await j.parseWxssErr(k,c.msgForConsole);d=`${d} WXSS 文件编译错误`,h=`${a.file}\n${a.msg}`;break}case i.WEBVIEW_NETWORK_ERROR:return void f(a,c.details);case i.APPSERVICE_NETWORK_ERROR:return void g(a,c.details);}x(a,{title:d,msg:h.replace(/`/g,'\\`')})}function b(a,b){let c=b.target.src,d=l.parse(c),e=d.pathname.replace(/html$/,'wxml'),f=q[b.level],g=(b.message||'').replace(u,'').replace(/\"/g,'\\"');a.executeScript({code:`console.group("${new Date} ${e}")
        console.${f}("${g}")
      console.groupEnd()`})}async function c(a,b){let c=await j.parseWXMLRuntimeErr(b);if(!c)return;let d=q[b.level],e=d;'warn'===e&&(e='warning'),a.executeScript({code:`console.group("${new Date} WXML Runtime ${e}")
        console.${d}(\`${c.file}\`)
        console.${d}(\`${c.msg}\`)
      console.groupEnd()`})}function d(a,b){let c=q[b.level],d=c;'warn'===d&&(d='warning');let e=b.message.replace(`${r}:`,'');a.executeScript({code:`console.group("${new Date} WXS Runtime ${d}")
        console.${c}(\`${e}\`)
      console.groupEnd()`})}function e(a,b){let{message:c,level:d}=b;if(2===d){q[b.level];a.executeScript({code:`console.group("${new Date} 渲染层错误")
        console.error(\`${c}\`)
      console.groupEnd()`})}}async function f(a,b){let{type:c,url:d}=b,e='image'===c&&-1<d.indexOf('do-not-use-local-path-'),f='',g='',h='',i=n.getCurrent();if(e){let b=d.replace(/.*do-not-use-local-path-/,''),c=b.split('&'),e=c[0].replace('./',''),f=parseInt(c[1]),h=parseInt(c[2]);try{const b=await o(i.projectpath);let c=b.getFile(e);c=c.toString(),g=`${e} 中的本地资源图片无法通过 WXSS 获取，可以使用网络图片，或者 base64，或者使用<image/>标签。请参考文档：
  https://mp.weixin.qq.com/debug/wxadoc/dev/qa.html#%E6%9C%AC%E5%9C%B0%E8%B5%84%E6%BA%90%E6%97%A0%E6%B3%95%E9%80%9A%E8%BF%87-css-%E8%8E%B7%E5%8F%96`;let d=m(c,f,h);a.executeScript({code:`console.group("${new Date} 渲染层网络层错误")
            console.error(\`${g}\n${d}\`)
          console.groupEnd()`})}catch(a){return void p.error(`showconsole.js showWebviewNetworkError ${error.toString()}`)}}else{let c=`http://127.0.0.1:${global.proxyPort}/__pageframe__`,d=-1!=b.url.indexOf(c);d?(f=b.error||`the server responded with a status of ${b.statusCode} (${b.statusLine})`,g=`Failed to load local ${b.type} resource ${b.url.replace(c,'')} \n ${f} `,h=''):(f=b.error||`the server responded with a status of ${b.statusCode} (${b.statusLine})`,g=`Failed to load ${b.type} ${b.url.replace(c,'')}\n${f} `,h=b.ip?`From server ${b.ip}`:''),a.executeScript({code:`console.group("${new Date} 渲染层网络层错误")
          console.error(\`${g}\n${h}\`)
        console.groupEnd()`})}}function g(a,b){console.log(b);let c=`因为网络代理软件或者 VPN 影响，工具无法加载本地模拟开发服务 ${b.url} 请尝试以下任一解决方案
1.关闭相关网络代理软件，重新编译成功后，再启动相关网络代理软件；
2.配置相关软件不针对 *.appservice.open.weixin.qq.com 和 *.debug.open.weixin.qq.com 进行代理；
3.配置相关软件不针对 开发者工具 做代理。`;a.executeScript({code:`console.group("${new Date} '工具加载错误'")
        console.error(\`${c}\`)
      console.groupEnd()`})}function h(a,b={}){a.executeScript({code:`console.group("${new Date} ${b.title||'\u9519\u8BEF'}")
        console.error(\`${b.file||''}\n${b.msg}\`)
      console.groupEnd()`})}const i=require('./949d8235c744ced2a80121e4dba34c28.js'),j=require('./6238a86bb7a55c11aa0f9eb335d0f34c.js'),k=require('./6242f55dbdfe53c2f07b7a51568311f2.js').errorPrefix,l=require('url'),m=require('babel-code-frame'),n=require('./3bfffbe88b3d923921f851c0697974fe.js'),o=require('./d62fc37d7aa6416d5dcc240ba94175cd.js'),p=require('./72653d4b93cdd7443296229431a7aa9a.js'),q={0:'info',1:'warn',2:'error',"-1":'debug'},{WXS_RUNTIME_ERROR:r,WEBVIEW_ERROR:s,PAGEJS_FILE_ERROR:t,COMPONENT_FOR_DEVELOPER:u,WXML_RUNTIME_ERROR:v,CODE_ERROR:w}=k,x=(a,b={})=>{let{title:c,msg:d}=b;a.executeScript({code:`console.group("${new Date} ${c}")
        console.error(\`${d}\`)
      console.groupEnd()`})};module.exports=(f,g,i)=>{g==w?a(f,i):g===u?b(f,i):g===v?c(f,i):g===s?e(f,i):g===r?d(f,i):h(f,i)}}(require('lazyload'),require);