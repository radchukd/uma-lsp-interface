import React from "react";

import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Typography,
} from "@mui/material";

import { AppContext } from "../../contexts/AppContext";
import DistributeForm from "./DistributeForm";
import FlowForm from "./FlowForm";
import MintLSPPairForm from "./MintLSPPairForm";
import MintSuperLSPForm from "./MintSuperLSPForm";

const DistributeTab: React.FC = () => {
  const { chainId } = React.useContext(AppContext);

  if (chainId === 1)
    return (
      <Typography>
        Distribution is not supported on Ethereum mainnet.
      </Typography>
    );

  return (
    <React.Fragment>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>Mint LSP pair</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MintLSPPairForm />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>Mint Super LSP pair</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MintSuperLSPForm />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>Distribute</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FlowForm />
          <Divider>OR</Divider>
          <DistributeForm />
        </AccordionDetails>
      </Accordion>
    </React.Fragment>
  );
};

export default DistributeTab;
