import React from "react";
import { createTheme, PaletteOptions, ThemeProvider } from "@mui/material";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

const darkModePalette: PaletteOptions = {
  mode: "dark",
  primary: {
    main: "#ff4a4a",
  },
  background: {
    default: "#191a1a",
    paper: "#252728",
  },
};

const lightModePalette: PaletteOptions = {
  mode: "light",
  primary: {
    main: "#ff4a4a",
  },
};

export const ColorModeProvider: React.FC = ({ children }) => {
  const [mode, setMode] = React.useState<"light" | "dark">("light");

  const toggleColorMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("colorMode", newMode);
  };

  React.useEffect(() => {
    const savedMode = localStorage.getItem("colorMode");

    if (savedMode) {
      setMode(savedMode as "light" | "dark");
    } else {
      setMode(
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light",
      );

      const onModeChange = (e: MediaQueryListEvent) => {
        setMode(e.matches ? "dark" : "light");
      };

      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", onModeChange);

      return () => {
        window
          .matchMedia("(prefers-color-scheme: dark)")
          .removeEventListener("change", onModeChange);
      };
    }
  }, []);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: mode === "dark" ? darkModePalette : lightModePalette,
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={{ toggleColorMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};
