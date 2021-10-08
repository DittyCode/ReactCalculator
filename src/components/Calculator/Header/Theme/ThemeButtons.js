import ThemeParagraphs from './ThemeParagraphs';
import { useContext } from 'react';
import { saveToStorage } from '../../../../storage/storage';
import ThemeButton from '../../../UI/Buttons/ThemeButton';
import ThemeProvider from '../../../../context/theme-ctx';
import { themeButtons } from '../../../../data/theme-buttons';

const ThemeButtons = () => {
	const { setTheme } = useContext(ThemeProvider);

	const handleClick = ({ target }) => {
		console.log(target);
		const targetData = target.dataset.theme;
		saveToStorage(targetData);
		setTheme(targetData);
	};

	const buttonsList = themeButtons.map(({ name, theme, id }) => (
		<ThemeButton key={id} name={name} themeName={theme} onClick={handleClick} />
	));

	return (
		<div className='theme__switcher'>
			<ThemeParagraphs />
			{buttonsList}
		</div>
	);
};

export default ThemeButtons;
