import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import "../css/allproduct.css";
import axios from "axios";

export default function Allproducts() {
  const [products, setProducts] = useState([]);
  const [types, setTypes] = useState([]);

  const fetchProducts = async (typeId) => {
    if (typeId) {
      try {
        const response = await axios.get(`https://backendshop.thirteenpointeight.com/product/type/${typeId}`)
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }else {
      try {
        const response = await axios.get(`https://backendshop.thirteenpointeight.com/product`);
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  }
  
  const fetchTypes = async () => {
    try {
      const response = await axios.get(`https://backendshop.thirteenpointeight.com/type`);
      setTypes(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTypes();
    fetchProducts();
  }, []);

  //filter category
  // const filterCategory = (type) => {
  //   const newproducts = data.filter((e) => e.type == type);
  //   setallproduct([...newproducts]);
  // };

  return (
    <div className="apContainer">
      <Navbar />
      {/* category */}
      <div style={{ margin: "10px 0" }}>
        <p className="headerText">หมวดหมู่ทั้งหมด</p>
        {/* categories */}
        <div className="categoryContainer">
          {types.map((type, key) => (
            <Categories
              name={type.name}
              typeId={type.id}
              key={key}
              fetchProducts={fetchProducts}
            />
          ))}
        </div>
      </div>
      {/* product for u */}
      <div style={{ margin: "20px 0" }}>
        <p className="headerText">สินค้าทั้งหมด</p>
        <div className="productContainer">
          {products.map((item, key) => (
            <ProductCard
              key={key}
              img={item.strImg}
              name={item.name}
              price={item.price}
              pId={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
