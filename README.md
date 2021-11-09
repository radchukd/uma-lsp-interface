# UMA LSP Tokens Interface

## Description

- This app helps you deploy [UMA LSP tokens](https://docs.umaproject.org/synthetic-tokens/long-short-pair) using [Superfluid's](https://docs.superfluid.finance/superfluid/protocol-tutorials/super-tokens) supertokens.
- Supported LSP tokens: [Range](https://docs.umaproject.org/range-tokens/summary), [Success](https://docs.umaproject.org/success-tokens/summary).
- Supported Networks: Mainnet, Kovan, Polygon, Mumbai.
- Selection of collateral tokens is supported only for Mainnet and Polygon.

## Links

- [Hosted app](https://uma-lsp-interface.vercel.app)

- [UMA](https://umaproject.org)

- [Superfluid](https://www.superfluid.finance)

- [Approved price identifiers](https://docs.umaproject.org/uma-tokenholders/approved-price-identifiers)

- [Approved collateral tokens](https://docs.umaproject.org/uma-tokenholders/approved-collateral-currencies)

- [Github repo](https://github.com/radchukd/uma-lsp-interface)

## Launch LSP

- Fill LSP parameters
- FIll FPL parameters
- Sign 2 transactions

Example parameters:

- Network = Kovan
- Pair Name = UMA $4-12 Range Token Pair August 2021
- Expiration Timestamp = 5 Nov 2022
- Collateral Per Pair = 250000000000000000
- Price Identifier = UMAUSD
- Long Synth Name = UMA $4-12 Range Token August 2021
- Long Synth Symbol = rtUMA-0821
- Short Synth Name = UMA $4-12 Range Short Token August 2021
- Short Synth Symbol = rtUMA-0821s
- Collateral Token = 0x489Bf230d4Ab5c2083556E394a28276C22c3B580 (UMA)
- FPL = RangeBond
- Custom Ancillary Data = "" (Empty)
- Prepaid Proposer Reward = "" (Empty)
- Optimistic Oracle Liveness Time = "" (Empty)
- Optimistic Oracle Proposer Bond = "" (Empty)
- Lower Bound = 4000000000000000000
- Upper Bound = 12000000000000000000
- Gas price = 1

## Distribute LSP

### 1. Mint LSP pair

- Navigate to Distribute -> Mint LSP pair
- Select desired lsp contract and enter the amount of tokens to mint
- Sign 2 transactions (allow spending, mint)

Example parameters:

- Amount = 1000000000000000000
- Gas price = 1

### 2. Mint Super LSP pair

- Navigate to Distribute -> Mint Super LSP pair
- Select desired token and amount to upgrade
- Sign 3 transactions (create, allow spending, mint)

Example parameters:

- Token type = Long
- Amount = 3000000000000000000
- Gas price = 1

### 3. Start flow

- Navigate to Distribute -> Start flow
- Enter the super token, recipient and flow rate (tokens per second)
- Sign 1 transaction

Example parameters:

- Flow rate = 385802469135
