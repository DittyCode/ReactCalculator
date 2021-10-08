import DisplayButton from '../../UI/Buttons/DisplayButton';
import { buttons } from '../../../data/display-buttons';

const Display = () => {
	const displayList = buttons.map(({ id, name, value, dispatch }) => (
		<DisplayButton key={id} name={name} value={value} type={dispatch} />
	));

	return <div className='display'>{displayList}</div>;
};

export default Display;
