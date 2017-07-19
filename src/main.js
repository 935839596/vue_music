// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'Vuex'

Vue.use(Vuex)

/*vuex保存音乐播放状态和播放的歌曲*/
const store = new Vuex.Store({
  state: {
    musicPlay: {},
    musicPlayState: false
  },
  mutations: {
    musicPlay (music) {
      state.musicPlay = music;
      state.musicPlay = true;
    },
    musicPlayOrStop () {
      state.musicPlayState = !state.musicPlayState;
    }
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
