import { createContext } from 'react';

const CalcContext = createContext({
	result: '',
	setResult: () => {},
});

export default CalcContext;
