import { useState, useRef, useEffect, useContext } from 'react';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Rating from '@mui/material/Rating';
import { Context } from '../../context/context';


const formStyle = {
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: ' space-between',
	alignItems: 'center',
	marginBottom: "20px",
	padding: "0px 45px 0px 45px",
}
const inputStyle = {
	variant: "standard",
	type: "text",
	color: 'secondary',
}

const divStyle = {
	width: '100%',
	display: 'flex',
	justifyContent: ' space-between',
	alignItems: 'center',
	marginTop: "20px",
}

const Form = () => {
	const { addItem } = useContext(Context);

	const [state, setState] = useState({ author: '', message: '', raiting: null, date: '' });

	const { author, message, raiting, date } = state;
	const inputRef = useRef();
	const handleClick = () => {
		inputRef.current.focus();
	}

	const onValueChange = (e) => {
		const { name, value } = e.target;
		setState(prevState => ({ ...prevState, [name]: value }));
		setState(prevState => ({ ...prevState, date: resDate }));
	}

	let dateNow = new Date();
	let resDate = `${dateNow.getDate() < 10 ? '0' + dateNow.getDate() : dateNow.getDate()}.${dateNow.getMonth() + 1 < 10 ? '0' + (dateNow.getMonth() + 1) : dateNow.getMonth() + 1}.${dateNow.getFullYear()}`;

	const onSubmitItem = (e) => {
		e.preventDefault();

		addItem(author, message, raiting, date);
		setState({ author: '', message: '', raiting: null, date: '' });
		handleClick();
	}

	const handleChange = (e, newValue) => {
		setState(prevState => ({ ...prevState, raiting: newValue }));
	}

	useEffect(() => {
		handleClick();
	}, [])

	return (
		<>
			<Typography variant='h6'
				component='span'
				marginTop="40px">
				Ваше сообщение
			</Typography>
			<form style={formStyle}
				onSubmit={onSubmitItem}	>
				<div style={divStyle}>
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
				</div>
				<div style={divStyle}>
					<div>
						<Typography sx={{ color: "rgba(0, 0, 0, 0.6)", fontSize: "13px" }}>raiting</Typography>
						<Rating
							value={raiting}
							onChange={handleChange} />
					</div>

					<IconButton color='inherit' type="submit"><SendIcon fontSize='large' /></IconButton>
				</div>
			</form>
		</>
	)
}

export default Form;