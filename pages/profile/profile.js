// pages/event/event.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    event: {},
    user: wx.getStorageSync('email')

  },

  /**
   * 生命周期函数--监听页面加载
   */

  SignOut: function (e) {

    wx.removeStorage({
      key: 'token',
      key: 'email',
      success: function (res) {
        console.log(res.data)
        wx.reLaunch({
          url: '/pages/index/index'
        });
      }
    })
  },
          


  onLoad: function (options) {
    let page = this;
   

    wx.request({
      url: `http://localhost:3000/api/v1/initiatives`,
      method: 'get',
      header: {
        'X-User-Token': wx.getStorageSync('token'),
        'X-User-Email': wx.getStorageSync('email'),
      },
      success: function (res) {
        if (res.statusCode == 401) {
          wx.reLaunch({
            url: '/pages/login/login'
          });
        } else {
        page.setData({
          projects: res.data.projects
        })
      }
      }
    })
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
