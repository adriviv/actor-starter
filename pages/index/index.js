//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    user: wx.getStorageSync('email')
  },
  //事件处理函数

  





  onLoad: function (options) {




    let page = this; 

    wx.request({
      url: "http://localhost:3000/api/v1/projects",
      method: 'GET',
      success(res) {
        //restaurants: res.data.restaurants;

        // Update local data
        page.setData(res.data)
      },
    });
  },
    showProject: function (e) {
      const data = e.currentTarget.dataset;
      const projectId = data.projectId;

      wx.navigateTo({
        url: `../show/show?id=${projectId}`
      });
    },
});
