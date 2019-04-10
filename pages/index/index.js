//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    
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
        console.log(res.data)
        page.setData(res.data)
      },
    });
  },
    showProject: function (e) {
      const data = e.currentTarget.dataset;
      console.log(data)
      const projectId = data.projectId;

      wx.navigateTo({
        url: `../show/show?id=${projectId}`
      });
    },
});
