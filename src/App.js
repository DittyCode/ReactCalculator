import { useState } from 'react';
import Wrapper from './components/UI/Wrapper/Wrapper';
import Header from './components/Calculator/Header/Header';
import Display from './components/Calculator/Display/Display';
import PanelResult from './components/Calculator/PanelResult/PanelResult';
import ThemeContext from './context/theme-ctx';

function App() {
	const [theme, setTheme] = useState('first');

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<Wrapper name={theme}>
				<Header />
				<PanelResult />
				<Display />
			</Wrapper>
		</ThemeContext.Provider>
	);
}

export default App;
