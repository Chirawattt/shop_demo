import Navbar from "./Navbar";
import CartItems from "./CartItems";
import "../css/Cart.css";

export default function Cart() {
  return (
    <div className="cartContainer">
      <Navbar />
      <h1 style={{ marginTop: "24px" }}>สินค้าในตะกร้า</h1>
      <div className="itemsContainer">
          <div className="itemsHeader">
            <p>รูปสินค้า</p>
            <p>ชื่อสินค้า</p>
            <p>ราคาต่อหน่วย</p>
            <p>จำนวน</p>
            <p>จัดการ</p>
          </div>
        <CartItems name="testestestetstsetstsasasaasasasaasas" price={100} amount={1}/>
        <CartItems name="testestestetstsetstsasasaasasasaasas" price={100} amount={1}/>
        <CartItems name="testestestetstsetstsasasaasasasaasas" price={100} amount={1}/>
        <CartItems name="testestestetstsetstsasasaasasasaasas" price={100} amount={1}/>
        <CartItems name="testestestetstsetstsasasaasasasaasas" price={100} amount={1}/>
        <CartItems name="testestestetstsetstsasasaasasasaasas" price={100} amount={1}/>
        <CartItems name="testestestetstsetstsasasaasasasaasas" price={100} amount={1}/>
        <CartItems name="testestestetstsetstsasasaasasasaasas" price={100} amount={1}/>
        <CartItems name="testestestetstsetstsasasaasasasaasas" price={100} amount={1}/>
        <CartItems name="testestestetstsetstsasasaasasasaasas" price={100} amount={1}/>
        <CartItems name="testestestetstsetstsasasaasasasaasas" price={100} amount={1}/>
        <div className="checkout">
          <p>รวมทั้งสิ้น XXX.XX บาท</p>
          <a href="/checkout" className="checkoutButton">ชำระเงิน</a>
        </div>
      </div>
    </div>
  );
}
