<template>
	<view class="container">
		<uni-nav-bar title="打印设备管理" left-icon="back" fixed backgroundColor='#fff' color='#000' :border='false'>
		</uni-nav-bar>
		<view class="ul">
			<view class="li" v-for="(item, index) in bluetooth" :key="index" :title="item.name"
				@click="createBLEConnection(item.deviceId, index)">
				<view class="li-left">
					<view class="blueImg">
					</view>
					<view class="eqName">{{ item.name }}</view>
				</view>
				<view class="status">
					<view v-if="isLink[index]==0" class="ft-color-999999"></view>
					<view v-if="isLink[index]==1" class="ft-color-999999">连接中...</view>
					<view v-if="isLink[index]==2" class="ft-color-007FFF">已连接</view>
					<view v-if="isLink[index]==3" class="ft-color-999999">连接失败</view>
					<view v-if="isLink[index]==4" class="ft-color-999999">已断开</view>
					<view v-if="isLink[index]==2" @click.stop="closeBLEConnection(item.deviceId,index)"
						class="ft-color-green iconfont icon-info m-lt20 ft-40 ft-color-999999"> 断开连接</view>
				</view>
			</view>
		</view>
		<view style="display: flex;">
			<button @click="startBluetoothDevicesDiscovery" v-show="isSearchShow" class="foot-btn-g">搜索周围设备</button>
		</view>
		<textarea auto-height placeholder-style="color:#F76260" placeholder="请输入票据信息" v-model="piaojuText" />
		<button style="margin-top: 100upx;" @click="senBleLabel()" v-show="isGetShow">打印</button>
	</view>
</template>

