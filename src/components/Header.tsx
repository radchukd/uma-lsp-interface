import React from "react";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import {
  Box,
  Button,
  Divider,
  FormControl,
  IconButton,
  InputLabel,
  Link,
  MenuItem,
  Select,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";

import { AppContext } from "../contexts/AppContext";
import { ColorModeContext } from "../contexts/ColorModeContext";
import { chains } from "../helpers/constants";
import { truncateAddress } from "../helpers/utils";

const Header: React.FC = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const { userAddress, chainId, changeChain, connectWallet } =
    React.useContext(AppContext);

  return (
    <React.Fragment>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        {userAddress ? (
          <Typography>{truncateAddress(userAddress)}</Typography>
        ) : (
          <Box display="flex" justifyContent="center">
            <Button variant="contained" onClick={() => connectWallet()}>
              Connect wallet
            </Button>
          </Box>
        )}
        <Box>
          <IconButton
            sx={{ mr: 1 }}
            onClick={colorMode.toggleColorMode}
            color="inherit"
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
          {userAddress && chainId && (
            <React.Fragment>
              {!chains.some((c) => c.id === chainId) ? (
                <Tooltip
                  title={`Supported networks: ${chains
                    .map((chain) => chain.name)
                    .toString()}`}
                >
                  <Button variant="contained" onClick={() => changeChain(1)}>
                    Unsupported network
                  </Button>
                </Tooltip>
              ) : (
                <FormControl>
                  <InputLabel id="chain-select-label">Chain</InputLabel>
                  <Select
                    labelId="chain-select-label"
                    id="chain-select"
                    size="small"
                    value={chainId}
                    label="Chain"
                    onChange={(e) => changeChain(Number(e.target.value))}
                  >
                    {chains.map((chain) => (
                      <MenuItem dense key={chain.id} value={chain.id}>
                        {chain.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            </React.Fragment>
          )}
        </Box>
      </Box>
      <Divider sx={{ my: 1 }} />
      <Box>
        <Typography variant="h4" sx={{ mb: 1 }}>
          UMA LSP Tokens Interface
        </Typography>
        <Typography variant="body2">
          This app helps you deploy and distribute{" "}
          <Link
            href="https://docs.umaproject.org/synthetic-tokens/long-short-pair"
            target="_blank"
          >
            UMA LSP tokens
          </Link>{" "}
          using{" "}
          <Link
            href="https://docs.superfluid.finance/superfluid/protocol-tutorials/super-tokens"
            target="_blank"
          >
            Superfluid's
          </Link>{" "}
          supertokens.
          <br />
          Supported LSP tokens:{" "}
          <Link
            href="https://docs.umaproject.org/range-tokens/summary"
            target="_blank"
          >
            Range
          </Link>
          {", "}
          <Link
            href="https://docs.umaproject.org/success-tokens/summary"
            target="_blank"
          >
            Success
          </Link>
          {"."}
          <br />
          Supported Networks: Mainnet, Kovan, Polygon, Mumbai.
          <br />
          <br />
          Links:
          <br />
          <Link href="https://umaproject.org" target="_blank">
            • UMA
          </Link>
          <br />
          <Link href="https://www.superfluid.finance" target="_blank">
            • Superfluid
          </Link>
          <br />
          <Link
            href="https://docs.umaproject.org/uma-tokenholders/approved-price-identifiers"
            target="_blank"
          >
            • Approved price identifiers
          </Link>
          <br />
          <Link
            href="https://docs.umaproject.org/uma-tokenholders/approved-collateral-currencies"
            target="_blank"
          >
            • Approved collateral tokens
          </Link>
          <br />
          <Link
            href="https://github.com/radchukd/uma-lsp-interface"
            target="_blank"
          >
            • Github repo
          </Link>
        </Typography>
      </Box>
      <Divider sx={{ my: 1 }} />
    </React.Fragment>
  );
};

export default Header;
