export const formatCurrency = (amount: number): string => {
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'THB',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);

  // Replace the currency symbol with the ฿ symbol
  return formatted.replace('THB', '฿');
};

console.log(formatCurrency(1200)); // Output: 1,200.00 ฿
