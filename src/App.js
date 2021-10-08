import { useState, useEffect } from 'react';
import { getFromStorage } from './storage/storage';
import Wrapper from './components/UI/Wrapper/Wrapper';
import Header from './components/Calculator/Header/Header';
import Display from './components/Calculator/Display/Display';
import PanelResult from './components/Calculator/PanelResult/PanelResult';
import ThemeContext from './context/theme-ctx';
import CalcContext from './context/calc-ctx';

function App() {
	const [theme, setTheme] = useState('first');
	const [result, setResult] = useState('');

	useEffect(() => {
		setTheme(getFromStorage('theme'));
	}, []);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<CalcContext.Provider value={{ result, setResult }}>
				<Wrapper name={theme}>
					<Header />
					<PanelResult />
					<Display />
				</Wrapper>
			</CalcContext.Provider>
		</ThemeContext.Provider>
	);
}

export default App;
