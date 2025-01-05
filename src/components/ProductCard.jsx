import '../css/product.css';

export default function ProductCard({img, name, price, id}) {
    
    return(
        <div className='productCard'>
            <img src={img} alt="" />
            <p className='productText'>{name}</p>
            <p className='priceText'>{price} บาท</p>
            <a href="/products">ดูสินค้า</a>
        </div>
    )
}