import { createContext, useContext, useReducer } from "react";
import actionTypes from "./actionTypes";
import {
  logoutAction,
  signInAction,
  signUpAction,
  addToWishlistAction,
  removeFromWishlistAction,
  addToCartAction,
} from "./actions";

export const initSession = {
  emailData: "",
  encodedToken: "",
  createdAt: null,
  updatedAt: null,
};
const init = {
  categories: [],
  products: [],
  wishlist: [],
  sessionData: { ...initSession },
  isLoggedIn: false,
};

const StoreContext = createContext(init);

const storeReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.CATEGORIES:
      return { ...state, categories: [...payload] };
    case actionTypes.PRODUCTS:
      return { ...state, products: [...payload] };
    case actionTypes.ADD_TO_WISHLIST:
      const newWishlist = [...payload];
      return { ...state, wishlist: newWishlist };
    case actionTypes.REMOVE_FROM_WISHLIST: {
      const newWishlist = [...state.wishlist].filter(
        (product) => product.id !== payload
      );
      return { ...state, wishlist: newWishlist };
    }

    case actionTypes.ADD_TO_CART: {
      return { ...state, cart: [...payload] };
    }
    case actionTypes.SIGN_UP:
      return {
        ...state,
        isLoggedIn: payload.isLoggedIn,
        sessionData: payload.sessionData,
      };
    case actionTypes.SIGN_IN:
      return {
        ...state,
        isLoggedIn: payload.isLoggedIn,
        sessionData: payload.sessionData,
      };
    case actionTypes.LOGOUT:
      return { ...state, isLoggedIn: false, sessionData: { ...initSession } };
    default:
      return { ...state };
  }
};
const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(storeReducer, init);
  const authenticate = (authData) => signUpAction(dispatch, authData);
  const login = (authData) => signInAction(dispatch, authData);
  const logout = () => logoutAction(dispatch);
  const addToCart = (product) => addToCartAction(dispatch, product);
  const addToWishlist = (product) => addToWishlistAction(dispatch, product);
  const removeFromWishlist = (product) =>
    removeFromWishlistAction(dispatch, product);
  const actions = {
    dispatch,
    authenticate,
    login,
    logout,
    addToWishlist,
    addToCart,
    removeFromWishlist,
  };
  return (
    <StoreContext.Provider value={{ ...store, dispatch, actions }}>
      {children}
    </StoreContext.Provider>
  );
};

const useStore = () => useContext(StoreContext);

export { StoreProvider, useStore };
