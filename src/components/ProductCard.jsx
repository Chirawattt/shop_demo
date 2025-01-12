import "../css/product.css";
import { formatPrice } from "../utils/formatPrice";

export default function ProductCard({ img, name, price, pId,addToCart }) {

  return (
    <div className="productCard">
      <img src={img} alt="" />
      <p className="productText">{name}</p>
      <p className="priceText">{formatPrice(price)} บาท</p>
      <button onClick={() => addToCart(pId)}>เพิ่มสินค้าลงตะกร้า</button>
    </div>
  );
}
