import "./App.css";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import Header from "./components/Header/Header";
import Products from "./components/pages/Products/Products";
import { StoreProvider } from "./store/app-store-context";

function App() {
  return (
    <div className="App grid grid-column">
      <StoreProvider>
        <Header />
        <div className="main">
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/mock" element={<Mockman />} />
          </Routes>
        </div>
      </StoreProvider>
    </div>
  );
}

export default App;
