'use strict';!function(require,directRequire){const a=require('react'),b=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),c=require('./1c48b306885608960cb81098864d8bb0.js'),d=require('./f2b0fd116ee25849124e867e0da34f23.js');class e extends a.Component{constructor(a){super(a),this._setStatus=this.setStatus.bind(this),this.state={status:b.LOGIN_QR_STATUS.NOT_SCAN}}componentDidMount(){this.resize()}componentWillReceiveProps(){}componentWillUnmount(){}resize(){try{setTimeout(()=>{let a=this.props.win?this.props.win:global.Win;a.show(),a.setResizable(!0),a.resizeTo(b.SIZE.LOGIN.WIDTH,b.SIZE.LOGIN.HEIGHT),a.setResizable(!1)},120)}catch(a){}}setStatus(a){this.setState({status:a})}reset(){try{this.qr&&this.qr.getWrappedInstance().reset()}catch(a){}}handleQuitClick(){this.props.appQuit()}render(){let e=this.state.status===b.LOGIN_QR_STATUS.SCAN?{}:{display:'none'};return a.createElement('div',{className:'container',style:{WebkitAppRegion:'drag'}},a.createElement('div',null,a.createElement('div',null,a.createElement(c,null),a.createElement('div',{className:'welcome'},a.createElement('div',{className:'welcome-hd'},a.createElement('h2',null,'\u5FAE\u4FE1\u5F00\u53D1\u8005\u5DE5\u5177'),a.createElement('p',null,'v',global.appVersion)),a.createElement('div',{className:'welcome-bd'},a.createElement('div',{className:'authenticate'},a.createElement('div',{className:'authenticate-bd'},a.createElement(d,{ref:(a)=>this.qr=a,from:'mainlogin',setStatus:this._setStatus})),a.createElement('div',{className:'authenticate-ft'},a.createElement('p',null,'\u8BF7\u4F7F\u7528\u5FAE\u4FE1\u626B\u63CF\u4E8C\u7EF4\u7801\u767B\u5F55')))),a.createElement('div',{className:'welcome-ft',style:e},a.createElement('div',{className:'luncher-account'},a.createElement('div',{className:'luncher-account-avatar'}),a.createElement('div',{className:'luncher-account-name',onClick:this.reset.bind(this)},a.createElement('p',null,'\u5207\u6362\u5E10\u53F7'),a.createElement('i',{className:'ui-icon-arrow-right-o'}))))))))}}module.exports=e}(require('lazyload'),require);