import { useContext } from 'react';
import { ThemeColorContext } from '../context';

export const useToggleModeServices = () => {
	const toggleMode = useContext(ThemeColorContext);
	if (toggleMode === undefined) {
		throw new Error('You must use useToggleModeServices with ToggleColorModeServicesContext');
	}

	return toggleMode;
}
