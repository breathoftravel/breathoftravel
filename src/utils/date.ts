export const generateISO8601Date = (value= '2024-01-01'): string => {
  const now = new Date(value);
  return now.toISOString();
}