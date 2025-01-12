import "../css/CartItems.css";
import { formatPrice } from "../utils/formatPrice";

export default function CartItems({pic, name, price , amount, id, updateItemQuantity, removeItem}) {

  return(
      <div className="cartItems">
        <img src={pic} alt="" />
        <p>{name}</p>
        <p>{formatPrice(price)}</p>

        <input type="number" min="1" onChange={(e) => updateItemQuantity(id, e.target.value)} value={amount}/>
        <p>{formatPrice(price * amount)}</p>
        <button onClick={() => removeItem(id)}>ลบสินค้า</button>
      </div>
  );
}