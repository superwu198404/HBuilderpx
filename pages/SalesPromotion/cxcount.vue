<template>
	<view>
		<view class="products">
			<view class="cx-msg">
				<text>{{showMsg}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	const requestUrl = 'http://192.168.0.132:8806/CxService/CxCount'
	let platform = uni.getSystemInfoSync().platform
	export default {
		data() {
			return {
				msg: '',
				res: '',
				timer: null,
			}
		},
		computed: {
			showMsg() {
				return this.msg;
			}
		},
		onShow() {
			this._request()
		},
		onUnload() {
			uni.hideLoading()
		},
		methods: {
			_request() {
				console.log("_request")
				uni.request({
					url: requestUrl,
					dataType: 'json',
					method: 'POST',
					data: {
						products: '[{\"ProCode\":\"10101016\",\"ProName\":\"水果沙拉\",\"ProNum\":\"1\",\"ProPrice\":\"100\",\"Disc\":\"0\",\"ProSalePrice\":\"100\",\"ProOPrice\":\"100\",\"ProImagePath\":\"\",\"SCID\":\"\",\"PLID\":null,\"SPJF\":\"0\",\"ProGGName\":\"\",\"isShowSpecs\":true,\"ProImagePathList\":null,\"SCID\":\"c8a26261-1b5d-44b6-9d73-b08e4f6b72fc\",\"CxBill\":\"\"},{\"ProCode\":\"10101020\",\"ProName\":\"礼盒2号\",\"ProNum\":\"1\",\"ProPrice\":\"200\",\"Disc\":\"0\",\"ProSalePrice\":\"200\",\"ProOPrice\":\"200\",\"ProImagePath\":\"\",\"SCID\":\"\",\"PLID\":null,\"SPJF\":\"0\",\"ProGGName\":\"\",\"isShowSpecs\":true,\"ProImagePathList\":null,\"SCID\":\"d92f195e-e424-4d37-9f95-b373bd0f3f8c\",\"CxBill\":\"\"}]',
						khid: 'K0101QT11',
					    hylevel: '',
					},
					header: {
						'content-type': 'application/json' //自定义请求头信息
					},
					success: (res) => {
						console.log('request success', res)
						this.res = '请求结果 : ' + JSON.stringify(res);
						this.msg = JSON.stringify(res.data);
					},
					fail: (err) => {
						console.log('request fail', err);
						this.msg ='request fail';
					},
					complete: () => {
						this.loading = false;
					}
				});
			}
		}
	}
</script>

<style>
	.bg-0{
		position: fixed;
		width:100%;
		height: 100%;
		opacity: 0.3;
		z-index: 0;
	}
	uni-page-body{
		background-color: #10111a !important;
	}
	body{
		background-color: #10111a;
	}
	.cx-msg{
		color: #f9f9f9;
		font-size: 16px;
	}
</style>
