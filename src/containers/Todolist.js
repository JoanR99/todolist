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
		this.onItemDelete = this.onItemDelete.bind(this);
	}

	onInputChange(event) {
		this.setState({ input: event.target.value });
	}

	onItemSubmit(event) {
		console.log(this.state.input);

		fetch('https://fierce-mountain-19943.herokuapp.com/add', {
			method: 'post',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify({ item: this.state.input }),
		})
			.catch((err) => console.log(err))
			.then(() => {
				fetch('https://fierce-mountain-19943.herokuapp.com/get')
					.then((response) => response.json())
					.then((data) => {
						console.log(data);
						this.setState({ items: data });
					})
					.catch((err) => console.log('Error getting data: ' + err));
				this.setState({ input: '' });
			});

		event.preventDefault();
	}

	onItemDelete(id) {
		console.log(id);

		fetch('https://fierce-mountain-19943.herokuapp.com/delete', {
			method: 'post',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify({ id }),
		})
			.catch((err) => console.log(err))
			.then(() => {
				fetch('https://fierce-mountain-19943.herokuapp.com/get')
					.then((response) => response.json())
					.then((data) => {
						this.setState({ items: data });
					})
					.catch((err) => console.log('Error getting data: ' + err));
			});
	}

	componentDidMount() {
		fetch('https://fierce-mountain-19943.herokuapp.com/get')
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				this.setState({ items: data });
			})
			.catch((err) => console.log('Error getting data: ' + err));
	}

	render() {
		return (
			<div className="box">
				<TodolistItems
					items={this.state.items}
					onItemDelete={this.onItemDelete}
				/>
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
