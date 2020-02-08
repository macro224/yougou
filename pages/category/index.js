// pages/category/index.js
// 引入封装的请求文件
import { request } from '../../requests/request.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 0,
    categories:'' //商品分类数据
  },
  // 获取商品分类数据
  getCategories:async function(){
    const categories = await request({ url:'/categories' })
    this.setData({
      categories
    })
  },
  // 点击切换tab
  tabClick:function(e){
    this.setData({
      current: e.target.dataset.index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCategories()
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