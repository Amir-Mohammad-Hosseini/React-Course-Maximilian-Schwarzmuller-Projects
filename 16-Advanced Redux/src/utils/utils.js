export const calculateTotalItems = (items) => {
  const totalItems = items.reduce((acc, curr) => {
    return acc + Number(curr.quantity);
  }, 0);
  return totalItems;
};