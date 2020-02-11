// pages/goods_list/index.js
import { request } from '../../requests/request.js'
Page({
  QueryParams: {
    cid: '',
    query: '',
    pagenum: 1,
    pagesize: 10
  },
  totalPages: 0,
  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      {
        id: 0,
        value: '综合',
        isActive: true
      }, {
        id: 1,
        value: '销量',
        isActive: false
      }, {
        id: 2,
        value: '价格',
        isActive: false
      }
    ],
    goodsList: []  //商品列表
  },
  // 点击子组件修改父组件中的tabs数据的函数
  tabsChange: function (e) {
    this.setData({
      tabs: e.detail
    })
  },
  // 获取商品列表数据
  getGoodsList:async function(){
    const goodsList = await request({ url: '/goods/search', data: this.QueryParams });
    // 获取总条数
    const total = goodsList.total;
    // 计算总条数
    this.totalPages=Math.ceil(total/this.QueryParams.pagesize)
    // 赋值用于页面渲染
    this.setData({
      goodsList: [...this.data.goodsList, ...goodsList.goods]
    })
    // 关闭下拉刷新
    wx.stopPullDownRefresh()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.QueryParams.cid = options.cid||''
    this.QueryParams.query = options.query
    this.getGoodsList()
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
    this.QueryParams.pagenum = 1;
    this.setData({
      goodsList: []
    })
    this.getGoodsList()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // 判断是否有下一页数据
    if(this.QueryParams.pagenum>=this.totalPages){
      // 没有 给出提示
      wx.showToast({
        title: '没有下一页数据...',
        icon: 'none'
      })
    }else{
      // 有 页数+1并重新获取商品列表数据
      this.QueryParams.pagenum++;
      this.getGoodsList()
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})