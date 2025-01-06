import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Allproducts from "./components/Allproducts";
import Product from "./components/Product";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allproducts" element={<Allproducts />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </Router>
  );
}
