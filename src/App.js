import "./App.css";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import Header from "./components/Header/Header";
import Products from "./components/pages/Products/Products";
import { StoreProvider } from "./store/app-store-context";
import Home from "./components/pages/Home/Home";
import Auth from "./components/pages/Authentication/Auth";
import Cart from "./components/pages/Cart/Cart";
import Wishlist from "./components/pages/Whishlist/Wishlist";
function App() {
  return (
    <div className="App grid grid-column">
      <StoreProvider>
        <Header />
        <div className="main">
          <Routes>
            <Route path="/products/:id" element={<Products />} />
            <Route path="/products" element={<Products />} />
            <Route path="/login" element={<Auth type="login" />} />
            <Route path="/signup" element={<Auth type="signup" />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/" element={<Home />} />
            <Route path="/mock" element={<Mockman />} />
          </Routes>
        </div>
      </StoreProvider>
    </div>
  );
}

export default App;
