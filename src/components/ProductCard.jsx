import { Link } from "react-router-dom";
import "../css/product.css";

export default function ProductCard({ img, name, price, pId }) {
  return (
    <div className="productCard">
      <img src={img} alt="" />
      <p className="productText">{name}</p>
      <p className="priceText">{price} บาท</p>
      <Link to={`/product/${pId}`}>เพิ่มสินค้าลงตะกร้า</Link>
    </div>
  );
}
