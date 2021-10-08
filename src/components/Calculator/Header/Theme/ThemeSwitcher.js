import ThemeClickable from './ThemeClickable'

const ThemeSwitcher = () => {
	return (
		<div className='theme'>
			<h2 className='theme__heading'>Theme</h2>
            <ThemeClickable/>
		</div>
	);
};

export default ThemeSwitcher;
