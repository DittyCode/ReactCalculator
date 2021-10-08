const ThemeParagraphs = () => {
	const paragraphsList = new Array(3)
		.fill(0)
		.map((_, id) => <Paragraph key={id + 1} title={id + 1} />);

	return <div className='theme__paragraphs'>{paragraphsList}</div>;
};

const Paragraph = ({ title }) => <p>{title}</p>;

export default ThemeParagraphs;
