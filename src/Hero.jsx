import burger from './assets/burgerH.png'
function Hero(){
    return(
        <section className="hero" id='hero'>
            <div className="hero-text">
                <h1><span className="pop-1">THE</span> <span className="pop-2">BURGER</span></h1>
                <span className="badge badge-1">SMASHED<br/>FRESH</span>
                <span className="badge badge-2">BOLD<br/>FLAVOR</span>
            </div>

            <img className="hero-img" src={burger} alt="The Burger" />

            <h2>CRAVE</h2>

            <div className="hero-caption left">
                <p>Smashed hot on the flat top, our prime patties lock in ultimate juiciness under a caramelized crust.</p>
            </div>
            <div className="hero-caption right">
                <p>Topped with melted cheddar and our signature chili honey glaze crafted to satisfy your cravings since 1997.</p>
            </div>
        </section>
    )
}

export default Hero