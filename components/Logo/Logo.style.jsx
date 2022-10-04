import styled from "styled-components";

export const Wrapper = styled.h1`
    transition: opacity 0;
    @media (min-width: 768px) {
        position: absolute;
        width: 23.1rem;
        top: 0;
        left: 0;
        margin: 0;
    }
`

export const StyledImage = styled.img`
    width: 100%;
`

export const ScrollLogoWrapper = styled.div`
    .fadeIn {
        transition: all .3s ease;
        animation: fadeIn .3s;
        opacity: 1;
    }
    .fadeOut {
        transition: all .3s ease;
        animation: fadeOut .3s;
        opacity: 0;
    }
    @keyframes fadeIn {
        0% {
            transform: translateY(2rem);
        }
        100% {
            transform: translateY(0);
        }
    }
    @keyframes fadeOut {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(2rem);
        }
    }
`