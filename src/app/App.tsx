import React from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";

import "../css/app.css";

import { Link, Route, Switch, useLocation } from "react-router-dom";
import { HomePage } from "./screens/homePage";
import { OrdersPage } from "./screens/ordersPage";
import { UserPage } from "./screens/userPage";
import { ProductsPage } from "./screens/productsPage";
import { HomeNavbar } from "./components/headers/HomeNavbar";
import { OtherNavbar } from "./components/headers/OtherNavbar";
import { Footer } from "./components/footer";

function App() {
	const location = useLocation();
	return (
		<>
			{location.pathname === "/" ? <HomeNavbar /> : <OtherNavbar />}
			<Switch>
				<Route path="/products">
					<ProductsPage />
				</Route>
				<Route path="/member-page">
					<UserPage />
				</Route>
				<Route path="/orders">
					<OrdersPage />
				</Route>
				<Route path="/">
					<HomePage />
				</Route>
			</Switch>
			<Footer />
		</>
	);
}

export default App;
