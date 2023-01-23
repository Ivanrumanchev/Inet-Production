import {Modifiers} from '@/constant/const.js';

/**
 * Функция для получения числа из строки
 * @param {object} obj - Объект, из которого будет браться поле;
 * @param {string} field - Искомое поле.
 */

export const getMatchNumber = (obj, field) => Number(obj[field].match(/\d/g).join(''));


/**
 * Функция для добавления в мапу фильтра
 * @param {object} state - стейт хранилища Vuex;
 * @param {object} map - сама мапа;
 * @param {string} modifier - модификатор, по которому будет производиться фильтрация;
 * @param {string} filter - название фильтра;
 * @param {any} value - само значениа фильтра. Если есть, то будет подставлено в value,
 * если нет, то будет использовано значение поля из стейта - state[filter].
 */

export const setMapFilter = (state, map, modifier, filter, value) => {
	map[modifier] ??= [];

	map[modifier].push({
		filter,
		value: value ?? state[filter],
	});
}


/**
 * Мапа для фильтрации, у нас может быть на каждый модификатор несколько фильтров
 * Поэтому все фильтры по модификатору передаются как параметр функции и возвращается отфильтрованный массив
 */

export const filtersMap = {
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