import React from "react";
import { ControllerRenderProps } from "react-hook-form";

import { Info } from "@mui/icons-material";
import { Box, TextField, Tooltip } from "@mui/material";
import { FormField } from "../helpers/models";
import { camelToSentenceCase } from "../helpers/utils";

interface IBaseInput {
  disabled: boolean;
  customField: FormField<any>;
  hookFormField: ControllerRenderProps;
  error: string;
}

const BaseInput: React.FC<IBaseInput> = ({
  disabled,
  customField,
  hookFormField,
  error,
}) => {
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
          fullWidth
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
        <Tooltip title={customField.description} placement="top">
          <Info />
        </Tooltip>
      </Box>
    </React.Fragment>
  );
};

export default BaseInput;
