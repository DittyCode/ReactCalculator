import { useContext } from 'react';
import CalcContext from '../../../context/calc-ctx';

const PanelResult = () => {
	const { result } = useContext(CalcContext);
	return (
		<div className='result'>
			<h3 className='result__heading'>{result || 0}</h3>
		</div>
	);
};

export default PanelResult;
