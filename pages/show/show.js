// pages/show/show.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const page = this
    wx.request({
      url: `http://localhost:3000/api/v1/projects/${options.id}`,
      success: res => {
        page.setData(res.data)
        //wx.setNavigationBarTitle({
         // title: page.data.name,   
      }
    })
 

      wx.request({
        url: `http://localhost:3000/api/v1/projects/${options.id}/pledges`,
        method: 'GET',
        success(res) {
      
          //restaurants: res.data.restaurants;

          // Update local data
          console.log(res.data)
          page.setData(res.data)
        },
      });
  
  },

  bindSubmit: function (e) {
    let pledge = {
      amount: e.detail.value.amount
    }
    console.log(e)
    wx.request({
      url: `http://localhost:3000/api/v1/projects/${this.data.id}/pledges`,
      method: 'POST',
      header: {
        'X-User-Token': wx.getStorageSync('token'),
        'X-User-Email': wx.getStorageSync('email'),
      },
      data: { pledge: pledge },
      success: res => {
        console.log(res)
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
  },
})