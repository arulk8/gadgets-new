import "./App.css";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import Header from "./components/Header/Header";
import Products from "./components/pages/Products/Products";
import { StoreProvider } from "./store/app-store-context";
import Home from "./components/pages/Home/Home";
import Auth from "./components/pages/Authentication/Auth";
function App() {
  return (
    <div className="App grid grid-column">
      <StoreProvider>
        <Header />
        <div className="main">
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/mock" element={<Mockman />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Auth type="login" />} />
            <Route path="/signup" element={<Auth type="signup" />} />
          </Routes>
        </div>
      </StoreProvider>
    </div>
  );
}

export default App;
