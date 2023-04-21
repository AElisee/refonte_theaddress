export const PriceInFca = (price) => {
  return (parseInt(price) * 655).toLocaleString();
};

// ancien prix
export const oldPrcie = (price) => {
  return (parseInt(price + (price * 35) / 100) * 655).toLocaleString();
};
