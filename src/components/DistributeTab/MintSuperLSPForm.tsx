import { useSnackbar } from "notistack";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  FormControl,
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
  gasPrice: number;
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
      validate: (value: any) =>
        value === "" ||
        Boolean(String(value).match(/^\d+$/)) ||
        "Invalid number",
    },
  },
  {
    name: "gasPrice",
    description: "Gas price to use in GWEI.",
    type: "number",
    rules: {
      required: true,
      validate: (value: any) => {
        if (value === "") return true;

        const num = parseInt(value);

        if (num < 1 || num > 1000) {
          return "Invalid number";
        }

        return true;
      },
    },
  },
];

const MintSuperLSPForm: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { web3, sf } = React.useContext(AppContext);
  const [isLoading, setLoading] = React.useState(true);
  const [createdLSPs, setCreatedLSPs] = React.useState<Array<CreatedLSP>>([]);
  const { control, handleSubmit } = useForm<MintSuperLSPFormOptions>();

  React.useEffect(() => {
    if (web3) getCreatedLSPs(web3).then(setCreatedLSPs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [web3]);

  React.useEffect(() => {
    if (createdLSPs.length) setLoading(false);
  }, [createdLSPs]);

  const onSubmit: SubmitHandler<MintSuperLSPFormOptions> = async ({
    lspAddress,
    tokenType,
    amount,
    gasPrice,
  }) => {
    if (!web3 || !sf) return;

    try {
      setLoading(true);

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
      setLoading(false);
    }
  };

  return (
    <React.Fragment>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress />
      </Backdrop>
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
                        <FormControl fullWidth variant="standard">
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
                        label={camelToSentenceCase(mintField.name)}
                        description={mintField.description}
                        disabled={formState.isSubmitting}
                        required={Boolean(mintField.rules.required)}
                        type={mintField.type || "string"}
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
