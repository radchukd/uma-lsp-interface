import { OptionsObject, useSnackbar } from "notistack";
import React from "react";
import {
  Controller,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";

import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import { AppContext } from "../../contexts/AppContext";
import { DistributeOptions, FormField } from "../../helpers/models";
import BaseInput from "../BaseInput";
import BaseSnackbar from "../BaseSnackbar";

const distributeFields: Array<FormField<DistributeOptions>> = [
  {
    name: "token",
    description: "Address of the super token.",
    rules: {
      required: true,
    },
  },
  {
    name: "amount",
    description: "The amount of super tokens to distribute",
    type: "number",
    rules: {
      required: true,
      min: 0,
    },
  },
];

const DistributeForm: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { web3, sf, userAddress, handleLoading } = React.useContext(AppContext);
  const { control, handleSubmit } = useForm<DistributeOptions>({
    defaultValues: {
      token: "",
      amount: "",
      recipients: [],
    },
  });
  const {
    fields: recipientFields,
    append,
    remove,
  } = useFieldArray({ control, name: "recipients" });

  const onSubmit: SubmitHandler<DistributeOptions> = async ({
    token,
    amount,
    recipients,
  }) => {
    if (!web3 || !sf || !userAddress) return;

    const { toBN } = web3.utils;

    if (
      !recipients.length ||
      recipients.reduce(
        (prevRecipientShares, curRecipient) =>
          prevRecipientShares + Number(curRecipient.shares),
        0,
      ) > 100
    )
      return;

    const snackbarOptions: Partial<OptionsObject> = {
      anchorOrigin: { horizontal: "right", vertical: "top" },
      autoHideDuration: 60000,
      persist: true,
      preventDuplicate: true,
    };

    try {
      handleLoading(true);

      const user = sf.user({ address: userAddress, token });
      const pools =
        (await sf.ida?.listIndices({
          publisher: userAddress,
          superToken: token,
        })) || [];

      const poolId = ++pools[pools.length - 1] || 1;

      await user.createPool({ poolId });

      for (const recipient of recipients) {
        await user.giveShares({
          poolId,
          recipient: recipient.address,
          shares: Number(recipient.shares),
        });
      }

      await user.distributeToPool({
        poolId,
        amount: toBN(amount).mul(toBN(10).pow(toBN(18))),
      });

      enqueueSnackbar("", {
        ...snackbarOptions,
        key: "distribute-success",
        content: (
          <BaseSnackbar
            key="distribute-success"
            message="Tokens were distributed"
            variant="success"
          />
        ),
      });
    } catch (e) {
      console.log(e);

      const message = (e as any).message || (e as Error).toString();

      enqueueSnackbar("", {
        ...snackbarOptions,
        key: "distribute-error",
        content: (
          <BaseSnackbar
            key="distribute-error"
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
            Create a pool and distribute tokens
          </Typography>
          <Typography variant="body2">
            Make sure you've tranformed your long/short token into a supertoken.
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {distributeFields.map((flowField) => (
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
          ))}
          {recipientFields.map((recipientField, index) => (
            <Grid
              key={recipientField.id}
              item
              xs={12}
              container
              alignItems="center"
            >
              <Controller
                name={`recipients.${index}.address`}
                defaultValue=""
                control={control as any}
                rules={{ required: true }}
                render={({ field, fieldState, formState }) => (
                  <BaseInput
                    disabled={formState.isSubmitting}
                    customField={{
                      name: "address",
                      rules: { required: true },
                    }}
                    hookFormField={field as any}
                    error={fieldState.error?.message || ""}
                    fullWidth={false}
                  />
                )}
              />
              <Box sx={{ width: "24px" }} />
              <Controller
                name={`recipients.${index}.shares`}
                defaultValue=""
                control={control as any}
                rules={{ required: true, min: 0, max: 100 }}
                render={({ field, fieldState, formState }) => (
                  <BaseInput
                    disabled={formState.isSubmitting}
                    customField={{
                      name: "shares",
                      type: "number",
                      rules: { min: 0, max: 100, required: true },
                    }}
                    hookFormField={field as any}
                    error={fieldState.error?.message || ""}
                    fullWidth={false}
                  />
                )}
              />
              <IconButton onClick={() => remove(index)}>
                <DeleteIcon />
              </IconButton>
            </Grid>
          ))}
          <Grid
            item
            xs={12}
            container
            alignItems="center"
            justifyContent="flex-end"
          >
            <Button
              type="button"
              variant="contained"
              onClick={() => append({ address: "", shares: "" })}
            >
              Add recipient
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            container
            alignItems="center"
            justifyContent="flex-end"
          >
            <Button type="submit" variant="contained">
              Distribute
            </Button>
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
};

export default DistributeForm;
