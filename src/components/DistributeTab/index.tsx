import React from "react";

import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

import DistributeForm from "./DistributeForm";
import MintLSPPairForm from "./MintLSPPairForm";
import MintSuperLSPForm from "./MintSuperLSPForm";

const DistributeTab: React.FC = () => {
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
          <Typography>Start flow</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <DistributeForm />
        </AccordionDetails>
      </Accordion>
    </React.Fragment>
  );
};

export default DistributeTab;
