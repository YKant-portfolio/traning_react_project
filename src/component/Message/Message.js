import React from 'react'
import MessageList from '../MessageList/Message-list';

import Scroll from '../SmoothScroll/SmoothScroll';

import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import './Message.css';

// const scrollStyle = {
// 	background: '#000',
// }
let res;

function Message(props) {
	const data = props.onAcceptData;

	if (data.length === 0) {
		res = 'массив объектов - сообщений пуст';
	} else {
		res = data.map(item => (
			<ListItem
				key={item.id}>
				<ListItemIcon><MailOutlineIcon /></ListItemIcon>
				<ListItemText >
					автор сообщения: {item.author} <br /> текст сообщения: {item.text}</ListItemText>
			</ListItem>))
	}


	return (
		<Box className='box' sx={{ bgcolor: 'primary.light', minHeight: '200px', minWidth: '300px', maxWidth: '100%', textAlign: 'center', padding: '5px', maxHeight: 380, overflow: 'auto' }}
			display="flex"
			justifyContent="center"
			borderRadius={3}
			marginTop='10px'
			marginBottom='20px'	>
			<Scroll />
			<List>
				{/* <MessageList onAcceptData={props.onAcceptData} /> */}
				{res}
			</List>
		</Box >
	)
}

export default Message;