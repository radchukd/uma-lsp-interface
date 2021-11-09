import React from "react";

import { Box } from "@mui/material";

import { FPLOptions, LaunchOptions, LSPOptions } from "../../helpers/models";
import FPLForm from "./FPLForm";
import LSPForm from "./LSPForm";

export type LaunchFormOptions = Omit<Omit<LaunchOptions, "web3">, "simulate">;

const LaunchTab: React.FC = () => {
  const [formOptions, setFormOptions] = React.useState<LaunchFormOptions>(
    {} as LaunchFormOptions,
  );

  const [activeStep, setActiveStep] = React.useState<number>(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const saveLSPOptions = (options: LSPOptions): LaunchFormOptions => {
    const opts = {
      ...formOptions,
      lspOptions: options,
    };
    setFormOptions(opts);
    return opts;
  };

  const saveFPLOptions = ({
    gasPrice,
    ...options
  }: FPLOptions & { gasPrice: number }): LaunchFormOptions => {
    const opts = {
      ...formOptions,
      gasPrice,
      fplOptions: options,
    };
    setFormOptions(opts);
    return opts;
  };

  return (
    <Box>
      {activeStep === 0 ? (
        <LSPForm
          lspOptions={formOptions.lspOptions}
          saveLSPOptions={saveLSPOptions}
          handleNext={handleNext}
        />
      ) : (
        <FPLForm
          fplOptions={formOptions.fplOptions}
          saveFPLOptions={saveFPLOptions}
          handleBack={handleBack}
        />
      )}
    </Box>
  );
};

export default LaunchTab;
