import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';

import { useState, useEffect } from 'react';
import Message from '../Message/Message';
import Form from '../Form/Form';
import { Spinner } from '../Spiner/Spiner';
import { ColorModeSwitch } from '../Color-mode-switch/Color-mode-switch';
import Service from '../../services/services';

import { ThemeProvider } from '../../context';

import { Home } from '../../pages/Home';
import { Profile } from '../../pages/Profile';
import { Chats } from '../../pages/Chats';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Alert from '@mui/material/Alert';

// переменная для создания строчки в чате
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

	return (
		<BrowserRouter>
			<ThemeProvider>
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
							<ColorModeSwitch />
						</Box>
						<Link to="/">Home</Link>
						<Link to="/profile/">Profile</Link>
						<Link to="/chats/">Chats</Link>
						<Switch>
							<Route path="/chats">
								<Chats />
							</Route>
							<Route path="/profile">
								<Profile />
							</Route>
							<Route exact path="/">
								<Home />
							</Route>
						</Switch>
						<Message onAcceptData={value} />
						<Form onAdd={addItem} />
						{spinner}
						{message}
					</Box>
				</Container>
			</ThemeProvider >
		</BrowserRouter>
	)
}

export default App;