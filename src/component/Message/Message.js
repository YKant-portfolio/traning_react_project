import React, { Component } from 'react'
import './Message.css'

/* дочерний компонент */

export default class Message extends Component {
	onUpdateText = (event) => {
		const text = event.target.value;
		this.props.onUpdateText(text)
	}

	render() {
		return (
			<div className='message'>
				<h4 className='h4'>Input</h4>
				<input type="text"
					className="message-input"
					placeholder="Введите текст"
					onChange={this.onUpdateText} />
			</div>
		)
	}
}

