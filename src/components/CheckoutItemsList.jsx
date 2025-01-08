import "../css/CheckoutItemsList.css";

export default function CheckoutItemsList({pic, name, price, amount}) {
    return(
        <div className="itemList">
            <img src={pic} alt="" />
            <p>{name}</p>
            <p>{amount}</p>
            <p>{price}</p>
        </div>
    )
}