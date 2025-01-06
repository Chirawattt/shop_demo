import { Link } from "react-router-dom";
import "../css/product.css";

export default function ProductCard({ img, name, price, p_id }) {
  return (
    <div className="productCard">
      <img src={img} alt="" />
      <p className="productText">{name}</p>
      <p className="priceText">{price} บาท</p>
      <Link to={`/product/${p_id}`}>เพิ่มสินค้าลงตะกร้า</Link>
    </div>
  );
}
