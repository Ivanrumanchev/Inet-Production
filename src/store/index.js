import Vue from 'vue';
import Vuex from 'vuex';
import users from './users/users';
import filters from './filters/filters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
	getters: {
	},
  modules: {
    users,
		filters,
  },
});
