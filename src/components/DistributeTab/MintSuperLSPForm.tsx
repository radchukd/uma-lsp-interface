import { useSnackbar } from "notistack";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  Link,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

import { AppContext } from "../../contexts/AppContext";
import getCreatedLSPs from "../../helpers/getCreatedLSPs";
import launchSuperToken from "../../helpers/launchSuperLSP";
import { CreatedLSP, FormField } from "../../helpers/models";
import { camelToSentenceCase } from "../../helpers/utils";
import BaseInput from "../BaseInput";

type MintSuperLSPFormOptions = {
  lspAddress: string;
  tokenType: string; // short | long
  amount: string;
  gasPrice: string;
};

const mintFields: Array<FormField<MintSuperLSPFormOptions>> = [
  {
    name: "lspAddress",
    description: "Address of the LSP token pair.",
    rules: {
      required: true,
    },
    options: [],
  },
  {
    name: "tokenType",
    description: "Type of token to mint.",
    rules: {
      required: true,
    },
    options: ["Short", "Long"],
  },
  {
    name: "amount",
    description: "Amount of tokens to mint.",
    type: "number",
    rules: {
      required: true,
      min: 0,
    },
  },
  {
    name: "gasPrice",
    description: "Gas price to use in GWEI.",
    type: "number",
    rules: {
      required: true,
      min: 1,
      max: 1000,
    },
  },
];

const MintSuperLSPForm: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { isLoading, web3, sf, handleLoading } = React.useContext(AppContext);
  const [createdLSPs, setCreatedLSPs] = React.useState<Array<CreatedLSP>>([]);
  const { control, handleSubmit } = useForm<MintSuperLSPFormOptions>();

  React.useEffect(() => {
    if (web3) getCreatedLSPs(web3).then(setCreatedLSPs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [web3]);

  React.useEffect(() => {
    if (createdLSPs.length) handleLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createdLSPs]);

  const onSubmit: SubmitHandler<MintSuperLSPFormOptions> = async ({
    lspAddress,
    tokenType,
    amount,
    gasPrice,
  }) => {
    if (!web3 || !sf) return;

    try {
      handleLoading(true);

      const lspCreated = createdLSPs.find(
        (lsp) => lsp.longShortPair === lspAddress,
      )!;

      const { shortToken, longToken } = lspCreated;

      const launchData = await launchSuperToken({
        web3,
        sf,
        gasPrice,
        tokenAddress: tokenType === "Short" ? shortToken : longToken,
        amount,
      });

      enqueueSnackbar(`Token address: ${launchData.address}`, {
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
      {!isLoading && !createdLSPs.length ? (
        <Typography variant="h6" sx={{ mt: 1, mb: 1 }}>
          You haven't launched any LSP tokens yet.{" "}
          <Link href="#launch">Launch</Link>.
        </Typography>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ mt: 1, mb: 1 }}>
            <Typography variant="h6">
              Transform LSP tokens you've created into SuperTokens
            </Typography>
            <Typography variant="body2">
              Make sure you've minted the LSP pair.
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {mintFields.map((mintField) => {
              if (
                mintField.name === "lspAddress" ||
                mintField.name === "tokenType"
              ) {
                const label = `${camelToSentenceCase(mintField.name)} ${
                  mintField.rules.required ? "*" : ""
                }`;

                if (mintField.name === "lspAddress")
                  mintField.options = createdLSPs.map(
                    (lsp) => lsp.longShortPair,
                  );

                return (
                  <Grid key={mintField.name} item xs={12} md={6}>
                    <Controller
                      name={mintField.name as never}
                      defaultValue=""
                      control={control}
                      rules={mintField.rules}
                      render={({ field, fieldState, formState }) => (
                        <FormControl
                          fullWidth
                          variant="standard"
                          error={Boolean(fieldState.error?.message)}
                        >
                          <InputLabel id={`${mintField.name}-select-label`}>
                            {label}
                          </InputLabel>
                          <Select
                            labelId={`${mintField.name}-select-label`}
                            id={`${mintField.name}-select`}
                            label={label}
                            disabled={formState.isSubmitting}
                            required={Boolean(mintField.rules.required)}
                            {...field}
                          >
                            {mintField.options!.map((option) => (
                              <MenuItem key={option} value={option}>
                                {option}
                              </MenuItem>
                            ))}
                          </Select>
                          {Boolean(fieldState.error?.message) && (
                            <FormHelperText>
                              {fieldState.error?.message}
                            </FormHelperText>
                          )}
                        </FormControl>
                      )}
                    />
                  </Grid>
                );
              }

              return (
                <Grid key={mintField.name} item xs={12} md={6}>
                  <Controller
                    name={mintField.name as never}
                    defaultValue=""
                    control={control}
                    rules={mintField.rules}
                    render={({ field, fieldState, formState }) => (
                      <BaseInput
                        disabled={formState.isSubmitting}
                        customField={mintField}
                        hookFormField={field}
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
                Mint
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </React.Fragment>
  );
};

export default MintSuperLSPForm;
