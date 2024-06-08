export default function CurrencyFormatter({ amount }) {
  const formattedAmount = new Intl.NumberFormat("en-BD", {
    maximumFractionDigits: 2,
  }).format(amount);

  // Remove the space between the currency symbol and the amount
  return `৳ ${formattedAmount}`;
}
