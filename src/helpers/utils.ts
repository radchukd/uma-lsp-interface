export const truncateAddress = (address: string): string =>
  `${address.slice(0, 6)}...${address.slice(38)}`;

export const camelToSentenceCase = (name: string) => {
  const result = name.replace(/([A-Z])/g, " $1");

  return result.charAt(0).toUpperCase() + result.slice(1);
};

export const parseCustomAncillaryData = (data?: string): string => {
  if (!data || !data.length) return "";

  const parsedData: Record<string, string> = JSON.parse(data);

  let res = "";

  for (const [key, value] of Object.entries(parsedData)) {
    if (!value) continue;

    let escapedValue = value;

    if (value.includes(",") || value.includes(":")) {
      escapedValue = `"${value}"`;
    }

    res += `${key}:${escapedValue},`;
  }

  // removes trailing comma
  return res.slice(0, -1);
};
