import { useState, useEffect } from 'react';
import Message from '../Message/Message';
import Form from '../Form/Form';
import Spinner from '../Spiner/Spiner';
import ColorModeSwitch from '../Color-mode-switch/Color-mode-switch';
import Service from '../../services/services';


import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Alert from '@mui/material/Alert';
import { ThemeProvider, createTheme } from '@mui/material/styles';


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

let newItem;

const boxStyle = {
	display: "flex",
	alignItems: "center",
}

function App() {
	const [value, setValue] = useState([]);
	const [robot, setRobot] = useState(false);
	const [loading, setLoading] = useState(false);
	const [msg, setMsg] = useState(false);
	const [theme, setTheme] = useState(false);

	const service = new Service();
	let getData = service.getAuthorText()
	let maxId = value.length + 1;

	const clearData = () => {
		setValue([]);
	}

	const addItem = (author, text) => {
		newItem = {
			author,
			text,
			id: maxId++,
		}
		setRobot(true);
	}

	const changeTheme = (change) => {
		setTheme(change)
	}

	useEffect(() => {
		setValue([...getData]);
	}, []);

	useEffect(() => {
		if (robot) {
			setLoading(true);
			const timeout = setTimeout(() => {
				setRobot(false);
				setLoading(false);
				setMsg(true);
				setValue([...value, newItem]);
			}, 3000);
			return () => { clearTimeout(timeout) };
		}
	}, [robot, value]);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setMsg(false);
		}, 1500);
		return () => { clearTimeout(timeout) };
	}, [msg]);

	const spinner = loading ? <Spinner /> : null;
	const message = msg ? <Alert borderradius={8} >Ваше сообщение принято</Alert> : null;
	const themeColor = theme ? darkTheme : lightTheme;

	return (
		<ThemeProvider theme={themeColor}>
			<CssBaseline />
			<Container maxWidth="sm">
				<Box sx={{ bgcolor: 'primary.main', minHeight: '50vh', }}
					{...boxStyle}
					flexDirection={'column'}
					justifyContent="center"
					marginTop={20}
					borderRadius={8}
					paddingTop={5}>
					<Box sx={{ bgcolor: 'secondary.main', height: '45px', width: '200px' }}
						{...boxStyle}
						justifyContent='space-around'
						borderRadius={4} >
						<DeleteForeverIcon fontSize='large' cursor='pointer' onClick={clearData} />
						<ColorModeSwitch toggleTheme={changeTheme} status={theme} />
					</Box>
					<Message onAcceptData={value} />
					<Form onAdd={addItem} />
					{spinner}
					{message}
				</Box>
			</Container>
		</ThemeProvider >
	)
}

export default App;