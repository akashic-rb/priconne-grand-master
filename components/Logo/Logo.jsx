import { useState, useEffect, useRef, useMemo } from "react"
import { ScrollLogoWrapper, StyledImage, Wrapper } from "./Logo.style"
import LogoGm from "../../assets/logo_gm.png"
import useWindowSize from "../../hooks/useWindowSize"

export const Logo = () => {
    return (
        <Wrapper>
            <StyledImage src={LogoGm.src} alt="Logo"></StyledImage>
        </Wrapper>
    )
}

export const LogoOnScroll = () => {
    const { width } = useWindowSize()
    const [scrollPosition, setScrollPosition] = useState(0)
    const ref = useRef()
    const topSection = typeof window !== "undefined" ? 57.78 / 100 * window.innerWidth : 0


    const handleScroll = () => {
        setScrollPosition(window.scrollY)
    }
    
    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        if(scrollPosition < topSection) {
            
        }
        if(scrollPosition > topSection) {

        }
    }, [scrollPosition])

    return (
        <ScrollLogoWrapper ref={ref} >
            <Wrapper className="fadeOut">
                <StyledImage src={LogoGm.src} alt="Logo"></StyledImage>
            </Wrapper>
        </ScrollLogoWrapper>
    )
}