import { OptionsObject, useSnackbar } from "notistack";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import Link from "@mui/material/Link";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";

import { AppContext } from "../../contexts/AppContext";
import getCreatedLSPs from "../../helpers/getCreatedLSPs";
import launchSuperToken from "../../helpers/launchSuperLSP";
import { CreatedLSP, FormField } from "../../helpers/models";
import { camelToSentenceCase } from "../../helpers/utils";
import BaseInput from "../BaseInput";
import BaseSnackbar from "../BaseSnackbar";

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
  const { control, handleSubmit } = useForm<MintSuperLSPFormOptions>({
    defaultValues: {
      lspAddress: "",
      tokenType: "",
      amount: "",
      gasPrice: "",
    },
  });

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

    const snackbarOptions: Partial<OptionsObject> = {
      anchorOrigin: { horizontal: "right", vertical: "top" },
      autoHideDuration: 60000,
      persist: true,
      preventDuplicate: true,
    };

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

      enqueueSnackbar("", {
        ...snackbarOptions,
        key: "mint-super-success",
        content: (
          <BaseSnackbar
            key="mint-super-success"
            message={`Token address: ${launchData.address}`}
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
                  <Grid key={mintField.name} item xs={12} sm={6}>
                    <Controller
                      name={mintField.name as never}
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
                <Grid key={mintField.name} item xs={12} sm={6}>
                  <Controller
                    name={mintField.name as never}
                    control={control}
                    rules={mintField.rules}
                    render={({ field, fieldState, formState }) => (
                      <BaseInput
                        disabled={formState.isSubmitting}
                        customField={mintField}
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
