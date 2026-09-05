import { useEffect, useRef } from 'react'
import lettuce from './assets/lettuce.png'
import tomato from './assets/tomato.png'
import cheese from './assets/cheese.png'
import meat from './assets/meat.png'

function Quality(){
    const headingsRef = useRef([])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal')
                        observer.unobserve(entry.target) // remove if you want it to replay every scroll
                    }
                })
            },
            {
                threshold: 0.2, // fires once 20% of the h1 is visible
            }
        )

        headingsRef.current.forEach((el) => {
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [])

    return(
        <section className="quality">
            <img src={lettuce} className="quality-img img-lettuce" alt="" />
            <img src={tomato} className="quality-img img-tomato" alt="" />
            <img src={cheese} className="quality-img img-cheese" alt="" />
            <img src={meat} className="quality-img img-meat" alt="" />

            <p>PURE QUALITY</p>
            <h1 ref={(el) => (headingsRef.current[0] = el)} className="rise-up">EVERY LAYER</h1>
            <h1 ref={(el) => (headingsRef.current[1] = el)} className="rise-up">PACKED WITH</h1>
            <h1 ref={(el) => (headingsRef.current[2] = el)} className="rise-up">SIGNATURE</h1>
            <h1 ref={(el) => (headingsRef.current[3] = el)} className="rise-up">FLAVOR</h1>
        </section>
    )
}

export default Quality