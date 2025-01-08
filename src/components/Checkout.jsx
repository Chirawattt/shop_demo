import Navbar from "./Navbar";
import CheckoutItemsList from "./CheckoutItemsList";
import "../css/Checkout.css";

export default function Checkout() {
    return(
        <div>
            <Navbar/>
            <div className="checkoutContainer">
                <h1 style={{ marginTop: "24px" }}>ชำระเงิน</h1>
                <div className="cc">
                    <div className="left">
                        <div className="leftCon">
                            <div className="lhead">
                                <p>รูปสินค้า</p>
                                <p>ชื่อสินค้า</p>
                                <p>จำนวน</p>
                                <p>ราคา</p>
                            </div>
                            <div className="lcontent">
                                <CheckoutItemsList name="sasasasasasasasasasa" amount={10} price={100} pic="sasa"/>
                                <CheckoutItemsList name="sasasasasasasasasasa" amount={10} price={100} pic="sasa"/>
                                <CheckoutItemsList name="sasasasasasasasasasa" amount={10} price={100} pic="sasa"/>
                                <CheckoutItemsList name="sasasasasasasasasasa" amount={10} price={100} pic="sasa"/>
                                <CheckoutItemsList name="sasasasasasasasasasa" amount={10} price={100} pic="sasa"/>
                                <CheckoutItemsList name="sasasasasasasasasasa" amount={10} price={100} pic="sasa"/>
                                <CheckoutItemsList name="sasasasasasasasasasa" amount={10} price={100} pic="sasa"/>
                                <CheckoutItemsList name="sasasasasasasasasasa" amount={10} price={100} pic="sasa"/>
                                <CheckoutItemsList name="sasasasasasasasasasa" amount={10} price={100} pic="sasa"/>
                                <CheckoutItemsList name="sasasasasasasasasasa" amount={10} price={100} pic="sasa"/>
                            </div>
                            <div className="lfooter">
                                <p>รวมทั้งสิ้น</p>
                                <p></p>
                                <p>100</p>
                                <p>1,000</p>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="rightCon">
                            <div className="rhead">ข้อมูลลูกค้า</div>
                            <div className="rcontent">
                                <p>ชื่อ-นามสกุล</p>
                                <input type="text" placeholder="ชื่อ-นามสกุล"/>
                                <p>อีเมล</p>
                                <input type="email" placeholder="อีเมล"/>
                            </div>
                        </div>
                        <div className="finish">
                            <button>พิมพ์ใบสั่งซื้อ</button>
                            <button>จบการขาย</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}