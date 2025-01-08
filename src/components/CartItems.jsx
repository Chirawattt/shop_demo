import "../css/CartItems.css";

export default function CartItems({pic, name, price, amount}) {
    return(
        <div className="cartItems">
          <img src={pic} alt="" />
          <p>{name}</p>
          <p>{price}</p>
          <input type="number" defaultValue={amount}/>
          <button>ลบสินค้า</button>
        </div>
    )
}