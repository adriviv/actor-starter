// pages/new/new.js

var app = getApp()
Page({
  data: {
    loading: false,
  },

  // Retrieve user info
  onLoad: function () {
  },

  // New Restaurant Submission
  bindSubmit: function (e) {
    let user = {
      email: e.detail.value.email,
      password: e.detail.value.password,
    }

    wx.request({
      url: `http://localhost:3000/api/v1/sessions`,
      method: 'POST',
      data: { user: user },
      success: res => {
        console.log(res)
        wx.setStorageSync('token', res.data.auth_token)
        wx.setStorageSync('email', user.email)

        wx.navigateTo({
        url: '/pages/profile/profile'
        });
      }
    })
  }
})



