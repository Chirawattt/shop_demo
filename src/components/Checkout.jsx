import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import CheckoutItemsList from "./CheckoutItemsList";
import { formatPrice } from "../utils/formatPrice";
import "../css/Checkout.css";

export default function Checkout() {
    const [cartItems ,setCartItems] = useState([]); // Stores cart items
    const [totals, setTotals] = useState({ totalQuantity: 0, totalPrice: 0 }); // Stores total quantity and price

    const fetchCartData = async () => {
        const savedCart = JSON.parse(localStorage.getItem("cartData"));
    
        if (savedCart.length > 0) {
          let items = [];
          let quantity = 0;
          let price = 0;

          for (let item of savedCart) {
            const res = await axios.get("https://backendshop.thirteenpointeight.com/product/id/" + item.id);
            // add quantity from localStorage
            const product = { ...res.data, amount: item.amount };
            console.log(product);
            items.push(product);
            quantity += parseInt(item.amount);
            price += parseInt(res.data.price) * item.amount;
          }
          setCartItems(items); // update cart items
          setTotals({ totalQuantity: quantity, totalPrice: price }); // update total quantity and price
        }
    }

    // Run fetchCartData on page load
    useEffect(() => {
        fetchCartData();
    },[]);

    return(
        <div>
            <Navbar/>
            <div className="checkoutContainer">
                <h1 style={{ marginTop: "24px" }}>ชำระเงิน</h1>
                <div className="cc">
                    <div className="left">
                        <div className="leftCon">
                            <div className="lhead">
                                <p>รูปสินค้า</p>
                                <p>ชื่อสินค้า</p>
                                <p>จำนวน</p>
                                <p>ราคา (บาท)</p>
                            </div>
                            <div className="lcontent">
                                {cartItems.map((item) => (
                                    <CheckoutItemsList key={item.id} name={item.name} amount={item.amount} price={item.price} pic={item.strImg}/>
                                ))}
                            </div>
                            <div className="lfooter">
                                <p>รวมทั้งสิ้น</p>
                                <p></p>
                                <p>{totals.totalQuantity}</p>
                                <p>{formatPrice(totals.totalPrice)}</p>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="rightCon">
                            <div className="rhead">ข้อมูลลูกค้า</div>
                            <div className="rcontent">
                                <p>ชื่อ-นามสกุล</p>
                                <input type="text" placeholder="ชื่อ-นามสกุล"/>
                                <p>อีเมล</p>
                                <input type="email" placeholder="อีเมล"/>
                            </div>
                        </div>
                        <div className="finish">
                            <button>จบการขาย</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}