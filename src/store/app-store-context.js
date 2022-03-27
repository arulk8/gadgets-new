import { createContext, useContext, useReducer } from "react";
import actions from "./actions";

const init = { categories: [], products: [] };

const StoreContext = createContext(init);
const storeReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.CATEGORIES:
      return { ...state, categories: [...payload] };
    case actions.PRODUCTS:
      return { ...state, products: [...payload] };
    default:
      return { ...state };
  }
};
const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(storeReducer, init);
  return (
    <StoreContext.Provider value={{ ...store, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

const useStore = () => useContext(StoreContext);

export { StoreProvider, useStore };
