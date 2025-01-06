import "../css/Header.css";
import Allproducts from "./Allproducts";

export default function Header() {
  return (
    <header className="Header">
      <div className="hero">
        <img
          src="https://images.unsplash.com/photo-1733690567161-326d5294d3bb?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="boxtext">
          <h2>ยินดีต้อนรับสู่ร้านของเรา</h2>
          <p>
            ยินดีต้อนรับสู่เว็บไซต์ของเรา <br />
            ศูนย์รวมสินค้าหลากหลายที่ตอบโจทย์ทุกความต้องการในชีวิตประจำวัน{" "}
            <br />
            ช้อปง่าย จัดส่งไว คุณภาพดี พร้อมให้บริการทุกที่ทุกเวลา
          </p>
        </div>
      </div>
    </header>
  );
}
