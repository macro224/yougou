import { BASE_URL } from "./url.js"
export const request = (params) => {
  wx.showLoading({
    title: '正在加载中...',
    mask: true
  })
  return new Promise(function (resolve, reject) {
    wx.request({
      ...params,
      url: BASE_URL + params.url,
      success: res => {
        resolve(res.data.message)
      },
      fail: err => {
        reject(err)
      },
      complete: () => {
        wx.hideLoading();
      }
    })
  })
}