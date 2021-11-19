import { useSnackbar } from "notistack";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

import { AppContext } from "../../contexts/AppContext";
import launchLSP from "../../helpers/launchLSP";
import { FormField, FPLOptions } from "../../helpers/models";
import { camelToSentenceCase } from "../../helpers/utils";
import BaseInput from "../BaseInput";
import { LaunchFormOptions } from ".";

const fplFields: Array<FormField<FPLOptions & { gasPrice: string }>> = [
  {
    name: "fpl",
    description: "Financial library used to calculate the payout at expiry.",
    rules: {
      required: true,
    },
    options: [
      //  "BinaryOption",
      //  "CappedYieldDollar",
      //  "CoveredCall",
      //  "Linear",
      "RangeBond",
      //  "SimpleSuccessToken",
      "SuccessToken",
    ],
  },
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
  fplOptions: FPLOptions;
  saveFPLOptions: (
    options: FPLOptions & { gasPrice: string },
  ) => LaunchFormOptions;
  handleBack: () => void;
}

const FPLForm: React.FC<IFPLForm> = ({
  fplOptions,
  saveFPLOptions,
  handleBack,
}) => {
  const { enqueueSnackbar } = useSnackbar();
  const { web3, handleLoading } = React.useContext(AppContext);
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FPLOptions & { gasPrice: string }>({
    defaultValues: { ...fplOptions, gasPrice: "1" },
  });

  const onSubmit: SubmitHandler<FPLOptions & { gasPrice: string }> = async (
    data,
    event,
  ) => {
    const submitEvent = (
      (event?.nativeEvent as SubmitEvent).submitter?.attributes as NamedNodeMap
    ).getNamedItem("value")?.value;

    const simulate = submitEvent === "simulate";
    const formOptions = saveFPLOptions(data);

    if (submitEvent === "back") {
      handleBack();
      return;
    }

    if (!web3) return;

    try {
      handleLoading(true);

      const launchData = await launchLSP({ web3, simulate, ...formOptions });

      const message = simulate
        ? `Expected address: ${launchData.createLongShortPair.address}`
        : `Transaction hash: ${launchData.createLongShortPair.transactionHash}`;

      enqueueSnackbar(message, {
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

  const currentFPLValue = watch("fpl");

  const specificFPLFields = React.useMemo(
    () =>
      fplFields.filter((fplField) => {
        if (fplField.name === "fpl" || fplField.name === "gasPrice") {
          return true;
        } else if (
          (currentFPLValue === "BinaryOption" ||
            currentFPLValue === "CappedYieldDollar" ||
            currentFPLValue === "CoveredCall" ||
            currentFPLValue === "SimpleSuccessToken") &&
          fplField.name === "lowerBound"
        ) {
          return true;
        } else if (
          (currentFPLValue === "RangeBond" || currentFPLValue === "Linear") &&
          (fplField.name === "lowerBound" || fplField.name === "upperBound")
        ) {
          return true;
        } else if (
          currentFPLValue === "SuccessToken" &&
          (fplField.name === "lowerBound" || fplField.name === "basePercentage")
        ) {
          return true;
        }
        return false;
      }),
    [currentFPLValue],
  );

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h6" sx={{ mt: 1, mb: 1 }}>
          FPL parameters
        </Typography>
        <Grid container spacing={3}>
          {specificFPLFields.map((fplField) => {
            if (fplField.name === "fpl") {
              const label = "Financial product *";

              return (
                <Grid key={fplField.name} item xs={12} md={6}>
                  <Controller
                    name={fplField.name as never}
                    defaultValue=""
                    control={control}
                    rules={fplField.rules}
                    render={({ field, fieldState, formState }) => (
                      <FormControl fullWidth variant="standard">
                        <InputLabel id={`${fplField.name}-select-label`}>
                          {label}
                        </InputLabel>
                        <Select
                          labelId={`${fplField.name}-select-label`}
                          id={`${fplField.name}-select`}
                          label={label}
                          disabled={formState.isSubmitting}
                          required={Boolean(fplField.rules.required)}
                          {...field}
                        >
                          {fplField.options!.map((option) => (
                            <MenuItem key={option} value={option}>
                              {fplField.name === "fpl"
                                ? camelToSentenceCase(option)
                                : option}
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
            );
          })}
          <Grid item xs={12} container alignItems="center">
            <Button
              type={!Object.keys(errors).length ? "submit" : "button"}
              onClick={
                !Object.keys(errors).length ? undefined : () => handleBack()
              }
              variant="contained"
              value="back"
            >
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
