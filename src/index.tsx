import { SnackbarProvider } from "notistack";
import React from "react";
import ReactDOM from "react-dom";

import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

import App from "./App";
import { AppProvider } from "./contexts/AppContext";
import AppLayout from "./components/AppLayout";
import { ColorModeProvider } from "./contexts/ColorModeContext";

ReactDOM.render(
  <React.StrictMode>
    <ColorModeProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <SnackbarProvider maxSnack={3}>
          <AppProvider>
            <AppLayout>
              <App />
            </AppLayout>
          </AppProvider>
        </SnackbarProvider>
      </LocalizationProvider>
    </ColorModeProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
