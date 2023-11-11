const Form = () => {
	return (
		<form>
			<label htmlFor="title">
				<input
					type="text"
					id="title"
					placeholder="title"
					className="border-2 border-black"
				/>
			</label>
			<label htmlFor="author">
				<input
					type="text"
					id="author"
					placeholder="author"
					className="border-2 border-black ml-3"
				/>
			</label>
			<button type="submit" className="border-2 border-black px-2 py-1">
				submit
			</button>
		</form>
	);
};

export default Form;
