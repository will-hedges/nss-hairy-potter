let availablePieces = [];

export const toSellOrNotToSell = (potteryObj) => {
  if (potteryObj.weight >= 6) {
    potteryObj.price = 40;
  } else {
    potteryObj.price = 20;
  }

  if (!potteryObj.cracked) {
    availablePieces.push(potteryObj);
  }

  return potteryObj;
};

export const usePottery = () => {
  return [...availablePieces];
};
