import React from 'react'
import MessageList from '../MessageList/Message-list';

import List from '@mui/material/List';
import Box from '@mui/material/Box';

function Message(props) {
	return (
		<Box sx={{ bgcolor: 'primary.light', minHeight: '200px', maxWidth: '450px', textAlign: 'center', padding: '10px', }}
			display="flex"
			justifyContent="center"
			borderRadius={5}
			marginTop={'20px'}
			marginBottom={'20px'}	>
			<List>
				<MessageList onAcceptData={props.onAcceptData} />
			</List>
		</Box >
	)
}

export default Message;