import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import AppUI from "./AppUI/AppUI";
import "./App.css";
import theme from "../utils/theme";
import ThemedRoot from "../utils/theme";

const App = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handler = (message) => {
      console.log(message);
      if (message.action === "toggle-ui") {
        setVisible((prev) => !prev);
      }
    };

    browser.runtime.onMessage.addListener(handler);

    // cleanup importante para não acumular listeners
    return () => browser.runtime.onMessage.removeListener(handler);
  }, []);

  return (
    <ThemedRoot>
      <CssBaseline />
      <Box sx={{ display: visible ? "block" : "none" }}>
        <AppUI visible={visible} setVisible={setVisible} />
      </Box>
    </ThemedRoot>
  );
};

export default App;
