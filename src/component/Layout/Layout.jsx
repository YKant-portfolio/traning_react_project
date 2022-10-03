import React from 'react'
import { Outlet, Link } from 'react-router-dom';
import Box from '@mui/material/Box';

import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatIcon from '@mui/icons-material/Chat';


const boxStyle = {
	display: "flex",
	alignItems: "center",
};
const linkStyle = {
	textDecoration: "none",
	color: 'inherit'
};

const Layout = () => {
	return (
		<>
			<Box sx={{ bgcolor: 'secondary.main', height: '30px', minWidth: '200px', marginTop: "20px", paddingTop: '5px' }}
				{...boxStyle}
				justifyContent='space-around'
				borderRadius={4} >
				<Link to="/" style={linkStyle}><HomeIcon /></Link>
				<Link to="/chats/" style={linkStyle}><ChatIcon /></Link>
				<Link to="/profiles/" style={linkStyle}><AccountCircleIcon /></Link>
			</Box>
			<Outlet />
		</>
	)
}

export default Layout;