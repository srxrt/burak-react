import { Box, Container, Stack, Tab, Tabs } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import { TabContext, TabPanel } from "@mui/lab";
import "../../../css/order.css";
import PausedOrders from "./PausedOrders";
import ProcessOrders from "./ProcessOrders";
import FinishedOrders from "./FinishedOrders";
import { LocationOn } from "@mui/icons-material";

export default function OrdersPage() {
	const [value, setValue] = useState("1");
	const handleChange = (e: SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};
	return (
		<div className="order-page">
			<Container className="order-container">
				<Stack className="order-left">
					<TabContext value={value}>
						<Box className="order-nav-frame">
							<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
								<Tabs
									value={value}
									onChange={handleChange}
									aria-label="basic tabs example"
									className="table-list"
								>
									<Tab label="PAUSED ORDERS" value={"1"} />
									<Tab label="PROCESS ORDERS" value={"2"} />
									<Tab label="FINISHED ORDERS" value={"3"} />
								</Tabs>
							</Box>
						</Box>
						<Stack className="order-main-content">
							<PausedOrders />
							<ProcessOrders />
							<FinishedOrders />
						</Stack>
					</TabContext>
				</Stack>
				<Stack className="order-right">
					<Box className="order-info-box">
						<Box className="member-box">
							<div className="order-user-img">
								<img
									src="/icons/default-user.svg"
									className="order-user-avatar"
								/>
								<div className="order-user-icon-box">
									<img
										src="/icons/user-badge.svg"
										className="order-user-prof-img"
									/>
								</div>
							</div>
							<span className="order-user-name">Kevin</span>
							<span className="order-user-prof">User</span>
						</Box>
						<Box className="liner"></Box>
						<Box className="order-user-address">
							<div style={{ display: "flex", alignItems: "center" }}>
								<LocationOn />
								<p>Do not exist</p>
							</div>
						</Box>
					</Box>
					<Box className={"order-info-box"} sx={{ mt: "20px" }}>
						<input
							type={"text"}
							name={"cardNumber"}
							placeholder={"Card number : **** 4090 2002 7495"}
							className={"card-input"}
						/>
						<div
							style={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-between",
							}}
						>
							<input
								type={"text"}
								name={"cardPeriod"}
								placeholder={"07 / 24"}
								className={"card-half-input"}
							/>
							<input
								type={"text"}
								name={"cardCVV"}
								placeholder={"CVV : 010"}
								className={"card-half-input"}
							/>
						</div>
						<input
							type={"text"}
							name={"cardCreator"}
							placeholder={"Kevin Malone"}
							className={"card-input"}
						/>
						<div className={"cards-box"}>
							<img src={"/icons/paypal-card.svg"} />
							<img src={"/icons/master-card.svg"} />
							<img src={"/icons/western-card.svg"} />
							<img src={"/icons/visa-card.svg"} />
						</div>
					</Box>
				</Stack>
			</Container>
		</div>
	);
}
