import "../css/Navbar.css";

const Navbar = () => {
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
            <li className="menu-item">
              <i class="fa-solid fa-house" /><a href="/" >หน้าแรก</a>
            </li>
            <li className="menu-item">
              <i class="fa-solid fa-shop"></i><a href="/allproducts" >สินค้าทั้งหมด</a>
            </li>
          </ul>
        </div>
        <div className="boxright">
          <a href="/cart"><i class="fa-solid fa-cart-shopping" /></a>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
