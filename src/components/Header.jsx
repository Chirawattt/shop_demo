import "../css/Header.css";
import Allproducts from './Allproducts';

export default function Header() {
    return(
        <header className="Header">
            <div className="head">
                <div>
                    <div className="boxleft">
                        <img src="https://phuwadon-phudon.github.io/DEV_knowledge/photo/pictures/20.jpg" alt="" />
                        <a href="">หน้าแรก</a>
                        <a href="">สินค้าทั้งหมด</a>
                    </div>
                    <div className="boxright">right</div>
                </div>
            </div>
            <div className="hero">
                <img src="https://images.unsplash.com/photo-1733690567161-326d5294d3bb?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <div className="boxtext">
                    <h2>ยินดีต้อนรับสู่ร้านของเรา</h2>
                    <p>คำว่าฮักเกิดขึ้นที่ใด เกิดกับไผมันบ่สำคัญ มันจะอยู่ตรงนั้น บ่หายตามกาลเวลา ว่าสิผ่านมาดนปานใด๋ ในหัวใจบ่เคยร้างลา ยังจดจำทุกถ้อยวาจา ที่เฮาเว้าต่อกัน เมื่อสวรรค์แยกกายเฮาสอง จากคู่ครองเป็นคนอื่นไกล เหลือแต่คำสัญญาใช่ไหมที่ยังคงอยู่ แม้นว่าเจ้าสิเกิดเป็นหยัง บ่เคยคิดซัง ย้อนฮักคนฮู้ สิเคียงข้างให้ได้ฮู้ หัวใจยังคงเดิม</p>
                </div>
            </div>
        </header>
    );
}