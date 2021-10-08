import { useContext } from 'react';
import {
	mathOperatorsItems,
	mathOperatorsArray,
	sliceFromTo,
	notValidNumber,
} from '../../../helpers/calc-helpers';
import CalcContext from '../../../context/calc-ctx';

const DisplayButton = ({ value, name, type }) => {
	const { result, setResult } = useContext(CalcContext);

	const validResultInput = () => {
		if (!mathOperatorsItems(result).length) {
			setResult(result => result + value);
		}
	};

	const preventInsertMultipleDots = () => {
		const lastElement = result[result.length - 1];

		if (result.includes('.')) return;

		!mathOperatorsArray(lastElement) && setResult(result => result + value);
	};

	const getValues = () => {
		const operatorIdx = result.indexOf(mathOperatorsItems(result)[0]);

		const firstValue = sliceFromTo(result, 0, operatorIdx);
		const secondValue = sliceFromTo(result, operatorIdx + 1);

		return { firstValue, secondValue };
	};

	const mathSwitcher = () => {
		const { firstValue, secondValue } = getValues();

		if (notValidNumber(firstValue) || notValidNumber(secondValue)) return;

		switch (mathOperatorsItems(result)[0]) {
			case '+':
				return (firstValue + secondValue).toFixed();
			case '-':
				return (firstValue - secondValue).toFixed();
			case 'x':
				return (firstValue * secondValue).toFixed();
			case '/':
				return (firstValue / secondValue).toFixed();
			default:
				console.log('dont have this math operator');
				break;
		}
	};

	const doMath = () => {
		if (!mathOperatorsItems(result).length) return;

		const value = mathSwitcher() || 0;

		console.log(mathSwitcher());

		setResult(value.toString());
	};

	const switcher = () => {
		switch (type) {
			case 'ADD':
				setResult(result => result + value);
				break;
			case 'RESET':
				setResult('');
				break;
			case 'DEL':
				const redelated = result.slice(0, result.length - 1);
				setResult(redelated);
				break;
			case 'MATH':
				validResultInput();
				break;
			case 'DOT':
				preventInsertMultipleDots();
				break;
			case 'EQUAL':
				doMath();
				break;
			default:
				console.log(`${type} is not allowed`);
				break;
		}
	};

	return (
		<button className={name} onClick={switcher}>
			{value}
		</button>
	);
};

export default DisplayButton;