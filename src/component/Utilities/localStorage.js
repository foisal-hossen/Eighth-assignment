const addToDb = (id) => {
  let exerciseTime = {};

  const storedCart = localStorage.getItem("exercise-time");
  if (storedCart) {
    exerciseTime = JSON.parse(storedCart);
  }

  const quantity = exerciseTime[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    exerciseTime[id] = newQuantity;
  } else {
    exerciseTime[id] = 1;
  }
  localStorage.setItem("exercise-time", JSON.stringify(exerciseTime));
};
const getStoredCart = () => {
  let exerciseTime = {};

  const storedCart = localStorage.getItem("exercise-time");
  if (storedCart) {
    exerciseTime = JSON.parse(storedCart);
  }
  return exerciseTime;
};
const removeFromDb = (id) => {
  const storedCart = localStorage.getItem("exercise-time");
  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart);
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem("exercise-time", JSON.stringify(shoppingCart));
    }
  }
};

const deleteShoppingCart = () => {
  localStorage.removeItem("exercise-time");
};

export { addToDb, removeFromDb, deleteShoppingCart, getStoredCart };
