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
		console.log(this.state.input);

		fetch('http://localhost:3000/add', {
			method: 'post',
			mode: 'no-cors',
			headers: { 'content-type': 'application/x-www-form-urlencoded' },
			body: `item=${this.state.input}`,
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
