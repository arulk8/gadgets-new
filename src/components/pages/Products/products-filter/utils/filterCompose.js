import {
  priceRangeFilter,
  sortByPriceHighToLow,
  sortByPriceLowToHigh,
  categoryFilter,
  ratingFilter,
} from "./filters";
const compose = (...args) => {
  const handler = (acc, fn) => [...fn(acc)];
  return (array) => {
    return args.reduce(handler, [...array]);
  };
};

const filtersCompose = (appliedFilters) => {
  console.log(appliedFilters);
  const { sortOrder, priceRange, selectedCategories, selectedRating } =
    appliedFilters;
  const filters = [];
  if (sortOrder === "LOW_TO_HIGH") {
    filters.push(sortByPriceLowToHigh);
  }

  if (sortOrder === "HIGH_TO_LOW") {
    filters.push(sortByPriceHighToLow);
  }
  if (selectedCategories.length > 0) {
    filters.push(categoryFilter(selectedCategories));
  }
  if (!!selectedRating) {
    filters.push(ratingFilter(selectedRating));
  }
  filters.push(priceRangeFilter(priceRange.start));
  return compose(...filters);
};

export default filtersCompose;
