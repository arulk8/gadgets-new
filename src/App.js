import "./App.css";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import Header from "./components/Header/Header";
import Products from "./components/pages/Products/Products";
import { StoreProvider } from "./store/app-store-context";
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/Authentication/Login";
import SignUp from "./components/pages/Authentication/SignUp";
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
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </StoreProvider>
    </div>
  );
}

export default App;
