import React from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";

import "../css/app.css";

import { Link, Route, Switch } from "react-router-dom";
import { HomePage } from "./screens/homePage";
import { OrdersPage } from "./screens/ordersPage";
import { UserPage } from "./screens/userPage";
import { ProductsPage } from "./screens/productsPage";

function App() {
	return (
		<div>
			<nav>
				<ul>
					<li>
						{" "}
						<Link to="/">Home</Link>
					</li>
					<li>
						{" "}
						<Link to="/products">Products</Link>
					</li>
					<li>
						{" "}
						<Link to="/orders">Orders</Link>
					</li>
					<li>
						{" "}
						<Link to="/member-page">UserPage</Link>
					</li>
				</ul>
			</nav>
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
		</div>
	);
}

export default App;
