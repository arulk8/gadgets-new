import React from "react";
import { useAsync, methods } from "../../../Common/Hooks/AsyncHook";
import { useStore } from "../../../../store/app-store-context";
import actions from "../../../../store/actions";
import FilterCategory from "./filter-category/FilterCategory";
import { useFilterCtx } from "../context/product-filter-context";
import "./product-filter.css";
const API_URL = "/api/categories";
const ProductsFilter = () => {
  const { categories, dispatch } = useStore();
  const {
    appliedFilters,
    clearFilter,
    setSortLowToHigh,
    setSortHighToLow,
    filterByPrice,
    filterByCategory,
    filterByRating,
  } = useFilterCtx();

  const { sortOrder, priceRange, selectedCategories, selectedRating } =
    appliedFilters;
  const dispatcher = (data) =>
    dispatch({ type: actions.CATEGORIES, payload: data.categories });
  const { isLoading, serverError } = useAsync(
    methods.GET,
    API_URL,
    {},
    dispatcher
  );

  const onSelectCategory = (key, value) => {
    console.log(key, value);
    filterByCategory({
      key,
      value,
    });
  };
  return (
    <aside className="side__bar">
      <div className="filter flex-row vgutter-md">
        <h5>Filters</h5>
        <div className="margin-auto--l btn__clear">
          <a onClick={clearFilter} className="btn__link btn__link--primary">
            Clear
          </a>
        </div>
      </div>
      <div className="price vgutter-md">
        <h5>Price</h5>
        <input
          className="price__range"
          type="range"
          min="100"
          step="10"
          max="100000"
          value={priceRange.start}
          onChange={(e) => filterByPrice(e.target.value)}
        />
        <span> {priceRange.start}</span>
      </div>
      <div className="category vgutter-md">
        <h5>Category</h5>
        <form className="category_form">
          {categories.map((category) => (
            <FilterCategory
              selectedCategories={selectedCategories}
              key={category._id}
              {...category}
              setCategory={onSelectCategory}
            />
          ))}
        </form>
      </div>
      <div className="rating vgutter-md">
        <h5>Rating</h5>
        <form className="category_form">
          <div className="my-5">
            <input
              type="radio"
              id="4star"
              name="rating"
              onChange={() => filterByRating(4)}
              checked={selectedRating === 4}
            />
            <label htmlFor="4star">4 Star & Above</label>
          </div>
          <div className="my-5">
            <input
              type="radio"
              id="3star"
              name="rating"
              onChange={() => filterByRating(3)}
              checked={selectedRating === 3}
            />
            <label htmlFor="3star">3 Star & Above</label>
          </div>
          <div className="my-5">
            <input
              type="radio"
              id="2star"
              name="rating"
              onChange={() => filterByRating(2)}
              checked={selectedRating === 2}
            />
            <label htmlFor="2star">2 Star & Above</label>
          </div>
          <div className="my-5">
            <input
              type="radio"
              id="1star"
              name="rating"
              onChange={() => filterByRating(1)}
              checked={selectedRating === 1}
            />
            <label htmlFor="1star">1 Star & Above</label>
          </div>
        </form>
      </div>
      <div className="sort vgutter-md">
        <h5>Sort by</h5>
        <form className="category_form">
          <div className="my-5">
            <input
              type="radio"
              id="lowHigh"
              name="sort"
              onChange={setSortLowToHigh}
              checked={sortOrder === "LOW_TO_HIGH"}
            />
            <label htmlFor="lowHigh">Price - Low to High</label>
          </div>
          <div className="my-5">
            <input
              type="radio"
              id="highLow"
              name="sort"
              onChange={setSortHighToLow}
              checked={sortOrder === "HIGH_TO_LOW"}
            />
            <label htmlFor="highLow">Price - High to Low</label>
          </div>
        </form>
      </div>
    </aside>
  );
};

export default ProductsFilter;
