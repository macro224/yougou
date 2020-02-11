// pages/goods_detail/index.js
import { request } from '../../requests/request.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    good:'', //商品数据
    isCollect: false  //是否被收藏
  },
  goods_id: '',
  // 获取商品数据函数
  async getGood(){
    const good = await request({ url: '/goods/detail', data: { goods_id: this.goods_id } })
    // 根据本地数据判断该商品已经被收藏
    let collect = wx.getStorageSync("collect") || [];
    let isCollect = collect.some(v => v.goods_id === good.goods_id)
    this.setData({
      good, isCollect
    })
  },
  // 点击图片预览大图函数
  handMaximg(e){
    const urls=this.data.good.pics.map(v=>v.pics_mid)
    const current = e.currentTarget.dataset.url
    wx.previewImage({
      current,
      urls,
    })
  },
  // 点击收藏和取消收藏
  handShoucang(){
    let isCollect = false;
    // 将商品详情信息存到本地 collect
    let collect = wx.getStorageSync("collect")||[];
    // 判断点击的商品在本地是否已经存在 返回-1则不存在
    let index = collect.findIndex(v=>v.goods_id===this.data.good.goods_id)
    if(index!=-1){
      // 已存在，收藏
      isCollect = false;
      collect.splice(index,1);
      // 取消完成后给出提示
      wx.showToast({
        title: '取消成功',
        icon: 'success',
        mask: true
      })
    }else{
      // 不存在，未收藏
      isCollect = true;
      collect.push({ goods_id: this.data.good.goods_id});
      // 收藏完成后给出提示
      wx.showToast({
        title: '收藏成功',
        icon: 'success',
        mask: true
      })
    }
    wx.setStorageSync("collect", collect)
    // 将计算后的isCollect赋值回去
    this.setData({
      isCollect
    })
  },
  // 点击加入购物车
  handCartadd(){
    let carts = wx.getStorageSync("carts") || [];
    let index = carts.findIndex(v=>v.goods_id===this.data.good.goods_id)
    // 判断index是否为-1，是则不存在===第一次添加购物车
    if(index!=-1){
      // 已存在购物车
      carts[index].num++;
    }else{
      let good = this.data.good
      // 不存在购物车，第一次加入购物车
      good.num = 1; //商品数量
      good.checked = true;
      carts.push( good )
    }
    wx.setStorageSync("carts", carts);
    // 加入完成后给出提示
    wx.showToast({
      title: '加入成功',
      icon: 'success',
      mask: true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.goods_id = options.goods_id
    this.getGood()
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