import React, { Component } from 'react';
import Message from '../Message/Message'

import './App.css';

/* родительский компонент */

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ''
		}

	}
	onUpdateText = (text) => {
		this.setState({ text });
	}

	render() {
		const { text } = this.state
		return (
			<div>
				<Message onUpdateText={this.onUpdateText} />
				<div className='text'>
					<p>getting data</p>
					<h2 >{text}</h2>
				</div>
			</div>
		);
	}
}

export default App;
