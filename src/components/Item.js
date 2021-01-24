import React from 'react';

const Item = ({ item, onItemDelete }) => {
	return (
		<div className="item">
			<input type="checkbox" onChange={() => onItemDelete(item.id)} />
			<p>{item.name}</p>
		</div>
	);
};

export default Item;
