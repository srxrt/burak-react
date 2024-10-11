import React from "react";
import { Box, Container, Stack } from "@mui/material";
import {
	AspectRatio,
	Card,
	CardOverflow,
	CssVarsProvider,
	Typography,
} from "@mui/joy";
import { ClassNames } from "@emotion/react";

const activeUsers = [
	{ memberNick: "Martin", memberImage: "/img/martin.webp" },
	{ memberNick: "Justin", memberImage: "/img/justin.webp" },
	{ memberNick: "Rose", memberImage: "/img/rose.webp" },
	{ memberNick: "Nusret", memberImage: "/img/nusret.webp" },
];
export default function ActiveUsers() {
	return (
		<div className="active-users-frame">
			<Container>
				<Stack className="main">
					<Box className="category-title">Active Users</Box>
					<Stack className="cards-frame">
						<CssVarsProvider>
							{activeUsers.length !== 0 ? (
								activeUsers.map((ele, index) => {
									return (
										<Card key={index} variant="outlined" className="card">
											<CardOverflow>
												<AspectRatio ratio="1">
													<img src={ele.memberImage} alt="" />
												</AspectRatio>
											</CardOverflow>

											<Stack flexDirection={"row"} justifyContent={"center"}>
												<Typography className="title">
													{ele.memberNick}
												</Typography>
											</Stack>
										</Card>
									);
								})
							) : (
								<Box className="no-data">No Active Users!</Box>
							)}
						</CssVarsProvider>
					</Stack>
				</Stack>
			</Container>
		</div>
	);
}
