import React from "react";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";

import { AppContext } from "../contexts/AppContext";

const AppLayout: React.FC = ({ children }) => {
  const { isLoading } = React.useContext(AppContext);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Backdrop
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isLoading}
          >
            <CircularProgress color="primary" />
          </Backdrop>
          {children}
        </Paper>
      </Container>
    </React.Fragment>
  );
};

export default AppLayout;
