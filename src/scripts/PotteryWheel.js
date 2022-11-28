let id = 1;

export const makePottery = (shape, weight, height) => {
  // create a new object with the properties of shape, weight, height, and id
  const potteryObj = {
    shape: shape,
    weight: weight,
    height: height,
    id: id,
  };
  // increment id each time the function is invoked
  id++;
  // return the new object
  return potteryObj;
};
