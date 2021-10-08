export const saveToStorage = key => {
	localStorage.setItem('theme', key);
};

export const getFromStorage = key => {
	return localStorage.getItem(key) || 'first';
};
