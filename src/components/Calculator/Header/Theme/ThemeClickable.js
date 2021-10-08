import ThemeBall from './ThemeBall';
import ThemeParagraphs from './ThemeParagraphs';
import { useContext } from 'react';
import ThemeProvider from '../../../../context/theme-ctx';

const ThemeClickable = () => {
	const { theme, setTheme } = useContext(ThemeProvider);

	const handleClick = ({ target }) => {
		setTheme(target.dataset.theme);
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

export default ThemeClickable;
