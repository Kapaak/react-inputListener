const validationComponent = ({ length }) => {
	return (
		<div>
			{length < 5 ? (
				<div>
					<p>Malý text</p>
				</div>
			) : (
				<p>Velký text</p>
			)}
		</div>
	);
};

export default validationComponent;
