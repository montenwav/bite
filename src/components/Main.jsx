import Header from './Header.jsx'

export default function Main() {
    return (
        <main>
            <Header />
            <Wallpaper />
        </main>
    )
}

const Wallpaper = () => {
    return (
        <div className='main_wallpaper'>
            {/* <img
                src="//bitetoothpastebits.com/cdn/shop/files/v2-home-hero-mobile.jpg?v=1700002377&width=780"
                alt="a person holding a can"
                // srcSet="//bitetoothpastebits.com/cdn/shop/files/v2-home-hero-mobile.jpg?v=1700002377&width=375 375w, //bitetoothpastebits.com/cdn/shop/files/v2-home-hero-mobile.jpg?v=1700002377&width=550 550w, //bitetoothpastebits.com/cdn/shop/files/v2-home-hero-mobile.jpg?v=1700002377&width=750 750w"
                width={780}
                height={1326.0}
                className="phone_wallpaper"
                sizes="100vw"
            /> */}
            <img
                src="//bitetoothpastebits.com/cdn/shop/files/hp-home-hero-desktop-1.jpg?v=1705612565&width=3840"
                alt="a person holding a can"
                // srcSet="//bitetoothpastebits.com/cdn/shop/files/hp-home-hero-desktop-1.jpg?v=1705612565&width=375 375w, //bitetoothpastebits.com/cdn/shop/files/hp-home-hero-desktop-1.jpg?v=1705612565&width=550 550w, //bitetoothpastebits.com/cdn/shop/files/hp-home-hero-desktop-1.jpg?v=1705612565&width=750 750w, //bitetoothpastebits.com/cdn/shop/files/hp-home-hero-desktop-1.jpg?v=1705612565&width=1100 1100w, //bitetoothpastebits.com/cdn/shop/files/hp-home-hero-desktop-1.jpg?v=1705612565&width=1500 1500w, //bitetoothpastebits.com/cdn/shop/files/hp-home-hero-desktop-1.jpg?v=1705612565&width=1780 1780w, //bitetoothpastebits.com/cdn/shop/files/hp-home-hero-desktop-1.jpg?v=1705612565&width=2000 2000w, //bitetoothpastebits.com/cdn/shop/files/hp-home-hero-desktop-1.jpg?v=1705612565&width=3000 3000w, //bitetoothpastebits.com/cdn/shop/files/hp-home-hero-desktop-1.jpg?v=1705612565&width=3840 3840w"
                className="desktop_wallpaper"
            />

            <div className='main_content'>
                <h1>A better way to brush your teeth.</h1>
                <p>Toothpaste Bits without the plastic tubes or harsh chemicals that work.</p>
                <button className='button'>SHOP NOW</button>
            </div>
        </div>
    )
}