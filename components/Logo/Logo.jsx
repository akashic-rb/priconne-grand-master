import { useState, useEffect, useRef, useMemo } from "react"
import { ScrollLogoWrapper, StyledImage, Wrapper } from "./Logo.style"
import LogoGm from "../../assets/logo_gm.png"
import useWindowSize from "../../hooks/useWindowSize"

const topSection = typeof window !== "undefined" ? 57.78 / 100 * window.innerWidth : 0

export const Logo = () => {
    return (
        <Wrapper style={{width: "30rem", zIndex: "9999"}}>
            <StyledImage src={LogoGm.src} alt="Logo"></StyledImage>
        </Wrapper>
    )
}

export const LogoOnScroll = () => {
    const [scrollPosition, setScrollPosition] = useState(0)
    const ref = useRef()

    const handleScroll = () => {
        setScrollPosition(window.scrollY)
    }
    
    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        if(scrollPosition < topSection) {
            ref.current.classList.remove("fadeIn")
            ref.current.classList.add("fadeOut")
        }
        if(scrollPosition > topSection) {
            ref.current.classList.remove("fadeOut")
            ref.current.classList.add("fadeIn")
        }
    }, [scrollPosition])

    return (
        <ScrollLogoWrapper >
            <Wrapper ref={ref} className="">
                <StyledImage src={LogoGm.src} alt="Logo"></StyledImage>
            </Wrapper>
        </ScrollLogoWrapper>
    )
}