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

type props = {
  changeSettingsMode: (val: string) => void
  settingViewMode: string;
}

export default function SettingsMenu({ changeSettingsMode, settingViewMode }: props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if(settingViewMode === "menu") 
      return setVisible(true);

    return setVisible(false);
    
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
                changeSettingsMode('section')
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
