(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-Electronic-websocket-socketTask-websocket-socketTask"],{"0b0f":function(t,n,e){t.exports=e.p+"static/img/logo.809a8db2.png"},5529:function(t,n,e){t.exports=e.p+"static/img/bg-0.5225c942.gif"},"58ec":function(t,n,e){var o=e("24fb");n=o(!1),n.push([t.i,".bg-0[data-v-15c0a834]{position:fixed;width:100%;height:100%;opacity:.3;z-index:0}uni-page-body[data-v-15c0a834]{background-color:#10111a!important\n\t\t/* background:url(../../../static/image/bg-0.gif) no-repeat;\n\t\tbackground-size: 100% 100%; */}body[data-v-15c0a834]{background-color:#10111a}.logo[data-v-15c0a834]{padding:0 15% 0 2%;height:60px;line-height:60px;display:flex;justify-content:space-between;align-items:center;width:83%;position:relative;z-index:9}.logo uni-image[data-v-15c0a834]{width:25%}.products[data-v-15c0a834]{width:92%;height:430px;margin:10px auto;display:flex;justify-content:space-between;align-items:center;font-size:34px;padding:0;background-color:#f9f9f9;border-radius:5px;border:1px solid #eee;background-color:rgba(2,14,35,.8);color:#fff;text-align:center;position:relative;z-index:9}.products .num[data-v-15c0a834]{font-size:240px;font-weight:600;line-height:430px;border-left:1px solid #ddd;padding:0 1%}.products .names[data-v-15c0a834]{display:flex;justify-content:center;align-items:center;text-align:center;font-size:90px;line-height:120px;margin:0 auto}.products .names uni-image[data-v-15c0a834]{width:35px;margin-right:6px}.operate[data-v-15c0a834]{width:88%;margin:5% auto 2%;text-align:center}.operate .p[data-v-15c0a834]{font-size:14px;color:#666;line-height:50px}.operate uni-button[data-v-15c0a834]{font-size:22px}.uni-btn-v[data-v-15c0a834]{padding:%?10?% 0}.uni-btn-v uni-button[data-v-15c0a834]{margin:%?20?% 0}.websocket-msg[data-v-15c0a834]{color:#f9f9f9;font-size:16px}\n\t/* .websocket-msg {\n\t\tpadding: 40px 0px;\n\t\ttext-align: center;\n\t\tfont-size: 14px;\n\t\tline-height: 40px;\n\t\tcolor: #666666;\n\t} */.websocket-tips[data-v-15c0a834]{padding:40px 0;text-align:center;font-size:14px;line-height:24px;color:#666}",""]),t.exports=n},"6a66":function(t,n,e){var o=e("58ec");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=e("4f06").default;i("3d89c9ec",o,!0,{sourceMap:!1,shadowMode:!1})},"7b0d":function(t,n,e){"use strict";e.r(n);var o=e("96c3"),i=e("8841");for(var c in i)"default"!==c&&function(t){e.d(n,t,(function(){return i[t]}))}(c);e("e6a3");var a,s=e("f0c5"),r=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,"15c0a834",null,!1,o["a"],a);n["default"]=r.exports},"82f6":function(t,n,e){"use strict";e("d3b7"),e("e25e"),e("25f0"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=uni.getSystemInfoSync().platform,i={data:function(){return{connected:!1,connecting:!1,msg:!1,timer:null,heartbeatInterval:null,reconnectTimeOut:null,connecturl:"ws://192.168.0.102:8000",spname:"",spqty:""}},computed:{showMsg:function(){return this.connected?this.msg?this.msg:"连接成功":""!=this.msg?this.msg:"未连接"},showspame:function(){return this.spname},showspqty:function(){return this.spqty}},onShow:function(){var t=this;this.connected?this.timer=setTimeout((function(){uni.onSocketMessage((function(n){var e=JSON.parse(n.data);t.spname=e.SPNAME,t.spqty=e.SPQTY}))}),1e3):(this.timer=setTimeout((function(){t.connect()}),1e3),this.timer=setInterval((function(){t.connect()}),1e3))},onUnload:function(){uni.closeSocket(),uni.hideLoading()},methods:{connect:function(){var t=this;this.connected||this.connecting?console.log("正在连接或者已经连接，请勿重复连接"):(this.connecting=!0,console.log("连接中"),uni.connectSocket({url:this.connecturl,data:function(){return{msg:"连接成功"}},success:function(t){},fail:function(t){}}),uni.onSocketOpen((function(n){t.connecting=!1,t.connected=!0,uni.hideLoading(),uni.showToast({icon:"none",title:"连接成功"}),console.log("onOpen",n)})),uni.onSocketError((function(n){t.connecting=!1,t.connected=!1,uni.hideLoading(),t.msg="连接失败",console.log("onError",n)})),uni.onSocketMessage((function(n){t.msg="连接成功";var e=JSON.parse(n.data);t.spname=e.SPNAME,t.spqty=e.SPQTY,console.log("onMessage",n)})),uni.onSocketClose((function(n){t.connected=!1,t.startRecive=!1,t.msg="未连接",uni.closeSocket(),console.log("onClose",n)})))},send:function(){uni.sendSocketMessage({data:"from "+o+" : "+parseInt(1e4*Math.random()).toString(),success:function(t){console.log(t)},fail:function(t){console.log(t)}})},close:function(){uni.closeSocket(),clearTimeout(this.timer),this.timer=null},reconnect:function(){var t=this;clearInterval(this.heartbeatInterval),console.log(this.connected),this.connected||(this.reconnectTimeOut=setInterval((function(){t.connect()}),1e3))}}};n.default=i},8841:function(t,n,e){"use strict";e.r(n);var o=e("82f6"),i=e.n(o);for(var c in o)"default"!==c&&function(t){e.d(n,t,(function(){return o[t]}))}(c);n["default"]=i.a},"96c3":function(t,n,e){"use strict";var o;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){return o}));var i=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("v-uni-view",[o("v-uni-image",{staticClass:"bg-0",attrs:{src:e("5529")}}),o("v-uni-view",{staticClass:"logo"},[o("v-uni-image",{attrs:{src:e("0b0f"),mode:"widthFix"}}),o("v-uni-view",{staticClass:"websocket-msg"},[t._v(t._s(t.showMsg))])],1),o("v-uni-view",{staticClass:"products"},[o("v-uni-view",{staticClass:"names"},[o("v-uni-text",[t._v(t._s(t.showspame))])],1),o("v-uni-view",{staticClass:"num"},[t._v(t._s(t.showspqty))])],1)],1)},c=[]},e6a3:function(t,n,e){"use strict";var o=e("6a66"),i=e.n(o);i.a}}]);