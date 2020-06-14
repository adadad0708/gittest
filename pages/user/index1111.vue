<template>
	<view>
		<view class='user'>
		   <view class='header bg-color acea-row row-between-wrapper'>
		      <view class='picTxt acea-row row-between-wrapper'>
		         <view class='pictrue' @click='goPages("/pages/users/user_info/index")'>
					 <image :src='userInfo.avatar' v-if="userInfo.avatar"></image>
					 <image src='../../static/images/f.png' v-else></image>
				  </view>
		         <view class='text'>
		            <view class='acea-row row-middle'>
		               <view class='name line1' @click='goPages("/pages/users/user_info/index")'>{{userInfo.uid ? userInfo.nickname : '请点击授权'}}</view>
		               <view class='member acea-row row-middle' v-if="userInfo.vip" @click='goPages("/pages/user_vip/index")'>
		               <image :src='userInfo.vip_icon'></image>{{userInfo.vip_name}}</view>
		            </view>
		            <view class='id' @click='goPages("/pages/users/user_info/index")' v-if="userInfo.phone">ID：{{userInfo.uid || 0}}<text class='iconfont icon-bianji1'></text></view>
		            <view v-else @click='goPages("/pages/users/user_phone/index")'><text class="binding">绑定手机号</text></view>
		         </view>
		      </view>
			  <!-- #ifdef MP-->
		      <text class='iconfont icon-shezhi' @click='Setting'></text>
			  <!-- #endif -->
			  <!-- #ifndef MP -->
			  <navigator url="/pages/users/user_info/index" class='iconfont icon-shezhi'></navigator>
			  <!-- #endif -->
		   </view>
		   <view class='wrapper'>
		      <view class='nav acea-row row-middle'>
		         <view class='item' @click='goPages("/pages/users/user_money/index")'>
		            <view>我的余额</view>
		            <view class='num'>{{userInfo.now_money || 0}}</view>
		         </view>
		         <view class='item' v-if="userInfo.is_promoter || userInfo.statu==2" @click='goPages("/pages/users/user_spread_user/index")'>
		            <view>当前佣金</view>
		            <view class='num'>{{userInfo.brokerage_price || 0}}</view>
		         </view>
		         <view class='item' v-else @click='goPages("/pages/users/user_integral/index")'>
		            <view>当前积分</view>
		            <view class='num'>{{userInfo.integral || 0}}</view>
		         </view>
		         <view class='item' @click='goPages("/pages/users/user_coupon/index")'>
		            <view>优惠券</view>
		            <view class='num'>{{userInfo.couponCount || 0}}</view>
		         </view>
		      </view>
		      <view class='myOrder'>
		        <view class='title acea-row row-between-wrapper'>
		           <view>我的订单</view>
		           <view class='allOrder' @click='goPages("/pages/users/order_list/index")'>全部订单<text class='iconfont icon-jiantou'></text></view>
		        </view>
		        <view class='orderState acea-row row-middle'>
		           <view class='item' @click='goPages("/pages/users/order_list/index?status=0")'>
		              <view class='pictrue'>
		                <image src='../../static/images/dfk.png'></image>
		                <text class="order-status-num" v-if="orderStatusNum.unpaid_count > 0">{{ orderStatusNum.unpaid_count }}</text>
		              </view>
		              <view>待付款</view>
		           </view>
		            <view class='item' @click='goPages("/pages/users/order_list/index?status=1")'>
		              <view class='pictrue'>
		                <image src='../../static/images/dfh.png'></image>
		                <text class="order-status-num" v-if="orderStatusNum.unshipped_count > 0">{{ orderStatusNum.unshipped_count }}</text>
		              </view>
		              <view>待发货</view>
		           </view>
		            <view class='item' @click='goPages("/pages/users/order_list/index?status=2")'>
		              <view class='pictrue'>
		              <image src='../../static/images/dsh.png'></image>
		              <text class="order-status-num" v-if="orderStatusNum.received_count > 0">{{ orderStatusNum.received_count }}</text>
		              </view>
		              <view>待收货</view>
		           </view>
		            <view class='item' @click='goPages("/pages/users/order_list/index?status=3")'>
		              <view class='pictrue'>
		              <image src='../../static/images/dpj.png'></image>
		              <text class="order-status-num" v-if="orderStatusNum.evaluated_count > 0">{{ orderStatusNum.evaluated_count }}</text>
		              </view>
		              <view>待评价</view>
		           </view>
		            <view class='item' @click='goPages("/pages/users/user_return_list/index")'>
		              <view class='pictrue'>
		              <image src='../../static/images/sh.png'></image>
		              <text class="order-status-num" v-if="orderStatusNum.refund_count > 0">{{ orderStatusNum.refund_count }}</text>
		              </view>
		              <view>售后/退款</view>
		           </view>
		        </view>
		      </view>
		      <view class='myService'>
		         <view class='title acea-row row-middle'>我的服务</view>
		         <view class='serviceList acea-row row-middle'>
		            <view class='item' v-for="(item,index) in MyMenus" :key="index" @click='goPages(item.url)' v-if="item.url!='#' && item.url!='/pages/admin/index' && item.url!='/pages/service/index'">
		              <view class='pictrue'><image :src='item.pic'></image></view>
		              <view>{{item.name}}</view>
		            </view>
					<!-- #ifdef MP -->
		            <button class='item' open-type='contact' hover-class='none'>
		              <view class='pictrue'><image src='../../static/images/customer.png'></image></view>
		              <view>联系客服</view>
		            </button>
					<!-- #endif -->
		         </view>
		      </view>
		   </view>
		   <image src='../../static/images/support.png' class='support'></image>
		</view> 
		<!-- #ifdef MP -->
		<authorize @onLoadFun="onLoadFun" :isAuto="isAuto" :isShowAuth="isShowAuth" @authColse="authColse" ></authorize>
		<!-- #endif -->
	</view>
