export function formatPrice(price) {
  return `Rs ${Number(price).toLocaleString("en-IN")}`;
}