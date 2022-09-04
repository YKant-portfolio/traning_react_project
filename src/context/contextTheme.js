import { createContext, useCallback, useMemo, useState } from "react";
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material';
import { deepmerge } from '@mui/utils';

//внешние константы со стилями
const darkTheme = {
	mode: 'dark',
	primary: {
		main: "#616161",
		light: "#757575"
	},
	secondary: {
		main: '#212121'
	},
	text: {
		primary: '#fff',
		icon: '#000',
	},
	background: {
		paper: "#000",
		default: '#000'
	},
};

const lightTheme = {
	mode: 'light',
	primary: {
		main: "#bdbdbd",
		light: "#eeeeee"
	},
	secondary: {
		main: '#eeeeee'
	},
	text: {
		primary: '#212121',
		icon: '#263238',
	},
};

//создаем контекст react
export const ThemeColorContext = createContext(undefined);

export const ThemeProvider = ({ initialTheme = {}, initialMode = lightTheme, children }) => {
	const [mode, setMode] = useState(initialMode);

	// метод для изменения свойств темы и пользовательских настроек
	const theme = useMemo(() =>
		createTheme(deepmerge(initialTheme, { palette: mode })),
		[mode, initialTheme]
	);

	//метод для изменения значения цвета темы 
	const toggleColorMode = useCallback(() => {
		setMode((prevMode) => prevMode === lightTheme ? darkTheme : lightTheme);
	}, []);

	return (
		<ThemeColorContext.Provider value={toggleColorMode}>
			<MUIThemeProvider theme={theme}>
				{children}
			</MUIThemeProvider>
		</ThemeColorContext.Provider>
	)
}
