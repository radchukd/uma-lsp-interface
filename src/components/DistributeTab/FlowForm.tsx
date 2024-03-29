import { OptionsObject, useSnackbar } from "notistack";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { AppContext } from "../../contexts/AppContext";
import { FlowOptions, FormField } from "../../helpers/models";
import BaseInput from "../BaseInput";
import BaseSnackbar from "../BaseSnackbar";

const flowFields: Array<FormField<FlowOptions>> = [
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
    rules: {
      required: true,
      validate: (value: any) =>
        Boolean(String(value).match(/^\d+$/)) || "Invalid number",
    },
  },
];

const FlowForm: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { sf, userAddress, handleLoading } = React.useContext(AppContext);
  const { control, handleSubmit } = useForm<FlowOptions>({
    defaultValues: {
      token: "",
      recipient: "",
      flowRate: "",
    },
  });

  const onSubmit: SubmitHandler<FlowOptions> = async ({
    token,
    recipient,
    flowRate,
  }) => {
    if (!sf || !userAddress) return;

    const snackbarOptions: Partial<OptionsObject> = {
      anchorOrigin: { horizontal: "right", vertical: "top" },
      autoHideDuration: 60000,
      persist: true,
      preventDuplicate: true,
    };

    try {
      handleLoading(true);

      await sf
        .user({ address: userAddress, token })
        .flow({ recipient, flowRate });

      enqueueSnackbar("", {
        ...snackbarOptions,
        key: "flow-success",
        content: (
          <BaseSnackbar
            key="flow-success"
            message="Flow was created"
            variant="success"
          />
        ),
      });
    } catch (e) {
      console.log(e);

      const message = (e as any).message || (e as Error).toString();

      enqueueSnackbar("", {
        ...snackbarOptions,
        key: "flow-error",
        content: (
          <BaseSnackbar
            key="flow-error"
            message="An error has occured"
            details={message}
            variant="error"
          />
        ),
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
              <Grid key={flowField.name} item xs={12} sm={6}>
                <Controller
                  name={flowField.name as never}
                  control={control}
                  rules={flowField.rules}
                  render={({ field, fieldState, formState }) => (
                    <BaseInput
                      disabled={formState.isSubmitting}
                      customField={flowField}
                      hookFormField={field as any}
                      error={fieldState.error?.message || ""}
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

export default FlowForm;
