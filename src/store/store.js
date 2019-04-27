import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import actions from './actions';
import modules from './modules/index';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);
Vue.config.devtools = true;
export default new Vuex.Store({
  state,
  actions,
  modules,
  getters,
  mutations
});
