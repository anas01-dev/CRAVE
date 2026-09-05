import { useEffect, useRef, useState } from 'react'
import burgeyH from './assets/burgerwithhands.png'

function Experience() {
    const sectionRef = useRef(null)
    const [inView, setInView] = useState(false)
    const leftEyeRef = useRef(null)
    const rightEyeRef = useRef(null)
    const [leftPupil, setLeftPupil] = useState({ x: 0, y: 0 })
    const [rightPupil, setRightPupil] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.3 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        const maxDist = 8

        const getPupilOffset = (eyeEl, mouseX, mouseY) => {
            const rect = eyeEl.getBoundingClientRect()
            const eyeCenterX = rect.left + rect.width / 2
            const eyeCenterY = rect.top + rect.height / 2
            const dx = mouseX - eyeCenterX
            const dy = mouseY - eyeCenterY
            const angle = Math.atan2(dy, dx)
            const distance = Math.min(maxDist, Math.hypot(dx, dy) / 10)
            return {
                x: Math.cos(angle) * distance,
                y: Math.sin(angle) * distance
            }
        }

        const handleMouseMove = (e) => {
            if (leftEyeRef.current) {
                setLeftPupil(getPupilOffset(leftEyeRef.current, e.clientX, e.clientY))
            }
            if (rightEyeRef.current) {
                setRightPupil(getPupilOffset(rightEyeRef.current, e.clientX, e.clientY))
            }
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <div className={`about ${inView ? 'in-view' : ''}`} ref={sectionRef} id='about'>
            <div className="about-wave"></div>
            <p>EXPERIENCE</p>
            <h1><span className="pop-1">FOOD</span> <span className="pop-2">THAT</span></h1>
            <h1><span className="pop-3">FEELS</span> <span className="pop-4">GOOD</span></h1>

            <div className="burger-wrap">
                <img src={burgeyH} alt="" className="burger-img" />
                <div className="burger-eyes">
                    <div className="eye-group">
                        <div className="brow"></div>
                        <div className="eye eye-left" ref={leftEyeRef}>
                            <div
                                className="pupil"
                                style={{ transform: `translate(${leftPupil.x}px, ${leftPupil.y}px)` }}
                            />
                        </div>
                    </div>
                    <div className="eye-group">
                        <div className="brow"></div>
                        <div className="eye eye-right" ref={rightEyeRef}>
                            <div
                                className="pupil"
                                style={{ transform: `translate(${rightPupil.x}px, ${rightPupil.y}px)` }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-footer-text left">
                <span>450 KCAL</span>
                <span>HIGH PROTEIN</span>
                <span>FRESH INGREDIENTS</span>
            </div>
            <div className="about-footer-text right">
                <span>100% ORGANIC</span>
                <span>ZERO GUILT</span>
                <span>TRUE TASTE</span>
            </div>
        </div>
    )
}

export default Experience
