import Heading from './Heading';
import ThemeSwitcher from './Theme/ThemeSwitcher';

const Header = () => {
	return (
		<header className='header'>
			<Heading title='calc' />
			<ThemeSwitcher />
		</header>
	);
};

export default Header;
