import { useState, useEffect } from 'react';
import Message from '../Message/Message';
import Form from '../Form/Form';
import Spinner from '../Spiner/Spiner';
import Theme from '../Theme/Theme';


import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Alert from '@mui/material/Alert';
import { ThemeProvider, createTheme } from '@mui/material/styles';


function App() {
	const [value, setValue] = useState('');
	const [robot, setRobot] = useState([]);
	const [loading, setLoading] = useState(false);
	const [msg, setMsg] = useState(false);
	const [theme, setTheme] = useState(false);

	let getData = [
		{ id: 1, author: 'Alexandro Kazulin', text: 'HI Im Kazulin' },
		{ id: 2, author: 'Dio Denisovich', text: 'HI Im Dio' },
		{ id: 3, author: 'Marsel Kyasar', text: 'HI Im Marsel' },
	]

	let maxId = value.length + 1;

	const clearData = () => {
		setValue('');
	}

	const addItem = (author, text) => {
		const newItem = {
			author,
			text,
			id: maxId++,
		}
		setValue([...value, newItem]);
		setRobot([0])
	}

	const changeTheme = (change) => {
		setTheme(change)
	}

	useEffect(() => {
		setValue([...getData]);
	}, [])

	useEffect(() => {
		if (robot.length > 0) {
			setLoading(true);
			setTimeout(() => {
				setLoading(false);
				setMsg(true);
			}, 5000)
		}
	}, [robot])

	useEffect(() => {
		setTimeout(() => {
			setMsg(false);
		}, 3000)
	}, [msg])

	const darkTheme = createTheme({
		palette: {
			mode: 'dark',
			primary: {
				main: "#616161",
				light: "#757575"
			},
			secondary: {
				main: '#212121'
			},
			text: {
				primary: '#fff',
				icon: '#000',
			},
			background: {
				paper: "#000",
				default: '#000'
			},
		},
	});
	const lightTheme = createTheme({
		palette: {
			mode: 'light',
			primary: {
				main: "#bdbdbd",
				light: "#eeeeee"
			},
			secondary: {
				main: '#eeeeee'
			},
			text: {
				primary: '#212121',
				icon: '#263238',
			},
		},
	});

	const spinner = loading ? <Spinner /> : null;
	const message = msg ? <Alert borderradius={8} >Ваше сообщение принято</Alert> : null;
	const themeColor = theme ? darkTheme : lightTheme;

	return (
		<ThemeProvider theme={themeColor}>
			<CssBaseline />
			<Container maxWidth="sm">
				<Box sx={{ bgcolor: 'primary.main', minHeight: '50vh', }}
					display="flex"
					flexDirection={'column'}
					justifyContent="center"
					alignItems="center"
					marginTop={20}
					borderRadius={8}
					paddingTop={5}>
					<Box sx={{ bgcolor: 'secondary.main', height: '45px', width: '200px' }}
						display="flex"
						justifyContent='space-around'
						alignItems="center"
						borderRadius={4}
					>
						<DeleteForeverIcon fontSize='large' cursor='pointer' onClick={clearData} />
						<Theme toggleTheme={changeTheme} status={theme} />
					</Box>
					<Message onUpdateData={value} />
					<Form onAdd={addItem} />
					{spinner}
					{message}
				</Box>
			</Container>
		</ThemeProvider>
	)
}

export default App;