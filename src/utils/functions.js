// coverti l'euro en fcfa
export const PriceInFca = (price) => {
  return parseInt(price) * 655;
};

// ancien prix
export const oldPrcie = (price) => {
  return parseInt(price + (price * 35) / 100) * 655;
};
