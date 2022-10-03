import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ColorModeSwitch } from '../Color-mode-switch/Color-mode-switch';

import { getAuthorText } from '../../services/services';
import { getUserProfiles } from '../../services/services';

import { ThemeProvider } from '../../context/contextTheme';
import { Context } from '../../context/context';

import { Home } from '../../pages/Home';
import { Profiles } from '../../pages/Profiles';
import { Profile } from '../../pages/Profile';
import { Chats } from '../../pages/Chats';
import { Nomatch } from "../../pages/Nomatch";
import Layout from '../Layout/Layout';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


// переменная для создания строчки в чате
let newItem;
let resScrollRef;

const boxStyle = {
	display: "flex",
	alignItems: "center",
}


function App() {
	const [message, setMessage] = useState([]);
	const [robot, setRobot] = useState(false);
	const [loading, setLoading] = useState(false);
	const [msg, setMsg] = useState(false);
	const [profiles, setProfiles] = useState([]);
	const [scrollRef, setScrollRef] = useState('');

	let getMessages = getAuthorText();
	let getProfiles = getUserProfiles();
	let maxId = message.length + 1;


	const clearData = () => {
		setMessage([]);
		setProfiles([]);
	}

	const getScrollRef = (get) => {
		resScrollRef = get;
		setScrollRef(resScrollRef)
	}


	const addItem = (author, text, raiting, date) => {
		newItem = {
			id: `${maxId++}`,
			author,
			text,
			date,
			raiting: `${raiting}`,
			blocked: `${false}`,
		}
		setRobot(true);
	}

	useEffect(() => {
		setMessage([...getMessages]);
		setProfiles([...getProfiles])
	}, []);

	useEffect(() => {
		if (robot) {
			setLoading(true);
			const timeout = setTimeout(() => {
				setRobot(false);
				setLoading(false);
				setMsg(true);
				setMessage([...message, newItem]);
				setProfiles([...profiles, newItem])
			}, 3000);
			return () => { clearTimeout(timeout) };
		}
	}, [robot, message, profiles]);


	useEffect(() => {
		const timeout = setTimeout(() => {
			setMsg(false);
		}, 1500);
		return () => { clearTimeout(timeout) };
	}, [msg]);


	const data = {
		message,
		loading,
		msg,
		addItem,
		profiles,
		getScrollRef,
		scrollRef
	}

	return (
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
						<Layout />

						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/chats" element={<Chats />} />
							<Route path="/profiles" element={<Profiles />} />
							<Route path="/profiles/:profileId" element={<Profile />} />
							<Route path='*' element={<Nomatch />} />
						</Routes>
					</Box>
				</Container>
			</Context.Provider>
		</ThemeProvider >
	)
}

export default App;