import { createContext, useContext, useReducer } from "react";
import actions from "./actions";
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
    case actions.SORT: {
      return { ...state, sortOrder: payload };
    }
    case actions.PRICE_RANGE: {
      return { ...state, priceRange: { ...payload } };
    }
    case actions.CATEGORY: {
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

    case actions.RATING: {
      return { ...state, selectedRating: payload };
    }
    case actions.RESET: {
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
    filterDispatch({ type: actions.SORT, payload: "LOW_TO_HIGH" });
  const setSortHighToLow = () =>
    filterDispatch({ type: actions.SORT, payload: "HIGH_TO_LOW" });
  const filterByPrice = (value) =>
    filterDispatch({ type: actions.PRICE_RANGE, payload: { start: value } });
  const filterByCategory = (value) =>
    filterDispatch({ type: actions.CATEGORY, payload: value });
  const filterByRating = (value) =>
    filterDispatch({ type: actions.RATING, payload: value });
  const clearFilter = () => filterDispatch({ type: actions.RESET });
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
