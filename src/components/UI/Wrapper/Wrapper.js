const Wrapper = ({ children, name }) => {
	return (
		<main className={`main ${name}`}>
			<div className='calculator'>{children}</div>
		</main>
	);
};

export default Wrapper;
