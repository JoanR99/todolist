import React from 'react';

const Item = ({ item }) => {
	return (
		<div className="item">
			<input type="checkbox" />
			<p>{item}</p>
		</div>
	);
};

export default Item;
