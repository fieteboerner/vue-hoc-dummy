import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { },
  mutations: { },
  getters: { },
  modules: {
    scope1: {
      namespaced: true,
      state: {
        progress: parseInt(window.localStorage.getItem('progress'), 10) || 0,
        target: 100,
      },
      mutations: {
        updateProgress(state, progress){
          state.progress = progress;
          window.localStorage.setItem('progress', progress);
        }
      },
      getters: {
        progress: state => state.progress,
        target: state => state.target,
      },

    }
  }
})
