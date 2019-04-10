// pages/new/new.js

var app = getApp()
Page({
  data: {
    loading: false,
    userInfo: {},
  },

  // Retrieve user info
  onLoad: function () {
    //console.log('onLoad')
    // var that = this
    // app.getUserInfo(function (userInfo) {
    //   that.setData({
       //  userInfo: userInfo
     //  })
   //  })
  },

  // New Restaurant Submission
  bindSubmit: function (e) {
  // wx.setStorageSync('userInfo', e.detail.value);

    //console.log(e)
     //wx.setStorageSync('userInfo', e.detail.userInfo);

    let user = {
      email: e.detail.value.email,
      password: e.detail.value.password,
    }

    wx.request({
      url: `http://localhost:3000/api/v1/sessions`,
      method: 'POST',
      data: { user: user },
      success: res => {

        if (res.statusCode !== 400) {
          wx.setStorageSync('token', res.data.auth_token)
          wx.setStorageSync('email', user.email)
          wx.reLaunch({
            url: '/pages/index/index'
          });
        }
        

        

       
      }
    })
  }
})