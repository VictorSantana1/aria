import {
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

import "../App.css";

export default function SettingSession() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = (message) => {
      if (message.action === "toggle-configAi") {
        setVisible((v) => !v);
      }
      console.log(visible);
    };

    browser.runtime.onMessage.addListener(handler);

    // cleanup importante para não acumular listeners
    return () => browser.runtime.onMessage.removeListener(handler);
  }, []);

  return (
    <Container
      maxWidth="xs"
      fixed
      sx={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translateX(-50%) translateY(-50%)", // centralizar
        display: visible ? "block" : "none",
      }}
    >
      <Paper elevation={16}>
        <Stack
          direction={"column"}
          spacing={2}
          sx={{
            p: 3,
          }}
        >
          <Stack
            direction={"row"}
            spacing={0.5}
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h2" component={"h2"} color="textPrimary">
              Session
            </Typography>
            <IconButton
              aria-label="close"
              sx={{ alignItems: "center" }}
              onClick={() => {
                setVisible(false);
              }}
            >
              <CloseIcon sx={{ cursor: "pointer" }} />
            </IconButton>
          </Stack>
          <Stack
            direction={"column"}
            spacing={0.5}
            sx={{
              justifyContent: "space-between",
              alignItems: "stretch",
            }}
          >
            <TextField label="E-mail" variant="outlined" />
          </Stack>
          <Stack
            direction={"row"}
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Button
              aria-label="Back to settings"
              color="inherit"
              sx={{ alignItems: "center" }}
              startIcon={<ArrowBackOutlinedIcon />}
              onClick={() => {
                setVisible((v) => !v);
                browser.runtime.sendMessage({ action: "setting-ui" });
              }}
            >
              <Typography variant="body2">Back</Typography>
            </Button>
            <Button
              aria-label="Back to settings"
              color="inherit"
              endIcon={<ArrowForwardOutlinedIcon />}
              sx={{
                alignItems: "center",
              }}
              onClick={() => {}}
            >
              <Typography variant="body2">Start</Typography>
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Container>
  );
}
