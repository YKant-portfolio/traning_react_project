import React, { useContext } from 'react'

import Scroll from '../SmoothScroll/SmoothScroll';

import { Context } from '../../context/context';

import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import './Message.css';

let messages;
const boxStyle = {
	display: "flex",
	justifyContent: "center",
	borderRadius: 3,
	marginTop: '10px',
	marginBottom: '60px',
}

function Message() {
	const { message } = useContext(Context);

	if (message.length === 0) {
		messages = 'массив объектов - сообщений пуст';
	} else {
		messages = message.map(item => (
			<ListItem
				key={item.id}>
				<ListItemIcon><MailOutlineIcon /></ListItemIcon>
				<ListItemText >
					автор сообщения: {item.author} <br /> текст сообщения: {item.text}</ListItemText>
			</ListItem>))
	}


	return (
		<Box className='box' sx={{ bgcolor: 'primary.light', minHeight: '200px', minWidth: '300px', maxWidth: '100%', textAlign: 'center', padding: '5px', maxHeight: 380, overflow: 'auto' }}
			{...boxStyle}>
			<Scroll />
			<List>
				{messages}
			</List>
		</Box >
	)
}

export default Message;