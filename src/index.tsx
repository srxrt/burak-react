import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import "./css/index.css";
import theme from "./app/MaterialTheme/index";
import { BrowserRouter as Router } from "react-router-dom";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Router>
					<App />
				</Router>
			</ThemeProvider>
		</Provider>
	</React.StrictMode>
);

reportWebVitals();
