import { Button, Container, Stack, Typography } from "@mui/material";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";

export default function ButtonsSection() {
  return (
    <Stack direction={"column"} spacing={0.5}>
      <Button
        variant="outlined"
        startIcon={<VpnKeyOutlinedIcon />}
        color="inherit"
        sx={{ p: 2, justifyContent: "start" }}
        onClick={() => {
          browser.runtime.sendMessage({ action: "setting-ui" });
          browser.runtime.sendMessage({ action: "toggle-session" });
        }}
      >
        <Typography variant="caption">API Key</Typography>
        <Typography color="error">*</Typography>
      </Button>
      <Button
        variant="outlined"
        startIcon={<AccountCircleOutlinedIcon />}
        color="inherit"
        sx={{ p: 2, justifyContent: "start" }}
        onClick={() => {
          browser.runtime.sendMessage({ action: "setting-ui" });
          browser.runtime.sendMessage({ action: "toggle-session" });
        }}
      >
        <Typography variant="caption">Session</Typography>
      </Button>
      <Button
        variant="outlined"
        startIcon={<PeopleOutlinedIcon />}
        color="inherit"
        sx={{ p: 2, justifyContent: "start" }}
      >
        <Typography variant="caption">About us</Typography>
      </Button>
    </Stack>
  );
}
