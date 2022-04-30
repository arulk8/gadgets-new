import actionTypes from "./actionTypes";
import axios from "axios";
const WISHLIST_URL = "/api/user/wishlist";
const CART_URL = "/api/user/cart";
import { initSession } from "./app-store-context";

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

const addToWishlistAction = (dispatch, wishlistItem) => {
  const product = { ...wishlistItem };
  delete product.addedToCart;
  delete product.wishlist;

  (async () => {
    try {
      const {
        data: { wishlist },
      } = await axios.post(
        WISHLIST_URL,
        { product },
        {
          headers: {
            authorization: localStorage.getItem("authSession"),
          },
        }
      );

      dispatch({
        type: actionTypes.ADD_TO_WISHLIST,
        payload: wishlist,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: actionTypes.ADD_TO_WISHLIST,
        payload: [],
      });
    }
  })();
};

const removeFromWishlistAction = (dispatch, product) => {
  const { _id } = product;
  (async () => {
    try {
      const data = await axios.delete(`${WISHLIST_URL}/${_id}`, {
        headers: {
          authorization: localStorage.getItem("authSession"),
        },
      });

      dispatch({
        type: actionTypes.REMOVE_FROM_WISHLIST,
        payload: _id,
      });
    } catch (err) {
      dispatch({
        type: actionTypes.REMOVE_FROM_WISHLIST,
        payload: null,
      });
    }
  })();
};

const addToCartAction = (dispatch, cartItem) => {
  const product = { ...cartItem };
  delete product.addedToCart;
  delete product.wishlist;
  (async () => {
    try {
      const {
        data: { cart },
      } = await axios.post(
        `${CART_URL}`,
        { product },
        {
          headers: {
            authorization: localStorage.getItem("authSession"),
          },
        }
      );

      dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: cart,
      });
    } catch (err) {
      dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: [],
      });
    }
  })();
};

const removeFromCartAction = (dispatch, product) => {
  const { _id } = product;
  (async () => {
    try {
      const {
        data: { cart },
      } = await axios.delete(`${CART_URL}/${_id}`, {
        headers: {
          authorization: localStorage.getItem("authSession"),
        },
      });

      dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: cart,
      });
    } catch (err) {
      dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: null,
      });
    }
  })();
};

const updateCartItemAction = (dispatch, cartInfo) => {
  const { _id, action, qty } = cartInfo;
  if (qty === 1 && action === "decrement") {
    removeFromCartAction(dispatch, cartInfo);
    return;
  }
  (async () => {
    try {
      const {
        data: { cart },
      } = await axios.post(
        `${CART_URL}/${_id}`,
        {
          action: {
            type: action,
          },
        },
        {
          headers: {
            authorization: localStorage.getItem("authSession"),
          },
        }
      );
      dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: cart,
      });
    } catch (err) {
      dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: [],
      });
    }
  })();
};
export {
  logoutAction,
  signInAction,
  signUpAction,
  addToWishlistAction,
  removeFromWishlistAction,
  addToCartAction,
  updateCartItemAction,
  removeFromCartAction,
};
