import React from 'react';

const Form = ({ onInputChange, onItemSubmit, value }) => {
	return (
		<form className="item" onSubmit={onItemSubmit}>
			<input
				type="text"
				name="newItem"
				id="newItem"
				placeholder="New Item"
				autoComplete="off"
				onChange={onInputChange}
				value={value}
			/>
			<button type="submit" name="list">
				+
			</button>
		</form>
	);
};

export default Form;
