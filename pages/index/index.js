// pages/logs/index.js
// 引入封装的请求文件
import { request } from '../../requests/request.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lunboList:'',  //轮播图数据
    navList:'',  //导航栏数据
    floorList:''  //楼层样式
  },
  // 获取轮播图数据函数
  getlunboList:async function(){
    const lunboList = await request({ url:'/home/swiperdata' })
    this.setData({
      lunboList
    })
  },
  // 获取导航数据
  getnavList:async function(){
    const navList=await request({ url: '/home/catitems' })
    this.setData({
      navList
    })
  },
  // 获取楼层数据
  getfloorList:async function(){
    const floorList=await request({ url:'/home/floordata' })
    this.setData({
      floorList
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getlunboList()
    this.getnavList()
    this.getfloorList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})