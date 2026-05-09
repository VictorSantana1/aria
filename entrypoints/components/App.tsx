import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import AppUI from "./AppUI";
import "./App.css";

const theme = createTheme({
	palette: {
		primary: {
			main: "#1a73e8", // azul Google
		},
		secondary: {
			main: "#34a853", // verde Google
		},
		mode: "dark",
	},
	typography: {
		fontFamily: '"Google Sans", "Roboto", sans-serif',
		fontSize: 13,

		h2: {
			fontSize: 10,
		},
	},
	shape: {
		borderRadius: 8,
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				html: { height: "100%" },
				body: { height: "100%", "#root": { height: "100%" } },
			},
		},
	},
});

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<AppUI />
		</ThemeProvider>
	);
};

export default App;
