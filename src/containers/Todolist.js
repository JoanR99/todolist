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

		fetch('http://localhost:3000/add', {
			method: 'post',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify({ item: this.state.input }),
		})
			.catch((err) => console.log(err))
			.then(() => {
				fetch('http://localhost:3000/get')
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

		fetch('http://localhost:3000/delete', {
			method: 'post',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify({ id }),
		})
			.catch((err) => console.log(err))
			.then(() => {
				fetch('http://localhost:3000/get')
					.then((response) => response.json())
					.then((data) => {
						this.setState({ items: data });
					})
					.catch((err) => console.log('Error getting data: ' + err));
			});
	}

	componentDidMount() {
		fetch('http://localhost:3000/get')
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
