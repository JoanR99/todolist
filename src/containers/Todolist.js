import React from 'react';
import TodolistItems from './TodolistItems';
import Form from '../components/Form';

class Todolist extends React.Component {
	constructor() {
		super();
		this.state = {
			input: '',
			items: [],
		};
		this.onInputChange = this.onInputChange.bind(this);
		this.onItemSubmit = this.onItemSubmit.bind(this);
	}

	onInputChange(event) {
		this.setState({ input: event.target.value });
	}

	onItemSubmit(event) {
		event.preventDefault();
		const todoItems = this.state.items;
		todoItems.push(this.state.input);
		this.setState({ items: todoItems });
		this.setState({ input: '' });
		console.log(this.state);
		event.preventDefault();
	}

	render() {
		return (
			<div className="box">
				<TodolistItems items={this.state.items} />
				<Form
					onInputChange={this.onInputChange}
					onItemSubmit={this.onItemSubmit}
					value={this.state.input}
				/>
			</div>
		);
	}
}

export default Todolist;
