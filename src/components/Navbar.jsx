import "../css/Navbar.css";

const Navbar = ({cartCount}) => {
  return (
    <div className="head">
      <div>
        <div className="boxleft">
          <div className="brand-logo">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1867/1867540.png"
              alt=""
            />
          </div>
          <ul className="menu">
            <a href="/" >
              <li className="menu-item"><i className="fa-solid fa-house" />หน้าแรก</li>
            </a>
            <a href="/allproducts" >
              <li className="menu-item"> <i className="fa-solid fa-shop"></i>สินค้าทั้งหมด </li>
            </a>
          </ul>
        </div>
        <a href="/cart" className="boxright">
          {cartCount > 0 ? <p className="cartCount">{cartCount}</p>:""}
          <i className="fa-solid fa-cart-shopping" />
        </a>
      </div>
    </div>
  );
};
export default Navbar;
