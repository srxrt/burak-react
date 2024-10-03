import React from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";

import "../css/app.css";

function App() {
	return (
		<Container maxWidth="sm">
			<Stack flexDirection={"column"}>
				<Box sx={{ my: 4 }}>
					<Typography variant="h4">Hello Abror</Typography>
				</Box>
				<Button variant="contained">Contained</Button>
			</Stack>
		</Container>
	);
}

export default App;
