var app = getApp()
Page({
  data: {
    loading: false,
    user: wx.getStorageSync('email')
  },

  // Retrieve user info
  onLoad: function () {
  },

  // New Restaurant Submission
  bindSubmit: function (e) {
    let project = {
      name: e.detail.value.name,
      description: e.detail.value.description,
      location: e.detail.value.location,
      category: e.detail.value.category,
      rewards: e.detail.value.rewards,
      amount_objective: e.detail.value.amount_objective,
      video: e.detail.value.video,
      image: e.detail.value.image
    }

    wx.request({
      url: `http://localhost:3000/api/v1/initiatives`,
      method: 'POST',
      header: {
        'X-User-Token': wx.getStorageSync('token'),
        'X-User-Email': wx.getStorageSync('email'),
      },
      data: { project: project },
      success: res => {
        if (res.statusCode == 401) {
          wx.reLaunch({
            url: '/pages/login/login'
          });
        } else {
          wx.showToast({
            title: 'Succeed',
            icon: 'success',
            duration: 3000
          });
          setTimeout(function () {
            wx.reLaunch({
              url: '/pages/index/index',
            })
          }, 1500);
        }
      }
    })
  }
})
