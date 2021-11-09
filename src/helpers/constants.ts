export const chains = [
  { id: 1, name: "Mainnet" },
  { id: 42, name: "Kovan" },
  { id: 137, name: "Matic" },
  { id: 80001, name: "Mumbai" },
];

// https://docs.umaproject.org/uma-tokenholders/approved-price-identifiers
export const priceIdentifiers = [
  {
    id: "AAVEUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-57.md",
  },
  {
    id: "ALCXUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-78.md",
  },
  {
    id: "ALTDOM",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-21.md",
  },
  {
    id: "AMPLUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-33.md",
  },
  {
    id: "AMPLUSD_18DEC",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-66.md",
  },
  {
    id: "ARSUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-19.md",
  },
  {
    id: "APWUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-110.md",
  },
  {
    id: "BADGERUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-118.md",
  },
  {
    id: "BALUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-73.md",
  },
  {
    id: "BANDUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-106.md",
  },
  {
    id: "BANKUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-91.md",
  },
  {
    id: "BASKUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-110.md",
  },
  {
    id: "bBadgerUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-76.md",
  },
  {
    id: "BCHDOM",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-69.md",
  },
  {
    id: "BCHNBTC",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-23.md",
  },
  {
    id: "BCHNBTC_18DEC",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-66.md",
  },
  {
    id: "bDiggUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-76.md",
  },
  {
    id: "BNBDOM",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-69.md",
  },
  {
    id: "BONDUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-91.md",
  },
  {
    id: "BSVDOM",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-69.md",
  },
  {
    id: "BTC-BASIS-3M/USDC",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-40.md",
  },
  {
    id: "BTC-BASIS-6M/USDC",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-40.md",
  },
  {
    id: "BTCDOM",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-21.md",
  },
  {
    id: "BTC/ibBTC",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-119.md",
  },
  {
    id: "BTCUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-7.md",
  },
  {
    id: "[bwBTC/ETH SLP]/USD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-76.md",
  },
  {
    id: "CADUMA",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-95.md",
  },
  {
    id: "CADUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-90.md",
  },
  {
    id: "CHAINUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-106.md",
  },
  {
    id: "CHFUMA",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-95.md",
  },
  {
    id: "CHFUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-29.md",
  },
  {
    id: "CNYUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-32.md",
  },
  {
    id: "COMPUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-5.md",
  },
  /*
  {
    id: "COMPUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-78.md",
  },
  */
  {
    id: "COMPUSDC-APR-FEB28",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-38.md",
  },
  {
    id: "COMPUSDC-APR-MAR28",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-38.md",
  },
  {
    id: "CONSTANT",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-83.md",
  },
  {
    id: "CREAMUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-106.md",
  },
  {
    id: "CRVUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-78.md",
  },
  {
    id: "DAIPHP",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-49.md",
  },
  {
    id: "DEFI_PULSE_TOTAL_TVL",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-24.md",
  },
  {
    id: "DEXTFUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-91.md",
  },
  {
    id: "DIGGBTC",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-61.md",
  },
  {
    id: "DIGGETH",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-61.md",
  },
  {
    id: "DIGG_Positive_Rebases",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-87.md",
  },
  {
    id: "DIGGUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-61.md",
  },
  {
    id: "DOTDOM",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-69.md",
  },
  {
    id: "DPI/ETH",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-64.md",
  },
  {
    id: "DPI/USD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-64.md",
  },
  {
    id: "DSDUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-37.md",
  },
  {
    id: "ELASTIC_STABLESPREAD/USDC",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-30.md",
  },
  {
    id: "ELASTIC_STABLESPREAD/USDC_18DEC",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-66.md",
  },
  {
    id: "ETHBTC_FR",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-62.md",
  },
  {
    id: "ETHDOM",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-69.md",
  },
  {
    id: "ETH-BASIS-3M/USDC",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-40.md",
  },
  {
    id: "ETH-BASIS-6M/USDC",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-40.md",
  },
  {
    id: "ETH/BTC",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-2.md",
  },
  {
    id: "ETH/DPI",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-64.md",
  },
  {
    id: "ETH/INDEX",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-64.md",
  },
  {
    id: "ETHUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-6.md",
  },
  {
    id: "ETHVIX",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-74.md",
  },
  {
    id: "ETHXIO",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-71.md",
  },
  {
    id: "ETHYAM",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-50.md",
  },
  {
    id: "EURUMA",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-95.md",
  },
  {
    id: "EURUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-29.md",
  },
  {
    id: "ERNUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-106.md",
  },
  {
    id: "FEIUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-118.md",
  },
  {
    id: "FOXUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-118.md",
  },
  {
    id: "GASETH-1HR-1M", // ; GASETH-4HR-1M; GASETH-1D-1M; GASETH-1W-1M; GASETH-1M-1M
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-20.md",
  },
  {
    id: "GASETH-1HR", // ; GASETH-4HR; GASETH-1D; GASETH-1W; GASETH-1M
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-16.md",
  },
  {
    id: "GASETH-TWAP-1Mx1M",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-22.md",
  },
  {
    id: "GASETH-FEB21, GASETH-MAR21",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-25.md",
  },
  {
    id: "GASETH-JUN21",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-48.md",
  },
  {
    id: "GASETH-0921",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-108.md",
  },
  {
    id: "GASETH-1221",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-129.md",
  },
  {
    id: "GBPUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-29.md",
  },
  {
    id: "General_KPI",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-117.md",
  },
  {
    id: "GNOUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-118.md",
  },
  {
    id: "ibBTC/BTC",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-119.md",
  },
  {
    id: "ibBTC/USD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-119.md",
  },
  {
    id: "IDLEUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-118.md",
  },
  {
    id: "iETHVIX",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-74.md",
  },
  {
    id: "iFARMUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-89.md",
  },
  {
    id: "INDEX/ETH",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-64.md",
  },
  {
    id: "INDEX/USD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-64.md",
  },
  {
    id: "IS_RELAY_VALID",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-136.md",
  },
  {
    id: "JPYUMA",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-95.md",
  },
  {
    id: "JPYUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-90.md",
  },
  {
    id: "KP3RUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-106.md",
  },
  {
    id: "KRWUMA",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-95.md",
  },
  {
    id: "KRWUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-90.md",
  },
  {
    id: "LINKDOM",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-69.md",
  },
  {
    id: "LONUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-91.md",
  },
  {
    id: "LINKUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-57.md",
  },
  {
    id: "LTCDOM",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-69.md",
  },
  {
    id: "MASKUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-91.md",
  },
  {
    id: "MKRUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-78.md",
  },
  {
    id: "NFTXUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-78.md",
  },
  {
    id: "NGNUMA",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-95.md",
  },
  {
    id: "NGNUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-90.md",
  },
  {
    id: "OCEANUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-46.md",
  },
  {
    id: "OHMUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-118.md",
  },
  {
    id: "OPENUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-103.md",
  },
  {
    id: "ORNUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-91.md",
  },
  {
    id: "PERLUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-13.md",
  },
  {
    id: "PHPDAI",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-49.md",
  },
  {
    id: "PHPUMA",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-95.md",
  },
  {
    id: "PHPUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-90.md",
  },
  {
    id: "POOLUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-118.md",
  },
  {
    id: "PUNK-BASICUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-91.md",
  },
  {
    id: "PUNKETH",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-84.md",
  },
  {
    id: "PUNKETH_TWAP",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-84.md",
  },
  {
    id: "PUNKETH-1221",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-130.md",
  },
  {
    id: "RAIUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-78.md",
  },
  {
    id: "RENUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-78.md",
  },
  {
    id: "RGTUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-78.md",
  },
  {
    id: "R3_10H_TWAP",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-85.md",
  },
  {
    id: "R3_30D_GM",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-85.md",
  },
  {
    id: "SDTUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-106.md",
  },
  {
    id: "SFIUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-91.md",
  },
  {
    id: "SGDUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-127.md",
  },
  {
    id: "SHERLOCK_CLAIM",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-132.md",
  },
  {
    id: "SNOWUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-110.md",
  },
  {
    id: "SNXUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-57.md",
  },
  {
    id: "SPACEXLAUNCH",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-97.md",
  },
  {
    id: "STABLESPREAD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-28.md",
  },
  {
    id: "STABLESPREAD/BTC",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-31.md",
  },
  {
    id: "STABLESPREAD/BTC_18DEC",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-66.md",
  },
  {
    id: "STABLESPREAD/USDC",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-31.md",
  },
  {
    id: "STABLESPREAD/USDC_18DEC",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-66.md",
  },
  {
    id: "SUSHIUNI_TVL",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-24.md",
  },
  {
    id: "SUSHIUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-68.md",
  },
  {
    id: "uCRSPTMT_SEP21",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-92.md",
  },
  {
    id: "TOKEN_PRICE",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-121.md",
  },
  {
    id: "TRIBEUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-118.md",
  },
  {
    id: "UMAUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-57.md",
  },
  {
    id: "UNIUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-57.md",
  },
  {
    id: "USDAAVE",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-57.md",
  },
  {
    id: "USDALCX",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-78.md",
  },
  {
    id: "USDAMPL",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-33.md",
  },
  {
    id: "USDAPW",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-110.md",
  },
  {
    id: "USDBADGER",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-118.md",
  },
  {
    id: "USDBAL",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-73.md",
  },
  {
    id: "USDBAND",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-106.md",
  },
  {
    id: "USDBANK",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-91.md",
  },
  {
    id: "USDBOND",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-91.md",
  },
  {
    id: "USD/bBadger",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-39.md",
  },
  {
    id: "USDbDigg",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-76.md",
  },
  {
    id: "USD-[bWBTC/ETH SLP]",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-39.md",
  },
  {
    id: "USDCHAIN",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-106.md",
  },
  {
    id: "USDCOMP",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-78.md",
  },
  {
    id: "USDCREAM",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-106.md",
  },
  {
    id: "USDCRV",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-78.md",
  },
  {
    id: "USDDEXTF",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-91.md",
  },
  {
    id: "USDDSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-37.md",
  },
  {
    id: "USD/DPI",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-64.md",
  },
  {
    id: "USDERN",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-106.md",
  },
  {
    id: "USDETH",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-6.md",
  },
  {
    id: "USDFEI",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-118.md",
  },
  {
    id: "USDFOX",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-118.md",
  },
  {
    id: "USDGNO",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-118.md",
  },
  {
    id: "USD/ibBTC",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-119.md",
  },
  {
    id: "USDIDLE",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-118.md",
  },
  {
    id: "USD/INDEX",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-64.md",
  },
  {
    id: "USDiFARM",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-89.md",
  },
  {
    id: "USDKP3R",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-106.md",
  },
  {
    id: "USDLINK",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-57.md",
  },
  {
    id: "USDLON",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-91.md",
  },
  {
    id: "USDMASK",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-91.md",
  },
  {
    id: "USDOCEAN",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-46.md",
  },
  {
    id: "USDOPEN",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-103.md",
  },
  {
    id: "USDORN",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-91.md",
  },
  {
    id: "USDPERL",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-13.md",
  },
  {
    id: "USDPOOL",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-118.md",
  },
  {
    id: "USDSFI",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-91.md",
  },
  {
    id: "USDSNX",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-57.md",
  },
  {
    id: "USDSUSHI",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-68.md",
  },
  {
    id: "USDTDOM",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-69.md",
  },
  {
    id: "USDTRIBE",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-118.md",
  },
  {
    id: "USDBASK",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-110.md",
  },
  {
    id: "USDBTC",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-7.md",
  },
  {
    id: "USDBTC_18DEC",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-66.md",
  },
  {
    id: "USDMKR",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-78.md",
  },
  {
    id: "USDNFTX",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-78.md",
  },
  {
    id: "USDOHM",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-118.md",
  },
  {
    id: "USDPUNK-BASIC",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-91.md",
  },
  {
    id: "USDUMA",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-57.md",
  },
  {
    id: "USDUNI",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-57.md",
  },
  {
    id: "USD/UNI_V2_UMA_ETH_LP",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-59.md",
  },
  {
    id: "USD/UNI_V2_UNI_ETH_LP",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-59.md",
  },
  {
    id: "USD/UNI_V2_USDC_ETH_LP",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-59.md",
  },
  {
    id: "USD/UNI_V2_WBTC_ETH_LP",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-59.md",
  },
  {
    id: "USDRAI",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-78.md",
  },
  {
    id: "USDREN",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-78.md",
  },
  {
    id: "USDRGT",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-78.md",
  },
  {
    id: "USDSDT",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-106.md",
  },
  {
    id: "USDSNOW",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-110.md",
  },
  {
    id: "USDVSP",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-91.md",
  },
  {
    id: "USDXIO",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-71.md",
  },
  {
    id: "USDXSUSHI",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-68.md",
  },
  {
    id: "USDYAM",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-50.md",
  },
  {
    id: "USDYFI",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-78.md",
  },
  {
    id: "USDyUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-78.md",
  },
  {
    id: "uDAO_KPI_UMA",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-112.md",
  },
  {
    id: "uSTONKS_APR21",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-47.md",
  },
  {
    id: "uSTONKS_JUN21",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-79.md",
  },
  {
    id: "uSTONKS_0921",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-109.md",
  },
  {
    id: "uTVL_KPI_UMA",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-65.md",
  },
  {
    id: "uVOL-BTC-APR21",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-41.md",
  },
  {
    id: "vBNTBNT",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-98.md",
  },
  {
    id: "V2migration_KPI_Aragon",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-81.md",
  },
  {
    id: "VSPUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-91.md",
  },
  {
    id: "XAUPERL",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-26.md",
  },
  {
    id: "XAUUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-26.md",
  },
  {
    id: "XIOETH",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-71.md",
  },
  {
    id: "XIOUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-71.md",
  },
  {
    id: "XRPDOM",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-69.md",
  },
  {
    id: "XSUSHI_APY",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-123.md",
  },
  {
    id: "XSUSHIUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-68.md",
  },
  {
    id: "YAMETH",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-50.md",
  },
  {
    id: "YAMUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-50.md",
  },
  {
    id: "YES_OR_NO_QUERY",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-107.md",
  },
  {
    id: "YFIUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-78.md",
  },
  {
    id: "yUSDUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-78.md",
  },
  {
    id: "ZARUMA",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-95.md",
  },
  {
    id: "ZARUSD",
    umip: "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-90.md",
  },
];

