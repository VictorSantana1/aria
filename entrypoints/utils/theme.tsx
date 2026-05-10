import { createTheme } from "@mui/material";
import { Theme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import React, { useState, useEffect } from "react";

const getTheme = (mode: "light" | "dark" = "light"): Theme =>
  createTheme({
    palette: {
      primary: { main: "#1a73e8" },
      secondary: { main: "#34a853" },
      mode,
    },
    typography: {
      fontFamily: '"Google Sans", "Roboto", sans-serif',
      fontSize: 13,
      h2: { fontSize: "1.3rem" },
      h3: { fontSize: "1.1rem" },
    },
    shape: { borderRadius: 8 },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: { height: "100%" },
          body: { height: "100%", "#root": { height: "100%" } },
        },
      },
      MuiButton: {
        styleOverrides: {
          outlined: {
            borderColor: "#0000006b",
            fontFamily: '"Google Sans", "Roboto", sans-serif',
          },
        },
      },
    },
  });

const ThemedRoot = React.memo(({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  useEffect(() => {
    const handler = (message: { action: string }) => {
      if (message.action === "toggle-theme") {
        setMode((m) => (m === "light" ? "dark" : "light"));
      }
    };
    0;
    browser.runtime.onMessage.addListener(handler);
    return () => browser.runtime.onMessage.removeListener(handler);
  }, []);

  return (
    <ThemeProvider theme={getTheme(mode)}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
});

export default ThemedRoot;
