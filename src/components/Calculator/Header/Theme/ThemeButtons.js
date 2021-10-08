import ThemeBall from './ThemeBall';
import ThemeParagraphs from './ThemeParagraphs';
import { useContext } from 'react';
import { saveToStorage } from '../../../../storage/storage';
import ThemeProvider from '../../../../context/theme-ctx';

const ThemeButtons = () => {
	const { theme, setTheme } = useContext(ThemeProvider);

	const handleClick = ({ target }) => {
		const targetData = target.dataset.theme;
		saveToStorage(targetData);
		setTheme(targetData);
	};

	return (
		<div className='theme__switcher'>
			<ThemeParagraphs />
			<button data-theme='first' className='theme__btn' onClick={handleClick}>
				{theme === 'first' ? <ThemeBall /> : null}
			</button>
			<button data-theme='second' className='theme__btn' onClick={handleClick}>
				{theme === 'second' ? <ThemeBall /> : null}
			</button>
			<button data-theme='third' className='theme__btn' onClick={handleClick}>
				{theme === 'third' ? <ThemeBall /> : null}
			</button>
		</div>
	);
};

export default ThemeButtons;
