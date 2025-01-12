import { useState, useEffect, useCallback } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Announcement from "./Announcement";
import Category from "./Category";
import ProductCard from "./ProductCard";
import axios from "axios";

export default function Home() {
  const [suggestProducts, setSuggestProducts] = useState([]);
  const [types, setTypes] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const fetchTypes = useCallback(async () => {
    try {
      const response = await axios.get(`https://backendshop.thirteenpointeight.com/type`);
      setTypes(response.data);
    } catch (error) {
      console.log("Error fetching product types: ", error);
    }
  }, []);

  const fetchSuggestedProducts = useCallback(async () => {
    try {
      const response = await axios.get(`https://backendshop.thirteenpointeight.com/product`);
      const allProduct = response.data;
      const randomProducts = [];
      if (allProduct.length > 0) {
        while (randomProducts.length < 6) {
          const randomIndex = Math.floor(Math.random() * allProduct.length);
          if (!randomProducts.includes(allProduct[randomIndex])) {
            randomProducts.push(allProduct[randomIndex]);
          }
        }
      }
      setSuggestProducts(randomProducts);
    } catch (error) {
      console.log("Error fetching suggested products: ", error);
    }
  }, []);

  
  // update cart count from local storage
  const updateCartCount = useCallback(() => {
    const cartData = JSON.parse(localStorage.getItem("cartData")) || [];
    setCartCount(cartData.length);
  }, []);

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
    fetchSuggestedProducts();
    updateCartCount();
  }, [fetchTypes, fetchSuggestedProducts, updateCartCount]);



  return (
    <div className="container">
      <Navbar cartCount={cartCount} />
      <Header />
      <Announcement msg="โปรโมชัน ลดแลกแจกแถมตอนนี้วันที่ 1 มกราคม 2568 จนถึง 31 ธันวาคม รีบช็อปด่วน!! สินค้ามีหมด!!" />
      {/* category */}
      <div style={{ margin: "40px 0" }}>
        <p className="headerText">หมวดหมู่ทั้งหมด</p>
        {/* categories */}
        <div className="categoryContainer">
          {types.map((type) => (
            <Category
              key={type.id}
              name={type.name}
              typeId={type.id}
              setSelectedButton={""}
              selectedButton={""}
            />
          ))}
        </div>
      </div>
      {/* product for u */}
      <div style={{ margin: "20px 0" }}>
        <p className="headerText">สินค้าแนะนำสำหรับคุณ</p>
        <div className="productContainer">
          {suggestProducts.map((product) => (
            <ProductCard
              key={product.id}
              img={product.strImg}
              name={product.name}
              price={product.price}
              pId={product.id}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
