import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Category from "./Category";
import ProductCard from "./ProductCard";
import "../css/allproduct.css";
import axios from "axios";

export default function Allproducts() {
  const [products, setProducts] = useState([]);
  const [types, setTypes] = useState([]);
  const [cartCount,setCartCount] = useState();
  const [selectedButton, setSelectedButton] = useState(null);
  const param = useParams();

  // Fetch all products or filter by type
  const fetchProducts = useCallback(async () => {
    const endpoint = param.id
      ? `https://backendshop.thirteenpointeight.com/product/type/${param.id}`
      : `https://backendshop.thirteenpointeight.com/product`;

    try {
      const response = await axios.get(endpoint);
      setProducts(response.data);
    } catch (error) {
      console.log("Failed to fetch products: ", error);
    }
  }, [param.id]);
  
  // Fetch products types
  const fetchTypes = useCallback(async () => {
    try {
      const response = await axios.get(`https://backendshop.thirteenpointeight.com/type`);
      setTypes(response.data);
    } catch (error) {
      console.log("Failed to fetch product types: ", error);
    }
  },[]);
  
  const updateCartCount = useCallback(() => {
    const cartData = JSON.parse(localStorage.getItem("cartData")) || [];
    setCartCount(cartData.length);
  },[]);

  const addToCart = (id) => {
    const cartData = JSON.parse(localStorage.getItem("cartData")) || [];
    const itemExists = cartData.some((item) => item.id === id);
    let updateCart = [];

    if (!itemExists) {
      updateCart = [...cartData, { id, amount: 1 }];
    }else {
      updateCart = cartData.map((item) => {
        if (item.id === id) {
          item.amount += 1;
        }
        return item;
      });
    }
    localStorage.setItem("cartData", JSON.stringify(updateCart));
    updateCartCount();
  }

  useEffect(() => {
    fetchTypes();
    fetchProducts();
    updateCartCount();
  },[fetchTypes, fetchProducts, updateCartCount]);

  return (
    <div className="apContainer">
      <Navbar cartCount={cartCount}/>
      {/* category */}
      <div style={{ margin: "10px 0" }}>
        <p className="headerText">หมวดหมู่ทั้งหมด</p>
        {/* categories */}
        <div className="categoryContainer">
          {types.map((type) => (
            <Category
              key={type.id}
              name={type.name}
              typeId={type.id}
              selectedButton={selectedButton}
              setSelectedButton={setSelectedButton}
            />
          ))}
        </div>
      </div>
      {/* product for u */}
      <div style={{ margin: "20px 0" }}>
        <p className="headerText">สินค้าทั้งหมด</p>
        <div className="productContainer">
          {products.map((item) => (
            <ProductCard
              key={item.id}
              img={item.strImg}
              name={item.name}
              price={item.price}
              pId={item.id}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
