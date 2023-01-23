import {Filters, Modifiers} from '@/constant/const';
import {getMatchNumber, setMapFilter} from '@/utils/utils';

export default {
	namespaced: true,
  state: {
    [Filters.COUNTRY]: '',
    [Filters.SCORE]: '',
		[Filters.SEX]: '',
  },
  mutations: {
    setCountryFilter(state, filter) {
      state[Filters.COUNTRY] = filter;
    },
    setScoreFilter(state, filter) {
      state[Filters.SCORE] = filter;
    },
		setSexFilter(state, filter) {
      state[Filters.SEX] = filter;
    },
  },
  actions: {
  },
  getters: {
		getSelectedFilters(state) {
			const filterMap = {};

			if (state[Filters.COUNTRY]) {
				setMapFilter(state, filterMap, Modifiers.EQ, Filters.COUNTRY);
			}

			if (state[Filters.SEX]) {
				setMapFilter(state, filterMap, Modifiers.EQ, Filters.SEX);
			}

			if (state[Filters.SCORE]) {
				if (state[Filters.SCORE].match(/>/g)) {
					setMapFilter(state, filterMap, Modifiers.GT, Filters.SCORE, getMatchNumber(state, Filters.SCORE));
				}

				if (state[Filters.SCORE].match(/</g)) {
					setMapFilter(state, filterMap, Modifiers.LT, Filters.SCORE, getMatchNumber(state, Filters.SCORE));
				}
			}

			return filterMap;
		}
  },
};
