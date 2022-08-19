import React from 'react'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { IconButton, useTheme } from '@mui/material';

function Theme(props) {
	const theme = useTheme();

	const toogleUpdate = () => {
		props.toggleTheme(!props.status)
	}
	return (
		<div>
			<IconButton onClick={toogleUpdate} color="inherit">
				{theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
			</IconButton>
		</div>
	)
}

export default Theme;