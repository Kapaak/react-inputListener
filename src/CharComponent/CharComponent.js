const charComponent = ({ line, remove }) => {
	const style = {
		display: "inline-block",
		padding: "16px",
		textAlign: "center",
		margin: "16px",
		border: "1px solid black",
	};

	const array = [...line];

	let list = (
		<ul>
			{array.map((arr, index) => {
				return <li onClick={() => remove(index)}>{arr}</li>;
			})}
		</ul>
	);

	return <div style={style}>{list}</div>;
};

export default charComponent;
