import { createContext, useContext, useReducer } from "react";
import actionTypes from "./actionTypes";
const initialState = {
  sortOrder: "",
  priceRange: { start: 100 },
  selectedCategories: [],
  selectedRating: null,
};
const FilterContext = createContext(initialState);
const filterReducer = (state, action) => {
  const { type, payload } = action;
  console.log(type, payload);
  switch (type) {
    case actionTypes.SORT: {
      return { ...state, sortOrder: payload };
    }
    case actionTypes.PRICE_RANGE: {
      return { ...state, priceRange: { ...payload } };
    }
    case actionTypes.CATEGORY: {
      const { key, value } = payload;
      const { selectedCategories } = state;
      let newSelectedCategories;
      if (value) {
        newSelectedCategories = [...selectedCategories, key];
      } else {
        const index = selectedCategories.indexOf(key);
        newSelectedCategories = [...selectedCategories];
        if (index >= 0) {
          newSelectedCategories.splice(index, 1);
        }
      }

      return { ...state, selectedCategories: newSelectedCategories };
    }

    case actionTypes.RATING: {
      return { ...state, selectedRating: payload };
    }
    case actionTypes.RESET: {
      return { ...initialState };
    }
    default:
      return state;
  }
};

function FilterProvider({ children }) {
  const [appliedFilters, filterDispatch] = useReducer(
    filterReducer,
    initialState
  );
  const setSortLowToHigh = () =>
    filterDispatch({ type: actionTypes.SORT, payload: "LOW_TO_HIGH" });
  const setSortHighToLow = () =>
    filterDispatch({ type: actionTypes.SORT, payload: "HIGH_TO_LOW" });
  const filterByPrice = (value) =>
    filterDispatch({
      type: actionTypes.PRICE_RANGE,
      payload: { start: value },
    });
  const filterByCategory = (value) =>
    filterDispatch({ type: actionTypes.CATEGORY, payload: value });
  const filterByRating = (value) =>
    filterDispatch({ type: actionTypes.RATING, payload: value });
  const clearFilter = () => filterDispatch({ type: actionTypes.RESET });
  return (
    <FilterContext.Provider
      value={{
        appliedFilters,
        setSortLowToHigh,
        setSortHighToLow,
        filterByPrice,
        filterByCategory,
        filterByRating,
        clearFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
const useFilterCtx = () => useContext(FilterContext);
export { FilterProvider, useFilterCtx };
