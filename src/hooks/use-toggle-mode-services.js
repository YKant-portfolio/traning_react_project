import { useContext } from 'react';
import { ThemeColorContext } from '../context/contextTheme';

export const useToggleModeServices = () => {
	const toggleMode = useContext(ThemeColorContext);
	if (toggleMode === undefined) {
		throw new Error('You must use useToggleModeServices with ThemeColorContext');
	}

	return toggleMode;
}
