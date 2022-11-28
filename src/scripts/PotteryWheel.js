let id = 1;

export const makePottery = (shape, weight, height) => {
  // increment id each time the function is invoked
  id++;
  // return a new object with the properties of shape, weight, height, id
  return {
    shape: shape,
    weight: weight,
    height: height,
    id: id,
  };
};
