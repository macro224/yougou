// pages/search/index.js
import { request } from '../../requests/request.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodList:'', //商品数据
    sosuoVal:'' //输入内容
  },
  // 获取商品数据
  getGoods:async function(){
    if (this.data.sosuoVal){
      const goodList = await request({ url: '/goods/qsearch', data: { query: this.data.sosuoVal.trim()} })
      this.setData({
        goodList
      })
    }else{
      wx.showToast({
        title: '请重新输入...',
        icon: 'none',
        mask: true
      })
    }
  },
  bandInput:function(e){
    this.setData({
      sosuoVal: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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