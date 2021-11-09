import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import DateTimePicker from "@mui/lab/DateTimePicker";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";

import { AppContext } from "../../contexts/AppContext";
import { collateralTokens, priceIdentifiers } from "../../helpers/constants";
import { FormField, LSPOptions } from "../../helpers/models";
import { camelToSentenceCase } from "../../helpers/utils";
import BaseInput from "../BaseInput";
import { LaunchFormOptions } from ".";
import { isAfter, endOfToday } from "date-fns";

const lspFields: Array<FormField<LSPOptions>> = [
  {
    name: "pairName",
    description: "The desired name of the token pair.",
    rules: {
      required: true,
    },
  },
  {
    name: "expirationTimestamp",
    description: "",
    rules: {
      required: true,
      valueAsDate: true,
      validate: (value: any) =>
        isAfter(new Date(value), endOfToday()) || "Invalid date",
    },
  },
  {
    name: "collateralPerPair",
    description:
      "The amount of collateral required to mint each long and short pair. If 1 $UMA was used as collateral to mint, the minter would receive 4 long and 4 short tokens.",
    rules: {
      required: true,
      validate: (value: any) =>
        Boolean(String(value).match(/^\d+$/)) || "Invalid number",
    },
  },
  {
    name: "priceIdentifier",
    description: "The approved price identifier to be used.",
    rules: {
      required: true,
    },
    options: priceIdentifiers.map((pi) => pi.id),
  },
  {
    name: "longSynthName",
    description: "The full-length name of the long token.",
    rules: {
      required: true,
    },
  },
  {
    name: "longSynthSymbol",
    description: "The ticker name of the long token.",
    rules: {
      required: true,
      maxLength: 14,
    },
  },
  {
    name: "shortSynthName",
    description: "The full-length name of the short token. ",
    rules: {
      required: true,
    },
  },
  {
    name: "shortSynthSymbol",
    description: "The ticker name of the short token or ticker symbol.",
    rules: {
      required: true,
      maxLength: 14,
    },
  },
  {
    name: "collateralToken",
    description: "Approved collateral currency to be used.",
    rules: {
      required: true,
    },
    options: collateralTokens.map((ct) => ct.currency),
  },
  {
    name: "customAncillaryData",
    description:
      "Custom ancillary data to be passed along with the price request.",
    rules: {
      required: false,
    },
  },
  {
    name: "prepaidProposerReward",
    description:
      "Proposal reward to be forwarded to the created contract to be used to incentivize price proposals.",
    rules: {
      required: false,
      validate: (value: any) =>
        value === "" ||
        Boolean(String(value).match(/^\d+$/)) ||
        "Invalid number",
    },
  },
  {
    name: "optimisticOracleLivenessTime",
    description:
      "Custom liveness window for disputing optimistic oracle price proposals in seconds. A longer liveness time provides more security, while a shorter one provides faster settlement. By default, this is set to 7200 seconds.",
    rules: {
      required: false,
      validate: (value: any) =>
        value === "" ||
        Boolean(String(value).match(/^\d+$/)) ||
        "Invalid number",
    },
  },
  {
    name: "optimisticOracleProposerBond",
    description:
      "Additional bond a proposer must post with the optimistic oracle. A higher bond makes incorrect disputes and proposals more costly.",
    rules: {
      required: false,
      validate: (value: any) =>
        value === "" ||
        Boolean(String(value).match(/^\d+$/)) ||
        "Invalid number",
    },
  },
];

interface ILSPForm {
  lspOptions: LSPOptions;
  saveLSPOptions: (options: LSPOptions) => LaunchFormOptions;
  handleNext: () => void;
}

const LSPForm: React.FC<ILSPForm> = ({
  lspOptions,
  saveLSPOptions,
  handleNext,
}) => {
  const { chainId } = React.useContext(AppContext);
  const { control, handleSubmit } = useForm<LSPOptions>({
    defaultValues: lspOptions,
  });

  const onSubmit: SubmitHandler<LSPOptions> = (data, event) => {
    // Check if entered manually on test networks
    const collateralToken = data.collateralToken.startsWith("0x")
      ? data.collateralToken
      : collateralTokens
          .find((token) => token.currency === data.collateralToken)
          ?.addresses.find(
            (address) =>
              (chainId === 1 && address.includes("etherscan")) ||
              (chainId === 137 && address.includes("polygonscan")),
          )
          ?.split("/")
          ?.pop()!;

    saveLSPOptions({
      ...data,
      collateralToken,
    });

    handleNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h6" sx={{ mt: 1, mb: 1 }}>
        LSP parameters
      </Typography>
      <Grid container spacing={3}>
        {lspFields.map((lspField) => {
          if (lspField.name === "expirationTimestamp") {
            return (
              <Grid key={lspField.name} item xs={12} md={6}>
                <Controller
                  name={lspField.name as never}
                  defaultValue={new Date()}
                  control={control}
                  rules={lspField.rules}
                  render={({ field, fieldState, formState }) => (
                    <DateTimePicker
                      {...field}
                      label={camelToSentenceCase(lspField.name)}
                      renderInput={(props: TextFieldProps) => (
                        <TextField
                          {...props}
                          fullWidth
                          variant="standard"
                          disabled={formState.isSubmitting}
                          required={true}
                          error={Boolean(fieldState.error?.message)}
                          helperText={fieldState.error?.message}
                        />
                      )}
                    />
                  )}
                />
              </Grid>
            );
          } else if (
            lspField.name === "priceIdentifier" ||
            (lspField.name === "collateralToken" &&
              (chainId === 1 || chainId === 137))
          ) {
            const label = `${camelToSentenceCase(lspField.name)} ${
              lspField.rules.required ? "*" : ""
            }`;

            return (
              <Grid key={lspField.name} item xs={12} md={6}>
                <Controller
                  name={lspField.name as never}
                  defaultValue=""
                  control={control}
                  rules={lspField.rules}
                  render={({ field, fieldState, formState }) => (
                    <FormControl fullWidth variant="standard">
                      <InputLabel id={`${lspField.name}-select-label`}>
                        {label}
                      </InputLabel>
                      <Select
                        labelId={`${lspField.name}-select-label`}
                        id={`${lspField.name}-select`}
                        label={label}
                        disabled={formState.isSubmitting}
                        required={Boolean(lspField.rules.required)}
                        {...field}
                      >
                        {lspField.options!.map((option) => (
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
            <Grid key={lspField.name} item xs={12} md={6}>
              <Controller
                name={lspField.name as never}
                defaultValue=""
                control={control}
                rules={lspField.rules}
                render={({ field, fieldState, formState }) => (
                  <BaseInput
                    label={camelToSentenceCase(lspField.name)}
                    description={lspField.description}
                    disabled={formState.isSubmitting}
                    required={Boolean(lspField.rules.required)}
                    type={lspField.type || "string"}
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
            Next
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default LSPForm;
