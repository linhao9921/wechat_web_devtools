'use strict';!function(require,directRequire){const a=require('./822bc5aa1823c9aa222d9ffad72e7f17.js'),b=require('./f0b1e76146041102932a0ff6c1247619.js'),c=require('./df6d0ff021a69fb541c733de4dbba0fe.js'),d=require('./common/locales/index.js'),e=require('./15ba1827c7f6564a45df6bd44da3a977.js'),f=require('./0b01a3ff1572567a994a0ceae64dfef3.js'),g=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),h=require('./bc78839ccca8df9e5ceeb7fae11b7be2.js'),i=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),j=require('./2dfc6a3df6d6fc51266b293c8420e88b.js'),k=require('url'),l=require('querystring');module.exports={showDevtools:function(b){return{type:a.WEBDEBUGGER_SHOW_DEVTOOLS,webview:b}},setUrl:function(b){return{type:a.WEBDEBUGGER_SET_URL,url:b}},getA8Key:function(e){return(f)=>{b(e).then((b)=>{let g=b.baseresponse||{},h=g.errcode;if(h==c.NOT_LIMITS||h==c.NOT_LIMITS_QY){let b=i.parseCgiErrorCode(h,g.errmsg);return void f({type:a.WEBDEBUGGER_SET_CONFIRM,data:{show:!0,confirmText:'\u67E5\u770B\u6587\u6863',content:b,callback:(a)=>{a&&nw.Shell.openExternal('https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1455784140')}}})}if(0!==h){let b=i.parseCgiErrorCode(h,g.errmsg);return void f({type:a.WEBDEBUGGER_SET_CONFIRM,data:{show:!0,confirmText:'\u51FA\u73B0\u9519\u8BEF',content:b}})}f({type:a.WEBDEBUGGER_SET_PURVIEW,data:{purviewFormGetA8key:b.purviewFormGetA8key}});let j=b.resp_url;if(e.isSync||b.force_redirect||h==c.ILLEGAL_URL)return f({type:a.WEBDEBUGGER_SET_URL,url:j,from:e.from}),void f({type:a.WEBDEBUGGER_SET_ACT,data:'load'});let k=/\#wechat_redirect$/.test(e.url);if(k&&e.url.replace(/\#wechat_redirect$/,'')===j)return j=j.replace(/\#wechat_redirect/,''),void f({type:a.WEBDEBUGGER_SET_CONFIRM,data:{show:!0,showCancel:!1,content:d.config.CGI_ERR_OAUTH_NOT_SUPPORT}})}).catch((b)=>{f({type:a.WEBDEBUGGER_SET_CONFIRM,data:{show:!0,showCancel:!1,content:b}})})}},setAutoComplete:function(b){return{type:a.WEBDEBUGGER_SET_AUTOCOMPLETE,url:b}},setActions:function(b){return{type:a.WEBDEBUGGER_SET_ACT,data:b}},setFooter:function(b){return{type:a.WEBDEBUGGER_SET_FOOTER,data:b}},setShare:function(b){return{type:a.WEBDEBUGGER_SET_SHARE,data:b}},setJssdkCallback:function(b){return{type:a.WEBDEBUGGER_SET_JSSDKCALLBACK,data:b}},hideCardView:function({callbackID:b,res:c,runtimeID:d}){return(e)=>{e({type:a.WEBDEBUGGER_SET_CARD_VIEW,data:{show:'none',cardInfo:[]}}),b&&e({type:a.WEBDEBUGGER_SET_JSSDKCALLBACK,data:{callbackID:b,runtimeID:d,res:c}})}},batchAddCard:function({callbackID:b,list:c,runtimeID:d}){return(g)=>{const i=h.getState(),j=i.webdebugger||{},k=j.cardInfo||{},l=k.appid;let m={url:`${f.batchAddCardURL}?isapp=1`,body:JSON.stringify({appid:l,acceptitem_list:c}),method:'post',needToken:1};e(m).then((e)=>{let f=e.body,h=f.resp_list;h=h.map((a,b)=>{let d=c[b],e=JSON.parse(a.json_ret);return{cardId:d.card_id,cardExt:d.card_ext,code:e.encrypt_code,isSuccess:!0}}),g({type:a.WEBDEBUGGER_SET_JSSDKCALLBACK,data:{callbackID:b,runtimeID:d,res:{errMsg:`addCard:ok`,cardList:h}}})}).catch((c)=>{g({type:a.WEBDEBUGGER_SET_JSSDKCALLBACK,data:{callbackID:b,runtimeID:d,res:{errMsg:`addCard:fail ${c}`}}})}),g({type:a.WEBDEBUGGER_SET_CARD_VIEW,data:{show:'none',cardInfo:[]}})}},clearAutoComplete:function(){return{type:a.WEBDEBUGGER_CLEAR_AUTOCOMPLETE}},setClickkey:function(b){return(c)=>{c({type:a.TOOLBAR_TOGGLE_CLICKKEY,clickKey:b}),c({type:a.WEBDEBUGGER_SET_CLICKKEY,data:b})}},setLeftBtn:function(b){return{type:a.WEBDEBUGGER_SET_LEFTBTN,data:b}},setTitle:function(b){return{type:a.WEBDEBUGGER_SET_TITLE,data:b}},setUrlComplete:function(b){return{type:a.WEBDEBUGGER_SET_URLCOMPLETE,data:b}},setConfirm:function(b){return{type:a.WEBDEBUGGER_SET_CONFIRM,data:b}},getWeappA8Key:function(e){return(f,h)=>{const m=h(),n=(m.project.current||{setting:{urlCheck:!0}}).setting.urlCheck,o=/^https:\/\/open\.weixin\.qq\.com\/connect\/oauth2/.test(e.url);if(!n&&!o){j.display({command:g.DISPLAY_INFO,type:g.DISPLAY_TYPES.HINT_NO_URL_CHECK}),f({type:a.WEBDEBUGGER_SET_PURVIEW,data:{purviewFormGetA8key:{}}});let b=e.url;if(e.isSync)return f({type:a.WEBDEBUGGER_SET_URL,url:b}),void f({type:a.SIMULATOR_UPDATE_HTMLWEBVIEW,data:{htmlId:e.htmlId,webviewID:e.webviewID,forceRedirect:0,src:b}});let c=/\#wechat_redirect$/.test(e.url);return c&&e.url.replace(/\#wechat_redirect$/,'')===b?(b=b.replace(/\#wechat_redirect/,''),void f({type:a.INFO_SET_CONFIRM,data:{show:!0,showCancel:!1,content:d.config.CGI_ERR_OAUTH_NOT_SUPPORT}})):void 0}e.isWeapp=!0,b(e).then((b)=>{let g=b.baseresponse||{},h=g.errcode;if(h==c.NOT_LIMITS||h==c.NOT_LIMITS_QY){let b=i.parseCgiErrorCode(h,g.errmsg),c=e.url;if(o){let a=k.parse(c),d=l.parse(a.query);c=d.redirect_uri,c&&(b=`${b}, url:${c}`)}return void f({type:a.INFO_SET_CONFIRM,data:{show:!0,confirmText:'\u67E5\u770B\u6587\u6863',content:`${b}`,callback:(a)=>{a&&nw.Shell.openExternal('https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1455784140')}}})}f({type:a.WEBDEBUGGER_SET_PURVIEW,data:{purviewFormGetA8key:b.purviewFormGetA8key}});let j=b.resp_url;if(e.isSync||b.force_redirect||h==c.ILLEGAL_URL)return f({type:a.WEBDEBUGGER_SET_URL,url:j}),void f({type:a.SIMULATOR_UPDATE_HTMLWEBVIEW,data:{htmlId:e.htmlId,webviewID:e.webviewID,forceRedirect:b.force_redirect||h==c.ILLEGAL_URL,src:j}});let m=/\#wechat_redirect$/.test(e.url);if(m&&e.url.replace(/\#wechat_redirect$/,'')===j)return j=j.replace(/\#wechat_redirect/,''),void f({type:a.INFO_SET_CONFIRM,data:{show:!0,showCancel:!1,content:d.config.CGI_ERR_OAUTH_NOT_SUPPORT}})}).catch((b)=>{f({type:a.INFO_SET_CONFIRM,data:{show:!0,showCancel:!1,content:b}})})}}}}(require('lazyload'),require);