</template>

<script>
	import { getMenuList, getUserInfo} from '@/api/user.js';
	import { switchH5Login } from '@/api/api.js';
	import { toLogin } from '@/libs/login.js';
	import {mapGetters} from "vuex";
	// #ifdef MP
	import authorize from '@/components/Authorize';
	// #endif
	const app = getApp();
	export default {
		components: {
			// #ifdef MP
			authorize
			// #endif
		},
		data() {
			return {
				userInfo:{},
				    MyMenus:[],
				    isAuto: false, //没有授权的不会自动授权
				    isShowAuth: false, //是否隐藏授权
				    orderStatusNum:{}
			};
		},
		computed: mapGetters(['isLogin']),
		 /**
		   * 生命周期函数--监听页面加载
		   */
		  onLoad: function (options) {
			  let that = this;
			that.$set(that,'MyMenus',app.globalData.MyMenus);
			// #ifdef H5 || APP-PLUS
			if (that.isLogin == false){
				toLogin();
			}
			// #endif
		  },
		onShow:function(){
		    let that = this;
		    if (that.isLogin){ 
		      this.getUserInfo();
		      this.getMyMenus();
		    }
		  },
		methods: {
			onLoadFun(){
				this.getUserInfo();
				this.getMyMenus();
			},
			  Setting: function () {
			      uni.openSetting({
			        success: function (res) {
			          console.log(res.authSetting)
			        }
			      });
			    },
				// 授权关闭
				authColse:function(e){
					this.isShowAuth = e
				},
				/**
				   * 
				   * 获取个人中心图标
				  */
				  getMyMenus: function () {
				    let that = this;
				    if (this.MyMenus.length) return;
				    getMenuList().then(res=>{
					  that.$set(that,'MyMenus',res.data.routine_my_menus);
				    });
				  },
				  /**
				   * 获取个人用户信息
				  */
				  getUserInfo:function(){
				    let that=this;
				    getUserInfo().then(res=>{
						that.$set(that,'userInfo',res.data);
						that.$set(that,'orderStatusNum',res.data.orderStatusNum);
				    });
				  },
					// 添加字符串
					insertStr(soure, start, newStr){
					  return soure.slice(0, start) + newStr + soure.slice(start);
					},
					
				  /**
				   * 页面跳转
				  */
				  goPages:function(url){
						// let data = url
						// let urls = this.insertStr(data,6,'/users')
						// console.log(urls,'urls')
				    if(this.isLogin){
				      if (url == '/pages/users/user_spread_user/index' && this.userInfo.statu==1) {
				        if (!this.userInfo.is_promoter) return this.$util.Tips({ title: '您还没有推广权限！！' });
				      }
				      uni.navigateTo({
				        url: url
				      })
				    }else{
						this.isAuto = true;
						this.$set(this,'isShowAuth',true);
				    }
				  },
		}
	}
</script>

