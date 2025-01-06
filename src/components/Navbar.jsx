import "../css/Navbar.css";

const Navbar = () => {
  return (
    <div className="head">
      <div>
        <div className="boxleft">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1867/1867540.png"
            alt=""
          />
          <a href="/">หน้าแรก</a>
          <a href="/allproducts">สินค้าทั้งหมด</a>
        </div>
        <div className="boxright">
          <a href="/cart">ตะกร้าสินค้า</a>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
