// pages/tabBarPlay/tabBarPlay.js
Component({
  properties: {
    playData: {
      type: Object
    } 
  },
  data: {
    
    // audio: {
    //   destroy() {
    //     console.log('首次播放')
    //   }
    // },
    num:Number
  },
  lifetimes:{
    play: function (obj) {
      console.log(this.data)
    }
  },
  methods: {
    
    // play:function(obj) {
    //   console.log(obj)
    //   //this.data = obj
    //   console.log(666)
    //   console.log(this.data)
    //   var audio = wx.createInnerAudioContext()
    //   // this.audio.destroy()
    //   // this.setData({
    //   //   audio: wx.createInnerAudioContext()
    //   // })
    //   //console.log(this)
    //   //let audio = this.audio
    //   audio.autoplay = true
    //   //audio.src = obj.bitrate.file_link
    //   //console.log(audio)

    //   audio.onPlay(() => {
    //     console.log('开始播放')
    //   })
    // },
  },
  created: function () {
    // 组件生命周期函数，在组件实例进入页面节点树时执行，注意此时不能调用setData
    
  },
  attached: function () {
    // 组件生命周期函数，在组件实例进入页面节点树时执行。
    
  },
  ready: function () {
    // 在组件布局完成后执行，此时可以获取节点信息
    console.log(this)
    this.triggerEvent('myevent', { play: this.play })
  },
})

  

//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow: function () {

//   },

//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide: function () {

//   },

//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload: function () {

//   },

//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh: function () {

//   },

//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom: function () {

//   },

//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage: function () {

//   }
// })