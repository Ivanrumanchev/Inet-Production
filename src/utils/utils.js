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