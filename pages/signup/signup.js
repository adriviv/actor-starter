var app = getApp();
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
      first_name: e.detail.value.first_name,
      last_name: e.detail.value.last_name,
      address: e.detail.value.address,
      credit_card_number: e.detail.value.credit_card_number,
    }

    wx.request({
      url: `http://localhost:3000/api/v1/users`,
      method: 'POST',
      data: { user: user },
      success: res => {
        wx.reLaunch({
          url: '/pages/index/index'
        });
      }
    })
  }
});



