import React, { useState } from "react";
import ProductCard from "../../../Common/Components/ProductCard/ProductCard";
import { useAsync, METHODS } from "../../../Common/Hooks/AsyncHook";
import { useStore } from "../../../../store/app-store-context";
import { useFilterCtx } from "../context/product-filter-context";
import filtersCompose from "../products-filter/utils/filterCompose";
import actionTypes from "../../../../store/actionTypes";
import "./product-list.css";

const API_URL = "/api/products";
const ProductsList = () => {
  const { products, actions, dispatch, wishlist = [], cart = [] } = useStore();
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
  const wishlistIds = wishlist.map((product) => product.id);     
  const cartIds = cart.map((product) => product.id);
  const addedWishlist = products.map((product) => {
    const newProduct = { ...product };
    if (wishlistIds.indexOf(product.id) >= 0) {
      newProduct.wishlist = true;
    }
    if (cartIds.indexOf(product.id) >= 0) {
      newProduct.addedToCart = true;
    }
    return newProduct;
  });
  const composedFilter = filtersCompose(appliedFilters);
  const filteredProducts = composedFilter(addedWishlist);

  return (
    <article className="product__list">
      <section className="product_section">
        <h3>Showing All Products</h3>
        <span>{`( Showing ${filteredProducts?.length} Products )`}</span>
      </section>
      <main className="products">
        {filteredProducts?.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            addToWishlist={addToWishlist.bind(null, product)}
            removeFromWishlist={removeFromWishlist.bind(null, product)}
            addToCart={addToCart.bind(null, product)}
          />
        ))}
      </main>
    </article>
  );
};

export default ProductsList;
