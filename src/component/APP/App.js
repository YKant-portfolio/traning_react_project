import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ColorModeSwitch } from '../Color-mode-switch/Color-mode-switch';
import Service from '../../services/services';

import { ThemeProvider } from '../../context/contextTheme';
import { Context } from '../../context/context';

import { Home } from '../../pages/Home';
import { Profiles } from '../../pages/Profiles';
import { Chats } from '../../pages/Chats';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatIcon from '@mui/icons-material/Chat';

// переменная для создания строчки в чате
let newItem;

const boxStyle = {
	display: "flex",
	alignItems: "center",
}
const linkStyle = {
	textDecoration: "none",
	color: 'inherit'
};


function App() {
	const [message, setMessage] = useState([]);
	const [robot, setRobot] = useState(false);
	const [loading, setLoading] = useState(false);
	const [msg, setMsg] = useState(false);
	const [profile, setProfile] = useState([])

	const service = new Service();
	let getMessages = service.getAuthorText();
	let getProfile = service.getProfile();
	let maxId = message.length + 1;


	const clearData = () => {
		setMessage([]);
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
		setMessage([...getMessages]);
		setProfile([...getProfile])
	}, []);

	useEffect(() => {
		if (robot) {
			setLoading(true);
			const timeout = setTimeout(() => {
				setRobot(false);
				setLoading(false);
				setMsg(true);
				setMessage([...message, newItem]);
			}, 3000);
			return () => { clearTimeout(timeout) };
		}
	}, [robot, message]);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setMsg(false);
		}, 1500);
		return () => { clearTimeout(timeout) };
	}, [msg]);


	const data = {
		message,
		robot,
		loading,
		msg,
		addItem,
		profile,
	}

	return (
		<BrowserRouter>
			<ThemeProvider>
				<Context.Provider value={data}>
					<CssBaseline />
					<Container maxWidth="sm">
						<Box sx={{ bgcolor: 'primary.main', minHeight: '50vh', minWidth: '300px' }}
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
							<Box sx={{ bgcolor: 'secondary.main', height: '30px', minWidth: '200px', marginTop: "20px", paddingTop: '5px' }}
								{...boxStyle}
								justifyContent='space-around'
								borderRadius={4} >
								<Link to="/" style={linkStyle}><HomeIcon /></Link>
								<Link to="/chats/" style={linkStyle}><ChatIcon /></Link>
								<Link to="/profile/" style={linkStyle}><AccountCircleIcon /></Link>
							</Box>

							<Switch>
								<Route path="/chats" component={Chats} />
								<Route path="/profile" render={() => {
									return <Profiles />
								}} />
								<Route exact path="/" component={Home} />
							</Switch>
						</Box>
					</Container>
				</Context.Provider>
			</ThemeProvider >
		</BrowserRouter >
	)
}

export default App;