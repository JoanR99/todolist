import React from 'react';
import Item from '../components/Item';

const TodolistItems = ({ items, onItemDelete }) => {
	console.log(items);
	if (items.length !== 0) {
		let todoItems = items.map((item) => (
			<Item item={item} key={item.id} onItemDelete={onItemDelete} />
		));
		return todoItems;
	} else {
		return <p>There is not stuff to do.</p>;
	}
};

export default TodolistItems;
