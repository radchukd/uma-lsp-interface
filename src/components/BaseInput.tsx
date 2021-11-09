import React from "react";
import { ControllerRenderProps } from "react-hook-form";

import { Info } from "@mui/icons-material";
import { Box, Popover, TextField } from "@mui/material";

interface IBaseInput {
  label: string;
  description: string;
  disabled: boolean;
  required: boolean;
  type: string;
  error?: string;
  field?: ControllerRenderProps;
}

const BaseInput: React.FC<IBaseInput> = ({
  label,
  description,
  disabled,
  required,
  type,
  error,
  field,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <React.Fragment>
      <Box display="flex" alignItems="flex-end">
        <TextField
          {...field}
          id={`${label}-input-label`}
          disabled={disabled}
          required={required}
          type={type}
          label={label}
          variant="standard"
          fullWidth
          error={Boolean(error)}
          helperText={error}
        />
        <Box onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>
          <Info />
        </Box>
        <Popover
          id={`${label}-input-description`}
          sx={{ pointerEvents: "none" }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <Box p={1} maxWidth="320px">
            {description}
          </Box>
        </Popover>
      </Box>
    </React.Fragment>
  );
};

export default BaseInput;
