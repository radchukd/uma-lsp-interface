import React from "react";
import { ControllerRenderProps } from "react-hook-form";

import InfoIcon from "@mui/icons-material/Info";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";

import { FormField } from "../helpers/models";
import { camelToSentenceCase } from "../helpers/utils";

interface IBaseInput {
  disabled: boolean;
  customField: FormField<any>;
  hookFormField: ControllerRenderProps;
  error: string;
  fullWidth?: boolean;
}

const BaseInput: React.FC<IBaseInput> = ({
  disabled,
  customField,
  hookFormField,
  error,
  fullWidth = true,
}) => {
  const [isTooltipOpen, setTooltipOpen] = React.useState(false);

  return (
    <React.Fragment>
      <Box display="flex" alignItems="flex-end">
        <TextField
          id={`${customField.name.toString()}-input-label`}
          disabled={disabled}
          required={Boolean(customField.rules.required)}
          type={customField.type || "string"}
          label={camelToSentenceCase(customField.name.toString())}
          variant="standard"
          fullWidth={fullWidth}
          error={Boolean(error)}
          helperText={error}
          inputProps={
            customField.type === "number"
              ? {
                  max: customField.rules.max?.toString(),
                  min: customField.rules.min?.toString(),
                  step: "any",
                }
              : {}
          }
          {...hookFormField}
        />
        {customField.description && (
          <Tooltip
            title={customField.description}
            open={isTooltipOpen}
            onOpen={() => setTooltipOpen(true)}
            onClose={() => setTooltipOpen(false)}
            leaveDelay={500}
            placement="bottom-end"
          >
            <IconButton onClick={() => setTooltipOpen(!isTooltipOpen)}>
              <InfoIcon />
            </IconButton>
          </Tooltip>
        )}
      </Box>
    </React.Fragment>
  );
};

export default BaseInput;
