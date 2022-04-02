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
  const { products, dispatch } = useStore();
  const { appliedFilters } = useFilterCtx();

  const dispatcher = (data) =>
    dispatch({ type: actionTypes.PRODUCTS, payload: data.products });
  const { isLoading, serverError } = useAsync(
    METHODS.GET,
    API_URL,
    {},
    dispatcher
  );

  const composedFilter = filtersCompose(appliedFilters);
  const filteredProducts = composedFilter(products);

  return (
    <article className="product__list">
      <section className="product_section">
        <h3>Showing All Products</h3>
        <span>{`( Showing ${filteredProducts?.length} Products )`}</span>
      </section>
      <main className="products">
        {filteredProducts?.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </main>
    </article>
  );
};

export default ProductsList;
