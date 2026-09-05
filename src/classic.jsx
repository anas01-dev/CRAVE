import { useEffect, useRef } from 'react';
import selfie from './assets/burgerselfie.png'
import pic1 from './assets/about-1.png'
import pic2 from './assets/about-2.png'
import pic3 from './assets/about-3.png'

function Classic(){
    const classicRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target); // play once, never again
            }
        },
        { threshold: 0.3 }
        );

        if (classicRef.current) observer.observe(classicRef.current);
        return () => observer.disconnect();
    }, []);


    function unavailable(){
        alert("This is a test project, you can't order on this site :(")
    }

    return(
        <section className="classic" ref={classicRef} id='classic'>
            <h1>TOP CLASSIC</h1>
            <h2><span className="pop-1">JUICY</span> <span className="pop-2">CHEESY</span></h2>
            <h2><span className="pop-1">FULLY</span> <span className="pop-2">LOADED</span></h2>
            <p>CRAV is back and bolder than ever. Honoring our rich roots, we bring you the </p>
            <p>ultimate smashed experience fully loaded, hot, and crafted fresh.</p>
            <button onClick={unavailable}>ORDER NOW</button>
            <div className="imgcont">
                <img src={pic1} alt="" />
                <img src={pic2} alt="" />
                <img src={pic3} alt="" />
            </div>
            <div className='sticker-container'>
                <div className="sticker-main">
                    <div className="sticker-lighting">
                        <img src={selfie} alt="" className='sticker-image'/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Classic