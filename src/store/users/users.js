import {users} from '@/data/users.json';
import {filtersMap} from '@/utils/utils';

export default {
	namespaced: true,
  state: {
    users: [],
		usersLoading: true,
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setUsersLoading(state, payload) {
      state.usersLoading = payload;
    },
  },
  actions: {
    async fetchUsers({ commit }) {
			// иммитация асинхронного запроса
			commit('setUsersLoading', true);

			await setTimeout(() => {
				commit('setUsers', users);
				commit('setUsersLoading', false);
			}, 1000);
    },
  },
  getters: {
		getUsers(state, getters, rootState, rootGetters) {
			const selectedFilters = rootGetters['filters/getSelectedFilters'];

			return Object.keys(selectedFilters).reduce((acc, filter) => {
				return filtersMap[filter].call(acc, selectedFilters[filter]);
			}, state.users);
		},
  },
};
