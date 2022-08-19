import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Box from '@mui/material/Box';
function Message(props) {
	const data = props.onUpdateData;
	let res;
	if (data) {
		res = data.map(item => (
			<ListItem
				key={item.id}>
				<ListItemIcon><MailOutlineIcon color="text.primary.icon" /></ListItemIcon>
				<ListItemText >
					автор сообщения: {item.author} <br /> текст сообщения: {item.text}</ListItemText>
			</ListItem>))
	} else {
		res = 'массив объектов - сообщений пуст'
	}

	return (
		<Box sx={{ bgcolor: 'primary.light', minHeight: '200px', maxWidth: '450px', textAlign: 'center', padding: '10px', }}
			display="flex"
			justifyContent="center"
			borderRadius={5}
			marginTop={'20px'}
			marginBottom={'20px'}
		>
			<List>
				{res}
			</List>
		</Box >
	)
}

export default Message;