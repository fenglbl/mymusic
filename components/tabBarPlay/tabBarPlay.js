// pages/tabBarPlay/tabBarPlay.js
var $this = null;
Component({
  properties: {
    // playData: {
    //   type: Object
    // }
  },
  data: {

    audio: {
      destroy() {
        console.log('首次播放')
      }
    },
    playData:{}
  },
  
  methods: {
    play(obj){
      console.log(obj)
      //console.log(this.data)
      //this.data = obj

      
      
      $this.data.audio.destroy()
      $this.setData({
        audio: wx.createInnerAudioContext(),
        playData:obj
      })
      let audio = $this.data.audio
      audio.autoplay = true
      audio.src = obj.bitrate.file_link

      audio.onPlay(() => {
        console.log('开始播放')
      })
      audio.onTimeUpdate((e)=>{
        console.log(e)
      })
    },
  },
  created: function () {
    // 组件生命周期函数，在组件实例进入页面节点树时执行，注意此时不能调用setData

  },
  attached: function () {
    // 组件生命周期函数，在组件实例进入页面节点树时执行。

  },
  ready: function () {
    // 在组件布局完成后执行，此时可以获取节点信息
    $this = this
    this.triggerEvent('myevent', { play: this.play })
  },
})