<script>
	//蓝牙打印 指令和转码
	var tsc = require('../../../components/gprint/tsc.js')
	var esc = require('../../../components/gprint/esc.js')
	import {
	    mapState,
	    mapGetters,
	    mapMutations
	} from 'vuex'	
	export default {
		data() {
			return {
				isSearch: false,
				bluetooth: [],
				isLink: [],
				// 调试数据
				serverList: [],
				characteristics: [],
				serviceId: '',
				characteristicId: '',
				macBlueName: 'Printer001', //对应的蓝牙名称
				macBlueDeviceId: "",
				macBlueIndex: 0,
				isSearchShow: false,
				isGetShow: true,
				connected: 0,
				piaojuText:'',
			}
		},
		computed: {
            ...mapState(['blueName']),
		},onLoad(){
			//蓝牙是否在扫描设备
			uni.onBluetoothAdapterStateChange((res)=>{
				 console.log("蓝牙" + (res.discovering ? "开启":"关闭") + "搜索")
				 this.discovering = res.discovering;
			})
			//监听扫描到的蓝牙设备
			uni.onBluetoothDeviceFound(resd=>{
				//在这里识别你要用到的设备；
				const devices = resd.devices;
			})		
			//监听蓝牙连接状态
			uni.onBLEConnectionStateChange(res=>{
				console.log(`设备 ${res.deviceId},connected: ${res.connected}`)
				this.Connecting = res.connected;
				if(res.connected == false){
					this.closeBluetoothAdapter();
					this.closeBLEConnection(res.deviceId,0);
					this.connected = 1;	
					if (this.connected == 1) {
						//选择适合需求的定时器
						this.timer = setTimeout(() => {
							this.getBlueInfo()
						}, 1000)
					}
				}else{
				   this.connected = 0;	
				}
				this.deviceId = res.deviceId;
			})},
		onShow() {
			//console.log("blueName",this.blueName)
			console.log('ENTER TO')
			this.getBlueInfo()
		},
		methods: {
			// 监听蓝牙设备连接状态
			listenerConnection() {
				console.log('监听蓝牙设备连接状态')
				let _this = this;
				plus.bluetooth.onBLEConnectionStateChange(function(e) {
					console.log('connection state changed: ' + JSON.stringify(e));
					_this.deviceId = e.deviceId;
					_this.createBLEConnection(_this.deviceId)
				});
			},
			// 蓝牙手机初始化
			getBlueInfo() {
				console.log('getBlueInfo')
				const _this = this
				plus.bluetooth.openBluetoothAdapter({
					success(res) {
						console.log(JSON.stringify(res))
						_this.startBluetoothDevicesDiscovery()
					},
					fail(err) {
						console.log('fail', err)
						uni.showToast({
							title: '未检测到蓝牙',
							icon: 'none'
						})
					}
				});
			},
			// 搜索周围蓝牙设备
			startBluetoothDevicesDiscovery() {
				console.log('开始搜索蓝牙设备')
				const _this = this
				console.log(_this.bluetooth)
				this.isSearch = true
				this.bluetooth = []
				this.searchNoNameBluetooths = []
				plus.bluetooth.startBluetoothDevicesDiscovery({
					// services:['FE7D','FFF0'],//可选 要获取设备的uuid列表
					success(res) {
						console.log(JSON.stringify(res))
						plus.bluetooth.onBluetoothDeviceFound(res => {
							console.log('蓝牙名称', res.devices[0].deviceId)
							if (res.devices[0].name == _this.macBlueName) {
								console.log(JSON.stringify(res))
                                uni.setStorageSync(res.devices[0].name, res);
							}
							_this.getBluetoothDevices();
						})
					},
					fail(err) {
						console.log('错误信息', JSON.stringify(err))
						uni.showToast({
							title: '蓝牙未初始化',
							icon: 'none',
							duration: 2000
						});
					}
				})
			},
			// 停止搜索
			stopBluetoothDevicesDiscovery() {
				plus.bluetooth.stopBluetoothDevicesDiscovery({
					success: e => {
						console.log('停止搜索蓝牙设备:' + e.errMsg);
					},
					fail: e => {
						console.log('停止搜索蓝牙设备失败，错误码：' + e.errCode);
					}
				});
			},
			// 获取已发现的蓝牙设备
			getBluetoothDevices() {
				console.log('获取已发现的蓝牙设备')
				const _this = this
				plus.bluetooth.getBluetoothDevices({
					success(res) {
						var isAuto = false;
						var _macBlueDeviceId = "";
						var _macBlueIndex = 0;
						console.log(' 已发现的蓝牙设备', res)
						// _this.stopBluetoothDevicesDiscovery()
						if(this.macBlueName != null && this.macBlueName != '')
						{
						   console.log("蓝牙缓存",key)
						   let key = uni.getStorageSync(this.macBlueName);
						}
						_this.bluetooth = res.devices.filter(item => {
							//console.log('获取已发现的蓝牙设备-名称', item.name)
							if (item.name == _this.macBlueName) {
								console.log('获取已发现的蓝牙设备-deviceId', item.deviceId)
								_macBlueDeviceId = item.deviceId
								isAuto = true;
							}
							return item.name
						})

						_this.isLink = []
						var i = 0;
						_this.bluetooth.forEach(e => {
							_this.isLink.push(0)
							if (e.name == _this.macBlueName) {
								_macBlueIndex = i;
							}
							i++;
						})
						//console.log('获取已发现的蓝牙设备-_macBlueDeviceId', _macBlueIndex)
						if (isAuto) {
							//连接蓝牙
							_this.createBLEConnection(_macBlueDeviceId, _macBlueIndex)
						}
					}
				})
			},
			// 获取蓝牙适配器状态
			getBluetoothAdapterState() {
				plus.bluetooth.getBluetoothAdapterState({
					success(res) {
						console.log('获取蓝牙适配器状态', res)
					}
				})
			},
			// 连接蓝牙
			createBLEConnection(deviceId, index) {
				console.log('连接蓝牙', deviceId, index)
				const _this = this
				this.deviceId = deviceId;
				if (this.isLink[index] == 2) {
					return;
				}
				this.isLink.splice(index, 1, 1)
				plus.bluetooth.createBLEConnection({
					deviceId: _this.deviceId,
					success: res => {
						console.log(res)
						_this.isLink.splice(index, 1, 2)
						_this.stopBluetoothDevicesDiscovery();
						_this.getBLEDeviceServices(_this.deviceId);
						uni.showLoading({
							title: '连接中...',
							mask: true
						});
						//自动读取称重
					},
					fail: res => {
						if (res.message == 'already connect') {
							_this.isLink[index] = 2;
							_this.stopBluetoothDevicesDiscovery();
							_this.getBLEDeviceServices(_this.deviceId);
						} else {
							_this.isLink.splice(index, 1, 3)
						}
						console.log(JSON.stringify(res))
					}
				})
			},
			//获取蓝牙设备所有服务(service)。
			getBLEDeviceServices(deviceId) {
				const _this = this
				console.log(deviceId)
				setTimeout(() => {
					plus.bluetooth.getBLEDeviceServices({
						// 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
						deviceId: deviceId,
						success: (res) => {
							console.log('获取蓝牙设备所有服务:', JSON.stringify(res.services))
							_this.serverList = res.services
							var findItem = res.services.find(item => {
								//FE7D FFF0
								if (item.uuid != '00001800-0000-1000-8000-00805F9B34FB' && item
									.uuid != '00001801-0000-1000-8000-00805F9B34FB' &&
									item.uuid != '0000180A-0000-1000-8000-00805F9B34FB') {
									return item;
								}
							})
							console.log(JSON.stringify(findItem))
							_this.serviceId = findItem.uuid;
							_this.getBLEDeviceCharacteristics(_this.deviceId)
						},

						fail: res => {
							console.log(res)
						}
					})
				}, 4000)
			},
			// 获取蓝牙特征值
			getBLEDeviceCharacteristics(deviceId) {
				console.log("进入特征");
				const _this = this
				setTimeout(() => {
					plus.bluetooth.getBLEDeviceCharacteristics({
						// 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
						deviceId: deviceId,
						// 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
						serviceId: this.serviceId,
						success: (res) => {
							_this.characteristics = res.characteristics
							console.log('characteristics', JSON.stringify(_this.characteristics))

							let findItem = res.characteristics.find(item => {
								let uuid = item.uuid
								console.log("配置信息",item)
								return item.properties.write
							})
							console.log("characteristicId",findItem)
							_this.characteristicId = findItem.uuid;
							console.log('当前使用的特征characteristicId:', _this.characteristicId)
							_this.notifyBLECharacteristicValueChange(_this.deviceId)
							let bluetoothData = {
								deviceId: _this.deviceId,
								serviceId: _this.serviceId,
								characteristicId: _this.characteristicId
							}
							uni.setStorageSync('bluetoothData', bluetoothData)
							uni.hideLoading();

						},
						fail: (res) => {
							uni.hideLoading();
							console.log(res)
						}
					})
				}, 4000)
			},
			// 启用 notify 功能
			notifyBLECharacteristicValueChange(deviceId) {
				const _this = this;
				console.log('deviceId' + deviceId)
				console.log('serviceId' + _this.serviceId)
				console.log('characteristicId' + _this.characteristicId)
				plus.bluetooth.notifyBLECharacteristicValueChange({
					state: true, // 启用 notify 功能
					// 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
					deviceId: deviceId,
					// 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
					serviceId: _this.serviceId,
					// 这里的 uuid 需要在 getBLEDeviceCharacteristics 接口中获取
					characteristicId: _this.characteristicId,
					success: (res) => {
						console.log('notifyBLECharacteristicValueChange success', res)
						_this.$api.msg('连接成功', 'success')
					},
					fail: (res) => {
						console.log('notifyBLECharacteristicValueChange fail', res)
						console.log(JSON.stringify(res))
						_this.$api.msg('连接失败')
					}
				})
			},
			// senBlData(deviceId, serviceId, characteristicId,uint8Array) {
			// 	console.log('************deviceId = [' + deviceId + ']  serviceId = [' + serviceId + '] characteristics=[' +characteristicId+ "]")
			// 	var uint8Buf = Array.from(uint8Array);
			// 	function split_array(datas,size){
			// 		var result = {};
			// 		var j = 0
			// 		for (var i = 0; i < datas.length; i += size) {
			// 			result[j] = datas.slice(i, i + size)
			// 			j++
			// 		}
			// 		console.log(result)
			// 		return result
			// 	}
			// 	var sendloop = split_array(uint8Buf, 20);
			// 	// console.log(sendloop.length)
			// 	function realWriteData(sendloop, i) {
			// 		var data = sendloop[i]
			// 		if(typeof(data) == "undefined"){
			// 			return
			// 		}
			// 		console.log("第【" + i + "】次写数据"+data)
			// 		var buffer = new ArrayBuffer(data.length)
			// 		var dataView = new DataView(buffer)
			// 		for (var j = 0; j < data.length; j++) {
			// 			dataView.setUint8(j, data[j]);
			// 		}
			// 		uni.writeBLECharacteristicValue({
			// 			deviceId,
			// 			serviceId,
			// 			characteristicId,
			// 			value: buffer,
			// 			success(res) {
			// 				realWriteData(sendloop, i + 1);
			// 			}
			// 		})
			// 	}
			//    var i = 0;
			// 	realWriteData(sendloop, i);
			// },
			//打印的数据
			senBlData(deviceId, serviceId, characteristicId,uint8Array) {
				console.log('************deviceId = [' + deviceId + ']  serviceId = [' + serviceId + '] characteristics=[' +characteristicId+ "]")
				var uint8Buf = Array.from(uint8Array);
				console.log("这个是什么。。。。。",uint8Buf)
				function split_array(datas,size){
					console.log("data是什么：",datas)
					var result = {};
					var j = 0
					for (var i = 0; i < datas.length; i += size) {
						result[j] = datas.slice(i, i + size)
						j++
					}
					console.log(result)
					return result
				}
				var sendloop = split_array(uint8Buf, 20);
				// console.log(sendloop.length)
				function realWriteData(sendloop, i) {
					var data = sendloop[i]
					if(typeof(data) == "undefined"){
						return
					}
					console.log("第【" + i + "】次写数据"+data)
					var buffer = new ArrayBuffer(data.length)
					var dataView = new DataView(buffer)
					for (var j = 0; j < data.length; j++) {
						dataView.setUint8(j, data[j]);
					}
					uni.writeBLECharacteristicValue({
						deviceId,
						serviceId,
						characteristicId,
						value: buffer,
						success(res) {
							realWriteData(sendloop, i + 1);
						}
					})
				}
			   var i = 0;
				realWriteData(sendloop, i);
			},
			senBleLabel() {
				//标签模式
				let deviceId = this.deviceId;
				let serviceId = this.serviceId;
				let characteristicId = this.characteristicId;

				var command = tsc.jpPrinter.createNew()//引入tsc 创建对象 为了传输数据
	  			console.log(command)
	  			
				command.setCls()//清除缓冲区，防止下一个没生效
				command.setSize(39, 30)//设置标签大小，单位mm.具体参数请用尺子量一下
				command.setGap(0)//设置两个标签之间的间隙，单位mm.具体参数请用尺子量一下
				command.setCls()//清除缓冲区
				command.setText(50, 20, "TSS24.BF2", 0, 1, 1, '水果蛋糕')//绘制商品名称
				//command.setText(50, 100, "TSS24.BF2", 0, 1, 1, "货号：______")
				command.setText(50, 115, "TSS24.BF2", 0, 1, 1, '10810020')//绘制商品编号
				command.setText(50, 60, "TSS24.BF2", 0, 1, 1, "售价:")//绘制文字
				command.setText(140, 60, "TSS24.BF2", 0, 1, 1,'29.00’')//绘制价格
				command.setBarCode(20, 155, "128", 48, 0, 0, 2, 2, '10810020')//绘制code128条码
				command.setBar(300, 80, 5, 150);//绘制一条黑线
				command.setPrint(1) //打印 this.count张
				
				// console.log(command)
			    // command.setSize(40, 30)
				// command.setGap(2)
				// command.setCls()
				// command.setText(50, 10, "TSS24.BF2", 1, 1, "打印测试")
				//command.form('202206091001',`单  号:202206091001`,`商品名称:测试商品`,`商品编码:101010006`,`数量:2`)
				//command.setBar(50, 50, "L", 5, "A", "1234567899")
				
				command.setPagePrint()	
				console.log('打印测试',deviceId + '||' + serviceId + '||' + characteristicId)
				 //转码处理
				this.senBlData(deviceId, serviceId, characteristicId,command.getData())
			},
			senBleLabel2(){
				//票据模式
				let deviceId = this.deviceId;
				let serviceId = this.serviceId;
				let characteristicId = this.characteristicId;
				var command = esc.jpPrinter.createNew()
				command.init()
                //command.setText(this.piaojuText);
				command.setBarcodeWidth(80)
				command.setBarcodeHeight(26)
				command.setBarcodeContent("1234567899")
                command.setPrint()
				console.log('打印测试',deviceId + '||' + serviceId + '||' + characteristicId);
				this.senBlData(deviceId, serviceId, characteristicId,command.getData())
			},
			//断开蓝牙连接 
			closeBLEConnection(deviceId, index) {
				const _this = this
				plus.bluetooth.closeBLEConnection({
					deviceId: deviceId,
					success: res => {
						console.log('断开蓝牙连接')
						_this.isLink.splice(index, 1, 4)
					}
				})
			},
			//断开所有已经建立的连接，释放系统资源，要求在蓝牙功能使用完成后调用
			closeBluetoothAdapter() {
				plus.bluetooth.closeBluetoothAdapter({
					success: function(e) {
						console.log('close success: ' + JSON.stringify(e));
					},
					fail: function(e) {
						console.log('close failed: ' + JSON.stringify(e));
					}
				});
			},
			//重启app
			restart(){
				plus.runtime.restart();
			},
		}
	}
