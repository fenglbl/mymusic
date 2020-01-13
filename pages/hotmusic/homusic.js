// pages/Home/Home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tab_list: [],
    tab_list_active: 0,
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.callFunction({
      name: 'music_top',
      data: {
        url: "http://musicapi.qianqian.com/v1/restserver/ting?from=android&version=8.1.6.1&channel=xiaomi&operator=3&method=baidu.ting.billboard.getTopList&type_id=601"
      },
      config: {
        env: 'fenglbl-ss8ge'
      }
    })
      .then(res => {
        let data = JSON.parse(res.result)
        this.setData({
          tab_list: data.result.type_list,
          list: data.result.data_list.data_info.songlist
        })
        console.log(this.data)
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