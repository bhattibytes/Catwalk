const isRelatedPopular = (id) => {
  if (id == 1) {
    return [2, 3, 8, 7];
  }
  if (id == 2) {
    return [3, 7, 6, 5];
  }
  if (id == 3) {
    return [5, 9, 7, 2, 1];
  }
  if (id == 4) {
    return [1, 2, 4, 5, 8];
  }
  if (id == 5) {
    return [6, 6, 8, 9, 1, 3];
  }
  return null;
};

module.exports = { isRelatedPopular };