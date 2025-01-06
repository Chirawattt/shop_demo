import { useState } from "react";
import Navbar from "./Navbar";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import data from "../data.json";
import types from "../type.json";
import "../css/allproduct.css";

export default function Allproducts() {
  const [allproduct, setallproduct] = useState([...data]);

  //filter category
  const filterCategory = (type) => {
    const newproducts = data.filter((e) => e.type == type);
    setallproduct([...newproducts]);
  };

  return (
    <div className="apContainer">
      <Navbar />
      {/* category */}
      <div style={{ margin: "10px 0" }}>
        <p className="headerText">หมวดหมู่ทั้งหมด</p>
        {/* categories */}
        <div className="categoryContainer">
          {types.map((e, key) => (
            <Categories
              name={e.name}
              typeid={e.id}
              key={key}
              goto={e.goto}
              filterCategory={filterCategory}
            />
          ))}
        </div>
      </div>
      {/* product for u */}
      <div style={{ margin: "20px 0" }}>
        <p className="headerText">สินค้าทั้งหมด</p>
        <div className="productContainer">
          {allproduct.map((e, key) => (
            <ProductCard
              key={key}
              img={e.img}
              name={e.name}
              price={e.price}
              p_id={e.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
