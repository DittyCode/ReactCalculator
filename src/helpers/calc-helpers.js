export const mathOperators = () => ['+', '-', 'x', '/'];

export const splittingItem = item => item.split('');

export const mathOperatorsArray = el => {
	return mathOperators().includes(el);
};

export const mathOperatorsItems = item => {
	return splittingItem(item).filter(
		(el, id) => mathOperatorsArray(el) && id !== 0
	);
};

export const sliceFromTo = (item, from, to) => {
	if (to) {
		return getNumber(splittingItem(item).slice(from, to));
	}
	return getNumber(splittingItem(item).slice(from));
};

export const getNumber = arr => Number(arr.join(''));

export const notValidNumber = num => Number.isNaN(num);

export const numberFixed = num =>
	Number.isInteger(num) ? num : num.toFixed(2);
