(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-Electronic-bluetooth-bluetooth"],{"6ff1":function(e,t,i){var s=i("df59");"string"===typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);var a=i("4f06").default;a("2ecbe9fe",s,!0,{sourceMap:!1,shadowMode:!1})},"77d9":function(e,t,i){"use strict";var s=i("6ff1"),a=i.n(s);a.a},"97a9":function(e,t,i){"use strict";var s;i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return s}));var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("page-head",{attrs:{title:e.title}}),i("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[i("v-uni-view",[e._v("本蓝牙协议只支持低功耗蓝牙协议ble")]),i("v-uni-view",{staticClass:"uni-btn-v"},[i("v-uni-button",{attrs:{type:"primary",disabled:e.disabled[0]},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.openBluetoothAdapter.apply(void 0,arguments)}}},[e._v("初始化蓝牙模块")]),e.adapterState.available?e._e():i("v-uni-view",[e._v(e._s("蓝牙适配器不可用,请初始化蓝牙模块"))]),i("v-uni-button",{attrs:{type:"primary",loading:e.searchLoad,disabled:e.disabled[1]},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.startBluetoothDevicesDiscovery.apply(void 0,arguments)}}},[e._v("开始搜索蓝牙设备")]),i("v-uni-button",{attrs:{type:"primary",disabled:e.disabled[2]},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.stopBluetoothDevicesDiscovery(!1)}}},[e._v("停止搜索蓝牙设备")]),i("v-uni-button",{attrs:{type:"primary",loading:e.newDeviceLoad,disabled:e.disabled[3]},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.queryDevices.apply(void 0,arguments)}}},[e._v("选择设备")]),e.equipment.length>0?i("v-uni-view",[e._v(e._s((e.connected?"已连接设备":"已选择设备")+" : "+e.equipment[0].name+" ("+e.equipment[0].deviceId+")"))]):e._e(),i("v-uni-button",{attrs:{type:"primary",disabled:e.disabled[4]},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.createBLEConnection.apply(void 0,arguments)}}},[e._v("连接蓝牙设备")]),i("v-uni-button",{attrs:{type:"primary",disabled:e.disabled[5]},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getBLEDeviceServices.apply(void 0,arguments)}}},[e._v("选择设备服务")]),e.servicesData.length>0?i("v-uni-view",[e._v("已选服务uuid："+e._s(e.servicesData[0].uuid))]):e._e(),i("v-uni-button",{attrs:{type:"primary",disabled:e.disabled[6]},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getBLEDeviceCharacteristics.apply(void 0,arguments)}}},[e._v("获取服务的特征值")]),e.characteristicsData.length>0?i("v-uni-view",[i("v-uni-view",{staticClass:"uni-list_name"},[e._v("uuid:"+e._s(e.characteristicsData[0].uuid))]),i("v-uni-view",{staticClass:"uni-list_item"},[e._v("是否支持 read 操作:"+e._s(e.characteristicsData[0].properties.read))]),i("v-uni-view",{staticClass:"uni-list_item"},[e._v("是否支持 write 操作:"+e._s(e.characteristicsData[0].properties.write))]),i("v-uni-view",{staticClass:"uni-list_item"},[e._v("是否支持 notify 操作:"+e._s(e.characteristicsData[0].properties.notify))]),i("v-uni-view",{staticClass:"uni-list_item"},[e._v("是否支持 indicate 操作:"+e._s(e.characteristicsData[0].properties.indicate))])],1):e._e(),i("v-uni-button",{attrs:{type:"primary",disabled:e.disabled[9]},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.closeBLEConnection.apply(void 0,arguments)}}},[e._v("断开蓝牙设备")]),i("v-uni-button",{attrs:{type:"primary",disabled:e.disabled[10]},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.closeBluetoothAdapter.apply(void 0,arguments)}}},[e._v("关闭蓝牙模块")])],1)],1),e.maskShow?i("v-uni-view",{staticClass:"uni-mask",on:{touchmove:function(t){t.stopPropagation(),t.preventDefault(),arguments[0]=t=e.$handleEvent(t),e.moveHandle.apply(void 0,arguments)},click:function(t){arguments[0]=t=e.$handleEvent(t),e.maskclose.apply(void 0,arguments)}}},[i("v-uni-scroll-view",{staticClass:"uni-scroll_box",attrs:{"scroll-y":!0},on:{touchmove:function(t){t.stopPropagation(),t.preventDefault(),arguments[0]=t=e.$handleEvent(t),e.moveHandle.apply(void 0,arguments)},click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.moveHandle.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-title"},[e._v("已经发现"+e._s(e.list.length)+e._s("device"===e.showMaskType?"台设备":"个服务")+":")]),e._l(e.list,(function(t,s){return i("v-uni-view",{key:s,staticClass:"uni-list-box",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.tapQuery(t)}}},["device"===e.showMaskType?i("v-uni-view",[i("v-uni-view",{staticClass:"uni-list_name"},[e._v(e._s(t.name||t.localName))]),i("v-uni-view",{staticClass:"uni-list_item"},[e._v("信号强度:"+e._s(t.RSSI)+"dBm")]),i("v-uni-view",{staticClass:"uni-list_item"},[e._v("UUID:"+e._s(t.deviceId))])],1):e._e(),"service"===e.showMaskType?i("v-uni-view",[i("v-uni-view",{staticClass:"uni-list_item",staticStyle:{"line-height":"2.2"}},[e._v("UUID: "+e._s(t.uuid)),"service"===e.showMaskType?i("v-uni-text",[e._v(e._s(t.isPrimary?"（主服务）":""))]):e._e()],1)],1):e._e(),"characteristics"===e.showMaskType?i("v-uni-view",[i("v-uni-view",{staticClass:"uni-list_name"},[e._v("uuid:"+e._s(t.uuid))]),i("v-uni-view",{staticClass:"uni-list_item"},[e._v("是否支持 read 操作:"+e._s(t.properties.read))]),i("v-uni-view",{staticClass:"uni-list_item"},[e._v("是否支持 write 操作:"+e._s(t.properties.write))]),i("v-uni-view",{staticClass:"uni-list_item"},[e._v("是否支持 notify 操作:"+e._s(t.properties.notify))]),i("v-uni-view",{staticClass:"uni-list_item"},[e._v("是否支持 indicate 操作:"+e._s(t.properties.indicate))])],1):e._e()],1)}))],2)],1):e._e()],1)},o=[]},ab4e:function(e,t,i){"use strict";i.r(t);var s=i("e605"),a=i.n(s);for(var o in s)"default"!==o&&function(e){i.d(t,e,(function(){return s[e]}))}(o);t["default"]=a.a},d5c8:function(e,t,i){"use strict";i.r(t);var s=i("97a9"),a=i("ab4e");for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("77d9");var n,c=i("f0c5"),r=Object(c["a"])(a["default"],s["b"],s["c"],!1,null,"c041b6fa",null,!1,s["a"],n);t["default"]=r.exports},df59:function(e,t,i){var s=i("24fb");t=s(!1),t.push([e.i,".uni-title[data-v-c041b6fa]{\r\n\t/* width: 100%; */\r\n\t/* height: 80rpx; */text-align:center}.uni-mask[data-v-c041b6fa]{position:fixed;top:0;left:0;bottom:0;display:flex;align-items:center;width:100%;background:rgba(0,0,0,.6);padding:0 %?30?%;box-sizing:border-box}.uni-scroll_box[data-v-c041b6fa]{height:70%;background:#fff;border-radius:%?20?%}.uni-list-box[data-v-c041b6fa]{margin:0 %?20?%;padding:%?15?% 0;border-bottom:1px #f5f5f5 solid;box-sizing:border-box}.uni-list[data-v-c041b6fa]:last-child{border:none}.uni-list_name[data-v-c041b6fa]{font-size:%?30?%;color:#333}.uni-list_item[data-v-c041b6fa]{font-size:%?24?%;color:#555;line-height:1.5}.uni-success_box[data-v-c041b6fa]{position:absolute;left:0;bottom:0;min-height:%?100?%;width:100%;background:#fff;box-sizing:border-box;border-top:1px #eee solid}.uni-success_sub[data-v-c041b6fa]{\r\n\t/* width: 100%%; */height:%?100?%;display:flex;justify-content:space-between;align-items:center;padding:0 %?30?%}.uni-close_button[data-v-c041b6fa]{padding:0 %?20?%;height:%?60?%;line-height:%?60?%;background:#ce3c39;color:#fff;border-radius:%?10?%}.uni-success_content[data-v-c041b6fa]{height:%?600?%;margin:%?30?%;margin-top:0;border:1px #eee solid;padding:%?30?%}.uni-content_list[data-v-c041b6fa]{padding-bottom:%?10?%;border-bottom:1px #f5f5f5 solid}.uni-tips[data-v-c041b6fa]{text-align:center;font-size:%?24?%;color:#666}",""]),e.exports=t},e605:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s={data:function(){return{title:"bluetooth",disabled:[!1,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0],newDeviceLoad:!1,searchLoad:!1,maskShow:!1,equipment:[],adapterState:{discovering:!1,available:!1},connected:!1,showMaskType:"device",servicesData:[],characteristicsData:[],valueChangeData:{},isStop:!0,list:[]}},onLoad:function(){this.onBLEConnectionStateChange()},methods:{moveHandle:function(){},maskclose:function(){this.maskShow=!1},queryDevices:function(){this.showMaskType="device",this.maskShow=!0},tapQuery:function(e){"device"===this.showMaskType&&(this.$set(this.disabled,4,!1),this.equipment.length>0?this.equipment[0]=e:this.equipment.push(e),console.log("打印蓝牙",JSON.stringify(e)),this.newDeviceLoad=!1),"service"===this.showMaskType&&(this.$set(this.disabled,6,!1),this.servicesData.length>0?this.servicesData[0]=e:this.servicesData.push(e)),"characteristics"===this.showMaskType&&(this.$set(this.disabled,7,!1),this.characteristicsData.length>0?this.characteristicsData[0]=e:this.characteristicsData.push(e)),this.maskShow=!1},openBluetoothAdapter:function(){var e=this;uni.openBluetoothAdapter({success:function(t){console.log("初始化蓝牙成功:"+t.errMsg),console.log(JSON.stringify(t)),e.isStop=!1,e.$set(e.disabled,0,!0),e.$set(e.disabled,1,!1),e.$set(e.disabled,10,!1),e.getBluetoothAdapterState()},fail:function(e){console.log(e),console.log("初始化蓝牙失败，错误码："+(e.errCode||e.errMsg)),0!==e.errCode&&a(e.errCode,e.errMsg)}})},startBluetoothDevicesDiscovery:function(){var e=this;uni.startBluetoothDevicesDiscovery({success:function(t){console.log("开始搜索蓝牙设备:"+t.errMsg),e.searchLoad=!0,e.$set(e.disabled,1,!0),e.$set(e.disabled,2,!1),e.$set(e.disabled,3,!1),e.onBluetoothDeviceFound()},fail:function(e){console.log("搜索蓝牙设备失败，错误码："+e.errCode),0!==e.errCode&&a(e.errCode)}})},stopBluetoothDevicesDiscovery:function(e){var t=this;uni.stopBluetoothDevicesDiscovery({success:function(i){console.log("停止搜索蓝牙设备:"+i.errMsg),e?t.$set(t.disabled,1,!0):t.$set(t.disabled,1,!1),t.$set(t.disabled,2,!0),t.searchLoad=!1},fail:function(e){console.log("停止搜索蓝牙设备失败，错误码："+e.errCode),0!==e.errCode&&a(e.errCode)}})},onBluetoothDeviceFound:function(){var e=this;uni.onBluetoothDeviceFound((function(t){console.log("开始监听寻找到新设备的事件"),e.getBluetoothDevices()}))},getBluetoothDevices:function(){var e=this;uni.getBluetoothDevices({success:function(t){e.newDeviceLoad=!1,console.log("获取蓝牙设备成功:"+t.errMsg),e.list=t.devices},fail:function(e){console.log("获取蓝牙设备错误，错误码："+e.errCode),0!==e.errCode&&a(e.errCode)}})},getBluetoothAdapterState:function(){var e=this;console.log("---\x3e"),uni.getBluetoothAdapterState({success:function(t){console.log(JSON.stringify(t)),e.adapterState=t},fail:function(e){console.log("获取本机蓝牙适配器状态失败，错误码："+e.errCode),0!==e.errCode&&a(e.errCode)}})},createBLEConnection:function(){var e=this,t=this.equipment[0].deviceId;uni.showToast({title:"连接蓝牙...",icon:"loading",duration:99999}),uni.createBLEConnection({deviceId:t,success:function(t){console.log(t),console.log("连接蓝牙成功:"+t.errMsg),e.stopBluetoothDevicesDiscovery(!0),uni.hideToast(),uni.showToast({title:"连接成功",icon:"success",duration:2e3}),e.$set(e.disabled,3,!0),e.$set(e.disabled,4,!0),e.$set(e.disabled,5,!1),e.$set(e.disabled,9,!1),e.connected=!0},fail:function(e){console.log("连接低功耗蓝牙失败，错误码："+e.errCode),0!==e.errCode&&a(e.errCode)}})},closeBLEConnection:function(){var e=this,t=this.equipment[0].deviceId;uni.closeBLEConnection({deviceId:t,success:function(t){console.log(t),console.log("断开低功耗蓝牙成功:"+t.errMsg),e.$set(e.disabled,1,!1),e.$set(e.disabled,3,!0),e.$set(e.disabled,4,!0),e.$set(e.disabled,5,!0),e.$set(e.disabled,6,!0),e.$set(e.disabled,7,!0),e.$set(e.disabled,8,!0),e.$set(e.disabled,9,!0),e.equipment=[],e.servicesData=[],e.characteristicsData=[]},fail:function(e){console.log("断开低功耗蓝牙成功，错误码："+e.errCode),0!==e.errCode&&a(e.errCode)}})},getBLEDeviceServices:function(){var e=this,t=this.equipment[0].deviceId;console.log("获取所有服务的 uuid:"+t),uni.getBLEDeviceServices({deviceId:t,success:function(t){console.log(JSON.stringify(t.services)),console.log("获取设备服务成功:"+t.errMsg),e.$set(e.disabled,7,!0),e.$set(e.disabled,8,!0),e.showMaskType="service",e.list=t.services,e.characteristicsData=[],e.list.length<=0?o("获取服务失败，请重试!"):e.maskShow=!0},fail:function(e){console.log("获取设备服务失败，错误码："+e.errCode),0!==e.errCode&&a(e.errCode)}})},getBLEDeviceCharacteristics:function(){var e=this,t=this.equipment[0].deviceId,i=this.servicesData[0].uuid;console.log(t),console.log(i),uni.getBLEDeviceCharacteristics({deviceId:t,serviceId:i,success:function(t){console.log(JSON.stringify(t)),console.log("获取特征值成功:"+t.errMsg),e.$set(e.disabled,7,!0),e.valueChangeData={},e.showMaskType="characteristics",e.list=t.characteristics,e.list.length<=0?o("获取特征值失败，请重试!"):e.maskShow=!0},fail:function(e){console.log("获取特征值失败，错误码："+e.errCode),0!==e.errCode&&a(e.errCode)}})},onBLEConnectionStateChange:function(){var e=this;uni.onBLEConnectionStateChange((function(t){if(console.log("蓝牙连接状态 --------------------------\x3e"),console.log(JSON.stringify(t)),!t.connected){if(e.isStop)return;console.log("断开低功耗蓝牙成功:"),e.$set(e.disabled,1,!1),e.$set(e.disabled,3,!0),e.$set(e.disabled,4,!0),e.$set(e.disabled,5,!0),e.$set(e.disabled,6,!0),e.$set(e.disabled,7,!0),e.$set(e.disabled,8,!0),e.$set(e.disabled,9,!0),e.searchLoad=!1,e.equipment=[],e.servicesData=[],e.characteristicsData=[],e.valueChangeData={},o("已经断开当前蓝牙连接")}}))},readBLECharacteristicValue:function(){var e=this,t=this.equipment[0].deviceId,i=this.servicesData[0].uuid,s=this.characteristicsData[0].uuid;console.log(t),console.log(i),console.log(s),uni.readBLECharacteristicValue({deviceId:t,serviceId:i,characteristicId:s,success:function(t){console.log("读取设备数据值成功"),console.log(JSON.stringify(t)),e.notifyBLECharacteristicValueChange()},fail:function(e){console.log("读取设备数据值失败，错误码："+e.errCode),0!==e.errCode&&a(e.errCode)}}),this.onBLECharacteristicValueChange()},onBLECharacteristicValueChange:function(){var e=this;uni.onBLECharacteristicValueChange((function(t){console.log("监听低功耗蓝牙设备的特征值变化事件成功"),console.log(JSON.stringify(t)),e.valueChangeData=t}))},notifyBLECharacteristicValueChange:function(){var e=this.equipment[0].deviceId,t=this.servicesData[0].uuid,i=this.characteristicsData[0].uuid,s=this.characteristicsData[0].properties.notify;console.log(e),console.log(t),console.log(i),console.log(s),uni.notifyBLECharacteristicValueChange({state:!0,deviceId:e,serviceId:t,characteristicId:i,success:function(e){console.log("notifyBLECharacteristicValueChange success:"+e.errMsg),console.log(JSON.stringify(e))}})},closeBluetoothAdapter:function(e){var t=this;uni.closeBluetoothAdapter({success:function(e){console.log("断开蓝牙模块成功"),t.isStop=!0,t.$set(t.disabled,0,!1),t.$set(t.disabled,1,!0),t.$set(t.disabled,2,!0),t.$set(t.disabled,3,!0),t.$set(t.disabled,4,!0),t.$set(t.disabled,5,!0),t.$set(t.disabled,6,!0),t.$set(t.disabled,7,!0),t.$set(t.disabled,8,!0),t.$set(t.disabled,9,!0),t.$set(t.disabled,10,!0),t.equipment=[],t.servicesData=[],t.characteristicsData=[],t.valueChangeData={},t.adapterState=[],t.searchLoad=!1,o("断开蓝牙模块")}})}}};function a(e,t){switch(e){case 1e4:o("未初始化蓝牙适配器");break;case 10001:o("未检测到蓝牙，请打开蓝牙重试！");break;case 10002:o("没有找到指定设备");break;case 10003:o("连接失败");break;case 10004:o("没有找到指定服务");break;case 10005:o("没有找到指定特征值");break;case 10006:o("当前连接已断开");break;case 10007:o("当前特征值不支持此操作");break;case 10008:o("其余所有系统上报的异常");break;case 10009:o("Android 系统特有，系统版本低于 4.3 不支持 BLE");break;default:o(t)}}function o(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];uni.showModal({title:"提示",content:e,showCancel:t})}t.default=s}}]);