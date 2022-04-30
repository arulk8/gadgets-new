import React, { useState } from "react";
import ProductCard from "../../../Common/Components/ProductCard/ProductCard";
import { useAsync, METHODS } from "../../../Common/Hooks/AsyncHook";
import { useStore } from "../../../../store/app-store-context";
import { useFilterCtx } from "../context/product-filter-context";
import filtersCompose from "../products-filter/utils/filterCompose";
import actionTypes from "../../../../store/actionTypes";
import "./product-list.css";
import { useNavigate } from "react-router-dom";

const API_URL = "/api/products";
const ProductsList = () => {
  const {
    isLoggedIn,
    products,
    actions,
    dispatch,
    wishlist = [],
    cart = [],
  } = useStore();
  const navigate = useNavigate();
  const { appliedFilters } = useFilterCtx();
  const { addToWishlist, removeFromWishlist, addToCart } = actions;
  const dispatcher = (data) =>
    dispatch({ type: actionTypes.PRODUCTS, payload: data.products });
  const { isLoading, serverError } = useAsync(
    METHODS.GET,
    API_URL,
    {},
    dispatcher
  );
  const wishlistIds = wishlist.map((product) => product._id);
  const cartIds = cart.map((product) => product._id);
  const addedWishlist = products.map((product) => {
    const newProduct = { ...product };
    if (wishlistIds.indexOf(product._id) >= 0) {
      newProduct.wishlist = true;
    }
    if (cartIds.indexOf(product._id) >= 0) {
      newProduct.addedToCart = true;
    }
    return newProduct;
  });
  const composedFilter = filtersCompose(appliedFilters);
  const filteredProducts = composedFilter(addedWishlist);
  const addToCartHandler = (product) => {
    if (!isLoggedIn) {
      return navigate("/login", { state: { from: { path: "/products" } } });
    }

    return addToCart({ ...product, qty: 1 });
  };
  return (
    <article className="product__list">
      <section className="product_section">
        <h3>Showing All Products</h3>
        <span>{`( Showing ${filteredProducts?.length} Products )`}</span>
      </section>
      <main className="products">
        {filteredProducts?.map((product) => (
          <ProductCard
            key={product._id}
            {...product}
            addToWishlist={addToWishlist.bind(null, product)}
            removeFromWishlist={removeFromWishlist.bind(null, product)}
            addToCart={() => addToCartHandler(product)}
          />
        ))}
      </main>
    </article>
  );
};

export default ProductsList;
