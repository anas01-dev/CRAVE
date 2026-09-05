import lettuce from './assets/lettuce.png'
import tomato from './assets/tomato.png'
import cheese from './assets/cheese.png'
import meat from './assets/meat.png'

function Footer(){
    return(
        <footer className="footer" id='footer'>
            <div className="footer-top">
                <nav className="footer-nav">
                    <a href="#hero">HOME</a>
                    <a href="#classic">ABOUT</a>
                    <a href="#about">EXPERIENCE</a>
                    <a href="#footer">FOOTER</a>
                </nav>
                <p className="footer-rights">© 2026 CRAV — ALL RIGHTS RESERVED</p>
            </div>

            <div className="footer-divider"></div>

            <p className="footer-tagline">SMASHED PATTIES · TOASTED BUNS · EST. 1997</p>

            <div className="footer-wordmark-wrap">
                <h1 className="footer-wordmark">CRAVE</h1>
            </div>
        </footer>
    )
}

export default Footer