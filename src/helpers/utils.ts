export const truncateAddress = (address: string): string =>
  `${address.slice(0, 6)}...${address.slice(38)}`;

export const camelToSentenceCase = (name: string) => {
  const result = name.replace(/([A-Z])/g, " $1");

  return result.charAt(0).toUpperCase() + result.slice(1);
};
