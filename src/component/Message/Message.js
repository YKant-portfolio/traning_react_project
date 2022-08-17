import React from 'react'

import './Message.css'
function Message(props) {
	const data = props.onUpdateData;

	let res;
	if (data) {
		res = data.map(item => <li key={item.id}>автор сообщения: {item.author} <br /> текст сообщения: {item.text}</li>)
	} else {
		res = 'массив объектов - сообщений пуст'
	}

	return (
		<div className='message'>
			<ul>
				{res}
			</ul>
		</div>
	)
}

export default Message;