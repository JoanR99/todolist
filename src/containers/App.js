import React from 'react';
import Heading from '../components/heading';
import Todolist from './Todolist';
import './App.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			heading: 'Todolist',
		};
	}

	render() {
		return (
			<div>
				<Heading headingName={this.state.heading} />
				<Todolist />
			</div>
		);
	}
}

export default App;