<style scoped lang="scss">
	.user .header{padding:0 30rpx;height:190rpx;position:relative;}
	.user .header:after { position: absolute;left: 0;right: 0;bottom: -98rpx;z-index: -1;
	  content:'';height:100rpx;width: 100%;border-radius: 0 0 50% 50%;background-color: #e93323;}
	.user .header .picTxt .pictrue{width:120rpx;height:120rpx;}
	.user .header .picTxt .pictrue image{width:100%;height:100%;border-radius:50%;border:2px solid #f5f5f5;}
	.user .header .picTxt .text{width:434rpx;color:rgba(255,255,255,1);margin-left:35rpx;}
	.user .header .picTxt .text .name{font-size:32rpx;max-width:270rpx;}
	.user .header .picTxt .text .member{padding:0 10rpx;height:36rpx;background-color:rgba(0, 0, 0, 0.2);font-size:20rpx;border-radius:30rpx;margin-left:17rpx;}
	.user .header .picTxt .text .member image{width:28rpx;height:28rpx;font-size:20rpx;margin-right:8rpx;}
	.user .header .picTxt .text .id{color:rgba(255,255,255,0.6);font-size:26rpx;margin-top:15rpx;}
	.user .header .picTxt .text .id .iconfont{font-size:30rpx;margin-left:12rpx;}
	.user .header .icon-shezhi{font-size:36rpx;color:#fff;margin-top:-52rpx;}
	.user .wrapper{padding:0 20rpx;}
	.user .wrapper .nav{background-color:#fff;border-radius:6rpx;height:140rpx;}
	.user .wrapper .nav .item{flex:1;text-align:center;font-size:26rpx;color:#aaa;}
	.user .wrapper .nav .item~.item{border-left:1px solid #eee;}
	.user .wrapper .nav .item .num{margin-top:10rpx;font-size:36rpx;color:#282828;}
	.user .wrapper .myOrder{background-color:#fff;border-radius:10rpx;margin-top:15rpx;}
	.user .wrapper .myOrder .title,.user .wrapper .myService .title{height:88rpx;padding:0 30rpx;border-bottom:1px dashed #ddd;font-size:30rpx;color:#282828;}
	.user .wrapper .myOrder .title .allOrder{font-size:26rpx;color:#666;}
	.user .wrapper .myOrder .title .allOrder .iconfont{font-size:30rpx;margin-left:7rpx;}
	.user .wrapper .myOrder .orderState{height:160rpx;}
	.user .wrapper .myOrder .orderState .item{font-size:26rpx;color:#454545;flex:1;text-align:center;}
	.user .wrapper .myOrder .orderState .item .pictrue{width:49rpx;height:42rpx;margin:0 auto 18rpx auto;position: relative;}
	.user .wrapper .myOrder .orderState .item .pictrue image{width:100%;height:100%;}
	.user .wrapper .myService{background-color:#fff;margin-top:15rpx;border-radius:10rpx;}
	.user .wrapper .myService .serviceList{padding:8rpx 0 27rpx 0;}
	.user .wrapper .myService .serviceList .item{width:25%;text-align:center;font-size:26rpx;color:#333;margin-top:30rpx;}
	.user .wrapper .myService .serviceList .item .pictrue{width:52rpx;height:52rpx;margin:0 auto 16rpx auto;}
	.user .wrapper .myService .serviceList .item .pictrue image{width:100%;height:100%;}
	.user .support{width:219rpx;height:74rpx;margin:54rpx auto;display:block;}
	.switchWindow{width:560rpx;border-radius:20rpx;background-color:#fff;position:fixed;top:50%;left:50%;margin-left:-280rpx;margin-top:-300rpx;z-index:99;padding:50rpx 30rpx 40rpx 30rpx;text-align:center;box-sizing:border-box;transition:all 0.3s ease-in-out 0s;opacity:0;transform: scale(0);}
	.switchWindow.on{opacity:1;transform: scale(1);}
	.switchWindow .pictrue{width:236rpx;height:236rpx;margin:0 auto;}
	.switchWindow .pictrue image{width:100%;height:100%;}
	.switchWindow .info{font-size:32rpx;color:#282828;margin-top:44rpx;font-weight:bold;}
	.switchWindow .switchBnt{font-size:32rpx;color:#fff;width:360rpx;height:82rpx;border-radius:41rpx;margin:57rpx auto 0 auto;background-image: linear-gradient(to right,#f67a38 0%,#f11b09 100%);line-height:82rpx;}
	.switchWindow .switchBnt.cancelBnt{background-color:#fff;color:#999;background-image:none;margin-top:10rpx;}
	.order-status-num {min-width: 24rpx;background-color: #fff;color: #ee5a52;border-radius: 15rpx;position: absolute;right: -5rpx;top: -16rpx;font-size: 23rpx;padding: 0 5rpx; border: 1rpx solid #ee5a52;}
	.user .binding{padding: 2rpx 18rpx; background-color: #ca1f10; border-radius: 50px;font-size: 22rpx;border: 1px solid #e8695e;color: #ffffff;}
</style>
