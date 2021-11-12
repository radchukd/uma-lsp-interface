import { useSnackbar } from "notistack";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import { Box, Button, Grid, Typography } from "@mui/material";

import { AppContext } from "../../contexts/AppContext";
import { DistributeOptions, FormField } from "../../helpers/models";
import { camelToSentenceCase } from "../../helpers/utils";
import BaseInput from "../BaseInput";

const flowFields: Array<FormField<DistributeOptions>> = [
  {
    name: "token",
    description: "Address of the super token.",
    rules: {
      required: true,
    },
  },
  {
    name: "recipient",
    description: "Recipient of the super token.",
    rules: {
      required: true,
    },
  },
  {
    name: "flowRate",
    description: "The amount of super token to transfer per second.",
    type: "number",
    rules: {
      required: true,
      validate: (value: any) =>
        Boolean(String(value).match(/^\d+$/)) || "Invalid number",
    },
  },
];

const DistributeForm: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { sf, userAddress, handleLoading } = React.useContext(AppContext);
  const { control, handleSubmit } = useForm<{}>();

  const onSubmit: SubmitHandler<DistributeOptions> = async ({
    token,
    recipient,
    flowRate,
  }) => {
    if (!sf || !userAddress) return;

    try {
      handleLoading(true);

      await sf
        .user({ address: userAddress, token })
        .flow({ recipient, flowRate });

      enqueueSnackbar(`Flow was created`, {
        variant: "success",
        anchorOrigin: { horizontal: "right", vertical: "top" },
        autoHideDuration: 2500,
      });
    } catch (e) {
      console.log(e);

      const message = (e as any).message || (e as Error).toString();

      enqueueSnackbar(message, {
        variant: "error",
        anchorOrigin: { horizontal: "right", vertical: "top" },
        autoHideDuration: 2500,
      });
    } finally {
      handleLoading(false);
    }
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ mt: 1, mb: 1 }}>
          <Typography variant="h6">
            Create a Constant Flow Agreement "CFA"
          </Typography>
          <Typography variant="body2">
            Make sure you've tranformed your long/short token into a supertoken.
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {flowFields.map((flowField) => {
            return (
              <Grid key={flowField.name} item xs={12} md={6}>
                <Controller
                  name={flowField.name as never}
                  defaultValue=""
                  control={control}
                  rules={flowField.rules}
                  render={({ field, fieldState, formState }) => (
                    <BaseInput
                      label={camelToSentenceCase(flowField.name)}
                      description={flowField.description}
                      disabled={formState.isSubmitting}
                      required={Boolean(flowField.rules.required)}
                      type={flowField.type || "string"}
                      error={fieldState.error?.message}
                      field={field}
                    />
                  )}
                />
              </Grid>
            );
          })}
          <Grid
            item
            xs={12}
            container
            alignItems="center"
            justifyContent="flex-end"
          >
            <Button type="submit" variant="contained">
              Start flow
            </Button>
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
};

export default DistributeForm;
