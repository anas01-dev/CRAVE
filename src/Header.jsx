import { useState } from 'react'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    return(
        <header>
            <h1>CRAVE</h1>
            <div>
                <button
                    className="hamburger"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className="text-wrap">
                        <span className="text-original">
                            {menuOpen ? 'CLOSE ✕' : 'MENU ☰'}
                        </span>
                        <span className="text-hover">
                            {menuOpen ? 'CLOSE ✕' : 'MENU ☰'}
                        </span>
                    </span>
                </button>
            </div>

            {menuOpen && (
                <nav className="dropdown-menu">
                    <a href="#hero" onClick={() => setMenuOpen(false)}>HOME</a>
                    <a href="#classic" onClick={() => setMenuOpen(false)}>ABOUT</a>
                    <a href="#about" onClick={() => setMenuOpen(false)}>EXPERIENCE</a>
                    <a href="#footer" onClick={() => setMenuOpen(false)}>FOOTER</a>

                    <p className="dropdown-menu-est">EST. 1997 — NAVARRA, ESPAÑA</p>
                </nav>
            )}
        </header>
    )
}

export default Header