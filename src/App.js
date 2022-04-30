import "./App.css";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import Header from "./components/Header/Header";
import Products from "./components/pages/Products/Products";
import { StoreProvider } from "./store/app-store-context";
import Home from "./components/pages/Home/Home";

import Cart from "./components/pages/Cart/Cart";
import Wishlist from "./components/pages/Whishlist/Wishlist";
import Login from "./components/pages/Authentication/Login";
import SignUp from "./components/pages/Authentication/SignUp";
import ProtectedRoute from "./components/Common/Components/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <div className="App grid grid-column">
      <StoreProvider>
        <Header />
        <div className="main">
          <Routes>
            <Route path="/products/:id" element={<Products />} />
            <Route path="/products" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />

            <Route
              path="/cart"
              element={
                <ProtectedRoute path="/cart">
                  <Cart />
                </ProtectedRoute>
              }
            />
            <Route
              path="/wishlist"
              element={
                <ProtectedRoute path="/wishlist">
                  <Wishlist />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<Home />} />
            <Route path="/mock" element={<Mockman />} />
          </Routes>
        </div>
      </StoreProvider>
    </div>
  );
}

export default App;