</script>

<style scoped lang="scss">
	.ul {
		margin: 10px;

		.li {
			display: flex;
			justify-content: space-between;
			background: #FFFFFF;
			margin-top: 13upx;
			align-items: center;
			font-size: 30upx;
			border-radius: 20upx;
			height: 160upx;
			padding-left: 43upx;

			.li-left {
				display: flex;

				.blueImg {
					width: 77upx;
					height: 74upx;
					margin-right: 40upx;

					image {
						width: 100%;
						height: 100%;
					}
				}

				.eqName {
					color: #000000;
					font-size: 30upx;
					width: 250upx;
					word-break: break-all;
					display: flex;
					align-items: center;
				}
			}

			.status {
				display: flex;

				view {
					margin-right: 48upx;
				}
			}

		}
	}

	.search {
		width: 358upx;
		height: 70upx;
		border-radius: 35upx;
		border: 1px solid #5CA3F9;
		margin-top: 131upx;
		color: #5CA3F9;
		font-size: 24upx;
		line-height: 70upx;
		text-align: center;
	}

	.foot-btn-g {
		color: #007FFF;
		margin-top: 20upx;
	}

	.ft-color-999999 {
		color: #999999;
	}

	.ft-color-007FFF {
		color: #007FFF;
	}

	.container .num {
		font-size: 50px;
		font-weight: 600;
		color: red;
		line-height: 100px;
		border-left: 1px solid #ddd;
		padding: 0 1%;
		text-align: center;
	}
</style>
