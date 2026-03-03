export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(price)
}

export const getDiscount = (oldPrice, newPrice) => {
  if (!oldPrice) return 0
  return Math.round(((oldPrice - newPrice) / oldPrice) * 100)
}