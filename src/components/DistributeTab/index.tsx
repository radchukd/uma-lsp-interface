import React from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

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
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Mint LSP pair</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MintLSPPairForm />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Mint Super LSP pair</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MintSuperLSPForm />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
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
