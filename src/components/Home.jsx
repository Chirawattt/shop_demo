import { useState,useEffect } from 'react';
import Header from './Header';
import Announcement from './Announcement';
import Categories from './Categories';
import ProductCard from './ProductCard';
import data from '../data.json';

export default function Home() {
  const [getdata,setgetdata] = useState([]);

  useEffect(() => {
    setgetdata(data.slice(0,6));
  },[]);
  
  return (
    <div className='container'>
      <Header />
      <Announcement msg="คำว่าฮักเกิดขึ้นที่ใด เกิดกับไผมันบ่สำคัญ มันจะอยู่ตรงนั้น บ่หายตามกาลเวลา ว่าสิผ่านมาดนปานใด๋ ในหัวใจบ่เคยร้างลา ยังจดจำทุกถ้อยวาจา ที่เฮาเว้าต่อกัน เมื่อสวรรค์แยกกายเฮาสอง จากคู่ครองเป็นคนอื่นไกล เหลือแต่คำสัญญาใช่ไหมที่ยังคงอยู่ แม้นว่าเจ้าสิเกิดเป็นหยัง บ่เคยคิดซัง ย้อนฮักคนฮู้ สิเคียงข้างให้ได้ฮู้ หัวใจยังคงเดิม"/>
      {/* category */}
      <div style={{margin:"40px 0"}}>
        <p className="headerText">หมวดหมู่ทั้งหมด</p>
        <div className="categoryContainer">
          <Categories name="test"/>
          <Categories name="test"/>
          <Categories name="test"/>
          <Categories name="test"/>
          <Categories name="test"/>
          <Categories name="test"/>
          <Categories name="test"/>
          <Categories name="test"/>
        </div>
      </div>
      {/* product for u */}
      <div style={{margin:"20px 0"}}>
        <p className="headerText">สินค้าแนะนำสำหรับคุณ</p>
        <div className="productContainer">
          {getdata.map((e,key) => (
            <ProductCard key={key} img={e.img} name={e.name} price={e.price} />
          ))}
        </div>
      </div>
    </div>
  );
}