const priceRangeFilter = (startPrice) => (arr) =>
  arr.filter((item) => item.price >= parseInt(startPrice, 10));

const sortByPriceHighToLow = (list) => {
  return [...list].sort(
    (current, next) => parseFloat(next["price"]) - parseFloat(current["price"])
  );
};

const sortByPriceLowToHigh = (list) => {
  return [...list].sort(
    (current, next) => parseFloat(current["price"]) - parseFloat(next["price"])
  );
};

const categoryFilter = (selectedCategories) => (arr) =>
  arr.filter((item) => selectedCategories.includes(item.category));
const ratingFilter = (selectedRating) => (arr) =>
  arr.filter((item) => item.rating >= selectedRating);
export {
  sortByPriceHighToLow,
  sortByPriceLowToHigh,
  priceRangeFilter,
  categoryFilter,
  ratingFilter,
};
