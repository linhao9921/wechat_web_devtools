'use strict';!function(require,directRequire){async function a(){const a=B().project.current;return a&&a.attr&&a.attr.gameApp?void nw.Shell.openExternal('https://mp.weixin.qq.com/debug/wxagame/dev/index.html'):void nw.Shell.openExternal('https://mp.weixin.qq.com/debug/wxadoc/dev/index.html')}function b(a){const b=global.contentWindow.document.activeElement;if('WEBVIEW'===b.tagName)'persist:editor'===b.getAttribute('partition')?c.sendMessage(C,D(a)):b.executeScript({code:`document.execCommand('${a}')`});else{var d;let b=B().window.mainWindow;if(b===e.MAIN_WINDOW_TYPE.WEB_DEBUGGER){let a=global.windowMap.get('WEB_DEBUGGER');d=a&&a.window.document}else if(b===e.MAIN_WINDOW_TYPE.DEV){let a=global.windowMap.get('MAIN');d=a&&a.window.document}else d=global.contentWindow.document;d&&d.execCommand(a)}}const c=require('./ff946754202ecf377034d29daac7c8d9.js'),d=require('./bc78839ccca8df9e5ceeb7fae11b7be2.js'),e=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),f=require('./0634ee2ebd3e560d9d4804ecc960160f.js'),g=require('./37d8b9297fb1bd87f9a3ac407b8006a0.js'),h=require('./1fcc6bd55b687d154a4247e57fe3011d.js'),i=require('./9c906d27ca74e18d0deaaa231e71fdfa.js'),j=require('./6ff091369f442a4678a2ed4a1f758495.js'),k=require('./a8c87029da0fa06e986298d447ab0fe2.js'),l=require('./cc2c2970ff81ae4a83123e81ee123da2.js'),m=require('./fc137838572a83604db39acff8e909e0.js'),n=require('./e98c60a262d8d98e69e574a9d12a21df.js'),o=require('./ba23d8b47b1f4ea08b9fd49939b9443f.js'),p=require('./db2217eb4cff896bdcbc50abe005058f.js'),q=require('./f171257bbcaef547a3cf27266ccb0db2.js'),r=require('./common/locales/index.js'),s=require('./15ba1827c7f6564a45df6bd44da3a977.js'),t=require('./7762da1c646ee434a13c84e0db9e8308.js'),u=require('./e5184416014aff2809a9dee32cc447c8.js'),v=require('./dc59f57d54946e61d27c95ab24d8cb4f.js'),w=require('./eadce02c750c875a10680bcfedadec88.js'),x=require('./c4190a2430506f3602ca550e1e75d620.js'),y=require('./84b183688a46c9e2626d3e6f83365e13.js'),z=require('./9ebfd1a4a241684455002e8c6d889fd7.js'),A=d.dispatch.bind(d),B=d.getState.bind(d),C='EDITOR',D=(a)=>JSON.stringify({type:'COMMAND',command:a});module.exports={about:function(){nw.Shell.openExternal('https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html')},checkUpdate:async function(){const a=await v.refresh();u.resetAlreadyNotify();const b=await u.checkNeedUpdate();b?A(h.showError(r.config.APP_NEED_UPDATE.format(b))):t.checkNeedUpdate(a)?A(h.showError(r.config.APP_NEED_UPDATE.format(a.last_ide))):A(h.showConfirmPopup({id:r.config.APP_NEED_NOT_UPDATE.format(global.appVersion),title:r.config.APP_NEED_NOT_UPDATE.format(global.appVersion),showCancel:!1}))},helpAndFeedback:function(){a()},switchAccount:function(){A(i.loginExpired())},inspectApp:function(){global.isDevWindow?global.Win.showDevTools():chrome.developerPrivate.openDevTools({renderViewId:-1,renderProcessId:-1,extensionId:chrome.runtime.id})},inspectEditor:function(){for(const[a,b]of global.windowMap){const a=b.window.document.querySelector('webview[partition="persist:editor"]');a&&a.showDevTools(!0)}},Doc:a,BBS:async function(a,b=e.IDE_SCENE.MENU_BAR){try{const{resp:c,body:d}=await s({url:`${q.getBbsTicket}?idescene=${b}`,needToken:1});let e=d.open_ticket;e&&(a?nw.Shell.openExternal(`${a}&devcode=${e}`):nw.Shell.openExternal(`https://developers.weixin.qq.com/welogin?devcode=${e}`))}catch(a){nw.Shell.openExternal('https://developers.weixin.qq.com')}},exit:function(){y.quit()},newFile:function(){c.sendMessage(C,D('newFile'))},save:function(){c.sendMessage(C,D('save'))},saveAll:function(){c.sendMessage(C,D('saveAll'))},closeFile:function(){if((()=>{try{return B().window.focus===e.WINDOW_FOCUS.EDITOR}catch(a){return!1}})())c.sendMessage(C,D('closeFile'));else try{chrome.windows.getCurrent((a)=>{const b=global.windowChromeIdMap&&global.windowChromeIdMap[a.id];if(b)try{b.close()}catch(a){}})}catch(a){console.warn('close chrome window failed'),c.sendMessage(C,D('closeFile'))}},newProject:function(){const a=B();if(a.window.mainWindow===e.MAIN_WINDOW_TYPE.DEV){const b=p.get(e.WINDOW_REGISTRY.CREATE_PROJECT);b?b.focus():a.window.popup.createProject&&a.window.popup.createProject.show?(A(l.createProjectClose()),A(l.createProjectOpen())):A(l.createProjectOpen())}else if(a.window.mainWindow===e.MAIN_WINDOW_TYPE.SELECT_PROJECT)A(l.createProjectRequest());else;},viewProjects:function(){const a=B();if(a.window.mainWindow===e.MAIN_WINDOW_TYPE.DEV){const b=p.get(e.WINDOW_REGISTRY.SELECT_PROJECT);b?b.focus():a.window.popup.selectProject&&a.window.popup.selectProject.show?(A(l.selectProjectClose()),A(l.selectProjectOpen())):A(l.selectProjectOpen())}else if(a.window.mainWindow===e.MAIN_WINDOW_TYPE.ENTRANCE)A(l.selectProjectRequest());else;},openProject:function(a){const b=B().project.current;if(b&&b.projectid===a)return;let c=a.split('_')[1];c=c&&decodeURIComponent(c)||'',z.openProject(a)},closeProject:function(){A(l.closeProject())},openAppearanceSettings:function(){A(n.openIDESettings('appearance'))},openShortcutSettings:function(){A(n.openIDESettings('shortcut'))},openEditSettings:function(){A(n.openIDESettings('edit'))},openProxySettings:function(){A(n.openIDESettings('proxy'))},openNotificationSettings:function(){A(n.openIDESettings('notification'))},openProjectSettings:function(){A(m.toggleClickKey(w.PROJECTINFO)),A(h.setProjectInfo({selected:'setting'}))},gotoFile:function(){c.sendMessage(C,D('gotoFile'))},gotoRecentFile:function(){c.sendMessage(C,D('gotoRencentFile'))},gotoPreviousEditor:function(){c.sendMessage(C,D('gotoPreviousEditor'))},gotoNextEditor:function(){c.sendMessage(C,D('gotoNextEditor'))},rebuild:function(){A(o.compile({origin:e.COMPILE_ORIGIN.SHORT_CUT}))},customRebuild:function(a){A(l.selectCompileCondiction(a)),A(o.compile({origin:e.COMPILE_ORIGIN.SHORT_CUT}))},openBuildSettings:function(){},toggleForegroundBackgroundStatus:function(){A(o.toggleBackground())},clearFileCache:function(){A(m.cleanFileCache())},clearAuthCache:function(){A(m.clearAuth())},clearStorageCache:function(){A(m.cleanStorageCache())},preview:function(){A(m.togglePreviewCode())},upload:function(){A(m.toggleClickKey(w.NONE)),A(h.setUploadInfo({show:!0}))},customAnalysis:function(){A(j.openCustomAnalysis())},autoTest:function(){A(j.openMobileTest())},openProjectDetailInformation:function(){A(m.toggleClickKey(w.PROJECTINFO))},toggleFileTree:function(){c.sendMessage(C,D('toggleFileTree'))},focusDebugWindow:function(){},toggleSimulatorWindow:function(){A(k.toggleSimulatorWindow())},moveSimulatorLeft:function(){A(k.setSimulator({position:'left'}))},moveSimulatorRight:function(){A(k.setSimulator({position:'right'}))},toggleEditorWindow:function(){A(k.toggleEditorWindow())},undo:function(){b('undo')},redo:function(){b('redo')},copy:function(){b('copy')},cut:function(){b('cut')},paste:function(){b('paste')},unindent:function(){c.sendMessage(C,D('unindent'))},indent:function(){c.sendMessage(C,D('indent'))},format:function(){c.sendMessage(C,D('format'))},moveLineUp:function(){c.sendMessage(C,D('moveLinesUp'))},moveLineDown:function(){c.sendMessage(C,D('moveLinesDown'))},copyLineUp:function(){c.sendMessage(C,D('copyLinesUp'))},copyLineDown:function(){c.sendMessage(C,D('copyLinesDown'))},find:function(){c.sendMessage(C,D('find'))},findInFiles:function(){c.sendMessage(C,D('findInFiles'))},replace:function(){c.sendMessage(C,D('replace'))},toggleDebugWindow:function(){A(k.toggleDebugWindow())},createCustomCompile:function(a){A(k.setCustomCompile({show:a}))},switchToMiniProgramDev:function(){B().window.mainWindow===e.MAIN_WINDOW_TYPE.WEB_DEBUGGER&&z.switchToMiniProgramDev()&&nw.Window.get().close()},switchToWebDev:function(){B().window.mainWindow===e.MAIN_WINDOW_TYPE.DEV&&z.switchToWebDev()&&A(l.closeProject())},back:function(){A(x.setActions('back'))},forward:function(){A(x.setActions('forward'))},focusAddress:function(){A(x.setActions('focusAddress'))},refresh:function(){A(x.setActions('reload'))},selectAll:function(){b('selectAll')},jumpQCloudPage:async function(a){try{const{body:b}=await s({url:q.gettmpcode,needToken:1,needAppID:1});a=0<a.indexOf('?')?`${a}&tmpcode=${b.tmp_code}`:`${a}?tmpcode=${b.tmp_code}`,nw.Shell.openExternal(a)}catch(a){A(h.showError(a.toString()))}},toggleToolbar:function(){A(k.toggleToolbar())},clearWebviewCache:function(){A(m.cleanWebViewCache())},clearSession:function(){A(m.clearSession())},clearAllCache:function(){A(m.cleanAll())}}}(require('lazyload'),require);