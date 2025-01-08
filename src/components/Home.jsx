import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Announcement from "./Announcement";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import axios from "axios";

export default function Home() {
  const [suggestProducts, setSuggestProducts] = useState([]);
  const [types, setTypes] = useState([]);

  const fetchTypes = async () => {
    try {
      const response = await axios.get(`https://backendshop.thirteenpointeight.com/type`);
      setTypes(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const randomProduct = async () => {
    try {
      const response = await axios.get(`https://backendshop.thirteenpointeight.com/product`);
      const allProduct = response.data;
      const tempArray = [];
      /* problem here, some products still duplicate, need to fix it later */
      for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * allProduct.length);
        tempArray.push(allProduct[randomIndex]);
      }
      setSuggestProducts(tempArray);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTypes();
    randomProduct();
  }, []);

  return (
    <div className="container">
      <Navbar />
      <Header />
      <Announcement msg="คำว่าฮักเกิดขึ้นที่ใด เกิดกับไผมันบ่สำคัญ มันจะอยู่ตรงนั้น บ่หายตามกาลเวลา ว่าสิผ่านมาดนปานใด๋ ในหัวใจบ่เคยร้างลา ยังจดจำทุกถ้อยวาจา ที่เฮาเว้าต่อกัน เมื่อสวรรค์แยกกายเฮาสอง จากคู่ครองเป็นคนอื่นไกล เหลือแต่คำสัญญาใช่ไหมที่ยังคงอยู่ แม้นว่าเจ้าสิเกิดเป็นหยัง บ่เคยคิดซัง ย้อนฮักคนฮู้ สิเคียงข้างให้ได้ฮู้ หัวใจยังคงเดิม" />
      {/* category */}
      <div style={{ margin: "40px 0" }}>
        <p className="headerText">หมวดหมู่ทั้งหมด</p>
        {/* categories */}
        <div className="categoryContainer">
          {types.map((e, key) => (
            <Categories
              name={e.name}
              typeid={e.id}
              key={key}
            />
          ))}
        </div>
      </div>
      {/* product for u */}
      <div style={{ margin: "20px 0" }}>
        <p className="headerText">สินค้าแนะนำสำหรับคุณ</p>
        <div className="productContainer">
          {suggestProducts.map((e, key) => (
            <ProductCard
              img={e.strImg}
              name={e.name}
              price={e.price}
              pId={e.id}
              key={key}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
