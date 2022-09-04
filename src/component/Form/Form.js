import { useState, useRef, useEffect } from 'react';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
// import './Form.css'


const formStyle = {
	width: '100%',
	display: 'flex',
	justifyContent: 'space-around',
	marginBottom: "20px"
}
const inputStyle = {
	variant: "standard",
	type: "text",
	color: 'secondary',

}

const Form = (props) => {
	const [state, setState] = useState({ author: '', message: '' });

	const { author, message } = state;

	const inputRef = useRef();

	const handleClick = () => {
		inputRef.current.focus();
	}

	const onValueChange = (e) => {
		const { name, value } = e.target;
		setState(prevState => ({ ...prevState, [name]: value }));
	}

	const onSubmitItem = (e) => {
		e.preventDefault();
		props.onAdd(author, message);

		setState({ author: '', message: '' });
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
					value={author}
					onChange={onValueChange}
					inputRef={inputRef} />
				<TextField id="standard-basic"
					label="message"
					{...inputStyle}
					placeholder="Cообщение"
					name='message'
					value={message}
					onChange={onValueChange} />
				<IconButton color='inherit' type="submit"><SendIcon fontSize='large' /></IconButton>
			</form>
		</>
	)
}

export default Form;