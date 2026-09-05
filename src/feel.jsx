import boy from './assets/burger-boy-removebg-preview.png'
import girlEating from './assets/cta.png'

function Feel(){
    function unavailable(){
        alert("This is a test project, you can't order on this site :(")
    }

    return(
        <section className="feel" id='feel'>
            <div className="feel-content">
                <p className="feel-tag">FEEL IT</p>
                <h1>FEEL THE</h1>
                <h1>CHANGE</h1>
                <p className="feel-desc">
                    Smashed for the bold, built for the hungry. Dive into a
                    legendary craft experience where every crispy edge and
                    juicy layer rules.
                </p>
                <button className="order-btn" onClick={unavailable}>ORDER NOW</button>
            </div>

            <img src={boy} className="feel-boy" alt="Burger boy illustration" />

            <div className="feel-photo">
                <img src={girlEating} alt="Woman eating a burger" />
            </div>
        </section>
    )
}

export default Feel