import React from 'react';
import Item from '../components/Item';

const TodolistItems = ({ items }) => {
	console.log(items);
	if (items.length !== 0) {
		let todoItems = items.map((item, index) => (
			<Item item={item} key={index} />
		));
		return todoItems;
	} else {
		return <p>There is not stuff to do.</p>;
	}
};

export default TodolistItems;