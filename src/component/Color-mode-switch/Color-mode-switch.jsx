import React from 'react'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { IconButton, useTheme } from '@mui/material';

import { useToggleModeServices } from '../../hooks/use-toggle-mode-services';

export const ColorModeSwitch = () => {
	const toggleColorMode = useToggleModeServices();
	const theme = useTheme();

	return (
		<IconButton onClick={toggleColorMode} color="inherit">
			{theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
		</IconButton>
	);
}
