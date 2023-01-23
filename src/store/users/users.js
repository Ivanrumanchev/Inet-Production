import {users} from '@/data/users.json';
import {Modifiers} from '@/constant/const.js';

export default {
	namespaced: true,
  state: {
    users: [],
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
    fetchUsers({ commit }) {
			commit('setUsers', users);
    },
  },
  getters: {
		getUsers(state, getters, rootState, rootGetters) {
			const filtersMap = {
				[Modifiers.EQ]: function (filterList) {
					return filterList.reduce((acc, currentFilter) => {
						return acc.filter((user) => user[currentFilter.filter] === currentFilter.value);
					}, this);
				},
				[Modifiers.GT]: function (filterList) {
					return filterList.reduce((acc, currentFilter) => {
						return acc.filter((user) => user[currentFilter.filter] > currentFilter.value);
					}, this);
				},
				[Modifiers.LT]: function (filterList) {
					return filterList.reduce((acc, currentFilter) => {
						return acc.filter((user) => user[currentFilter.filter] < currentFilter.value);
					}, this);
				},
			};

			const selectedFilters = rootGetters['filters/getSelectedFilters'];

			return Object.keys(selectedFilters).reduce((acc, filter) => {
				return filtersMap[filter].call(acc, selectedFilters[filter]);
			}, state.users);
		},
  },
};