// https://docs.umaproject.org/uma-tokenholders/approved-collateral-currencies
export const collateralTokens = [
  {
    currency: "WETH",
    fee: 0.2,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-10.md",
    ],
    addresses: [
      "https://etherscan.io/token/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      "https://polygonscan.com/address/0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
    ],
  },
  {
    currency: "renBTC",
    fee: 0.012,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-11.md",
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-120.md",
    ],
    addresses: [
      "https://etherscan.io/token/0xeb4c2781e4eba804ce9a9803c67d0893436bb27d",
      "https://polygonscan.com/token/0xdbf31df14b66535af65aac99c32e9ea844e14501",
    ],
  },
  {
    currency: "PERL",
    fee: 6000,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-12.md",
    ],
    addresses: [
      "https://etherscan.io/token/0xeca82185adce47f39c684352b0439f030f860318",
    ],
  },
  {
    currency: "DAI",
    fee: 400,
    umips: ["https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-8.md"],
    addresses: [
      "https://etherscan.io/token/0x6b175474e89094c44da98b954eedeac495271d0f",
      "https://polygonscan.com/address/0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
    ],
  },
  {
    currency: "USDC; USDT",
    fee: 400,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-18.md",
    ],
    addresses: [
      "https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      "https://polygonscan.com/address/0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
      "https://etherscan.io/token/0xdac17f958d2ee523a2206206994597c13d831ec7",
      "https://polygonscan.com/address/0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
    ],
  },
  {
    currency: "rDAI",
    fee: 400,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-17.md",
    ],
    addresses: [
      "https://etherscan.io/token/0x261b45d85ccfeabb11f022eba346ee8d1cd488c0",
    ],
  },
  {
    currency: "bwBTC/ETH SLP",
    fee: 1.3e-8,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-35.md",
    ],
    addresses: [
      "https://etherscan.io/token/0x758a43ee2bff8230eeb784879cdcff4828f2544d",
    ],
  },
  {
    currency: "bBadger",
    fee: 40,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-35.md",
    ],
    addresses: [
      "https://etherscan.io/token/0x19d97d8fa813ee2f51ad4b4e04ea08baf4dffc28",
    ],
  },
  {
    currency: "DSD",
    fee: 20000,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-36.md",
    ],
    addresses: [
      "https://etherscan.io/token/0xBD2F0Cd039E0BFcf88901C98c0bFAc5ab27566e3",
    ],
  },
  {
    currency: "renDOGE",
    fee: 1500,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-42.md",
    ],
    addresses: [
      "https://etherscan.io/address/0x3832d2F059E55934220881F831bE501D180671A7#readProxyContract",
    ],
  },
  {
    currency: "OCEAN",
    fee: 1000,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-43.md",
    ],
    addresses: [
      "https://etherscan.io/token/0x967da4048cD07aB37855c090aAF366e4ce1b9F48",
    ],
  },
  {
    currency: "YAM",
    fee: 500,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-44.md",
    ],
    addresses: [
      "https://etherscan.io/token/0x0aacfbec6a24756c20d41914f2caba817c0d8521",
    ],
  },
  {
    currency: "wBTC",
    fee: 0.012,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-45.md",
    ],
    addresses: [
      "https://etherscan.io/token/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
      "https://polygonscan.com/address/0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6",
    ],
  },
  {
    currency: "AAVE",
    fee: 2,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-56.md",
    ],
    addresses: [
      "https://etherscan.io/token/0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9",
      "https://polygonscan.com/address/0xd6df932a45c0f255f85145f286ea0b292b21c90b",
    ],
  },
  {
    currency: "LINK",
    fee: 23,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-56.md",
    ],
    addresses: [
      "https://etherscan.io/token/0x514910771af9ca656af840dff83e8264ecf986ca",
    ],
  },
  {
    currency: "SNX",
    fee: 65,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-56.md",
    ],
    addresses: [
      "https://etherscan.io/token/0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f",
      "https://polygonscan.com/address/0x50b728d8d964fd00c2d0aad81718b71311fef68a",
    ],
  },
  {
    currency: "UMA",
    fee: 45,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-56.md",
    ],
    addresses: [
      "https://etherscan.io/token/0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828",
    ],
  },
  {
    currency: "UNI",
    fee: 20,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-56.md",
    ],
    addresses: [
      "https://etherscan.io/token/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
      "https://polygonscan.com/address/0xb33eaad8d922b1083446dc23f610c2567fb5180f",
    ],
  },
  {
    currency: "WBTC-ETH",
    fee: 2e-7,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-58.md",
    ],
    addresses: [
      "https://etherscan.io/address/0xBb2b8038a1640196FbE3e38816F3e67Cba72D940",
    ],
  },
  {
    currency: "USDC-ETH",
    fee: 0.0000035,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-58.md",
    ],
    addresses: [
      "https://etherscan.io/address/0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc",
    ],
  },
  {
    currency: "UNI-ETH",
    fee: 0.55,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-58.md",
    ],
    addresses: [
      "https://etherscan.io/address/0xd3d2E2692501A5c9Ca623199D38826e513033a17",
    ],
  },
  {
    currency: "UMA-ETH",
    fee: 0.8,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-58.md",
    ],
    addresses: [
      "https://etherscan.io/address/0x88D97d199b9ED37C29D846d00D443De980832a22",
    ],
  },
  {
    currency: "ANT",
    fee: 120,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-60.md",
    ],
    addresses: [
      "https://etherscan.io/token/0xa117000000f279d81a1d3cc75430faa017fa5a2e",
    ],
  },
  {
    currency: "INDEX",
    fee: 24,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-63.md",
    ],
    addresses: [
      "https://etherscan.io/token/0x0954906da0Bf32d5479e25f46056d22f08464cab",
    ],
  },
  {
    currency: "DPI",
    fee: 1.75,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-63.md",
    ],
    addresses: [
      "https://etherscan.io/token/0x1494CA1F11D487c2bBe4543E90080AeBa4BA3C2b",
    ],
  },
  {
    currency: "SUSHI",
    fee: 60,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-67.md",
    ],
    addresses: [
      "https://etherscan.io/token/0x6b3595068778dd592e39a122f4f5a5cf09c90fe2",
      "https://polygonscan.com/address/0x0b3f868e0be5597d5db7feb59e1cadbb0fdda50a",
    ],
  },
  {
    currency: "BAL",
    fee: 24,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-72.md",
    ],
    addresses: [
      "https://etherscan.io/token/0xba100000625a3754423978a60c9317c58a424e3d",
      "https://polygonscan.com/address/0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3",
    ],
  },
  {
    currency: "xSUSHI",
    fee: 50,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-67.md",
    ],
    addresses: [
      "https://etherscan.io/address/0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272",
    ],
  },
  {
    currency: "XIO",
    fee: 3000,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-70.md",
    ],
    addresses: [
      "https://etherscan.io/address/0x0f7F961648aE6Db43C75663aC7E5414Eb79b5704",
    ],
  },
  {
    currency: "bDigg",
    fee: 0.09,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-75.md",
    ],
    addresses: [
      "https://etherscan.io/token/0x7e7e112a68d8d2e221e11047a72ffc1065c38e1a",
    ],
  },
  {
    currency: "yUSD",
    fee: 313,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-77.md",
    ],
    addresses: [
      "https://etherscan.io/token/0x5dbcf33d8c2e976c6b560249878e6f1491bca25c",
    ],
  },
  {
    currency: "RAI",
    fee: 500,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-77.md",
    ],
    addresses: [
      "https://etherscan.io/token/0x03ab458634910AaD20eF5f1C8ee96F1D6ac54919",
    ],
  },
  {
    currency: "COMP",
    fee: 1.3,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-77.md",
    ],
    addresses: [
      "https://etherscan.io/token/0xc00e94cb662c3520282e6f5717214004a7f26888",
      "https://polygonscan.com/address/0x8505b9d2254a7ae468c0e9dd10ccea3a837aef5c",
    ],
  },
  {
    currency: "YFI",
    fee: 0.01,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-77.md",
    ],
    addresses: [
      "https://etherscan.io/token/0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e",
      "https://polygonscan.com/address/0xda537104d6a5edd53c6fbba9a898708e465260b6",
    ],
  },
  {
    currency: "ALCX",
    fee: 1.35,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-77.md",
    ],
    addresses: [
      "https://etherscan.io/token/0xdbdb4d16eda451d0503b854cf79d55697f90c8df",
    ],
  },
  {
    currency: "ALPHA",
    fee: 900,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-77.md",
    ],
    addresses: [
      "https://etherscan.io/token/0xa1faa113cbe53436df28ff0aee54275c13b40975",
    ],
  },
  {
    currency: "MKR",
    fee: 0.2,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-77.md",
    ],
    addresses: [
      "https://etherscan.io/token/0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
    ],
  },
  {
    currency: "REN",
    fee: 1150,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-77.md",
    ],
    addresses: [
      "https://etherscan.io/token/0x408e41876cccdc0f92210600ef50372656052a38",
    ],
  },
  {
    currency: "RGT",
    fee: 85,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-77.md",
    ],
    addresses: [
      "https://etherscan.io/token/0xd291e7a03283640fdc51b121ac401383a46cc623",
    ],
  },
  {
    currency: "NFTX",
    fee: 7.5,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-77.md",
    ],
    addresses: [
      "https://etherscan.io/token/0x87d73e916d7057945c9bcd8cdd94e42a6f47f776",
    ],
  },
  {
    currency: "LON",
    fee: 130,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-82.md",
    ],
    addresses: [
      "https://etherscan.io/token/0x0000000000095413afc295d19edeb1ad7b71c952",
    ],
  },
  {
    currency: "MASK",
    fee: 115,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-82.md",
    ],
    addresses: [
      "https://etherscan.io/token/0x69af81e73a73b40adf4f3d4223cd9b1ece623074",
    ],
  },
  /*   {
    currency: "BANK",
    fee: 5.75,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-82.md",
    ],
    addresses: [
      "https://etherscan.io/token/0x24a6a37576377f63f194caa5f518a60f45b42921",
    ],
  }, */
  {
    currency: "SFI",
    fee: 1.3,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-82.md",
    ],
    addresses: [
      "https://etherscan.io/token/0xb753428af26e81097e7fd17f40c88aaa3e04902c",
    ],
  },
  {
    currency: "VSP",
    fee: 50,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-82.md",
    ],
    addresses: [
      "https://etherscan.io/token/0x1b40183efb4dd766f11bda7a7c3ad8982e998421",
    ],
  },
  {
    currency: "FRAX",
    fee: 400,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-82.md",
    ],
    addresses: [
      "https://etherscan.io/token/0x853d955acef822db058eb8505911ed77f175b99e",
    ],
  },
  {
    currency: "DEXTF",
    fee: 2250,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-82.md",
    ],
    addresses: [
      "https://etherscan.io/token/0x5F64Ab1544D28732F0A24F4713c2C8ec0dA089f0",
    ],
  },
  {
    currency: "ORN",
    fee: 75,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-82.md",
    ],
    addresses: [
      "https://etherscan.io/token/0x0258f474786ddfd37abce6df6bbb1dd5dfc4434a",
    ],
  },
  {
    currency: "BOND",
    fee: 10,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-82.md",
    ],
    addresses: [
      "https://etherscan.io/token/0x0391d2021f89dc339f60fff84546ea23e337750f",
      "https://polygonscan.com/token/0xa041544fe2be56cce31ebb69102b965e06aace80",
    ],
  },
  {
    currency: "PUNK-BASIC",
    fee: 0.015,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-82.md",
    ],
    addresses: [
      "https://etherscan.io/token/0x69bbe2fa02b4d90a944ff328663667dc32786385",
    ],
  },
  {
    currency: "LUSD",
    fee: 400,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-86.md",
    ],
    addresses: [
      "https://etherscan.io/token/0x5f98805A4E8be255a32880FDeC7F6728C6568bA0",
    ],
  },
  {
    currency: "iFARM",
    fee: 7.5,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-88.md",
    ],
    addresses: [
      "https://etherscan.io/token/0x1571eD0bed4D987fe2b498DdBaE7DFA19519F651",
    ],
  },
  {
    currency: "yvUSDC",
    fee: 400,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-93.md",
    ],
    addresses: [
      "https://etherscan.io/token/0x5f18c75abdae578b483e5f43f12a39cf75b973a9",
    ],
  },
  {
    currency: "UST",
    fee: 400,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-94.md",
    ],
    addresses: [
      "https://etherscan.io/token/0xa47c8bf37f92abed4a126bda807a7b7498661acd",
    ],
  },
  {
    currency: "BNT",
    fee: 135,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-96.md",
    ],
    addresses: [
      "https://etherscan.io/token/0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c",
    ],
  },
  {
    currency: "vBNT",
    fee: 400,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-96.md",
    ],
    addresses: [
      "https://etherscan.io/token/0x48fb253446873234f2febbf9bdeaa72d9d387f94",
    ],
  },
  {
    currency: "BAND",
    fee: 75,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-96.md",
    ],
    addresses: [
      "https://etherscan.io/token/0xba11d00c5f74255f56a5e366f4f77f5a186d7f55",
    ],
  },
  {
    currency: "SDT",
    fee: 450,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-96.md",
    ],
    addresses: [
      "https://etherscan.io/token/0x73968b9a57c6e53d41345fd57a6e6ae27d6cdb2f",
    ],
  },
  {
    currency: "KP3R",
    fee: 5,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-96.md",
    ],
    addresses: [
      "https://etherscan.io/token/0x1ceb5cb57c4d4e2b2433641b95dd330a33185a44",
    ],
  },
  {
    currency: "CREAM",
    fee: 4,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-96.md",
    ],
    addresses: [
      "https://etherscan.io/token/0x2ba592f78db6436527729929aaf6c908497cb200",
    ],
  },
  {
    currency: "CHAIN",
    fee: 5000,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-96.md",
    ],
    addresses: [
      "https://etherscan.io/token/0xc4c2614e694cf534d407ee49f8e44d125e4681c4",
    ],
  },
  {
    currency: "ERN",
    fee: 70,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-96.md",
    ],
    addresses: [
      "https://etherscan.io/token/0xbbc2ae13b23d715c30720f079fcd9b4a74093505",
    ],
  },
  {
    currency: "OPEN",
    fee: 1000,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-102.md",
    ],
    addresses: [
      "https://etherscan.io/token/0x69e8b9528cabda89fe846c67675b5d73d463a916",
    ],
  },
  {
    currency: "DFX",
    fee: 800,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-104.md",
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-128.md",
    ],
    addresses: [
      "https://etherscan.io/token/0x888888435fde8e7d4c54cab67f206e4199454c60",
      "https://polygonscan.com/address/0xe7804d91dfcde7f776c90043e03eaa6df87e6395",
    ],
  },
  {
    currency: "BASK",
    fee: 1.75,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-105.md",
    ],
    addresses: [
      "https://etherscan.io/address/0x44564d0bd94343f72e3c8a0d22308b7fa71db0bb",
    ],
  },
  {
    currency: "GYSR",
    fee: 2000,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-111.md",
    ],
    addresses: [
      "https://etherscan.io/token/0xbEa98c05eEAe2f3bC8c3565Db7551Eb738c8CCAb",
    ],
  },
  {
    currency: "MPH",
    fee: 15,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-111.md",
    ],
    addresses: [
      "https://etherscan.io/address/0x8888801af4d980682e47f1a9036e589479e835c5",
    ],
  },
  {
    currency: "APW",
    fee: 400,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-111.md",
    ],
    addresses: [
      "https://etherscan.io/address/0x4104b135dbc9609fc1a9490e61369036497660c8",
    ],
  },
  {
    currency: "SNOW",
    fee: 60,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-111.md",
    ],
    addresses: [
      "https://etherscan.io/address/0xfe9A29aB92522D14Fc65880d817214261D8479AE",
    ],
  },
  {
    currency: "NDX",
    fee: 100,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-111.md",
    ],
    addresses: [
      "https://etherscan.io/address/0x86772b1409b61c639eaac9ba0acfbb6e238e5f83",
    ],
  },
  {
    currency: "BPRO",
    fee: 200,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-115.md",
    ],
    addresses: [
      "https://etherscan.io/token/0xbbbbbbb5aa847a2003fbc6b5c16df0bd1e725f61",
    ],
  },
  {
    currency: "Badger",
    fee: 60,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-116.md",
    ],
    addresses: [
      "https://etherscan.io/token/0x3472a5a71965499acd81997a54bba8d852c6e53d",
      "https://polygonscan.com/token/0x1fcbe5937b0cc2adf69772d228fa4205acf4d9b2",
    ],
  },
  {
    currency: "OHM",
    fee: 0.8,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-116.md",
    ],
    addresses: [
      "https://etherscan.io/address/0x383518188c0c6d7730d91b2c03a03c837814a899",
    ],
  },
  {
    currency: "IDLE",
    fee: 130,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-116.md",
    ],
    addresses: [
      "https://etherscan.io/token/0x875773784af8135ea0ef43b5a374aad105c5d39e",
    ],
  },
  {
    currency: "GNO",
    fee: 3,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-116.md",
    ],
    addresses: [
      "https://etherscan.io/token/0x6810e776880c02933d47db1b9fc05908e5386b96",
    ],
  },
  {
    currency: "QI",
    fee: 500,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-116.md",
    ],
    addresses: [
      "https://polygonscan.com/token/0x580a84c73811e1839f75d86d75d88cca0c241ff4",
    ],
  },
  {
    currency: "POOL",
    fee: 45,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-116.md",
    ],
    addresses: [
      "https://etherscan.io/token/0x0cec1a9154ff802e7934fc916ed7ca50bde6844e",
      "https://polygonscan.com/address/0x25788a1a171ec66da6502f9975a15b609ff54cf6",
    ],
  },
  {
    currency: "PieDAO DOUGH V2",
    fee: 1100,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-116.md",
    ],
    addresses: [
      "https://etherscan.io/token/0xad32A8e6220741182940c5aBF610bDE99E737b2D",
    ],
  },
  {
    currency: "FEI",
    fee: 400,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-116.md",
    ],
    addresses: [
      "https://etherscan.io/address/0x956F47F50A910163D8BF957Cf5846D573E7f87CA",
    ],
  },
  {
    currency: "TRIBE",
    fee: 800,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-116.md",
    ],
    addresses: [
      "https://etherscan.io/token/0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B",
    ],
  },
  {
    currency: "FOX",
    fee: 670,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-116.md",
    ],
    addresses: [
      "https://etherscan.io/token/0xc770eefad204b5180df6a14ee197d99d808ee52d",
    ],
  },
  {
    currency: "RBN",
    fee: 10000,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-120.md",
    ],
    addresses: [
      "https://etherscan.io/token/0x6123B0049F904d730dB3C36a31167D9d4121fA6B",
    ],
  },
  {
    currency: "BANK",
    fee: 5500,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-124.md",
    ],
    addresses: [
      "https://etherscan.io/address/0x2d94aa3e47d9d5024503ca8491fce9a2fb4da198",
    ],
  },
  {
    currency: "MATIC",
    fee: 380,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-125.md",
    ],
    addresses: [
      "https://etherscan.io/address/0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
      "https://polygonscan.com/token/0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
    ],
  },
  {
    currency: "INST",
    fee: 45,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-125.md",
    ],
    addresses: [
      "https://etherscan.io/address/0x6f40d4a6237c257fff2db00fa0510deeecd303eb",
      "https://polygonscan.com/address/0xf50D05A1402d0adAfA880D36050736f9f6ee7dee",
    ],
  },
  {
    currency: "JRT",
    fee: 4000,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-125.md",
    ],
    addresses: [
      "https://etherscan.io/address/0x8a9c67fee641579deba04928c4bc45f66e26343a",
    ],
  },
  {
    currency: "YEL",
    fee: 33000,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-126.md",
    ],
    addresses: [
      "https://etherscan.io/token/0x7815bda662050d84718b988735218cffd32f75ea",
      "https://polygonscan.com/token/0xd3b71117e6c1558c1553305b44988cd944e97300",
    ],
  },
  {
    currency: "VOL",
    fee: 1200,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-131.md",
    ],
    addresses: [
      "https://etherscan.io/token/0x5166e09628b696285e3a151e84fb977736a83575",
    ],
  },
  {
    currency: "IF",
    fee: 250,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-131.md",
    ],
    addresses: [
      "https://etherscan.io/token/0xb0e1fc65c1a741b4662b813eb787d369b8614af1",
    ],
  },
  {
    currency: "miMATIC",
    fee: 400,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-131.md",
    ],
    addresses: [
      "https://polygonscan.com/token/0xa3fa99a148fa48d14ed51d610c367c61876997f1",
    ],
  },
  {
    currency: "BIFI",
    fee: 0.5,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-131.md",
    ],
    addresses: [
      "https://polygonscan.com/token/0xfbdd194376de19a88118e84e279b977f165d01b8",
    ],
  },
  {
    currency: "ICE",
    fee: 23000,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-131.md",
    ],
    addresses: [
      "https://polygonscan.com/token/0x4A81f8796e0c6Ad4877A51C86693B0dE8093F2ef",
    ],
  },
  {
    currency: "IRON",
    fee: 400,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-131.md",
    ],
    addresses: [
      "https://polygonscan.com/token/0xD86b5923F3AD7b585eD81B448170ae026c65ae9a",
    ],
  },
  {
    currency: "PERP",
    fee: 35,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-133.md",
    ],
    addresses: [
      "https://etherscan.io/token/0xbc396689893d065f41bc2c6ecbee5e0085233447",
    ],
  },
  {
    currency: "GRO",
    fee: 35,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-133.md",
    ],
    addresses: [
      "https://etherscan.io/address/0x3ec8798b81485a254928b70cda1cf0a2bb0b74d7",
    ],
  },
  {
    currency: "AQUA",
    fee: 700000,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-134.md",
    ],
    addresses: [
      "https://etherscan.io/address/0xd34a24006b862f4e9936c506691539d6433ad297",
    ],
  },
  {
    currency: "IDIA",
    fee: 450,
    umips: [
      "https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-134.md",
    ],
    addresses: [
      "https://etherscan.io/address/0x0b15ddf19d47e6a86a56148fb4afffc6929bcb89",
    ],
  },
];
