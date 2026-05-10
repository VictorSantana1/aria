import {
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BrightnessMediumOutlinedIcon from "@mui/icons-material/BrightnessMediumOutlined";

import "../App.css";
import ButtonsSection from "../ButtonsSection/ButtonsSection";

export default function SettingUI() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = (message) => {
      if (message.action === "setting-ui") {
        setVisible((v) => !v);
      }
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
              Settings
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

          <ButtonsSection />

          <Stack
            direction={"row"}
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Button
              variant="outlined"
              startIcon={<HelpOutlinedIcon />}
              color="inherit"
              sx={{ p: 1, justifyContent: "start" }}
            >
              <Typography variant="caption">Tutorial</Typography>
            </Button>
            <IconButton
              aria-label="Switch color theme"
              sx={{ alignItems: "center" }}
              onClick={() => {
                browser.runtime.sendMessage({ action: "toggle-theme" });
              }}
            >
              <BrightnessMediumOutlinedIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Paper>
    </Container>
  );
}
