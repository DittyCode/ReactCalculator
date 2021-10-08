const Display = () => {
	return (
		<div className='display'>
			<button className='display__btn'>7</button>
			<button className='display__btn'>8</button>
			<button className='display__btn'>9</button>
			<button className='display__btn action'>DEL</button>
			<button className='display__btn'>4</button>
			<button className='display__btn'>5</button>
			<button className='display__btn'>6</button>
			<button className='display__btn'>+</button>
			<button className='display__btn'>1</button>
			<button className='display__btn'>2</button>
			<button className='display__btn'>3</button>
			<button className='display__btn'>-</button>
			<button className='display__btn'>.</button>
			<button className='display__btn'>0</button>
			<button className='display__btn'>/</button>
			<button className='display__btn'>x</button>
			<button className='display__btn display__btn--large reset action'>
				Reset
			</button>
			<button className='display__btn display__btn--large equal'>=</button>
		</div>
	);
};

export default Display;
