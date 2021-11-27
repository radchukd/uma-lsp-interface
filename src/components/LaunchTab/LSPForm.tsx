import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import DateTimePicker from "@mui/lab/DateTimePicker";
import {
  Button,
  FormControl,
  FormHelperText,
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
import { FormField, FPL } from "../../helpers/models";
import { camelToSentenceCase } from "../../helpers/utils";
import BaseInput from "../BaseInput";
import { LaunchFormOptions } from ".";
import { isAfter, endOfToday } from "date-fns";

export type LSPFormOptions = {
  pairName: string;
  expirationTimestamp: Date;
  collateralPerPair: string;
  priceIdentifier: string;
  longSynthName: string;
  longSynthSymbol: string;
  shortSynthName: string;
  shortSynthSymbol: string;
  collateralToken: string;
  prepaidProposerReward: string;
  optimisticOracleLivenessTime: string;
  optimisticOracleProposerBond: string;
  fpl: FPL;
};

const requiredLspFields: Array<FormField<LSPFormOptions>> = [
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
    type: "number",
    rules: {
      required: true,
      min: 0,
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
    options: [],
  },
  {
    name: "fpl",
    description: "Financial library used to calculate the payout at expiry.",
    rules: {
      required: true,
    },
    options: [
      "BinaryOption",
      "CappedYieldDollar",
      "CoveredCall",
      "Linear",
      "RangeBond",
      "SimpleSuccessToken",
      "SuccessToken",
      "KPI Option - Linear",
      "KPI Option - Binary",
    ],
  },
];

const optionalLspFields: Array<FormField<LSPFormOptions>> = [
  {
    name: "prepaidProposerReward",
    description:
      "Proposal reward to be forwarded to the created contract to be used to incentivize price proposals.",
    type: "number",
    rules: {
      required: false,
      min: 0,
    },
  },
  {
    name: "optimisticOracleLivenessTime",
    description:
      "Custom liveness window for disputing optimistic oracle price proposals in seconds. A longer liveness time provides more security, while a shorter one provides faster settlement. By default, this is set to 7200 seconds.",
    type: "number",
    rules: {
      required: false,
      min: 0,
    },
  },
  {
    name: "optimisticOracleProposerBond",
    description:
      "Additional bond a proposer must post with the optimistic oracle. A higher bond makes incorrect disputes and proposals more costly.",
    type: "number",
    rules: {
      required: false,
      min: 0,
    },
  },
];

interface ILSPForm {
  formOptions: LaunchFormOptions;
  saveFormOptions: (options: Partial<LaunchFormOptions>) => LaunchFormOptions;
  handleNext: () => void;
}

const LSPForm: React.FC<ILSPForm> = ({
  formOptions,
  saveFormOptions,
  handleNext,
}) => {
  const { chainId } = React.useContext(AppContext);
  const { control, handleSubmit, setError } = useForm<LSPFormOptions>({
    defaultValues: formOptions as LSPFormOptions,
  });

  const onSubmit: SubmitHandler<LSPFormOptions> = (data, event) => {
    if (
      data.fpl.includes("KPI Option") &&
      data.priceIdentifier !== "General_KPI"
    ) {
      setError("priceIdentifier", {
        message: "Binary and Linear KPI options only support General_KPI",
      });
      return;
    }

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

    // reset if switches to non-KPI option
    const customAncillaryData = !data.fpl.includes("KPI Option")
      ? ""
      : formOptions.customAncillaryData;

    saveFormOptions({
      ...data,
      collateralToken,
      customAncillaryData,
    });

    handleNext();
  };

  const renderField = (lspField: FormField<LSPFormOptions>) => {
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
      lspField.name === "fpl" ||
      lspField.name === "priceIdentifier" ||
      (lspField.name === "collateralToken" &&
        (chainId === 1 || chainId === 137))
    ) {
      const label =
        lspField.name !== "fpl"
          ? `${camelToSentenceCase(lspField.name)} ${
              lspField.rules.required ? "*" : ""
            }`
          : "Financial product *";

      if (lspField.name === "collateralToken") {
        lspField.options = collateralTokens
          .filter((token) =>
            token.addresses.some(
              (address) =>
                (chainId === 1 && address.includes("etherscan")) ||
                (chainId === 137 && address.includes("polygonscan")),
            ),
          )
          .map((token) => token.currency);
      }

      return (
        <Grid key={lspField.name} item xs={12} md={6}>
          <Controller
            name={lspField.name as never}
            defaultValue=""
            control={control}
            rules={lspField.rules}
            render={({ field, fieldState, formState }) => (
              <FormControl
                fullWidth
                variant="standard"
                error={Boolean(fieldState.error?.message)}
              >
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
                      {lspField.name !== "fpl" || option.includes("KPI Option")
                        ? option
                        : camelToSentenceCase(option)}
                    </MenuItem>
                  ))}
                </Select>
                {Boolean(fieldState.error?.message) && (
                  <FormHelperText>{fieldState.error?.message}</FormHelperText>
                )}
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
              disabled={formState.isSubmitting}
              customField={lspField}
              hookFormField={field}
              error={fieldState.error?.message || ""}
            />
          )}
        />
      </Grid>
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3} sx={{ mt: 1 }}>
        <Grid item xs={12}>
          <Typography variant="h6">Mandatory Parameters</Typography>
        </Grid>
        {requiredLspFields.map(renderField)}
        <Grid item xs={12}>
          <Typography variant="h6">Optional Parameters</Typography>
        </Grid>
        {optionalLspFields.map(renderField)}
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
