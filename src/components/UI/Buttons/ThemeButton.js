import { useContext } from 'react';
import ThemeContext from '../../../context/theme-ctx';
import ThemeBall from '../../Calculator/Header/Theme/ThemeBall';

const ThemeButton = ({ name, themeName, onClick }) => {
	const { theme } = useContext(ThemeContext);

	return (
		<button className={name} data-theme={themeName} onClick={onClick}>
			{theme === themeName ? <ThemeBall /> : null}
		</button>
	);
};

export default ThemeButton;
