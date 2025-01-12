import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import CartItems from "./CartItems";
import { formatPrice } from "../utils/formatPrice";
import "../css/Cart.css";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]); // store the cart items
  const [totalPrice, setTotalPrice] = useState(0); // store the total price
  const [cartCount, setCartCount] = useState(0); // store the total cart items

  // Fetch cart data from local storage
  const fetchCartData = async () => {
    const savedCart = JSON.parse(localStorage.getItem("cartData"));
    if (savedCart.length > 0) {
      let items = [];
      // Fetch product data from the backend
      for (let item of savedCart) {
        const response = await axios.get("https://backendshop.thirteenpointeight.com/product/id/" + item.id);
        response.data.amount = item.amount;
        items.push(response.data);
      }
      setCartItems(items);
    }
  }
  
  const updateCartCount = useCallback(() => {
    const cartData = JSON.parse(localStorage.getItem("cartData")) || [];
    setCartCount(cartData.length);
  },[]);

  // Initialize cart data and count on page load
  useEffect(() => {
    fetchCartData();
    updateCartCount();
  },[]);

  // Calculate total price whenever cartItems change
  useEffect(() => {
    let sum = 0;
    cartItems.forEach((item) => {
      sum += parseInt(item.price) * parseInt(item.amount);
    });
    setTotalPrice(sum);
  },[cartItems]);

  const updateItemQuantity = (id, amount) => {
    if (amount >= 1) {
      console.log(cartItems);
      const updateCartItems = cartItems.map((item) => 
        id === item.id ? {...item, amount: amount} : item);
      setCartItems([...updateCartItems]); // update state
      
      // update localStorage
      const savedCart = JSON.parse(localStorage.getItem("cartData"));
      const updateCart = savedCart.map((item) => id === item.id ? {...item, amount: amount} : item);
      localStorage.setItem("cartData",JSON.stringify(updateCart));
    }
  }

  const removeItem = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems); // Update state

    // Update localStorage
    const savedCart = JSON.parse(localStorage.getItem("cartData")) || [];
    const updatedCart = savedCart.filter((item) => item.id !== id);
    localStorage.setItem("cartData", JSON.stringify(updatedCart));

    updateCartCount();
  }

  return (
    <div className="cartContainer">
      <Navbar cartCount={cartCount}/>
      <h1 style={{ marginTop: "24px" }}>สินค้าในตะกร้า</h1>
      <div className="itemsContainer">
          <div className="itemsHeader">
            <p>รูปสินค้า</p>
            <p>ชื่อสินค้า</p>
            <p>ราคาต่อหน่วย (บาท)</p>
            <p>จำนวน</p>
            <p>ราคา (บาท)</p>
            <p>จัดการ</p>
          </div>
          {cartItems.map((item) => (
            <CartItems 
              key={item.id} 
              id={item.id} 
              name={item.name} 
              pic={item.strImg} 
              price={item.price} 
              amount={item.amount} 
              updateItemQuantity={updateItemQuantity} 
              removeItem={removeItem}
            />
          ))}
          {cartCount > 0 ? 
            <div className="checkout">
              <p>รวมทั้งสิ้น {formatPrice(totalPrice)} บาท</p>
              <a href="/checkout" className="checkoutButton">ชำระเงิน</a>
            </div>:""
        }
      </div>
    </div>
  );
}
