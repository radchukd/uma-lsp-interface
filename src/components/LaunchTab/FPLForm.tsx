import { useSnackbar } from "notistack";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import { Button, Grid, Typography } from "@mui/material";

import { AppContext } from "../../contexts/AppContext";
import launchLSP from "../../helpers/launchLSP";
import { FormField } from "../../helpers/models";
import BaseInput from "../BaseInput";
import { LaunchFormOptions } from ".";

export type FPLFormOptions = {
  basePercentage: string;
  lowerBound: string;
  upperBound: string;
  gasPrice: string;
  customAncillaryData: string;
  // Mandatory
  Metric: string;
  Endpoint: string;
  Method: string;
  Key: string;
  Interval: string;
  // Optional
  Fallback: string;
  Aggregation: string;
  Rounding: string;
  Scaling: string;
  Unresolved: string;
};

const fplFields: Array<FormField<FPLFormOptions>> = [
  {
    name: "basePercentage",
    description: "Percentage of collateral per pair used as the floor.",
    type: "number",
    rules: {
      required: true,
      min: 0,
    },
  },
  {
    name: "lowerBound",
    description:
      "Below the lower bound each range token is worth the number of collateral that is set using collateral per pair.",
    type: "number",
    rules: {
      required: true,
      min: 0,
    },
  },
  {
    name: "upperBound",
    description:
      "Above the upper bound, holders of the long token are entitled to a fixed, minimum number of collateral.",
    type: "number",
    rules: {
      required: true,
      min: 0,
    },
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
    name: "Metric",
    description:
      "Short description reflecting the metric and units to be measured.",
    rules: {
      required: true,
    },
  },
  {
    name: "Endpoint",
    description:
      "Link to data endpoint that should return the Metric at request timestamp.",
    rules: {
      required: true,
    },
  },
  {
    name: "Method",
    description:
      "Link to a descriptive source covering the objective and methodology for calculating a particular metric.",
    rules: {
      required: true,
    },
  },
  {
    name: "Key",
    description:
      "Which key value from the Endpoint response should be used by voters for further processing of the price request.",
    rules: {
      required: true,
    },
  },
  {
    name: "Interval",
    description:
      "This describes how request timestamps for pricing queries should be rounded and what is the granularity of historical data update frequency.",
    rules: {
      required: true,
    },
  },
  {
    name: "Fallback",
    description:
      "In the event of the end-point not working or reporting false outcomes, a fallback ensures that UMA token holders can arrive at the proper result.",
    rules: {},
  },
  {
    name: "Aggregation",
    description:
      "In case any time series data processing is required this describes processing method used (e.g. calculating TWAP, finding peak value, etc.) and also sets the start timestamp for such aggregation.",
    rules: {},
  },
  {
    name: "Rounding",
    description:
      "This is integer number defining how many digits should be left to the right of decimal delimiter after rounding.",
    rules: {},
  },
  {
    name: "Scaling",
    description:
      "This is integer number defining power of 10 scaling to be applied after rounding.",
    rules: {},
  },
  {
    name: "Unresolved",
    description:
      "This is numeric value that voters should return for unresolvable price request (defaults to zero if omitted).",
    rules: {},
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

interface IFPLForm {
  formOptions: LaunchFormOptions;
  saveFormOptions: (options: Partial<LaunchFormOptions>) => LaunchFormOptions;
  handleBack: () => void;
}

const FPLForm: React.FC<IFPLForm> = ({
  formOptions,
  saveFormOptions,
  handleBack,
}) => {
  const { fpl } = formOptions;
  const isKPIOption = fpl.startsWith("KPI Option");
  const { enqueueSnackbar } = useSnackbar();
  const { web3, handleLoading } = React.useContext(AppContext);
  const { control, handleSubmit, getValues } = useForm<FPLFormOptions>({
    defaultValues: {
      ...(formOptions as unknown as FPLFormOptions),
      ...(formOptions.customAncillaryData?.length
        ? JSON.parse(formOptions.customAncillaryData)
        : ({} as any)),
    },
  });

  const prepareFormOptions = ({
    Metric,
    Endpoint,
    Method,
    Key,
    Interval,
    Fallback,
    Aggregation,
    Scaling,
    Unresolved,
    ...data
  }: FPLFormOptions): Partial<LaunchFormOptions> => ({
    ...data,
    customAncillaryData: JSON.stringify({
      Metric,
      Endpoint,
      Method,
      Key,
      Interval,
      Fallback,
      Aggregation,
      Scaling,
      Unresolved,
    }),
  });

  const onBackClick = () => {
    saveFormOptions(prepareFormOptions(getValues()));
    handleBack();
  };

  const onSubmit: SubmitHandler<FPLFormOptions> = async (data, event) => {
    const submitEvent = (
      (event?.nativeEvent as SubmitEvent).submitter?.attributes as NamedNodeMap
    ).getNamedItem("value")?.value;

    const simulate = submitEvent === "simulate";

    const launchOptions = saveFormOptions(prepareFormOptions(data));

    if (!web3) return;

    try {
      handleLoading(true);

      const address = await launchLSP({
        web3,
        simulate,
        ...launchOptions,
      });

      enqueueSnackbar(`LSP address: ${address}`, {
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
        <Typography variant="h6" sx={{ mt: 1, mb: 1 }}>
          FPL parameters
        </Typography>
        <Grid container spacing={3}>
          {fplFields
            .filter((fplField) => {
              if (
                fplField.name === "gasPrice" ||
                fplField.name === "lowerBound"
              ) {
                return true;
              } else if (fplField.name === "upperBound") {
                return fpl === "RangeBond" || fpl === "Linear";
              } else if (fplField.name === "basePercentage") {
                return fpl === "SuccessToken";
              } else if (fplField.name === "customAncillaryData") {
                return !isKPIOption;
              }
              return isKPIOption;
            })
            .map((fplField) => (
              <Grid key={fplField.name} item xs={12} md={6}>
                <Controller
                  name={fplField.name as never}
                  defaultValue=""
                  control={control}
                  rules={fplField.rules}
                  render={({ field, fieldState, formState }) => (
                    <BaseInput
                      disabled={formState.isSubmitting}
                      customField={fplField}
                      hookFormField={field}
                      error={fieldState.error?.message || ""}
                    />
                  )}
                />
              </Grid>
            ))}
          <Grid item xs={12} container alignItems="center">
            <Button type="button" onClick={onBackClick} variant="contained">
              Back
            </Button>
          </Grid>
          <Grid item xs={12} container justifyContent="flex-end">
            <Button type="submit" value="simulate" sx={{ mr: 2 }}>
              Simulate
            </Button>
            <Button type="submit" variant="contained" value="deploy">
              Deploy
            </Button>
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
};

export default FPLForm;
