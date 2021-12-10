import { SnackbarContent, useSnackbar, VariantType } from "notistack";
import React from "react";

import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import styled from "@mui/material/styles/styled";
import useTheme from "@mui/material/styles/useTheme";
import Typography from "@mui/material/Typography";

const StyledContent = styled(SnackbarContent)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    minWidth: "344px !important",
  },
}));

const StyledActions = styled(CardActions)(() => ({
  padding: "8px 8px 8px 16px",
  justifyContent: "space-between",
}));

interface IBaseSnackbar {
  key: string | number;
  message: string;
  details?: string;
  variant: VariantType;
}

const BaseSnackbar = React.forwardRef<HTMLDivElement, IBaseSnackbar>(
  ({ key, message, details, variant }, ref) => {
    const theme = useTheme();
    const { closeSnackbar } = useSnackbar();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = React.useCallback(() => {
      setExpanded((oldExpanded) => !oldExpanded);
    }, []);

    const handleDismiss = React.useCallback(() => {
      closeSnackbar(key);
    }, [key, closeSnackbar]);

    const handleCopying = async () => {
      if (!details?.length) return;

      if (!navigator.clipboard) {
        fallbackCopyTextToClipboard();
        return;
      }

      await navigator.clipboard.writeText(details);
    };

    const fallbackCopyTextToClipboard = () => {
      if (!details?.length) return;

      const textArea = document.createElement("textarea");
      textArea.value = details;

      // Avoid scrolling to bottom
      textArea.style.top = "0";
      textArea.style.left = "0";
      textArea.style.position = "fixed";

      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      document.execCommand("copy");

      document.body.removeChild(textArea);
    };

    const bgColor = () => {
      switch (variant) {
        case "error":
          return theme.palette.error.main;
        case "success":
          return theme.palette.success.main;
        case "warning":
          return theme.palette.warning.main;
        default:
          return theme.palette.primary.main;
      }
    };

    return (
      <StyledContent ref={ref}>
        <Card sx={{ width: "100%", backgroundColor: bgColor }}>
          <StyledActions>
            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
              {message}
            </Typography>
            <Box marginLeft="auto">
              {details && (
                <IconButton
                  aria-label="Show more"
                  sx={{
                    padding: "8px 8px",
                    transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                    transition: theme.transitions.create("transform", {
                      duration: theme.transitions.duration.shortest,
                    }),
                  }}
                  onClick={handleExpandClick}
                >
                  <ExpandMoreIcon />
                </IconButton>
              )}
              <IconButton
                sx={{
                  padding: "8px 8px",
                  transform: "rotate(0deg)",
                  transition: theme.transitions.create("transform", {
                    duration: theme.transitions.duration.shortest,
                  }),
                }}
                onClick={handleDismiss}
              >
                <CloseIcon />
              </IconButton>
            </Box>
          </StyledActions>
          {details && (
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <Paper
                sx={{
                  padding: theme.spacing(2),
                  maxWidth: "344px",
                  overflowWrap: "break-word",
                }}
              >
                <Typography gutterBottom>{details}</Typography>
                <Button
                  size="small"
                  sx={{ padding: 0, textTransform: "none" }}
                  onClick={handleCopying}
                >
                  Copy message
                </Button>
              </Paper>
            </Collapse>
          )}
        </Card>
      </StyledContent>
    );
  },
);

export default BaseSnackbar;
