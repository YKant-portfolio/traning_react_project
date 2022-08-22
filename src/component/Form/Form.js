import { useState, useRef, useEffect } from 'react';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
// import './Form.css'


const formStyle = {
	width: '500px',
	display: 'flex',
	justifyContent: 'space-between',
	marginBottom: "20px"
}
const inputStyle = {
	variant: "standard",
	type: "text",
	color: 'secondary',
}

const Form = (props) => {
	const [newAuthor, setAuthor] = useState('')
	const [newText, setText] = useState('')

	const inputRef = useRef();

	const handleClick = () => {
		inputRef.current.focus();
	}

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
		handleClick();
	}

	useEffect(() => {
		handleClick();
	}, [])

	return (
		<>
			<Typography variant='h6'
				component='span'>
				Ваше сообщение
			</Typography>
			<form style={formStyle}
				onSubmit={onSubmitItem}	>
				<TextField id="standard-basic"
					label="author"
					{...inputStyle}
					placeholder="Автор"
					name='author'
					value={newAuthor}
					onChange={onValueChangeAuthor}
					inputRef={inputRef} />
				<TextField id="standard-basic"
					label="message"
					{...inputStyle}
					placeholder="сообщение"
					name='message'
					value={newText}
					onChange={onValueChangeText} />
				<IconButton color='inherit' type="submit"><SendIcon fontSize='large' /></IconButton>
			</form>
		</>
	)
}

export default Form;