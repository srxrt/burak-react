import React from "react";
import { Box, Container, Stack } from "@mui/material";
import {
	AspectRatio,
	Card,
	CardOverflow,
	CssVarsProvider,
	Typography,
} from "@mui/joy";
import Divider from "../../components/divider";
import { Visibility } from "@mui/icons-material";

const newDishes = [
	{ productName: "Lavash", imagePath: "/img/lavash.webp" },
	{ productName: "Cutlet", imagePath: "/img/cutlet.webp" },
	{ productName: "Kebab", imagePath: "/img/kebab.webp" },
	{ productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
];
export function NewDishes() {
	return (
		<div className="new-products-frame">
			<Container>
				<Stack className="main">
					<Box className="category-title">Fresh Menu</Box>
					<Stack className="cards-frame">
						<CssVarsProvider>
							{newDishes.map((ele, index) => {
								return (
									<Card key={index} variant="outlined" className="card">
										<CardOverflow>
											<div className="product-sale">Normal Size</div>
											<AspectRatio ratio="1">
												<img src={ele.imagePath} alt="" />
											</AspectRatio>
										</CardOverflow>
										<CardOverflow variant="soft" className="product-detail">
											<Stack className="info">
												<Stack flexDirection={"row"}>
													<Typography className="title">
														{ele.productName}
													</Typography>
													<Divider width="2" height="24" bg="#d9d9d9" />
													<Typography className="price">$12</Typography>
												</Stack>
												<Stack>
													<Typography className="views">
														20
														<Visibility
															sx={{ fontSize: 20, marginLeft: "5px" }}
														/>
													</Typography>
												</Stack>
											</Stack>
										</CardOverflow>
									</Card>
								);
							})}
						</CssVarsProvider>
					</Stack>
				</Stack>
			</Container>
		</div>
	);
}
