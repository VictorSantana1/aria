import {
	appBarClasses,
	Box,
	CircularProgress,
	Container,
	Paper,
	Stack,
	Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SettingsIcon from "@mui/icons-material/Settings";

const AppUI = () => {
	return (
		<Container fixed maxWidth="xs">
			<Paper elevation={1}>
				<Stack
					spacing={1}
					direction={"row"}
					sx={{
						p: 2,
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<Stack
						direction={"row"}
						sx={{
							justifyContent: "center",
							alignItems: "center",
						}}
						spacing={2}
					>
						<CircularProgress
							color="inherit"
							aria-label="Loading..."
						/>
						<Typography
							variant="h2"
							component={"h2"}
							color="textPrimary"
						>
							Setting up
						</Typography>
					</Stack>
					<Stack direction={"row"} spacing={2}>
						<SettingsIcon />
						<CloseIcon
							onClick={async () => {
								const tab = await browser.tabs.getCurrent();
								console.log(tab);
							}}
						/>
					</Stack>
				</Stack>
			</Paper>
		</Container>
	);
};

export default AppUI;
