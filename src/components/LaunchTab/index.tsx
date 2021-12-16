import React from "react";

import { LaunchOptions } from "../../helpers/models";
import FPLForm from "./FPLForm";
import LSPForm from "./LSPForm";

export type LaunchFormOptions = Omit<Omit<LaunchOptions, "web3">, "simulate">;

const LaunchTab: React.FC = () => {
  const [formOptions, setFormOptions] = React.useState<LaunchFormOptions>({
    pairName: "",
    expirationTimestamp: new Date(),
    collateralPerPair: "",
    priceIdentifier: "",
    longSynthName: "",
    longSynthSymbol: "",
    shortSynthName: "",
    shortSynthSymbol: "",
    collateralToken: "",
    customAncillaryData: "",
    proposerReward: "",
    optimisticOracleLivenessTime: "",
    optimisticOracleProposerBond: "",
    enableEarlyExpiration: false,
    fpl: "" as any,
    basePercentage: "",
    lowerBound: "",
    upperBound: "",
    gasPrice: "",
  });
  const [isInitializing, setInitializing] = React.useState(true);
  const [activeStep, setActiveStep] = React.useState<number>(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const saveFormOptions = (
    options: Partial<LaunchFormOptions>,
  ): LaunchFormOptions => {
    const opts: LaunchFormOptions = {
      ...formOptions,
      ...options,
    };
    setFormOptions(opts);
    return opts;
  };

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const linkFormOptions: Record<string, any> = {};

    params.forEach((value, key) => {
      if (key === "expirationTimestamp") {
        linkFormOptions[key] = new Date(value);
      } else if (key === "enableEarlyExpiration") {
        linkFormOptions[key] = value === "true";
      } else {
        linkFormOptions[key] = value;
      }
    });

    setFormOptions(linkFormOptions as LaunchFormOptions);
    setInitializing(false);
  }, []);

  if (isInitializing) return <></>;

  return (
    <React.Fragment>
      {activeStep === 0 ? (
        <LSPForm
          formOptions={formOptions}
          saveFormOptions={saveFormOptions}
          handleNext={handleNext}
        />
      ) : (
        <FPLForm
          formOptions={formOptions}
          saveFormOptions={saveFormOptions}
          handleBack={handleBack}
        />
      )}
    </React.Fragment>
  );
};

export default LaunchTab;
