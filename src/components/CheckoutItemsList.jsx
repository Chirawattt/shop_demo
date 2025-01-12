import "../css/CheckoutItemsList.css";
import { formatPrice } from "../utils/formatPrice";

export default function CheckoutItemsList({pic, name, price, amount}) {
    return(
        <div className="itemList">
            <img src={pic} alt="" />
            <p>{name}</p>
            <p>{amount}</p>
            <p>{formatPrice(price)}</p>
        </div>
    )
}