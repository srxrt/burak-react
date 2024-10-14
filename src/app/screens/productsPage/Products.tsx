import React from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
	ArrowBack,
	ArrowForward,
	MonetizationOn,
	RemoveRedEye,
} from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Typography from "../../MaterialTheme/typography";
import "../../../css/products.css";

const products = [
	{ productName: "Cutlet", imagePath: "/img/cutlet.webp" },
	{ productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
	{ productName: "Kebab", imagePath: "/img/kebab.webp" },
	{ productName: "Lavash", imagePath: "/img/lavash.webp" },
	{ productName: "Lavash", imagePath: "/img/lavash.webp" },
	{ productName: "Cutlet", imagePath: "/img/cutlet.webp" },
	{ productName: "Kebab", imagePath: "/img/kebab.webp" },
	{ productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
];
export function Products() {
	return (
		<div className="products">
			<Container>
				<Stack flexDirection={"column"} alignItems={"center"}>
					<Stack className="avatar-big-box">
						<Box></Box>
						<Box className="res-name">Burak Restaurant</Box>
						<Stack className="search-box" color="primary">
							<Box className="type-here">Type here</Box>
							<Stack className="search-icon">
								<Button
									variant="contained"
									color="primary"
									className="search-icon"
								>
									Search
									<SearchIcon />
								</Button>
							</Stack>
						</Stack>
					</Stack>
					<Stack className="dishes-filter-section">
						<Stack className="dishes-filter-box">
							<Button variant="contained" color="primary" className="order">
								New
							</Button>
							<Button variant="contained" color="secondary" className="order">
								Price
							</Button>
							<Button variant="contained" color="secondary" className="order">
								Views
							</Button>
						</Stack>
					</Stack>
					<Stack className="list-category-section">
						<Stack className="product-category">
							<div className="category-main">
								<Button variant="contained" color="secondary">
									Other
								</Button>
								<Button variant="contained" color="secondary">
									Dessert
								</Button>
								<Button variant="contained" color="secondary">
									Drink
								</Button>
								<Button variant="contained" color="secondary">
									Salad
								</Button>
								<Button variant="contained" color="primary">
									Dish
								</Button>
							</div>
						</Stack>
						<Stack className="product-wrapper">
							{products.length !== 0 ? (
								products.map((product, index) => {
									return (
										<Stack key={index} className="product-card">
											<Stack
												className="product-img"
												sx={{ backgroundImage: `url(${product.imagePath})` }}
											>
												<div className="product-scale">Normal size</div>
												<Button className="shop-btn">
													<img
														src="/icons/shopping-cart.svg"
														style={{ display: "flex" }}
													/>
												</Button>
												<Button className="view-btn" sx={{ right: "36px" }}>
													<Badge badgeContent={20} color="secondary">
														<RemoveRedEye
															sx={{ color: 20 ? "gray" : "white" }}
														/>
													</Badge>
												</Button>
											</Stack>
											<Box className="product-desc">
												<span className="product-line">
													{product.productName}
												</span>
												<div className="product-desc">
													<MonetizationOn />
													{12}
												</div>
											</Box>
										</Stack>
									);
								})
							) : (
								<Box className="no-data">Producs are not available</Box>
							)}
						</Stack>
					</Stack>
					<Stack className="pagination-section">
						<Pagination
							count={3}
							page={1}
							renderItem={(item) => (
								<PaginationItem
									components={{
										previous: ArrowBack,
										next: ArrowForward,
									}}
									{...item}
									color="secondary"
								/>
							)}
						/>
					</Stack>
				</Stack>
			</Container>
			<div className={"brands-logo"}>
				<Container className={"family-brands"}>
					<Box className={"title"}>Our Family Brands</Box>
					<Stack className={"brand-list"}>
						<Box className={"review-box"}>
							<img src={"/img/gurme.webp"} />
						</Box>
						<Box className={"review-box"}>
							<img src={"/img/sweets.webp"} />
						</Box>
						<Box className={"review-box"}>
							<img src={"/img/seafood.webp"} />
						</Box>
						<Box className={"review-box"}>
							<img src={"/img/doner.webp"} />
						</Box>
					</Stack>
				</Container>
			</div>
			<div className="address">
				<Container>
					<Stack className="address-area">
						<Box className="title">Our Address</Box>
						<iframe
							style={{ marginTop: "60px" }}
							src="https://www.google.com/maps/d/u/0/embed?mid=1XK-f2FfchtNWmKA9DGrUzHvnTD8&f=q&source=s_q&hl=pt-BR&geocode&q=Anam-dong%20Seongbuk-Gu%2C%20Seoul%2C%20136-701%20Korea&ie=UTF8&oe=UTF8&msa=0&sll=37.585838%2C127.021353&sspn=0.020749%2C0.028168&ll=37.59253999999999%2C127.02774499999997&spn=0.00777%2C0.013797&z=16&output=embed"
							width="1320"
							height="500"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</Stack>
				</Container>
			</div>
		</div>
	);
}
