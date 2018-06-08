<template>
  <div id="app">
    <!--<div class=""><img src="./assets/logo.png" alt=""></div>-->
    <div class="slide">
      <div class="slideshow" @mouseover="stop()" @mouseout="move()">
        <!--<ul>-->
          <!--<li>-->
            <!--<a href="#">-->
            <!--<img src="./assets/logo.png">-->
            <!--</a>-->
          <!--</li>-->
        <!--</ul>-->
        <transition-group tag="ul" name="image">
          <li v-for="(img, index) in imgArray" v-show="index===mark" :key="index">
            <a href="#">
              <img :src='img'>
            </a>
          </li>
        </transition-group>
      </div>
      <div class="bar">
        <span></span>
        <span v-for="(item, index) in imgArray" :key="index"></span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'testBanner',
  created () {
    this.play()
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      activeTab:'0',
      banner: '',
      bannerNum: 2,
      timer: null, //定时器
      mark: 0, //比对图片索引的变量
      imgArray: [
        'http://12301.sy.hn/uploads/20180525/84bc48581bc3d1a5da59ad2a42e0060e.jpg',
        'http://12301.sy.hn/uploads/20180525/5487fe221fb7428d80dbadff9d91d405.png'
      ],
    }
  },
  methods: {
    //轮播图开始
    autoPlay () {
      this.mark++;
      if (this.mark === this.bannerNum) { //当遍历到最后一张图片置零
        this.mark = 0
      }
    },
    play () {
//      setInterval(this.autoPlay, 2500)
      this.timer = setInterval(this.autoPlay, 2500)
    },
    change (i) {
      this.mark = i
    },
    stop () {
      console.log('stop')
      // clearInterval(this.timer)
    },
    move () {
      console.log('move')
      // this.timer = setInterval(this.autoPlay, 2500)
    },
    //轮播图结束
  }
}
</script>

<style lang="scss">
  .image-enter-active {
    transform: translateX(0);
    transition: all 1.5s ease;
  }
  .image-leave-active {
    transform: translateX(-100%);
    transition: all 1.5s ease;
  }
  .image-enter {
    transform: translateX(100%);
  }
  .image-leave {
    transform: translateX(0);
  }
  .slide{
    /*width: 1024px;*/
    height: 3.98rem;
    overflow: hidden;
    position: relative;
    .slideshow {
      /*width: 1024px;*/
      height: 3.98rem;
    }
    li {
      position: absolute;
    }
    .topimg {
      /*width: 1024px;*/
      height: 3.98rem;
    }
    img {
      width: 7.5rem;
      /*width: 100%;*/
      height: 3.98rem;
    }
    .bar {
      position: absolute;
      width: 100%;
      bottom: .10rem;
      margin: 0 auto;
      z-index: 10;
      text-align: center;
    }
    .bar span {
      width: .20rem;
      height: .05rem;
      border: .01rem solid;
      background: white;
      display: inline-block;
      margin-right: .10rem;
    }
    .active {
      background: red !important;
    }
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  body{font-family:Helvetica;font-size: 12px;}
  blockquote,body,button,dd,dl,dt,fieldset,form,h1,h2,h3,h4,h5,h6,hr,input,legend,li,ol,p,pre,td,textarea,th,ul{margin:0;padding:0}
</style>
