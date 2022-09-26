import { StyledImage, Wrapper } from "./Logo.style"
import LogoGm from "../../assets/logo_gm.png"

const Logo = () => {
    return (
        <Wrapper>
            <StyledImage src={LogoGm.src} alt="Logo"></StyledImage>
        </Wrapper>
    )
}

export default Logo