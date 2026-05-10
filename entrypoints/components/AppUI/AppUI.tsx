import {
  CircularProgress,
  Container,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SettingsIcon from "@mui/icons-material/Settings";
import "../App.css";

interface props {
  visible: boolean;
  setVisible: (val: boolean) => void;
}

const AppUI = ({ setVisible, visible }: props) => {
  return (
    <Container
      fixed
      maxWidth="xs"
      sx={{
        position: "fixed",
        top: "5px",
        right: "0",
      }}
    >
      <Paper elevation={1}>
        <Stack
          spacing={1}
          direction={"row"}
          sx={{
            p: 2,
            justifyContent: "space-between",
            alignItems: "center",
          }}
          divider={<Divider orientation="horizontal" flexItem />}
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
              size={20}
            />
            <Typography variant="h3" component={"h2"} color="textPrimary">
              Setting up
            </Typography>
          </Stack>
          <Stack direction={"row"} spacing={2}>
            <SettingsIcon
              sx={{ cursor: "pointer" }}
              onClick={() => {
                browser.runtime.sendMessage({ action: 'setting-ui'});
              }}
            />
            <CloseIcon
              sx={{ cursor: "pointer" }}
              onClick={() => {
                setVisible(false);
              }}
            />
          </Stack>
        </Stack>
      </Paper>
    </Container>
  );
};

export default AppUI;
