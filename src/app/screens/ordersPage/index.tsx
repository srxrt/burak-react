import { Box, Container, Stack, Tab, Tabs } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import { TabContext, TabPanel } from "@mui/lab";
import "../../../css/order.css";
import { PausedOrders } from "./PausedOrders";
import { ProcessOrders } from "./ProcessOrders";
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
							<TabPanel value="1">
								<PausedOrders />
							</TabPanel>
							<TabPanel value="2">
								<ProcessOrders />
							</TabPanel>
							<TabPanel value="3">
								<FinishedOrders />
							</TabPanel>
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
							<span className="order-user-name">Martin</span>
							<span className="order-user-prof">User</span>
						</Box>
						<Box className="liner"></Box>
						<Box className="order-user-address">
							<div style={{ display: "flex" }}>
								<LocationOn />
							</div>
						</Box>
					</Box>
				</Stack>
			</Container>
		</div>
	);
}
