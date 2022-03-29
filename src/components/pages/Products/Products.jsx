import React from "react";
import ProductsList from "./product-list/ProductsList";
import ProductsFilter from "./products-filter/ProductsFilter";
import { FilterProvider } from "./context/product-filter-context";
import "./products.css";

const Products = () => {
  return (
    <div className="container main">
      <FilterProvider>
        <ProductsFilter />
        <ProductsList />
      </FilterProvider>
    </div>
  );
};

export default Products;
