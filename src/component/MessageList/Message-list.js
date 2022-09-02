import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function MessageList({ children }) {
	// const data = props.onAcceptData;
	// let res;

	// if (data.length === 0) {
	// 	res = 'массив объектов - сообщений пуст';
	// } else {
	// 	res = data.map(item => (
	// 		<ListItem
	// 			key={item.id}>
	// 			<ListItemIcon><MailOutlineIcon color="text.primary.icon" /></ListItemIcon>
	// 			<ListItemText >
	// 				автор сообщения: {item.author} <br /> текст сообщения: {item.text}</ListItemText>
	// 		</ListItem>))
	// }


	return (
		<div>
			{children}
		</div>
	)
}

export default MessageList;