export default function ShopByCategory() {
    return (
        <section className="ShopByCategory">
            <h1>Shop By Category</h1>
            <div className="slider_flex">
                <ShopBySlider categotyName='ORAL CARE'
                    src='/src/images/shopby/hp-shop-by-category-oral-care.webp'
                />
                <ShopBySlider categotyName='SETS'
                    src='/src/images/shopby/hp-shop-by-category-sets.webp'
                />
                <ShopBySlider categotyName='BODY CARE'
                    src='/src/images/shopby/hp-shop-by-category-body-care.webp'
                />
            </div>
        </section>
    )
}

const ShopBySlider = ({ categotyName, src }) => {
    return (
        <div className='cards_container'>
            <div className="card_image">
                <h4>{categotyName}</h4>
                <img src={src} alt={categotyName} />
            </div>
            <button className="ShopByButton">SHOP NOW</button>
        </div>
    )
}