import { createContext } from 'react';

const ThemeContext = createContext({
	theme: 1,
	setTheme: () => {},
});

export default ThemeContext;
