import Vue from 'vue'
// import App from './App.vue'
import testBanner from './App.vue'
new Vue({
  el: '#app',
  // render: h => h(App)
  components: { testBanner },
  template: '<testBanner/>',
})
export { testBanner };
export default testBanner;
