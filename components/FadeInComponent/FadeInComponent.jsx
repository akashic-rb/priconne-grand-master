/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react"

const FadeInComponent = ({ref, children}) => {
    const [isObserved, setIsObserved] = useState(false)
    const domRef = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    setIsObserved(entry.isIntersecting)
                }
            })
        })

        observer.observe(domRef.current)

        return () => observer.unobserve(domRef.current)
    }, [])

    return (
        <div ref={domRef} className={`fade-in ${isObserved ? "is-visible" : ""}`}>
            { children }
        </div>
    )
}

export default FadeInComponent