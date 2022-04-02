import { createContext, useContext, useReducer } from "react";
import actionTypes from "./actionTypes";
import axios from "axios";
const initSession = {
  emailData: "",
  encodedToken: "",
  createdAt: null,
  updatedAt: null,
};
const init = {
  categories: [],
  products: [],
  sessionData: { ...initSession },
  isLoggedIn: false,
};

const StoreContext = createContext(init);

const signUpAction = (dispatch, { email, password }) => {
  (async () => {
    try {
      const {
        data: {
          createdUser: { email: emailData, createdAt, updatedAt },
          encodedToken,
        },
      } = await axios.post("/api/auth/signup", {
        email,
        password,
      });
      const sessionData = {
        emailData,
        encodedToken,
        createdAt,
        updatedAt,
      };

      localStorage.setItem("authSession", JSON.stringify(encodedToken));
      dispatch({
        type: actionTypes.SIGN_UP,
        payload: { sessionData, isLoggedIn: true },
      });
    } catch (err) {
      dispatch({
        type: actionTypes.SIGN_UP,
        payload: { sessionData: { ...initSession }, isLoggedIn: false },
      });
    }
  })();
};
const signInAction = (dispatch, { email, password }) => {
  (async () => {
    try {
      const {
        data: {
          encodedToken,
          foundUser: { email: emailData, createdAt, updatedAt, cart, wishlist },
        },
      } = await axios.post("/api/auth/login", {
        email,
        password,
      });

      const sessionData = {
        emailData,
        encodedToken,
        createdAt,
        updatedAt,
      };
      localStorage.setItem("authSession", JSON.stringify(encodedToken));
      dispatch({
        type: actionTypes.SIGN_IN,
        payload: { sessionData, isLoggedIn: true, cart, wishlist },
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: actionTypes.SIGN_IN,
        payload: { sessionData: { ...initSession }, isLoggedIn: false },
      });
    }
  })();
};

const logoutAction = (dispatch) => {
  localStorage.removeItem("authSession");
  dispatch({ type: actionTypes.LOGOUT });
};
const storeReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.CATEGORIES:
      return { ...state, categories: [...payload] };
    case actionTypes.PRODUCTS:
      return { ...state, products: [...payload] };
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
  const actions = {
    dispatch,
    authenticate,
    login,
    logout,
  };
  return (
    <StoreContext.Provider value={{ ...store, dispatch, actions }}>
      {children}
    </StoreContext.Provider>
  );
};

const useStore = () => useContext(StoreContext);

export { StoreProvider, useStore };
