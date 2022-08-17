import { useState } from 'react';

import './Form.css'

const Form = (props) => {

	const [newAuthor, setAuthor] = useState('')
	const [newText, setText] = useState('')

	const onValueChangeAuthor = (e) => {
		setAuthor(e.target.value);
	}

	const onValueChangeText = (e) => {
		setText(e.target.value);
	}

	const onSubmitItem = (e) => {
		e.preventDefault();
		props.onAdd(newAuthor, newText);
		setAuthor('');
		setText('');
	}


	return (
		<div className='form-wrap'>
			<h3>Ваше сообщение</h3>
			<form
				className="form"
				onSubmit={onSubmitItem}>
				<input type="text"
					placeholder="Автор"
					name='author'
					value={newAuthor}
					onChange={onValueChangeAuthor}
				/>
				<input type="text"
					placeholder="сообщение"
					name='message'
					value={newText}
					onChange={onValueChangeText}
				/>
				<button type="submit"
					className="btn">отправить</button>
			</form>
		</div>
	)
}

export default Form;