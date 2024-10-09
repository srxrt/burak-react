import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";

export function OtherNavbar() {
	const authMember = false;
	return (
		<div className="other-navbar">
			<Container className="navbar-container">
				<Stack className="menu">
					<Box>
						<NavLink to="/">
							<img
								src="icons/burak.svg"
								className="brand-logo"
								alt="brand-logo"
							/>
						</NavLink>
					</Box>
					<Stack className="links">
						<Box className={"hover-line"}>
							<NavLink to="/">Home</NavLink>
						</Box>
						<Box className={"hover-line"}>
							<NavLink to="/products" activeClassName={"underline"}>
								Products
							</NavLink>
						</Box>
						{authMember ? (
							<Box className={"hover-line"}>
								<NavLink to="/orders" activeClassName={"underline"}>
									Orders
								</NavLink>
							</Box>
						) : null}
						{authMember ? (
							<Box className={"hover-line"}>
								<NavLink to="/member-page" activeClassName={"underline"}>
									My Page
								</NavLink>
							</Box>
						) : null}
						<Box className={"hover-line"}>
							<NavLink to="/help" activeClassName={"underline"}>
								Help
							</NavLink>
						</Box>
						{!authMember ? (
							<Box>
								<Button variant="contained" className="login-button">
									Login
								</Button>
							</Box>
						) : (
							<img
								className="user-avatar"
								src={"/icons/default-user.svg"}
								aria-haspopup={"true"}
								alt="profile-img"
							/>
						)}
					</Stack>
				</Stack>
			</Container>
		</div>
	);
}
